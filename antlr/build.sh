antlr -Dlanguage=JavaScript ApexLexer.g4
cp ApexLexer.js ../src
antlr -Dlanguage=JavaScript ApexParser.g4
cp ApexParser.js ../src