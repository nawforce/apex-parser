apex-parser
===========

Parser for Salesforce Apex (including Triggers & inline SOQL/SOQL). This is based on an [ANTLR4](https://www.antlr.org/) grammar, see antlr/ApexParser.g4. 

There are two builds of the parser available, a NPM module for use with Node and a Maven package for use on JVMs.

These builds just contain the Parser & Lexer and provides no further support for analysing the generated parse trees beyond what is provided by ANTLR4. 

As Apex & SOQL/SOQL are case-insenstive languages you need to use the provided CaseInsensitiveInputStream for the parser to function correctly. When parsing Apex, inline SOQL/SOSL is automtaically parsed, but you can also parse SOQL/SOQL directly. You can find some minimal examples in the test classes. 

### Example
To parse a class file (NPM version):

    let lexer = new ApexLexer(new CaseInsensitiveInputStream("public class Hello {}"))
    let tokens  = new CommonTokenStream(lexer);

    let parser = new ApexParser(tokens)
    let context = parser.compilationUnit()

The 'context' is a CompilationUnitContext object which is the root of the parsed representation of the class. You can access the parse tree via functions on it.

### Packages

Maven

    <dependency>
        <groupId>com.github.nawforce</groupId>
        <artifactId>apex-parser</artifactId>
        <version>2.9.1</version>
    </dependency>

NPM

    "apex-parser": "^2.9.1"

### Building
To build both distributions:

    npm run build

### History
    2.9.1 - JVM build and npm dependency updates
    2.9.0 - Add SOQL Fields function
    2.8.0 - Apex cast priority fix, SOSL & SOQL query format fixes, Added SOQL Date functions 
    2.7.1 - Bugfix for 'Network' identifier
    2.7.0 - Support inline SOSL queries
    2.6.1 - Dependency security fixes
    2.6.0 - Add SOQL parsing support
    2.5.0 - Allow safe navigation operator ?.
    2.4.0 - Enable Listener & Visitor use
    2.3.0 - Removed modifers from enhanced for loop
    2.2.1 - Dependency security fixes
    2.2.0 - Parser performance improvements
    2.1.0 - Supports trigger parsing and switch statement parsing syntax was corrected
    1.0.0 - Initial version

### Source & Licenses

All the source code included uses a 3-clause BSD license. The only third-party component included is the Apex Antlr4 grammar originally from [Tooling-force.com](https://github.com/neowit/tooling-force.com), although this version used is now markedly different from the original.  
