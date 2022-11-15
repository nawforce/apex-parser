apex-parser
===========

Parser for Salesforce Apex (including Triggers & inline SOQL/SOQL). This is based on an [ANTLR4](https://www.antlr.org/) grammar, see antlr/ApexParser.g4. 

There are two builds of the parser available, a NPM module for use with Node and a Maven package for use on JVMs.

These builds just contain the Parser & Lexer and provides no further support for analysing the generated parse trees beyond what is provided by ANTLR4. 

As Apex & SOQL/SOQL are case-insenstive languages you need to use the provided CaseInsensitiveInputStream for the parser to function correctly. When parsing Apex, inline SOQL/SOSL is automtaically parsed, but you can also parse SOQL/SOQL directly. You can find some minimal examples in the test classes. 

### Install and Building
To use correctly this code you need before install:
- [apache-maven](https://maven.apache.org/download.cgi) to automatize java compiling ([installation guide here](https://maven.apache.org/install.html)).
- npm
- Java

After that you can build both distributions using follow command from the repository home:

    npm run build 

The repository is structured as test method for owr ANTLR4 rule, developed for APEX.

### Example
To parse a class file (NPM version):

    let lexer = new ApexLexer(new CaseInsensitiveInputStream("public class Hello {}"))
    let tokens  = new CommonTokenStream(lexer);

    let parser = new ApexParser(tokens)
    let context = parser.compilationUnit()

The 'context' is a CompilationUnitContext object which is the root of the parsed representation of the class. You can access the parse tree via functions on it.

### antlr4ts versions

The npm module uses antlr4ts 0.5.0-alpha.4, this was updated from 0.5.0-alpha.3 in the 2.9.1 version. You should make
sure that if you are using a matching verions of this dependency if you use it directly. To avoid issues you can 
import 'CommonTokenStream' & 'ParseTreeWalker' from 'apex-parser' instead of from antlr4ts.

    import { CommonTokenStream} from "apex-parser";
    import { ParseTreeWalker } from "apex-parser";

### SOSL FIND quoting
SOSL FIND uses ' as a quoting character when embedded in Apex, in the API braces are used:

    Find {something} RETURNING Account

To parse the API format there is an alternative parser rule, soslLiteralAlt, that you can use instead of soslLiteral. See SOSLParserTest for some examples of how these differ.

### Packages

Maven

    <dependency>
        <groupId>com.github.nawforce</groupId>
        <artifactId>apex-parser</artifactId>
        <version>2.15.0</version>
    </dependency>

NPM

    "apex-parser": "^2.15.0"

### History
    2.15.0 - Revert 2.14.0 changes.
    2.14.0 - Change npm api to replace ANTLRInputStream with CharStream, for Unicode char positions  
    2.13.0 - Fixes for negative numerics & Currency literals in SOQL 
    2.12.0 - Replace deprecated ANTLRINputStream, DateTime & Currency literals fixes (contrib Aaron Hurst) 
    2.11.0 - Fix for SOQL UPDATE VIEWSTAT/TRACKING & removal of class type arguments
    2.10.0 - Allow type arguments on Classes (non-standard!)
    2.9.2 - Generate .d.ts files 
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
