import { ANTLRErrorListener, CommonTokenStream, RecognitionException, Recognizer, Token } from "antlr4ts";
import { ApexLexer } from "../ApexLexer";
import { ApexParser } from "../ApexParser";
import { CaseInsensitiveInputStream } from "../CaseInsensitiveInputStream";

export class SyntaxErrorCounter implements ANTLRErrorListener<Token> {
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

export function createParser(userData: string, input: string): [ApexParser, SyntaxErrorCounter] {
    const lexer = new ApexLexer(new CaseInsensitiveInputStream(userData, input))
    const tokens = new CommonTokenStream(lexer);
    const parser = new ApexParser(tokens)

    parser.removeErrorListeners()
    const errorCounter = new SyntaxErrorCounter();
    parser.addErrorListener(errorCounter);

    return [parser, errorCounter];
}
