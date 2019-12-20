import { ApexLexer } from "./ApexLexer";
import { ApexParser } from "./ApexParser";
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';

export default class ApexParserFactory {

    parse(data: string) {
        let lexer = new ApexLexer(new ANTLRInputStream(data))
        let tokens  = new CommonTokenStream(lexer);
        let parser = new ApexParser(tokens)
        let tree = parser.compilationUnit()
        console.dir(tree)
    }
    
}