package com.nawforce.apexparser;

import org.junit.jupiter.api.Test;

import static com.nawforce.apexparser.ApexParserWithSyntaxErrorCounter.createParser;
import static org.junit.jupiter.api.Assertions.*;

public class SOSLParserTest {
    @Test
    void testBasicQuery() {
        ApexParserWithSyntaxErrorCounter parserAndCounter = createParser("[Find 'something' RETURNING Account]");
        ApexParser.SoslLiteralContext context = parserAndCounter.getParser().soslLiteral();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getNumErrors());
    }

    @Test
    void testEmbeddedQuote() {
        ApexParserWithSyntaxErrorCounter parserAndCounter = createParser("[Find 'some\\'thing' RETURNING Account]");
        ApexParser.SoslLiteralContext context = parserAndCounter.getParser().soslLiteral();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getNumErrors());
    }

    @Test
    void testBracesFail() {
        ApexParserWithSyntaxErrorCounter parserAndCounter = createParser("[Find {something} RETURNING Account]");
        ApexParser.SoslLiteralContext context = parserAndCounter.getParser().soslLiteral();
        assertNotNull(context);
        assertEquals(1, parserAndCounter.getNumErrors());
    }

    @Test
    void testBracesOnAltFormat() {
        ApexParserWithSyntaxErrorCounter parserAndCounter = createParser("[Find {something} RETURNING Account]");
        ApexParser.SoslLiteralAltContext context = parserAndCounter.getParser().soslLiteralAlt();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getNumErrors());
    }

    @Test
    void testQuotesFailOnAltFormat() {
        ApexParserWithSyntaxErrorCounter parserAndCounter = createParser("[Find 'something' RETURNING Account]");
        ApexParser.SoslLiteralAltContext context = parserAndCounter.getParser().soslLiteralAlt();
        assertNotNull(context);
        assertEquals(1, parserAndCounter.getNumErrors());
    }
}
