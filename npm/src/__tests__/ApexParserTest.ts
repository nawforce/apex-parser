import { ApexLexer } from "../ApexLexer";
import {
    ApexParser, LiteralContext, Arth1ExpressionContext, CompilationUnitContext,
    QueryContext, SoslLiteralContext, StatementContext, TriggerUnitContext
} from "../ApexParser";
import { CaseInsensitiveInputStream } from "../CaseInsensitiveInputStream"
import { ANTLRErrorListener, CommonTokenStream, RecognitionException, Recognizer, Token } from 'antlr4ts';
import { ThrowingErrorListener, SyntaxException } from "../ThrowingErrorListener";

class SyntaxErrorCounter implements ANTLRErrorListener<Token> {
    numErrors = 0

    syntaxError(recognizer: Recognizer<Token, any>,
        offendingSymbol: Token, line: number, charPositionInLine: number, msg: string,
        e: RecognitionException | undefined): any {
        this.numErrors += 1;
    }

    getNumErrors(): number {
        return this.numErrors;
    }
}

function createParser(userData: string, input: string): [ApexParser, SyntaxErrorCounter] {
    const lexer = new ApexLexer(new CaseInsensitiveInputStream(userData, input))
    const tokens = new CommonTokenStream(lexer);
    const parser = new ApexParser(tokens)

    parser.removeErrorListeners()
    const errorCounter = new SyntaxErrorCounter();
    parser.addErrorListener(errorCounter);

    return [parser, errorCounter];
}

test('Boolean Literal', () => {

    const [parser, errorCounter] = createParser("test.cls", "true")
    const context = parser.literal()

    expect(errorCounter.getNumErrors()).toEqual(0)
    expect(context).toBeInstanceOf(LiteralContext)
    expect(context.BooleanLiteral()).toBeTruthy()
    expect(context.BooleanLiteral().text).toBe("true")
})

test('Expression', () => {
    const [parser, errorCounter] = createParser("test.cls", "a * 5")
    const context = parser.expression()

    expect(errorCounter.getNumErrors()).toEqual(0)
    expect(context).toBeInstanceOf(Arth1ExpressionContext)
    const arthExpression = context as Arth1ExpressionContext
    expect(arthExpression.expression().length).toBe(2)
})

test('Compilation Unit', () => {
    const [parser, errorCounter] = createParser("test.cls", "public class Hello {}")

    const context = parser.compilationUnit()

    expect(context).toBeInstanceOf(CompilationUnitContext)
    expect(errorCounter.getNumErrors()).toEqual(0)
})

test('Compilation Unit (case insensitive)', () => {
    const [parser, errorCounter] = createParser("test.cls", "Public CLASS Hello {}")

    const context = parser.compilationUnit()

    expect(context).toBeInstanceOf(CompilationUnitContext)
    expect(errorCounter.getNumErrors()).toEqual(0)
})

test('Compilation Unit (bug test)', () => {
    const [parser, errorCounter] = createParser("test.cls", `public class Hello {
        public testMethod void func() {
            System.runAs(u) {
            }
        }
    }`)
    const context = parser.compilationUnit()

    expect(context).toBeInstanceOf(CompilationUnitContext)
    expect(errorCounter.getNumErrors()).toEqual(0)
})

test('Compilation Unit (inline SOQL)', () => {
    const [parser, errorCounter] = createParser("test.cls", `public class Hello {
        public void func() {
            List<Account> accounts = [Select Id from Accounts];
        }
    }`)
    const context = parser.compilationUnit()

    expect(context).toBeInstanceOf(CompilationUnitContext)
    expect(errorCounter.getNumErrors()).toEqual(0)
})

test('Compilation Unit (throwing errors)', () => {
    const [parser, errorCounter] = createParser("test.cls", "public class Hello {")

    parser.removeErrorListeners()
    parser.addErrorListener(new ThrowingErrorListener());

    try {
        parser.compilationUnit()
        expect(true).toBe(false)
    } catch (ex) {
        expect(ex).toBeInstanceOf(SyntaxException)
    }
})

test('Trigger Unit', () => {
    const [parser, errorCounter] = createParser("test.trigger", "trigger test on Account (before update, after update) {}")
    const context = parser.triggerUnit()

    expect(context).toBeInstanceOf(TriggerUnitContext)
    expect(errorCounter.getNumErrors()).toEqual(0)
})

test('SOQL Query', () => {
    const [parser, errorCounter] = createParser("test.soql", "Select Id from Account")
    const context = parser.query()

    expect(context).toBeInstanceOf(QueryContext)
    expect(errorCounter.getNumErrors()).toEqual(0)
})

test('SOQL Query Using Field function', () => {
    const [parser, errorCounter] = createParser("test.soql", "Select Fields(All) from Account")

    const context = parser.query()

    expect(context).toBeInstanceOf(QueryContext)
    expect(errorCounter.getNumErrors()).toEqual(0)
})

test('SOSL Query', () => {
    const [parser, errorCounter] = createParser("test.sosl", "[Find {something} RETURNING Account]")

    const context = parser.soslLiteral()

    expect(context).toBeInstanceOf(SoslLiteralContext)
    expect(errorCounter.getNumErrors()).toEqual(0)
})

test('CurrencyLiteral', () => {
    const [parser, errorCounter] = createParser("test.soql", "SELECT Id FROM Account WHERE Amount > USD100.01 AND Amount < USD200")

    const context = parser.query()

    expect(context).toBeInstanceOf(QueryContext)
    expect(errorCounter.getNumErrors()).toEqual(0)
})

test('IdentifiersThatCouldBeCurrencyLiterals', () => {
    const [parser, errorCounter] = createParser("test.apex", "USD100.name = 'name';")

    const context = parser.statement()

    expect(context).toBeInstanceOf(StatementContext)
    expect(errorCounter.getNumErrors()).toEqual(0)
})

test('DateTimeLiteral', () => {
    const [parser, errorCounter] = createParser("test.soql", "SELECT Name, (SELECT Id FROM Account WHERE createdDate > 2020-01-01T12:00:00Z) FROM Opportunity")

    const context = parser.query()

    expect(context).toBeInstanceOf(QueryContext)
    expect(errorCounter.getNumErrors()).toEqual(0)
})

test('testNegativeNumericLiteral', () => {
    const [parser, errorCounter] = createParser("test.soql", "SELECT Name FROM Opportunity WHERE Value = -100.123")

    const context = parser.query()

    expect(context).toBeInstanceOf(QueryContext)
    expect(errorCounter.getNumErrors()).toEqual(0)
})

test('testLastQuarterKeyword', () => {
    const [parser, errorCounter] = createParser("test.soql", "SELECT Id FROM Account WHERE DueDate = LAST_QUARTER")

    const context = parser.query()

    expect(context).toBeInstanceOf(QueryContext)
    expect(errorCounter.getNumErrors()).toEqual(0)
})

test('testSemiAllowedAsWhileBody', () => {
    const [parser, errorCounter] = createParser("test.apex", "while (x++ < 10 && !(y-- < 0));")

    const context = parser.statement()

    expect(context).toBeInstanceOf(StatementContext)
    expect(errorCounter.getNumErrors()).toEqual(0)
})

test('testSemiAllowedAsForBody', () => {
    const [parser, errorCounter] = createParser("test.apex", "for(x=0; x<10; x++);")

    const context = parser.statement()

    expect(context).toBeInstanceOf(StatementContext)
    expect(errorCounter.getNumErrors()).toEqual(0)
})

test('testSemiDisallowedAsGeneralStatement', () => {
    const [parser, errorCounter] = createParser("test.apex", "if (x == 3); else { ; }")

    const context = parser.statement()

    expect(context).toBeInstanceOf(StatementContext)
    expect(errorCounter.getNumErrors()).toEqual(1)
})

test('testWhenLiteralParens', () => {
    const [parser, errorCounter] = createParser("test.apex", `
    switch on (x) {
        when 1 { return 1; }
        when ((2)) { return 2; }
        when (3), (4) { return 3; }
     }`);

    const context = parser.statement()

    expect(context).toBeInstanceOf(StatementContext)
    expect(errorCounter.getNumErrors()).toEqual(0)
})
