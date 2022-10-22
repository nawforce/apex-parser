package com.nawforce.apexparser;

import org.junit.jupiter.api.Test;

import javafx.util.Pair;

import static com.nawforce.apexparser.SyntaxErrorCounter.createParser;
import static org.junit.jupiter.api.Assertions.*;

public class SOSLParserTest {
    @Test
    void testBasicQuery() {
        Pair<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("[Find 'something' RETURNING Account]");
        ApexParser.SoslLiteralContext context = parserAndCounter.getKey().soslLiteral();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testEmbeddedQuote() {
        Pair<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("[Find 'some\\'thing' RETURNING Account]");
        ApexParser.SoslLiteralContext context = parserAndCounter.getKey().soslLiteral();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testBracesFail() {
        Pair<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("[Find {something} RETURNING Account]");
        ApexParser.SoslLiteralContext context = parserAndCounter.getKey().soslLiteral();
        assertNotNull(context);
        assertEquals(1, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testBracesOnAltFormat() {
        Pair<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("[Find {something} RETURNING Account]");
        ApexParser.SoslLiteralAltContext context = parserAndCounter.getKey().soslLiteralAlt();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testQuotesFailOnAltFormat() {
        Pair<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("[Find 'something' RETURNING Account]");
        ApexParser.SoslLiteralAltContext context = parserAndCounter.getKey().soslLiteralAlt();
        assertNotNull(context);
        assertEquals(1, parserAndCounter.getValue().getNumErrors());
    }
}
