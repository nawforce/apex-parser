import { ApexLexer } from "../ApexLexer";
import { CaseInsensitiveInputStream } from "../CaseInsensitiveInputStream"
import { CharStreams, CommonTokenStream } from 'antlr4ts';

test('Lexer generates tokens', () => {
    const lexer = new ApexLexer(CharStreams.fromString("public class Hello {}"));
    const tokens  = new CommonTokenStream(lexer);
    expect(tokens.getNumberOfOnChannelTokens()).toBe(6)
})

test('Case insensitivity', () => {
    const lexer = new ApexLexer(new CaseInsensitiveInputStream(CharStreams.fromString("public")));
    const tokens  = new CommonTokenStream(lexer);
    expect(tokens.getNumberOfOnChannelTokens()).toBe(2)
})

test('Case insensitivity (upper case)', () => {
    const lexer = new ApexLexer(new CaseInsensitiveInputStream(CharStreams.fromString("PUBLIC")));
    const tokens  = new CommonTokenStream(lexer);
    expect(tokens.getNumberOfOnChannelTokens()).toBe(2)
})

test('Case insensitivity (mixed case)', () => {
    const lexer = new ApexLexer(new CaseInsensitiveInputStream(CharStreams.fromString("PuBliC")));
    const tokens  = new CommonTokenStream(lexer);
    expect(tokens.getNumberOfOnChannelTokens()).toBe(2)
})