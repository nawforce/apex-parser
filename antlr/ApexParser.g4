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

// entry point for Apex trigger files
triggerUnit
    : TRIGGER id ON id LPAREN triggerCase (COMMA triggerCase)* RPAREN block EOF
    ;

triggerCase
    : (BEFORE|AFTER) (INSERT|UPDATE|DELETE|UNDELETE)
    ;

// entry point for Apex class files
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
    : (typeRef|VOID) id formalParameters
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
    : LIST typeArguments?
    | SET typeArguments?
    | MAP typeArguments?
    | id typeArguments?
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
    | LongLiteral
    | NumberLiteral
    | StringLiteral
    | BooleanLiteral
    | NULL
    ;

// ANNOTATIONS

annotation
    : ATSIGN qualifiedName ( LPAREN ( elementValuePairs | elementValue )? RPAREN )?
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
    : WHEN whenValue block
    ;

whenValue
    : ELSE
    | whenLiteral (COMMA whenLiteral)*
    | id id
    ;

whenLiteral
    : (SUB)? IntegerLiteral
    | LongLiteral
    | StringLiteral
    | NULL
    | id
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
    : SYSTEMRUNAS LPAREN expressionList? RPAREN block
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
    : typeRef id COLON expression
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
    | expression (DOT | QUESTIONDOT)
        ( dotMethodCall
        | anyId
        )                                                                                             # dotExpression
    | expression LBRACK expression RBRACK                                                             # arrayExpression
    | methodCall                                                                                      # methodCallExpression
    | NEW creator                                                                                     # newExpression
    | LPAREN typeRef RPAREN expression                                                                # castExpression
    | LPAREN expression RPAREN                                                                        # subExpression
    | expression (INC | DEC)                                                                          # postOpExpression
    | (ADD|SUB|INC|DEC) expression                                                                    # preOpExpression
    | (TILDE|BANG) expression                                                                         # negExpression
    | expression (MUL|DIV|MOD) expression                                                             # arth1Expression
    | expression (ADD|SUB) expression                                                                 # arth2Expression
    | expression (LT LT | GT GT GT | GT GT) expression                                                # bitExpression
    | expression (GT | LT) ASSIGN? expression                                                         # cmpExpression
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
    : THIS                                                                                           # thisPrimary
    | SUPER                                                                                          # superPrimary
    | literal                                                                                        # literalPrimary
    | typeRef DOT CLASS                                                                              # typeRefPrimary
    | id                                                                                             # idPrimary
    | soqlLiteral                                                                                    # soqlPrimary
    | soslLiteral                                                                                    # soslPrimary
    ;

methodCall
    : id LPAREN expressionList? RPAREN
    | THIS LPAREN expressionList? RPAREN
    | SUPER LPAREN expressionList? RPAREN
    ;

dotMethodCall
    : anyId LPAREN expressionList? RPAREN
    ;

creator
    :  createdName (noRest | classCreatorRest | arrayCreatorRest | mapCreatorRest | setCreatorRest)
    ;

createdName
    : idCreatedNamePair (DOT idCreatedNamePair)*
    ;

idCreatedNamePair
    : anyId (LT typeList GT)?
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
    : expression MAPTO expression
    ;

setCreatorRest
	: LBRACE expression (COMMA ( expression ))* RBRACE
	;

arguments
    : LPAREN expressionList? RPAREN
    ;

// SOQL

soqlLiteral
    : LBRACK query RBRACK
    ;

query
    : SELECT selectList
        FROM fromNameList
        usingScope?
        whereClause?
        withClause?
        groupByClause?
        orderByClause?
        limitClause?
        offsetClause?
        allRowsClause?
        forClauses;

subQuery
    : SELECT subFieldList
        FROM fromNameList
        whereClause?
        orderByClause?
        limitClause?
        forClauses;

selectList
    : selectEntry (COMMA selectEntry)*;

selectEntry
    : fieldName soqlId?
    | soqlFunction soqlId?
    | LPAREN subQuery RPAREN soqlId?
    | typeOf
    ;

fieldName
    : soqlId (DOT soqlId)*;

fromNameList
    : fieldName soqlId? (COMMA fieldName soqlId?)*;

subFieldList
    : subFieldEntry (COMMA subFieldEntry)*;

subFieldEntry
    : fieldName soqlId?
    | soqlFunction soqlId?;

soqlFieldsParameter
    : ALL
    | CUSTOM
    | STANDARD;

soqlFunction
    : AVG LPAREN fieldName RPAREN
    | COUNT LPAREN RPAREN
    | COUNT LPAREN fieldName RPAREN
    | COUNT_DISTINCT LPAREN fieldName RPAREN
    | MIN LPAREN fieldName RPAREN
    | MAX LPAREN fieldName RPAREN
    | SUM LPAREN fieldName RPAREN
    | TOLABEL LPAREN fieldName RPAREN
    | FORMAT LPAREN fieldName RPAREN
    | CALENDAR_MONTH LPAREN dateFieldName RPAREN
    | CALENDAR_QUARTER LPAREN dateFieldName RPAREN
    | CALENDAR_YEAR LPAREN dateFieldName RPAREN
    | DAY_IN_MONTH LPAREN dateFieldName RPAREN
    | DAY_IN_WEEK LPAREN dateFieldName RPAREN
    | DAY_IN_YEAR LPAREN dateFieldName RPAREN
    | DAY_ONLY LPAREN dateFieldName RPAREN
    | FISCAL_MONTH LPAREN dateFieldName RPAREN
    | FISCAL_QUARTER LPAREN dateFieldName RPAREN
    | FISCAL_YEAR LPAREN dateFieldName RPAREN
    | HOUR_IN_DAY LPAREN dateFieldName RPAREN
    | WEEK_IN_MONTH LPAREN dateFieldName RPAREN
    | WEEK_IN_YEAR LPAREN dateFieldName RPAREN
    | FIELDS LPAREN soqlFieldsParameter RPAREN
    ;

 dateFieldName
    : CONVERT_TIMEZONE LPAREN fieldName RPAREN
    | fieldName
    ;

typeOf
    : TYPEOF fieldName whenClause+ elseClause? END;

whenClause
    : WHEN fieldName THEN fieldNameList;

elseClause
    : ELSE fieldNameList;

fieldNameList
    : fieldName (COMMA fieldName)*;

usingScope
    : USING SCOPE soqlId;

whereClause
    : WHERE logicalExpression;

logicalExpression
    : conditionalExpression (SOQLAND conditionalExpression)*
    | conditionalExpression (SOQLOR conditionalExpression)*
    | NOT conditionalExpression;

conditionalExpression
    : LPAREN logicalExpression RPAREN
    | fieldExpression;

fieldExpression
    : fieldName comparisonOperator value
    | soqlFunction comparisonOperator value;

comparisonOperator
    : ASSIGN | NOTEQUAL | LT | GT | LT ASSIGN | GT ASSIGN | LESSANDGREATER | LIKE | IN | NOT IN | INCLUDES | EXCLUDES;

value
    : NULL
    | BooleanLiteral
    | IntegerLiteral
    | LongLiteral
    | NumberLiteral
    | StringLiteral
    | DateLiteral
    | DateTimeLiteral
    | dateFormula
    | currencyValue
    | LPAREN subQuery RPAREN
    | valueList
    | boundExpression
    ;

valueList
    : LPAREN value (COMMA value)* RPAREN;

currencyValue: soqlId signedInteger;

withClause
    : WITH DATA CATEGORY filteringExpression
    | WITH SECURITY_ENFORCED
    | WITH logicalExpression;

filteringExpression
    : dataCategorySelection (AND dataCategorySelection)*;

dataCategorySelection
    : soqlId filteringSelector dataCategoryName;

dataCategoryName
    : soqlId
    | LPAREN soqlId (COMMA soqlId)* LPAREN;

filteringSelector
    : AT | ABOVE | BELOW | ABOVE_OR_BELOW;

groupByClause
    : GROUP BY selectList (HAVING logicalExpression)?
    | GROUP BY ROLLUP LPAREN fieldName (COMMA fieldName)* RPAREN
    | GROUP BY CUBE LPAREN fieldName (COMMA fieldName)* RPAREN;

orderByClause
    : ORDER BY fieldOrderList;

fieldOrderList
    : fieldOrder (COMMA fieldOrder)*;

fieldOrder
    : fieldName (ASC | DESC)? (NULLS (FIRST|LAST))?
    | soqlFunction (ASC | DESC)? (NULLS (FIRST|LAST))?;

limitClause
    : LIMIT IntegerLiteral
    | LIMIT boundExpression;

offsetClause
    : OFFSET IntegerLiteral
    | OFFSET boundExpression;

allRowsClause
    : ALL ROWS;

forClauses
    : (FOR (VIEW | UPDATE | REFERENCE))*;

boundExpression
    : COLON expression;

dateFormula
    : YESTERDAY
    | TODAY
    | TOMORROW
    | LAST_WEEK
    | THIS_WEEK
    | NEXT_WEEK
    | LAST_MONTH
    | THIS_MONTH
    | NEXT_MONTH
    | LAST_90_DAYS
    | NEXT_90_DAYS
    | LAST_N_DAYS_N COLON signedInteger
    | NEXT_N_DAYS_N COLON signedInteger
    | NEXT_N_WEEKS_N COLON signedInteger
    | LAST_N_WEEKS_N COLON signedInteger
    | NEXT_N_MONTHS_N COLON signedInteger
    | LAST_N_MONTHS_N COLON signedInteger
    | THIS_QUARTER
    | LAST_QUARTER
    | NEXT_QUARTER
    | NEXT_N_QUARTERS_N COLON signedInteger
    | LAST_N_QUARTERS_N COLON signedInteger
    | THIS_YEAR
    | LAST_YEAR
    | NEXT_YEAR
    | NEXT_N_YEARS_N COLON signedInteger
    | LAST_N_YEARS_N COLON signedInteger
    | THIS_FISCAL_QUARTER
    | LAST_FISCAL_QUARTER
    | NEXT_FISCAL_QUARTER
    | NEXT_N_FISCAL_QUARTERS_N COLON signedInteger
    | LAST_N_FISCAL_QUARTERS_N COLON signedInteger
    | THIS_FISCAL_YEAR
    | LAST_FISCAL_YEAR
    | NEXT_FISCAL_YEAR
    | NEXT_N_FISCAL_YEARS_N COLON signedInteger
    | LAST_N_FISCAL_YEARS_N COLON signedInteger
    ;

signedInteger
    : (ADD | SUB)? IntegerLiteral;

soqlId
    : id;

// SOSL
soslLiteral
    : FindLiteral soslClauses RBRACK
    | LBRACK FIND boundExpression soslClauses RBRACK
    ;

soslClauses
    : (IN searchGroup)?
      (RETURNING fieldSpecList)?
      (WITH DIVISION ASSIGN StringLiteral)?
      (WITH DATA CATEGORY filteringExpression)?
      (WITH SNIPPET (LPAREN TARGET_LENGTH ASSIGN IntegerLiteral RPAREN)? )?
      (WITH NETWORK IN LPAREN networkList RPAREN)?
      (WITH NETWORK ASSIGN StringLiteral)?
      (WITH PRICEBOOKID ASSIGN StringLiteral)?
      (WITH METADATA ASSIGN StringLiteral)?
      limitClause?
      (UPDATE updateList)?
    ;

searchGroup
    : (ALL|EMAIL|NAME|PHONE|SIDEBAR) FIELDS
    ;

fieldSpecList
    : fieldSpec (COMMA fieldSpecList)*
    ;

fieldSpec
    : soslId (LPAREN fieldList
        (WHERE logicalExpression)?
        (USING LISTVIEW ASSIGN soslId)?
        (ORDER BY fieldOrderList)?
        limitClause?
        offsetClause?
        RPAREN)?
    ;

fieldList
    : soslId (COMMA fieldList)*
    ;

updateList
    : updateType (COMMA updateList)?
    ;

updateType
    : TRACKING | VIEWSTAT;

 networkList
    : StringLiteral (COMMA networkList)?
    ;

soslId
    : id (DOT soslId)*;

// Identifiers

// Some keywords can be used as general identifiers, this is likely an over simplification of the actual
// rules but divining them from playing with Apex is very difficult. We could let any be used but that
// can significantly impact the parser performance by creating ambiguities.
id
    : Identifier
    | AFTER
    | BEFORE
    | GET
    | INHERITED
    | INSTANCEOF
    | SET
    | SHARING
    | SWITCH
    | TRANSIENT
    | TRIGGER
    | WHEN
    | WITH
    | WITHOUT
    // SOQL Specific Keywords
    | SELECT
    | COUNT
    | FROM
    | AS
    | USING
    | SCOPE
    | WHERE
    | ORDER
    | BY
    | LIMIT
    | SOQLAND
    | SOQLOR
    | NOT
    | AVG
    | COUNT_DISTINCT
    | MIN
    | MAX
    | SUM
    | TYPEOF
    | END
    | THEN
    | LIKE
    | IN
    | INCLUDES
    | EXCLUDES
    | ASC
    | DESC
    | NULLS
    | FIRST
    | LAST
    | GROUP
    | ALL
    | ROWS
    | VIEW
    | HAVING
    | ROLLUP
    | TOLABEL
    | OFFSET
    | DATA
    | CATEGORY
    | AT
    | ABOVE
    | BELOW
    | ABOVE_OR_BELOW
    | SECURITY_ENFORCED
    | REFERENCE
    | CUBE
    | FORMAT
    | TRACKING
    | VIEWSTAT
    | STANDARD
    | CUSTOM
    // SOQL date functions
    | CALENDAR_MONTH
    | CALENDAR_QUARTER
    | CALENDAR_YEAR
    | DAY_IN_MONTH
    | DAY_IN_WEEK
    | DAY_IN_YEAR
    | DAY_ONLY
    | FISCAL_MONTH
    | FISCAL_QUARTER
    | FISCAL_YEAR
    | HOUR_IN_DAY
    | WEEK_IN_MONTH
    | WEEK_IN_YEAR
    | CONVERT_TIMEZONE
    // SOQL date formulas
    | YESTERDAY
    | TODAY
    | TOMORROW
    | LAST_WEEK
    | THIS_WEEK
    | NEXT_WEEK
    | LAST_MONTH
    | THIS_MONTH
    | NEXT_MONTH
    | LAST_90_DAYS
    | NEXT_90_DAYS
    | LAST_N_DAYS_N
    | NEXT_N_DAYS_N
    | NEXT_N_WEEKS_N
    | LAST_N_WEEKS_N
    | NEXT_N_MONTHS_N
    | LAST_N_MONTHS_N
    | THIS_QUARTER
    | LAST_QUARTER
    | NEXT_QUARTER
    | NEXT_N_QUARTERS_N
    | LAST_N_QUARTERS_N
    | THIS_YEAR
    | LAST_YEAR
    | NEXT_YEAR
    | NEXT_N_YEARS_N
    | LAST_N_YEARS_N
    | THIS_FISCAL_QUARTER
    | LAST_FISCAL_QUARTER
    | NEXT_FISCAL_QUARTER
    | NEXT_N_FISCAL_QUARTERS_N
    | LAST_N_FISCAL_QUARTERS_N
    | THIS_FISCAL_YEAR
    | LAST_FISCAL_YEAR
    | NEXT_FISCAL_YEAR
    | NEXT_N_FISCAL_YEARS_N
    | LAST_N_FISCAL_YEARS_N
    // SOSL Keywords
    | FIND
    | EMAIL
    | NAME
    | PHONE
    | SIDEBAR
    | FIELDS
    | METADATA
    | PRICEBOOKID
    | NETWORK
    | SNIPPET
    | TARGET_LENGTH
    | DIVISION
    | RETURNING
    | LISTVIEW
    ;

// In dot expressions we, can use a wider set of of identifiers, apparently any of them althogh I have excluding VOID
// in the interests of reducing ambiguity
anyId
    : Identifier
    // Apex Keywords
    | ABSTRACT
    | AFTER
    | BEFORE
    | BREAK
    | CATCH
    | CLASS
    | CONTINUE
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
    | LIST
    | MAP
    | MERGE
    | NEW
    | NULL
    | ON
    | OVERRIDE
    | PRIVATE
    | PROTECTED
    | PUBLIC
    | RETURN
    | SET
    | SHARING
    | STATIC
    | SUPER
    | SWITCH
    | TESTMETHOD
    | THIS
    | THROW
    | TRANSIENT
    | TRIGGER
    | TRY
    | UNDELETE
    | UPDATE
    | UPSERT
    | VIRTUAL
    | WEBSERVICE
    | WHEN
    | WHILE
    | WITH
    | WITHOUT
    // SOQL Specific Keywords
    | SELECT
    | COUNT
    | FROM
    | AS
    | USING
    | SCOPE
    | WHERE
    | ORDER
    | BY
    | LIMIT
    | SOQLAND
    | SOQLOR
    | NOT
    | AVG
    | COUNT_DISTINCT
    | MIN
    | MAX
    | SUM
    | TYPEOF
    | END
    | THEN
    | LIKE
    | IN
    | INCLUDES
    | EXCLUDES
    | ASC
    | DESC
    | NULLS
    | FIRST
    | LAST
    | GROUP
    | ALL
    | ROWS
    | VIEW
    | HAVING
    | ROLLUP
    | TOLABEL
    | OFFSET
    | DATA
    | CATEGORY
    | AT
    | ABOVE
    | BELOW
    | ABOVE_OR_BELOW
    | SECURITY_ENFORCED
    | REFERENCE
    | CUBE
    | FORMAT
    | TRACKING
    | VIEWSTAT
    | STANDARD
    | CUSTOM
    // SOQL date functions
    | CALENDAR_MONTH
    | CALENDAR_QUARTER
    | CALENDAR_YEAR
    | DAY_IN_MONTH
    | DAY_IN_WEEK
    | DAY_IN_YEAR
    | DAY_ONLY
    | FISCAL_MONTH
    | FISCAL_QUARTER
    | FISCAL_YEAR
    | HOUR_IN_DAY
    | WEEK_IN_MONTH
    | WEEK_IN_YEAR
    | CONVERT_TIMEZONE
    // SOQL date formulas
    | YESTERDAY
    | TODAY
    | TOMORROW
    | LAST_WEEK
    | THIS_WEEK
    | NEXT_WEEK
    | LAST_MONTH
    | THIS_MONTH
    | NEXT_MONTH
    | LAST_90_DAYS
    | NEXT_90_DAYS
    | LAST_N_DAYS_N
    | NEXT_N_DAYS_N
    | NEXT_N_WEEKS_N
    | LAST_N_WEEKS_N
    | NEXT_N_MONTHS_N
    | LAST_N_MONTHS_N
    | THIS_QUARTER
    | LAST_QUARTER
    | NEXT_QUARTER
    | NEXT_N_QUARTERS_N
    | LAST_N_QUARTERS_N
    | THIS_YEAR
    | LAST_YEAR
    | NEXT_YEAR
    | NEXT_N_YEARS_N
    | LAST_N_YEARS_N
    | THIS_FISCAL_QUARTER
    | LAST_FISCAL_QUARTER
    | NEXT_FISCAL_QUARTER
    | NEXT_N_FISCAL_QUARTERS_N
    | LAST_N_FISCAL_QUARTERS_N
    | THIS_FISCAL_YEAR
    | LAST_FISCAL_YEAR
    | NEXT_FISCAL_YEAR
    | NEXT_N_FISCAL_YEARS_N
    | LAST_N_FISCAL_YEARS_N
    // SOSL Keywords
    | FIND
    | EMAIL
    | NAME
    | PHONE
    | SIDEBAR
    | FIELDS
    | METADATA
    | PRICEBOOKID
    | NETWORK
    | SNIPPET
    | TARGET_LENGTH
    | DIVISION
    | RETURNING
    | LISTVIEW
    ;
