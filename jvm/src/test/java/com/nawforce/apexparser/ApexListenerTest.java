package com.nawforce.apexparser;

import org.antlr.v4.runtime.CommonTokenStream;
import org.antlr.v4.runtime.tree.ParseTreeWalker;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.io.StringReader;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ApexListenerTest {

    static class TestListener extends ApexParserBaseListener {
        public Integer methodCount = 0;

        @Override
        public void enterMethodDeclaration(ApexParser.MethodDeclarationContext ctx) {
            this.methodCount += 1;
        }
    }


    @Test
    void testListenerGeneratesEvents() throws IOException {
        ApexLexer lexer = new ApexLexer(new CaseInsensitiveInputStream(new StringReader(
                "public class Hello { public void func(){} }")));
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        ApexParser parser = new ApexParser(tokens);
        ApexParser.CompilationUnitContext context = parser.compilationUnit();

        TestListener listener = new TestListener();
        ParseTreeWalker.DEFAULT.walk(listener, context);

        assertEquals(listener.methodCount.intValue(), 1);
    }

}
