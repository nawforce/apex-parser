import { ApexLexer } from "../ApexLexer";
import { ApexParserListener } from "../ApexParserListener";
import { ApexParser } from "../ApexParser";
import { CaseInsensitiveInputStream } from "../CaseInsensitiveInputStream"
import { CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { ThrowingErrorListener } from "../ThrowingErrorListener";

class TestListener implements ApexParserListener {
    public methodCount = 0

    enterMethodDeclaration(/*ctx: MethodDeclarationContext*/): void {
        this.methodCount += 1;
    }
}

test('Listener Generates Events', () => {

    const lexer = new ApexLexer(new CaseInsensitiveInputStream("test.cls", "public class Hello { public void func(){} }"))
    const tokens = new CommonTokenStream(lexer);

    const parser = new ApexParser(tokens)

    parser.removeErrorListeners()
    parser.addErrorListener(new ThrowingErrorListener());

    const cu = parser.compilationUnit()
    const listener = new TestListener()
    ParseTreeWalker.DEFAULT.walk(listener as ApexParserListener, cu)

    expect(listener.methodCount).toBe(1)
})
