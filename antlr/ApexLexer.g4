/*
 [The "BSD licence"]
 Copyright (c) 2013 Terence Parr, Sam Harwell
 All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:
 1. Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.
 3. The name of the author may not be used to endorse or promote products
    derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
 IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

/** 
 *  An Apexcode grammar derived from Java 1.7 grammar for ANTLR v4.
 *  Uses ANTLR v4's left-recursive expression notation.
 *  
 *  @maintainer: Andrey Gavrikov
 *
 *  You can test with
 *
 *  $ antlr4 ApexGrammar.g4
 *  $ javac *.java
 *  $ grun Apexcode compilationUnit *.cls
 */
lexer grammar ApexLexer;

channels {
    WHITESPACE_CHANNEL,
    COMMENT_CHANNEL
}

// Keywords
ABSTRACT      : 'abstract';
BREAK         : 'break';
BYTE          : 'byte';
CATCH         : 'catch';
CHAR          : 'char';
CLASS         : 'class';
CONST         : 'const';
CONTINUE      : 'continue';
DEFAULT       : 'default';
DELETE        : 'delete';
DO            : 'do';
ELSE          : 'else';
ENUM          : 'enum';
EXTENDS       : 'extends';
FINAL         : 'final';
FINALLY       : 'finally';
FOR           : 'for';
GET           : 'get';
GLOBAL	      : 'global';
IF            : 'if';
IMPLEMENTS    : 'implements';
INHERITED     : 'inherited';
INSERT        : 'insert';
INSTANCEOF    : 'instanceof';
INTERFACE     : 'interface';
MERGE         : 'merge';
NEW           : 'new';
NULL          : 'null';
ON            : 'on';
OVERRIDE      : 'override';
PRIVATE       : 'private';
PROTECTED     : 'protected';
PUBLIC        : 'public';
RETURN        : 'return';
RUNAS         : 'system.runas';
SET           : 'set';
SHARING       : 'sharing';
SHORT         : 'short';
STATIC        : 'static';
SUPER         : 'super';
SWITCH        : 'switch';
TESTMETHOD    : 'testmethod';
THIS          : 'this';
THROW         : 'throw';
TRANSIENT     : 'transient';
TRY           : 'try';
UNDELETE      : 'undelete';
UPDATE        : 'update';
UPSERT        : 'upsert';
VIRTUAL       : 'virtual';
VOID          : 'void';
WEBSERVICE    : 'webservice';
WHEN          : 'when';
WHILE         : 'while';
WITH          : 'with';
WITHOUT       : 'without';

// §3.10.1 Integer Literals

IntegerLiteral
    :   Digit Digit* [lL]?
    ;

NumberLiteral
    :   Digit* '.' Digit Digit* [dD]?
    ;

fragment
HexCharacter
    :   Digit | 'a' | 'b' | 'c' | 'd' | 'e' | 'f'
    ;

fragment
Digit
    :   [0-9]
    ;

// §3.10.3 Boolean Literals

BooleanLiteral
    :   'true'
    |   'false'
    ;

// §3.10.5 String Literals

StringLiteral
    :   '\'' StringCharacters? '\''
    ;

fragment
StringCharacters
    :   StringCharacter+
    ;

fragment
StringCharacter
    :   ~['\\]
    |   EscapeSequence
    ;

// §3.10.6 Escape Sequences for Character and String Literals

fragment
EscapeSequence
    :   '\\' [btnfr"'\\]
    |   '\\u' HexCharacter HexCharacter HexCharacter HexCharacter
    ;

// §3.10.7 The Null Literal

NullLiteral
    :   NULL
    ;


// §3.11 Separators

LPAREN          : '(';
RPAREN          : ')';
LBRACE          : '{';
RBRACE          : '}';
LBRACK          : '[';
RBRACK          : ']';
SEMI            : ';';
COMMA           : ',';
DOT             : '.';

// §3.12 Operators

ASSIGN          : '=';
GT              : '>';
LT              : '<';
BANG            : '!';
TILDE           : '~';
QUESTION        : '?';
COLON           : ':';
EQUAL           : '==';
TRIPLEEQUAL     : '===';
NOTEQUAL        : '!=';
LESSANDGREATER  : '<>';
TRIPLENOTEQUAL  : '!==';
AND             : '&&';
OR              : '||';
INC             : '++';
DEC             : '--';
ADD             : '+';
SUB             : '-';
MUL             : '*';
DIV             : '/';
BITAND          : '&';
BITOR           : '|';
CARET           : '^';
MOD             : '%';
MAP             : '=>';

ADD_ASSIGN      : '+=';
SUB_ASSIGN      : '-=';
MUL_ASSIGN      : '*=';
DIV_ASSIGN      : '/=';
AND_ASSIGN      : '&=';
OR_ASSIGN       : '|=';
XOR_ASSIGN      : '^=';
MOD_ASSIGN      : '%=';
LSHIFT_ASSIGN   : '<<=';
RSHIFT_ASSIGN   : '>>=';
URSHIFT_ASSIGN  : '>>>=';

//
// Additional symbols not defined in the lexical specification
//

AT : '@';


// §3.8 Identifiers (must appear after all keywords in the grammar)

Identifier
    :   JavaLetter JavaLetterOrDigit*
    ;

// Apex identifiers don't support non-ascii but we maintain Java rules here and post-validate
// so we can give better error messages
fragment
JavaLetter
    :   [a-zA-Z$_] // these are the "java letters" below 0xFF
    |   // covers all characters above 0xFF which are not a surrogate
        ~[\u0000-\u00FF\uD800-\uDBFF]
    |   // covers UTF-16 surrogate pairs encodings for U+10000 to U+10FFFF
        [\uD800-\uDBFF] [\uDC00-\uDFFF]
    ;

fragment
JavaLetterOrDigit
    :   [a-zA-Z0-9$_] // these are the "java letters or digits" below 0xFF
    |   // covers all characters above 0xFF which are not a surrogate
        ~[\u0000-\u00FF\uD800-\uDBFF]
    |   // covers UTF-16 surrogate pairs encodings for U+10000 to U+10FFFF
        [\uD800-\uDBFF] [\uDC00-\uDFFF]
    ;

//
// Whitespace and comments
//

WS  :  [ \t\r\n\u000C]+ -> channel(WHITESPACE_CHANNEL)
    ;

DOC_COMMENT
    :   '/**' [\r\n] .*? '*/' -> channel(COMMENT_CHANNEL)
    ;

COMMENT
    :   '/*' .*? '*/' -> channel(COMMENT_CHANNEL)
    ;

LINE_COMMENT
    :   '//' ~[\r\n]* -> channel(COMMENT_CHANNEL)
    ;

