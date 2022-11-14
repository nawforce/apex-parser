package com.nawforce.apexparser;

import org.junit.jupiter.api.Test;

import java.util.Map;

import static com.nawforce.apexparser.SyntaxErrorCounter.createParser;
import static org.junit.jupiter.api.Assertions.*;

public class SOSLParserTest {
    @Test
    void testBasicQuery() {
        Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("[Find 'something' RETURNING Account]");
        ApexParser.SoslLiteralContext context = parserAndCounter.getKey().soslLiteral();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testEmbeddedQuote() {
        Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("[Find 'some\\'thing' RETURNING Account]");
        ApexParser.SoslLiteralContext context = parserAndCounter.getKey().soslLiteral();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testBracesFail() {
        Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("[Find {something} RETURNING Account]");
        ApexParser.SoslLiteralContext context = parserAndCounter.getKey().soslLiteral();
        assertNotNull(context);
        assertEquals(1, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testBracesOnAltFormat() {
        Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("[Find {something} RETURNING Account]");
        ApexParser.SoslLiteralAltContext context = parserAndCounter.getKey().soslLiteralAlt();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testQuotesFailOnAltFormat() {
        Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("[Find 'something' RETURNING Account]");
        ApexParser.SoslLiteralAltContext context = parserAndCounter.getKey().soslLiteralAlt();
        assertNotNull(context);
        assertEquals(1, parserAndCounter.getValue().getNumErrors());
    }
}
