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
parser grammar ApexParser;
options {tokenVocab=ApexLexer;}

// starting point for parsing a apexcode file
compilationUnit
    : typeDeclaration EOF
    ;

typeDeclaration
    : modifier* classDeclaration
    | modifier* enumDeclaration
    | modifier* interfaceDeclaration
    ;

classDeclaration
    : CLASS id
      (EXTENDS typeRef)?
      (IMPLEMENTS typeList)?
      classBody
    ;

enumDeclaration
    : ENUM id
      LBRACE enumConstants? RBRACE
    ;

enumConstants
 	: id (COMMA id)*
   	;

interfaceDeclaration
    : INTERFACE id (EXTENDS typeList)? interfaceBody
    ;

typeList
    : typeRef (COMMA typeRef)*
    ;

classBody
    : LBRACE classBodyDeclaration* RBRACE
    ;

interfaceBody
    : LBRACE interfaceMethodDeclaration* RBRACE
    ;

classBodyDeclaration
    : SEMI
    | STATIC? block
    | modifier* memberDeclaration
    ;

/* Unify all annotation & modifiers so we can give better error messages */
modifier
    : annotation
    | GLOBAL
    | PUBLIC
    | PROTECTED
    | PRIVATE
    | TRANSIENT
    | STATIC
    | ABSTRACT
    | FINAL
    | WEBSERVICE
    | OVERRIDE
    | VIRTUAL
    | TESTMETHOD
    | WITH SHARING
    | WITHOUT SHARING
    | INHERITED SHARING
    ;

memberDeclaration
    : methodDeclaration
    | fieldDeclaration
    | constructorDeclaration
    | interfaceDeclaration
    | classDeclaration
    | enumDeclaration
    | propertyDeclaration
    ;

/* We use rule this even for void methods which cannot have [] after parameters.
   This simplifies grammar and we can consider void to be a type, which
   renders the [] matching as a context-sensitive issue or a semantic check
   for invalid return type after parsing.
 */


methodDeclaration
    : modifier* (typeRef|VOID) id formalParameters
      (   block
      |   SEMI
      )
    ;

constructorDeclaration
    : qualifiedName formalParameters block
    ;

fieldDeclaration
    : typeRef variableDeclarators SEMI
    ;

propertyDeclaration
    : typeRef id LBRACE propertyBlock* RBRACE
    ;

interfaceMethodDeclaration
    : modifier* (typeRef|VOID) id formalParameters SEMI
    ;

variableDeclarators
    : variableDeclarator (COMMA variableDeclarator)*
    ;

variableDeclarator
    : id (ASSIGN expression)?
    ;

arrayInitializer
    : LBRACE (expression (COMMA expression)* (COMMA)? )? RBRACE
    ;

typeRef
    : typeName (DOT typeName)* arraySubscripts
    ;

arraySubscripts
    : (LBRACK RBRACK)*
    ;

typeName
    : id typeArguments?
    ;

typeArguments
    : LT typeList GT
    ;

formalParameters
    : LPAREN formalParameterList? RPAREN
    ;

formalParameterList
    : formalParameter (COMMA formalParameter)*
    ;

formalParameter
    : modifier* typeRef id
    ;

qualifiedName
    : id (DOT id)*
    ;

literal
    : IntegerLiteral
    | NumberLiteral
    | StringLiteral
    | BooleanLiteral
    | NULL
    ;

// ANNOTATIONS

annotation
    : AT qualifiedName ( LPAREN ( elementValuePairs | elementValue )? RPAREN )?
    ;

elementValuePairs
    : elementValuePair (COMMA? elementValuePair)*
    ;

elementValuePair
    : id ASSIGN elementValue
    ;

elementValue
    : expression
    | annotation
    | elementValueArrayInitializer
    ;

elementValueArrayInitializer
    : LBRACE (elementValue (COMMA elementValue)*)? (COMMA)? RBRACE
    ;


// STATEMENTS / BLOCKS

block
    : LBRACE statement* RBRACE
    ;

localVariableDeclarationStatement
    : localVariableDeclaration SEMI
    ;

localVariableDeclaration
    : modifier* typeRef variableDeclarators
    ;

statement
    : block
    | ifStatement
    | switchStatement
    | forStatement
    | whileStatement
    | doWhileStatement
    | tryStatement
    | returnStatement
    | throwStatement
    | breakStatement
    | continueStatement
    | insertStatement
    | updateStatement
    | deleteStatement
    | undeleteStatement
    | upsertStatement
    | mergeStatement
    | runAsStatement
    | localVariableDeclarationStatement
    | expressionStatement
    ;

ifStatement
    : IF parExpression statement (ELSE statement)?
    ;

switchStatement
    : SWITCH ON expression LBRACE whenControl+ RBRACE
    ;

whenControl
    : WHEN (ELSE | expressionList) block
    ;

forStatement
    : FOR LPAREN forControl RPAREN statement
    ;

whileStatement
    : WHILE parExpression statement
    ;

doWhileStatement
    : DO statement WHILE parExpression SEMI
    ;

tryStatement
    : TRY block (catchClause+ finallyBlock? | finallyBlock)
    ;

returnStatement
    : RETURN expression? SEMI
    ;

throwStatement
    : THROW expression SEMI
    ;

breakStatement
    : BREAK SEMI
    ;

continueStatement
    : CONTINUE SEMI
    ;

insertStatement
    : INSERT expression SEMI
    ;

updateStatement
    : UPDATE expression SEMI
    ;

deleteStatement
    : DELETE expression SEMI
    ;

undeleteStatement
    : UNDELETE expression SEMI
    ;

upsertStatement
    : UPSERT expression qualifiedName? SEMI
    ;

mergeStatement
    : MERGE expression expression SEMI
    ;

runAsStatement
    : RUNAS LPAREN expressionList? RPAREN block?
    ;

expressionStatement
    : expression SEMI
    ;

propertyBlock
    : modifier* (getter | setter)
    ;

getter
    : GET (SEMI | block)
    ;

setter
    : SET (SEMI | block)
    ;

catchClause
    : CATCH LPAREN modifier* qualifiedName id RPAREN block
    ;

finallyBlock
    : FINALLY block
    ;

forControl
    : enhancedForControl
    | forInit? SEMI expression? SEMI forUpdate?
    ;

forInit
    : localVariableDeclaration
    | expressionList
    ;

enhancedForControl
    : modifier* typeRef id COLON expression
    ;

forUpdate
    : expressionList
    ;

// EXPRESSIONS

parExpression
    : LPAREN expression RPAREN
    ;

expressionList
    : expression (COMMA expression)*
    ;

expression
    : primary                                                                                         # primaryExpression
    | expression DOT
        ( id
        | methodCall
        )                                                                                             # dotExpression
    | expression LBRACK expression RBRACK                                                             # arrayExpression
    | methodCall                                                                                      # methodCallExpression
    | NEW creator                                                                                     # newExpression
    | LPAREN typeRef RPAREN expression                                                                # castExpression
    | expression (INC | DEC)                                                                          # postOpExpression
    | (ADD|SUB|INC|DEC) expression                                                                    # preOpExpression
    | (TILDE|BANG) expression                                                                         # negExpression
    | expression (MUL|DIV|MOD) expression                                                             # arth1Expression
    | expression (ADD|SUB) expression                                                                 # arth2Expression
    | expression (LT LT | GT GT GT | GT GT) expression                                                # bitExpression
    | expression (LE | GE | GT | LT) expression                                                       # cmpExpression
    | expression INSTANCEOF typeRef                                                                   # instanceOfExpression
    | expression (TRIPLEEQUAL | TRIPLENOTEQUAL | EQUAL | NOTEQUAL | LESSANDGREATER ) expression       # equalityExpression
    | expression BITAND expression                                                                    # bitAndExpression
    | expression CARET expression                                                                     # bitNotExpression
    | expression BITOR expression                                                                     # bitOrExpression
    | expression AND expression                                                                       # logAndExpression
    | expression OR expression                                                                        # logOrExpression
    | <assoc=right> expression QUESTION expression COLON expression                                   # condExpression
    | <assoc=right> expression
      (   ASSIGN
      |   ADD_ASSIGN
      |   SUB_ASSIGN
      |   MUL_ASSIGN
      |   DIV_ASSIGN
      |   AND_ASSIGN
      |   OR_ASSIGN
      |   XOR_ASSIGN
      |   RSHIFT_ASSIGN
      |   URSHIFT_ASSIGN
      |   LSHIFT_ASSIGN
      |   MOD_ASSIGN
      )
      expression                                                                                     # assignExpression
    ;

primary
    : LPAREN expression RPAREN                                                                       # subPrimary
    | THIS                                                                                           # thisPrimary
    | SUPER                                                                                          # superPrimary
    | literal                                                                                        # literalPrimary
    | typeRef DOT CLASS                                                                              # typeRefPrimary
    | id                                                                                             # idPrimary
    | soqlLiteral                                                                                    # soqlPrimary
    ;

methodCall
    : id LPAREN expressionList? RPAREN
    | THIS LPAREN expressionList? RPAREN
    | SUPER LPAREN expressionList? RPAREN
    ;

creator
    :  createdName (noRest | classCreatorRest | arrayCreatorRest | mapCreatorRest | setCreatorRest)
    ;

createdName
    : idCreatedNamePair (DOT idCreatedNamePair)*
    ;

idCreatedNamePair
    : id (LT typeList GT)?
    ;

noRest
    : LBRACE RBRACE
    ;

classCreatorRest
    : arguments
    ;

arrayCreatorRest
    : LBRACK expression RBRACK
    | LBRACK RBRACK arrayInitializer?
    ;

mapCreatorRest
    : LBRACE mapCreatorRestPair (COMMA mapCreatorRestPair )* RBRACE
    ;

mapCreatorRestPair
    : expression MAP expression
    ;

setCreatorRest
	: LBRACE expression (COMMA ( expression ))* RBRACE
	;

arguments
    : LPAREN expressionList? RPAREN
    ;

soqlLiteral
    : LBRACK (soqlLiteral|~RBRACK)*? RBRACK
    ;

id
    : Identifier
    | ABSTRACT
    | BREAK
    | BYTE
    | CATCH
    | CHAR
    | CLASS
    | CONST
    | CONTINUE
    | DEFAULT
    | DELETE
    | DO
    | ELSE
    | ENUM
    | EXTENDS
    | FINAL
    | FINALLY
    | FOR
    | GET
    | GLOBAL
    | IF
    | IMPLEMENTS
    | INHERITED
    | INSERT
    | INSTANCEOF
    | INTERFACE
    | MERGE
    | NEW
    | NULL
    | ON
    | OVERRIDE
    | PRIVATE
    | PROTECTED
    | PUBLIC
    | RETURN
    | RUNAS
    | SET
    | SHARING
    | SHORT
    | STATIC
    | SWITCH
    | TESTMETHOD
    | THROW
    | TRANSIENT
    | TRY
    | UNDELETE
    | UPDATE
    | UPSERT
    | VIRTUAL
    | VOID
    | WEBSERVICE
    | WHEN
    | WHILE
    | WITH
    | WITHOUT
    ;

