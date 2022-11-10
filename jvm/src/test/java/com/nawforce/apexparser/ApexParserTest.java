package com.nawforce.apexparser;

import org.junit.jupiter.api.Test;

import static com.nawforce.apexparser.ApexParserWithSyntaxErrorCounter.createParser;
import static org.junit.jupiter.api.Assertions.*;

public class ApexParserTest {

    @Test
    void testBooleanLiteral() {
        ApexParserWithSyntaxErrorCounter parserAndCounter = createParser("true");

        ApexParser.LiteralContext context = parserAndCounter.getParser().literal();
        assertNotNull(context);
        assertEquals("true", context.BooleanLiteral().getText());
        assertEquals(0, parserAndCounter.getNumErrors());
    }

    @Test
    void testExpression() {
        ApexParserWithSyntaxErrorCounter parserAndCounter = createParser("a * 5");
        ApexParser.ExpressionContext context = parserAndCounter.getParser().expression();
        assertTrue(context instanceof ApexParser.Arth1ExpressionContext);
        assertEquals(2, ((ApexParser.Arth1ExpressionContext) context).expression().size());
    }

    @Test
    void testClass() {
        ApexParserWithSyntaxErrorCounter parserAndCounter = createParser("public class Hello {}");
        ApexParser.CompilationUnitContext context = parserAndCounter.getParser().compilationUnit();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getNumErrors());
    }

    @Test
    void testCaseInsensitivity() {
        ApexParserWithSyntaxErrorCounter parserAndCounter = createParser("Public CLASS Hello {}");
        ApexParser.CompilationUnitContext context = parserAndCounter.getParser().compilationUnit();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getNumErrors());
    }

    @Test
    void testClassWithError() {
        ApexParserWithSyntaxErrorCounter parserAndCounter = createParser("public class Hello {");
        ApexParser.CompilationUnitContext context = parserAndCounter.getParser().compilationUnit();
        assertNotNull(context);
        assertEquals(1, parserAndCounter.getNumErrors());
    }

    @Test
    void testClassWithSOQL() {
        ApexParserWithSyntaxErrorCounter parserAndCounter = createParser(
                "public class Hello {\n" +
                        "        public void func() {\n" +
                        "            List<Account> accounts = [Select Id from Accounts];\n" +
                        "        }\n" +
                        "    }");
        ApexParser.CompilationUnitContext context = parserAndCounter.getParser().compilationUnit();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getNumErrors());
    }

    @Test
    void testTrigger() {
        ApexParserWithSyntaxErrorCounter parserAndCounter = createParser("trigger test on Account (before update, after update) {}");
        ApexParser.TriggerUnitContext context = parserAndCounter.getParser().triggerUnit();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getNumErrors());
    }

    @Test
    void testSOQL() {
        ApexParserWithSyntaxErrorCounter parserAndCounter = createParser("Select Fields(All) from Account");
        ApexParser.QueryContext context = parserAndCounter.getParser().query();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getNumErrors());
    }

    @Test
    void testCurrencyLiteral() {
        ApexParserWithSyntaxErrorCounter parserAndCounter = createParser(
                "SELECT Id FROM Account WHERE Amount > USD100.01 AND Amount < USD200");
        ApexParser.QueryContext context = parserAndCounter.getParser().query();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getNumErrors());
    }

    @Test
    void testIdentifiersThatCouldBeCurrencyLiterals() {
        ApexParserWithSyntaxErrorCounter parserAndCounter = createParser(
                "USD100.name = 'name';");
        ApexParser.StatementContext context = parserAndCounter.getParser().statement();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getNumErrors());
    }

    @Test
    void testDateTimeLiteral() {
        ApexParserWithSyntaxErrorCounter parserAndCounter = createParser(
                "SELECT Name, (SELECT Id FROM Account WHERE createdDate > 2020-01-01T12:00:00Z) FROM Opportunity");
        ApexParser.QueryContext context = parserAndCounter.getParser().query();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getNumErrors());
    }

    @Test
    void testNegativeNumericLiteral() {
        ApexParserWithSyntaxErrorCounter parserAndCounter = createParser(
                "SELECT Name FROM Opportunity WHERE Value = -100.123");
        ApexParser.QueryContext context = parserAndCounter.getParser().query();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getNumErrors());
    }

    @Test
    void testLastQuarterKeyword() {
        ApexParserWithSyntaxErrorCounter parserAndCounter = createParser(
                "SELECT Id FROM Account WHERE DueDate = LAST_QUARTER");
        ApexParser.QueryContext context = parserAndCounter.getParser().query();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getNumErrors());
    }

    @Test
    void testSemiAllowedAsWhileBody() {
        ApexParserWithSyntaxErrorCounter parserAndCounter = createParser(
                "while (x++ < 10 && !(y-- < 0));");
        ApexParser.StatementContext context = parserAndCounter.getParser().statement();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getNumErrors());
    }

    @Test
    void testSemiAllowedAsForBody() {
        ApexParserWithSyntaxErrorCounter parserAndCounter = createParser(
                "for(x=0; x<10; x++);");
        ApexParser.StatementContext context = parserAndCounter.getParser().statement();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getNumErrors());
    }

    @Test
    void testSemiDisallowedAsGeneralStatement() {
        ApexParserWithSyntaxErrorCounter parserAndCounter = createParser(
                "if (x == 3); else { ; }");
        ApexParser.StatementContext context = parserAndCounter.getParser().statement();
        assertNotNull(context);
        assertEquals(1, parserAndCounter.getNumErrors());
    }

    @Test
    void testWhenLiteralParens() {
        ApexParserWithSyntaxErrorCounter parserAndCounter = createParser(
                "switch on (x) { \n" +
                        "  when 1 { return 1; } \n" +
                        "  when ((2)) { return 2; } \n" +
                        "  when (3), (4) { return 3; } \n" +
                        "}");
        ApexParser.StatementContext context = parserAndCounter.getParser().statement();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getNumErrors());
    }
}


