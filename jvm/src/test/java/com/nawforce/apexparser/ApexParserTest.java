package com.nawforce.apexparser;

import org.antlr.v4.runtime.BaseErrorListener;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.Recognizer;
import org.antlr.v4.runtime.RecognitionException;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.io.StringReader;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

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

    @Test
    void testBooleanLiteral() throws IOException {
        ApexLexer lexer = new ApexLexer(new CaseInsensitiveInputStream(new StringReader("true")));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ApexParser parser = new ApexParser(tokens);
        ApexParser.LiteralContext context = parser.literal();
        assertEquals("true", context.BooleanLiteral().getText());
    }

    @Test
    void testExpression() throws IOException {
        ApexLexer lexer = new ApexLexer(new CaseInsensitiveInputStream(new StringReader("a * 5")));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ApexParser parser = new ApexParser(tokens);
        ApexParser.ExpressionContext context = parser.expression();
        assertTrue(context instanceof ApexParser.Arth1ExpressionContext);
        assertEquals(2, ((ApexParser.Arth1ExpressionContext) context).expression().size());
    }

    @Test
    void testClass() throws IOException {
        ApexLexer lexer = new ApexLexer(new CaseInsensitiveInputStream(new StringReader("public class Hello {}")));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ApexParser parser = new ApexParser(tokens);
        ApexParser.CompilationUnitContext context = parser.compilationUnit();
        assertNotEquals(null, context);
    }

    @Test
    void testCaseInsensitivity() throws IOException {
        ApexLexer lexer = new ApexLexer(new CaseInsensitiveInputStream(new StringReader("Public CLASS Hello {}")));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ApexParser parser = new ApexParser(tokens);
        ApexParser.CompilationUnitContext context = parser.compilationUnit();
        assertNotEquals(null, context);
    }

    @Test
    void testClassWithError() throws IOException {
        ApexLexer lexer = new ApexLexer(new CaseInsensitiveInputStream(new StringReader("public class Hello {")));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ApexParser parser = new ApexParser(tokens);
        parser.removeErrorListeners();
        ApexParser.CompilationUnitContext context = parser.compilationUnit();
        assertNotEquals(null, context);
    }

    @Test
    void testClassWithSOQL() throws IOException {
        ApexLexer lexer = new ApexLexer(new CaseInsensitiveInputStream(new StringReader(
                "public class Hello {\n" +
                        "        public void func() {\n" +
                        "            List<Account> accounts = [Select Id from Accounts];\n" +
                        "        }\n" +
                        "    }")));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ApexParser parser = new ApexParser(tokens);
        ApexParser.CompilationUnitContext context = parser.compilationUnit();
        assertNotEquals(null, context);
    }

    @Test
    void testTrigger() throws IOException {
        ApexLexer lexer = new ApexLexer(new CaseInsensitiveInputStream(new StringReader("trigger test on Account (before update, after update) {}")));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ApexParser parser = new ApexParser(tokens);
        ApexParser.TriggerUnitContext context = parser.triggerUnit();
        assertNotEquals(null, context);
    }

    @Test
    void testSOQL() throws IOException {
        ApexLexer lexer = new ApexLexer(new CaseInsensitiveInputStream(new StringReader("Select Fields(All) from Account")));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ApexParser parser = new ApexParser(tokens);
        ApexParser.QueryContext context = parser.query();
        assertNotEquals(null, context);
    }

    @Test
    void testSOSL() throws IOException {
        ApexLexer lexer = new ApexLexer(new CaseInsensitiveInputStream(new StringReader("[Find {something} RETURNING Account]")));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ApexParser parser = new ApexParser(tokens);
        ApexParser.SoslLiteralContext context = parser.soslLiteral();
        assertNotEquals(null, context);
    }

    @Test
    void testCurrencyLiteral() throws IOException {
        ApexLexer lexer = new ApexLexer(new CaseInsensitiveInputStream(new StringReader(
             "SELECT Id FROM Account WHERE Amount > USD100.01 AND Amount < USD200")));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ApexParser parser = new ApexParser(tokens);
        SyntaxErrorCounter errorCounter = new SyntaxErrorCounter();
        parser.addErrorListener(errorCounter);
        parser.query();
        assertEquals(0, errorCounter.getNumErrors());
    }

    @Test
    void testIdentifiersThatCouldBeCurrencyLiterals() throws IOException {
        ApexLexer lexer = new ApexLexer(new CaseInsensitiveInputStream(new StringReader(
             "USD100.name = 'name';")));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ApexParser parser = new ApexParser(tokens);
        SyntaxErrorCounter errorCounter = new SyntaxErrorCounter();
        parser.addErrorListener(errorCounter);
        parser.statement();
        assertEquals(0, errorCounter.getNumErrors());
    }

    @Test
    void testDateTimeLiteral() throws IOException {
        ApexLexer lexer = new ApexLexer(new CaseInsensitiveInputStream(new StringReader(
             "SELECT Name, (SELECT Id FROM Account WHERE createdDate > 2020-01-01T12:00:00Z) FROM Opportunity")));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ApexParser parser = new ApexParser(tokens);
        SyntaxErrorCounter errorCounter = new SyntaxErrorCounter();
        parser.addErrorListener(errorCounter);
        parser.query();
        assertEquals(0, errorCounter.getNumErrors());
    }

    @Test
    void testNegativeNumericLiteral() throws IOException {
        ApexLexer lexer = new ApexLexer(new CaseInsensitiveInputStream(new StringReader(
                "SELECT Name FROM Opportunity WHERE Value = -100.123")));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ApexParser parser = new ApexParser(tokens);
        SyntaxErrorCounter errorCounter = new SyntaxErrorCounter();
        parser.addErrorListener(errorCounter);
        parser.query();
        assertEquals(0, errorCounter.getNumErrors());
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
    void testSemiAllowedAsWhileBody() throws IOException {
        ApexLexer lexer = new ApexLexer(new CaseInsensitiveInputStream(new StringReader(
                "while (x++ < 10 && !(y-- < 0));")));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ApexParser parser = new ApexParser(tokens);
        SyntaxErrorCounter errorCounter = new SyntaxErrorCounter();
        parser.addErrorListener(errorCounter);
        parser.statement();
        assertEquals(0, errorCounter.getNumErrors());
    }

    @Test
    void testSemiAllowedAsForBody() throws IOException {
        ApexLexer lexer = new ApexLexer(new CaseInsensitiveInputStream(new StringReader(
                "for(x=0; x<10; x++);")));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ApexParser parser = new ApexParser(tokens);
        SyntaxErrorCounter errorCounter = new SyntaxErrorCounter();
        parser.addErrorListener(errorCounter);
        parser.statement();
        assertEquals(0, errorCounter.getNumErrors());
    }

    @Test
    void testSemiDisallowedAsGeneralStatement() throws IOException {
        ApexLexer lexer = new ApexLexer(new CaseInsensitiveInputStream(new StringReader(
                "if (x == 3); else { ; }")));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ApexParser parser = new ApexParser(tokens);
        SyntaxErrorCounter errorCounter = new SyntaxErrorCounter();
        parser.addErrorListener(errorCounter);
        parser.statement();
        assertEquals(1, errorCounter.getNumErrors());
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
