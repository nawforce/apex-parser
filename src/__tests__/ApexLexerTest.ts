import { ApexLexer } from "../ApexLexer";
import { CaseInsensitiveInputStream } from "../CaseInsensitiveInputStream"
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';

test('Lexer generates tokens', () => {
    let lexer = new ApexLexer(new ANTLRInputStream("public class Hello {}"))
    let tokens  = new CommonTokenStream(lexer);
    expect(tokens.getNumberOfOnChannelTokens()).toBe(6)
})

test('Case insensitivity', () => {
    let lexer = new ApexLexer(new CaseInsensitiveInputStream("public"))
    let tokens  = new CommonTokenStream(lexer);
    expect(tokens.getNumberOfOnChannelTokens()).toBe(2)
})

test('Case insensitivity (upper case)', () => {
    let lexer = new ApexLexer(new CaseInsensitiveInputStream("PUBLIC"))
    let tokens  = new CommonTokenStream(lexer);
    expect(tokens.getNumberOfOnChannelTokens()).toBe(2)
})

test('Case insensitivity (mixed case)', () => {
    let lexer = new ApexLexer(new CaseInsensitiveInputStream("PuBliC"))
    let tokens  = new CommonTokenStream(lexer);
    expect(tokens.getNumberOfOnChannelTokens()).toBe(2)
})