import { ApexLexer } from "../ApexLexer";
import { ApexParser, LiteralContext, Arth1ExpressionContext } from "../ApexParser";
import { CaseInsensitiveInputStream } from "../CaseInsensitiveInputStream"
import { CommonTokenStream } from 'antlr4ts';
import { ThrowingErrorListener, SyntaxException } from "../ThrowingErrorListener";

test('Boolean Literal', () => {
    let lexer = new ApexLexer(new CaseInsensitiveInputStream("test.cls", "true"))
    let tokens  = new CommonTokenStream(lexer);

    let parser = new ApexParser(tokens)
    let context = parser.literal()

    expect(context).toBeInstanceOf(LiteralContext)
    expect(context.BooleanLiteral()).toBeTruthy()
    expect(context.BooleanLiteral().text).toBe("true")
})

test('Expression', () => {
    let lexer = new ApexLexer(new CaseInsensitiveInputStream("test.cls", "a * 5"))
    let tokens  = new CommonTokenStream(lexer);

    let parser = new ApexParser(tokens)
    let context = parser.expression()

    expect(context).toBeInstanceOf(Arth1ExpressionContext)

    let arthExpression = context as Arth1ExpressionContext
    expect(arthExpression.expression().length).toBe(2)
})

test('Compilation Unit', () => {
    let lexer = new ApexLexer(new CaseInsensitiveInputStream("test.cls", "public class Hello {}"))
    let tokens  = new CommonTokenStream(lexer);

    let parser = new ApexParser(tokens)
    let context = parser.compilationUnit()

    expect(context.typeDeclaration).toBeTruthy()
})

test('Compilation Unit (throwing errors)', () => {

    let lexer = new ApexLexer(new CaseInsensitiveInputStream("test.cls", "public class Hello {"))
    let tokens  = new CommonTokenStream(lexer);

    let parser = new ApexParser(tokens)

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
    let lexer = new ApexLexer(new CaseInsensitiveInputStream("test.trigger", "trigger test on Account (before update, after update) {}"))
    let tokens  = new CommonTokenStream(lexer);

    let parser = new ApexParser(tokens)
    let context = parser.triggerUnit()

    expect(context).toBeTruthy()
})
