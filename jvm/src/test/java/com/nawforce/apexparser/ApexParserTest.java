package com.nawforce.apexparser;

import org.junit.jupiter.api.Test;

import java.util.Map;

import static com.nawforce.apexparser.SyntaxErrorCounter.createParser;
import static org.junit.jupiter.api.Assertions.*;

public class ApexParserTest {

    @Test
    void testBooleanLiteral() {
        Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("true");

        ApexParser.LiteralContext context = parserAndCounter.getKey().literal();
        assertNotNull(context);
        assertEquals("true", context.BooleanLiteral().getText());
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testExpression() {
        Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("a * 5");
        ApexParser.ExpressionContext context = parserAndCounter.getKey().expression();
        assertTrue(context instanceof ApexParser.Arth1ExpressionContext);
        assertEquals(2, ((ApexParser.Arth1ExpressionContext) context).expression().size());
    }

    @Test
    void testClass() {
        Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("public class Hello {}");
        ApexParser.CompilationUnitContext context = parserAndCounter.getKey().compilationUnit();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testCaseInsensitivity() {
        Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("Public CLASS Hello {}");
        ApexParser.CompilationUnitContext context = parserAndCounter.getKey().compilationUnit();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testClassWithError() {
        Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("public class Hello {");
        ApexParser.CompilationUnitContext context = parserAndCounter.getKey().compilationUnit();
        assertNotNull(context);
        assertEquals(1, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testClassWithSOQL() {
        Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser(
                "public class Hello {\n" +
                        "        public void func() {\n" +
                        "            List<Account> accounts = [Select Id from Accounts];\n" +
                        "        }\n" +
                        "    }");
        ApexParser.CompilationUnitContext context = parserAndCounter.getKey().compilationUnit();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testTrigger() {
        Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("trigger test on Account (before update, after update) {}");
        ApexParser.TriggerUnitContext context = parserAndCounter.getKey().triggerUnit();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testSOQL() {
        Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("Select Fields(All) from Account");
        ApexParser.QueryContext context = parserAndCounter.getKey().query();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testCurrencyLiteral() {
        Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser(
                "SELECT Id FROM Account WHERE Amount > USD100.01 AND Amount < USD200");
        ApexParser.QueryContext context = parserAndCounter.getKey().query();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testIdentifiersThatCouldBeCurrencyLiterals() {
        Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser(
                "USD100.name = 'name';");
        ApexParser.StatementContext context = parserAndCounter.getKey().statement();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testDateTimeLiteral() {
        Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser(
                "SELECT Name, (SELECT Id FROM Account WHERE createdDate > 2020-01-01T12:00:00Z) FROM Opportunity");
        ApexParser.QueryContext context = parserAndCounter.getKey().query();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testNegativeNumericLiteral() {
        Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser(
                "SELECT Name FROM Opportunity WHERE Value = -100.123");
        ApexParser.QueryContext context = parserAndCounter.getKey().query();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testLastQuarterKeyword() {
        Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser(
                "SELECT Id FROM Account WHERE DueDate = LAST_QUARTER");
        ApexParser.QueryContext context = parserAndCounter.getKey().query();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testSemiAllowedAsWhileBody() {
        Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser(
                "while (x++ < 10 && !(y-- < 0));");
        ApexParser.StatementContext context = parserAndCounter.getKey().statement();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testSemiAllowedAsForBody() {
        Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser(
                "for(x=0; x<10; x++);");
        ApexParser.StatementContext context = parserAndCounter.getKey().statement();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testSemiDisallowedAsGeneralStatement() {
        Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser(
                "if (x == 3); else { ; }");
        ApexParser.StatementContext context = parserAndCounter.getKey().statement();
        assertNotNull(context);
        assertEquals(1, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testWhenLiteralParens() {
        Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser(
                "switch on (x) { \n" +
                        "  when 1 { return 1; } \n" +
                        "  when ((2)) { return 2; } \n" +
                        "  when (3), (4) { return 3; } \n" +
                        "}");
        ApexParser.StatementContext context = parserAndCounter.getKey().statement();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testSoqlModeKeywords() {
        String [] MODES = new String[] { "USER_MODE", "SYSTEM_MODE" };
        for (String mode : MODES) {
            Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser(
                    String.format("SELECT Id FROM Account WITH %s", mode));
            ApexParser.QueryContext context = parserAndCounter.getKey().query();
            assertNotNull(context);
            assertEquals(0, parserAndCounter.getValue().getNumErrors());
        }
    }

    @Test
    void testDmlModeKeywords() {
        String [] MODES = new String[] { "USER", "SYSTEM" };
        for (String mode : MODES) {
            Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser(
                    String.format("insert as %s contact;", mode));
            ApexParser.StatementContext context = parserAndCounter.getKey().statement();
            assertNotNull(context);
            assertEquals(0, parserAndCounter.getValue().getNumErrors());
        }
    }

    @Test
    void testNullCoalescingOperator() {
        Map.Entry<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("Integer notNullReturnValue = anInteger ?? 100;");
        ApexParser.StatementContext context = parserAndCounter.getKey().statement();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }
}


