import { ApexLexer } from "../ApexLexer";
import { ApexParser, LiteralContext, Arth1ExpressionContext } from "../ApexParser";
import { CaseInsensitiveInputStream } from "../CaseInsensitiveInputStream"
import { CommonTokenStream } from 'antlr4ts';

test('Boolean Literal', () => {
    let lexer = new ApexLexer(new CaseInsensitiveInputStream("true"))
    let tokens  = new CommonTokenStream(lexer);

    let parser = new ApexParser(tokens)
    let context = parser.literal()

    expect(context).toBeInstanceOf(LiteralContext)
    expect(context.BooleanLiteral()).toBeTruthy()
    expect(context.BooleanLiteral().text).toBe("true")
})

test('Expression', () => {
    let lexer = new ApexLexer(new CaseInsensitiveInputStream("a * 5"))
    let tokens  = new CommonTokenStream(lexer);

    let parser = new ApexParser(tokens)
    let context = parser.expression()

    expect(context).toBeInstanceOf(Arth1ExpressionContext)

    let arthExpression = context as Arth1ExpressionContext
    expect(arthExpression.expression().length).toBe(2)
})

test('Compilation Unit', () => {
    let lexer = new ApexLexer(new CaseInsensitiveInputStream("public class Hello {}"))
    let tokens  = new CommonTokenStream(lexer);

    let parser = new ApexParser(tokens)
    let context = parser.compilationUnit()

    expect(context.typeDeclaration).toBeTruthy()
})
