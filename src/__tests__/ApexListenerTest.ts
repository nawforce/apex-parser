import { ApexLexer } from "../ApexLexer";
import { ApexParserListener } from "../ApexParserListener";
import { ApexParser, MethodDeclarationContext } from "../ApexParser";
import { CaseInsensitiveInputStream } from "../CaseInsensitiveInputStream"
import { CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { ThrowingErrorListener } from "../ThrowingErrorListener";

class TestListener implements ApexParserListener {
    public methodCount = 0

    enterMethodDeclaration(ctx: MethodDeclarationContext): void {
        this.methodCount += 1;
    }
}

test('Listener Generates Events', () => {

    let lexer = new ApexLexer(new CaseInsensitiveInputStream("test.cls", "public class Hello {}"))
    let tokens = new CommonTokenStream(lexer);

    let parser = new ApexParser(tokens)

    parser.removeErrorListeners()
    parser.addErrorListener(new ThrowingErrorListener());

    const cu = parser.compilationUnit()
    const listener = new TestListener()
    ParseTreeWalker.DEFAULT.walk(listener as ApexParserListener, cu)

    expect(listener.methodCount == 1)
})
