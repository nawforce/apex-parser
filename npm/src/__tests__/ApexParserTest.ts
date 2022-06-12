import { ApexLexer } from "../ApexLexer";
import { ApexParser, LiteralContext, Arth1ExpressionContext } from "../ApexParser";
import { CaseInsensitiveInputStream } from "../CaseInsensitiveInputStream"
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { ThrowingErrorListener, SyntaxException } from "../ThrowingErrorListener";

test('Boolean Literal', () => {
    const lexer = new ApexLexer(new CaseInsensitiveInputStream(CharStreams.fromString("true")));
    const tokens  = new CommonTokenStream(lexer);

    const parser = new ApexParser(tokens)
    const context = parser.literal()

    expect(context).toBeInstanceOf(LiteralContext)
    expect(context.BooleanLiteral()).toBeTruthy()
    expect(context.BooleanLiteral().text).toBe("true")
})

test('Expression', () => {
    const lexer = new ApexLexer(new CaseInsensitiveInputStream(CharStreams.fromString("a * 5")));
    const tokens  = new CommonTokenStream(lexer);

    const parser = new ApexParser(tokens)
    const context = parser.expression()

    expect(context).toBeInstanceOf(Arth1ExpressionContext)

    const arthExpression = context as Arth1ExpressionContext
    expect(arthExpression.expression().length).toBe(2)
})

test('Compilation Unit', () => {
    const lexer = new ApexLexer(new CaseInsensitiveInputStream(CharStreams.fromString( "public class Hello {}")));
    const tokens  = new CommonTokenStream(lexer);

    const parser = new ApexParser(tokens)
    const context = parser.compilationUnit()

    expect(context.typeDeclaration).toBeTruthy()
})

test('Compilation Unit (case insensitive)', () => {
    const lexer = new ApexLexer(new CaseInsensitiveInputStream(CharStreams.fromString( "Public CLASS Hello {}")));
    const tokens  = new CommonTokenStream(lexer);

    const parser = new ApexParser(tokens)
    const context = parser.compilationUnit()

    expect(context.typeDeclaration).toBeTruthy()
})

test('Compilation Unit (bug test)', () => {
    const lexer = new ApexLexer(new CaseInsensitiveInputStream(CharStreams.fromString(`public class Hello {
        public testMethod void func() {
            System.runAs(u) {
            }
        }
    }`)));
    const tokens  = new CommonTokenStream(lexer);

    const parser = new ApexParser(tokens)
    const context = parser.compilationUnit()

    expect(context.typeDeclaration).toBeTruthy()
})

test('Compilation Unit (inline SOQL)', () => {
    const lexer = new ApexLexer(new CaseInsensitiveInputStream(CharStreams.fromString( `public class Hello {
        public void func() {
            List<Account> accounts = [Select Id from Accounts];
        }
    }`)));
    const tokens  = new CommonTokenStream(lexer);

    const parser = new ApexParser(tokens)
    const context = parser.compilationUnit()

    expect(context.typeDeclaration).toBeTruthy()
})

test('Compilation Unit (throwing errors)', () => {
    const lexer = new ApexLexer(new CaseInsensitiveInputStream(CharStreams.fromString("public class Hello {")));
    const tokens  = new CommonTokenStream(lexer);

    const parser = new ApexParser(tokens)

    parser.removeErrorListeners()
    parser.addErrorListener(new ThrowingErrorListener());

    try {
        parser.compilationUnit()
        expect(true).toBe(false)
    }  catch (ex) {
        expect(ex).toBeInstanceOf(SyntaxException)
    }
})

test('Trigger Unit', () => {
    const lexer = new ApexLexer(new CaseInsensitiveInputStream(CharStreams.fromString("trigger test on Account (before update, after update) {}")));
    const tokens  = new CommonTokenStream(lexer);

    const parser = new ApexParser(tokens)
    const context = parser.triggerUnit()

    expect(context).toBeTruthy()
})

test('SOQL Query', () => {
    const lexer = new ApexLexer(new CaseInsensitiveInputStream(CharStreams.fromString("Select Id from Account")));
    const tokens  = new CommonTokenStream(lexer);

    const parser = new ApexParser(tokens)
    const context = parser.query()

    expect(context).toBeTruthy()
})

test('SOQL Query Using Field function', () => {
    const lexer = new ApexLexer(new CaseInsensitiveInputStream(CharStreams.fromString("Select Fields(All) from Account")));
    const tokens  = new CommonTokenStream(lexer);

    const parser = new ApexParser(tokens)
    const context = parser.query()

    expect(context).toBeTruthy()
})


test('SOSL Query', () => {
    const lexer = new ApexLexer(new CaseInsensitiveInputStream(CharStreams.fromString("[Find {something} RETURNING Account]")));
    const tokens  = new CommonTokenStream(lexer);

    const parser = new ApexParser(tokens)
    const context = parser.soslLiteral()

    expect(context).toBeTruthy()
})

test('CurrencyLiteral', () => {
    const lexer = new ApexLexer(new CaseInsensitiveInputStream(CharStreams.fromString("SELECT Id FROM Account WHERE Amount > USD100.01 AND Amount < USD200")));
    const tokens  = new CommonTokenStream(lexer);

    const parser = new ApexParser(tokens)
    const context = parser.query()

    expect(context).toBeTruthy()
})

test('IdentifiersThatCouldBeCurrencyLiterals', () => {
    const lexer = new ApexLexer(new CaseInsensitiveInputStream(CharStreams.fromString( "USD100.name = 'name';")));
    const tokens  = new CommonTokenStream(lexer);

    const parser = new ApexParser(tokens)
    const context = parser.statement()

    expect(context).toBeTruthy()
})

test('DateTimeLiteral', () => {
    const lexer = new ApexLexer(new CaseInsensitiveInputStream(CharStreams.fromString("SELECT Name, (SELECT Id FROM Account WHERE createdDate > 2020-01-01T12:00:00Z) FROM Opportunity")));
    const tokens  = new CommonTokenStream(lexer);

    const parser = new ApexParser(tokens)
    const context = parser.query()

    expect(context).toBeTruthy()
})

test('testNegativeNumericLiteral', () => {
    const lexer = new ApexLexer(new CaseInsensitiveInputStream(CharStreams.fromString("SELECT Name FROM Opportunity WHERE Value = -100.123")));
    const tokens  = new CommonTokenStream(lexer);

    const parser = new ApexParser(tokens)
    const context = parser.query()

    expect(context).toBeTruthy()
})

