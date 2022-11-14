package com.nawforce.apexparser;

import org.antlr.v4.runtime.*;

import java.util.AbstractMap;
import java.util.Map;

public class SyntaxErrorCounter extends BaseErrorListener {
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

    public static Map.Entry<ApexParser, SyntaxErrorCounter> createParser(String input) {
        ApexLexer lexer = new ApexLexer(new CaseInsensitiveInputStream(CharStreams.fromString(input)));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ApexParser parser = new ApexParser(tokens);

        parser.removeErrorListeners();
        SyntaxErrorCounter errorCounter = new SyntaxErrorCounter();
        parser.addErrorListener(errorCounter);

        return new AbstractMap.SimpleEntry<ApexParser, SyntaxErrorCounter>(parser, errorCounter);
    }
}
