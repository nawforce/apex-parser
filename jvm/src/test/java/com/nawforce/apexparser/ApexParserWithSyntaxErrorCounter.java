package com.nawforce.apexparser;

import org.antlr.v4.runtime.CharStreams;
import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.BaseErrorListener;
import org.antlr.v4.runtime.RecognitionException;
import org.antlr.v4.runtime.Recognizer;

public class ApexParserWithSyntaxErrorCounter extends BaseErrorListener {
    private int numErrors = 0;
    private ApexParser parser;

    ApexParserWithSyntaxErrorCounter(ApexParser parser) {
      this.parser = parser;
      parser.addErrorListener(this);
    }

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

    public ApexParser getParser() {
        return parser;
    }

    public static ApexParserWithSyntaxErrorCounter createParser(String input) {
        ApexLexer lexer = new ApexLexer(new CaseInsensitiveInputStream(CharStreams.fromString(input)));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ApexParser parser = new ApexParser(tokens);
        parser.removeErrorListeners();
        return new ApexParserWithSyntaxErrorCounter(parser);
    }
}
