package com.nawforce.apexparser;

import org.antlr.v4.runtime.*;
import org.junit.jupiter.api.Test;

import javafx.util.Pair;

import static org.junit.jupiter.api.Assertions.*;

public class ApexParserTest {

    public static class SyntaxErrorCounter extends BaseErrorListener {
        private int numErrors = 0;

        @Override
        public void syntaxError(
                Recognizer<?, ?> recognizer,
                Object offendingSymbol,
                int line,
                int charPositionInLine,
                String msg,
                RecognitionException e) {
            this.numErrors += 1;
        }

        public int getNumErrors() {
            return this.numErrors;
        }
    }

    Pair<ApexParser, SyntaxErrorCounter> createParser(String input) {
        ApexLexer lexer = new ApexLexer(new CaseInsensitiveInputStream(CharStreams.fromString(input)));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ApexParser parser = new ApexParser(tokens);

        parser.removeErrorListeners();
        SyntaxErrorCounter errorCounter = new SyntaxErrorCounter();
        parser.addErrorListener(errorCounter);

        return new Pair<>(parser, errorCounter);
    }

    @Test
    void testBooleanLiteral() {
        Pair<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("true");

        ApexParser.LiteralContext context = parserAndCounter.getKey().literal();
        assertNotNull(context);
        assertEquals("true", context.BooleanLiteral().getText());
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testExpression() {
        Pair<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("a * 5");
        ApexParser.ExpressionContext context = parserAndCounter.getKey().expression();
        assertTrue(context instanceof ApexParser.Arth1ExpressionContext);
        assertEquals(2, ((ApexParser.Arth1ExpressionContext) context).expression().size());
    }

    @Test
    void testClass() {
        Pair<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("public class Hello {}");
        ApexParser.CompilationUnitContext context = parserAndCounter.getKey().compilationUnit();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testCaseInsensitivity() {
        Pair<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("Public CLASS Hello {}");
        ApexParser.CompilationUnitContext context = parserAndCounter.getKey().compilationUnit();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testClassWithError() {
        Pair<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("public class Hello {");
        ApexParser.CompilationUnitContext context = parserAndCounter.getKey().compilationUnit();
        assertNotNull(context);
        assertEquals(1, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testClassWithSOQL() {
        Pair<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser(
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
        Pair<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("trigger test on Account (before update, after update) {}");
        ApexParser.TriggerUnitContext context = parserAndCounter.getKey().triggerUnit();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testSOQL() {
        Pair<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("Select Fields(All) from Account");
        ApexParser.QueryContext context = parserAndCounter.getKey().query();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testSOSL() {
        Pair<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser("[Find {something} RETURNING Account]");
        ApexParser.SoslLiteralContext context = parserAndCounter.getKey().soslLiteral();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testCurrencyLiteral() {
        Pair<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser(
                "SELECT Id FROM Account WHERE Amount > USD100.01 AND Amount < USD200");
        ApexParser.QueryContext context = parserAndCounter.getKey().query();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testIdentifiersThatCouldBeCurrencyLiterals() {
        Pair<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser(
                "USD100.name = 'name';");
        ApexParser.StatementContext context = parserAndCounter.getKey().statement();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testDateTimeLiteral() {
        Pair<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser(
                "SELECT Name, (SELECT Id FROM Account WHERE createdDate > 2020-01-01T12:00:00Z) FROM Opportunity");
        ApexParser.QueryContext context = parserAndCounter.getKey().query();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testNegativeNumericLiteral() {
        Pair<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser(
                "SELECT Name FROM Opportunity WHERE Value = -100.123");
        ApexParser.QueryContext context = parserAndCounter.getKey().query();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testLastQuarterKeyword() {
        Pair<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser(
                "SELECT Id FROM Account WHERE DueDate = LAST_QUARTER");
        ApexParser.QueryContext context = parserAndCounter.getKey().query();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    void testLastQuarterKeyword() throws IOException {
        ApexLexer lexer = new ApexLexer(new CaseInsensitiveInputStream(new StringReader(
             "SELECT Id FROM Account WHERE DueDate = LAST_QUARTER")));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ApexParser parser = new ApexParser(tokens);
        SyntaxErrorCounter errorCounter = new SyntaxErrorCounter();
        parser.addErrorListener(errorCounter);
        parser.query();
        assertEquals(0, errorCounter.getNumErrors());
    }

    @Test
    void testSemiAllowedAsWhileBody() {
        Pair<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser(
                "while (x++ < 10 && !(y-- < 0));");
        ApexParser.StatementContext context = parserAndCounter.getKey().statement();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testSemiAllowedAsForBody() {
        Pair<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser(
                "for(x=0; x<10; x++);");
        ApexParser.StatementContext context = parserAndCounter.getKey().statement();
        assertNotNull(context);
        assertEquals(0, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testSemiDisallowedAsGeneralStatement() {
        Pair<ApexParser, SyntaxErrorCounter> parserAndCounter = createParser(
                "if (x == 3); else { ; }");
        ApexParser.StatementContext context = parserAndCounter.getKey().statement();
        assertNotNull(context);
        assertEquals(1, parserAndCounter.getValue().getNumErrors());
    }

    @Test
    void testWhenLiteralParens() throws IOException {
        ApexLexer lexer = new ApexLexer(new CaseInsensitiveInputStream(new StringReader(
                "switch on (x) { \n" +
                        "  when 1 { return 1; } \n" +
                        "  when ((2)) { return 2; } \n" +
                        "  when (3), (4) { return 3; } \n" +
                        "}")));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ApexParser parser = new ApexParser(tokens);
        SyntaxErrorCounter errorCounter = new SyntaxErrorCounter();
        parser.addErrorListener(errorCounter);
        parser.statement();
        assertEquals(0, errorCounter.getNumErrors());
    }
}


