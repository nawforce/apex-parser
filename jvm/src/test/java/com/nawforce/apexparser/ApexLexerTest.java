package com.nawforce.apexparser;

import org.antlr.v4.runtime.ANTLRInputStream;
import org.antlr.v4.runtime.CommonTokenStream;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.io.StringReader;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ApexLexerTest {

    @Test
    void testLexerGeneratesTokens() {
        ApexLexer lexer = new ApexLexer(new ANTLRInputStream("public class Hello {}"));
        CommonTokenStream tokens  = new CommonTokenStream(lexer);
        assertEquals(6, tokens.getNumberOfOnChannelTokens());
    }

    @Test
    void testCaseInsensitivityLowerCase() throws IOException {
        ApexLexer lexer = new ApexLexer(new CaseInsensitiveInputStream(new StringReader("public")));
        CommonTokenStream tokens  = new CommonTokenStream(lexer);
        assertEquals(2, tokens.getNumberOfOnChannelTokens());
    }

    @Test
    void testCaseInsensitivityUpperCase() throws IOException {
        ApexLexer lexer = new ApexLexer(new CaseInsensitiveInputStream(new StringReader("PUBLIC")));
        CommonTokenStream tokens  = new CommonTokenStream(lexer);
        assertEquals(2, tokens.getNumberOfOnChannelTokens());
    }

    @Test
    void testCaseInsensitivityMixedCase() throws IOException {
        ApexLexer lexer = new ApexLexer(new CaseInsensitiveInputStream(new StringReader("PuBliC")));
        CommonTokenStream tokens  = new CommonTokenStream(lexer);
        assertEquals(2, tokens.getNumberOfOnChannelTokens());
    }
}
