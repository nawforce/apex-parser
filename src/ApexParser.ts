// Generated from ApexParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ApexParserListener } from "./ApexParserListener";
import { ApexParserVisitor } from "./ApexParserVisitor";


export class ApexParser extends Parser {
	public static readonly ABSTRACT = 1;
	public static readonly AFTER = 2;
	public static readonly BEFORE = 3;
	public static readonly BREAK = 4;
	public static readonly CATCH = 5;
	public static readonly CLASS = 6;
	public static readonly CONTINUE = 7;
	public static readonly DELETE = 8;
	public static readonly DO = 9;
	public static readonly ELSE = 10;
	public static readonly ENUM = 11;
	public static readonly EXTENDS = 12;
	public static readonly FINAL = 13;
	public static readonly FINALLY = 14;
	public static readonly FOR = 15;
	public static readonly GET = 16;
	public static readonly GLOBAL = 17;
	public static readonly IF = 18;
	public static readonly IMPLEMENTS = 19;
	public static readonly INHERITED = 20;
	public static readonly INSERT = 21;
	public static readonly INSTANCEOF = 22;
	public static readonly INTERFACE = 23;
	public static readonly MERGE = 24;
	public static readonly NEW = 25;
	public static readonly NULL = 26;
	public static readonly ON = 27;
	public static readonly OVERRIDE = 28;
	public static readonly PRIVATE = 29;
	public static readonly PROTECTED = 30;
	public static readonly PUBLIC = 31;
	public static readonly RETURN = 32;
	public static readonly SYSTEMRUNAS = 33;
	public static readonly SET = 34;
	public static readonly SHARING = 35;
	public static readonly STATIC = 36;
	public static readonly SUPER = 37;
	public static readonly SWITCH = 38;
	public static readonly TESTMETHOD = 39;
	public static readonly THIS = 40;
	public static readonly THROW = 41;
	public static readonly TRANSIENT = 42;
	public static readonly TRIGGER = 43;
	public static readonly TRY = 44;
	public static readonly UNDELETE = 45;
	public static readonly UPDATE = 46;
	public static readonly UPSERT = 47;
	public static readonly VIRTUAL = 48;
	public static readonly VOID = 49;
	public static readonly WEBSERVICE = 50;
	public static readonly WHEN = 51;
	public static readonly WHILE = 52;
	public static readonly WITH = 53;
	public static readonly WITHOUT = 54;
	public static readonly LIST = 55;
	public static readonly MAP = 56;
	public static readonly SELECT = 57;
	public static readonly COUNT = 58;
	public static readonly FROM = 59;
	public static readonly AS = 60;
	public static readonly USING = 61;
	public static readonly SCOPE = 62;
	public static readonly WHERE = 63;
	public static readonly ORDER = 64;
	public static readonly BY = 65;
	public static readonly LIMIT = 66;
	public static readonly SOQLAND = 67;
	public static readonly SOQLOR = 68;
	public static readonly NOT = 69;
	public static readonly AVG = 70;
	public static readonly COUNT_DISTINCT = 71;
	public static readonly MIN = 72;
	public static readonly MAX = 73;
	public static readonly SUM = 74;
	public static readonly TYPEOF = 75;
	public static readonly END = 76;
	public static readonly THEN = 77;
	public static readonly LIKE = 78;
	public static readonly IN = 79;
	public static readonly INCLUDES = 80;
	public static readonly EXCLUDES = 81;
	public static readonly ASC = 82;
	public static readonly DESC = 83;
	public static readonly NULLS = 84;
	public static readonly FIRST = 85;
	public static readonly LAST = 86;
	public static readonly GROUP = 87;
	public static readonly ALL = 88;
	public static readonly ROWS = 89;
	public static readonly VIEW = 90;
	public static readonly HAVING = 91;
	public static readonly ROLLUP = 92;
	public static readonly TOLABEL = 93;
	public static readonly OFFSET = 94;
	public static readonly DATA = 95;
	public static readonly CATEGORY = 96;
	public static readonly AT = 97;
	public static readonly ABOVE = 98;
	public static readonly BELOW = 99;
	public static readonly ABOVE_OR_BELOW = 100;
	public static readonly SECURITY_ENFORCED = 101;
	public static readonly REFERENCE = 102;
	public static readonly CUBE = 103;
	public static readonly FORMAT = 104;
	public static readonly TRACKING = 105;
	public static readonly VIEWSTAT = 106;
	public static readonly CALENDAR_MONTH = 107;
	public static readonly CALENDAR_QUARTER = 108;
	public static readonly CALENDAR_YEAR = 109;
	public static readonly DAY_IN_MONTH = 110;
	public static readonly DAY_IN_WEEK = 111;
	public static readonly DAY_IN_YEAR = 112;
	public static readonly DAY_ONLY = 113;
	public static readonly FISCAL_MONTH = 114;
	public static readonly FISCAL_QUARTER = 115;
	public static readonly FISCAL_YEAR = 116;
	public static readonly HOUR_IN_DAY = 117;
	public static readonly WEEK_IN_MONTH = 118;
	public static readonly WEEK_IN_YEAR = 119;
	public static readonly CONVERT_TIMEZONE = 120;
	public static readonly YESTERDAY = 121;
	public static readonly TODAY = 122;
	public static readonly TOMORROW = 123;
	public static readonly LAST_WEEK = 124;
	public static readonly THIS_WEEK = 125;
	public static readonly NEXT_WEEK = 126;
	public static readonly LAST_MONTH = 127;
	public static readonly THIS_MONTH = 128;
	public static readonly NEXT_MONTH = 129;
	public static readonly LAST_90_DAYS = 130;
	public static readonly NEXT_90_DAYS = 131;
	public static readonly LAST_N_DAYS_N = 132;
	public static readonly NEXT_N_DAYS_N = 133;
	public static readonly NEXT_N_WEEKS_N = 134;
	public static readonly LAST_N_WEEKS_N = 135;
	public static readonly NEXT_N_MONTHS_N = 136;
	public static readonly LAST_N_MONTHS_N = 137;
	public static readonly THIS_QUARTER = 138;
	public static readonly LAST_QUARTER = 139;
	public static readonly NEXT_QUARTER = 140;
	public static readonly NEXT_N_QUARTERS_N = 141;
	public static readonly LAST_N_QUARTERS_N = 142;
	public static readonly THIS_YEAR = 143;
	public static readonly LAST_YEAR = 144;
	public static readonly NEXT_YEAR = 145;
	public static readonly NEXT_N_YEARS_N = 146;
	public static readonly LAST_N_YEARS_N = 147;
	public static readonly THIS_FISCAL_QUARTER = 148;
	public static readonly LAST_FISCAL_QUARTER = 149;
	public static readonly NEXT_FISCAL_QUARTER = 150;
	public static readonly NEXT_N_FISCAL_QUARTERS_N = 151;
	public static readonly LAST_N_FISCAL_QUARTERS_N = 152;
	public static readonly THIS_FISCAL_YEAR = 153;
	public static readonly LAST_FISCAL_YEAR = 154;
	public static readonly NEXT_FISCAL_YEAR = 155;
	public static readonly NEXT_N_FISCAL_YEARS_N = 156;
	public static readonly LAST_N_FISCAL_YEARS_N = 157;
	public static readonly DateLiteral = 158;
	public static readonly DateTimeLiteral = 159;
	public static readonly FIND = 160;
	public static readonly EMAIL = 161;
	public static readonly NAME = 162;
	public static readonly PHONE = 163;
	public static readonly SIDEBAR = 164;
	public static readonly FIELDS = 165;
	public static readonly METADATA = 166;
	public static readonly PRICEBOOKID = 167;
	public static readonly NETWORK = 168;
	public static readonly SNIPPET = 169;
	public static readonly TARGET_LENGTH = 170;
	public static readonly DIVISION = 171;
	public static readonly RETURNING = 172;
	public static readonly LISTVIEW = 173;
	public static readonly FindLiteral = 174;
	public static readonly IntegerLiteral = 175;
	public static readonly LongLiteral = 176;
	public static readonly NumberLiteral = 177;
	public static readonly BooleanLiteral = 178;
	public static readonly StringLiteral = 179;
	public static readonly NullLiteral = 180;
	public static readonly LPAREN = 181;
	public static readonly RPAREN = 182;
	public static readonly LBRACE = 183;
	public static readonly RBRACE = 184;
	public static readonly LBRACK = 185;
	public static readonly RBRACK = 186;
	public static readonly SEMI = 187;
	public static readonly COMMA = 188;
	public static readonly DOT = 189;
	public static readonly ASSIGN = 190;
	public static readonly GT = 191;
	public static readonly LT = 192;
	public static readonly BANG = 193;
	public static readonly TILDE = 194;
	public static readonly QUESTIONDOT = 195;
	public static readonly QUESTION = 196;
	public static readonly COLON = 197;
	public static readonly EQUAL = 198;
	public static readonly TRIPLEEQUAL = 199;
	public static readonly NOTEQUAL = 200;
	public static readonly LESSANDGREATER = 201;
	public static readonly TRIPLENOTEQUAL = 202;
	public static readonly AND = 203;
	public static readonly OR = 204;
	public static readonly INC = 205;
	public static readonly DEC = 206;
	public static readonly ADD = 207;
	public static readonly SUB = 208;
	public static readonly MUL = 209;
	public static readonly DIV = 210;
	public static readonly BITAND = 211;
	public static readonly BITOR = 212;
	public static readonly CARET = 213;
	public static readonly MOD = 214;
	public static readonly MAPTO = 215;
	public static readonly ADD_ASSIGN = 216;
	public static readonly SUB_ASSIGN = 217;
	public static readonly MUL_ASSIGN = 218;
	public static readonly DIV_ASSIGN = 219;
	public static readonly AND_ASSIGN = 220;
	public static readonly OR_ASSIGN = 221;
	public static readonly XOR_ASSIGN = 222;
	public static readonly MOD_ASSIGN = 223;
	public static readonly LSHIFT_ASSIGN = 224;
	public static readonly RSHIFT_ASSIGN = 225;
	public static readonly URSHIFT_ASSIGN = 226;
	public static readonly ATSIGN = 227;
	public static readonly Identifier = 228;
	public static readonly WS = 229;
	public static readonly DOC_COMMENT = 230;
	public static readonly COMMENT = 231;
	public static readonly LINE_COMMENT = 232;
	public static readonly RULE_triggerUnit = 0;
	public static readonly RULE_triggerCase = 1;
	public static readonly RULE_compilationUnit = 2;
	public static readonly RULE_typeDeclaration = 3;
	public static readonly RULE_classDeclaration = 4;
	public static readonly RULE_enumDeclaration = 5;
	public static readonly RULE_enumConstants = 6;
	public static readonly RULE_interfaceDeclaration = 7;
	public static readonly RULE_typeList = 8;
	public static readonly RULE_classBody = 9;
	public static readonly RULE_interfaceBody = 10;
	public static readonly RULE_classBodyDeclaration = 11;
	public static readonly RULE_modifier = 12;
	public static readonly RULE_memberDeclaration = 13;
	public static readonly RULE_methodDeclaration = 14;
	public static readonly RULE_constructorDeclaration = 15;
	public static readonly RULE_fieldDeclaration = 16;
	public static readonly RULE_propertyDeclaration = 17;
	public static readonly RULE_interfaceMethodDeclaration = 18;
	public static readonly RULE_variableDeclarators = 19;
	public static readonly RULE_variableDeclarator = 20;
	public static readonly RULE_arrayInitializer = 21;
	public static readonly RULE_typeRef = 22;
	public static readonly RULE_arraySubscripts = 23;
	public static readonly RULE_typeName = 24;
	public static readonly RULE_typeArguments = 25;
	public static readonly RULE_formalParameters = 26;
	public static readonly RULE_formalParameterList = 27;
	public static readonly RULE_formalParameter = 28;
	public static readonly RULE_qualifiedName = 29;
	public static readonly RULE_literal = 30;
	public static readonly RULE_annotation = 31;
	public static readonly RULE_elementValuePairs = 32;
	public static readonly RULE_elementValuePair = 33;
	public static readonly RULE_elementValue = 34;
	public static readonly RULE_elementValueArrayInitializer = 35;
	public static readonly RULE_block = 36;
	public static readonly RULE_localVariableDeclarationStatement = 37;
	public static readonly RULE_localVariableDeclaration = 38;
	public static readonly RULE_statement = 39;
	public static readonly RULE_ifStatement = 40;
	public static readonly RULE_switchStatement = 41;
	public static readonly RULE_whenControl = 42;
	public static readonly RULE_whenValue = 43;
	public static readonly RULE_whenLiteral = 44;
	public static readonly RULE_forStatement = 45;
	public static readonly RULE_whileStatement = 46;
	public static readonly RULE_doWhileStatement = 47;
	public static readonly RULE_tryStatement = 48;
	public static readonly RULE_returnStatement = 49;
	public static readonly RULE_throwStatement = 50;
	public static readonly RULE_breakStatement = 51;
	public static readonly RULE_continueStatement = 52;
	public static readonly RULE_insertStatement = 53;
	public static readonly RULE_updateStatement = 54;
	public static readonly RULE_deleteStatement = 55;
	public static readonly RULE_undeleteStatement = 56;
	public static readonly RULE_upsertStatement = 57;
	public static readonly RULE_mergeStatement = 58;
	public static readonly RULE_runAsStatement = 59;
	public static readonly RULE_expressionStatement = 60;
	public static readonly RULE_propertyBlock = 61;
	public static readonly RULE_getter = 62;
	public static readonly RULE_setter = 63;
	public static readonly RULE_catchClause = 64;
	public static readonly RULE_finallyBlock = 65;
	public static readonly RULE_forControl = 66;
	public static readonly RULE_forInit = 67;
	public static readonly RULE_enhancedForControl = 68;
	public static readonly RULE_forUpdate = 69;
	public static readonly RULE_parExpression = 70;
	public static readonly RULE_expressionList = 71;
	public static readonly RULE_expression = 72;
	public static readonly RULE_primary = 73;
	public static readonly RULE_methodCall = 74;
	public static readonly RULE_dotMethodCall = 75;
	public static readonly RULE_creator = 76;
	public static readonly RULE_createdName = 77;
	public static readonly RULE_idCreatedNamePair = 78;
	public static readonly RULE_noRest = 79;
	public static readonly RULE_classCreatorRest = 80;
	public static readonly RULE_arrayCreatorRest = 81;
	public static readonly RULE_mapCreatorRest = 82;
	public static readonly RULE_mapCreatorRestPair = 83;
	public static readonly RULE_setCreatorRest = 84;
	public static readonly RULE_arguments = 85;
	public static readonly RULE_soqlLiteral = 86;
	public static readonly RULE_query = 87;
	public static readonly RULE_subQuery = 88;
	public static readonly RULE_selectList = 89;
	public static readonly RULE_selectEntry = 90;
	public static readonly RULE_fieldName = 91;
	public static readonly RULE_fromNameList = 92;
	public static readonly RULE_subFieldList = 93;
	public static readonly RULE_subFieldEntry = 94;
	public static readonly RULE_soqlFunction = 95;
	public static readonly RULE_dateFieldName = 96;
	public static readonly RULE_typeOf = 97;
	public static readonly RULE_whenClause = 98;
	public static readonly RULE_elseClause = 99;
	public static readonly RULE_fieldNameList = 100;
	public static readonly RULE_usingScope = 101;
	public static readonly RULE_whereClause = 102;
	public static readonly RULE_logicalExpression = 103;
	public static readonly RULE_conditionalExpression = 104;
	public static readonly RULE_fieldExpression = 105;
	public static readonly RULE_comparisonOperator = 106;
	public static readonly RULE_value = 107;
	public static readonly RULE_valueList = 108;
	public static readonly RULE_currencyValue = 109;
	public static readonly RULE_withClause = 110;
	public static readonly RULE_filteringExpression = 111;
	public static readonly RULE_dataCategorySelection = 112;
	public static readonly RULE_dataCategoryName = 113;
	public static readonly RULE_filteringSelector = 114;
	public static readonly RULE_groupByClause = 115;
	public static readonly RULE_orderByClause = 116;
	public static readonly RULE_fieldOrderList = 117;
	public static readonly RULE_fieldOrder = 118;
	public static readonly RULE_limitClause = 119;
	public static readonly RULE_offsetClause = 120;
	public static readonly RULE_allRowsClause = 121;
	public static readonly RULE_forClauses = 122;
	public static readonly RULE_boundExpression = 123;
	public static readonly RULE_dateFormula = 124;
	public static readonly RULE_signedInteger = 125;
	public static readonly RULE_soqlId = 126;
	public static readonly RULE_soslLiteral = 127;
	public static readonly RULE_soslClauses = 128;
	public static readonly RULE_searchGroup = 129;
	public static readonly RULE_fieldSpecList = 130;
	public static readonly RULE_fieldSpec = 131;
	public static readonly RULE_fieldList = 132;
	public static readonly RULE_updateList = 133;
	public static readonly RULE_updateType = 134;
	public static readonly RULE_networkList = 135;
	public static readonly RULE_soslId = 136;
	public static readonly RULE_id = 137;
	public static readonly RULE_anyId = 138;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"triggerUnit", "triggerCase", "compilationUnit", "typeDeclaration", "classDeclaration", 
		"enumDeclaration", "enumConstants", "interfaceDeclaration", "typeList", 
		"classBody", "interfaceBody", "classBodyDeclaration", "modifier", "memberDeclaration", 
		"methodDeclaration", "constructorDeclaration", "fieldDeclaration", "propertyDeclaration", 
		"interfaceMethodDeclaration", "variableDeclarators", "variableDeclarator", 
		"arrayInitializer", "typeRef", "arraySubscripts", "typeName", "typeArguments", 
		"formalParameters", "formalParameterList", "formalParameter", "qualifiedName", 
		"literal", "annotation", "elementValuePairs", "elementValuePair", "elementValue", 
		"elementValueArrayInitializer", "block", "localVariableDeclarationStatement", 
		"localVariableDeclaration", "statement", "ifStatement", "switchStatement", 
		"whenControl", "whenValue", "whenLiteral", "forStatement", "whileStatement", 
		"doWhileStatement", "tryStatement", "returnStatement", "throwStatement", 
		"breakStatement", "continueStatement", "insertStatement", "updateStatement", 
		"deleteStatement", "undeleteStatement", "upsertStatement", "mergeStatement", 
		"runAsStatement", "expressionStatement", "propertyBlock", "getter", "setter", 
		"catchClause", "finallyBlock", "forControl", "forInit", "enhancedForControl", 
		"forUpdate", "parExpression", "expressionList", "expression", "primary", 
		"methodCall", "dotMethodCall", "creator", "createdName", "idCreatedNamePair", 
		"noRest", "classCreatorRest", "arrayCreatorRest", "mapCreatorRest", "mapCreatorRestPair", 
		"setCreatorRest", "arguments", "soqlLiteral", "query", "subQuery", "selectList", 
		"selectEntry", "fieldName", "fromNameList", "subFieldList", "subFieldEntry", 
		"soqlFunction", "dateFieldName", "typeOf", "whenClause", "elseClause", 
		"fieldNameList", "usingScope", "whereClause", "logicalExpression", "conditionalExpression", 
		"fieldExpression", "comparisonOperator", "value", "valueList", "currencyValue", 
		"withClause", "filteringExpression", "dataCategorySelection", "dataCategoryName", 
		"filteringSelector", "groupByClause", "orderByClause", "fieldOrderList", 
		"fieldOrder", "limitClause", "offsetClause", "allRowsClause", "forClauses", 
		"boundExpression", "dateFormula", "signedInteger", "soqlId", "soslLiteral", 
		"soslClauses", "searchGroup", "fieldSpecList", "fieldSpec", "fieldList", 
		"updateList", "updateType", "networkList", "soslId", "id", "anyId",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'abstract'", "'after'", "'before'", "'break'", "'catch'", 
		"'class'", "'continue'", "'delete'", "'do'", "'else'", "'enum'", "'extends'", 
		"'final'", "'finally'", "'for'", "'get'", "'global'", "'if'", "'implements'", 
		"'inherited'", "'insert'", "'instanceof'", "'interface'", "'merge'", "'new'", 
		"'null'", "'on'", "'override'", "'private'", "'protected'", "'public'", 
		"'return'", "'system.runas'", "'set'", "'sharing'", "'static'", "'super'", 
		"'switch'", "'testmethod'", "'this'", "'throw'", "'transient'", "'trigger'", 
		"'try'", "'undelete'", "'update'", "'upsert'", "'virtual'", "'void'", 
		"'webservice'", "'when'", "'while'", "'with'", "'without'", "'list'", 
		"'map'", "'select'", "'count'", "'from'", "'as'", "'using'", "'scope'", 
		"'where'", "'order'", "'by'", "'limit'", "'and'", "'or'", "'not'", "'avg'", 
		"'count_distinct'", "'min'", "'max'", "'sum'", "'typeof'", "'end'", "'then'", 
		"'like'", "'in'", "'includes'", "'excludes'", "'asc'", "'desc'", "'nulls'", 
		"'first'", "'last'", "'group'", "'all'", "'rows'", "'view'", "'having'", 
		"'rollup'", "'tolabel'", "'offset'", "'data'", "'category'", "'at'", "'above'", 
		"'below'", "'above_or_below'", "'security_enforced'", "'reference'", "'cube'", 
		"'format'", "'tracking'", "'viewstat'", "'calendar_month'", "'calendar_quarter'", 
		"'calendar_year'", "'day_in_month'", "'day_in_week'", "'day_in_year'", 
		"'day_only'", "'fiscal_month'", "'fiscal_quarter'", "'fiscal_year'", "'hour_in_day'", 
		"'week_in_month'", "'week_in_year'", "'converttimezone'", "'yesterday'", 
		"'today'", "'tomorrow'", "'last_week'", "'this_week'", "'next_week'", 
		"'last_month'", "'this_month'", "'next_month'", "'last_90_days'", "'next_90_days'", 
		"'last_n_days'", "'next_n_days'", "'next_n_weeks'", "'last_n_weeks'", 
		"'next_n_months'", "'last_n_months'", "'this_quarter'", "'last_quarted'", 
		"'next_quarter'", "'next_n_quarters'", "'last_n_quarters'", "'this_year'", 
		"'last_year'", "'next_year'", "'next_n_years'", "'last_n_years'", "'this_fiscal_quarter'", 
		"'last_fiscal_quarter'", "'next_fiscal_quarter'", "'next_n_fiscal_quarters'", 
		"'last_n_fiscal_quarters'", "'this_fiscal_year'", "'last_fiscal_year'", 
		"'next_fiscal_year'", "'next_n_fiscal_years'", "'last_n_fiscal_years'", 
		undefined, undefined, "'find'", "'email'", "'name'", "'phone'", "'sidebar'", 
		"'fields'", "'metadata'", "'pricebookid'", "'network'", "'snippet'", "'target_length'", 
		"'division'", "'returning'", "'listview'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'('", "')'", "'{'", "'}'", 
		"'['", "']'", "';'", "','", "'.'", "'='", "'>'", "'<'", "'!'", "'~'", 
		"'?.'", "'?'", "':'", "'=='", "'==='", "'!='", "'<>'", "'!=='", "'&&'", 
		"'||'", "'++'", "'--'", "'+'", "'-'", "'*'", "'/'", "'&'", "'|'", "'^'", 
		"'%'", "'=>'", "'+='", "'-='", "'*='", "'/='", "'&='", "'|='", "'^='", 
		"'%='", "'<<='", "'>>='", "'>>>='", "'@'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ABSTRACT", "AFTER", "BEFORE", "BREAK", "CATCH", "CLASS", "CONTINUE", 
		"DELETE", "DO", "ELSE", "ENUM", "EXTENDS", "FINAL", "FINALLY", "FOR", 
		"GET", "GLOBAL", "IF", "IMPLEMENTS", "INHERITED", "INSERT", "INSTANCEOF", 
		"INTERFACE", "MERGE", "NEW", "NULL", "ON", "OVERRIDE", "PRIVATE", "PROTECTED", 
		"PUBLIC", "RETURN", "SYSTEMRUNAS", "SET", "SHARING", "STATIC", "SUPER", 
		"SWITCH", "TESTMETHOD", "THIS", "THROW", "TRANSIENT", "TRIGGER", "TRY", 
		"UNDELETE", "UPDATE", "UPSERT", "VIRTUAL", "VOID", "WEBSERVICE", "WHEN", 
		"WHILE", "WITH", "WITHOUT", "LIST", "MAP", "SELECT", "COUNT", "FROM", 
		"AS", "USING", "SCOPE", "WHERE", "ORDER", "BY", "LIMIT", "SOQLAND", "SOQLOR", 
		"NOT", "AVG", "COUNT_DISTINCT", "MIN", "MAX", "SUM", "TYPEOF", "END", 
		"THEN", "LIKE", "IN", "INCLUDES", "EXCLUDES", "ASC", "DESC", "NULLS", 
		"FIRST", "LAST", "GROUP", "ALL", "ROWS", "VIEW", "HAVING", "ROLLUP", "TOLABEL", 
		"OFFSET", "DATA", "CATEGORY", "AT", "ABOVE", "BELOW", "ABOVE_OR_BELOW", 
		"SECURITY_ENFORCED", "REFERENCE", "CUBE", "FORMAT", "TRACKING", "VIEWSTAT", 
		"CALENDAR_MONTH", "CALENDAR_QUARTER", "CALENDAR_YEAR", "DAY_IN_MONTH", 
		"DAY_IN_WEEK", "DAY_IN_YEAR", "DAY_ONLY", "FISCAL_MONTH", "FISCAL_QUARTER", 
		"FISCAL_YEAR", "HOUR_IN_DAY", "WEEK_IN_MONTH", "WEEK_IN_YEAR", "CONVERT_TIMEZONE", 
		"YESTERDAY", "TODAY", "TOMORROW", "LAST_WEEK", "THIS_WEEK", "NEXT_WEEK", 
		"LAST_MONTH", "THIS_MONTH", "NEXT_MONTH", "LAST_90_DAYS", "NEXT_90_DAYS", 
		"LAST_N_DAYS_N", "NEXT_N_DAYS_N", "NEXT_N_WEEKS_N", "LAST_N_WEEKS_N", 
		"NEXT_N_MONTHS_N", "LAST_N_MONTHS_N", "THIS_QUARTER", "LAST_QUARTER", 
		"NEXT_QUARTER", "NEXT_N_QUARTERS_N", "LAST_N_QUARTERS_N", "THIS_YEAR", 
		"LAST_YEAR", "NEXT_YEAR", "NEXT_N_YEARS_N", "LAST_N_YEARS_N", "THIS_FISCAL_QUARTER", 
		"LAST_FISCAL_QUARTER", "NEXT_FISCAL_QUARTER", "NEXT_N_FISCAL_QUARTERS_N", 
		"LAST_N_FISCAL_QUARTERS_N", "THIS_FISCAL_YEAR", "LAST_FISCAL_YEAR", "NEXT_FISCAL_YEAR", 
		"NEXT_N_FISCAL_YEARS_N", "LAST_N_FISCAL_YEARS_N", "DateLiteral", "DateTimeLiteral", 
		"FIND", "EMAIL", "NAME", "PHONE", "SIDEBAR", "FIELDS", "METADATA", "PRICEBOOKID", 
		"NETWORK", "SNIPPET", "TARGET_LENGTH", "DIVISION", "RETURNING", "LISTVIEW", 
		"FindLiteral", "IntegerLiteral", "LongLiteral", "NumberLiteral", "BooleanLiteral", 
		"StringLiteral", "NullLiteral", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
		"LBRACK", "RBRACK", "SEMI", "COMMA", "DOT", "ASSIGN", "GT", "LT", "BANG", 
		"TILDE", "QUESTIONDOT", "QUESTION", "COLON", "EQUAL", "TRIPLEEQUAL", "NOTEQUAL", 
		"LESSANDGREATER", "TRIPLENOTEQUAL", "AND", "OR", "INC", "DEC", "ADD", 
		"SUB", "MUL", "DIV", "BITAND", "BITOR", "CARET", "MOD", "MAPTO", "ADD_ASSIGN", 
		"SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", 
		"MOD_ASSIGN", "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", "URSHIFT_ASSIGN", "ATSIGN", 
		"Identifier", "WS", "DOC_COMMENT", "COMMENT", "LINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ApexParser._LITERAL_NAMES, ApexParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ApexParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ApexParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return ApexParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ApexParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ApexParser._ATN, this);
	}
	// @RuleVersion(0)
	public triggerUnit(): TriggerUnitContext {
		let _localctx: TriggerUnitContext = new TriggerUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ApexParser.RULE_triggerUnit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 278;
			this.match(ApexParser.TRIGGER);
			this.state = 279;
			this.id();
			this.state = 280;
			this.match(ApexParser.ON);
			this.state = 281;
			this.id();
			this.state = 282;
			this.match(ApexParser.LPAREN);
			this.state = 283;
			this.triggerCase();
			this.state = 288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.COMMA) {
				{
				{
				this.state = 284;
				this.match(ApexParser.COMMA);
				this.state = 285;
				this.triggerCase();
				}
				}
				this.state = 290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 291;
			this.match(ApexParser.RPAREN);
			this.state = 292;
			this.block();
			this.state = 293;
			this.match(ApexParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public triggerCase(): TriggerCaseContext {
		let _localctx: TriggerCaseContext = new TriggerCaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ApexParser.RULE_triggerCase);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			_la = this._input.LA(1);
			if (!(_la === ApexParser.AFTER || _la === ApexParser.BEFORE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 296;
			_la = this._input.LA(1);
			if (!(_la === ApexParser.DELETE || _la === ApexParser.INSERT || _la === ApexParser.UNDELETE || _la === ApexParser.UPDATE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compilationUnit(): CompilationUnitContext {
		let _localctx: CompilationUnitContext = new CompilationUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ApexParser.RULE_compilationUnit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 298;
			this.typeDeclaration();
			this.state = 299;
			this.match(ApexParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDeclaration(): TypeDeclarationContext {
		let _localctx: TypeDeclarationContext = new TypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ApexParser.RULE_typeDeclaration);
		let _la: number;
		try {
			this.state = 322;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 304;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.ABSTRACT) | (1 << ApexParser.FINAL) | (1 << ApexParser.GLOBAL) | (1 << ApexParser.INHERITED) | (1 << ApexParser.OVERRIDE) | (1 << ApexParser.PRIVATE) | (1 << ApexParser.PROTECTED) | (1 << ApexParser.PUBLIC))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (ApexParser.STATIC - 36)) | (1 << (ApexParser.TESTMETHOD - 36)) | (1 << (ApexParser.TRANSIENT - 36)) | (1 << (ApexParser.VIRTUAL - 36)) | (1 << (ApexParser.WEBSERVICE - 36)) | (1 << (ApexParser.WITH - 36)) | (1 << (ApexParser.WITHOUT - 36)))) !== 0) || _la === ApexParser.ATSIGN) {
					{
					{
					this.state = 301;
					this.modifier();
					}
					}
					this.state = 306;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 307;
				this.classDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.ABSTRACT) | (1 << ApexParser.FINAL) | (1 << ApexParser.GLOBAL) | (1 << ApexParser.INHERITED) | (1 << ApexParser.OVERRIDE) | (1 << ApexParser.PRIVATE) | (1 << ApexParser.PROTECTED) | (1 << ApexParser.PUBLIC))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (ApexParser.STATIC - 36)) | (1 << (ApexParser.TESTMETHOD - 36)) | (1 << (ApexParser.TRANSIENT - 36)) | (1 << (ApexParser.VIRTUAL - 36)) | (1 << (ApexParser.WEBSERVICE - 36)) | (1 << (ApexParser.WITH - 36)) | (1 << (ApexParser.WITHOUT - 36)))) !== 0) || _la === ApexParser.ATSIGN) {
					{
					{
					this.state = 308;
					this.modifier();
					}
					}
					this.state = 313;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 314;
				this.enumDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 318;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.ABSTRACT) | (1 << ApexParser.FINAL) | (1 << ApexParser.GLOBAL) | (1 << ApexParser.INHERITED) | (1 << ApexParser.OVERRIDE) | (1 << ApexParser.PRIVATE) | (1 << ApexParser.PROTECTED) | (1 << ApexParser.PUBLIC))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (ApexParser.STATIC - 36)) | (1 << (ApexParser.TESTMETHOD - 36)) | (1 << (ApexParser.TRANSIENT - 36)) | (1 << (ApexParser.VIRTUAL - 36)) | (1 << (ApexParser.WEBSERVICE - 36)) | (1 << (ApexParser.WITH - 36)) | (1 << (ApexParser.WITHOUT - 36)))) !== 0) || _la === ApexParser.ATSIGN) {
					{
					{
					this.state = 315;
					this.modifier();
					}
					}
					this.state = 320;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 321;
				this.interfaceDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let _localctx: ClassDeclarationContext = new ClassDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ApexParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			this.match(ApexParser.CLASS);
			this.state = 325;
			this.id();
			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.EXTENDS) {
				{
				this.state = 326;
				this.match(ApexParser.EXTENDS);
				this.state = 327;
				this.typeRef();
				}
			}

			this.state = 332;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.IMPLEMENTS) {
				{
				this.state = 330;
				this.match(ApexParser.IMPLEMENTS);
				this.state = 331;
				this.typeList();
				}
			}

			this.state = 334;
			this.classBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumDeclaration(): EnumDeclarationContext {
		let _localctx: EnumDeclarationContext = new EnumDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ApexParser.RULE_enumDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 336;
			this.match(ApexParser.ENUM);
			this.state = 337;
			this.id();
			this.state = 338;
			this.match(ApexParser.LBRACE);
			this.state = 340;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.SELECT - 34)) | (1 << (ApexParser.COUNT - 34)) | (1 << (ApexParser.FROM - 34)) | (1 << (ApexParser.AS - 34)) | (1 << (ApexParser.USING - 34)) | (1 << (ApexParser.SCOPE - 34)) | (1 << (ApexParser.WHERE - 34)) | (1 << (ApexParser.ORDER - 34)) | (1 << (ApexParser.BY - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LIMIT - 66)) | (1 << (ApexParser.SOQLAND - 66)) | (1 << (ApexParser.SOQLOR - 66)) | (1 << (ApexParser.NOT - 66)) | (1 << (ApexParser.AVG - 66)) | (1 << (ApexParser.COUNT_DISTINCT - 66)) | (1 << (ApexParser.MIN - 66)) | (1 << (ApexParser.MAX - 66)) | (1 << (ApexParser.SUM - 66)) | (1 << (ApexParser.TYPEOF - 66)) | (1 << (ApexParser.END - 66)) | (1 << (ApexParser.THEN - 66)) | (1 << (ApexParser.LIKE - 66)) | (1 << (ApexParser.IN - 66)) | (1 << (ApexParser.INCLUDES - 66)) | (1 << (ApexParser.EXCLUDES - 66)) | (1 << (ApexParser.ASC - 66)) | (1 << (ApexParser.DESC - 66)) | (1 << (ApexParser.NULLS - 66)) | (1 << (ApexParser.FIRST - 66)) | (1 << (ApexParser.LAST - 66)) | (1 << (ApexParser.GROUP - 66)) | (1 << (ApexParser.ALL - 66)) | (1 << (ApexParser.ROWS - 66)) | (1 << (ApexParser.VIEW - 66)) | (1 << (ApexParser.HAVING - 66)) | (1 << (ApexParser.ROLLUP - 66)) | (1 << (ApexParser.TOLABEL - 66)) | (1 << (ApexParser.OFFSET - 66)) | (1 << (ApexParser.DATA - 66)) | (1 << (ApexParser.CATEGORY - 66)) | (1 << (ApexParser.AT - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ApexParser.ABOVE - 98)) | (1 << (ApexParser.BELOW - 98)) | (1 << (ApexParser.ABOVE_OR_BELOW - 98)) | (1 << (ApexParser.SECURITY_ENFORCED - 98)) | (1 << (ApexParser.REFERENCE - 98)) | (1 << (ApexParser.CUBE - 98)) | (1 << (ApexParser.FORMAT - 98)) | (1 << (ApexParser.TRACKING - 98)) | (1 << (ApexParser.VIEWSTAT - 98)) | (1 << (ApexParser.CALENDAR_MONTH - 98)) | (1 << (ApexParser.CALENDAR_QUARTER - 98)) | (1 << (ApexParser.CALENDAR_YEAR - 98)) | (1 << (ApexParser.DAY_IN_MONTH - 98)) | (1 << (ApexParser.DAY_IN_WEEK - 98)) | (1 << (ApexParser.DAY_IN_YEAR - 98)) | (1 << (ApexParser.DAY_ONLY - 98)) | (1 << (ApexParser.FISCAL_MONTH - 98)) | (1 << (ApexParser.FISCAL_QUARTER - 98)) | (1 << (ApexParser.FISCAL_YEAR - 98)) | (1 << (ApexParser.HOUR_IN_DAY - 98)) | (1 << (ApexParser.WEEK_IN_MONTH - 98)) | (1 << (ApexParser.WEEK_IN_YEAR - 98)) | (1 << (ApexParser.CONVERT_TIMEZONE - 98)) | (1 << (ApexParser.YESTERDAY - 98)) | (1 << (ApexParser.TODAY - 98)) | (1 << (ApexParser.TOMORROW - 98)) | (1 << (ApexParser.LAST_WEEK - 98)) | (1 << (ApexParser.THIS_WEEK - 98)) | (1 << (ApexParser.NEXT_WEEK - 98)) | (1 << (ApexParser.LAST_MONTH - 98)) | (1 << (ApexParser.THIS_MONTH - 98)) | (1 << (ApexParser.NEXT_MONTH - 98)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (ApexParser.LAST_90_DAYS - 130)) | (1 << (ApexParser.NEXT_90_DAYS - 130)) | (1 << (ApexParser.LAST_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_WEEKS_N - 130)) | (1 << (ApexParser.LAST_N_WEEKS_N - 130)) | (1 << (ApexParser.NEXT_N_MONTHS_N - 130)) | (1 << (ApexParser.LAST_N_MONTHS_N - 130)) | (1 << (ApexParser.THIS_QUARTER - 130)) | (1 << (ApexParser.LAST_QUARTER - 130)) | (1 << (ApexParser.NEXT_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_YEAR - 130)) | (1 << (ApexParser.LAST_YEAR - 130)) | (1 << (ApexParser.NEXT_YEAR - 130)) | (1 << (ApexParser.NEXT_N_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_YEARS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_QUARTER - 130)) | (1 << (ApexParser.LAST_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_YEAR - 130)) | (1 << (ApexParser.LAST_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.FIND - 130)) | (1 << (ApexParser.EMAIL - 130)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (ApexParser.NAME - 162)) | (1 << (ApexParser.PHONE - 162)) | (1 << (ApexParser.SIDEBAR - 162)) | (1 << (ApexParser.FIELDS - 162)) | (1 << (ApexParser.METADATA - 162)) | (1 << (ApexParser.PRICEBOOKID - 162)) | (1 << (ApexParser.NETWORK - 162)) | (1 << (ApexParser.SNIPPET - 162)) | (1 << (ApexParser.TARGET_LENGTH - 162)) | (1 << (ApexParser.DIVISION - 162)) | (1 << (ApexParser.RETURNING - 162)) | (1 << (ApexParser.LISTVIEW - 162)))) !== 0) || _la === ApexParser.Identifier) {
				{
				this.state = 339;
				this.enumConstants();
				}
			}

			this.state = 342;
			this.match(ApexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumConstants(): EnumConstantsContext {
		let _localctx: EnumConstantsContext = new EnumConstantsContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ApexParser.RULE_enumConstants);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 344;
			this.id();
			this.state = 349;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.COMMA) {
				{
				{
				this.state = 345;
				this.match(ApexParser.COMMA);
				this.state = 346;
				this.id();
				}
				}
				this.state = 351;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceDeclaration(): InterfaceDeclarationContext {
		let _localctx: InterfaceDeclarationContext = new InterfaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ApexParser.RULE_interfaceDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			this.match(ApexParser.INTERFACE);
			this.state = 353;
			this.id();
			this.state = 356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.EXTENDS) {
				{
				this.state = 354;
				this.match(ApexParser.EXTENDS);
				this.state = 355;
				this.typeList();
				}
			}

			this.state = 358;
			this.interfaceBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ApexParser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			this.typeRef();
			this.state = 365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.COMMA) {
				{
				{
				this.state = 361;
				this.match(ApexParser.COMMA);
				this.state = 362;
				this.typeRef();
				}
				}
				this.state = 367;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBody(): ClassBodyContext {
		let _localctx: ClassBodyContext = new ClassBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ApexParser.RULE_classBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.match(ApexParser.LBRACE);
			this.state = 372;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.ABSTRACT) | (1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.CLASS) | (1 << ApexParser.ENUM) | (1 << ApexParser.FINAL) | (1 << ApexParser.GET) | (1 << ApexParser.GLOBAL) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.INTERFACE) | (1 << ApexParser.OVERRIDE) | (1 << ApexParser.PRIVATE) | (1 << ApexParser.PROTECTED) | (1 << ApexParser.PUBLIC))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.STATIC - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.TESTMETHOD - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.VIRTUAL - 34)) | (1 << (ApexParser.VOID - 34)) | (1 << (ApexParser.WEBSERVICE - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.SELECT - 34)) | (1 << (ApexParser.COUNT - 34)) | (1 << (ApexParser.FROM - 34)) | (1 << (ApexParser.AS - 34)) | (1 << (ApexParser.USING - 34)) | (1 << (ApexParser.SCOPE - 34)) | (1 << (ApexParser.WHERE - 34)) | (1 << (ApexParser.ORDER - 34)) | (1 << (ApexParser.BY - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LIMIT - 66)) | (1 << (ApexParser.SOQLAND - 66)) | (1 << (ApexParser.SOQLOR - 66)) | (1 << (ApexParser.NOT - 66)) | (1 << (ApexParser.AVG - 66)) | (1 << (ApexParser.COUNT_DISTINCT - 66)) | (1 << (ApexParser.MIN - 66)) | (1 << (ApexParser.MAX - 66)) | (1 << (ApexParser.SUM - 66)) | (1 << (ApexParser.TYPEOF - 66)) | (1 << (ApexParser.END - 66)) | (1 << (ApexParser.THEN - 66)) | (1 << (ApexParser.LIKE - 66)) | (1 << (ApexParser.IN - 66)) | (1 << (ApexParser.INCLUDES - 66)) | (1 << (ApexParser.EXCLUDES - 66)) | (1 << (ApexParser.ASC - 66)) | (1 << (ApexParser.DESC - 66)) | (1 << (ApexParser.NULLS - 66)) | (1 << (ApexParser.FIRST - 66)) | (1 << (ApexParser.LAST - 66)) | (1 << (ApexParser.GROUP - 66)) | (1 << (ApexParser.ALL - 66)) | (1 << (ApexParser.ROWS - 66)) | (1 << (ApexParser.VIEW - 66)) | (1 << (ApexParser.HAVING - 66)) | (1 << (ApexParser.ROLLUP - 66)) | (1 << (ApexParser.TOLABEL - 66)) | (1 << (ApexParser.OFFSET - 66)) | (1 << (ApexParser.DATA - 66)) | (1 << (ApexParser.CATEGORY - 66)) | (1 << (ApexParser.AT - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ApexParser.ABOVE - 98)) | (1 << (ApexParser.BELOW - 98)) | (1 << (ApexParser.ABOVE_OR_BELOW - 98)) | (1 << (ApexParser.SECURITY_ENFORCED - 98)) | (1 << (ApexParser.REFERENCE - 98)) | (1 << (ApexParser.CUBE - 98)) | (1 << (ApexParser.FORMAT - 98)) | (1 << (ApexParser.TRACKING - 98)) | (1 << (ApexParser.VIEWSTAT - 98)) | (1 << (ApexParser.CALENDAR_MONTH - 98)) | (1 << (ApexParser.CALENDAR_QUARTER - 98)) | (1 << (ApexParser.CALENDAR_YEAR - 98)) | (1 << (ApexParser.DAY_IN_MONTH - 98)) | (1 << (ApexParser.DAY_IN_WEEK - 98)) | (1 << (ApexParser.DAY_IN_YEAR - 98)) | (1 << (ApexParser.DAY_ONLY - 98)) | (1 << (ApexParser.FISCAL_MONTH - 98)) | (1 << (ApexParser.FISCAL_QUARTER - 98)) | (1 << (ApexParser.FISCAL_YEAR - 98)) | (1 << (ApexParser.HOUR_IN_DAY - 98)) | (1 << (ApexParser.WEEK_IN_MONTH - 98)) | (1 << (ApexParser.WEEK_IN_YEAR - 98)) | (1 << (ApexParser.CONVERT_TIMEZONE - 98)) | (1 << (ApexParser.YESTERDAY - 98)) | (1 << (ApexParser.TODAY - 98)) | (1 << (ApexParser.TOMORROW - 98)) | (1 << (ApexParser.LAST_WEEK - 98)) | (1 << (ApexParser.THIS_WEEK - 98)) | (1 << (ApexParser.NEXT_WEEK - 98)) | (1 << (ApexParser.LAST_MONTH - 98)) | (1 << (ApexParser.THIS_MONTH - 98)) | (1 << (ApexParser.NEXT_MONTH - 98)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (ApexParser.LAST_90_DAYS - 130)) | (1 << (ApexParser.NEXT_90_DAYS - 130)) | (1 << (ApexParser.LAST_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_WEEKS_N - 130)) | (1 << (ApexParser.LAST_N_WEEKS_N - 130)) | (1 << (ApexParser.NEXT_N_MONTHS_N - 130)) | (1 << (ApexParser.LAST_N_MONTHS_N - 130)) | (1 << (ApexParser.THIS_QUARTER - 130)) | (1 << (ApexParser.LAST_QUARTER - 130)) | (1 << (ApexParser.NEXT_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_YEAR - 130)) | (1 << (ApexParser.LAST_YEAR - 130)) | (1 << (ApexParser.NEXT_YEAR - 130)) | (1 << (ApexParser.NEXT_N_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_YEARS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_QUARTER - 130)) | (1 << (ApexParser.LAST_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_YEAR - 130)) | (1 << (ApexParser.LAST_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.FIND - 130)) | (1 << (ApexParser.EMAIL - 130)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (ApexParser.NAME - 162)) | (1 << (ApexParser.PHONE - 162)) | (1 << (ApexParser.SIDEBAR - 162)) | (1 << (ApexParser.FIELDS - 162)) | (1 << (ApexParser.METADATA - 162)) | (1 << (ApexParser.PRICEBOOKID - 162)) | (1 << (ApexParser.NETWORK - 162)) | (1 << (ApexParser.SNIPPET - 162)) | (1 << (ApexParser.TARGET_LENGTH - 162)) | (1 << (ApexParser.DIVISION - 162)) | (1 << (ApexParser.RETURNING - 162)) | (1 << (ApexParser.LISTVIEW - 162)) | (1 << (ApexParser.LBRACE - 162)) | (1 << (ApexParser.SEMI - 162)))) !== 0) || _la === ApexParser.ATSIGN || _la === ApexParser.Identifier) {
				{
				{
				this.state = 369;
				this.classBodyDeclaration();
				}
				}
				this.state = 374;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 375;
			this.match(ApexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceBody(): InterfaceBodyContext {
		let _localctx: InterfaceBodyContext = new InterfaceBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ApexParser.RULE_interfaceBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 377;
			this.match(ApexParser.LBRACE);
			this.state = 381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.ABSTRACT) | (1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.FINAL) | (1 << ApexParser.GET) | (1 << ApexParser.GLOBAL) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.OVERRIDE) | (1 << ApexParser.PRIVATE) | (1 << ApexParser.PROTECTED) | (1 << ApexParser.PUBLIC))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.STATIC - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.TESTMETHOD - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.VIRTUAL - 34)) | (1 << (ApexParser.VOID - 34)) | (1 << (ApexParser.WEBSERVICE - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.SELECT - 34)) | (1 << (ApexParser.COUNT - 34)) | (1 << (ApexParser.FROM - 34)) | (1 << (ApexParser.AS - 34)) | (1 << (ApexParser.USING - 34)) | (1 << (ApexParser.SCOPE - 34)) | (1 << (ApexParser.WHERE - 34)) | (1 << (ApexParser.ORDER - 34)) | (1 << (ApexParser.BY - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LIMIT - 66)) | (1 << (ApexParser.SOQLAND - 66)) | (1 << (ApexParser.SOQLOR - 66)) | (1 << (ApexParser.NOT - 66)) | (1 << (ApexParser.AVG - 66)) | (1 << (ApexParser.COUNT_DISTINCT - 66)) | (1 << (ApexParser.MIN - 66)) | (1 << (ApexParser.MAX - 66)) | (1 << (ApexParser.SUM - 66)) | (1 << (ApexParser.TYPEOF - 66)) | (1 << (ApexParser.END - 66)) | (1 << (ApexParser.THEN - 66)) | (1 << (ApexParser.LIKE - 66)) | (1 << (ApexParser.IN - 66)) | (1 << (ApexParser.INCLUDES - 66)) | (1 << (ApexParser.EXCLUDES - 66)) | (1 << (ApexParser.ASC - 66)) | (1 << (ApexParser.DESC - 66)) | (1 << (ApexParser.NULLS - 66)) | (1 << (ApexParser.FIRST - 66)) | (1 << (ApexParser.LAST - 66)) | (1 << (ApexParser.GROUP - 66)) | (1 << (ApexParser.ALL - 66)) | (1 << (ApexParser.ROWS - 66)) | (1 << (ApexParser.VIEW - 66)) | (1 << (ApexParser.HAVING - 66)) | (1 << (ApexParser.ROLLUP - 66)) | (1 << (ApexParser.TOLABEL - 66)) | (1 << (ApexParser.OFFSET - 66)) | (1 << (ApexParser.DATA - 66)) | (1 << (ApexParser.CATEGORY - 66)) | (1 << (ApexParser.AT - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ApexParser.ABOVE - 98)) | (1 << (ApexParser.BELOW - 98)) | (1 << (ApexParser.ABOVE_OR_BELOW - 98)) | (1 << (ApexParser.SECURITY_ENFORCED - 98)) | (1 << (ApexParser.REFERENCE - 98)) | (1 << (ApexParser.CUBE - 98)) | (1 << (ApexParser.FORMAT - 98)) | (1 << (ApexParser.TRACKING - 98)) | (1 << (ApexParser.VIEWSTAT - 98)) | (1 << (ApexParser.CALENDAR_MONTH - 98)) | (1 << (ApexParser.CALENDAR_QUARTER - 98)) | (1 << (ApexParser.CALENDAR_YEAR - 98)) | (1 << (ApexParser.DAY_IN_MONTH - 98)) | (1 << (ApexParser.DAY_IN_WEEK - 98)) | (1 << (ApexParser.DAY_IN_YEAR - 98)) | (1 << (ApexParser.DAY_ONLY - 98)) | (1 << (ApexParser.FISCAL_MONTH - 98)) | (1 << (ApexParser.FISCAL_QUARTER - 98)) | (1 << (ApexParser.FISCAL_YEAR - 98)) | (1 << (ApexParser.HOUR_IN_DAY - 98)) | (1 << (ApexParser.WEEK_IN_MONTH - 98)) | (1 << (ApexParser.WEEK_IN_YEAR - 98)) | (1 << (ApexParser.CONVERT_TIMEZONE - 98)) | (1 << (ApexParser.YESTERDAY - 98)) | (1 << (ApexParser.TODAY - 98)) | (1 << (ApexParser.TOMORROW - 98)) | (1 << (ApexParser.LAST_WEEK - 98)) | (1 << (ApexParser.THIS_WEEK - 98)) | (1 << (ApexParser.NEXT_WEEK - 98)) | (1 << (ApexParser.LAST_MONTH - 98)) | (1 << (ApexParser.THIS_MONTH - 98)) | (1 << (ApexParser.NEXT_MONTH - 98)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (ApexParser.LAST_90_DAYS - 130)) | (1 << (ApexParser.NEXT_90_DAYS - 130)) | (1 << (ApexParser.LAST_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_WEEKS_N - 130)) | (1 << (ApexParser.LAST_N_WEEKS_N - 130)) | (1 << (ApexParser.NEXT_N_MONTHS_N - 130)) | (1 << (ApexParser.LAST_N_MONTHS_N - 130)) | (1 << (ApexParser.THIS_QUARTER - 130)) | (1 << (ApexParser.LAST_QUARTER - 130)) | (1 << (ApexParser.NEXT_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_YEAR - 130)) | (1 << (ApexParser.LAST_YEAR - 130)) | (1 << (ApexParser.NEXT_YEAR - 130)) | (1 << (ApexParser.NEXT_N_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_YEARS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_QUARTER - 130)) | (1 << (ApexParser.LAST_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_YEAR - 130)) | (1 << (ApexParser.LAST_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.FIND - 130)) | (1 << (ApexParser.EMAIL - 130)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (ApexParser.NAME - 162)) | (1 << (ApexParser.PHONE - 162)) | (1 << (ApexParser.SIDEBAR - 162)) | (1 << (ApexParser.FIELDS - 162)) | (1 << (ApexParser.METADATA - 162)) | (1 << (ApexParser.PRICEBOOKID - 162)) | (1 << (ApexParser.NETWORK - 162)) | (1 << (ApexParser.SNIPPET - 162)) | (1 << (ApexParser.TARGET_LENGTH - 162)) | (1 << (ApexParser.DIVISION - 162)) | (1 << (ApexParser.RETURNING - 162)) | (1 << (ApexParser.LISTVIEW - 162)))) !== 0) || _la === ApexParser.ATSIGN || _la === ApexParser.Identifier) {
				{
				{
				this.state = 378;
				this.interfaceMethodDeclaration();
				}
				}
				this.state = 383;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 384;
			this.match(ApexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classBodyDeclaration(): ClassBodyDeclarationContext {
		let _localctx: ClassBodyDeclarationContext = new ClassBodyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ApexParser.RULE_classBodyDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.state = 398;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 386;
				this.match(ApexParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 388;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ApexParser.STATIC) {
					{
					this.state = 387;
					this.match(ApexParser.STATIC);
					}
				}

				this.state = 390;
				this.block();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 394;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 391;
						this.modifier();
						}
						}
					}
					this.state = 396;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				}
				this.state = 397;
				this.memberDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifier(): ModifierContext {
		let _localctx: ModifierContext = new ModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ApexParser.RULE_modifier);
		try {
			this.state = 419;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ApexParser.ATSIGN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 400;
				this.annotation();
				}
				break;
			case ApexParser.GLOBAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 401;
				this.match(ApexParser.GLOBAL);
				}
				break;
			case ApexParser.PUBLIC:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 402;
				this.match(ApexParser.PUBLIC);
				}
				break;
			case ApexParser.PROTECTED:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 403;
				this.match(ApexParser.PROTECTED);
				}
				break;
			case ApexParser.PRIVATE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 404;
				this.match(ApexParser.PRIVATE);
				}
				break;
			case ApexParser.TRANSIENT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 405;
				this.match(ApexParser.TRANSIENT);
				}
				break;
			case ApexParser.STATIC:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 406;
				this.match(ApexParser.STATIC);
				}
				break;
			case ApexParser.ABSTRACT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 407;
				this.match(ApexParser.ABSTRACT);
				}
				break;
			case ApexParser.FINAL:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 408;
				this.match(ApexParser.FINAL);
				}
				break;
			case ApexParser.WEBSERVICE:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 409;
				this.match(ApexParser.WEBSERVICE);
				}
				break;
			case ApexParser.OVERRIDE:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 410;
				this.match(ApexParser.OVERRIDE);
				}
				break;
			case ApexParser.VIRTUAL:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 411;
				this.match(ApexParser.VIRTUAL);
				}
				break;
			case ApexParser.TESTMETHOD:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 412;
				this.match(ApexParser.TESTMETHOD);
				}
				break;
			case ApexParser.WITH:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 413;
				this.match(ApexParser.WITH);
				this.state = 414;
				this.match(ApexParser.SHARING);
				}
				break;
			case ApexParser.WITHOUT:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 415;
				this.match(ApexParser.WITHOUT);
				this.state = 416;
				this.match(ApexParser.SHARING);
				}
				break;
			case ApexParser.INHERITED:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 417;
				this.match(ApexParser.INHERITED);
				this.state = 418;
				this.match(ApexParser.SHARING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memberDeclaration(): MemberDeclarationContext {
		let _localctx: MemberDeclarationContext = new MemberDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ApexParser.RULE_memberDeclaration);
		try {
			this.state = 428;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 421;
				this.methodDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 422;
				this.fieldDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 423;
				this.constructorDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 424;
				this.interfaceDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 425;
				this.classDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 426;
				this.enumDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 427;
				this.propertyDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodDeclaration(): MethodDeclarationContext {
		let _localctx: MethodDeclarationContext = new MethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ApexParser.RULE_methodDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 432;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ApexParser.AFTER:
			case ApexParser.BEFORE:
			case ApexParser.GET:
			case ApexParser.INHERITED:
			case ApexParser.INSTANCEOF:
			case ApexParser.SET:
			case ApexParser.SHARING:
			case ApexParser.SWITCH:
			case ApexParser.TRANSIENT:
			case ApexParser.TRIGGER:
			case ApexParser.WHEN:
			case ApexParser.WITH:
			case ApexParser.WITHOUT:
			case ApexParser.LIST:
			case ApexParser.MAP:
			case ApexParser.SELECT:
			case ApexParser.COUNT:
			case ApexParser.FROM:
			case ApexParser.AS:
			case ApexParser.USING:
			case ApexParser.SCOPE:
			case ApexParser.WHERE:
			case ApexParser.ORDER:
			case ApexParser.BY:
			case ApexParser.LIMIT:
			case ApexParser.SOQLAND:
			case ApexParser.SOQLOR:
			case ApexParser.NOT:
			case ApexParser.AVG:
			case ApexParser.COUNT_DISTINCT:
			case ApexParser.MIN:
			case ApexParser.MAX:
			case ApexParser.SUM:
			case ApexParser.TYPEOF:
			case ApexParser.END:
			case ApexParser.THEN:
			case ApexParser.LIKE:
			case ApexParser.IN:
			case ApexParser.INCLUDES:
			case ApexParser.EXCLUDES:
			case ApexParser.ASC:
			case ApexParser.DESC:
			case ApexParser.NULLS:
			case ApexParser.FIRST:
			case ApexParser.LAST:
			case ApexParser.GROUP:
			case ApexParser.ALL:
			case ApexParser.ROWS:
			case ApexParser.VIEW:
			case ApexParser.HAVING:
			case ApexParser.ROLLUP:
			case ApexParser.TOLABEL:
			case ApexParser.OFFSET:
			case ApexParser.DATA:
			case ApexParser.CATEGORY:
			case ApexParser.AT:
			case ApexParser.ABOVE:
			case ApexParser.BELOW:
			case ApexParser.ABOVE_OR_BELOW:
			case ApexParser.SECURITY_ENFORCED:
			case ApexParser.REFERENCE:
			case ApexParser.CUBE:
			case ApexParser.FORMAT:
			case ApexParser.TRACKING:
			case ApexParser.VIEWSTAT:
			case ApexParser.CALENDAR_MONTH:
			case ApexParser.CALENDAR_QUARTER:
			case ApexParser.CALENDAR_YEAR:
			case ApexParser.DAY_IN_MONTH:
			case ApexParser.DAY_IN_WEEK:
			case ApexParser.DAY_IN_YEAR:
			case ApexParser.DAY_ONLY:
			case ApexParser.FISCAL_MONTH:
			case ApexParser.FISCAL_QUARTER:
			case ApexParser.FISCAL_YEAR:
			case ApexParser.HOUR_IN_DAY:
			case ApexParser.WEEK_IN_MONTH:
			case ApexParser.WEEK_IN_YEAR:
			case ApexParser.CONVERT_TIMEZONE:
			case ApexParser.YESTERDAY:
			case ApexParser.TODAY:
			case ApexParser.TOMORROW:
			case ApexParser.LAST_WEEK:
			case ApexParser.THIS_WEEK:
			case ApexParser.NEXT_WEEK:
			case ApexParser.LAST_MONTH:
			case ApexParser.THIS_MONTH:
			case ApexParser.NEXT_MONTH:
			case ApexParser.LAST_90_DAYS:
			case ApexParser.NEXT_90_DAYS:
			case ApexParser.LAST_N_DAYS_N:
			case ApexParser.NEXT_N_DAYS_N:
			case ApexParser.NEXT_N_WEEKS_N:
			case ApexParser.LAST_N_WEEKS_N:
			case ApexParser.NEXT_N_MONTHS_N:
			case ApexParser.LAST_N_MONTHS_N:
			case ApexParser.THIS_QUARTER:
			case ApexParser.LAST_QUARTER:
			case ApexParser.NEXT_QUARTER:
			case ApexParser.NEXT_N_QUARTERS_N:
			case ApexParser.LAST_N_QUARTERS_N:
			case ApexParser.THIS_YEAR:
			case ApexParser.LAST_YEAR:
			case ApexParser.NEXT_YEAR:
			case ApexParser.NEXT_N_YEARS_N:
			case ApexParser.LAST_N_YEARS_N:
			case ApexParser.THIS_FISCAL_QUARTER:
			case ApexParser.LAST_FISCAL_QUARTER:
			case ApexParser.NEXT_FISCAL_QUARTER:
			case ApexParser.NEXT_N_FISCAL_QUARTERS_N:
			case ApexParser.LAST_N_FISCAL_QUARTERS_N:
			case ApexParser.THIS_FISCAL_YEAR:
			case ApexParser.LAST_FISCAL_YEAR:
			case ApexParser.NEXT_FISCAL_YEAR:
			case ApexParser.NEXT_N_FISCAL_YEARS_N:
			case ApexParser.LAST_N_FISCAL_YEARS_N:
			case ApexParser.FIND:
			case ApexParser.EMAIL:
			case ApexParser.NAME:
			case ApexParser.PHONE:
			case ApexParser.SIDEBAR:
			case ApexParser.FIELDS:
			case ApexParser.METADATA:
			case ApexParser.PRICEBOOKID:
			case ApexParser.NETWORK:
			case ApexParser.SNIPPET:
			case ApexParser.TARGET_LENGTH:
			case ApexParser.DIVISION:
			case ApexParser.RETURNING:
			case ApexParser.LISTVIEW:
			case ApexParser.Identifier:
				{
				this.state = 430;
				this.typeRef();
				}
				break;
			case ApexParser.VOID:
				{
				this.state = 431;
				this.match(ApexParser.VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 434;
			this.id();
			this.state = 435;
			this.formalParameters();
			this.state = 438;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ApexParser.LBRACE:
				{
				this.state = 436;
				this.block();
				}
				break;
			case ApexParser.SEMI:
				{
				this.state = 437;
				this.match(ApexParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructorDeclaration(): ConstructorDeclarationContext {
		let _localctx: ConstructorDeclarationContext = new ConstructorDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ApexParser.RULE_constructorDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 440;
			this.qualifiedName();
			this.state = 441;
			this.formalParameters();
			this.state = 442;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldDeclaration(): FieldDeclarationContext {
		let _localctx: FieldDeclarationContext = new FieldDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ApexParser.RULE_fieldDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 444;
			this.typeRef();
			this.state = 445;
			this.variableDeclarators();
			this.state = 446;
			this.match(ApexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyDeclaration(): PropertyDeclarationContext {
		let _localctx: PropertyDeclarationContext = new PropertyDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ApexParser.RULE_propertyDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 448;
			this.typeRef();
			this.state = 449;
			this.id();
			this.state = 450;
			this.match(ApexParser.LBRACE);
			this.state = 454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.ABSTRACT) | (1 << ApexParser.FINAL) | (1 << ApexParser.GET) | (1 << ApexParser.GLOBAL) | (1 << ApexParser.INHERITED) | (1 << ApexParser.OVERRIDE) | (1 << ApexParser.PRIVATE) | (1 << ApexParser.PROTECTED) | (1 << ApexParser.PUBLIC))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.STATIC - 34)) | (1 << (ApexParser.TESTMETHOD - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.VIRTUAL - 34)) | (1 << (ApexParser.WEBSERVICE - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)))) !== 0) || _la === ApexParser.ATSIGN) {
				{
				{
				this.state = 451;
				this.propertyBlock();
				}
				}
				this.state = 456;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 457;
			this.match(ApexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
		let _localctx: InterfaceMethodDeclarationContext = new InterfaceMethodDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ApexParser.RULE_interfaceMethodDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 462;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 459;
					this.modifier();
					}
					}
				}
				this.state = 464;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			this.state = 467;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ApexParser.AFTER:
			case ApexParser.BEFORE:
			case ApexParser.GET:
			case ApexParser.INHERITED:
			case ApexParser.INSTANCEOF:
			case ApexParser.SET:
			case ApexParser.SHARING:
			case ApexParser.SWITCH:
			case ApexParser.TRANSIENT:
			case ApexParser.TRIGGER:
			case ApexParser.WHEN:
			case ApexParser.WITH:
			case ApexParser.WITHOUT:
			case ApexParser.LIST:
			case ApexParser.MAP:
			case ApexParser.SELECT:
			case ApexParser.COUNT:
			case ApexParser.FROM:
			case ApexParser.AS:
			case ApexParser.USING:
			case ApexParser.SCOPE:
			case ApexParser.WHERE:
			case ApexParser.ORDER:
			case ApexParser.BY:
			case ApexParser.LIMIT:
			case ApexParser.SOQLAND:
			case ApexParser.SOQLOR:
			case ApexParser.NOT:
			case ApexParser.AVG:
			case ApexParser.COUNT_DISTINCT:
			case ApexParser.MIN:
			case ApexParser.MAX:
			case ApexParser.SUM:
			case ApexParser.TYPEOF:
			case ApexParser.END:
			case ApexParser.THEN:
			case ApexParser.LIKE:
			case ApexParser.IN:
			case ApexParser.INCLUDES:
			case ApexParser.EXCLUDES:
			case ApexParser.ASC:
			case ApexParser.DESC:
			case ApexParser.NULLS:
			case ApexParser.FIRST:
			case ApexParser.LAST:
			case ApexParser.GROUP:
			case ApexParser.ALL:
			case ApexParser.ROWS:
			case ApexParser.VIEW:
			case ApexParser.HAVING:
			case ApexParser.ROLLUP:
			case ApexParser.TOLABEL:
			case ApexParser.OFFSET:
			case ApexParser.DATA:
			case ApexParser.CATEGORY:
			case ApexParser.AT:
			case ApexParser.ABOVE:
			case ApexParser.BELOW:
			case ApexParser.ABOVE_OR_BELOW:
			case ApexParser.SECURITY_ENFORCED:
			case ApexParser.REFERENCE:
			case ApexParser.CUBE:
			case ApexParser.FORMAT:
			case ApexParser.TRACKING:
			case ApexParser.VIEWSTAT:
			case ApexParser.CALENDAR_MONTH:
			case ApexParser.CALENDAR_QUARTER:
			case ApexParser.CALENDAR_YEAR:
			case ApexParser.DAY_IN_MONTH:
			case ApexParser.DAY_IN_WEEK:
			case ApexParser.DAY_IN_YEAR:
			case ApexParser.DAY_ONLY:
			case ApexParser.FISCAL_MONTH:
			case ApexParser.FISCAL_QUARTER:
			case ApexParser.FISCAL_YEAR:
			case ApexParser.HOUR_IN_DAY:
			case ApexParser.WEEK_IN_MONTH:
			case ApexParser.WEEK_IN_YEAR:
			case ApexParser.CONVERT_TIMEZONE:
			case ApexParser.YESTERDAY:
			case ApexParser.TODAY:
			case ApexParser.TOMORROW:
			case ApexParser.LAST_WEEK:
			case ApexParser.THIS_WEEK:
			case ApexParser.NEXT_WEEK:
			case ApexParser.LAST_MONTH:
			case ApexParser.THIS_MONTH:
			case ApexParser.NEXT_MONTH:
			case ApexParser.LAST_90_DAYS:
			case ApexParser.NEXT_90_DAYS:
			case ApexParser.LAST_N_DAYS_N:
			case ApexParser.NEXT_N_DAYS_N:
			case ApexParser.NEXT_N_WEEKS_N:
			case ApexParser.LAST_N_WEEKS_N:
			case ApexParser.NEXT_N_MONTHS_N:
			case ApexParser.LAST_N_MONTHS_N:
			case ApexParser.THIS_QUARTER:
			case ApexParser.LAST_QUARTER:
			case ApexParser.NEXT_QUARTER:
			case ApexParser.NEXT_N_QUARTERS_N:
			case ApexParser.LAST_N_QUARTERS_N:
			case ApexParser.THIS_YEAR:
			case ApexParser.LAST_YEAR:
			case ApexParser.NEXT_YEAR:
			case ApexParser.NEXT_N_YEARS_N:
			case ApexParser.LAST_N_YEARS_N:
			case ApexParser.THIS_FISCAL_QUARTER:
			case ApexParser.LAST_FISCAL_QUARTER:
			case ApexParser.NEXT_FISCAL_QUARTER:
			case ApexParser.NEXT_N_FISCAL_QUARTERS_N:
			case ApexParser.LAST_N_FISCAL_QUARTERS_N:
			case ApexParser.THIS_FISCAL_YEAR:
			case ApexParser.LAST_FISCAL_YEAR:
			case ApexParser.NEXT_FISCAL_YEAR:
			case ApexParser.NEXT_N_FISCAL_YEARS_N:
			case ApexParser.LAST_N_FISCAL_YEARS_N:
			case ApexParser.FIND:
			case ApexParser.EMAIL:
			case ApexParser.NAME:
			case ApexParser.PHONE:
			case ApexParser.SIDEBAR:
			case ApexParser.FIELDS:
			case ApexParser.METADATA:
			case ApexParser.PRICEBOOKID:
			case ApexParser.NETWORK:
			case ApexParser.SNIPPET:
			case ApexParser.TARGET_LENGTH:
			case ApexParser.DIVISION:
			case ApexParser.RETURNING:
			case ApexParser.LISTVIEW:
			case ApexParser.Identifier:
				{
				this.state = 465;
				this.typeRef();
				}
				break;
			case ApexParser.VOID:
				{
				this.state = 466;
				this.match(ApexParser.VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 469;
			this.id();
			this.state = 470;
			this.formalParameters();
			this.state = 471;
			this.match(ApexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarators(): VariableDeclaratorsContext {
		let _localctx: VariableDeclaratorsContext = new VariableDeclaratorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ApexParser.RULE_variableDeclarators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 473;
			this.variableDeclarator();
			this.state = 478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.COMMA) {
				{
				{
				this.state = 474;
				this.match(ApexParser.COMMA);
				this.state = 475;
				this.variableDeclarator();
				}
				}
				this.state = 480;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarator(): VariableDeclaratorContext {
		let _localctx: VariableDeclaratorContext = new VariableDeclaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ApexParser.RULE_variableDeclarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 481;
			this.id();
			this.state = 484;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.ASSIGN) {
				{
				this.state = 482;
				this.match(ApexParser.ASSIGN);
				this.state = 483;
				this.expression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayInitializer(): ArrayInitializerContext {
		let _localctx: ArrayInitializerContext = new ArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ApexParser.RULE_arrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 486;
			this.match(ApexParser.LBRACE);
			this.state = 498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SUPER - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.THIS - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.SELECT - 34)) | (1 << (ApexParser.COUNT - 34)) | (1 << (ApexParser.FROM - 34)) | (1 << (ApexParser.AS - 34)) | (1 << (ApexParser.USING - 34)) | (1 << (ApexParser.SCOPE - 34)) | (1 << (ApexParser.WHERE - 34)) | (1 << (ApexParser.ORDER - 34)) | (1 << (ApexParser.BY - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LIMIT - 66)) | (1 << (ApexParser.SOQLAND - 66)) | (1 << (ApexParser.SOQLOR - 66)) | (1 << (ApexParser.NOT - 66)) | (1 << (ApexParser.AVG - 66)) | (1 << (ApexParser.COUNT_DISTINCT - 66)) | (1 << (ApexParser.MIN - 66)) | (1 << (ApexParser.MAX - 66)) | (1 << (ApexParser.SUM - 66)) | (1 << (ApexParser.TYPEOF - 66)) | (1 << (ApexParser.END - 66)) | (1 << (ApexParser.THEN - 66)) | (1 << (ApexParser.LIKE - 66)) | (1 << (ApexParser.IN - 66)) | (1 << (ApexParser.INCLUDES - 66)) | (1 << (ApexParser.EXCLUDES - 66)) | (1 << (ApexParser.ASC - 66)) | (1 << (ApexParser.DESC - 66)) | (1 << (ApexParser.NULLS - 66)) | (1 << (ApexParser.FIRST - 66)) | (1 << (ApexParser.LAST - 66)) | (1 << (ApexParser.GROUP - 66)) | (1 << (ApexParser.ALL - 66)) | (1 << (ApexParser.ROWS - 66)) | (1 << (ApexParser.VIEW - 66)) | (1 << (ApexParser.HAVING - 66)) | (1 << (ApexParser.ROLLUP - 66)) | (1 << (ApexParser.TOLABEL - 66)) | (1 << (ApexParser.OFFSET - 66)) | (1 << (ApexParser.DATA - 66)) | (1 << (ApexParser.CATEGORY - 66)) | (1 << (ApexParser.AT - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ApexParser.ABOVE - 98)) | (1 << (ApexParser.BELOW - 98)) | (1 << (ApexParser.ABOVE_OR_BELOW - 98)) | (1 << (ApexParser.SECURITY_ENFORCED - 98)) | (1 << (ApexParser.REFERENCE - 98)) | (1 << (ApexParser.CUBE - 98)) | (1 << (ApexParser.FORMAT - 98)) | (1 << (ApexParser.TRACKING - 98)) | (1 << (ApexParser.VIEWSTAT - 98)) | (1 << (ApexParser.CALENDAR_MONTH - 98)) | (1 << (ApexParser.CALENDAR_QUARTER - 98)) | (1 << (ApexParser.CALENDAR_YEAR - 98)) | (1 << (ApexParser.DAY_IN_MONTH - 98)) | (1 << (ApexParser.DAY_IN_WEEK - 98)) | (1 << (ApexParser.DAY_IN_YEAR - 98)) | (1 << (ApexParser.DAY_ONLY - 98)) | (1 << (ApexParser.FISCAL_MONTH - 98)) | (1 << (ApexParser.FISCAL_QUARTER - 98)) | (1 << (ApexParser.FISCAL_YEAR - 98)) | (1 << (ApexParser.HOUR_IN_DAY - 98)) | (1 << (ApexParser.WEEK_IN_MONTH - 98)) | (1 << (ApexParser.WEEK_IN_YEAR - 98)) | (1 << (ApexParser.CONVERT_TIMEZONE - 98)) | (1 << (ApexParser.YESTERDAY - 98)) | (1 << (ApexParser.TODAY - 98)) | (1 << (ApexParser.TOMORROW - 98)) | (1 << (ApexParser.LAST_WEEK - 98)) | (1 << (ApexParser.THIS_WEEK - 98)) | (1 << (ApexParser.NEXT_WEEK - 98)) | (1 << (ApexParser.LAST_MONTH - 98)) | (1 << (ApexParser.THIS_MONTH - 98)) | (1 << (ApexParser.NEXT_MONTH - 98)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (ApexParser.LAST_90_DAYS - 130)) | (1 << (ApexParser.NEXT_90_DAYS - 130)) | (1 << (ApexParser.LAST_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_WEEKS_N - 130)) | (1 << (ApexParser.LAST_N_WEEKS_N - 130)) | (1 << (ApexParser.NEXT_N_MONTHS_N - 130)) | (1 << (ApexParser.LAST_N_MONTHS_N - 130)) | (1 << (ApexParser.THIS_QUARTER - 130)) | (1 << (ApexParser.LAST_QUARTER - 130)) | (1 << (ApexParser.NEXT_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_YEAR - 130)) | (1 << (ApexParser.LAST_YEAR - 130)) | (1 << (ApexParser.NEXT_YEAR - 130)) | (1 << (ApexParser.NEXT_N_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_YEARS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_QUARTER - 130)) | (1 << (ApexParser.LAST_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_YEAR - 130)) | (1 << (ApexParser.LAST_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.FIND - 130)) | (1 << (ApexParser.EMAIL - 130)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (ApexParser.NAME - 162)) | (1 << (ApexParser.PHONE - 162)) | (1 << (ApexParser.SIDEBAR - 162)) | (1 << (ApexParser.FIELDS - 162)) | (1 << (ApexParser.METADATA - 162)) | (1 << (ApexParser.PRICEBOOKID - 162)) | (1 << (ApexParser.NETWORK - 162)) | (1 << (ApexParser.SNIPPET - 162)) | (1 << (ApexParser.TARGET_LENGTH - 162)) | (1 << (ApexParser.DIVISION - 162)) | (1 << (ApexParser.RETURNING - 162)) | (1 << (ApexParser.LISTVIEW - 162)) | (1 << (ApexParser.FindLiteral - 162)) | (1 << (ApexParser.IntegerLiteral - 162)) | (1 << (ApexParser.LongLiteral - 162)) | (1 << (ApexParser.NumberLiteral - 162)) | (1 << (ApexParser.BooleanLiteral - 162)) | (1 << (ApexParser.StringLiteral - 162)) | (1 << (ApexParser.LPAREN - 162)) | (1 << (ApexParser.LBRACK - 162)) | (1 << (ApexParser.BANG - 162)))) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & ((1 << (ApexParser.TILDE - 194)) | (1 << (ApexParser.INC - 194)) | (1 << (ApexParser.DEC - 194)) | (1 << (ApexParser.ADD - 194)) | (1 << (ApexParser.SUB - 194)))) !== 0) || _la === ApexParser.Identifier) {
				{
				this.state = 487;
				this.expression(0);
				this.state = 492;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 488;
						this.match(ApexParser.COMMA);
						this.state = 489;
						this.expression(0);
						}
						}
					}
					this.state = 494;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				}
				this.state = 496;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ApexParser.COMMA) {
					{
					this.state = 495;
					this.match(ApexParser.COMMA);
					}
				}

				}
			}

			this.state = 500;
			this.match(ApexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeRef(): TypeRefContext {
		let _localctx: TypeRefContext = new TypeRefContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ApexParser.RULE_typeRef);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 502;
			this.typeName();
			this.state = 507;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 503;
					this.match(ApexParser.DOT);
					this.state = 504;
					this.typeName();
					}
					}
				}
				this.state = 509;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 510;
			this.arraySubscripts();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arraySubscripts(): ArraySubscriptsContext {
		let _localctx: ArraySubscriptsContext = new ArraySubscriptsContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, ApexParser.RULE_arraySubscripts);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 516;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 512;
					this.match(ApexParser.LBRACK);
					this.state = 513;
					this.match(ApexParser.RBRACK);
					}
					}
				}
				this.state = 518;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ApexParser.RULE_typeName);
		try {
			this.state = 535;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 519;
				this.match(ApexParser.LIST);
				this.state = 521;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
				case 1:
					{
					this.state = 520;
					this.typeArguments();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 523;
				this.match(ApexParser.SET);
				this.state = 525;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
				case 1:
					{
					this.state = 524;
					this.typeArguments();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 527;
				this.match(ApexParser.MAP);
				this.state = 529;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
				case 1:
					{
					this.state = 528;
					this.typeArguments();
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 531;
				this.id();
				this.state = 533;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
				case 1:
					{
					this.state = 532;
					this.typeArguments();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArguments(): TypeArgumentsContext {
		let _localctx: TypeArgumentsContext = new TypeArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ApexParser.RULE_typeArguments);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 537;
			this.match(ApexParser.LT);
			this.state = 538;
			this.typeList();
			this.state = 539;
			this.match(ApexParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameters(): FormalParametersContext {
		let _localctx: FormalParametersContext = new FormalParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, ApexParser.RULE_formalParameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 541;
			this.match(ApexParser.LPAREN);
			this.state = 543;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.ABSTRACT) | (1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.FINAL) | (1 << ApexParser.GET) | (1 << ApexParser.GLOBAL) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.OVERRIDE) | (1 << ApexParser.PRIVATE) | (1 << ApexParser.PROTECTED) | (1 << ApexParser.PUBLIC))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.STATIC - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.TESTMETHOD - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.VIRTUAL - 34)) | (1 << (ApexParser.WEBSERVICE - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.SELECT - 34)) | (1 << (ApexParser.COUNT - 34)) | (1 << (ApexParser.FROM - 34)) | (1 << (ApexParser.AS - 34)) | (1 << (ApexParser.USING - 34)) | (1 << (ApexParser.SCOPE - 34)) | (1 << (ApexParser.WHERE - 34)) | (1 << (ApexParser.ORDER - 34)) | (1 << (ApexParser.BY - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LIMIT - 66)) | (1 << (ApexParser.SOQLAND - 66)) | (1 << (ApexParser.SOQLOR - 66)) | (1 << (ApexParser.NOT - 66)) | (1 << (ApexParser.AVG - 66)) | (1 << (ApexParser.COUNT_DISTINCT - 66)) | (1 << (ApexParser.MIN - 66)) | (1 << (ApexParser.MAX - 66)) | (1 << (ApexParser.SUM - 66)) | (1 << (ApexParser.TYPEOF - 66)) | (1 << (ApexParser.END - 66)) | (1 << (ApexParser.THEN - 66)) | (1 << (ApexParser.LIKE - 66)) | (1 << (ApexParser.IN - 66)) | (1 << (ApexParser.INCLUDES - 66)) | (1 << (ApexParser.EXCLUDES - 66)) | (1 << (ApexParser.ASC - 66)) | (1 << (ApexParser.DESC - 66)) | (1 << (ApexParser.NULLS - 66)) | (1 << (ApexParser.FIRST - 66)) | (1 << (ApexParser.LAST - 66)) | (1 << (ApexParser.GROUP - 66)) | (1 << (ApexParser.ALL - 66)) | (1 << (ApexParser.ROWS - 66)) | (1 << (ApexParser.VIEW - 66)) | (1 << (ApexParser.HAVING - 66)) | (1 << (ApexParser.ROLLUP - 66)) | (1 << (ApexParser.TOLABEL - 66)) | (1 << (ApexParser.OFFSET - 66)) | (1 << (ApexParser.DATA - 66)) | (1 << (ApexParser.CATEGORY - 66)) | (1 << (ApexParser.AT - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ApexParser.ABOVE - 98)) | (1 << (ApexParser.BELOW - 98)) | (1 << (ApexParser.ABOVE_OR_BELOW - 98)) | (1 << (ApexParser.SECURITY_ENFORCED - 98)) | (1 << (ApexParser.REFERENCE - 98)) | (1 << (ApexParser.CUBE - 98)) | (1 << (ApexParser.FORMAT - 98)) | (1 << (ApexParser.TRACKING - 98)) | (1 << (ApexParser.VIEWSTAT - 98)) | (1 << (ApexParser.CALENDAR_MONTH - 98)) | (1 << (ApexParser.CALENDAR_QUARTER - 98)) | (1 << (ApexParser.CALENDAR_YEAR - 98)) | (1 << (ApexParser.DAY_IN_MONTH - 98)) | (1 << (ApexParser.DAY_IN_WEEK - 98)) | (1 << (ApexParser.DAY_IN_YEAR - 98)) | (1 << (ApexParser.DAY_ONLY - 98)) | (1 << (ApexParser.FISCAL_MONTH - 98)) | (1 << (ApexParser.FISCAL_QUARTER - 98)) | (1 << (ApexParser.FISCAL_YEAR - 98)) | (1 << (ApexParser.HOUR_IN_DAY - 98)) | (1 << (ApexParser.WEEK_IN_MONTH - 98)) | (1 << (ApexParser.WEEK_IN_YEAR - 98)) | (1 << (ApexParser.CONVERT_TIMEZONE - 98)) | (1 << (ApexParser.YESTERDAY - 98)) | (1 << (ApexParser.TODAY - 98)) | (1 << (ApexParser.TOMORROW - 98)) | (1 << (ApexParser.LAST_WEEK - 98)) | (1 << (ApexParser.THIS_WEEK - 98)) | (1 << (ApexParser.NEXT_WEEK - 98)) | (1 << (ApexParser.LAST_MONTH - 98)) | (1 << (ApexParser.THIS_MONTH - 98)) | (1 << (ApexParser.NEXT_MONTH - 98)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (ApexParser.LAST_90_DAYS - 130)) | (1 << (ApexParser.NEXT_90_DAYS - 130)) | (1 << (ApexParser.LAST_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_WEEKS_N - 130)) | (1 << (ApexParser.LAST_N_WEEKS_N - 130)) | (1 << (ApexParser.NEXT_N_MONTHS_N - 130)) | (1 << (ApexParser.LAST_N_MONTHS_N - 130)) | (1 << (ApexParser.THIS_QUARTER - 130)) | (1 << (ApexParser.LAST_QUARTER - 130)) | (1 << (ApexParser.NEXT_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_YEAR - 130)) | (1 << (ApexParser.LAST_YEAR - 130)) | (1 << (ApexParser.NEXT_YEAR - 130)) | (1 << (ApexParser.NEXT_N_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_YEARS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_QUARTER - 130)) | (1 << (ApexParser.LAST_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_YEAR - 130)) | (1 << (ApexParser.LAST_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.FIND - 130)) | (1 << (ApexParser.EMAIL - 130)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (ApexParser.NAME - 162)) | (1 << (ApexParser.PHONE - 162)) | (1 << (ApexParser.SIDEBAR - 162)) | (1 << (ApexParser.FIELDS - 162)) | (1 << (ApexParser.METADATA - 162)) | (1 << (ApexParser.PRICEBOOKID - 162)) | (1 << (ApexParser.NETWORK - 162)) | (1 << (ApexParser.SNIPPET - 162)) | (1 << (ApexParser.TARGET_LENGTH - 162)) | (1 << (ApexParser.DIVISION - 162)) | (1 << (ApexParser.RETURNING - 162)) | (1 << (ApexParser.LISTVIEW - 162)))) !== 0) || _la === ApexParser.ATSIGN || _la === ApexParser.Identifier) {
				{
				this.state = 542;
				this.formalParameterList();
				}
			}

			this.state = 545;
			this.match(ApexParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let _localctx: FormalParameterListContext = new FormalParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, ApexParser.RULE_formalParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 547;
			this.formalParameter();
			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.COMMA) {
				{
				{
				this.state = 548;
				this.match(ApexParser.COMMA);
				this.state = 549;
				this.formalParameter();
				}
				}
				this.state = 554;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public formalParameter(): FormalParameterContext {
		let _localctx: FormalParameterContext = new FormalParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, ApexParser.RULE_formalParameter);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 558;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 555;
					this.modifier();
					}
					}
				}
				this.state = 560;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			}
			this.state = 561;
			this.typeRef();
			this.state = 562;
			this.id();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ApexParser.RULE_qualifiedName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 564;
			this.id();
			this.state = 569;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.DOT) {
				{
				{
				this.state = 565;
				this.match(ApexParser.DOT);
				this.state = 566;
				this.id();
				}
				}
				this.state = 571;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, ApexParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 572;
			_la = this._input.LA(1);
			if (!(_la === ApexParser.NULL || ((((_la - 175)) & ~0x1F) === 0 && ((1 << (_la - 175)) & ((1 << (ApexParser.IntegerLiteral - 175)) | (1 << (ApexParser.LongLiteral - 175)) | (1 << (ApexParser.NumberLiteral - 175)) | (1 << (ApexParser.BooleanLiteral - 175)) | (1 << (ApexParser.StringLiteral - 175)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, ApexParser.RULE_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 574;
			this.match(ApexParser.ATSIGN);
			this.state = 575;
			this.qualifiedName();
			this.state = 582;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.LPAREN) {
				{
				this.state = 576;
				this.match(ApexParser.LPAREN);
				this.state = 579;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
				case 1:
					{
					this.state = 577;
					this.elementValuePairs();
					}
					break;

				case 2:
					{
					this.state = 578;
					this.elementValue();
					}
					break;
				}
				this.state = 581;
				this.match(ApexParser.RPAREN);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValuePairs(): ElementValuePairsContext {
		let _localctx: ElementValuePairsContext = new ElementValuePairsContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, ApexParser.RULE_elementValuePairs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 584;
			this.elementValuePair();
			this.state = 591;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.SELECT - 34)) | (1 << (ApexParser.COUNT - 34)) | (1 << (ApexParser.FROM - 34)) | (1 << (ApexParser.AS - 34)) | (1 << (ApexParser.USING - 34)) | (1 << (ApexParser.SCOPE - 34)) | (1 << (ApexParser.WHERE - 34)) | (1 << (ApexParser.ORDER - 34)) | (1 << (ApexParser.BY - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LIMIT - 66)) | (1 << (ApexParser.SOQLAND - 66)) | (1 << (ApexParser.SOQLOR - 66)) | (1 << (ApexParser.NOT - 66)) | (1 << (ApexParser.AVG - 66)) | (1 << (ApexParser.COUNT_DISTINCT - 66)) | (1 << (ApexParser.MIN - 66)) | (1 << (ApexParser.MAX - 66)) | (1 << (ApexParser.SUM - 66)) | (1 << (ApexParser.TYPEOF - 66)) | (1 << (ApexParser.END - 66)) | (1 << (ApexParser.THEN - 66)) | (1 << (ApexParser.LIKE - 66)) | (1 << (ApexParser.IN - 66)) | (1 << (ApexParser.INCLUDES - 66)) | (1 << (ApexParser.EXCLUDES - 66)) | (1 << (ApexParser.ASC - 66)) | (1 << (ApexParser.DESC - 66)) | (1 << (ApexParser.NULLS - 66)) | (1 << (ApexParser.FIRST - 66)) | (1 << (ApexParser.LAST - 66)) | (1 << (ApexParser.GROUP - 66)) | (1 << (ApexParser.ALL - 66)) | (1 << (ApexParser.ROWS - 66)) | (1 << (ApexParser.VIEW - 66)) | (1 << (ApexParser.HAVING - 66)) | (1 << (ApexParser.ROLLUP - 66)) | (1 << (ApexParser.TOLABEL - 66)) | (1 << (ApexParser.OFFSET - 66)) | (1 << (ApexParser.DATA - 66)) | (1 << (ApexParser.CATEGORY - 66)) | (1 << (ApexParser.AT - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ApexParser.ABOVE - 98)) | (1 << (ApexParser.BELOW - 98)) | (1 << (ApexParser.ABOVE_OR_BELOW - 98)) | (1 << (ApexParser.SECURITY_ENFORCED - 98)) | (1 << (ApexParser.REFERENCE - 98)) | (1 << (ApexParser.CUBE - 98)) | (1 << (ApexParser.FORMAT - 98)) | (1 << (ApexParser.TRACKING - 98)) | (1 << (ApexParser.VIEWSTAT - 98)) | (1 << (ApexParser.CALENDAR_MONTH - 98)) | (1 << (ApexParser.CALENDAR_QUARTER - 98)) | (1 << (ApexParser.CALENDAR_YEAR - 98)) | (1 << (ApexParser.DAY_IN_MONTH - 98)) | (1 << (ApexParser.DAY_IN_WEEK - 98)) | (1 << (ApexParser.DAY_IN_YEAR - 98)) | (1 << (ApexParser.DAY_ONLY - 98)) | (1 << (ApexParser.FISCAL_MONTH - 98)) | (1 << (ApexParser.FISCAL_QUARTER - 98)) | (1 << (ApexParser.FISCAL_YEAR - 98)) | (1 << (ApexParser.HOUR_IN_DAY - 98)) | (1 << (ApexParser.WEEK_IN_MONTH - 98)) | (1 << (ApexParser.WEEK_IN_YEAR - 98)) | (1 << (ApexParser.CONVERT_TIMEZONE - 98)) | (1 << (ApexParser.YESTERDAY - 98)) | (1 << (ApexParser.TODAY - 98)) | (1 << (ApexParser.TOMORROW - 98)) | (1 << (ApexParser.LAST_WEEK - 98)) | (1 << (ApexParser.THIS_WEEK - 98)) | (1 << (ApexParser.NEXT_WEEK - 98)) | (1 << (ApexParser.LAST_MONTH - 98)) | (1 << (ApexParser.THIS_MONTH - 98)) | (1 << (ApexParser.NEXT_MONTH - 98)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (ApexParser.LAST_90_DAYS - 130)) | (1 << (ApexParser.NEXT_90_DAYS - 130)) | (1 << (ApexParser.LAST_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_WEEKS_N - 130)) | (1 << (ApexParser.LAST_N_WEEKS_N - 130)) | (1 << (ApexParser.NEXT_N_MONTHS_N - 130)) | (1 << (ApexParser.LAST_N_MONTHS_N - 130)) | (1 << (ApexParser.THIS_QUARTER - 130)) | (1 << (ApexParser.LAST_QUARTER - 130)) | (1 << (ApexParser.NEXT_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_YEAR - 130)) | (1 << (ApexParser.LAST_YEAR - 130)) | (1 << (ApexParser.NEXT_YEAR - 130)) | (1 << (ApexParser.NEXT_N_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_YEARS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_QUARTER - 130)) | (1 << (ApexParser.LAST_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_YEAR - 130)) | (1 << (ApexParser.LAST_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.FIND - 130)) | (1 << (ApexParser.EMAIL - 130)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (ApexParser.NAME - 162)) | (1 << (ApexParser.PHONE - 162)) | (1 << (ApexParser.SIDEBAR - 162)) | (1 << (ApexParser.FIELDS - 162)) | (1 << (ApexParser.METADATA - 162)) | (1 << (ApexParser.PRICEBOOKID - 162)) | (1 << (ApexParser.NETWORK - 162)) | (1 << (ApexParser.SNIPPET - 162)) | (1 << (ApexParser.TARGET_LENGTH - 162)) | (1 << (ApexParser.DIVISION - 162)) | (1 << (ApexParser.RETURNING - 162)) | (1 << (ApexParser.LISTVIEW - 162)) | (1 << (ApexParser.COMMA - 162)))) !== 0) || _la === ApexParser.Identifier) {
				{
				{
				this.state = 586;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ApexParser.COMMA) {
					{
					this.state = 585;
					this.match(ApexParser.COMMA);
					}
				}

				this.state = 588;
				this.elementValuePair();
				}
				}
				this.state = 593;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValuePair(): ElementValuePairContext {
		let _localctx: ElementValuePairContext = new ElementValuePairContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ApexParser.RULE_elementValuePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 594;
			this.id();
			this.state = 595;
			this.match(ApexParser.ASSIGN);
			this.state = 596;
			this.elementValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValue(): ElementValueContext {
		let _localctx: ElementValueContext = new ElementValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ApexParser.RULE_elementValue);
		try {
			this.state = 601;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ApexParser.AFTER:
			case ApexParser.BEFORE:
			case ApexParser.GET:
			case ApexParser.INHERITED:
			case ApexParser.INSTANCEOF:
			case ApexParser.NEW:
			case ApexParser.NULL:
			case ApexParser.SET:
			case ApexParser.SHARING:
			case ApexParser.SUPER:
			case ApexParser.SWITCH:
			case ApexParser.THIS:
			case ApexParser.TRANSIENT:
			case ApexParser.TRIGGER:
			case ApexParser.WHEN:
			case ApexParser.WITH:
			case ApexParser.WITHOUT:
			case ApexParser.LIST:
			case ApexParser.MAP:
			case ApexParser.SELECT:
			case ApexParser.COUNT:
			case ApexParser.FROM:
			case ApexParser.AS:
			case ApexParser.USING:
			case ApexParser.SCOPE:
			case ApexParser.WHERE:
			case ApexParser.ORDER:
			case ApexParser.BY:
			case ApexParser.LIMIT:
			case ApexParser.SOQLAND:
			case ApexParser.SOQLOR:
			case ApexParser.NOT:
			case ApexParser.AVG:
			case ApexParser.COUNT_DISTINCT:
			case ApexParser.MIN:
			case ApexParser.MAX:
			case ApexParser.SUM:
			case ApexParser.TYPEOF:
			case ApexParser.END:
			case ApexParser.THEN:
			case ApexParser.LIKE:
			case ApexParser.IN:
			case ApexParser.INCLUDES:
			case ApexParser.EXCLUDES:
			case ApexParser.ASC:
			case ApexParser.DESC:
			case ApexParser.NULLS:
			case ApexParser.FIRST:
			case ApexParser.LAST:
			case ApexParser.GROUP:
			case ApexParser.ALL:
			case ApexParser.ROWS:
			case ApexParser.VIEW:
			case ApexParser.HAVING:
			case ApexParser.ROLLUP:
			case ApexParser.TOLABEL:
			case ApexParser.OFFSET:
			case ApexParser.DATA:
			case ApexParser.CATEGORY:
			case ApexParser.AT:
			case ApexParser.ABOVE:
			case ApexParser.BELOW:
			case ApexParser.ABOVE_OR_BELOW:
			case ApexParser.SECURITY_ENFORCED:
			case ApexParser.REFERENCE:
			case ApexParser.CUBE:
			case ApexParser.FORMAT:
			case ApexParser.TRACKING:
			case ApexParser.VIEWSTAT:
			case ApexParser.CALENDAR_MONTH:
			case ApexParser.CALENDAR_QUARTER:
			case ApexParser.CALENDAR_YEAR:
			case ApexParser.DAY_IN_MONTH:
			case ApexParser.DAY_IN_WEEK:
			case ApexParser.DAY_IN_YEAR:
			case ApexParser.DAY_ONLY:
			case ApexParser.FISCAL_MONTH:
			case ApexParser.FISCAL_QUARTER:
			case ApexParser.FISCAL_YEAR:
			case ApexParser.HOUR_IN_DAY:
			case ApexParser.WEEK_IN_MONTH:
			case ApexParser.WEEK_IN_YEAR:
			case ApexParser.CONVERT_TIMEZONE:
			case ApexParser.YESTERDAY:
			case ApexParser.TODAY:
			case ApexParser.TOMORROW:
			case ApexParser.LAST_WEEK:
			case ApexParser.THIS_WEEK:
			case ApexParser.NEXT_WEEK:
			case ApexParser.LAST_MONTH:
			case ApexParser.THIS_MONTH:
			case ApexParser.NEXT_MONTH:
			case ApexParser.LAST_90_DAYS:
			case ApexParser.NEXT_90_DAYS:
			case ApexParser.LAST_N_DAYS_N:
			case ApexParser.NEXT_N_DAYS_N:
			case ApexParser.NEXT_N_WEEKS_N:
			case ApexParser.LAST_N_WEEKS_N:
			case ApexParser.NEXT_N_MONTHS_N:
			case ApexParser.LAST_N_MONTHS_N:
			case ApexParser.THIS_QUARTER:
			case ApexParser.LAST_QUARTER:
			case ApexParser.NEXT_QUARTER:
			case ApexParser.NEXT_N_QUARTERS_N:
			case ApexParser.LAST_N_QUARTERS_N:
			case ApexParser.THIS_YEAR:
			case ApexParser.LAST_YEAR:
			case ApexParser.NEXT_YEAR:
			case ApexParser.NEXT_N_YEARS_N:
			case ApexParser.LAST_N_YEARS_N:
			case ApexParser.THIS_FISCAL_QUARTER:
			case ApexParser.LAST_FISCAL_QUARTER:
			case ApexParser.NEXT_FISCAL_QUARTER:
			case ApexParser.NEXT_N_FISCAL_QUARTERS_N:
			case ApexParser.LAST_N_FISCAL_QUARTERS_N:
			case ApexParser.THIS_FISCAL_YEAR:
			case ApexParser.LAST_FISCAL_YEAR:
			case ApexParser.NEXT_FISCAL_YEAR:
			case ApexParser.NEXT_N_FISCAL_YEARS_N:
			case ApexParser.LAST_N_FISCAL_YEARS_N:
			case ApexParser.FIND:
			case ApexParser.EMAIL:
			case ApexParser.NAME:
			case ApexParser.PHONE:
			case ApexParser.SIDEBAR:
			case ApexParser.FIELDS:
			case ApexParser.METADATA:
			case ApexParser.PRICEBOOKID:
			case ApexParser.NETWORK:
			case ApexParser.SNIPPET:
			case ApexParser.TARGET_LENGTH:
			case ApexParser.DIVISION:
			case ApexParser.RETURNING:
			case ApexParser.LISTVIEW:
			case ApexParser.FindLiteral:
			case ApexParser.IntegerLiteral:
			case ApexParser.LongLiteral:
			case ApexParser.NumberLiteral:
			case ApexParser.BooleanLiteral:
			case ApexParser.StringLiteral:
			case ApexParser.LPAREN:
			case ApexParser.LBRACK:
			case ApexParser.BANG:
			case ApexParser.TILDE:
			case ApexParser.INC:
			case ApexParser.DEC:
			case ApexParser.ADD:
			case ApexParser.SUB:
			case ApexParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 598;
				this.expression(0);
				}
				break;
			case ApexParser.ATSIGN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 599;
				this.annotation();
				}
				break;
			case ApexParser.LBRACE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 600;
				this.elementValueArrayInitializer();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
		let _localctx: ElementValueArrayInitializerContext = new ElementValueArrayInitializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, ApexParser.RULE_elementValueArrayInitializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 603;
			this.match(ApexParser.LBRACE);
			this.state = 612;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SUPER - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.THIS - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.SELECT - 34)) | (1 << (ApexParser.COUNT - 34)) | (1 << (ApexParser.FROM - 34)) | (1 << (ApexParser.AS - 34)) | (1 << (ApexParser.USING - 34)) | (1 << (ApexParser.SCOPE - 34)) | (1 << (ApexParser.WHERE - 34)) | (1 << (ApexParser.ORDER - 34)) | (1 << (ApexParser.BY - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LIMIT - 66)) | (1 << (ApexParser.SOQLAND - 66)) | (1 << (ApexParser.SOQLOR - 66)) | (1 << (ApexParser.NOT - 66)) | (1 << (ApexParser.AVG - 66)) | (1 << (ApexParser.COUNT_DISTINCT - 66)) | (1 << (ApexParser.MIN - 66)) | (1 << (ApexParser.MAX - 66)) | (1 << (ApexParser.SUM - 66)) | (1 << (ApexParser.TYPEOF - 66)) | (1 << (ApexParser.END - 66)) | (1 << (ApexParser.THEN - 66)) | (1 << (ApexParser.LIKE - 66)) | (1 << (ApexParser.IN - 66)) | (1 << (ApexParser.INCLUDES - 66)) | (1 << (ApexParser.EXCLUDES - 66)) | (1 << (ApexParser.ASC - 66)) | (1 << (ApexParser.DESC - 66)) | (1 << (ApexParser.NULLS - 66)) | (1 << (ApexParser.FIRST - 66)) | (1 << (ApexParser.LAST - 66)) | (1 << (ApexParser.GROUP - 66)) | (1 << (ApexParser.ALL - 66)) | (1 << (ApexParser.ROWS - 66)) | (1 << (ApexParser.VIEW - 66)) | (1 << (ApexParser.HAVING - 66)) | (1 << (ApexParser.ROLLUP - 66)) | (1 << (ApexParser.TOLABEL - 66)) | (1 << (ApexParser.OFFSET - 66)) | (1 << (ApexParser.DATA - 66)) | (1 << (ApexParser.CATEGORY - 66)) | (1 << (ApexParser.AT - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ApexParser.ABOVE - 98)) | (1 << (ApexParser.BELOW - 98)) | (1 << (ApexParser.ABOVE_OR_BELOW - 98)) | (1 << (ApexParser.SECURITY_ENFORCED - 98)) | (1 << (ApexParser.REFERENCE - 98)) | (1 << (ApexParser.CUBE - 98)) | (1 << (ApexParser.FORMAT - 98)) | (1 << (ApexParser.TRACKING - 98)) | (1 << (ApexParser.VIEWSTAT - 98)) | (1 << (ApexParser.CALENDAR_MONTH - 98)) | (1 << (ApexParser.CALENDAR_QUARTER - 98)) | (1 << (ApexParser.CALENDAR_YEAR - 98)) | (1 << (ApexParser.DAY_IN_MONTH - 98)) | (1 << (ApexParser.DAY_IN_WEEK - 98)) | (1 << (ApexParser.DAY_IN_YEAR - 98)) | (1 << (ApexParser.DAY_ONLY - 98)) | (1 << (ApexParser.FISCAL_MONTH - 98)) | (1 << (ApexParser.FISCAL_QUARTER - 98)) | (1 << (ApexParser.FISCAL_YEAR - 98)) | (1 << (ApexParser.HOUR_IN_DAY - 98)) | (1 << (ApexParser.WEEK_IN_MONTH - 98)) | (1 << (ApexParser.WEEK_IN_YEAR - 98)) | (1 << (ApexParser.CONVERT_TIMEZONE - 98)) | (1 << (ApexParser.YESTERDAY - 98)) | (1 << (ApexParser.TODAY - 98)) | (1 << (ApexParser.TOMORROW - 98)) | (1 << (ApexParser.LAST_WEEK - 98)) | (1 << (ApexParser.THIS_WEEK - 98)) | (1 << (ApexParser.NEXT_WEEK - 98)) | (1 << (ApexParser.LAST_MONTH - 98)) | (1 << (ApexParser.THIS_MONTH - 98)) | (1 << (ApexParser.NEXT_MONTH - 98)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (ApexParser.LAST_90_DAYS - 130)) | (1 << (ApexParser.NEXT_90_DAYS - 130)) | (1 << (ApexParser.LAST_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_WEEKS_N - 130)) | (1 << (ApexParser.LAST_N_WEEKS_N - 130)) | (1 << (ApexParser.NEXT_N_MONTHS_N - 130)) | (1 << (ApexParser.LAST_N_MONTHS_N - 130)) | (1 << (ApexParser.THIS_QUARTER - 130)) | (1 << (ApexParser.LAST_QUARTER - 130)) | (1 << (ApexParser.NEXT_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_YEAR - 130)) | (1 << (ApexParser.LAST_YEAR - 130)) | (1 << (ApexParser.NEXT_YEAR - 130)) | (1 << (ApexParser.NEXT_N_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_YEARS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_QUARTER - 130)) | (1 << (ApexParser.LAST_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_YEAR - 130)) | (1 << (ApexParser.LAST_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.FIND - 130)) | (1 << (ApexParser.EMAIL - 130)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (ApexParser.NAME - 162)) | (1 << (ApexParser.PHONE - 162)) | (1 << (ApexParser.SIDEBAR - 162)) | (1 << (ApexParser.FIELDS - 162)) | (1 << (ApexParser.METADATA - 162)) | (1 << (ApexParser.PRICEBOOKID - 162)) | (1 << (ApexParser.NETWORK - 162)) | (1 << (ApexParser.SNIPPET - 162)) | (1 << (ApexParser.TARGET_LENGTH - 162)) | (1 << (ApexParser.DIVISION - 162)) | (1 << (ApexParser.RETURNING - 162)) | (1 << (ApexParser.LISTVIEW - 162)) | (1 << (ApexParser.FindLiteral - 162)) | (1 << (ApexParser.IntegerLiteral - 162)) | (1 << (ApexParser.LongLiteral - 162)) | (1 << (ApexParser.NumberLiteral - 162)) | (1 << (ApexParser.BooleanLiteral - 162)) | (1 << (ApexParser.StringLiteral - 162)) | (1 << (ApexParser.LPAREN - 162)) | (1 << (ApexParser.LBRACE - 162)) | (1 << (ApexParser.LBRACK - 162)) | (1 << (ApexParser.BANG - 162)))) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & ((1 << (ApexParser.TILDE - 194)) | (1 << (ApexParser.INC - 194)) | (1 << (ApexParser.DEC - 194)) | (1 << (ApexParser.ADD - 194)) | (1 << (ApexParser.SUB - 194)))) !== 0) || _la === ApexParser.ATSIGN || _la === ApexParser.Identifier) {
				{
				this.state = 604;
				this.elementValue();
				this.state = 609;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 605;
						this.match(ApexParser.COMMA);
						this.state = 606;
						this.elementValue();
						}
						}
					}
					this.state = 611;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
				}
				}
			}

			this.state = 615;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.COMMA) {
				{
				this.state = 614;
				this.match(ApexParser.COMMA);
				}
			}

			this.state = 617;
			this.match(ApexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, ApexParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 619;
			this.match(ApexParser.LBRACE);
			this.state = 623;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.ABSTRACT) | (1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.BREAK) | (1 << ApexParser.CONTINUE) | (1 << ApexParser.DELETE) | (1 << ApexParser.DO) | (1 << ApexParser.FINAL) | (1 << ApexParser.FOR) | (1 << ApexParser.GET) | (1 << ApexParser.GLOBAL) | (1 << ApexParser.IF) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSERT) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.MERGE) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL) | (1 << ApexParser.OVERRIDE) | (1 << ApexParser.PRIVATE) | (1 << ApexParser.PROTECTED) | (1 << ApexParser.PUBLIC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ApexParser.RETURN - 32)) | (1 << (ApexParser.SYSTEMRUNAS - 32)) | (1 << (ApexParser.SET - 32)) | (1 << (ApexParser.SHARING - 32)) | (1 << (ApexParser.STATIC - 32)) | (1 << (ApexParser.SUPER - 32)) | (1 << (ApexParser.SWITCH - 32)) | (1 << (ApexParser.TESTMETHOD - 32)) | (1 << (ApexParser.THIS - 32)) | (1 << (ApexParser.THROW - 32)) | (1 << (ApexParser.TRANSIENT - 32)) | (1 << (ApexParser.TRIGGER - 32)) | (1 << (ApexParser.TRY - 32)) | (1 << (ApexParser.UNDELETE - 32)) | (1 << (ApexParser.UPDATE - 32)) | (1 << (ApexParser.UPSERT - 32)) | (1 << (ApexParser.VIRTUAL - 32)) | (1 << (ApexParser.WEBSERVICE - 32)) | (1 << (ApexParser.WHEN - 32)) | (1 << (ApexParser.WHILE - 32)) | (1 << (ApexParser.WITH - 32)) | (1 << (ApexParser.WITHOUT - 32)) | (1 << (ApexParser.LIST - 32)) | (1 << (ApexParser.MAP - 32)) | (1 << (ApexParser.SELECT - 32)) | (1 << (ApexParser.COUNT - 32)) | (1 << (ApexParser.FROM - 32)) | (1 << (ApexParser.AS - 32)) | (1 << (ApexParser.USING - 32)) | (1 << (ApexParser.SCOPE - 32)) | (1 << (ApexParser.WHERE - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (ApexParser.ORDER - 64)) | (1 << (ApexParser.BY - 64)) | (1 << (ApexParser.LIMIT - 64)) | (1 << (ApexParser.SOQLAND - 64)) | (1 << (ApexParser.SOQLOR - 64)) | (1 << (ApexParser.NOT - 64)) | (1 << (ApexParser.AVG - 64)) | (1 << (ApexParser.COUNT_DISTINCT - 64)) | (1 << (ApexParser.MIN - 64)) | (1 << (ApexParser.MAX - 64)) | (1 << (ApexParser.SUM - 64)) | (1 << (ApexParser.TYPEOF - 64)) | (1 << (ApexParser.END - 64)) | (1 << (ApexParser.THEN - 64)) | (1 << (ApexParser.LIKE - 64)) | (1 << (ApexParser.IN - 64)) | (1 << (ApexParser.INCLUDES - 64)) | (1 << (ApexParser.EXCLUDES - 64)) | (1 << (ApexParser.ASC - 64)) | (1 << (ApexParser.DESC - 64)) | (1 << (ApexParser.NULLS - 64)) | (1 << (ApexParser.FIRST - 64)) | (1 << (ApexParser.LAST - 64)) | (1 << (ApexParser.GROUP - 64)) | (1 << (ApexParser.ALL - 64)) | (1 << (ApexParser.ROWS - 64)) | (1 << (ApexParser.VIEW - 64)) | (1 << (ApexParser.HAVING - 64)) | (1 << (ApexParser.ROLLUP - 64)) | (1 << (ApexParser.TOLABEL - 64)) | (1 << (ApexParser.OFFSET - 64)) | (1 << (ApexParser.DATA - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (ApexParser.CATEGORY - 96)) | (1 << (ApexParser.AT - 96)) | (1 << (ApexParser.ABOVE - 96)) | (1 << (ApexParser.BELOW - 96)) | (1 << (ApexParser.ABOVE_OR_BELOW - 96)) | (1 << (ApexParser.SECURITY_ENFORCED - 96)) | (1 << (ApexParser.REFERENCE - 96)) | (1 << (ApexParser.CUBE - 96)) | (1 << (ApexParser.FORMAT - 96)) | (1 << (ApexParser.TRACKING - 96)) | (1 << (ApexParser.VIEWSTAT - 96)) | (1 << (ApexParser.CALENDAR_MONTH - 96)) | (1 << (ApexParser.CALENDAR_QUARTER - 96)) | (1 << (ApexParser.CALENDAR_YEAR - 96)) | (1 << (ApexParser.DAY_IN_MONTH - 96)) | (1 << (ApexParser.DAY_IN_WEEK - 96)) | (1 << (ApexParser.DAY_IN_YEAR - 96)) | (1 << (ApexParser.DAY_ONLY - 96)) | (1 << (ApexParser.FISCAL_MONTH - 96)) | (1 << (ApexParser.FISCAL_QUARTER - 96)) | (1 << (ApexParser.FISCAL_YEAR - 96)) | (1 << (ApexParser.HOUR_IN_DAY - 96)) | (1 << (ApexParser.WEEK_IN_MONTH - 96)) | (1 << (ApexParser.WEEK_IN_YEAR - 96)) | (1 << (ApexParser.CONVERT_TIMEZONE - 96)) | (1 << (ApexParser.YESTERDAY - 96)) | (1 << (ApexParser.TODAY - 96)) | (1 << (ApexParser.TOMORROW - 96)) | (1 << (ApexParser.LAST_WEEK - 96)) | (1 << (ApexParser.THIS_WEEK - 96)) | (1 << (ApexParser.NEXT_WEEK - 96)) | (1 << (ApexParser.LAST_MONTH - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (ApexParser.THIS_MONTH - 128)) | (1 << (ApexParser.NEXT_MONTH - 128)) | (1 << (ApexParser.LAST_90_DAYS - 128)) | (1 << (ApexParser.NEXT_90_DAYS - 128)) | (1 << (ApexParser.LAST_N_DAYS_N - 128)) | (1 << (ApexParser.NEXT_N_DAYS_N - 128)) | (1 << (ApexParser.NEXT_N_WEEKS_N - 128)) | (1 << (ApexParser.LAST_N_WEEKS_N - 128)) | (1 << (ApexParser.NEXT_N_MONTHS_N - 128)) | (1 << (ApexParser.LAST_N_MONTHS_N - 128)) | (1 << (ApexParser.THIS_QUARTER - 128)) | (1 << (ApexParser.LAST_QUARTER - 128)) | (1 << (ApexParser.NEXT_QUARTER - 128)) | (1 << (ApexParser.NEXT_N_QUARTERS_N - 128)) | (1 << (ApexParser.LAST_N_QUARTERS_N - 128)) | (1 << (ApexParser.THIS_YEAR - 128)) | (1 << (ApexParser.LAST_YEAR - 128)) | (1 << (ApexParser.NEXT_YEAR - 128)) | (1 << (ApexParser.NEXT_N_YEARS_N - 128)) | (1 << (ApexParser.LAST_N_YEARS_N - 128)) | (1 << (ApexParser.THIS_FISCAL_QUARTER - 128)) | (1 << (ApexParser.LAST_FISCAL_QUARTER - 128)) | (1 << (ApexParser.NEXT_FISCAL_QUARTER - 128)) | (1 << (ApexParser.NEXT_N_FISCAL_QUARTERS_N - 128)) | (1 << (ApexParser.LAST_N_FISCAL_QUARTERS_N - 128)) | (1 << (ApexParser.THIS_FISCAL_YEAR - 128)) | (1 << (ApexParser.LAST_FISCAL_YEAR - 128)) | (1 << (ApexParser.NEXT_FISCAL_YEAR - 128)) | (1 << (ApexParser.NEXT_N_FISCAL_YEARS_N - 128)) | (1 << (ApexParser.LAST_N_FISCAL_YEARS_N - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (ApexParser.FIND - 160)) | (1 << (ApexParser.EMAIL - 160)) | (1 << (ApexParser.NAME - 160)) | (1 << (ApexParser.PHONE - 160)) | (1 << (ApexParser.SIDEBAR - 160)) | (1 << (ApexParser.FIELDS - 160)) | (1 << (ApexParser.METADATA - 160)) | (1 << (ApexParser.PRICEBOOKID - 160)) | (1 << (ApexParser.NETWORK - 160)) | (1 << (ApexParser.SNIPPET - 160)) | (1 << (ApexParser.TARGET_LENGTH - 160)) | (1 << (ApexParser.DIVISION - 160)) | (1 << (ApexParser.RETURNING - 160)) | (1 << (ApexParser.LISTVIEW - 160)) | (1 << (ApexParser.FindLiteral - 160)) | (1 << (ApexParser.IntegerLiteral - 160)) | (1 << (ApexParser.LongLiteral - 160)) | (1 << (ApexParser.NumberLiteral - 160)) | (1 << (ApexParser.BooleanLiteral - 160)) | (1 << (ApexParser.StringLiteral - 160)) | (1 << (ApexParser.LPAREN - 160)) | (1 << (ApexParser.LBRACE - 160)) | (1 << (ApexParser.LBRACK - 160)))) !== 0) || ((((_la - 193)) & ~0x1F) === 0 && ((1 << (_la - 193)) & ((1 << (ApexParser.BANG - 193)) | (1 << (ApexParser.TILDE - 193)) | (1 << (ApexParser.INC - 193)) | (1 << (ApexParser.DEC - 193)) | (1 << (ApexParser.ADD - 193)) | (1 << (ApexParser.SUB - 193)))) !== 0) || _la === ApexParser.ATSIGN || _la === ApexParser.Identifier) {
				{
				{
				this.state = 620;
				this.statement();
				}
				}
				this.state = 625;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 626;
			this.match(ApexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext {
		let _localctx: LocalVariableDeclarationStatementContext = new LocalVariableDeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, ApexParser.RULE_localVariableDeclarationStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 628;
			this.localVariableDeclaration();
			this.state = 629;
			this.match(ApexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		let _localctx: LocalVariableDeclarationContext = new LocalVariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, ApexParser.RULE_localVariableDeclaration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 634;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 631;
					this.modifier();
					}
					}
				}
				this.state = 636;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			}
			this.state = 637;
			this.typeRef();
			this.state = 638;
			this.variableDeclarators();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, ApexParser.RULE_statement);
		try {
			this.state = 660;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 640;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 641;
				this.ifStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 642;
				this.switchStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 643;
				this.forStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 644;
				this.whileStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 645;
				this.doWhileStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 646;
				this.tryStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 647;
				this.returnStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 648;
				this.throwStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 649;
				this.breakStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 650;
				this.continueStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 651;
				this.insertStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 652;
				this.updateStatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 653;
				this.deleteStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 654;
				this.undeleteStatement();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 655;
				this.upsertStatement();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 656;
				this.mergeStatement();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 657;
				this.runAsStatement();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 658;
				this.localVariableDeclarationStatement();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 659;
				this.expressionStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, ApexParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 662;
			this.match(ApexParser.IF);
			this.state = 663;
			this.parExpression();
			this.state = 664;
			this.statement();
			this.state = 667;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 665;
				this.match(ApexParser.ELSE);
				this.state = 666;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		let _localctx: SwitchStatementContext = new SwitchStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, ApexParser.RULE_switchStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 669;
			this.match(ApexParser.SWITCH);
			this.state = 670;
			this.match(ApexParser.ON);
			this.state = 671;
			this.expression(0);
			this.state = 672;
			this.match(ApexParser.LBRACE);
			this.state = 674;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 673;
				this.whenControl();
				}
				}
				this.state = 676;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ApexParser.WHEN);
			this.state = 678;
			this.match(ApexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whenControl(): WhenControlContext {
		let _localctx: WhenControlContext = new WhenControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, ApexParser.RULE_whenControl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 680;
			this.match(ApexParser.WHEN);
			this.state = 681;
			this.whenValue();
			this.state = 682;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whenValue(): WhenValueContext {
		let _localctx: WhenValueContext = new WhenValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, ApexParser.RULE_whenValue);
		let _la: number;
		try {
			this.state = 696;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 684;
				this.match(ApexParser.ELSE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 685;
				this.whenLiteral();
				this.state = 690;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ApexParser.COMMA) {
					{
					{
					this.state = 686;
					this.match(ApexParser.COMMA);
					this.state = 687;
					this.whenLiteral();
					}
					}
					this.state = 692;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 693;
				this.id();
				this.state = 694;
				this.id();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whenLiteral(): WhenLiteralContext {
		let _localctx: WhenLiteralContext = new WhenLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, ApexParser.RULE_whenLiteral);
		let _la: number;
		try {
			this.state = 706;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ApexParser.IntegerLiteral:
			case ApexParser.SUB:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 699;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ApexParser.SUB) {
					{
					this.state = 698;
					this.match(ApexParser.SUB);
					}
				}

				this.state = 701;
				this.match(ApexParser.IntegerLiteral);
				}
				break;
			case ApexParser.LongLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 702;
				this.match(ApexParser.LongLiteral);
				}
				break;
			case ApexParser.StringLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 703;
				this.match(ApexParser.StringLiteral);
				}
				break;
			case ApexParser.NULL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 704;
				this.match(ApexParser.NULL);
				}
				break;
			case ApexParser.AFTER:
			case ApexParser.BEFORE:
			case ApexParser.GET:
			case ApexParser.INHERITED:
			case ApexParser.INSTANCEOF:
			case ApexParser.SET:
			case ApexParser.SHARING:
			case ApexParser.SWITCH:
			case ApexParser.TRANSIENT:
			case ApexParser.TRIGGER:
			case ApexParser.WHEN:
			case ApexParser.WITH:
			case ApexParser.WITHOUT:
			case ApexParser.SELECT:
			case ApexParser.COUNT:
			case ApexParser.FROM:
			case ApexParser.AS:
			case ApexParser.USING:
			case ApexParser.SCOPE:
			case ApexParser.WHERE:
			case ApexParser.ORDER:
			case ApexParser.BY:
			case ApexParser.LIMIT:
			case ApexParser.SOQLAND:
			case ApexParser.SOQLOR:
			case ApexParser.NOT:
			case ApexParser.AVG:
			case ApexParser.COUNT_DISTINCT:
			case ApexParser.MIN:
			case ApexParser.MAX:
			case ApexParser.SUM:
			case ApexParser.TYPEOF:
			case ApexParser.END:
			case ApexParser.THEN:
			case ApexParser.LIKE:
			case ApexParser.IN:
			case ApexParser.INCLUDES:
			case ApexParser.EXCLUDES:
			case ApexParser.ASC:
			case ApexParser.DESC:
			case ApexParser.NULLS:
			case ApexParser.FIRST:
			case ApexParser.LAST:
			case ApexParser.GROUP:
			case ApexParser.ALL:
			case ApexParser.ROWS:
			case ApexParser.VIEW:
			case ApexParser.HAVING:
			case ApexParser.ROLLUP:
			case ApexParser.TOLABEL:
			case ApexParser.OFFSET:
			case ApexParser.DATA:
			case ApexParser.CATEGORY:
			case ApexParser.AT:
			case ApexParser.ABOVE:
			case ApexParser.BELOW:
			case ApexParser.ABOVE_OR_BELOW:
			case ApexParser.SECURITY_ENFORCED:
			case ApexParser.REFERENCE:
			case ApexParser.CUBE:
			case ApexParser.FORMAT:
			case ApexParser.TRACKING:
			case ApexParser.VIEWSTAT:
			case ApexParser.CALENDAR_MONTH:
			case ApexParser.CALENDAR_QUARTER:
			case ApexParser.CALENDAR_YEAR:
			case ApexParser.DAY_IN_MONTH:
			case ApexParser.DAY_IN_WEEK:
			case ApexParser.DAY_IN_YEAR:
			case ApexParser.DAY_ONLY:
			case ApexParser.FISCAL_MONTH:
			case ApexParser.FISCAL_QUARTER:
			case ApexParser.FISCAL_YEAR:
			case ApexParser.HOUR_IN_DAY:
			case ApexParser.WEEK_IN_MONTH:
			case ApexParser.WEEK_IN_YEAR:
			case ApexParser.CONVERT_TIMEZONE:
			case ApexParser.YESTERDAY:
			case ApexParser.TODAY:
			case ApexParser.TOMORROW:
			case ApexParser.LAST_WEEK:
			case ApexParser.THIS_WEEK:
			case ApexParser.NEXT_WEEK:
			case ApexParser.LAST_MONTH:
			case ApexParser.THIS_MONTH:
			case ApexParser.NEXT_MONTH:
			case ApexParser.LAST_90_DAYS:
			case ApexParser.NEXT_90_DAYS:
			case ApexParser.LAST_N_DAYS_N:
			case ApexParser.NEXT_N_DAYS_N:
			case ApexParser.NEXT_N_WEEKS_N:
			case ApexParser.LAST_N_WEEKS_N:
			case ApexParser.NEXT_N_MONTHS_N:
			case ApexParser.LAST_N_MONTHS_N:
			case ApexParser.THIS_QUARTER:
			case ApexParser.LAST_QUARTER:
			case ApexParser.NEXT_QUARTER:
			case ApexParser.NEXT_N_QUARTERS_N:
			case ApexParser.LAST_N_QUARTERS_N:
			case ApexParser.THIS_YEAR:
			case ApexParser.LAST_YEAR:
			case ApexParser.NEXT_YEAR:
			case ApexParser.NEXT_N_YEARS_N:
			case ApexParser.LAST_N_YEARS_N:
			case ApexParser.THIS_FISCAL_QUARTER:
			case ApexParser.LAST_FISCAL_QUARTER:
			case ApexParser.NEXT_FISCAL_QUARTER:
			case ApexParser.NEXT_N_FISCAL_QUARTERS_N:
			case ApexParser.LAST_N_FISCAL_QUARTERS_N:
			case ApexParser.THIS_FISCAL_YEAR:
			case ApexParser.LAST_FISCAL_YEAR:
			case ApexParser.NEXT_FISCAL_YEAR:
			case ApexParser.NEXT_N_FISCAL_YEARS_N:
			case ApexParser.LAST_N_FISCAL_YEARS_N:
			case ApexParser.FIND:
			case ApexParser.EMAIL:
			case ApexParser.NAME:
			case ApexParser.PHONE:
			case ApexParser.SIDEBAR:
			case ApexParser.FIELDS:
			case ApexParser.METADATA:
			case ApexParser.PRICEBOOKID:
			case ApexParser.NETWORK:
			case ApexParser.SNIPPET:
			case ApexParser.TARGET_LENGTH:
			case ApexParser.DIVISION:
			case ApexParser.RETURNING:
			case ApexParser.LISTVIEW:
			case ApexParser.Identifier:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 705;
				this.id();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, ApexParser.RULE_forStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 708;
			this.match(ApexParser.FOR);
			this.state = 709;
			this.match(ApexParser.LPAREN);
			this.state = 710;
			this.forControl();
			this.state = 711;
			this.match(ApexParser.RPAREN);
			this.state = 712;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, ApexParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 714;
			this.match(ApexParser.WHILE);
			this.state = 715;
			this.parExpression();
			this.state = 716;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public doWhileStatement(): DoWhileStatementContext {
		let _localctx: DoWhileStatementContext = new DoWhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, ApexParser.RULE_doWhileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 718;
			this.match(ApexParser.DO);
			this.state = 719;
			this.statement();
			this.state = 720;
			this.match(ApexParser.WHILE);
			this.state = 721;
			this.parExpression();
			this.state = 722;
			this.match(ApexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tryStatement(): TryStatementContext {
		let _localctx: TryStatementContext = new TryStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, ApexParser.RULE_tryStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 724;
			this.match(ApexParser.TRY);
			this.state = 725;
			this.block();
			this.state = 735;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ApexParser.CATCH:
				{
				this.state = 727;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 726;
					this.catchClause();
					}
					}
					this.state = 729;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === ApexParser.CATCH);
				this.state = 732;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ApexParser.FINALLY) {
					{
					this.state = 731;
					this.finallyBlock();
					}
				}

				}
				break;
			case ApexParser.FINALLY:
				{
				this.state = 734;
				this.finallyBlock();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, ApexParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 737;
			this.match(ApexParser.RETURN);
			this.state = 739;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SUPER - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.THIS - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.SELECT - 34)) | (1 << (ApexParser.COUNT - 34)) | (1 << (ApexParser.FROM - 34)) | (1 << (ApexParser.AS - 34)) | (1 << (ApexParser.USING - 34)) | (1 << (ApexParser.SCOPE - 34)) | (1 << (ApexParser.WHERE - 34)) | (1 << (ApexParser.ORDER - 34)) | (1 << (ApexParser.BY - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LIMIT - 66)) | (1 << (ApexParser.SOQLAND - 66)) | (1 << (ApexParser.SOQLOR - 66)) | (1 << (ApexParser.NOT - 66)) | (1 << (ApexParser.AVG - 66)) | (1 << (ApexParser.COUNT_DISTINCT - 66)) | (1 << (ApexParser.MIN - 66)) | (1 << (ApexParser.MAX - 66)) | (1 << (ApexParser.SUM - 66)) | (1 << (ApexParser.TYPEOF - 66)) | (1 << (ApexParser.END - 66)) | (1 << (ApexParser.THEN - 66)) | (1 << (ApexParser.LIKE - 66)) | (1 << (ApexParser.IN - 66)) | (1 << (ApexParser.INCLUDES - 66)) | (1 << (ApexParser.EXCLUDES - 66)) | (1 << (ApexParser.ASC - 66)) | (1 << (ApexParser.DESC - 66)) | (1 << (ApexParser.NULLS - 66)) | (1 << (ApexParser.FIRST - 66)) | (1 << (ApexParser.LAST - 66)) | (1 << (ApexParser.GROUP - 66)) | (1 << (ApexParser.ALL - 66)) | (1 << (ApexParser.ROWS - 66)) | (1 << (ApexParser.VIEW - 66)) | (1 << (ApexParser.HAVING - 66)) | (1 << (ApexParser.ROLLUP - 66)) | (1 << (ApexParser.TOLABEL - 66)) | (1 << (ApexParser.OFFSET - 66)) | (1 << (ApexParser.DATA - 66)) | (1 << (ApexParser.CATEGORY - 66)) | (1 << (ApexParser.AT - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ApexParser.ABOVE - 98)) | (1 << (ApexParser.BELOW - 98)) | (1 << (ApexParser.ABOVE_OR_BELOW - 98)) | (1 << (ApexParser.SECURITY_ENFORCED - 98)) | (1 << (ApexParser.REFERENCE - 98)) | (1 << (ApexParser.CUBE - 98)) | (1 << (ApexParser.FORMAT - 98)) | (1 << (ApexParser.TRACKING - 98)) | (1 << (ApexParser.VIEWSTAT - 98)) | (1 << (ApexParser.CALENDAR_MONTH - 98)) | (1 << (ApexParser.CALENDAR_QUARTER - 98)) | (1 << (ApexParser.CALENDAR_YEAR - 98)) | (1 << (ApexParser.DAY_IN_MONTH - 98)) | (1 << (ApexParser.DAY_IN_WEEK - 98)) | (1 << (ApexParser.DAY_IN_YEAR - 98)) | (1 << (ApexParser.DAY_ONLY - 98)) | (1 << (ApexParser.FISCAL_MONTH - 98)) | (1 << (ApexParser.FISCAL_QUARTER - 98)) | (1 << (ApexParser.FISCAL_YEAR - 98)) | (1 << (ApexParser.HOUR_IN_DAY - 98)) | (1 << (ApexParser.WEEK_IN_MONTH - 98)) | (1 << (ApexParser.WEEK_IN_YEAR - 98)) | (1 << (ApexParser.CONVERT_TIMEZONE - 98)) | (1 << (ApexParser.YESTERDAY - 98)) | (1 << (ApexParser.TODAY - 98)) | (1 << (ApexParser.TOMORROW - 98)) | (1 << (ApexParser.LAST_WEEK - 98)) | (1 << (ApexParser.THIS_WEEK - 98)) | (1 << (ApexParser.NEXT_WEEK - 98)) | (1 << (ApexParser.LAST_MONTH - 98)) | (1 << (ApexParser.THIS_MONTH - 98)) | (1 << (ApexParser.NEXT_MONTH - 98)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (ApexParser.LAST_90_DAYS - 130)) | (1 << (ApexParser.NEXT_90_DAYS - 130)) | (1 << (ApexParser.LAST_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_WEEKS_N - 130)) | (1 << (ApexParser.LAST_N_WEEKS_N - 130)) | (1 << (ApexParser.NEXT_N_MONTHS_N - 130)) | (1 << (ApexParser.LAST_N_MONTHS_N - 130)) | (1 << (ApexParser.THIS_QUARTER - 130)) | (1 << (ApexParser.LAST_QUARTER - 130)) | (1 << (ApexParser.NEXT_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_YEAR - 130)) | (1 << (ApexParser.LAST_YEAR - 130)) | (1 << (ApexParser.NEXT_YEAR - 130)) | (1 << (ApexParser.NEXT_N_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_YEARS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_QUARTER - 130)) | (1 << (ApexParser.LAST_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_YEAR - 130)) | (1 << (ApexParser.LAST_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.FIND - 130)) | (1 << (ApexParser.EMAIL - 130)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (ApexParser.NAME - 162)) | (1 << (ApexParser.PHONE - 162)) | (1 << (ApexParser.SIDEBAR - 162)) | (1 << (ApexParser.FIELDS - 162)) | (1 << (ApexParser.METADATA - 162)) | (1 << (ApexParser.PRICEBOOKID - 162)) | (1 << (ApexParser.NETWORK - 162)) | (1 << (ApexParser.SNIPPET - 162)) | (1 << (ApexParser.TARGET_LENGTH - 162)) | (1 << (ApexParser.DIVISION - 162)) | (1 << (ApexParser.RETURNING - 162)) | (1 << (ApexParser.LISTVIEW - 162)) | (1 << (ApexParser.FindLiteral - 162)) | (1 << (ApexParser.IntegerLiteral - 162)) | (1 << (ApexParser.LongLiteral - 162)) | (1 << (ApexParser.NumberLiteral - 162)) | (1 << (ApexParser.BooleanLiteral - 162)) | (1 << (ApexParser.StringLiteral - 162)) | (1 << (ApexParser.LPAREN - 162)) | (1 << (ApexParser.LBRACK - 162)) | (1 << (ApexParser.BANG - 162)))) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & ((1 << (ApexParser.TILDE - 194)) | (1 << (ApexParser.INC - 194)) | (1 << (ApexParser.DEC - 194)) | (1 << (ApexParser.ADD - 194)) | (1 << (ApexParser.SUB - 194)))) !== 0) || _la === ApexParser.Identifier) {
				{
				this.state = 738;
				this.expression(0);
				}
			}

			this.state = 741;
			this.match(ApexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public throwStatement(): ThrowStatementContext {
		let _localctx: ThrowStatementContext = new ThrowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, ApexParser.RULE_throwStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 743;
			this.match(ApexParser.THROW);
			this.state = 744;
			this.expression(0);
			this.state = 745;
			this.match(ApexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, ApexParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 747;
			this.match(ApexParser.BREAK);
			this.state = 748;
			this.match(ApexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, ApexParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 750;
			this.match(ApexParser.CONTINUE);
			this.state = 751;
			this.match(ApexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public insertStatement(): InsertStatementContext {
		let _localctx: InsertStatementContext = new InsertStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, ApexParser.RULE_insertStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 753;
			this.match(ApexParser.INSERT);
			this.state = 754;
			this.expression(0);
			this.state = 755;
			this.match(ApexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public updateStatement(): UpdateStatementContext {
		let _localctx: UpdateStatementContext = new UpdateStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, ApexParser.RULE_updateStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 757;
			this.match(ApexParser.UPDATE);
			this.state = 758;
			this.expression(0);
			this.state = 759;
			this.match(ApexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public deleteStatement(): DeleteStatementContext {
		let _localctx: DeleteStatementContext = new DeleteStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, ApexParser.RULE_deleteStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 761;
			this.match(ApexParser.DELETE);
			this.state = 762;
			this.expression(0);
			this.state = 763;
			this.match(ApexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public undeleteStatement(): UndeleteStatementContext {
		let _localctx: UndeleteStatementContext = new UndeleteStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, ApexParser.RULE_undeleteStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 765;
			this.match(ApexParser.UNDELETE);
			this.state = 766;
			this.expression(0);
			this.state = 767;
			this.match(ApexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public upsertStatement(): UpsertStatementContext {
		let _localctx: UpsertStatementContext = new UpsertStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, ApexParser.RULE_upsertStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 769;
			this.match(ApexParser.UPSERT);
			this.state = 770;
			this.expression(0);
			this.state = 772;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.SELECT - 34)) | (1 << (ApexParser.COUNT - 34)) | (1 << (ApexParser.FROM - 34)) | (1 << (ApexParser.AS - 34)) | (1 << (ApexParser.USING - 34)) | (1 << (ApexParser.SCOPE - 34)) | (1 << (ApexParser.WHERE - 34)) | (1 << (ApexParser.ORDER - 34)) | (1 << (ApexParser.BY - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LIMIT - 66)) | (1 << (ApexParser.SOQLAND - 66)) | (1 << (ApexParser.SOQLOR - 66)) | (1 << (ApexParser.NOT - 66)) | (1 << (ApexParser.AVG - 66)) | (1 << (ApexParser.COUNT_DISTINCT - 66)) | (1 << (ApexParser.MIN - 66)) | (1 << (ApexParser.MAX - 66)) | (1 << (ApexParser.SUM - 66)) | (1 << (ApexParser.TYPEOF - 66)) | (1 << (ApexParser.END - 66)) | (1 << (ApexParser.THEN - 66)) | (1 << (ApexParser.LIKE - 66)) | (1 << (ApexParser.IN - 66)) | (1 << (ApexParser.INCLUDES - 66)) | (1 << (ApexParser.EXCLUDES - 66)) | (1 << (ApexParser.ASC - 66)) | (1 << (ApexParser.DESC - 66)) | (1 << (ApexParser.NULLS - 66)) | (1 << (ApexParser.FIRST - 66)) | (1 << (ApexParser.LAST - 66)) | (1 << (ApexParser.GROUP - 66)) | (1 << (ApexParser.ALL - 66)) | (1 << (ApexParser.ROWS - 66)) | (1 << (ApexParser.VIEW - 66)) | (1 << (ApexParser.HAVING - 66)) | (1 << (ApexParser.ROLLUP - 66)) | (1 << (ApexParser.TOLABEL - 66)) | (1 << (ApexParser.OFFSET - 66)) | (1 << (ApexParser.DATA - 66)) | (1 << (ApexParser.CATEGORY - 66)) | (1 << (ApexParser.AT - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ApexParser.ABOVE - 98)) | (1 << (ApexParser.BELOW - 98)) | (1 << (ApexParser.ABOVE_OR_BELOW - 98)) | (1 << (ApexParser.SECURITY_ENFORCED - 98)) | (1 << (ApexParser.REFERENCE - 98)) | (1 << (ApexParser.CUBE - 98)) | (1 << (ApexParser.FORMAT - 98)) | (1 << (ApexParser.TRACKING - 98)) | (1 << (ApexParser.VIEWSTAT - 98)) | (1 << (ApexParser.CALENDAR_MONTH - 98)) | (1 << (ApexParser.CALENDAR_QUARTER - 98)) | (1 << (ApexParser.CALENDAR_YEAR - 98)) | (1 << (ApexParser.DAY_IN_MONTH - 98)) | (1 << (ApexParser.DAY_IN_WEEK - 98)) | (1 << (ApexParser.DAY_IN_YEAR - 98)) | (1 << (ApexParser.DAY_ONLY - 98)) | (1 << (ApexParser.FISCAL_MONTH - 98)) | (1 << (ApexParser.FISCAL_QUARTER - 98)) | (1 << (ApexParser.FISCAL_YEAR - 98)) | (1 << (ApexParser.HOUR_IN_DAY - 98)) | (1 << (ApexParser.WEEK_IN_MONTH - 98)) | (1 << (ApexParser.WEEK_IN_YEAR - 98)) | (1 << (ApexParser.CONVERT_TIMEZONE - 98)) | (1 << (ApexParser.YESTERDAY - 98)) | (1 << (ApexParser.TODAY - 98)) | (1 << (ApexParser.TOMORROW - 98)) | (1 << (ApexParser.LAST_WEEK - 98)) | (1 << (ApexParser.THIS_WEEK - 98)) | (1 << (ApexParser.NEXT_WEEK - 98)) | (1 << (ApexParser.LAST_MONTH - 98)) | (1 << (ApexParser.THIS_MONTH - 98)) | (1 << (ApexParser.NEXT_MONTH - 98)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (ApexParser.LAST_90_DAYS - 130)) | (1 << (ApexParser.NEXT_90_DAYS - 130)) | (1 << (ApexParser.LAST_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_WEEKS_N - 130)) | (1 << (ApexParser.LAST_N_WEEKS_N - 130)) | (1 << (ApexParser.NEXT_N_MONTHS_N - 130)) | (1 << (ApexParser.LAST_N_MONTHS_N - 130)) | (1 << (ApexParser.THIS_QUARTER - 130)) | (1 << (ApexParser.LAST_QUARTER - 130)) | (1 << (ApexParser.NEXT_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_YEAR - 130)) | (1 << (ApexParser.LAST_YEAR - 130)) | (1 << (ApexParser.NEXT_YEAR - 130)) | (1 << (ApexParser.NEXT_N_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_YEARS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_QUARTER - 130)) | (1 << (ApexParser.LAST_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_YEAR - 130)) | (1 << (ApexParser.LAST_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.FIND - 130)) | (1 << (ApexParser.EMAIL - 130)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (ApexParser.NAME - 162)) | (1 << (ApexParser.PHONE - 162)) | (1 << (ApexParser.SIDEBAR - 162)) | (1 << (ApexParser.FIELDS - 162)) | (1 << (ApexParser.METADATA - 162)) | (1 << (ApexParser.PRICEBOOKID - 162)) | (1 << (ApexParser.NETWORK - 162)) | (1 << (ApexParser.SNIPPET - 162)) | (1 << (ApexParser.TARGET_LENGTH - 162)) | (1 << (ApexParser.DIVISION - 162)) | (1 << (ApexParser.RETURNING - 162)) | (1 << (ApexParser.LISTVIEW - 162)))) !== 0) || _la === ApexParser.Identifier) {
				{
				this.state = 771;
				this.qualifiedName();
				}
			}

			this.state = 774;
			this.match(ApexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mergeStatement(): MergeStatementContext {
		let _localctx: MergeStatementContext = new MergeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, ApexParser.RULE_mergeStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 776;
			this.match(ApexParser.MERGE);
			this.state = 777;
			this.expression(0);
			this.state = 778;
			this.expression(0);
			this.state = 779;
			this.match(ApexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public runAsStatement(): RunAsStatementContext {
		let _localctx: RunAsStatementContext = new RunAsStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, ApexParser.RULE_runAsStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 781;
			this.match(ApexParser.SYSTEMRUNAS);
			this.state = 782;
			this.match(ApexParser.LPAREN);
			this.state = 784;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SUPER - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.THIS - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.SELECT - 34)) | (1 << (ApexParser.COUNT - 34)) | (1 << (ApexParser.FROM - 34)) | (1 << (ApexParser.AS - 34)) | (1 << (ApexParser.USING - 34)) | (1 << (ApexParser.SCOPE - 34)) | (1 << (ApexParser.WHERE - 34)) | (1 << (ApexParser.ORDER - 34)) | (1 << (ApexParser.BY - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LIMIT - 66)) | (1 << (ApexParser.SOQLAND - 66)) | (1 << (ApexParser.SOQLOR - 66)) | (1 << (ApexParser.NOT - 66)) | (1 << (ApexParser.AVG - 66)) | (1 << (ApexParser.COUNT_DISTINCT - 66)) | (1 << (ApexParser.MIN - 66)) | (1 << (ApexParser.MAX - 66)) | (1 << (ApexParser.SUM - 66)) | (1 << (ApexParser.TYPEOF - 66)) | (1 << (ApexParser.END - 66)) | (1 << (ApexParser.THEN - 66)) | (1 << (ApexParser.LIKE - 66)) | (1 << (ApexParser.IN - 66)) | (1 << (ApexParser.INCLUDES - 66)) | (1 << (ApexParser.EXCLUDES - 66)) | (1 << (ApexParser.ASC - 66)) | (1 << (ApexParser.DESC - 66)) | (1 << (ApexParser.NULLS - 66)) | (1 << (ApexParser.FIRST - 66)) | (1 << (ApexParser.LAST - 66)) | (1 << (ApexParser.GROUP - 66)) | (1 << (ApexParser.ALL - 66)) | (1 << (ApexParser.ROWS - 66)) | (1 << (ApexParser.VIEW - 66)) | (1 << (ApexParser.HAVING - 66)) | (1 << (ApexParser.ROLLUP - 66)) | (1 << (ApexParser.TOLABEL - 66)) | (1 << (ApexParser.OFFSET - 66)) | (1 << (ApexParser.DATA - 66)) | (1 << (ApexParser.CATEGORY - 66)) | (1 << (ApexParser.AT - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ApexParser.ABOVE - 98)) | (1 << (ApexParser.BELOW - 98)) | (1 << (ApexParser.ABOVE_OR_BELOW - 98)) | (1 << (ApexParser.SECURITY_ENFORCED - 98)) | (1 << (ApexParser.REFERENCE - 98)) | (1 << (ApexParser.CUBE - 98)) | (1 << (ApexParser.FORMAT - 98)) | (1 << (ApexParser.TRACKING - 98)) | (1 << (ApexParser.VIEWSTAT - 98)) | (1 << (ApexParser.CALENDAR_MONTH - 98)) | (1 << (ApexParser.CALENDAR_QUARTER - 98)) | (1 << (ApexParser.CALENDAR_YEAR - 98)) | (1 << (ApexParser.DAY_IN_MONTH - 98)) | (1 << (ApexParser.DAY_IN_WEEK - 98)) | (1 << (ApexParser.DAY_IN_YEAR - 98)) | (1 << (ApexParser.DAY_ONLY - 98)) | (1 << (ApexParser.FISCAL_MONTH - 98)) | (1 << (ApexParser.FISCAL_QUARTER - 98)) | (1 << (ApexParser.FISCAL_YEAR - 98)) | (1 << (ApexParser.HOUR_IN_DAY - 98)) | (1 << (ApexParser.WEEK_IN_MONTH - 98)) | (1 << (ApexParser.WEEK_IN_YEAR - 98)) | (1 << (ApexParser.CONVERT_TIMEZONE - 98)) | (1 << (ApexParser.YESTERDAY - 98)) | (1 << (ApexParser.TODAY - 98)) | (1 << (ApexParser.TOMORROW - 98)) | (1 << (ApexParser.LAST_WEEK - 98)) | (1 << (ApexParser.THIS_WEEK - 98)) | (1 << (ApexParser.NEXT_WEEK - 98)) | (1 << (ApexParser.LAST_MONTH - 98)) | (1 << (ApexParser.THIS_MONTH - 98)) | (1 << (ApexParser.NEXT_MONTH - 98)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (ApexParser.LAST_90_DAYS - 130)) | (1 << (ApexParser.NEXT_90_DAYS - 130)) | (1 << (ApexParser.LAST_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_WEEKS_N - 130)) | (1 << (ApexParser.LAST_N_WEEKS_N - 130)) | (1 << (ApexParser.NEXT_N_MONTHS_N - 130)) | (1 << (ApexParser.LAST_N_MONTHS_N - 130)) | (1 << (ApexParser.THIS_QUARTER - 130)) | (1 << (ApexParser.LAST_QUARTER - 130)) | (1 << (ApexParser.NEXT_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_YEAR - 130)) | (1 << (ApexParser.LAST_YEAR - 130)) | (1 << (ApexParser.NEXT_YEAR - 130)) | (1 << (ApexParser.NEXT_N_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_YEARS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_QUARTER - 130)) | (1 << (ApexParser.LAST_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_YEAR - 130)) | (1 << (ApexParser.LAST_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.FIND - 130)) | (1 << (ApexParser.EMAIL - 130)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (ApexParser.NAME - 162)) | (1 << (ApexParser.PHONE - 162)) | (1 << (ApexParser.SIDEBAR - 162)) | (1 << (ApexParser.FIELDS - 162)) | (1 << (ApexParser.METADATA - 162)) | (1 << (ApexParser.PRICEBOOKID - 162)) | (1 << (ApexParser.NETWORK - 162)) | (1 << (ApexParser.SNIPPET - 162)) | (1 << (ApexParser.TARGET_LENGTH - 162)) | (1 << (ApexParser.DIVISION - 162)) | (1 << (ApexParser.RETURNING - 162)) | (1 << (ApexParser.LISTVIEW - 162)) | (1 << (ApexParser.FindLiteral - 162)) | (1 << (ApexParser.IntegerLiteral - 162)) | (1 << (ApexParser.LongLiteral - 162)) | (1 << (ApexParser.NumberLiteral - 162)) | (1 << (ApexParser.BooleanLiteral - 162)) | (1 << (ApexParser.StringLiteral - 162)) | (1 << (ApexParser.LPAREN - 162)) | (1 << (ApexParser.LBRACK - 162)) | (1 << (ApexParser.BANG - 162)))) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & ((1 << (ApexParser.TILDE - 194)) | (1 << (ApexParser.INC - 194)) | (1 << (ApexParser.DEC - 194)) | (1 << (ApexParser.ADD - 194)) | (1 << (ApexParser.SUB - 194)))) !== 0) || _la === ApexParser.Identifier) {
				{
				this.state = 783;
				this.expressionList();
				}
			}

			this.state = 786;
			this.match(ApexParser.RPAREN);
			this.state = 787;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, ApexParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 789;
			this.expression(0);
			this.state = 790;
			this.match(ApexParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyBlock(): PropertyBlockContext {
		let _localctx: PropertyBlockContext = new PropertyBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, ApexParser.RULE_propertyBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 795;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.ABSTRACT) | (1 << ApexParser.FINAL) | (1 << ApexParser.GLOBAL) | (1 << ApexParser.INHERITED) | (1 << ApexParser.OVERRIDE) | (1 << ApexParser.PRIVATE) | (1 << ApexParser.PROTECTED) | (1 << ApexParser.PUBLIC))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (ApexParser.STATIC - 36)) | (1 << (ApexParser.TESTMETHOD - 36)) | (1 << (ApexParser.TRANSIENT - 36)) | (1 << (ApexParser.VIRTUAL - 36)) | (1 << (ApexParser.WEBSERVICE - 36)) | (1 << (ApexParser.WITH - 36)) | (1 << (ApexParser.WITHOUT - 36)))) !== 0) || _la === ApexParser.ATSIGN) {
				{
				{
				this.state = 792;
				this.modifier();
				}
				}
				this.state = 797;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 800;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ApexParser.GET:
				{
				this.state = 798;
				this.getter();
				}
				break;
			case ApexParser.SET:
				{
				this.state = 799;
				this.setter();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public getter(): GetterContext {
		let _localctx: GetterContext = new GetterContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, ApexParser.RULE_getter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 802;
			this.match(ApexParser.GET);
			this.state = 805;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ApexParser.SEMI:
				{
				this.state = 803;
				this.match(ApexParser.SEMI);
				}
				break;
			case ApexParser.LBRACE:
				{
				this.state = 804;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setter(): SetterContext {
		let _localctx: SetterContext = new SetterContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, ApexParser.RULE_setter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 807;
			this.match(ApexParser.SET);
			this.state = 810;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ApexParser.SEMI:
				{
				this.state = 808;
				this.match(ApexParser.SEMI);
				}
				break;
			case ApexParser.LBRACE:
				{
				this.state = 809;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public catchClause(): CatchClauseContext {
		let _localctx: CatchClauseContext = new CatchClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, ApexParser.RULE_catchClause);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 812;
			this.match(ApexParser.CATCH);
			this.state = 813;
			this.match(ApexParser.LPAREN);
			this.state = 817;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 814;
					this.modifier();
					}
					}
				}
				this.state = 819;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
			}
			this.state = 820;
			this.qualifiedName();
			this.state = 821;
			this.id();
			this.state = 822;
			this.match(ApexParser.RPAREN);
			this.state = 823;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public finallyBlock(): FinallyBlockContext {
		let _localctx: FinallyBlockContext = new FinallyBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, ApexParser.RULE_finallyBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 825;
			this.match(ApexParser.FINALLY);
			this.state = 826;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forControl(): ForControlContext {
		let _localctx: ForControlContext = new ForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, ApexParser.RULE_forControl);
		let _la: number;
		try {
			this.state = 840;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 828;
				this.enhancedForControl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 830;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.ABSTRACT) | (1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.FINAL) | (1 << ApexParser.GET) | (1 << ApexParser.GLOBAL) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL) | (1 << ApexParser.OVERRIDE) | (1 << ApexParser.PRIVATE) | (1 << ApexParser.PROTECTED) | (1 << ApexParser.PUBLIC))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.STATIC - 34)) | (1 << (ApexParser.SUPER - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.TESTMETHOD - 34)) | (1 << (ApexParser.THIS - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.VIRTUAL - 34)) | (1 << (ApexParser.WEBSERVICE - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.SELECT - 34)) | (1 << (ApexParser.COUNT - 34)) | (1 << (ApexParser.FROM - 34)) | (1 << (ApexParser.AS - 34)) | (1 << (ApexParser.USING - 34)) | (1 << (ApexParser.SCOPE - 34)) | (1 << (ApexParser.WHERE - 34)) | (1 << (ApexParser.ORDER - 34)) | (1 << (ApexParser.BY - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LIMIT - 66)) | (1 << (ApexParser.SOQLAND - 66)) | (1 << (ApexParser.SOQLOR - 66)) | (1 << (ApexParser.NOT - 66)) | (1 << (ApexParser.AVG - 66)) | (1 << (ApexParser.COUNT_DISTINCT - 66)) | (1 << (ApexParser.MIN - 66)) | (1 << (ApexParser.MAX - 66)) | (1 << (ApexParser.SUM - 66)) | (1 << (ApexParser.TYPEOF - 66)) | (1 << (ApexParser.END - 66)) | (1 << (ApexParser.THEN - 66)) | (1 << (ApexParser.LIKE - 66)) | (1 << (ApexParser.IN - 66)) | (1 << (ApexParser.INCLUDES - 66)) | (1 << (ApexParser.EXCLUDES - 66)) | (1 << (ApexParser.ASC - 66)) | (1 << (ApexParser.DESC - 66)) | (1 << (ApexParser.NULLS - 66)) | (1 << (ApexParser.FIRST - 66)) | (1 << (ApexParser.LAST - 66)) | (1 << (ApexParser.GROUP - 66)) | (1 << (ApexParser.ALL - 66)) | (1 << (ApexParser.ROWS - 66)) | (1 << (ApexParser.VIEW - 66)) | (1 << (ApexParser.HAVING - 66)) | (1 << (ApexParser.ROLLUP - 66)) | (1 << (ApexParser.TOLABEL - 66)) | (1 << (ApexParser.OFFSET - 66)) | (1 << (ApexParser.DATA - 66)) | (1 << (ApexParser.CATEGORY - 66)) | (1 << (ApexParser.AT - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ApexParser.ABOVE - 98)) | (1 << (ApexParser.BELOW - 98)) | (1 << (ApexParser.ABOVE_OR_BELOW - 98)) | (1 << (ApexParser.SECURITY_ENFORCED - 98)) | (1 << (ApexParser.REFERENCE - 98)) | (1 << (ApexParser.CUBE - 98)) | (1 << (ApexParser.FORMAT - 98)) | (1 << (ApexParser.TRACKING - 98)) | (1 << (ApexParser.VIEWSTAT - 98)) | (1 << (ApexParser.CALENDAR_MONTH - 98)) | (1 << (ApexParser.CALENDAR_QUARTER - 98)) | (1 << (ApexParser.CALENDAR_YEAR - 98)) | (1 << (ApexParser.DAY_IN_MONTH - 98)) | (1 << (ApexParser.DAY_IN_WEEK - 98)) | (1 << (ApexParser.DAY_IN_YEAR - 98)) | (1 << (ApexParser.DAY_ONLY - 98)) | (1 << (ApexParser.FISCAL_MONTH - 98)) | (1 << (ApexParser.FISCAL_QUARTER - 98)) | (1 << (ApexParser.FISCAL_YEAR - 98)) | (1 << (ApexParser.HOUR_IN_DAY - 98)) | (1 << (ApexParser.WEEK_IN_MONTH - 98)) | (1 << (ApexParser.WEEK_IN_YEAR - 98)) | (1 << (ApexParser.CONVERT_TIMEZONE - 98)) | (1 << (ApexParser.YESTERDAY - 98)) | (1 << (ApexParser.TODAY - 98)) | (1 << (ApexParser.TOMORROW - 98)) | (1 << (ApexParser.LAST_WEEK - 98)) | (1 << (ApexParser.THIS_WEEK - 98)) | (1 << (ApexParser.NEXT_WEEK - 98)) | (1 << (ApexParser.LAST_MONTH - 98)) | (1 << (ApexParser.THIS_MONTH - 98)) | (1 << (ApexParser.NEXT_MONTH - 98)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (ApexParser.LAST_90_DAYS - 130)) | (1 << (ApexParser.NEXT_90_DAYS - 130)) | (1 << (ApexParser.LAST_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_WEEKS_N - 130)) | (1 << (ApexParser.LAST_N_WEEKS_N - 130)) | (1 << (ApexParser.NEXT_N_MONTHS_N - 130)) | (1 << (ApexParser.LAST_N_MONTHS_N - 130)) | (1 << (ApexParser.THIS_QUARTER - 130)) | (1 << (ApexParser.LAST_QUARTER - 130)) | (1 << (ApexParser.NEXT_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_YEAR - 130)) | (1 << (ApexParser.LAST_YEAR - 130)) | (1 << (ApexParser.NEXT_YEAR - 130)) | (1 << (ApexParser.NEXT_N_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_YEARS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_QUARTER - 130)) | (1 << (ApexParser.LAST_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_YEAR - 130)) | (1 << (ApexParser.LAST_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.FIND - 130)) | (1 << (ApexParser.EMAIL - 130)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (ApexParser.NAME - 162)) | (1 << (ApexParser.PHONE - 162)) | (1 << (ApexParser.SIDEBAR - 162)) | (1 << (ApexParser.FIELDS - 162)) | (1 << (ApexParser.METADATA - 162)) | (1 << (ApexParser.PRICEBOOKID - 162)) | (1 << (ApexParser.NETWORK - 162)) | (1 << (ApexParser.SNIPPET - 162)) | (1 << (ApexParser.TARGET_LENGTH - 162)) | (1 << (ApexParser.DIVISION - 162)) | (1 << (ApexParser.RETURNING - 162)) | (1 << (ApexParser.LISTVIEW - 162)) | (1 << (ApexParser.FindLiteral - 162)) | (1 << (ApexParser.IntegerLiteral - 162)) | (1 << (ApexParser.LongLiteral - 162)) | (1 << (ApexParser.NumberLiteral - 162)) | (1 << (ApexParser.BooleanLiteral - 162)) | (1 << (ApexParser.StringLiteral - 162)) | (1 << (ApexParser.LPAREN - 162)) | (1 << (ApexParser.LBRACK - 162)) | (1 << (ApexParser.BANG - 162)))) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & ((1 << (ApexParser.TILDE - 194)) | (1 << (ApexParser.INC - 194)) | (1 << (ApexParser.DEC - 194)) | (1 << (ApexParser.ADD - 194)) | (1 << (ApexParser.SUB - 194)))) !== 0) || _la === ApexParser.ATSIGN || _la === ApexParser.Identifier) {
					{
					this.state = 829;
					this.forInit();
					}
				}

				this.state = 832;
				this.match(ApexParser.SEMI);
				this.state = 834;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SUPER - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.THIS - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.SELECT - 34)) | (1 << (ApexParser.COUNT - 34)) | (1 << (ApexParser.FROM - 34)) | (1 << (ApexParser.AS - 34)) | (1 << (ApexParser.USING - 34)) | (1 << (ApexParser.SCOPE - 34)) | (1 << (ApexParser.WHERE - 34)) | (1 << (ApexParser.ORDER - 34)) | (1 << (ApexParser.BY - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LIMIT - 66)) | (1 << (ApexParser.SOQLAND - 66)) | (1 << (ApexParser.SOQLOR - 66)) | (1 << (ApexParser.NOT - 66)) | (1 << (ApexParser.AVG - 66)) | (1 << (ApexParser.COUNT_DISTINCT - 66)) | (1 << (ApexParser.MIN - 66)) | (1 << (ApexParser.MAX - 66)) | (1 << (ApexParser.SUM - 66)) | (1 << (ApexParser.TYPEOF - 66)) | (1 << (ApexParser.END - 66)) | (1 << (ApexParser.THEN - 66)) | (1 << (ApexParser.LIKE - 66)) | (1 << (ApexParser.IN - 66)) | (1 << (ApexParser.INCLUDES - 66)) | (1 << (ApexParser.EXCLUDES - 66)) | (1 << (ApexParser.ASC - 66)) | (1 << (ApexParser.DESC - 66)) | (1 << (ApexParser.NULLS - 66)) | (1 << (ApexParser.FIRST - 66)) | (1 << (ApexParser.LAST - 66)) | (1 << (ApexParser.GROUP - 66)) | (1 << (ApexParser.ALL - 66)) | (1 << (ApexParser.ROWS - 66)) | (1 << (ApexParser.VIEW - 66)) | (1 << (ApexParser.HAVING - 66)) | (1 << (ApexParser.ROLLUP - 66)) | (1 << (ApexParser.TOLABEL - 66)) | (1 << (ApexParser.OFFSET - 66)) | (1 << (ApexParser.DATA - 66)) | (1 << (ApexParser.CATEGORY - 66)) | (1 << (ApexParser.AT - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ApexParser.ABOVE - 98)) | (1 << (ApexParser.BELOW - 98)) | (1 << (ApexParser.ABOVE_OR_BELOW - 98)) | (1 << (ApexParser.SECURITY_ENFORCED - 98)) | (1 << (ApexParser.REFERENCE - 98)) | (1 << (ApexParser.CUBE - 98)) | (1 << (ApexParser.FORMAT - 98)) | (1 << (ApexParser.TRACKING - 98)) | (1 << (ApexParser.VIEWSTAT - 98)) | (1 << (ApexParser.CALENDAR_MONTH - 98)) | (1 << (ApexParser.CALENDAR_QUARTER - 98)) | (1 << (ApexParser.CALENDAR_YEAR - 98)) | (1 << (ApexParser.DAY_IN_MONTH - 98)) | (1 << (ApexParser.DAY_IN_WEEK - 98)) | (1 << (ApexParser.DAY_IN_YEAR - 98)) | (1 << (ApexParser.DAY_ONLY - 98)) | (1 << (ApexParser.FISCAL_MONTH - 98)) | (1 << (ApexParser.FISCAL_QUARTER - 98)) | (1 << (ApexParser.FISCAL_YEAR - 98)) | (1 << (ApexParser.HOUR_IN_DAY - 98)) | (1 << (ApexParser.WEEK_IN_MONTH - 98)) | (1 << (ApexParser.WEEK_IN_YEAR - 98)) | (1 << (ApexParser.CONVERT_TIMEZONE - 98)) | (1 << (ApexParser.YESTERDAY - 98)) | (1 << (ApexParser.TODAY - 98)) | (1 << (ApexParser.TOMORROW - 98)) | (1 << (ApexParser.LAST_WEEK - 98)) | (1 << (ApexParser.THIS_WEEK - 98)) | (1 << (ApexParser.NEXT_WEEK - 98)) | (1 << (ApexParser.LAST_MONTH - 98)) | (1 << (ApexParser.THIS_MONTH - 98)) | (1 << (ApexParser.NEXT_MONTH - 98)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (ApexParser.LAST_90_DAYS - 130)) | (1 << (ApexParser.NEXT_90_DAYS - 130)) | (1 << (ApexParser.LAST_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_WEEKS_N - 130)) | (1 << (ApexParser.LAST_N_WEEKS_N - 130)) | (1 << (ApexParser.NEXT_N_MONTHS_N - 130)) | (1 << (ApexParser.LAST_N_MONTHS_N - 130)) | (1 << (ApexParser.THIS_QUARTER - 130)) | (1 << (ApexParser.LAST_QUARTER - 130)) | (1 << (ApexParser.NEXT_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_YEAR - 130)) | (1 << (ApexParser.LAST_YEAR - 130)) | (1 << (ApexParser.NEXT_YEAR - 130)) | (1 << (ApexParser.NEXT_N_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_YEARS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_QUARTER - 130)) | (1 << (ApexParser.LAST_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_YEAR - 130)) | (1 << (ApexParser.LAST_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.FIND - 130)) | (1 << (ApexParser.EMAIL - 130)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (ApexParser.NAME - 162)) | (1 << (ApexParser.PHONE - 162)) | (1 << (ApexParser.SIDEBAR - 162)) | (1 << (ApexParser.FIELDS - 162)) | (1 << (ApexParser.METADATA - 162)) | (1 << (ApexParser.PRICEBOOKID - 162)) | (1 << (ApexParser.NETWORK - 162)) | (1 << (ApexParser.SNIPPET - 162)) | (1 << (ApexParser.TARGET_LENGTH - 162)) | (1 << (ApexParser.DIVISION - 162)) | (1 << (ApexParser.RETURNING - 162)) | (1 << (ApexParser.LISTVIEW - 162)) | (1 << (ApexParser.FindLiteral - 162)) | (1 << (ApexParser.IntegerLiteral - 162)) | (1 << (ApexParser.LongLiteral - 162)) | (1 << (ApexParser.NumberLiteral - 162)) | (1 << (ApexParser.BooleanLiteral - 162)) | (1 << (ApexParser.StringLiteral - 162)) | (1 << (ApexParser.LPAREN - 162)) | (1 << (ApexParser.LBRACK - 162)) | (1 << (ApexParser.BANG - 162)))) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & ((1 << (ApexParser.TILDE - 194)) | (1 << (ApexParser.INC - 194)) | (1 << (ApexParser.DEC - 194)) | (1 << (ApexParser.ADD - 194)) | (1 << (ApexParser.SUB - 194)))) !== 0) || _la === ApexParser.Identifier) {
					{
					this.state = 833;
					this.expression(0);
					}
				}

				this.state = 836;
				this.match(ApexParser.SEMI);
				this.state = 838;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SUPER - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.THIS - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.SELECT - 34)) | (1 << (ApexParser.COUNT - 34)) | (1 << (ApexParser.FROM - 34)) | (1 << (ApexParser.AS - 34)) | (1 << (ApexParser.USING - 34)) | (1 << (ApexParser.SCOPE - 34)) | (1 << (ApexParser.WHERE - 34)) | (1 << (ApexParser.ORDER - 34)) | (1 << (ApexParser.BY - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LIMIT - 66)) | (1 << (ApexParser.SOQLAND - 66)) | (1 << (ApexParser.SOQLOR - 66)) | (1 << (ApexParser.NOT - 66)) | (1 << (ApexParser.AVG - 66)) | (1 << (ApexParser.COUNT_DISTINCT - 66)) | (1 << (ApexParser.MIN - 66)) | (1 << (ApexParser.MAX - 66)) | (1 << (ApexParser.SUM - 66)) | (1 << (ApexParser.TYPEOF - 66)) | (1 << (ApexParser.END - 66)) | (1 << (ApexParser.THEN - 66)) | (1 << (ApexParser.LIKE - 66)) | (1 << (ApexParser.IN - 66)) | (1 << (ApexParser.INCLUDES - 66)) | (1 << (ApexParser.EXCLUDES - 66)) | (1 << (ApexParser.ASC - 66)) | (1 << (ApexParser.DESC - 66)) | (1 << (ApexParser.NULLS - 66)) | (1 << (ApexParser.FIRST - 66)) | (1 << (ApexParser.LAST - 66)) | (1 << (ApexParser.GROUP - 66)) | (1 << (ApexParser.ALL - 66)) | (1 << (ApexParser.ROWS - 66)) | (1 << (ApexParser.VIEW - 66)) | (1 << (ApexParser.HAVING - 66)) | (1 << (ApexParser.ROLLUP - 66)) | (1 << (ApexParser.TOLABEL - 66)) | (1 << (ApexParser.OFFSET - 66)) | (1 << (ApexParser.DATA - 66)) | (1 << (ApexParser.CATEGORY - 66)) | (1 << (ApexParser.AT - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ApexParser.ABOVE - 98)) | (1 << (ApexParser.BELOW - 98)) | (1 << (ApexParser.ABOVE_OR_BELOW - 98)) | (1 << (ApexParser.SECURITY_ENFORCED - 98)) | (1 << (ApexParser.REFERENCE - 98)) | (1 << (ApexParser.CUBE - 98)) | (1 << (ApexParser.FORMAT - 98)) | (1 << (ApexParser.TRACKING - 98)) | (1 << (ApexParser.VIEWSTAT - 98)) | (1 << (ApexParser.CALENDAR_MONTH - 98)) | (1 << (ApexParser.CALENDAR_QUARTER - 98)) | (1 << (ApexParser.CALENDAR_YEAR - 98)) | (1 << (ApexParser.DAY_IN_MONTH - 98)) | (1 << (ApexParser.DAY_IN_WEEK - 98)) | (1 << (ApexParser.DAY_IN_YEAR - 98)) | (1 << (ApexParser.DAY_ONLY - 98)) | (1 << (ApexParser.FISCAL_MONTH - 98)) | (1 << (ApexParser.FISCAL_QUARTER - 98)) | (1 << (ApexParser.FISCAL_YEAR - 98)) | (1 << (ApexParser.HOUR_IN_DAY - 98)) | (1 << (ApexParser.WEEK_IN_MONTH - 98)) | (1 << (ApexParser.WEEK_IN_YEAR - 98)) | (1 << (ApexParser.CONVERT_TIMEZONE - 98)) | (1 << (ApexParser.YESTERDAY - 98)) | (1 << (ApexParser.TODAY - 98)) | (1 << (ApexParser.TOMORROW - 98)) | (1 << (ApexParser.LAST_WEEK - 98)) | (1 << (ApexParser.THIS_WEEK - 98)) | (1 << (ApexParser.NEXT_WEEK - 98)) | (1 << (ApexParser.LAST_MONTH - 98)) | (1 << (ApexParser.THIS_MONTH - 98)) | (1 << (ApexParser.NEXT_MONTH - 98)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (ApexParser.LAST_90_DAYS - 130)) | (1 << (ApexParser.NEXT_90_DAYS - 130)) | (1 << (ApexParser.LAST_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_WEEKS_N - 130)) | (1 << (ApexParser.LAST_N_WEEKS_N - 130)) | (1 << (ApexParser.NEXT_N_MONTHS_N - 130)) | (1 << (ApexParser.LAST_N_MONTHS_N - 130)) | (1 << (ApexParser.THIS_QUARTER - 130)) | (1 << (ApexParser.LAST_QUARTER - 130)) | (1 << (ApexParser.NEXT_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_YEAR - 130)) | (1 << (ApexParser.LAST_YEAR - 130)) | (1 << (ApexParser.NEXT_YEAR - 130)) | (1 << (ApexParser.NEXT_N_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_YEARS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_QUARTER - 130)) | (1 << (ApexParser.LAST_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_YEAR - 130)) | (1 << (ApexParser.LAST_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.FIND - 130)) | (1 << (ApexParser.EMAIL - 130)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (ApexParser.NAME - 162)) | (1 << (ApexParser.PHONE - 162)) | (1 << (ApexParser.SIDEBAR - 162)) | (1 << (ApexParser.FIELDS - 162)) | (1 << (ApexParser.METADATA - 162)) | (1 << (ApexParser.PRICEBOOKID - 162)) | (1 << (ApexParser.NETWORK - 162)) | (1 << (ApexParser.SNIPPET - 162)) | (1 << (ApexParser.TARGET_LENGTH - 162)) | (1 << (ApexParser.DIVISION - 162)) | (1 << (ApexParser.RETURNING - 162)) | (1 << (ApexParser.LISTVIEW - 162)) | (1 << (ApexParser.FindLiteral - 162)) | (1 << (ApexParser.IntegerLiteral - 162)) | (1 << (ApexParser.LongLiteral - 162)) | (1 << (ApexParser.NumberLiteral - 162)) | (1 << (ApexParser.BooleanLiteral - 162)) | (1 << (ApexParser.StringLiteral - 162)) | (1 << (ApexParser.LPAREN - 162)) | (1 << (ApexParser.LBRACK - 162)) | (1 << (ApexParser.BANG - 162)))) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & ((1 << (ApexParser.TILDE - 194)) | (1 << (ApexParser.INC - 194)) | (1 << (ApexParser.DEC - 194)) | (1 << (ApexParser.ADD - 194)) | (1 << (ApexParser.SUB - 194)))) !== 0) || _la === ApexParser.Identifier) {
					{
					this.state = 837;
					this.forUpdate();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forInit(): ForInitContext {
		let _localctx: ForInitContext = new ForInitContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, ApexParser.RULE_forInit);
		try {
			this.state = 844;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 842;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 843;
				this.expressionList();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enhancedForControl(): EnhancedForControlContext {
		let _localctx: EnhancedForControlContext = new EnhancedForControlContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, ApexParser.RULE_enhancedForControl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 846;
			this.typeRef();
			this.state = 847;
			this.id();
			this.state = 848;
			this.match(ApexParser.COLON);
			this.state = 849;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forUpdate(): ForUpdateContext {
		let _localctx: ForUpdateContext = new ForUpdateContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, ApexParser.RULE_forUpdate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 851;
			this.expressionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parExpression(): ParExpressionContext {
		let _localctx: ParExpressionContext = new ParExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, ApexParser.RULE_parExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 853;
			this.match(ApexParser.LPAREN);
			this.state = 854;
			this.expression(0);
			this.state = 855;
			this.match(ApexParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, ApexParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 857;
			this.expression(0);
			this.state = 862;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.COMMA) {
				{
				{
				this.state = 858;
				this.match(ApexParser.COMMA);
				this.state = 859;
				this.expression(0);
				}
				}
				this.state = 864;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 144;
		this.enterRecursionRule(_localctx, 144, ApexParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 883;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				{
				_localctx = new PrimaryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 866;
				this.primary();
				}
				break;

			case 2:
				{
				_localctx = new MethodCallExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 867;
				this.methodCall();
				}
				break;

			case 3:
				{
				_localctx = new NewExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 868;
				this.match(ApexParser.NEW);
				this.state = 869;
				this.creator();
				}
				break;

			case 4:
				{
				_localctx = new CastExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 870;
				this.match(ApexParser.LPAREN);
				this.state = 871;
				this.typeRef();
				this.state = 872;
				this.match(ApexParser.RPAREN);
				this.state = 873;
				this.expression(18);
				}
				break;

			case 5:
				{
				_localctx = new SubExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 875;
				this.match(ApexParser.LPAREN);
				this.state = 876;
				this.expression(0);
				this.state = 877;
				this.match(ApexParser.RPAREN);
				}
				break;

			case 6:
				{
				_localctx = new PreOpExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 879;
				_la = this._input.LA(1);
				if (!(((((_la - 205)) & ~0x1F) === 0 && ((1 << (_la - 205)) & ((1 << (ApexParser.INC - 205)) | (1 << (ApexParser.DEC - 205)) | (1 << (ApexParser.ADD - 205)) | (1 << (ApexParser.SUB - 205)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 880;
				this.expression(15);
				}
				break;

			case 7:
				{
				_localctx = new NegExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 881;
				_la = this._input.LA(1);
				if (!(_la === ApexParser.BANG || _la === ApexParser.TILDE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 882;
				this.expression(14);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 953;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 951;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
					case 1:
						{
						_localctx = new Arth1ExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 885;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 886;
						_la = this._input.LA(1);
						if (!(((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & ((1 << (ApexParser.MUL - 209)) | (1 << (ApexParser.DIV - 209)) | (1 << (ApexParser.MOD - 209)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 887;
						this.expression(14);
						}
						break;

					case 2:
						{
						_localctx = new Arth2ExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 888;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 889;
						_la = this._input.LA(1);
						if (!(_la === ApexParser.ADD || _la === ApexParser.SUB)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 890;
						this.expression(13);
						}
						break;

					case 3:
						{
						_localctx = new BitExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 891;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 899;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
						case 1:
							{
							this.state = 892;
							this.match(ApexParser.LT);
							this.state = 893;
							this.match(ApexParser.LT);
							}
							break;

						case 2:
							{
							this.state = 894;
							this.match(ApexParser.GT);
							this.state = 895;
							this.match(ApexParser.GT);
							this.state = 896;
							this.match(ApexParser.GT);
							}
							break;

						case 3:
							{
							this.state = 897;
							this.match(ApexParser.GT);
							this.state = 898;
							this.match(ApexParser.GT);
							}
							break;
						}
						this.state = 901;
						this.expression(12);
						}
						break;

					case 4:
						{
						_localctx = new CmpExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 902;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 903;
						_la = this._input.LA(1);
						if (!(_la === ApexParser.GT || _la === ApexParser.LT)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 905;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === ApexParser.ASSIGN) {
							{
							this.state = 904;
							this.match(ApexParser.ASSIGN);
							}
						}

						this.state = 907;
						this.expression(11);
						}
						break;

					case 5:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 908;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 909;
						_la = this._input.LA(1);
						if (!(((((_la - 198)) & ~0x1F) === 0 && ((1 << (_la - 198)) & ((1 << (ApexParser.EQUAL - 198)) | (1 << (ApexParser.TRIPLEEQUAL - 198)) | (1 << (ApexParser.NOTEQUAL - 198)) | (1 << (ApexParser.LESSANDGREATER - 198)) | (1 << (ApexParser.TRIPLENOTEQUAL - 198)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 910;
						this.expression(9);
						}
						break;

					case 6:
						{
						_localctx = new BitAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 911;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 912;
						this.match(ApexParser.BITAND);
						this.state = 913;
						this.expression(8);
						}
						break;

					case 7:
						{
						_localctx = new BitNotExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 914;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 915;
						this.match(ApexParser.CARET);
						this.state = 916;
						this.expression(7);
						}
						break;

					case 8:
						{
						_localctx = new BitOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 917;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 918;
						this.match(ApexParser.BITOR);
						this.state = 919;
						this.expression(6);
						}
						break;

					case 9:
						{
						_localctx = new LogAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 920;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 921;
						this.match(ApexParser.AND);
						this.state = 922;
						this.expression(5);
						}
						break;

					case 10:
						{
						_localctx = new LogOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 923;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 924;
						this.match(ApexParser.OR);
						this.state = 925;
						this.expression(4);
						}
						break;

					case 11:
						{
						_localctx = new CondExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 926;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 927;
						this.match(ApexParser.QUESTION);
						this.state = 928;
						this.expression(0);
						this.state = 929;
						this.match(ApexParser.COLON);
						this.state = 930;
						this.expression(2);
						}
						break;

					case 12:
						{
						_localctx = new AssignExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 932;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 933;
						_la = this._input.LA(1);
						if (!(((((_la - 190)) & ~0x1F) === 0 && ((1 << (_la - 190)) & ((1 << (ApexParser.ASSIGN - 190)) | (1 << (ApexParser.ADD_ASSIGN - 190)) | (1 << (ApexParser.SUB_ASSIGN - 190)) | (1 << (ApexParser.MUL_ASSIGN - 190)) | (1 << (ApexParser.DIV_ASSIGN - 190)) | (1 << (ApexParser.AND_ASSIGN - 190)) | (1 << (ApexParser.OR_ASSIGN - 190)))) !== 0) || ((((_la - 222)) & ~0x1F) === 0 && ((1 << (_la - 222)) & ((1 << (ApexParser.XOR_ASSIGN - 222)) | (1 << (ApexParser.MOD_ASSIGN - 222)) | (1 << (ApexParser.LSHIFT_ASSIGN - 222)) | (1 << (ApexParser.RSHIFT_ASSIGN - 222)) | (1 << (ApexParser.URSHIFT_ASSIGN - 222)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 934;
						this.expression(1);
						}
						break;

					case 13:
						{
						_localctx = new DotExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 935;
						if (!(this.precpred(this._ctx, 22))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 22)");
						}
						this.state = 936;
						_la = this._input.LA(1);
						if (!(_la === ApexParser.DOT || _la === ApexParser.QUESTIONDOT)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 939;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
						case 1:
							{
							this.state = 937;
							this.dotMethodCall();
							}
							break;

						case 2:
							{
							this.state = 938;
							this.anyId();
							}
							break;
						}
						}
						break;

					case 14:
						{
						_localctx = new ArrayExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 941;
						if (!(this.precpred(this._ctx, 21))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 21)");
						}
						this.state = 942;
						this.match(ApexParser.LBRACK);
						this.state = 943;
						this.expression(0);
						this.state = 944;
						this.match(ApexParser.RBRACK);
						}
						break;

					case 15:
						{
						_localctx = new PostOpExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 946;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 947;
						_la = this._input.LA(1);
						if (!(_la === ApexParser.INC || _la === ApexParser.DEC)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						break;

					case 16:
						{
						_localctx = new InstanceOfExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 948;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 949;
						this.match(ApexParser.INSTANCEOF);
						this.state = 950;
						this.typeRef();
						}
						break;
					}
					}
				}
				this.state = 955;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, ApexParser.RULE_primary);
		try {
			this.state = 966;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				_localctx = new ThisPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 956;
				this.match(ApexParser.THIS);
				}
				break;

			case 2:
				_localctx = new SuperPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 957;
				this.match(ApexParser.SUPER);
				}
				break;

			case 3:
				_localctx = new LiteralPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 958;
				this.literal();
				}
				break;

			case 4:
				_localctx = new TypeRefPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 959;
				this.typeRef();
				this.state = 960;
				this.match(ApexParser.DOT);
				this.state = 961;
				this.match(ApexParser.CLASS);
				}
				break;

			case 5:
				_localctx = new IdPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 963;
				this.id();
				}
				break;

			case 6:
				_localctx = new SoqlPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 964;
				this.soqlLiteral();
				}
				break;

			case 7:
				_localctx = new SoslPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 965;
				this.soslLiteral();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public methodCall(): MethodCallContext {
		let _localctx: MethodCallContext = new MethodCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, ApexParser.RULE_methodCall);
		let _la: number;
		try {
			this.state = 987;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ApexParser.AFTER:
			case ApexParser.BEFORE:
			case ApexParser.GET:
			case ApexParser.INHERITED:
			case ApexParser.INSTANCEOF:
			case ApexParser.SET:
			case ApexParser.SHARING:
			case ApexParser.SWITCH:
			case ApexParser.TRANSIENT:
			case ApexParser.TRIGGER:
			case ApexParser.WHEN:
			case ApexParser.WITH:
			case ApexParser.WITHOUT:
			case ApexParser.SELECT:
			case ApexParser.COUNT:
			case ApexParser.FROM:
			case ApexParser.AS:
			case ApexParser.USING:
			case ApexParser.SCOPE:
			case ApexParser.WHERE:
			case ApexParser.ORDER:
			case ApexParser.BY:
			case ApexParser.LIMIT:
			case ApexParser.SOQLAND:
			case ApexParser.SOQLOR:
			case ApexParser.NOT:
			case ApexParser.AVG:
			case ApexParser.COUNT_DISTINCT:
			case ApexParser.MIN:
			case ApexParser.MAX:
			case ApexParser.SUM:
			case ApexParser.TYPEOF:
			case ApexParser.END:
			case ApexParser.THEN:
			case ApexParser.LIKE:
			case ApexParser.IN:
			case ApexParser.INCLUDES:
			case ApexParser.EXCLUDES:
			case ApexParser.ASC:
			case ApexParser.DESC:
			case ApexParser.NULLS:
			case ApexParser.FIRST:
			case ApexParser.LAST:
			case ApexParser.GROUP:
			case ApexParser.ALL:
			case ApexParser.ROWS:
			case ApexParser.VIEW:
			case ApexParser.HAVING:
			case ApexParser.ROLLUP:
			case ApexParser.TOLABEL:
			case ApexParser.OFFSET:
			case ApexParser.DATA:
			case ApexParser.CATEGORY:
			case ApexParser.AT:
			case ApexParser.ABOVE:
			case ApexParser.BELOW:
			case ApexParser.ABOVE_OR_BELOW:
			case ApexParser.SECURITY_ENFORCED:
			case ApexParser.REFERENCE:
			case ApexParser.CUBE:
			case ApexParser.FORMAT:
			case ApexParser.TRACKING:
			case ApexParser.VIEWSTAT:
			case ApexParser.CALENDAR_MONTH:
			case ApexParser.CALENDAR_QUARTER:
			case ApexParser.CALENDAR_YEAR:
			case ApexParser.DAY_IN_MONTH:
			case ApexParser.DAY_IN_WEEK:
			case ApexParser.DAY_IN_YEAR:
			case ApexParser.DAY_ONLY:
			case ApexParser.FISCAL_MONTH:
			case ApexParser.FISCAL_QUARTER:
			case ApexParser.FISCAL_YEAR:
			case ApexParser.HOUR_IN_DAY:
			case ApexParser.WEEK_IN_MONTH:
			case ApexParser.WEEK_IN_YEAR:
			case ApexParser.CONVERT_TIMEZONE:
			case ApexParser.YESTERDAY:
			case ApexParser.TODAY:
			case ApexParser.TOMORROW:
			case ApexParser.LAST_WEEK:
			case ApexParser.THIS_WEEK:
			case ApexParser.NEXT_WEEK:
			case ApexParser.LAST_MONTH:
			case ApexParser.THIS_MONTH:
			case ApexParser.NEXT_MONTH:
			case ApexParser.LAST_90_DAYS:
			case ApexParser.NEXT_90_DAYS:
			case ApexParser.LAST_N_DAYS_N:
			case ApexParser.NEXT_N_DAYS_N:
			case ApexParser.NEXT_N_WEEKS_N:
			case ApexParser.LAST_N_WEEKS_N:
			case ApexParser.NEXT_N_MONTHS_N:
			case ApexParser.LAST_N_MONTHS_N:
			case ApexParser.THIS_QUARTER:
			case ApexParser.LAST_QUARTER:
			case ApexParser.NEXT_QUARTER:
			case ApexParser.NEXT_N_QUARTERS_N:
			case ApexParser.LAST_N_QUARTERS_N:
			case ApexParser.THIS_YEAR:
			case ApexParser.LAST_YEAR:
			case ApexParser.NEXT_YEAR:
			case ApexParser.NEXT_N_YEARS_N:
			case ApexParser.LAST_N_YEARS_N:
			case ApexParser.THIS_FISCAL_QUARTER:
			case ApexParser.LAST_FISCAL_QUARTER:
			case ApexParser.NEXT_FISCAL_QUARTER:
			case ApexParser.NEXT_N_FISCAL_QUARTERS_N:
			case ApexParser.LAST_N_FISCAL_QUARTERS_N:
			case ApexParser.THIS_FISCAL_YEAR:
			case ApexParser.LAST_FISCAL_YEAR:
			case ApexParser.NEXT_FISCAL_YEAR:
			case ApexParser.NEXT_N_FISCAL_YEARS_N:
			case ApexParser.LAST_N_FISCAL_YEARS_N:
			case ApexParser.FIND:
			case ApexParser.EMAIL:
			case ApexParser.NAME:
			case ApexParser.PHONE:
			case ApexParser.SIDEBAR:
			case ApexParser.FIELDS:
			case ApexParser.METADATA:
			case ApexParser.PRICEBOOKID:
			case ApexParser.NETWORK:
			case ApexParser.SNIPPET:
			case ApexParser.TARGET_LENGTH:
			case ApexParser.DIVISION:
			case ApexParser.RETURNING:
			case ApexParser.LISTVIEW:
			case ApexParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 968;
				this.id();
				this.state = 969;
				this.match(ApexParser.LPAREN);
				this.state = 971;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SUPER - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.THIS - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.SELECT - 34)) | (1 << (ApexParser.COUNT - 34)) | (1 << (ApexParser.FROM - 34)) | (1 << (ApexParser.AS - 34)) | (1 << (ApexParser.USING - 34)) | (1 << (ApexParser.SCOPE - 34)) | (1 << (ApexParser.WHERE - 34)) | (1 << (ApexParser.ORDER - 34)) | (1 << (ApexParser.BY - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LIMIT - 66)) | (1 << (ApexParser.SOQLAND - 66)) | (1 << (ApexParser.SOQLOR - 66)) | (1 << (ApexParser.NOT - 66)) | (1 << (ApexParser.AVG - 66)) | (1 << (ApexParser.COUNT_DISTINCT - 66)) | (1 << (ApexParser.MIN - 66)) | (1 << (ApexParser.MAX - 66)) | (1 << (ApexParser.SUM - 66)) | (1 << (ApexParser.TYPEOF - 66)) | (1 << (ApexParser.END - 66)) | (1 << (ApexParser.THEN - 66)) | (1 << (ApexParser.LIKE - 66)) | (1 << (ApexParser.IN - 66)) | (1 << (ApexParser.INCLUDES - 66)) | (1 << (ApexParser.EXCLUDES - 66)) | (1 << (ApexParser.ASC - 66)) | (1 << (ApexParser.DESC - 66)) | (1 << (ApexParser.NULLS - 66)) | (1 << (ApexParser.FIRST - 66)) | (1 << (ApexParser.LAST - 66)) | (1 << (ApexParser.GROUP - 66)) | (1 << (ApexParser.ALL - 66)) | (1 << (ApexParser.ROWS - 66)) | (1 << (ApexParser.VIEW - 66)) | (1 << (ApexParser.HAVING - 66)) | (1 << (ApexParser.ROLLUP - 66)) | (1 << (ApexParser.TOLABEL - 66)) | (1 << (ApexParser.OFFSET - 66)) | (1 << (ApexParser.DATA - 66)) | (1 << (ApexParser.CATEGORY - 66)) | (1 << (ApexParser.AT - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ApexParser.ABOVE - 98)) | (1 << (ApexParser.BELOW - 98)) | (1 << (ApexParser.ABOVE_OR_BELOW - 98)) | (1 << (ApexParser.SECURITY_ENFORCED - 98)) | (1 << (ApexParser.REFERENCE - 98)) | (1 << (ApexParser.CUBE - 98)) | (1 << (ApexParser.FORMAT - 98)) | (1 << (ApexParser.TRACKING - 98)) | (1 << (ApexParser.VIEWSTAT - 98)) | (1 << (ApexParser.CALENDAR_MONTH - 98)) | (1 << (ApexParser.CALENDAR_QUARTER - 98)) | (1 << (ApexParser.CALENDAR_YEAR - 98)) | (1 << (ApexParser.DAY_IN_MONTH - 98)) | (1 << (ApexParser.DAY_IN_WEEK - 98)) | (1 << (ApexParser.DAY_IN_YEAR - 98)) | (1 << (ApexParser.DAY_ONLY - 98)) | (1 << (ApexParser.FISCAL_MONTH - 98)) | (1 << (ApexParser.FISCAL_QUARTER - 98)) | (1 << (ApexParser.FISCAL_YEAR - 98)) | (1 << (ApexParser.HOUR_IN_DAY - 98)) | (1 << (ApexParser.WEEK_IN_MONTH - 98)) | (1 << (ApexParser.WEEK_IN_YEAR - 98)) | (1 << (ApexParser.CONVERT_TIMEZONE - 98)) | (1 << (ApexParser.YESTERDAY - 98)) | (1 << (ApexParser.TODAY - 98)) | (1 << (ApexParser.TOMORROW - 98)) | (1 << (ApexParser.LAST_WEEK - 98)) | (1 << (ApexParser.THIS_WEEK - 98)) | (1 << (ApexParser.NEXT_WEEK - 98)) | (1 << (ApexParser.LAST_MONTH - 98)) | (1 << (ApexParser.THIS_MONTH - 98)) | (1 << (ApexParser.NEXT_MONTH - 98)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (ApexParser.LAST_90_DAYS - 130)) | (1 << (ApexParser.NEXT_90_DAYS - 130)) | (1 << (ApexParser.LAST_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_WEEKS_N - 130)) | (1 << (ApexParser.LAST_N_WEEKS_N - 130)) | (1 << (ApexParser.NEXT_N_MONTHS_N - 130)) | (1 << (ApexParser.LAST_N_MONTHS_N - 130)) | (1 << (ApexParser.THIS_QUARTER - 130)) | (1 << (ApexParser.LAST_QUARTER - 130)) | (1 << (ApexParser.NEXT_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_YEAR - 130)) | (1 << (ApexParser.LAST_YEAR - 130)) | (1 << (ApexParser.NEXT_YEAR - 130)) | (1 << (ApexParser.NEXT_N_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_YEARS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_QUARTER - 130)) | (1 << (ApexParser.LAST_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_YEAR - 130)) | (1 << (ApexParser.LAST_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.FIND - 130)) | (1 << (ApexParser.EMAIL - 130)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (ApexParser.NAME - 162)) | (1 << (ApexParser.PHONE - 162)) | (1 << (ApexParser.SIDEBAR - 162)) | (1 << (ApexParser.FIELDS - 162)) | (1 << (ApexParser.METADATA - 162)) | (1 << (ApexParser.PRICEBOOKID - 162)) | (1 << (ApexParser.NETWORK - 162)) | (1 << (ApexParser.SNIPPET - 162)) | (1 << (ApexParser.TARGET_LENGTH - 162)) | (1 << (ApexParser.DIVISION - 162)) | (1 << (ApexParser.RETURNING - 162)) | (1 << (ApexParser.LISTVIEW - 162)) | (1 << (ApexParser.FindLiteral - 162)) | (1 << (ApexParser.IntegerLiteral - 162)) | (1 << (ApexParser.LongLiteral - 162)) | (1 << (ApexParser.NumberLiteral - 162)) | (1 << (ApexParser.BooleanLiteral - 162)) | (1 << (ApexParser.StringLiteral - 162)) | (1 << (ApexParser.LPAREN - 162)) | (1 << (ApexParser.LBRACK - 162)) | (1 << (ApexParser.BANG - 162)))) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & ((1 << (ApexParser.TILDE - 194)) | (1 << (ApexParser.INC - 194)) | (1 << (ApexParser.DEC - 194)) | (1 << (ApexParser.ADD - 194)) | (1 << (ApexParser.SUB - 194)))) !== 0) || _la === ApexParser.Identifier) {
					{
					this.state = 970;
					this.expressionList();
					}
				}

				this.state = 973;
				this.match(ApexParser.RPAREN);
				}
				break;
			case ApexParser.THIS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 975;
				this.match(ApexParser.THIS);
				this.state = 976;
				this.match(ApexParser.LPAREN);
				this.state = 978;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SUPER - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.THIS - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.SELECT - 34)) | (1 << (ApexParser.COUNT - 34)) | (1 << (ApexParser.FROM - 34)) | (1 << (ApexParser.AS - 34)) | (1 << (ApexParser.USING - 34)) | (1 << (ApexParser.SCOPE - 34)) | (1 << (ApexParser.WHERE - 34)) | (1 << (ApexParser.ORDER - 34)) | (1 << (ApexParser.BY - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LIMIT - 66)) | (1 << (ApexParser.SOQLAND - 66)) | (1 << (ApexParser.SOQLOR - 66)) | (1 << (ApexParser.NOT - 66)) | (1 << (ApexParser.AVG - 66)) | (1 << (ApexParser.COUNT_DISTINCT - 66)) | (1 << (ApexParser.MIN - 66)) | (1 << (ApexParser.MAX - 66)) | (1 << (ApexParser.SUM - 66)) | (1 << (ApexParser.TYPEOF - 66)) | (1 << (ApexParser.END - 66)) | (1 << (ApexParser.THEN - 66)) | (1 << (ApexParser.LIKE - 66)) | (1 << (ApexParser.IN - 66)) | (1 << (ApexParser.INCLUDES - 66)) | (1 << (ApexParser.EXCLUDES - 66)) | (1 << (ApexParser.ASC - 66)) | (1 << (ApexParser.DESC - 66)) | (1 << (ApexParser.NULLS - 66)) | (1 << (ApexParser.FIRST - 66)) | (1 << (ApexParser.LAST - 66)) | (1 << (ApexParser.GROUP - 66)) | (1 << (ApexParser.ALL - 66)) | (1 << (ApexParser.ROWS - 66)) | (1 << (ApexParser.VIEW - 66)) | (1 << (ApexParser.HAVING - 66)) | (1 << (ApexParser.ROLLUP - 66)) | (1 << (ApexParser.TOLABEL - 66)) | (1 << (ApexParser.OFFSET - 66)) | (1 << (ApexParser.DATA - 66)) | (1 << (ApexParser.CATEGORY - 66)) | (1 << (ApexParser.AT - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ApexParser.ABOVE - 98)) | (1 << (ApexParser.BELOW - 98)) | (1 << (ApexParser.ABOVE_OR_BELOW - 98)) | (1 << (ApexParser.SECURITY_ENFORCED - 98)) | (1 << (ApexParser.REFERENCE - 98)) | (1 << (ApexParser.CUBE - 98)) | (1 << (ApexParser.FORMAT - 98)) | (1 << (ApexParser.TRACKING - 98)) | (1 << (ApexParser.VIEWSTAT - 98)) | (1 << (ApexParser.CALENDAR_MONTH - 98)) | (1 << (ApexParser.CALENDAR_QUARTER - 98)) | (1 << (ApexParser.CALENDAR_YEAR - 98)) | (1 << (ApexParser.DAY_IN_MONTH - 98)) | (1 << (ApexParser.DAY_IN_WEEK - 98)) | (1 << (ApexParser.DAY_IN_YEAR - 98)) | (1 << (ApexParser.DAY_ONLY - 98)) | (1 << (ApexParser.FISCAL_MONTH - 98)) | (1 << (ApexParser.FISCAL_QUARTER - 98)) | (1 << (ApexParser.FISCAL_YEAR - 98)) | (1 << (ApexParser.HOUR_IN_DAY - 98)) | (1 << (ApexParser.WEEK_IN_MONTH - 98)) | (1 << (ApexParser.WEEK_IN_YEAR - 98)) | (1 << (ApexParser.CONVERT_TIMEZONE - 98)) | (1 << (ApexParser.YESTERDAY - 98)) | (1 << (ApexParser.TODAY - 98)) | (1 << (ApexParser.TOMORROW - 98)) | (1 << (ApexParser.LAST_WEEK - 98)) | (1 << (ApexParser.THIS_WEEK - 98)) | (1 << (ApexParser.NEXT_WEEK - 98)) | (1 << (ApexParser.LAST_MONTH - 98)) | (1 << (ApexParser.THIS_MONTH - 98)) | (1 << (ApexParser.NEXT_MONTH - 98)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (ApexParser.LAST_90_DAYS - 130)) | (1 << (ApexParser.NEXT_90_DAYS - 130)) | (1 << (ApexParser.LAST_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_WEEKS_N - 130)) | (1 << (ApexParser.LAST_N_WEEKS_N - 130)) | (1 << (ApexParser.NEXT_N_MONTHS_N - 130)) | (1 << (ApexParser.LAST_N_MONTHS_N - 130)) | (1 << (ApexParser.THIS_QUARTER - 130)) | (1 << (ApexParser.LAST_QUARTER - 130)) | (1 << (ApexParser.NEXT_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_YEAR - 130)) | (1 << (ApexParser.LAST_YEAR - 130)) | (1 << (ApexParser.NEXT_YEAR - 130)) | (1 << (ApexParser.NEXT_N_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_YEARS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_QUARTER - 130)) | (1 << (ApexParser.LAST_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_YEAR - 130)) | (1 << (ApexParser.LAST_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.FIND - 130)) | (1 << (ApexParser.EMAIL - 130)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (ApexParser.NAME - 162)) | (1 << (ApexParser.PHONE - 162)) | (1 << (ApexParser.SIDEBAR - 162)) | (1 << (ApexParser.FIELDS - 162)) | (1 << (ApexParser.METADATA - 162)) | (1 << (ApexParser.PRICEBOOKID - 162)) | (1 << (ApexParser.NETWORK - 162)) | (1 << (ApexParser.SNIPPET - 162)) | (1 << (ApexParser.TARGET_LENGTH - 162)) | (1 << (ApexParser.DIVISION - 162)) | (1 << (ApexParser.RETURNING - 162)) | (1 << (ApexParser.LISTVIEW - 162)) | (1 << (ApexParser.FindLiteral - 162)) | (1 << (ApexParser.IntegerLiteral - 162)) | (1 << (ApexParser.LongLiteral - 162)) | (1 << (ApexParser.NumberLiteral - 162)) | (1 << (ApexParser.BooleanLiteral - 162)) | (1 << (ApexParser.StringLiteral - 162)) | (1 << (ApexParser.LPAREN - 162)) | (1 << (ApexParser.LBRACK - 162)) | (1 << (ApexParser.BANG - 162)))) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & ((1 << (ApexParser.TILDE - 194)) | (1 << (ApexParser.INC - 194)) | (1 << (ApexParser.DEC - 194)) | (1 << (ApexParser.ADD - 194)) | (1 << (ApexParser.SUB - 194)))) !== 0) || _la === ApexParser.Identifier) {
					{
					this.state = 977;
					this.expressionList();
					}
				}

				this.state = 980;
				this.match(ApexParser.RPAREN);
				}
				break;
			case ApexParser.SUPER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 981;
				this.match(ApexParser.SUPER);
				this.state = 982;
				this.match(ApexParser.LPAREN);
				this.state = 984;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SUPER - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.THIS - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.SELECT - 34)) | (1 << (ApexParser.COUNT - 34)) | (1 << (ApexParser.FROM - 34)) | (1 << (ApexParser.AS - 34)) | (1 << (ApexParser.USING - 34)) | (1 << (ApexParser.SCOPE - 34)) | (1 << (ApexParser.WHERE - 34)) | (1 << (ApexParser.ORDER - 34)) | (1 << (ApexParser.BY - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LIMIT - 66)) | (1 << (ApexParser.SOQLAND - 66)) | (1 << (ApexParser.SOQLOR - 66)) | (1 << (ApexParser.NOT - 66)) | (1 << (ApexParser.AVG - 66)) | (1 << (ApexParser.COUNT_DISTINCT - 66)) | (1 << (ApexParser.MIN - 66)) | (1 << (ApexParser.MAX - 66)) | (1 << (ApexParser.SUM - 66)) | (1 << (ApexParser.TYPEOF - 66)) | (1 << (ApexParser.END - 66)) | (1 << (ApexParser.THEN - 66)) | (1 << (ApexParser.LIKE - 66)) | (1 << (ApexParser.IN - 66)) | (1 << (ApexParser.INCLUDES - 66)) | (1 << (ApexParser.EXCLUDES - 66)) | (1 << (ApexParser.ASC - 66)) | (1 << (ApexParser.DESC - 66)) | (1 << (ApexParser.NULLS - 66)) | (1 << (ApexParser.FIRST - 66)) | (1 << (ApexParser.LAST - 66)) | (1 << (ApexParser.GROUP - 66)) | (1 << (ApexParser.ALL - 66)) | (1 << (ApexParser.ROWS - 66)) | (1 << (ApexParser.VIEW - 66)) | (1 << (ApexParser.HAVING - 66)) | (1 << (ApexParser.ROLLUP - 66)) | (1 << (ApexParser.TOLABEL - 66)) | (1 << (ApexParser.OFFSET - 66)) | (1 << (ApexParser.DATA - 66)) | (1 << (ApexParser.CATEGORY - 66)) | (1 << (ApexParser.AT - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ApexParser.ABOVE - 98)) | (1 << (ApexParser.BELOW - 98)) | (1 << (ApexParser.ABOVE_OR_BELOW - 98)) | (1 << (ApexParser.SECURITY_ENFORCED - 98)) | (1 << (ApexParser.REFERENCE - 98)) | (1 << (ApexParser.CUBE - 98)) | (1 << (ApexParser.FORMAT - 98)) | (1 << (ApexParser.TRACKING - 98)) | (1 << (ApexParser.VIEWSTAT - 98)) | (1 << (ApexParser.CALENDAR_MONTH - 98)) | (1 << (ApexParser.CALENDAR_QUARTER - 98)) | (1 << (ApexParser.CALENDAR_YEAR - 98)) | (1 << (ApexParser.DAY_IN_MONTH - 98)) | (1 << (ApexParser.DAY_IN_WEEK - 98)) | (1 << (ApexParser.DAY_IN_YEAR - 98)) | (1 << (ApexParser.DAY_ONLY - 98)) | (1 << (ApexParser.FISCAL_MONTH - 98)) | (1 << (ApexParser.FISCAL_QUARTER - 98)) | (1 << (ApexParser.FISCAL_YEAR - 98)) | (1 << (ApexParser.HOUR_IN_DAY - 98)) | (1 << (ApexParser.WEEK_IN_MONTH - 98)) | (1 << (ApexParser.WEEK_IN_YEAR - 98)) | (1 << (ApexParser.CONVERT_TIMEZONE - 98)) | (1 << (ApexParser.YESTERDAY - 98)) | (1 << (ApexParser.TODAY - 98)) | (1 << (ApexParser.TOMORROW - 98)) | (1 << (ApexParser.LAST_WEEK - 98)) | (1 << (ApexParser.THIS_WEEK - 98)) | (1 << (ApexParser.NEXT_WEEK - 98)) | (1 << (ApexParser.LAST_MONTH - 98)) | (1 << (ApexParser.THIS_MONTH - 98)) | (1 << (ApexParser.NEXT_MONTH - 98)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (ApexParser.LAST_90_DAYS - 130)) | (1 << (ApexParser.NEXT_90_DAYS - 130)) | (1 << (ApexParser.LAST_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_WEEKS_N - 130)) | (1 << (ApexParser.LAST_N_WEEKS_N - 130)) | (1 << (ApexParser.NEXT_N_MONTHS_N - 130)) | (1 << (ApexParser.LAST_N_MONTHS_N - 130)) | (1 << (ApexParser.THIS_QUARTER - 130)) | (1 << (ApexParser.LAST_QUARTER - 130)) | (1 << (ApexParser.NEXT_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_YEAR - 130)) | (1 << (ApexParser.LAST_YEAR - 130)) | (1 << (ApexParser.NEXT_YEAR - 130)) | (1 << (ApexParser.NEXT_N_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_YEARS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_QUARTER - 130)) | (1 << (ApexParser.LAST_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_YEAR - 130)) | (1 << (ApexParser.LAST_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.FIND - 130)) | (1 << (ApexParser.EMAIL - 130)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (ApexParser.NAME - 162)) | (1 << (ApexParser.PHONE - 162)) | (1 << (ApexParser.SIDEBAR - 162)) | (1 << (ApexParser.FIELDS - 162)) | (1 << (ApexParser.METADATA - 162)) | (1 << (ApexParser.PRICEBOOKID - 162)) | (1 << (ApexParser.NETWORK - 162)) | (1 << (ApexParser.SNIPPET - 162)) | (1 << (ApexParser.TARGET_LENGTH - 162)) | (1 << (ApexParser.DIVISION - 162)) | (1 << (ApexParser.RETURNING - 162)) | (1 << (ApexParser.LISTVIEW - 162)) | (1 << (ApexParser.FindLiteral - 162)) | (1 << (ApexParser.IntegerLiteral - 162)) | (1 << (ApexParser.LongLiteral - 162)) | (1 << (ApexParser.NumberLiteral - 162)) | (1 << (ApexParser.BooleanLiteral - 162)) | (1 << (ApexParser.StringLiteral - 162)) | (1 << (ApexParser.LPAREN - 162)) | (1 << (ApexParser.LBRACK - 162)) | (1 << (ApexParser.BANG - 162)))) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & ((1 << (ApexParser.TILDE - 194)) | (1 << (ApexParser.INC - 194)) | (1 << (ApexParser.DEC - 194)) | (1 << (ApexParser.ADD - 194)) | (1 << (ApexParser.SUB - 194)))) !== 0) || _la === ApexParser.Identifier) {
					{
					this.state = 983;
					this.expressionList();
					}
				}

				this.state = 986;
				this.match(ApexParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dotMethodCall(): DotMethodCallContext {
		let _localctx: DotMethodCallContext = new DotMethodCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, ApexParser.RULE_dotMethodCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 989;
			this.anyId();
			this.state = 990;
			this.match(ApexParser.LPAREN);
			this.state = 992;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SUPER - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.THIS - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.SELECT - 34)) | (1 << (ApexParser.COUNT - 34)) | (1 << (ApexParser.FROM - 34)) | (1 << (ApexParser.AS - 34)) | (1 << (ApexParser.USING - 34)) | (1 << (ApexParser.SCOPE - 34)) | (1 << (ApexParser.WHERE - 34)) | (1 << (ApexParser.ORDER - 34)) | (1 << (ApexParser.BY - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LIMIT - 66)) | (1 << (ApexParser.SOQLAND - 66)) | (1 << (ApexParser.SOQLOR - 66)) | (1 << (ApexParser.NOT - 66)) | (1 << (ApexParser.AVG - 66)) | (1 << (ApexParser.COUNT_DISTINCT - 66)) | (1 << (ApexParser.MIN - 66)) | (1 << (ApexParser.MAX - 66)) | (1 << (ApexParser.SUM - 66)) | (1 << (ApexParser.TYPEOF - 66)) | (1 << (ApexParser.END - 66)) | (1 << (ApexParser.THEN - 66)) | (1 << (ApexParser.LIKE - 66)) | (1 << (ApexParser.IN - 66)) | (1 << (ApexParser.INCLUDES - 66)) | (1 << (ApexParser.EXCLUDES - 66)) | (1 << (ApexParser.ASC - 66)) | (1 << (ApexParser.DESC - 66)) | (1 << (ApexParser.NULLS - 66)) | (1 << (ApexParser.FIRST - 66)) | (1 << (ApexParser.LAST - 66)) | (1 << (ApexParser.GROUP - 66)) | (1 << (ApexParser.ALL - 66)) | (1 << (ApexParser.ROWS - 66)) | (1 << (ApexParser.VIEW - 66)) | (1 << (ApexParser.HAVING - 66)) | (1 << (ApexParser.ROLLUP - 66)) | (1 << (ApexParser.TOLABEL - 66)) | (1 << (ApexParser.OFFSET - 66)) | (1 << (ApexParser.DATA - 66)) | (1 << (ApexParser.CATEGORY - 66)) | (1 << (ApexParser.AT - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ApexParser.ABOVE - 98)) | (1 << (ApexParser.BELOW - 98)) | (1 << (ApexParser.ABOVE_OR_BELOW - 98)) | (1 << (ApexParser.SECURITY_ENFORCED - 98)) | (1 << (ApexParser.REFERENCE - 98)) | (1 << (ApexParser.CUBE - 98)) | (1 << (ApexParser.FORMAT - 98)) | (1 << (ApexParser.TRACKING - 98)) | (1 << (ApexParser.VIEWSTAT - 98)) | (1 << (ApexParser.CALENDAR_MONTH - 98)) | (1 << (ApexParser.CALENDAR_QUARTER - 98)) | (1 << (ApexParser.CALENDAR_YEAR - 98)) | (1 << (ApexParser.DAY_IN_MONTH - 98)) | (1 << (ApexParser.DAY_IN_WEEK - 98)) | (1 << (ApexParser.DAY_IN_YEAR - 98)) | (1 << (ApexParser.DAY_ONLY - 98)) | (1 << (ApexParser.FISCAL_MONTH - 98)) | (1 << (ApexParser.FISCAL_QUARTER - 98)) | (1 << (ApexParser.FISCAL_YEAR - 98)) | (1 << (ApexParser.HOUR_IN_DAY - 98)) | (1 << (ApexParser.WEEK_IN_MONTH - 98)) | (1 << (ApexParser.WEEK_IN_YEAR - 98)) | (1 << (ApexParser.CONVERT_TIMEZONE - 98)) | (1 << (ApexParser.YESTERDAY - 98)) | (1 << (ApexParser.TODAY - 98)) | (1 << (ApexParser.TOMORROW - 98)) | (1 << (ApexParser.LAST_WEEK - 98)) | (1 << (ApexParser.THIS_WEEK - 98)) | (1 << (ApexParser.NEXT_WEEK - 98)) | (1 << (ApexParser.LAST_MONTH - 98)) | (1 << (ApexParser.THIS_MONTH - 98)) | (1 << (ApexParser.NEXT_MONTH - 98)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (ApexParser.LAST_90_DAYS - 130)) | (1 << (ApexParser.NEXT_90_DAYS - 130)) | (1 << (ApexParser.LAST_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_WEEKS_N - 130)) | (1 << (ApexParser.LAST_N_WEEKS_N - 130)) | (1 << (ApexParser.NEXT_N_MONTHS_N - 130)) | (1 << (ApexParser.LAST_N_MONTHS_N - 130)) | (1 << (ApexParser.THIS_QUARTER - 130)) | (1 << (ApexParser.LAST_QUARTER - 130)) | (1 << (ApexParser.NEXT_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_YEAR - 130)) | (1 << (ApexParser.LAST_YEAR - 130)) | (1 << (ApexParser.NEXT_YEAR - 130)) | (1 << (ApexParser.NEXT_N_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_YEARS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_QUARTER - 130)) | (1 << (ApexParser.LAST_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_YEAR - 130)) | (1 << (ApexParser.LAST_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.FIND - 130)) | (1 << (ApexParser.EMAIL - 130)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (ApexParser.NAME - 162)) | (1 << (ApexParser.PHONE - 162)) | (1 << (ApexParser.SIDEBAR - 162)) | (1 << (ApexParser.FIELDS - 162)) | (1 << (ApexParser.METADATA - 162)) | (1 << (ApexParser.PRICEBOOKID - 162)) | (1 << (ApexParser.NETWORK - 162)) | (1 << (ApexParser.SNIPPET - 162)) | (1 << (ApexParser.TARGET_LENGTH - 162)) | (1 << (ApexParser.DIVISION - 162)) | (1 << (ApexParser.RETURNING - 162)) | (1 << (ApexParser.LISTVIEW - 162)) | (1 << (ApexParser.FindLiteral - 162)) | (1 << (ApexParser.IntegerLiteral - 162)) | (1 << (ApexParser.LongLiteral - 162)) | (1 << (ApexParser.NumberLiteral - 162)) | (1 << (ApexParser.BooleanLiteral - 162)) | (1 << (ApexParser.StringLiteral - 162)) | (1 << (ApexParser.LPAREN - 162)) | (1 << (ApexParser.LBRACK - 162)) | (1 << (ApexParser.BANG - 162)))) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & ((1 << (ApexParser.TILDE - 194)) | (1 << (ApexParser.INC - 194)) | (1 << (ApexParser.DEC - 194)) | (1 << (ApexParser.ADD - 194)) | (1 << (ApexParser.SUB - 194)))) !== 0) || _la === ApexParser.Identifier) {
				{
				this.state = 991;
				this.expressionList();
				}
			}

			this.state = 994;
			this.match(ApexParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public creator(): CreatorContext {
		let _localctx: CreatorContext = new CreatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, ApexParser.RULE_creator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 996;
			this.createdName();
			this.state = 1002;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				{
				this.state = 997;
				this.noRest();
				}
				break;

			case 2:
				{
				this.state = 998;
				this.classCreatorRest();
				}
				break;

			case 3:
				{
				this.state = 999;
				this.arrayCreatorRest();
				}
				break;

			case 4:
				{
				this.state = 1000;
				this.mapCreatorRest();
				}
				break;

			case 5:
				{
				this.state = 1001;
				this.setCreatorRest();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public createdName(): CreatedNameContext {
		let _localctx: CreatedNameContext = new CreatedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, ApexParser.RULE_createdName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1004;
			this.idCreatedNamePair();
			this.state = 1009;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.DOT) {
				{
				{
				this.state = 1005;
				this.match(ApexParser.DOT);
				this.state = 1006;
				this.idCreatedNamePair();
				}
				}
				this.state = 1011;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idCreatedNamePair(): IdCreatedNamePairContext {
		let _localctx: IdCreatedNamePairContext = new IdCreatedNamePairContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, ApexParser.RULE_idCreatedNamePair);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1012;
			this.anyId();
			this.state = 1017;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.LT) {
				{
				this.state = 1013;
				this.match(ApexParser.LT);
				this.state = 1014;
				this.typeList();
				this.state = 1015;
				this.match(ApexParser.GT);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public noRest(): NoRestContext {
		let _localctx: NoRestContext = new NoRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, ApexParser.RULE_noRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1019;
			this.match(ApexParser.LBRACE);
			this.state = 1020;
			this.match(ApexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public classCreatorRest(): ClassCreatorRestContext {
		let _localctx: ClassCreatorRestContext = new ClassCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, ApexParser.RULE_classCreatorRest);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1022;
			this.arguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayCreatorRest(): ArrayCreatorRestContext {
		let _localctx: ArrayCreatorRestContext = new ArrayCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, ApexParser.RULE_arrayCreatorRest);
		try {
			this.state = 1033;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1024;
				this.match(ApexParser.LBRACK);
				this.state = 1025;
				this.expression(0);
				this.state = 1026;
				this.match(ApexParser.RBRACK);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1028;
				this.match(ApexParser.LBRACK);
				this.state = 1029;
				this.match(ApexParser.RBRACK);
				this.state = 1031;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
				case 1:
					{
					this.state = 1030;
					this.arrayInitializer();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapCreatorRest(): MapCreatorRestContext {
		let _localctx: MapCreatorRestContext = new MapCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, ApexParser.RULE_mapCreatorRest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1035;
			this.match(ApexParser.LBRACE);
			this.state = 1036;
			this.mapCreatorRestPair();
			this.state = 1041;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.COMMA) {
				{
				{
				this.state = 1037;
				this.match(ApexParser.COMMA);
				this.state = 1038;
				this.mapCreatorRestPair();
				}
				}
				this.state = 1043;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1044;
			this.match(ApexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapCreatorRestPair(): MapCreatorRestPairContext {
		let _localctx: MapCreatorRestPairContext = new MapCreatorRestPairContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, ApexParser.RULE_mapCreatorRestPair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1046;
			this.expression(0);
			this.state = 1047;
			this.match(ApexParser.MAPTO);
			this.state = 1048;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setCreatorRest(): SetCreatorRestContext {
		let _localctx: SetCreatorRestContext = new SetCreatorRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, ApexParser.RULE_setCreatorRest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1050;
			this.match(ApexParser.LBRACE);
			this.state = 1051;
			this.expression(0);
			this.state = 1056;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.COMMA) {
				{
				{
				this.state = 1052;
				this.match(ApexParser.COMMA);
				{
				this.state = 1053;
				this.expression(0);
				}
				}
				}
				this.state = 1058;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1059;
			this.match(ApexParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, ApexParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1061;
			this.match(ApexParser.LPAREN);
			this.state = 1063;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SUPER - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.THIS - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.SELECT - 34)) | (1 << (ApexParser.COUNT - 34)) | (1 << (ApexParser.FROM - 34)) | (1 << (ApexParser.AS - 34)) | (1 << (ApexParser.USING - 34)) | (1 << (ApexParser.SCOPE - 34)) | (1 << (ApexParser.WHERE - 34)) | (1 << (ApexParser.ORDER - 34)) | (1 << (ApexParser.BY - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LIMIT - 66)) | (1 << (ApexParser.SOQLAND - 66)) | (1 << (ApexParser.SOQLOR - 66)) | (1 << (ApexParser.NOT - 66)) | (1 << (ApexParser.AVG - 66)) | (1 << (ApexParser.COUNT_DISTINCT - 66)) | (1 << (ApexParser.MIN - 66)) | (1 << (ApexParser.MAX - 66)) | (1 << (ApexParser.SUM - 66)) | (1 << (ApexParser.TYPEOF - 66)) | (1 << (ApexParser.END - 66)) | (1 << (ApexParser.THEN - 66)) | (1 << (ApexParser.LIKE - 66)) | (1 << (ApexParser.IN - 66)) | (1 << (ApexParser.INCLUDES - 66)) | (1 << (ApexParser.EXCLUDES - 66)) | (1 << (ApexParser.ASC - 66)) | (1 << (ApexParser.DESC - 66)) | (1 << (ApexParser.NULLS - 66)) | (1 << (ApexParser.FIRST - 66)) | (1 << (ApexParser.LAST - 66)) | (1 << (ApexParser.GROUP - 66)) | (1 << (ApexParser.ALL - 66)) | (1 << (ApexParser.ROWS - 66)) | (1 << (ApexParser.VIEW - 66)) | (1 << (ApexParser.HAVING - 66)) | (1 << (ApexParser.ROLLUP - 66)) | (1 << (ApexParser.TOLABEL - 66)) | (1 << (ApexParser.OFFSET - 66)) | (1 << (ApexParser.DATA - 66)) | (1 << (ApexParser.CATEGORY - 66)) | (1 << (ApexParser.AT - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ApexParser.ABOVE - 98)) | (1 << (ApexParser.BELOW - 98)) | (1 << (ApexParser.ABOVE_OR_BELOW - 98)) | (1 << (ApexParser.SECURITY_ENFORCED - 98)) | (1 << (ApexParser.REFERENCE - 98)) | (1 << (ApexParser.CUBE - 98)) | (1 << (ApexParser.FORMAT - 98)) | (1 << (ApexParser.TRACKING - 98)) | (1 << (ApexParser.VIEWSTAT - 98)) | (1 << (ApexParser.CALENDAR_MONTH - 98)) | (1 << (ApexParser.CALENDAR_QUARTER - 98)) | (1 << (ApexParser.CALENDAR_YEAR - 98)) | (1 << (ApexParser.DAY_IN_MONTH - 98)) | (1 << (ApexParser.DAY_IN_WEEK - 98)) | (1 << (ApexParser.DAY_IN_YEAR - 98)) | (1 << (ApexParser.DAY_ONLY - 98)) | (1 << (ApexParser.FISCAL_MONTH - 98)) | (1 << (ApexParser.FISCAL_QUARTER - 98)) | (1 << (ApexParser.FISCAL_YEAR - 98)) | (1 << (ApexParser.HOUR_IN_DAY - 98)) | (1 << (ApexParser.WEEK_IN_MONTH - 98)) | (1 << (ApexParser.WEEK_IN_YEAR - 98)) | (1 << (ApexParser.CONVERT_TIMEZONE - 98)) | (1 << (ApexParser.YESTERDAY - 98)) | (1 << (ApexParser.TODAY - 98)) | (1 << (ApexParser.TOMORROW - 98)) | (1 << (ApexParser.LAST_WEEK - 98)) | (1 << (ApexParser.THIS_WEEK - 98)) | (1 << (ApexParser.NEXT_WEEK - 98)) | (1 << (ApexParser.LAST_MONTH - 98)) | (1 << (ApexParser.THIS_MONTH - 98)) | (1 << (ApexParser.NEXT_MONTH - 98)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (ApexParser.LAST_90_DAYS - 130)) | (1 << (ApexParser.NEXT_90_DAYS - 130)) | (1 << (ApexParser.LAST_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_WEEKS_N - 130)) | (1 << (ApexParser.LAST_N_WEEKS_N - 130)) | (1 << (ApexParser.NEXT_N_MONTHS_N - 130)) | (1 << (ApexParser.LAST_N_MONTHS_N - 130)) | (1 << (ApexParser.THIS_QUARTER - 130)) | (1 << (ApexParser.LAST_QUARTER - 130)) | (1 << (ApexParser.NEXT_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_YEAR - 130)) | (1 << (ApexParser.LAST_YEAR - 130)) | (1 << (ApexParser.NEXT_YEAR - 130)) | (1 << (ApexParser.NEXT_N_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_YEARS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_QUARTER - 130)) | (1 << (ApexParser.LAST_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_YEAR - 130)) | (1 << (ApexParser.LAST_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.FIND - 130)) | (1 << (ApexParser.EMAIL - 130)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (ApexParser.NAME - 162)) | (1 << (ApexParser.PHONE - 162)) | (1 << (ApexParser.SIDEBAR - 162)) | (1 << (ApexParser.FIELDS - 162)) | (1 << (ApexParser.METADATA - 162)) | (1 << (ApexParser.PRICEBOOKID - 162)) | (1 << (ApexParser.NETWORK - 162)) | (1 << (ApexParser.SNIPPET - 162)) | (1 << (ApexParser.TARGET_LENGTH - 162)) | (1 << (ApexParser.DIVISION - 162)) | (1 << (ApexParser.RETURNING - 162)) | (1 << (ApexParser.LISTVIEW - 162)) | (1 << (ApexParser.FindLiteral - 162)) | (1 << (ApexParser.IntegerLiteral - 162)) | (1 << (ApexParser.LongLiteral - 162)) | (1 << (ApexParser.NumberLiteral - 162)) | (1 << (ApexParser.BooleanLiteral - 162)) | (1 << (ApexParser.StringLiteral - 162)) | (1 << (ApexParser.LPAREN - 162)) | (1 << (ApexParser.LBRACK - 162)) | (1 << (ApexParser.BANG - 162)))) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & ((1 << (ApexParser.TILDE - 194)) | (1 << (ApexParser.INC - 194)) | (1 << (ApexParser.DEC - 194)) | (1 << (ApexParser.ADD - 194)) | (1 << (ApexParser.SUB - 194)))) !== 0) || _la === ApexParser.Identifier) {
				{
				this.state = 1062;
				this.expressionList();
				}
			}

			this.state = 1065;
			this.match(ApexParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public soqlLiteral(): SoqlLiteralContext {
		let _localctx: SoqlLiteralContext = new SoqlLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, ApexParser.RULE_soqlLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1067;
			this.match(ApexParser.LBRACK);
			this.state = 1068;
			this.query();
			this.state = 1069;
			this.match(ApexParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public query(): QueryContext {
		let _localctx: QueryContext = new QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, ApexParser.RULE_query);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1071;
			this.match(ApexParser.SELECT);
			this.state = 1072;
			this.selectList();
			this.state = 1073;
			this.match(ApexParser.FROM);
			this.state = 1074;
			this.fromNameList();
			this.state = 1076;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.USING) {
				{
				this.state = 1075;
				this.usingScope();
				}
			}

			this.state = 1079;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.WHERE) {
				{
				this.state = 1078;
				this.whereClause();
				}
			}

			this.state = 1082;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.WITH) {
				{
				this.state = 1081;
				this.withClause();
				}
			}

			this.state = 1085;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.GROUP) {
				{
				this.state = 1084;
				this.groupByClause();
				}
			}

			this.state = 1088;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.ORDER) {
				{
				this.state = 1087;
				this.orderByClause();
				}
			}

			this.state = 1091;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.LIMIT) {
				{
				this.state = 1090;
				this.limitClause();
				}
			}

			this.state = 1094;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.OFFSET) {
				{
				this.state = 1093;
				this.offsetClause();
				}
			}

			this.state = 1097;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.ALL) {
				{
				this.state = 1096;
				this.allRowsClause();
				}
			}

			this.state = 1099;
			this.forClauses();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subQuery(): SubQueryContext {
		let _localctx: SubQueryContext = new SubQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, ApexParser.RULE_subQuery);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1101;
			this.match(ApexParser.SELECT);
			this.state = 1102;
			this.subFieldList();
			this.state = 1103;
			this.match(ApexParser.FROM);
			this.state = 1104;
			this.fromNameList();
			this.state = 1106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.WHERE) {
				{
				this.state = 1105;
				this.whereClause();
				}
			}

			this.state = 1109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.ORDER) {
				{
				this.state = 1108;
				this.orderByClause();
				}
			}

			this.state = 1112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.LIMIT) {
				{
				this.state = 1111;
				this.limitClause();
				}
			}

			this.state = 1114;
			this.forClauses();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectList(): SelectListContext {
		let _localctx: SelectListContext = new SelectListContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, ApexParser.RULE_selectList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1116;
			this.selectEntry();
			this.state = 1121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.COMMA) {
				{
				{
				this.state = 1117;
				this.match(ApexParser.COMMA);
				this.state = 1118;
				this.selectEntry();
				}
				}
				this.state = 1123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectEntry(): SelectEntryContext {
		let _localctx: SelectEntryContext = new SelectEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, ApexParser.RULE_selectEntry);
		try {
			this.state = 1139;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1124;
				this.fieldName();
				this.state = 1126;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
				case 1:
					{
					this.state = 1125;
					this.soqlId();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1128;
				this.soqlFunction();
				this.state = 1130;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
				case 1:
					{
					this.state = 1129;
					this.soqlId();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1132;
				this.match(ApexParser.LPAREN);
				this.state = 1133;
				this.subQuery();
				this.state = 1134;
				this.match(ApexParser.RPAREN);
				this.state = 1136;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
				case 1:
					{
					this.state = 1135;
					this.soqlId();
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1138;
				this.typeOf();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldName(): FieldNameContext {
		let _localctx: FieldNameContext = new FieldNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, ApexParser.RULE_fieldName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1141;
			this.soqlId();
			this.state = 1146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.DOT) {
				{
				{
				this.state = 1142;
				this.match(ApexParser.DOT);
				this.state = 1143;
				this.soqlId();
				}
				}
				this.state = 1148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fromNameList(): FromNameListContext {
		let _localctx: FromNameListContext = new FromNameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, ApexParser.RULE_fromNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1149;
			this.fieldName();
			this.state = 1151;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
			case 1:
				{
				this.state = 1150;
				this.soqlId();
				}
				break;
			}
			this.state = 1160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.COMMA) {
				{
				{
				this.state = 1153;
				this.match(ApexParser.COMMA);
				this.state = 1154;
				this.fieldName();
				this.state = 1156;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 111, this._ctx) ) {
				case 1:
					{
					this.state = 1155;
					this.soqlId();
					}
					break;
				}
				}
				}
				this.state = 1162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subFieldList(): SubFieldListContext {
		let _localctx: SubFieldListContext = new SubFieldListContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, ApexParser.RULE_subFieldList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1163;
			this.subFieldEntry();
			this.state = 1168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.COMMA) {
				{
				{
				this.state = 1164;
				this.match(ApexParser.COMMA);
				this.state = 1165;
				this.subFieldEntry();
				}
				}
				this.state = 1170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subFieldEntry(): SubFieldEntryContext {
		let _localctx: SubFieldEntryContext = new SubFieldEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, ApexParser.RULE_subFieldEntry);
		try {
			this.state = 1179;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1171;
				this.fieldName();
				this.state = 1173;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
				case 1:
					{
					this.state = 1172;
					this.soqlId();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1175;
				this.soqlFunction();
				this.state = 1177;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
				case 1:
					{
					this.state = 1176;
					this.soqlId();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public soqlFunction(): SoqlFunctionContext {
		let _localctx: SoqlFunctionContext = new SoqlFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, ApexParser.RULE_soqlFunction);
		try {
			this.state = 1289;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1181;
				this.match(ApexParser.AVG);
				this.state = 1182;
				this.match(ApexParser.LPAREN);
				this.state = 1183;
				this.fieldName();
				this.state = 1184;
				this.match(ApexParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1186;
				this.match(ApexParser.COUNT);
				this.state = 1187;
				this.match(ApexParser.LPAREN);
				this.state = 1188;
				this.match(ApexParser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1189;
				this.match(ApexParser.COUNT);
				this.state = 1190;
				this.match(ApexParser.LPAREN);
				this.state = 1191;
				this.fieldName();
				this.state = 1192;
				this.match(ApexParser.RPAREN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1194;
				this.match(ApexParser.COUNT_DISTINCT);
				this.state = 1195;
				this.match(ApexParser.LPAREN);
				this.state = 1196;
				this.fieldName();
				this.state = 1197;
				this.match(ApexParser.RPAREN);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1199;
				this.match(ApexParser.MIN);
				this.state = 1200;
				this.match(ApexParser.LPAREN);
				this.state = 1201;
				this.fieldName();
				this.state = 1202;
				this.match(ApexParser.RPAREN);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1204;
				this.match(ApexParser.MAX);
				this.state = 1205;
				this.match(ApexParser.LPAREN);
				this.state = 1206;
				this.fieldName();
				this.state = 1207;
				this.match(ApexParser.RPAREN);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1209;
				this.match(ApexParser.SUM);
				this.state = 1210;
				this.match(ApexParser.LPAREN);
				this.state = 1211;
				this.fieldName();
				this.state = 1212;
				this.match(ApexParser.RPAREN);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1214;
				this.match(ApexParser.TOLABEL);
				this.state = 1215;
				this.match(ApexParser.LPAREN);
				this.state = 1216;
				this.fieldName();
				this.state = 1217;
				this.match(ApexParser.RPAREN);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1219;
				this.match(ApexParser.FORMAT);
				this.state = 1220;
				this.match(ApexParser.LPAREN);
				this.state = 1221;
				this.fieldName();
				this.state = 1222;
				this.match(ApexParser.RPAREN);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1224;
				this.match(ApexParser.CALENDAR_MONTH);
				this.state = 1225;
				this.match(ApexParser.LPAREN);
				this.state = 1226;
				this.dateFieldName();
				this.state = 1227;
				this.match(ApexParser.RPAREN);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1229;
				this.match(ApexParser.CALENDAR_QUARTER);
				this.state = 1230;
				this.match(ApexParser.LPAREN);
				this.state = 1231;
				this.dateFieldName();
				this.state = 1232;
				this.match(ApexParser.RPAREN);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1234;
				this.match(ApexParser.CALENDAR_YEAR);
				this.state = 1235;
				this.match(ApexParser.LPAREN);
				this.state = 1236;
				this.dateFieldName();
				this.state = 1237;
				this.match(ApexParser.RPAREN);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1239;
				this.match(ApexParser.DAY_IN_MONTH);
				this.state = 1240;
				this.match(ApexParser.LPAREN);
				this.state = 1241;
				this.dateFieldName();
				this.state = 1242;
				this.match(ApexParser.RPAREN);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1244;
				this.match(ApexParser.DAY_IN_WEEK);
				this.state = 1245;
				this.match(ApexParser.LPAREN);
				this.state = 1246;
				this.dateFieldName();
				this.state = 1247;
				this.match(ApexParser.RPAREN);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1249;
				this.match(ApexParser.DAY_IN_YEAR);
				this.state = 1250;
				this.match(ApexParser.LPAREN);
				this.state = 1251;
				this.dateFieldName();
				this.state = 1252;
				this.match(ApexParser.RPAREN);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1254;
				this.match(ApexParser.DAY_ONLY);
				this.state = 1255;
				this.match(ApexParser.LPAREN);
				this.state = 1256;
				this.dateFieldName();
				this.state = 1257;
				this.match(ApexParser.RPAREN);
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1259;
				this.match(ApexParser.FISCAL_MONTH);
				this.state = 1260;
				this.match(ApexParser.LPAREN);
				this.state = 1261;
				this.dateFieldName();
				this.state = 1262;
				this.match(ApexParser.RPAREN);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1264;
				this.match(ApexParser.FISCAL_QUARTER);
				this.state = 1265;
				this.match(ApexParser.LPAREN);
				this.state = 1266;
				this.dateFieldName();
				this.state = 1267;
				this.match(ApexParser.RPAREN);
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1269;
				this.match(ApexParser.FISCAL_YEAR);
				this.state = 1270;
				this.match(ApexParser.LPAREN);
				this.state = 1271;
				this.dateFieldName();
				this.state = 1272;
				this.match(ApexParser.RPAREN);
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 1274;
				this.match(ApexParser.HOUR_IN_DAY);
				this.state = 1275;
				this.match(ApexParser.LPAREN);
				this.state = 1276;
				this.dateFieldName();
				this.state = 1277;
				this.match(ApexParser.RPAREN);
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 1279;
				this.match(ApexParser.WEEK_IN_MONTH);
				this.state = 1280;
				this.match(ApexParser.LPAREN);
				this.state = 1281;
				this.dateFieldName();
				this.state = 1282;
				this.match(ApexParser.RPAREN);
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 1284;
				this.match(ApexParser.WEEK_IN_YEAR);
				this.state = 1285;
				this.match(ApexParser.LPAREN);
				this.state = 1286;
				this.dateFieldName();
				this.state = 1287;
				this.match(ApexParser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dateFieldName(): DateFieldNameContext {
		let _localctx: DateFieldNameContext = new DateFieldNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, ApexParser.RULE_dateFieldName);
		try {
			this.state = 1297;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1291;
				this.match(ApexParser.CONVERT_TIMEZONE);
				this.state = 1292;
				this.match(ApexParser.LPAREN);
				this.state = 1293;
				this.fieldName();
				this.state = 1294;
				this.match(ApexParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1296;
				this.fieldName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeOf(): TypeOfContext {
		let _localctx: TypeOfContext = new TypeOfContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, ApexParser.RULE_typeOf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1299;
			this.match(ApexParser.TYPEOF);
			this.state = 1300;
			this.fieldName();
			this.state = 1302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1301;
				this.whenClause();
				}
				}
				this.state = 1304;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ApexParser.WHEN);
			this.state = 1307;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.ELSE) {
				{
				this.state = 1306;
				this.elseClause();
				}
			}

			this.state = 1309;
			this.match(ApexParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whenClause(): WhenClauseContext {
		let _localctx: WhenClauseContext = new WhenClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, ApexParser.RULE_whenClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1311;
			this.match(ApexParser.WHEN);
			this.state = 1312;
			this.fieldName();
			this.state = 1313;
			this.match(ApexParser.THEN);
			this.state = 1314;
			this.fieldNameList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elseClause(): ElseClauseContext {
		let _localctx: ElseClauseContext = new ElseClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, ApexParser.RULE_elseClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1316;
			this.match(ApexParser.ELSE);
			this.state = 1317;
			this.fieldNameList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldNameList(): FieldNameListContext {
		let _localctx: FieldNameListContext = new FieldNameListContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, ApexParser.RULE_fieldNameList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1319;
			this.fieldName();
			this.state = 1324;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.COMMA) {
				{
				{
				this.state = 1320;
				this.match(ApexParser.COMMA);
				this.state = 1321;
				this.fieldName();
				}
				}
				this.state = 1326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usingScope(): UsingScopeContext {
		let _localctx: UsingScopeContext = new UsingScopeContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, ApexParser.RULE_usingScope);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1327;
			this.match(ApexParser.USING);
			this.state = 1328;
			this.match(ApexParser.SCOPE);
			this.state = 1329;
			this.soqlId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whereClause(): WhereClauseContext {
		let _localctx: WhereClauseContext = new WhereClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, ApexParser.RULE_whereClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1331;
			this.match(ApexParser.WHERE);
			this.state = 1332;
			this.logicalExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicalExpression(): LogicalExpressionContext {
		let _localctx: LogicalExpressionContext = new LogicalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, ApexParser.RULE_logicalExpression);
		let _la: number;
		try {
			this.state = 1352;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1334;
				this.conditionalExpression();
				this.state = 1339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ApexParser.SOQLAND) {
					{
					{
					this.state = 1335;
					this.match(ApexParser.SOQLAND);
					this.state = 1336;
					this.conditionalExpression();
					}
					}
					this.state = 1341;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1342;
				this.conditionalExpression();
				this.state = 1347;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ApexParser.SOQLOR) {
					{
					{
					this.state = 1343;
					this.match(ApexParser.SOQLOR);
					this.state = 1344;
					this.conditionalExpression();
					}
					}
					this.state = 1349;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1350;
				this.match(ApexParser.NOT);
				this.state = 1351;
				this.conditionalExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let _localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, ApexParser.RULE_conditionalExpression);
		try {
			this.state = 1359;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ApexParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1354;
				this.match(ApexParser.LPAREN);
				this.state = 1355;
				this.logicalExpression();
				this.state = 1356;
				this.match(ApexParser.RPAREN);
				}
				break;
			case ApexParser.AFTER:
			case ApexParser.BEFORE:
			case ApexParser.GET:
			case ApexParser.INHERITED:
			case ApexParser.INSTANCEOF:
			case ApexParser.SET:
			case ApexParser.SHARING:
			case ApexParser.SWITCH:
			case ApexParser.TRANSIENT:
			case ApexParser.TRIGGER:
			case ApexParser.WHEN:
			case ApexParser.WITH:
			case ApexParser.WITHOUT:
			case ApexParser.SELECT:
			case ApexParser.COUNT:
			case ApexParser.FROM:
			case ApexParser.AS:
			case ApexParser.USING:
			case ApexParser.SCOPE:
			case ApexParser.WHERE:
			case ApexParser.ORDER:
			case ApexParser.BY:
			case ApexParser.LIMIT:
			case ApexParser.SOQLAND:
			case ApexParser.SOQLOR:
			case ApexParser.NOT:
			case ApexParser.AVG:
			case ApexParser.COUNT_DISTINCT:
			case ApexParser.MIN:
			case ApexParser.MAX:
			case ApexParser.SUM:
			case ApexParser.TYPEOF:
			case ApexParser.END:
			case ApexParser.THEN:
			case ApexParser.LIKE:
			case ApexParser.IN:
			case ApexParser.INCLUDES:
			case ApexParser.EXCLUDES:
			case ApexParser.ASC:
			case ApexParser.DESC:
			case ApexParser.NULLS:
			case ApexParser.FIRST:
			case ApexParser.LAST:
			case ApexParser.GROUP:
			case ApexParser.ALL:
			case ApexParser.ROWS:
			case ApexParser.VIEW:
			case ApexParser.HAVING:
			case ApexParser.ROLLUP:
			case ApexParser.TOLABEL:
			case ApexParser.OFFSET:
			case ApexParser.DATA:
			case ApexParser.CATEGORY:
			case ApexParser.AT:
			case ApexParser.ABOVE:
			case ApexParser.BELOW:
			case ApexParser.ABOVE_OR_BELOW:
			case ApexParser.SECURITY_ENFORCED:
			case ApexParser.REFERENCE:
			case ApexParser.CUBE:
			case ApexParser.FORMAT:
			case ApexParser.TRACKING:
			case ApexParser.VIEWSTAT:
			case ApexParser.CALENDAR_MONTH:
			case ApexParser.CALENDAR_QUARTER:
			case ApexParser.CALENDAR_YEAR:
			case ApexParser.DAY_IN_MONTH:
			case ApexParser.DAY_IN_WEEK:
			case ApexParser.DAY_IN_YEAR:
			case ApexParser.DAY_ONLY:
			case ApexParser.FISCAL_MONTH:
			case ApexParser.FISCAL_QUARTER:
			case ApexParser.FISCAL_YEAR:
			case ApexParser.HOUR_IN_DAY:
			case ApexParser.WEEK_IN_MONTH:
			case ApexParser.WEEK_IN_YEAR:
			case ApexParser.CONVERT_TIMEZONE:
			case ApexParser.YESTERDAY:
			case ApexParser.TODAY:
			case ApexParser.TOMORROW:
			case ApexParser.LAST_WEEK:
			case ApexParser.THIS_WEEK:
			case ApexParser.NEXT_WEEK:
			case ApexParser.LAST_MONTH:
			case ApexParser.THIS_MONTH:
			case ApexParser.NEXT_MONTH:
			case ApexParser.LAST_90_DAYS:
			case ApexParser.NEXT_90_DAYS:
			case ApexParser.LAST_N_DAYS_N:
			case ApexParser.NEXT_N_DAYS_N:
			case ApexParser.NEXT_N_WEEKS_N:
			case ApexParser.LAST_N_WEEKS_N:
			case ApexParser.NEXT_N_MONTHS_N:
			case ApexParser.LAST_N_MONTHS_N:
			case ApexParser.THIS_QUARTER:
			case ApexParser.LAST_QUARTER:
			case ApexParser.NEXT_QUARTER:
			case ApexParser.NEXT_N_QUARTERS_N:
			case ApexParser.LAST_N_QUARTERS_N:
			case ApexParser.THIS_YEAR:
			case ApexParser.LAST_YEAR:
			case ApexParser.NEXT_YEAR:
			case ApexParser.NEXT_N_YEARS_N:
			case ApexParser.LAST_N_YEARS_N:
			case ApexParser.THIS_FISCAL_QUARTER:
			case ApexParser.LAST_FISCAL_QUARTER:
			case ApexParser.NEXT_FISCAL_QUARTER:
			case ApexParser.NEXT_N_FISCAL_QUARTERS_N:
			case ApexParser.LAST_N_FISCAL_QUARTERS_N:
			case ApexParser.THIS_FISCAL_YEAR:
			case ApexParser.LAST_FISCAL_YEAR:
			case ApexParser.NEXT_FISCAL_YEAR:
			case ApexParser.NEXT_N_FISCAL_YEARS_N:
			case ApexParser.LAST_N_FISCAL_YEARS_N:
			case ApexParser.FIND:
			case ApexParser.EMAIL:
			case ApexParser.NAME:
			case ApexParser.PHONE:
			case ApexParser.SIDEBAR:
			case ApexParser.FIELDS:
			case ApexParser.METADATA:
			case ApexParser.PRICEBOOKID:
			case ApexParser.NETWORK:
			case ApexParser.SNIPPET:
			case ApexParser.TARGET_LENGTH:
			case ApexParser.DIVISION:
			case ApexParser.RETURNING:
			case ApexParser.LISTVIEW:
			case ApexParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1358;
				this.fieldExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldExpression(): FieldExpressionContext {
		let _localctx: FieldExpressionContext = new FieldExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, ApexParser.RULE_fieldExpression);
		try {
			this.state = 1369;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1361;
				this.fieldName();
				this.state = 1362;
				this.comparisonOperator();
				this.state = 1363;
				this.value();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1365;
				this.soqlFunction();
				this.state = 1366;
				this.comparisonOperator();
				this.state = 1367;
				this.value();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparisonOperator(): ComparisonOperatorContext {
		let _localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, ApexParser.RULE_comparisonOperator);
		try {
			this.state = 1386;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1371;
				this.match(ApexParser.ASSIGN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1372;
				this.match(ApexParser.NOTEQUAL);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1373;
				this.match(ApexParser.LT);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1374;
				this.match(ApexParser.GT);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1375;
				this.match(ApexParser.LT);
				this.state = 1376;
				this.match(ApexParser.ASSIGN);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1377;
				this.match(ApexParser.GT);
				this.state = 1378;
				this.match(ApexParser.ASSIGN);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1379;
				this.match(ApexParser.LESSANDGREATER);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1380;
				this.match(ApexParser.LIKE);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1381;
				this.match(ApexParser.IN);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1382;
				this.match(ApexParser.NOT);
				this.state = 1383;
				this.match(ApexParser.IN);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1384;
				this.match(ApexParser.INCLUDES);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1385;
				this.match(ApexParser.EXCLUDES);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, ApexParser.RULE_value);
		try {
			this.state = 1404;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1388;
				this.match(ApexParser.NULL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1389;
				this.match(ApexParser.BooleanLiteral);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1390;
				this.match(ApexParser.IntegerLiteral);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1391;
				this.match(ApexParser.LongLiteral);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1392;
				this.match(ApexParser.NumberLiteral);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1393;
				this.match(ApexParser.StringLiteral);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1394;
				this.match(ApexParser.DateLiteral);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1395;
				this.match(ApexParser.DateTimeLiteral);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1396;
				this.dateFormula();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1397;
				this.currencyValue();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1398;
				this.match(ApexParser.LPAREN);
				this.state = 1399;
				this.subQuery();
				this.state = 1400;
				this.match(ApexParser.RPAREN);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1402;
				this.valueList();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1403;
				this.boundExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valueList(): ValueListContext {
		let _localctx: ValueListContext = new ValueListContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, ApexParser.RULE_valueList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1406;
			this.match(ApexParser.LPAREN);
			this.state = 1407;
			this.value();
			this.state = 1412;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.COMMA) {
				{
				{
				this.state = 1408;
				this.match(ApexParser.COMMA);
				this.state = 1409;
				this.value();
				}
				}
				this.state = 1414;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1415;
			this.match(ApexParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public currencyValue(): CurrencyValueContext {
		let _localctx: CurrencyValueContext = new CurrencyValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, ApexParser.RULE_currencyValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1417;
			this.soqlId();
			this.state = 1418;
			this.signedInteger();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withClause(): WithClauseContext {
		let _localctx: WithClauseContext = new WithClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, ApexParser.RULE_withClause);
		try {
			this.state = 1428;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 130, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1420;
				this.match(ApexParser.WITH);
				this.state = 1421;
				this.match(ApexParser.DATA);
				this.state = 1422;
				this.match(ApexParser.CATEGORY);
				this.state = 1423;
				this.filteringExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1424;
				this.match(ApexParser.WITH);
				this.state = 1425;
				this.match(ApexParser.SECURITY_ENFORCED);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1426;
				this.match(ApexParser.WITH);
				this.state = 1427;
				this.logicalExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public filteringExpression(): FilteringExpressionContext {
		let _localctx: FilteringExpressionContext = new FilteringExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, ApexParser.RULE_filteringExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1430;
			this.dataCategorySelection();
			this.state = 1435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.AND) {
				{
				{
				this.state = 1431;
				this.match(ApexParser.AND);
				this.state = 1432;
				this.dataCategorySelection();
				}
				}
				this.state = 1437;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataCategorySelection(): DataCategorySelectionContext {
		let _localctx: DataCategorySelectionContext = new DataCategorySelectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, ApexParser.RULE_dataCategorySelection);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1438;
			this.soqlId();
			this.state = 1439;
			this.filteringSelector();
			this.state = 1440;
			this.dataCategoryName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataCategoryName(): DataCategoryNameContext {
		let _localctx: DataCategoryNameContext = new DataCategoryNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, ApexParser.RULE_dataCategoryName);
		let _la: number;
		try {
			this.state = 1454;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ApexParser.AFTER:
			case ApexParser.BEFORE:
			case ApexParser.GET:
			case ApexParser.INHERITED:
			case ApexParser.INSTANCEOF:
			case ApexParser.SET:
			case ApexParser.SHARING:
			case ApexParser.SWITCH:
			case ApexParser.TRANSIENT:
			case ApexParser.TRIGGER:
			case ApexParser.WHEN:
			case ApexParser.WITH:
			case ApexParser.WITHOUT:
			case ApexParser.SELECT:
			case ApexParser.COUNT:
			case ApexParser.FROM:
			case ApexParser.AS:
			case ApexParser.USING:
			case ApexParser.SCOPE:
			case ApexParser.WHERE:
			case ApexParser.ORDER:
			case ApexParser.BY:
			case ApexParser.LIMIT:
			case ApexParser.SOQLAND:
			case ApexParser.SOQLOR:
			case ApexParser.NOT:
			case ApexParser.AVG:
			case ApexParser.COUNT_DISTINCT:
			case ApexParser.MIN:
			case ApexParser.MAX:
			case ApexParser.SUM:
			case ApexParser.TYPEOF:
			case ApexParser.END:
			case ApexParser.THEN:
			case ApexParser.LIKE:
			case ApexParser.IN:
			case ApexParser.INCLUDES:
			case ApexParser.EXCLUDES:
			case ApexParser.ASC:
			case ApexParser.DESC:
			case ApexParser.NULLS:
			case ApexParser.FIRST:
			case ApexParser.LAST:
			case ApexParser.GROUP:
			case ApexParser.ALL:
			case ApexParser.ROWS:
			case ApexParser.VIEW:
			case ApexParser.HAVING:
			case ApexParser.ROLLUP:
			case ApexParser.TOLABEL:
			case ApexParser.OFFSET:
			case ApexParser.DATA:
			case ApexParser.CATEGORY:
			case ApexParser.AT:
			case ApexParser.ABOVE:
			case ApexParser.BELOW:
			case ApexParser.ABOVE_OR_BELOW:
			case ApexParser.SECURITY_ENFORCED:
			case ApexParser.REFERENCE:
			case ApexParser.CUBE:
			case ApexParser.FORMAT:
			case ApexParser.TRACKING:
			case ApexParser.VIEWSTAT:
			case ApexParser.CALENDAR_MONTH:
			case ApexParser.CALENDAR_QUARTER:
			case ApexParser.CALENDAR_YEAR:
			case ApexParser.DAY_IN_MONTH:
			case ApexParser.DAY_IN_WEEK:
			case ApexParser.DAY_IN_YEAR:
			case ApexParser.DAY_ONLY:
			case ApexParser.FISCAL_MONTH:
			case ApexParser.FISCAL_QUARTER:
			case ApexParser.FISCAL_YEAR:
			case ApexParser.HOUR_IN_DAY:
			case ApexParser.WEEK_IN_MONTH:
			case ApexParser.WEEK_IN_YEAR:
			case ApexParser.CONVERT_TIMEZONE:
			case ApexParser.YESTERDAY:
			case ApexParser.TODAY:
			case ApexParser.TOMORROW:
			case ApexParser.LAST_WEEK:
			case ApexParser.THIS_WEEK:
			case ApexParser.NEXT_WEEK:
			case ApexParser.LAST_MONTH:
			case ApexParser.THIS_MONTH:
			case ApexParser.NEXT_MONTH:
			case ApexParser.LAST_90_DAYS:
			case ApexParser.NEXT_90_DAYS:
			case ApexParser.LAST_N_DAYS_N:
			case ApexParser.NEXT_N_DAYS_N:
			case ApexParser.NEXT_N_WEEKS_N:
			case ApexParser.LAST_N_WEEKS_N:
			case ApexParser.NEXT_N_MONTHS_N:
			case ApexParser.LAST_N_MONTHS_N:
			case ApexParser.THIS_QUARTER:
			case ApexParser.LAST_QUARTER:
			case ApexParser.NEXT_QUARTER:
			case ApexParser.NEXT_N_QUARTERS_N:
			case ApexParser.LAST_N_QUARTERS_N:
			case ApexParser.THIS_YEAR:
			case ApexParser.LAST_YEAR:
			case ApexParser.NEXT_YEAR:
			case ApexParser.NEXT_N_YEARS_N:
			case ApexParser.LAST_N_YEARS_N:
			case ApexParser.THIS_FISCAL_QUARTER:
			case ApexParser.LAST_FISCAL_QUARTER:
			case ApexParser.NEXT_FISCAL_QUARTER:
			case ApexParser.NEXT_N_FISCAL_QUARTERS_N:
			case ApexParser.LAST_N_FISCAL_QUARTERS_N:
			case ApexParser.THIS_FISCAL_YEAR:
			case ApexParser.LAST_FISCAL_YEAR:
			case ApexParser.NEXT_FISCAL_YEAR:
			case ApexParser.NEXT_N_FISCAL_YEARS_N:
			case ApexParser.LAST_N_FISCAL_YEARS_N:
			case ApexParser.FIND:
			case ApexParser.EMAIL:
			case ApexParser.NAME:
			case ApexParser.PHONE:
			case ApexParser.SIDEBAR:
			case ApexParser.FIELDS:
			case ApexParser.METADATA:
			case ApexParser.PRICEBOOKID:
			case ApexParser.NETWORK:
			case ApexParser.SNIPPET:
			case ApexParser.TARGET_LENGTH:
			case ApexParser.DIVISION:
			case ApexParser.RETURNING:
			case ApexParser.LISTVIEW:
			case ApexParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1442;
				this.soqlId();
				}
				break;
			case ApexParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1443;
				this.match(ApexParser.LPAREN);
				this.state = 1444;
				this.soqlId();
				this.state = 1449;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ApexParser.COMMA) {
					{
					{
					this.state = 1445;
					this.match(ApexParser.COMMA);
					this.state = 1446;
					this.soqlId();
					}
					}
					this.state = 1451;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1452;
				this.match(ApexParser.LPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public filteringSelector(): FilteringSelectorContext {
		let _localctx: FilteringSelectorContext = new FilteringSelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, ApexParser.RULE_filteringSelector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1456;
			_la = this._input.LA(1);
			if (!(((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (ApexParser.AT - 97)) | (1 << (ApexParser.ABOVE - 97)) | (1 << (ApexParser.BELOW - 97)) | (1 << (ApexParser.ABOVE_OR_BELOW - 97)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupByClause(): GroupByClauseContext {
		let _localctx: GroupByClauseContext = new GroupByClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, ApexParser.RULE_groupByClause);
		let _la: number;
		try {
			this.state = 1493;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1458;
				this.match(ApexParser.GROUP);
				this.state = 1459;
				this.match(ApexParser.BY);
				this.state = 1460;
				this.selectList();
				this.state = 1463;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ApexParser.HAVING) {
					{
					this.state = 1461;
					this.match(ApexParser.HAVING);
					this.state = 1462;
					this.logicalExpression();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1465;
				this.match(ApexParser.GROUP);
				this.state = 1466;
				this.match(ApexParser.BY);
				this.state = 1467;
				this.match(ApexParser.ROLLUP);
				this.state = 1468;
				this.match(ApexParser.LPAREN);
				this.state = 1469;
				this.fieldName();
				this.state = 1474;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ApexParser.COMMA) {
					{
					{
					this.state = 1470;
					this.match(ApexParser.COMMA);
					this.state = 1471;
					this.fieldName();
					}
					}
					this.state = 1476;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1477;
				this.match(ApexParser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1479;
				this.match(ApexParser.GROUP);
				this.state = 1480;
				this.match(ApexParser.BY);
				this.state = 1481;
				this.match(ApexParser.CUBE);
				this.state = 1482;
				this.match(ApexParser.LPAREN);
				this.state = 1483;
				this.fieldName();
				this.state = 1488;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ApexParser.COMMA) {
					{
					{
					this.state = 1484;
					this.match(ApexParser.COMMA);
					this.state = 1485;
					this.fieldName();
					}
					}
					this.state = 1490;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1491;
				this.match(ApexParser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public orderByClause(): OrderByClauseContext {
		let _localctx: OrderByClauseContext = new OrderByClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, ApexParser.RULE_orderByClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1495;
			this.match(ApexParser.ORDER);
			this.state = 1496;
			this.match(ApexParser.BY);
			this.state = 1497;
			this.fieldOrderList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldOrderList(): FieldOrderListContext {
		let _localctx: FieldOrderListContext = new FieldOrderListContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, ApexParser.RULE_fieldOrderList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1499;
			this.fieldOrder();
			this.state = 1504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.COMMA) {
				{
				{
				this.state = 1500;
				this.match(ApexParser.COMMA);
				this.state = 1501;
				this.fieldOrder();
				}
				}
				this.state = 1506;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldOrder(): FieldOrderContext {
		let _localctx: FieldOrderContext = new FieldOrderContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, ApexParser.RULE_fieldOrder);
		let _la: number;
		try {
			this.state = 1523;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1507;
				this.fieldName();
				this.state = 1509;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ApexParser.ASC || _la === ApexParser.DESC) {
					{
					this.state = 1508;
					_la = this._input.LA(1);
					if (!(_la === ApexParser.ASC || _la === ApexParser.DESC)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 1513;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ApexParser.NULLS) {
					{
					this.state = 1511;
					this.match(ApexParser.NULLS);
					this.state = 1512;
					_la = this._input.LA(1);
					if (!(_la === ApexParser.FIRST || _la === ApexParser.LAST)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1515;
				this.soqlFunction();
				this.state = 1517;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ApexParser.ASC || _la === ApexParser.DESC) {
					{
					this.state = 1516;
					_la = this._input.LA(1);
					if (!(_la === ApexParser.ASC || _la === ApexParser.DESC)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				this.state = 1521;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ApexParser.NULLS) {
					{
					this.state = 1519;
					this.match(ApexParser.NULLS);
					this.state = 1520;
					_la = this._input.LA(1);
					if (!(_la === ApexParser.FIRST || _la === ApexParser.LAST)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public limitClause(): LimitClauseContext {
		let _localctx: LimitClauseContext = new LimitClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, ApexParser.RULE_limitClause);
		try {
			this.state = 1529;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 144, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1525;
				this.match(ApexParser.LIMIT);
				this.state = 1526;
				this.match(ApexParser.IntegerLiteral);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1527;
				this.match(ApexParser.LIMIT);
				this.state = 1528;
				this.boundExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public offsetClause(): OffsetClauseContext {
		let _localctx: OffsetClauseContext = new OffsetClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, ApexParser.RULE_offsetClause);
		try {
			this.state = 1535;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1531;
				this.match(ApexParser.OFFSET);
				this.state = 1532;
				this.match(ApexParser.IntegerLiteral);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1533;
				this.match(ApexParser.OFFSET);
				this.state = 1534;
				this.boundExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public allRowsClause(): AllRowsClauseContext {
		let _localctx: AllRowsClauseContext = new AllRowsClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, ApexParser.RULE_allRowsClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1537;
			this.match(ApexParser.ALL);
			this.state = 1538;
			this.match(ApexParser.ROWS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forClauses(): ForClausesContext {
		let _localctx: ForClausesContext = new ForClausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, ApexParser.RULE_forClauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1544;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.FOR) {
				{
				{
				this.state = 1540;
				this.match(ApexParser.FOR);
				this.state = 1541;
				_la = this._input.LA(1);
				if (!(_la === ApexParser.UPDATE || _la === ApexParser.VIEW || _la === ApexParser.REFERENCE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 1546;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public boundExpression(): BoundExpressionContext {
		let _localctx: BoundExpressionContext = new BoundExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, ApexParser.RULE_boundExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1547;
			this.match(ApexParser.COLON);
			this.state = 1548;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dateFormula(): DateFormulaContext {
		let _localctx: DateFormulaContext = new DateFormulaContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, ApexParser.RULE_dateFormula);
		try {
			this.state = 1615;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ApexParser.YESTERDAY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1550;
				this.match(ApexParser.YESTERDAY);
				}
				break;
			case ApexParser.TODAY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1551;
				this.match(ApexParser.TODAY);
				}
				break;
			case ApexParser.TOMORROW:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1552;
				this.match(ApexParser.TOMORROW);
				}
				break;
			case ApexParser.LAST_WEEK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1553;
				this.match(ApexParser.LAST_WEEK);
				}
				break;
			case ApexParser.THIS_WEEK:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1554;
				this.match(ApexParser.THIS_WEEK);
				}
				break;
			case ApexParser.NEXT_WEEK:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1555;
				this.match(ApexParser.NEXT_WEEK);
				}
				break;
			case ApexParser.LAST_MONTH:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1556;
				this.match(ApexParser.LAST_MONTH);
				}
				break;
			case ApexParser.THIS_MONTH:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1557;
				this.match(ApexParser.THIS_MONTH);
				}
				break;
			case ApexParser.NEXT_MONTH:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1558;
				this.match(ApexParser.NEXT_MONTH);
				}
				break;
			case ApexParser.LAST_90_DAYS:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1559;
				this.match(ApexParser.LAST_90_DAYS);
				}
				break;
			case ApexParser.NEXT_90_DAYS:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1560;
				this.match(ApexParser.NEXT_90_DAYS);
				}
				break;
			case ApexParser.LAST_N_DAYS_N:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1561;
				this.match(ApexParser.LAST_N_DAYS_N);
				this.state = 1562;
				this.match(ApexParser.COLON);
				this.state = 1563;
				this.signedInteger();
				}
				break;
			case ApexParser.NEXT_N_DAYS_N:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1564;
				this.match(ApexParser.NEXT_N_DAYS_N);
				this.state = 1565;
				this.match(ApexParser.COLON);
				this.state = 1566;
				this.signedInteger();
				}
				break;
			case ApexParser.NEXT_N_WEEKS_N:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1567;
				this.match(ApexParser.NEXT_N_WEEKS_N);
				this.state = 1568;
				this.match(ApexParser.COLON);
				this.state = 1569;
				this.signedInteger();
				}
				break;
			case ApexParser.LAST_N_WEEKS_N:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1570;
				this.match(ApexParser.LAST_N_WEEKS_N);
				this.state = 1571;
				this.match(ApexParser.COLON);
				this.state = 1572;
				this.signedInteger();
				}
				break;
			case ApexParser.NEXT_N_MONTHS_N:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1573;
				this.match(ApexParser.NEXT_N_MONTHS_N);
				this.state = 1574;
				this.match(ApexParser.COLON);
				this.state = 1575;
				this.signedInteger();
				}
				break;
			case ApexParser.LAST_N_MONTHS_N:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1576;
				this.match(ApexParser.LAST_N_MONTHS_N);
				this.state = 1577;
				this.match(ApexParser.COLON);
				this.state = 1578;
				this.signedInteger();
				}
				break;
			case ApexParser.THIS_QUARTER:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1579;
				this.match(ApexParser.THIS_QUARTER);
				}
				break;
			case ApexParser.LAST_QUARTER:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1580;
				this.match(ApexParser.LAST_QUARTER);
				}
				break;
			case ApexParser.NEXT_QUARTER:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 1581;
				this.match(ApexParser.NEXT_QUARTER);
				}
				break;
			case ApexParser.NEXT_N_QUARTERS_N:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 1582;
				this.match(ApexParser.NEXT_N_QUARTERS_N);
				this.state = 1583;
				this.match(ApexParser.COLON);
				this.state = 1584;
				this.signedInteger();
				}
				break;
			case ApexParser.LAST_N_QUARTERS_N:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 1585;
				this.match(ApexParser.LAST_N_QUARTERS_N);
				this.state = 1586;
				this.match(ApexParser.COLON);
				this.state = 1587;
				this.signedInteger();
				}
				break;
			case ApexParser.THIS_YEAR:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 1588;
				this.match(ApexParser.THIS_YEAR);
				}
				break;
			case ApexParser.LAST_YEAR:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 1589;
				this.match(ApexParser.LAST_YEAR);
				}
				break;
			case ApexParser.NEXT_YEAR:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 1590;
				this.match(ApexParser.NEXT_YEAR);
				}
				break;
			case ApexParser.NEXT_N_YEARS_N:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 1591;
				this.match(ApexParser.NEXT_N_YEARS_N);
				this.state = 1592;
				this.match(ApexParser.COLON);
				this.state = 1593;
				this.signedInteger();
				}
				break;
			case ApexParser.LAST_N_YEARS_N:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 1594;
				this.match(ApexParser.LAST_N_YEARS_N);
				this.state = 1595;
				this.match(ApexParser.COLON);
				this.state = 1596;
				this.signedInteger();
				}
				break;
			case ApexParser.THIS_FISCAL_QUARTER:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 1597;
				this.match(ApexParser.THIS_FISCAL_QUARTER);
				}
				break;
			case ApexParser.LAST_FISCAL_QUARTER:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 1598;
				this.match(ApexParser.LAST_FISCAL_QUARTER);
				}
				break;
			case ApexParser.NEXT_FISCAL_QUARTER:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 1599;
				this.match(ApexParser.NEXT_FISCAL_QUARTER);
				}
				break;
			case ApexParser.NEXT_N_FISCAL_QUARTERS_N:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 1600;
				this.match(ApexParser.NEXT_N_FISCAL_QUARTERS_N);
				this.state = 1601;
				this.match(ApexParser.COLON);
				this.state = 1602;
				this.signedInteger();
				}
				break;
			case ApexParser.LAST_N_FISCAL_QUARTERS_N:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 1603;
				this.match(ApexParser.LAST_N_FISCAL_QUARTERS_N);
				this.state = 1604;
				this.match(ApexParser.COLON);
				this.state = 1605;
				this.signedInteger();
				}
				break;
			case ApexParser.THIS_FISCAL_YEAR:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 1606;
				this.match(ApexParser.THIS_FISCAL_YEAR);
				}
				break;
			case ApexParser.LAST_FISCAL_YEAR:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 1607;
				this.match(ApexParser.LAST_FISCAL_YEAR);
				}
				break;
			case ApexParser.NEXT_FISCAL_YEAR:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 1608;
				this.match(ApexParser.NEXT_FISCAL_YEAR);
				}
				break;
			case ApexParser.NEXT_N_FISCAL_YEARS_N:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 1609;
				this.match(ApexParser.NEXT_N_FISCAL_YEARS_N);
				this.state = 1610;
				this.match(ApexParser.COLON);
				this.state = 1611;
				this.signedInteger();
				}
				break;
			case ApexParser.LAST_N_FISCAL_YEARS_N:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 1612;
				this.match(ApexParser.LAST_N_FISCAL_YEARS_N);
				this.state = 1613;
				this.match(ApexParser.COLON);
				this.state = 1614;
				this.signedInteger();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public signedInteger(): SignedIntegerContext {
		let _localctx: SignedIntegerContext = new SignedIntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, ApexParser.RULE_signedInteger);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1618;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.ADD || _la === ApexParser.SUB) {
				{
				this.state = 1617;
				_la = this._input.LA(1);
				if (!(_la === ApexParser.ADD || _la === ApexParser.SUB)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 1620;
			this.match(ApexParser.IntegerLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public soqlId(): SoqlIdContext {
		let _localctx: SoqlIdContext = new SoqlIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, ApexParser.RULE_soqlId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1622;
			this.id();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public soslLiteral(): SoslLiteralContext {
		let _localctx: SoslLiteralContext = new SoslLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, ApexParser.RULE_soslLiteral);
		try {
			this.state = 1634;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ApexParser.FindLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1624;
				this.match(ApexParser.FindLiteral);
				this.state = 1625;
				this.soslClauses();
				this.state = 1626;
				this.match(ApexParser.RBRACK);
				}
				break;
			case ApexParser.LBRACK:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1628;
				this.match(ApexParser.LBRACK);
				this.state = 1629;
				this.match(ApexParser.FIND);
				this.state = 1630;
				this.boundExpression();
				this.state = 1631;
				this.soslClauses();
				this.state = 1632;
				this.match(ApexParser.RBRACK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public soslClauses(): SoslClausesContext {
		let _localctx: SoslClausesContext = new SoslClausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, ApexParser.RULE_soslClauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1638;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.IN) {
				{
				this.state = 1636;
				this.match(ApexParser.IN);
				this.state = 1637;
				this.searchGroup();
				}
			}

			this.state = 1642;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.RETURNING) {
				{
				this.state = 1640;
				this.match(ApexParser.RETURNING);
				this.state = 1641;
				this.fieldSpecList();
				}
			}

			this.state = 1648;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 152, this._ctx) ) {
			case 1:
				{
				this.state = 1644;
				this.match(ApexParser.WITH);
				this.state = 1645;
				this.match(ApexParser.DIVISION);
				this.state = 1646;
				this.match(ApexParser.ASSIGN);
				this.state = 1647;
				this.match(ApexParser.StringLiteral);
				}
				break;
			}
			this.state = 1654;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 153, this._ctx) ) {
			case 1:
				{
				this.state = 1650;
				this.match(ApexParser.WITH);
				this.state = 1651;
				this.match(ApexParser.DATA);
				this.state = 1652;
				this.match(ApexParser.CATEGORY);
				this.state = 1653;
				this.filteringExpression();
				}
				break;
			}
			this.state = 1665;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 155, this._ctx) ) {
			case 1:
				{
				this.state = 1656;
				this.match(ApexParser.WITH);
				this.state = 1657;
				this.match(ApexParser.SNIPPET);
				this.state = 1663;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ApexParser.LPAREN) {
					{
					this.state = 1658;
					this.match(ApexParser.LPAREN);
					this.state = 1659;
					this.match(ApexParser.TARGET_LENGTH);
					this.state = 1660;
					this.match(ApexParser.ASSIGN);
					this.state = 1661;
					this.match(ApexParser.IntegerLiteral);
					this.state = 1662;
					this.match(ApexParser.RPAREN);
					}
				}

				}
				break;
			}
			this.state = 1674;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 156, this._ctx) ) {
			case 1:
				{
				this.state = 1667;
				this.match(ApexParser.WITH);
				this.state = 1668;
				this.match(ApexParser.NETWORK);
				this.state = 1669;
				this.match(ApexParser.IN);
				this.state = 1670;
				this.match(ApexParser.LPAREN);
				this.state = 1671;
				this.networkList();
				this.state = 1672;
				this.match(ApexParser.RPAREN);
				}
				break;
			}
			this.state = 1680;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 157, this._ctx) ) {
			case 1:
				{
				this.state = 1676;
				this.match(ApexParser.WITH);
				this.state = 1677;
				this.match(ApexParser.NETWORK);
				this.state = 1678;
				this.match(ApexParser.ASSIGN);
				this.state = 1679;
				this.match(ApexParser.StringLiteral);
				}
				break;
			}
			this.state = 1686;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 158, this._ctx) ) {
			case 1:
				{
				this.state = 1682;
				this.match(ApexParser.WITH);
				this.state = 1683;
				this.match(ApexParser.PRICEBOOKID);
				this.state = 1684;
				this.match(ApexParser.ASSIGN);
				this.state = 1685;
				this.match(ApexParser.StringLiteral);
				}
				break;
			}
			this.state = 1692;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.WITH) {
				{
				this.state = 1688;
				this.match(ApexParser.WITH);
				this.state = 1689;
				this.match(ApexParser.METADATA);
				this.state = 1690;
				this.match(ApexParser.ASSIGN);
				this.state = 1691;
				this.match(ApexParser.StringLiteral);
				}
			}

			this.state = 1695;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.LIMIT) {
				{
				this.state = 1694;
				this.limitClause();
				}
			}

			this.state = 1699;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.UPDATE) {
				{
				this.state = 1697;
				this.match(ApexParser.UPDATE);
				this.state = 1698;
				this.updateList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public searchGroup(): SearchGroupContext {
		let _localctx: SearchGroupContext = new SearchGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, ApexParser.RULE_searchGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1701;
			_la = this._input.LA(1);
			if (!(_la === ApexParser.ALL || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (ApexParser.EMAIL - 161)) | (1 << (ApexParser.NAME - 161)) | (1 << (ApexParser.PHONE - 161)) | (1 << (ApexParser.SIDEBAR - 161)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1702;
			this.match(ApexParser.FIELDS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldSpecList(): FieldSpecListContext {
		let _localctx: FieldSpecListContext = new FieldSpecListContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, ApexParser.RULE_fieldSpecList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1704;
			this.fieldSpec();
			this.state = 1709;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1705;
					this.match(ApexParser.COMMA);
					this.state = 1706;
					this.fieldSpecList();
					}
					}
				}
				this.state = 1711;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 162, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldSpec(): FieldSpecContext {
		let _localctx: FieldSpecContext = new FieldSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, ApexParser.RULE_fieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1712;
			this.soslId();
			this.state = 1738;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.LPAREN) {
				{
				this.state = 1713;
				this.match(ApexParser.LPAREN);
				this.state = 1714;
				this.fieldList();
				this.state = 1717;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ApexParser.WHERE) {
					{
					this.state = 1715;
					this.match(ApexParser.WHERE);
					this.state = 1716;
					this.logicalExpression();
					}
				}

				this.state = 1723;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ApexParser.USING) {
					{
					this.state = 1719;
					this.match(ApexParser.USING);
					this.state = 1720;
					this.match(ApexParser.LISTVIEW);
					this.state = 1721;
					this.match(ApexParser.ASSIGN);
					this.state = 1722;
					this.soslId();
					}
				}

				this.state = 1728;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ApexParser.ORDER) {
					{
					this.state = 1725;
					this.match(ApexParser.ORDER);
					this.state = 1726;
					this.match(ApexParser.BY);
					this.state = 1727;
					this.fieldOrderList();
					}
				}

				this.state = 1731;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ApexParser.LIMIT) {
					{
					this.state = 1730;
					this.limitClause();
					}
				}

				this.state = 1734;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ApexParser.OFFSET) {
					{
					this.state = 1733;
					this.offsetClause();
					}
				}

				this.state = 1736;
				this.match(ApexParser.RPAREN);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldList(): FieldListContext {
		let _localctx: FieldListContext = new FieldListContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, ApexParser.RULE_fieldList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1740;
			this.soslId();
			this.state = 1745;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1741;
					this.match(ApexParser.COMMA);
					this.state = 1742;
					this.fieldList();
					}
					}
				}
				this.state = 1747;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public updateList(): UpdateListContext {
		let _localctx: UpdateListContext = new UpdateListContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, ApexParser.RULE_updateList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1748;
			this.updateType();
			this.state = 1751;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.COMMA) {
				{
				this.state = 1749;
				this.match(ApexParser.COMMA);
				this.state = 1750;
				this.updateList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public updateType(): UpdateTypeContext {
		let _localctx: UpdateTypeContext = new UpdateTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, ApexParser.RULE_updateType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1753;
			_la = this._input.LA(1);
			if (!(_la === ApexParser.TRACKING || _la === ApexParser.VIEWSTAT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public networkList(): NetworkListContext {
		let _localctx: NetworkListContext = new NetworkListContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, ApexParser.RULE_networkList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1755;
			this.match(ApexParser.StringLiteral);
			this.state = 1758;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.COMMA) {
				{
				this.state = 1756;
				this.match(ApexParser.COMMA);
				this.state = 1757;
				this.networkList();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public soslId(): SoslIdContext {
		let _localctx: SoslIdContext = new SoslIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, ApexParser.RULE_soslId);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1760;
			this.id();
			this.state = 1765;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1761;
					this.match(ApexParser.DOT);
					this.state = 1762;
					this.soslId();
					}
					}
				}
				this.state = 1767;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, ApexParser.RULE_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1768;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.SELECT - 34)) | (1 << (ApexParser.COUNT - 34)) | (1 << (ApexParser.FROM - 34)) | (1 << (ApexParser.AS - 34)) | (1 << (ApexParser.USING - 34)) | (1 << (ApexParser.SCOPE - 34)) | (1 << (ApexParser.WHERE - 34)) | (1 << (ApexParser.ORDER - 34)) | (1 << (ApexParser.BY - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LIMIT - 66)) | (1 << (ApexParser.SOQLAND - 66)) | (1 << (ApexParser.SOQLOR - 66)) | (1 << (ApexParser.NOT - 66)) | (1 << (ApexParser.AVG - 66)) | (1 << (ApexParser.COUNT_DISTINCT - 66)) | (1 << (ApexParser.MIN - 66)) | (1 << (ApexParser.MAX - 66)) | (1 << (ApexParser.SUM - 66)) | (1 << (ApexParser.TYPEOF - 66)) | (1 << (ApexParser.END - 66)) | (1 << (ApexParser.THEN - 66)) | (1 << (ApexParser.LIKE - 66)) | (1 << (ApexParser.IN - 66)) | (1 << (ApexParser.INCLUDES - 66)) | (1 << (ApexParser.EXCLUDES - 66)) | (1 << (ApexParser.ASC - 66)) | (1 << (ApexParser.DESC - 66)) | (1 << (ApexParser.NULLS - 66)) | (1 << (ApexParser.FIRST - 66)) | (1 << (ApexParser.LAST - 66)) | (1 << (ApexParser.GROUP - 66)) | (1 << (ApexParser.ALL - 66)) | (1 << (ApexParser.ROWS - 66)) | (1 << (ApexParser.VIEW - 66)) | (1 << (ApexParser.HAVING - 66)) | (1 << (ApexParser.ROLLUP - 66)) | (1 << (ApexParser.TOLABEL - 66)) | (1 << (ApexParser.OFFSET - 66)) | (1 << (ApexParser.DATA - 66)) | (1 << (ApexParser.CATEGORY - 66)) | (1 << (ApexParser.AT - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (ApexParser.ABOVE - 98)) | (1 << (ApexParser.BELOW - 98)) | (1 << (ApexParser.ABOVE_OR_BELOW - 98)) | (1 << (ApexParser.SECURITY_ENFORCED - 98)) | (1 << (ApexParser.REFERENCE - 98)) | (1 << (ApexParser.CUBE - 98)) | (1 << (ApexParser.FORMAT - 98)) | (1 << (ApexParser.TRACKING - 98)) | (1 << (ApexParser.VIEWSTAT - 98)) | (1 << (ApexParser.CALENDAR_MONTH - 98)) | (1 << (ApexParser.CALENDAR_QUARTER - 98)) | (1 << (ApexParser.CALENDAR_YEAR - 98)) | (1 << (ApexParser.DAY_IN_MONTH - 98)) | (1 << (ApexParser.DAY_IN_WEEK - 98)) | (1 << (ApexParser.DAY_IN_YEAR - 98)) | (1 << (ApexParser.DAY_ONLY - 98)) | (1 << (ApexParser.FISCAL_MONTH - 98)) | (1 << (ApexParser.FISCAL_QUARTER - 98)) | (1 << (ApexParser.FISCAL_YEAR - 98)) | (1 << (ApexParser.HOUR_IN_DAY - 98)) | (1 << (ApexParser.WEEK_IN_MONTH - 98)) | (1 << (ApexParser.WEEK_IN_YEAR - 98)) | (1 << (ApexParser.CONVERT_TIMEZONE - 98)) | (1 << (ApexParser.YESTERDAY - 98)) | (1 << (ApexParser.TODAY - 98)) | (1 << (ApexParser.TOMORROW - 98)) | (1 << (ApexParser.LAST_WEEK - 98)) | (1 << (ApexParser.THIS_WEEK - 98)) | (1 << (ApexParser.NEXT_WEEK - 98)) | (1 << (ApexParser.LAST_MONTH - 98)) | (1 << (ApexParser.THIS_MONTH - 98)) | (1 << (ApexParser.NEXT_MONTH - 98)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (ApexParser.LAST_90_DAYS - 130)) | (1 << (ApexParser.NEXT_90_DAYS - 130)) | (1 << (ApexParser.LAST_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_DAYS_N - 130)) | (1 << (ApexParser.NEXT_N_WEEKS_N - 130)) | (1 << (ApexParser.LAST_N_WEEKS_N - 130)) | (1 << (ApexParser.NEXT_N_MONTHS_N - 130)) | (1 << (ApexParser.LAST_N_MONTHS_N - 130)) | (1 << (ApexParser.THIS_QUARTER - 130)) | (1 << (ApexParser.LAST_QUARTER - 130)) | (1 << (ApexParser.NEXT_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_YEAR - 130)) | (1 << (ApexParser.LAST_YEAR - 130)) | (1 << (ApexParser.NEXT_YEAR - 130)) | (1 << (ApexParser.NEXT_N_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_YEARS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_QUARTER - 130)) | (1 << (ApexParser.LAST_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_FISCAL_QUARTER - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_QUARTERS_N - 130)) | (1 << (ApexParser.THIS_FISCAL_YEAR - 130)) | (1 << (ApexParser.LAST_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_FISCAL_YEAR - 130)) | (1 << (ApexParser.NEXT_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.LAST_N_FISCAL_YEARS_N - 130)) | (1 << (ApexParser.FIND - 130)) | (1 << (ApexParser.EMAIL - 130)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (ApexParser.NAME - 162)) | (1 << (ApexParser.PHONE - 162)) | (1 << (ApexParser.SIDEBAR - 162)) | (1 << (ApexParser.FIELDS - 162)) | (1 << (ApexParser.METADATA - 162)) | (1 << (ApexParser.PRICEBOOKID - 162)) | (1 << (ApexParser.NETWORK - 162)) | (1 << (ApexParser.SNIPPET - 162)) | (1 << (ApexParser.TARGET_LENGTH - 162)) | (1 << (ApexParser.DIVISION - 162)) | (1 << (ApexParser.RETURNING - 162)) | (1 << (ApexParser.LISTVIEW - 162)))) !== 0) || _la === ApexParser.Identifier)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public anyId(): AnyIdContext {
		let _localctx: AnyIdContext = new AnyIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, ApexParser.RULE_anyId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1770;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.ABSTRACT) | (1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.BREAK) | (1 << ApexParser.CATCH) | (1 << ApexParser.CLASS) | (1 << ApexParser.CONTINUE) | (1 << ApexParser.DELETE) | (1 << ApexParser.DO) | (1 << ApexParser.ELSE) | (1 << ApexParser.ENUM) | (1 << ApexParser.EXTENDS) | (1 << ApexParser.FINAL) | (1 << ApexParser.FINALLY) | (1 << ApexParser.FOR) | (1 << ApexParser.GET) | (1 << ApexParser.GLOBAL) | (1 << ApexParser.IF) | (1 << ApexParser.IMPLEMENTS) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSERT) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.INTERFACE) | (1 << ApexParser.MERGE) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL) | (1 << ApexParser.ON) | (1 << ApexParser.OVERRIDE) | (1 << ApexParser.PRIVATE) | (1 << ApexParser.PROTECTED) | (1 << ApexParser.PUBLIC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ApexParser.RETURN - 32)) | (1 << (ApexParser.SET - 32)) | (1 << (ApexParser.SHARING - 32)) | (1 << (ApexParser.STATIC - 32)) | (1 << (ApexParser.SUPER - 32)) | (1 << (ApexParser.SWITCH - 32)) | (1 << (ApexParser.TESTMETHOD - 32)) | (1 << (ApexParser.THIS - 32)) | (1 << (ApexParser.THROW - 32)) | (1 << (ApexParser.TRANSIENT - 32)) | (1 << (ApexParser.TRIGGER - 32)) | (1 << (ApexParser.TRY - 32)) | (1 << (ApexParser.UNDELETE - 32)) | (1 << (ApexParser.UPDATE - 32)) | (1 << (ApexParser.UPSERT - 32)) | (1 << (ApexParser.VIRTUAL - 32)) | (1 << (ApexParser.WEBSERVICE - 32)) | (1 << (ApexParser.WHEN - 32)) | (1 << (ApexParser.WHILE - 32)) | (1 << (ApexParser.WITH - 32)) | (1 << (ApexParser.WITHOUT - 32)) | (1 << (ApexParser.LIST - 32)) | (1 << (ApexParser.MAP - 32)) | (1 << (ApexParser.SELECT - 32)) | (1 << (ApexParser.COUNT - 32)) | (1 << (ApexParser.FROM - 32)) | (1 << (ApexParser.AS - 32)) | (1 << (ApexParser.USING - 32)) | (1 << (ApexParser.SCOPE - 32)) | (1 << (ApexParser.WHERE - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (ApexParser.ORDER - 64)) | (1 << (ApexParser.BY - 64)) | (1 << (ApexParser.LIMIT - 64)) | (1 << (ApexParser.SOQLAND - 64)) | (1 << (ApexParser.SOQLOR - 64)) | (1 << (ApexParser.NOT - 64)) | (1 << (ApexParser.AVG - 64)) | (1 << (ApexParser.COUNT_DISTINCT - 64)) | (1 << (ApexParser.MIN - 64)) | (1 << (ApexParser.MAX - 64)) | (1 << (ApexParser.SUM - 64)) | (1 << (ApexParser.TYPEOF - 64)) | (1 << (ApexParser.END - 64)) | (1 << (ApexParser.THEN - 64)) | (1 << (ApexParser.LIKE - 64)) | (1 << (ApexParser.IN - 64)) | (1 << (ApexParser.INCLUDES - 64)) | (1 << (ApexParser.EXCLUDES - 64)) | (1 << (ApexParser.ASC - 64)) | (1 << (ApexParser.DESC - 64)) | (1 << (ApexParser.NULLS - 64)) | (1 << (ApexParser.FIRST - 64)) | (1 << (ApexParser.LAST - 64)) | (1 << (ApexParser.GROUP - 64)) | (1 << (ApexParser.ALL - 64)) | (1 << (ApexParser.ROWS - 64)) | (1 << (ApexParser.VIEW - 64)) | (1 << (ApexParser.HAVING - 64)) | (1 << (ApexParser.ROLLUP - 64)) | (1 << (ApexParser.TOLABEL - 64)) | (1 << (ApexParser.OFFSET - 64)) | (1 << (ApexParser.DATA - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (ApexParser.CATEGORY - 96)) | (1 << (ApexParser.AT - 96)) | (1 << (ApexParser.ABOVE - 96)) | (1 << (ApexParser.BELOW - 96)) | (1 << (ApexParser.ABOVE_OR_BELOW - 96)) | (1 << (ApexParser.SECURITY_ENFORCED - 96)) | (1 << (ApexParser.REFERENCE - 96)) | (1 << (ApexParser.CUBE - 96)) | (1 << (ApexParser.FORMAT - 96)) | (1 << (ApexParser.CALENDAR_MONTH - 96)) | (1 << (ApexParser.CALENDAR_QUARTER - 96)) | (1 << (ApexParser.CALENDAR_YEAR - 96)) | (1 << (ApexParser.DAY_IN_MONTH - 96)) | (1 << (ApexParser.DAY_IN_WEEK - 96)) | (1 << (ApexParser.DAY_IN_YEAR - 96)) | (1 << (ApexParser.DAY_ONLY - 96)) | (1 << (ApexParser.FISCAL_MONTH - 96)) | (1 << (ApexParser.FISCAL_QUARTER - 96)) | (1 << (ApexParser.FISCAL_YEAR - 96)) | (1 << (ApexParser.HOUR_IN_DAY - 96)) | (1 << (ApexParser.WEEK_IN_MONTH - 96)) | (1 << (ApexParser.WEEK_IN_YEAR - 96)) | (1 << (ApexParser.CONVERT_TIMEZONE - 96)) | (1 << (ApexParser.YESTERDAY - 96)) | (1 << (ApexParser.TODAY - 96)) | (1 << (ApexParser.TOMORROW - 96)) | (1 << (ApexParser.LAST_WEEK - 96)) | (1 << (ApexParser.THIS_WEEK - 96)) | (1 << (ApexParser.NEXT_WEEK - 96)) | (1 << (ApexParser.LAST_MONTH - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (ApexParser.THIS_MONTH - 128)) | (1 << (ApexParser.NEXT_MONTH - 128)) | (1 << (ApexParser.LAST_90_DAYS - 128)) | (1 << (ApexParser.NEXT_90_DAYS - 128)) | (1 << (ApexParser.LAST_N_DAYS_N - 128)) | (1 << (ApexParser.NEXT_N_DAYS_N - 128)) | (1 << (ApexParser.NEXT_N_WEEKS_N - 128)) | (1 << (ApexParser.LAST_N_WEEKS_N - 128)) | (1 << (ApexParser.NEXT_N_MONTHS_N - 128)) | (1 << (ApexParser.LAST_N_MONTHS_N - 128)) | (1 << (ApexParser.THIS_QUARTER - 128)) | (1 << (ApexParser.LAST_QUARTER - 128)) | (1 << (ApexParser.NEXT_QUARTER - 128)) | (1 << (ApexParser.NEXT_N_QUARTERS_N - 128)) | (1 << (ApexParser.LAST_N_QUARTERS_N - 128)) | (1 << (ApexParser.THIS_YEAR - 128)) | (1 << (ApexParser.LAST_YEAR - 128)) | (1 << (ApexParser.NEXT_YEAR - 128)) | (1 << (ApexParser.NEXT_N_YEARS_N - 128)) | (1 << (ApexParser.LAST_N_YEARS_N - 128)) | (1 << (ApexParser.THIS_FISCAL_QUARTER - 128)) | (1 << (ApexParser.LAST_FISCAL_QUARTER - 128)) | (1 << (ApexParser.NEXT_FISCAL_QUARTER - 128)) | (1 << (ApexParser.NEXT_N_FISCAL_QUARTERS_N - 128)) | (1 << (ApexParser.LAST_N_FISCAL_QUARTERS_N - 128)) | (1 << (ApexParser.THIS_FISCAL_YEAR - 128)) | (1 << (ApexParser.LAST_FISCAL_YEAR - 128)) | (1 << (ApexParser.NEXT_FISCAL_YEAR - 128)) | (1 << (ApexParser.NEXT_N_FISCAL_YEARS_N - 128)) | (1 << (ApexParser.LAST_N_FISCAL_YEARS_N - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (ApexParser.FIND - 160)) | (1 << (ApexParser.EMAIL - 160)) | (1 << (ApexParser.NAME - 160)) | (1 << (ApexParser.PHONE - 160)) | (1 << (ApexParser.SIDEBAR - 160)) | (1 << (ApexParser.FIELDS - 160)) | (1 << (ApexParser.METADATA - 160)) | (1 << (ApexParser.PRICEBOOKID - 160)) | (1 << (ApexParser.NETWORK - 160)) | (1 << (ApexParser.SNIPPET - 160)) | (1 << (ApexParser.TARGET_LENGTH - 160)) | (1 << (ApexParser.DIVISION - 160)) | (1 << (ApexParser.RETURNING - 160)) | (1 << (ApexParser.LISTVIEW - 160)))) !== 0) || _la === ApexParser.Identifier)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 72:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 13);

		case 1:
			return this.precpred(this._ctx, 12);

		case 2:
			return this.precpred(this._ctx, 11);

		case 3:
			return this.precpred(this._ctx, 10);

		case 4:
			return this.precpred(this._ctx, 8);

		case 5:
			return this.precpred(this._ctx, 7);

		case 6:
			return this.precpred(this._ctx, 6);

		case 7:
			return this.precpred(this._ctx, 5);

		case 8:
			return this.precpred(this._ctx, 4);

		case 9:
			return this.precpred(this._ctx, 3);

		case 10:
			return this.precpred(this._ctx, 2);

		case 11:
			return this.precpred(this._ctx, 1);

		case 12:
			return this.precpred(this._ctx, 22);

		case 13:
			return this.precpred(this._ctx, 21);

		case 14:
			return this.precpred(this._ctx, 16);

		case 15:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 4;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xEA\u06EF\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x07\x02\u0121\n\x02\f\x02\x0E\x02\u0124\v\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x05" +
		"\x07\x05\u0131\n\x05\f\x05\x0E\x05\u0134\v\x05\x03\x05\x03\x05\x07\x05" +
		"\u0138\n\x05\f\x05\x0E\x05\u013B\v\x05\x03\x05\x03\x05\x07\x05\u013F\n" +
		"\x05\f\x05\x0E\x05\u0142\v\x05\x03\x05\x05\x05\u0145\n\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06\u014B\n\x06\x03\x06\x03\x06\x05\x06\u014F" +
		"\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\u0157\n" +
		"\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x07\b\u015E\n\b\f\b\x0E\b\u0161" +
		"\v\b\x03\t\x03\t\x03\t\x03\t\x05\t\u0167\n\t\x03\t\x03\t\x03\n\x03\n\x03" +
		"\n\x07\n\u016E\n\n\f\n\x0E\n\u0171\v\n\x03\v\x03\v\x07\v\u0175\n\v\f\v" +
		"\x0E\v\u0178\v\v\x03\v\x03\v\x03\f\x03\f\x07\f\u017E\n\f\f\f\x0E\f\u0181" +
		"\v\f\x03\f\x03\f\x03\r\x03\r\x05\r\u0187\n\r\x03\r\x03\r\x07\r\u018B\n" +
		"\r\f\r\x0E\r\u018E\v\r\x03\r\x05\r\u0191\n\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u01A6\n\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u01AF" +
		"\n\x0F\x03\x10\x03\x10\x05\x10\u01B3\n\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x05\x10\u01B9\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u01C7\n\x13\f" +
		"\x13\x0E\x13\u01CA\v\x13\x03\x13\x03\x13\x03\x14\x07\x14\u01CF\n\x14\f" +
		"\x14\x0E\x14\u01D2\v\x14\x03\x14\x03\x14\x05\x14\u01D6\n\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x07\x15\u01DF\n\x15\f\x15" +
		"\x0E\x15\u01E2\v\x15\x03\x16\x03\x16\x03\x16\x05\x16\u01E7\n\x16\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x07\x17\u01ED\n\x17\f\x17\x0E\x17\u01F0\v\x17" +
		"\x03\x17\x05\x17\u01F3\n\x17\x05\x17\u01F5\n\x17\x03\x17\x03\x17\x03\x18" +
		"\x03\x18\x03\x18\x07\x18\u01FC\n\x18\f\x18\x0E\x18\u01FF\v\x18\x03\x18" +
		"\x03\x18\x03\x19\x03\x19\x07\x19\u0205\n\x19\f\x19\x0E\x19\u0208\v\x19" +
		"\x03\x1A\x03\x1A\x05\x1A\u020C\n\x1A\x03\x1A\x03\x1A\x05\x1A\u0210\n\x1A" +
		"\x03\x1A\x03\x1A\x05\x1A\u0214\n\x1A\x03\x1A\x03\x1A\x05\x1A\u0218\n\x1A" +
		"\x05\x1A\u021A\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x05" +
		"\x1C\u0222\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0229" +
		"\n\x1D\f\x1D\x0E\x1D\u022C\v\x1D\x03\x1E\x07\x1E\u022F\n\x1E\f\x1E\x0E" +
		"\x1E\u0232\v\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x07\x1F" +
		"\u023A\n\x1F\f\x1F\x0E\x1F\u023D\v\x1F\x03 \x03 \x03!\x03!\x03!\x03!\x03" +
		"!\x05!\u0246\n!\x03!\x05!\u0249\n!\x03\"\x03\"\x05\"\u024D\n\"\x03\"\x07" +
		"\"\u0250\n\"\f\"\x0E\"\u0253\v\"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x05" +
		"$\u025C\n$\x03%\x03%\x03%\x03%\x07%\u0262\n%\f%\x0E%\u0265\v%\x05%\u0267" +
		"\n%\x03%\x05%\u026A\n%\x03%\x03%\x03&\x03&\x07&\u0270\n&\f&\x0E&\u0273" +
		"\v&\x03&\x03&\x03\'\x03\'\x03\'\x03(\x07(\u027B\n(\f(\x0E(\u027E\v(\x03" +
		"(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03" +
		")\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u0297\n)\x03*\x03*\x03" +
		"*\x03*\x03*\x05*\u029E\n*\x03+\x03+\x03+\x03+\x03+\x06+\u02A5\n+\r+\x0E" +
		"+\u02A6\x03+\x03+\x03,\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x07-\u02B3\n" +
		"-\f-\x0E-\u02B6\v-\x03-\x03-\x03-\x05-\u02BB\n-\x03.\x05.\u02BE\n.\x03" +
		".\x03.\x03.\x03.\x03.\x05.\u02C5\n.\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
		"0\x030\x030\x030\x031\x031\x031\x031\x031\x031\x032\x032\x032\x062\u02DA" +
		"\n2\r2\x0E2\u02DB\x032\x052\u02DF\n2\x032\x052\u02E2\n2\x033\x033\x05" +
		"3\u02E6\n3\x033\x033\x034\x034\x034\x034\x035\x035\x035\x036\x036\x03" +
		"6\x037\x037\x037\x037\x038\x038\x038\x038\x039\x039\x039\x039\x03:\x03" +
		":\x03:\x03:\x03;\x03;\x03;\x05;\u0307\n;\x03;\x03;\x03<\x03<\x03<\x03" +
		"<\x03<\x03=\x03=\x03=\x05=\u0313\n=\x03=\x03=\x03=\x03>\x03>\x03>\x03" +
		"?\x07?\u031C\n?\f?\x0E?\u031F\v?\x03?\x03?\x05?\u0323\n?\x03@\x03@\x03" +
		"@\x05@\u0328\n@\x03A\x03A\x03A\x05A\u032D\nA\x03B\x03B\x03B\x07B\u0332" +
		"\nB\fB\x0EB\u0335\vB\x03B\x03B\x03B\x03B\x03B\x03C\x03C\x03C\x03D\x03" +
		"D\x05D\u0341\nD\x03D\x03D\x05D\u0345\nD\x03D\x03D\x05D\u0349\nD\x05D\u034B" +
		"\nD\x03E\x03E\x05E\u034F\nE\x03F\x03F\x03F\x03F\x03F\x03G\x03G\x03H\x03" +
		"H\x03H\x03H\x03I\x03I\x03I\x07I\u035F\nI\fI\x0EI\u0362\vI\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x03J\x05J\u0376\nJ\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x05J\u0386\nJ\x03J\x03J\x03J\x03J\x05J\u038C\nJ" +
		"\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x05J\u03AE\nJ\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x07J\u03BA\nJ\fJ\x0EJ\u03BD\vJ\x03K\x03K\x03K\x03K\x03" +
		"K\x03K\x03K\x03K\x03K\x03K\x05K\u03C9\nK\x03L\x03L\x03L\x05L\u03CE\nL" +
		"\x03L\x03L\x03L\x03L\x03L\x05L\u03D5\nL\x03L\x03L\x03L\x03L\x05L\u03DB" +
		"\nL\x03L\x05L\u03DE\nL\x03M\x03M\x03M\x05M\u03E3\nM\x03M\x03M\x03N\x03" +
		"N\x03N\x03N\x03N\x03N\x05N\u03ED\nN\x03O\x03O\x03O\x07O\u03F2\nO\fO\x0E" +
		"O\u03F5\vO\x03P\x03P\x03P\x03P\x03P\x05P\u03FC\nP\x03Q\x03Q\x03Q\x03R" +
		"\x03R\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x05S\u040A\nS\x05S\u040C\nS\x03" +
		"T\x03T\x03T\x03T\x07T\u0412\nT\fT\x0ET\u0415\vT\x03T\x03T\x03U\x03U\x03" +
		"U\x03U\x03V\x03V\x03V\x03V\x07V\u0421\nV\fV\x0EV\u0424\vV\x03V\x03V\x03" +
		"W\x03W\x05W\u042A\nW\x03W\x03W\x03X\x03X\x03X\x03X\x03Y\x03Y\x03Y\x03" +
		"Y\x03Y\x05Y\u0437\nY\x03Y\x05Y\u043A\nY\x03Y\x05Y\u043D\nY\x03Y\x05Y\u0440" +
		"\nY\x03Y\x05Y\u0443\nY\x03Y\x05Y\u0446\nY\x03Y\x05Y\u0449\nY\x03Y\x05" +
		"Y\u044C\nY\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z\u0455\nZ\x03Z\x05Z" +
		"\u0458\nZ\x03Z\x05Z\u045B\nZ\x03Z\x03Z\x03[\x03[\x03[\x07[\u0462\n[\f" +
		"[\x0E[\u0465\v[\x03\\\x03\\\x05\\\u0469\n\\\x03\\\x03\\\x05\\\u046D\n" +
		"\\\x03\\\x03\\\x03\\\x03\\\x05\\\u0473\n\\\x03\\\x05\\\u0476\n\\\x03]" +
		"\x03]\x03]\x07]\u047B\n]\f]\x0E]\u047E\v]\x03^\x03^\x05^\u0482\n^\x03" +
		"^\x03^\x03^\x05^\u0487\n^\x07^\u0489\n^\f^\x0E^\u048C\v^\x03_\x03_\x03" +
		"_\x07_\u0491\n_\f_\x0E_\u0494\v_\x03`\x03`\x05`\u0498\n`\x03`\x03`\x05" +
		"`\u049C\n`\x05`\u049E\n`\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a" +
		"\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03" +
		"a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03" +
		"a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03" +
		"a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03" +
		"a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03" +
		"a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03" +
		"a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03a\x03" +
		"a\x03a\x05a\u050C\na\x03b\x03b\x03b\x03b\x03b\x03b\x05b\u0514\nb\x03c" +
		"\x03c\x03c\x06c\u0519\nc\rc\x0Ec\u051A\x03c\x05c\u051E\nc\x03c\x03c\x03" +
		"d\x03d\x03d\x03d\x03d\x03e\x03e\x03e\x03f\x03f\x03f\x07f\u052D\nf\ff\x0E" +
		"f\u0530\vf\x03g\x03g\x03g\x03g\x03h\x03h\x03h\x03i\x03i\x03i\x07i\u053C" +
		"\ni\fi\x0Ei\u053F\vi\x03i\x03i\x03i\x07i\u0544\ni\fi\x0Ei\u0547\vi\x03" +
		"i\x03i\x05i\u054B\ni\x03j\x03j\x03j\x03j\x03j\x05j\u0552\nj\x03k\x03k" +
		"\x03k\x03k\x03k\x03k\x03k\x03k\x05k\u055C\nk\x03l\x03l\x03l\x03l\x03l" +
		"\x03l\x03l\x03l\x03l\x03l\x03l\x03l\x03l\x03l\x03l\x05l\u056D\nl\x03m" +
		"\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x03" +
		"m\x03m\x05m\u057F\nm\x03n\x03n\x03n\x03n\x07n\u0585\nn\fn\x0En\u0588\v" +
		"n\x03n\x03n\x03o\x03o\x03o\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x05" +
		"p\u0597\np\x03q\x03q\x03q\x07q\u059C\nq\fq\x0Eq\u059F\vq\x03r\x03r\x03" +
		"r\x03r\x03s\x03s\x03s\x03s\x03s\x07s\u05AA\ns\fs\x0Es\u05AD\vs\x03s\x03" +
		"s\x05s\u05B1\ns\x03t\x03t\x03u\x03u\x03u\x03u\x03u\x05u\u05BA\nu\x03u" +
		"\x03u\x03u\x03u\x03u\x03u\x03u\x07u\u05C3\nu\fu\x0Eu\u05C6\vu\x03u\x03" +
		"u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x07u\u05D1\nu\fu\x0Eu\u05D4\vu\x03" +
		"u\x03u\x05u\u05D8\nu\x03v\x03v\x03v\x03v\x03w\x03w\x03w\x07w\u05E1\nw" +
		"\fw\x0Ew\u05E4\vw\x03x\x03x\x05x\u05E8\nx\x03x\x03x\x05x\u05EC\nx\x03" +
		"x\x03x\x05x\u05F0\nx\x03x\x03x\x05x\u05F4\nx\x05x\u05F6\nx\x03y\x03y\x03" +
		"y\x03y\x05y\u05FC\ny\x03z\x03z\x03z\x03z\x05z\u0602\nz\x03{\x03{\x03{" +
		"\x03|\x03|\x07|\u0609\n|\f|\x0E|\u060C\v|\x03}\x03}\x03}\x03~\x03~\x03" +
		"~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03" +
		"~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03" +
		"~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03" +
		"~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03~\x03" +
		"~\x03~\x03~\x03~\x03~\x03~\x03~\x05~\u0652\n~\x03\x7F\x05\x7F\u0655\n" +
		"\x7F\x03\x7F\x03\x7F\x03\x80\x03\x80\x03\x81\x03\x81\x03\x81\x03\x81\x03" +
		"\x81\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x05\x81\u0665\n\x81\x03\x82" +
		"\x03\x82\x05\x82\u0669\n\x82\x03\x82\x03\x82\x05\x82\u066D\n\x82\x03\x82" +
		"\x03\x82\x03\x82\x03\x82\x05\x82\u0673\n\x82\x03\x82\x03\x82\x03\x82\x03" +
		"\x82\x05\x82\u0679\n\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82" +
		"\x03\x82\x05\x82\u0682\n\x82\x05\x82\u0684\n\x82\x03\x82\x03\x82\x03\x82" +
		"\x03\x82\x03\x82\x03\x82\x03\x82\x05\x82\u068D\n\x82\x03\x82\x03\x82\x03" +
		"\x82\x03\x82\x05\x82\u0693\n\x82\x03\x82\x03\x82\x03\x82\x03\x82\x05\x82" +
		"\u0699\n\x82\x03\x82\x03\x82\x03\x82\x03\x82\x05\x82\u069F\n\x82\x03\x82" +
		"\x05\x82\u06A2\n\x82\x03\x82\x03\x82\x05\x82\u06A6\n\x82\x03\x83\x03\x83" +
		"\x03\x83\x03\x84\x03\x84\x03\x84\x07\x84\u06AE\n\x84\f\x84\x0E\x84\u06B1" +
		"\v\x84\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x05\x85\u06B8\n\x85\x03" +
		"\x85\x03\x85\x03\x85\x03\x85\x05\x85\u06BE\n\x85\x03\x85\x03\x85\x03\x85" +
		"\x05\x85\u06C3\n\x85\x03\x85\x05\x85\u06C6\n\x85\x03\x85\x05\x85\u06C9" +
		"\n\x85\x03\x85\x03\x85\x05\x85\u06CD\n\x85\x03\x86\x03\x86\x03\x86\x07" +
		"\x86\u06D2\n\x86\f\x86\x0E\x86\u06D5\v\x86\x03\x87\x03\x87\x03\x87\x05" +
		"\x87\u06DA\n\x87\x03\x88\x03\x88\x03\x89\x03\x89\x03\x89\x05\x89\u06E1" +
		"\n\x89\x03\x8A\x03\x8A\x03\x8A\x07\x8A\u06E6\n\x8A\f\x8A\x0E\x8A\u06E9" +
		"\v\x8A\x03\x8B\x03\x8B\x03\x8C\x03\x8C\x03\x8C\x02\x02\x03\x92\x8D\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
		",\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02" +
		"H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02" +
		"d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02" +
		"\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02" +
		"\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02" +
		"\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02" +
		"\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02" +
		"\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02" +
		"\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02" +
		"\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02" +
		"\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108\x02\u010A\x02\u010C" +
		"\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116\x02\x02\x16\x03\x02" +
		"\x04\x05\x05\x02\n\n\x17\x17/0\x04\x02\x1C\x1C\xB1\xB5\x03\x02\xCF\xD2" +
		"\x03\x02\xC3\xC4\x04\x02\xD3\xD4\xD8\xD8\x03\x02\xD1\xD2\x03\x02\xC1\xC2" +
		"\x03\x02\xC8\xCC\x04\x02\xC0\xC0\xDA\xE4\x04\x02\xBF\xBF\xC5\xC5\x03\x02" +
		"\xCF\xD0\x03\x02cf\x03\x02TU\x03\x02WX\x05\x0200\\\\hh\x04\x02ZZ\xA3\xA6" +
		"\x03\x02kl\x0E\x02\x04\x05\x12\x12\x16\x16\x18\x18$%((,-5578;\x9F\xA2" +
		"\xAF\xE6\xE6\b\x02\x03\"$24jm\x9F\xA2\xAF\xE6\xE6\x02\u07AD\x02\u0118" +
		"\x03\x02\x02\x02\x04\u0129\x03\x02\x02\x02\x06\u012C\x03\x02\x02\x02\b" +
		"\u0144\x03\x02\x02\x02\n\u0146\x03\x02\x02\x02\f\u0152\x03\x02\x02\x02" +
		"\x0E\u015A\x03\x02\x02\x02\x10\u0162\x03\x02\x02\x02\x12\u016A\x03\x02" +
		"\x02\x02\x14\u0172\x03\x02\x02\x02\x16\u017B\x03\x02\x02\x02\x18\u0190" +
		"\x03\x02\x02\x02\x1A\u01A5\x03\x02\x02\x02\x1C\u01AE\x03\x02\x02\x02\x1E" +
		"\u01B2\x03\x02\x02\x02 \u01BA\x03\x02\x02\x02\"\u01BE\x03\x02\x02\x02" +
		"$\u01C2\x03\x02\x02\x02&\u01D0\x03\x02\x02\x02(\u01DB\x03\x02\x02\x02" +
		"*\u01E3\x03\x02\x02\x02,\u01E8\x03\x02\x02\x02.\u01F8\x03\x02\x02\x02" +
		"0\u0206\x03\x02\x02\x022\u0219\x03\x02\x02\x024\u021B\x03\x02\x02\x02" +
		"6\u021F\x03\x02\x02\x028\u0225\x03\x02\x02\x02:\u0230\x03\x02\x02\x02" +
		"<\u0236\x03\x02\x02\x02>\u023E\x03\x02\x02\x02@\u0240\x03\x02\x02\x02" +
		"B\u024A\x03\x02\x02\x02D\u0254\x03\x02\x02\x02F\u025B\x03\x02\x02\x02" +
		"H\u025D\x03\x02\x02\x02J\u026D\x03\x02\x02\x02L\u0276\x03\x02\x02\x02" +
		"N\u027C\x03\x02\x02\x02P\u0296\x03\x02\x02\x02R\u0298\x03\x02\x02\x02" +
		"T\u029F\x03\x02\x02\x02V\u02AA\x03\x02\x02\x02X\u02BA\x03\x02\x02\x02" +
		"Z\u02C4\x03\x02\x02\x02\\\u02C6\x03\x02\x02\x02^\u02CC\x03\x02\x02\x02" +
		"`\u02D0\x03\x02\x02\x02b\u02D6\x03\x02\x02\x02d\u02E3\x03\x02\x02\x02" +
		"f\u02E9\x03\x02\x02\x02h\u02ED\x03\x02\x02\x02j\u02F0\x03\x02\x02\x02" +
		"l\u02F3\x03\x02\x02\x02n\u02F7\x03\x02\x02\x02p\u02FB\x03\x02\x02\x02" +
		"r\u02FF\x03\x02\x02\x02t\u0303\x03\x02\x02\x02v\u030A\x03\x02\x02\x02" +
		"x\u030F\x03\x02\x02\x02z\u0317\x03\x02\x02\x02|\u031D\x03\x02\x02\x02" +
		"~\u0324\x03\x02\x02\x02\x80\u0329\x03\x02\x02\x02\x82\u032E\x03\x02\x02" +
		"\x02\x84\u033B\x03\x02\x02\x02\x86\u034A\x03\x02\x02\x02\x88\u034E\x03" +
		"\x02\x02\x02\x8A\u0350\x03\x02\x02\x02\x8C\u0355\x03\x02\x02\x02\x8E\u0357" +
		"\x03\x02\x02\x02\x90\u035B\x03\x02\x02\x02\x92\u0375\x03\x02\x02\x02\x94" +
		"\u03C8\x03\x02\x02\x02\x96\u03DD\x03\x02\x02\x02\x98\u03DF\x03\x02\x02" +
		"\x02\x9A\u03E6\x03\x02\x02\x02\x9C\u03EE\x03\x02\x02\x02\x9E\u03F6\x03" +
		"\x02\x02\x02\xA0\u03FD\x03\x02\x02\x02\xA2\u0400\x03\x02\x02\x02\xA4\u040B" +
		"\x03\x02\x02\x02\xA6\u040D\x03\x02\x02\x02\xA8\u0418\x03\x02\x02\x02\xAA" +
		"\u041C\x03\x02\x02\x02\xAC\u0427\x03\x02\x02\x02\xAE\u042D\x03\x02\x02" +
		"\x02\xB0\u0431\x03\x02\x02\x02\xB2\u044F\x03\x02\x02\x02\xB4\u045E\x03" +
		"\x02\x02\x02\xB6\u0475\x03\x02\x02\x02\xB8\u0477\x03\x02\x02\x02\xBA\u047F" +
		"\x03\x02\x02\x02\xBC\u048D\x03\x02\x02\x02\xBE\u049D\x03\x02\x02\x02\xC0" +
		"\u050B\x03\x02\x02\x02\xC2\u0513\x03\x02\x02\x02\xC4\u0515\x03\x02\x02" +
		"\x02\xC6\u0521\x03\x02\x02\x02\xC8\u0526\x03\x02\x02\x02\xCA\u0529\x03" +
		"\x02\x02\x02\xCC\u0531\x03\x02\x02\x02\xCE\u0535\x03\x02\x02\x02\xD0\u054A" +
		"\x03\x02\x02\x02\xD2\u0551\x03\x02\x02\x02\xD4\u055B\x03\x02\x02\x02\xD6" +
		"\u056C\x03\x02\x02\x02\xD8\u057E\x03\x02\x02\x02\xDA\u0580\x03\x02\x02" +
		"\x02\xDC\u058B\x03\x02\x02\x02\xDE\u0596\x03\x02\x02\x02\xE0\u0598\x03" +
		"\x02\x02\x02\xE2\u05A0\x03\x02\x02\x02\xE4\u05B0\x03\x02\x02\x02\xE6\u05B2" +
		"\x03\x02\x02\x02\xE8\u05D7\x03\x02\x02\x02\xEA\u05D9\x03\x02\x02\x02\xEC" +
		"\u05DD\x03\x02\x02\x02\xEE\u05F5\x03\x02\x02\x02\xF0\u05FB\x03\x02\x02" +
		"\x02\xF2\u0601\x03\x02\x02\x02\xF4\u0603\x03\x02\x02\x02\xF6\u060A\x03" +
		"\x02\x02\x02\xF8\u060D\x03\x02\x02\x02\xFA\u0651\x03\x02\x02\x02\xFC\u0654" +
		"\x03\x02\x02\x02\xFE\u0658\x03\x02\x02\x02\u0100\u0664\x03\x02\x02\x02" +
		"\u0102\u0668\x03\x02\x02\x02\u0104\u06A7\x03\x02\x02\x02\u0106\u06AA\x03" +
		"\x02\x02\x02\u0108\u06B2\x03\x02\x02\x02\u010A\u06CE\x03\x02\x02\x02\u010C" +
		"\u06D6\x03\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\u010E\u06DB\x03\x02\x02\x02\u0110\u06DD\x03\x02\x02\x02\u0112\u06E2" +
		"\x03\x02\x02\x02\u0114\u06EA\x03\x02\x02\x02\u0116\u06EC\x03\x02\x02\x02" +
		"\u0118\u0119\x07-\x02\x02\u0119\u011A\x05\u0114\x8B\x02\u011A\u011B\x07" +
		"\x1D\x02\x02\u011B\u011C\x05\u0114\x8B\x02\u011C\u011D\x07\xB7\x02\x02" +
		"\u011D\u0122\x05\x04\x03\x02\u011E\u011F\x07\xBE\x02\x02\u011F\u0121\x05" +
		"\x04\x03\x02\u0120\u011E\x03\x02\x02\x02\u0121\u0124\x03\x02\x02\x02\u0122" +
		"\u0120\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0125\x03\x02" +
		"\x02\x02\u0124\u0122\x03\x02\x02\x02\u0125\u0126\x07\xB8\x02\x02\u0126" +
		"\u0127\x05J&\x02\u0127\u0128\x07\x02\x02\x03\u0128\x03\x03\x02\x02\x02" +
		"\u0129\u012A\t\x02\x02\x02\u012A\u012B\t\x03\x02\x02\u012B\x05\x03\x02" +
		"\x02\x02\u012C\u012D\x05\b\x05\x02\u012D\u012E\x07\x02\x02\x03\u012E\x07" +
		"\x03\x02\x02\x02\u012F\u0131\x05\x1A\x0E\x02\u0130\u012F\x03\x02\x02\x02" +
		"\u0131\u0134\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0132\u0133\x03" +
		"\x02\x02\x02\u0133\u0135\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02\u0135" +
		"\u0145\x05\n\x06\x02\u0136\u0138\x05\x1A\x0E\x02\u0137\u0136\x03\x02\x02" +
		"\x02\u0138\u013B\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u0139\u013A" +
		"\x03\x02\x02\x02\u013A\u013C\x03\x02\x02\x02\u013B\u0139\x03\x02\x02\x02" +
		"\u013C\u0145\x05\f\x07\x02\u013D\u013F\x05\x1A\x0E\x02\u013E\u013D\x03" +
		"\x02\x02\x02\u013F\u0142\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0140" +
		"\u0141\x03\x02\x02\x02\u0141\u0143\x03\x02\x02\x02\u0142\u0140\x03\x02" +
		"\x02\x02\u0143\u0145\x05\x10\t\x02\u0144\u0132\x03\x02\x02\x02\u0144\u0139" +
		"\x03\x02\x02\x02\u0144\u0140\x03\x02\x02\x02\u0145\t\x03\x02\x02\x02\u0146" +
		"\u0147\x07\b\x02\x02\u0147\u014A\x05\u0114\x8B\x02\u0148\u0149\x07\x0E" +
		"\x02\x02\u0149\u014B\x05.\x18\x02\u014A\u0148\x03\x02\x02\x02\u014A\u014B" +
		"\x03\x02\x02\x02\u014B\u014E\x03\x02\x02\x02\u014C\u014D\x07\x15\x02\x02" +
		"\u014D\u014F\x05\x12\n\x02\u014E\u014C\x03\x02\x02\x02\u014E\u014F\x03" +
		"\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0151\x05\x14\v\x02\u0151" +
		"\v\x03\x02\x02\x02\u0152\u0153\x07\r\x02\x02\u0153\u0154\x05\u0114\x8B" +
		"\x02\u0154\u0156\x07\xB9\x02\x02\u0155\u0157\x05\x0E\b\x02\u0156\u0155" +
		"\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02" +
		"\u0158\u0159\x07\xBA\x02\x02\u0159\r\x03\x02\x02\x02\u015A\u015F\x05\u0114" +
		"\x8B\x02\u015B\u015C\x07\xBE\x02\x02\u015C\u015E\x05\u0114\x8B\x02\u015D" +
		"\u015B\x03\x02\x02\x02\u015E\u0161\x03\x02\x02\x02\u015F\u015D\x03\x02" +
		"\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160\x0F\x03\x02\x02\x02\u0161\u015F" +
		"\x03\x02\x02\x02\u0162\u0163\x07\x19\x02\x02\u0163\u0166\x05\u0114\x8B" +
		"\x02\u0164\u0165\x07\x0E\x02\x02\u0165\u0167\x05\x12\n\x02\u0166\u0164" +
		"\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02" +
		"\u0168\u0169\x05\x16\f\x02\u0169\x11\x03\x02\x02\x02\u016A\u016F\x05." +
		"\x18\x02\u016B\u016C\x07\xBE\x02\x02\u016C\u016E\x05.\x18\x02\u016D\u016B" +
		"\x03\x02\x02\x02\u016E\u0171\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02" +
		"\u016F\u0170\x03\x02\x02\x02\u0170\x13\x03\x02\x02\x02\u0171\u016F\x03" +
		"\x02\x02\x02\u0172\u0176\x07\xB9\x02\x02\u0173\u0175\x05\x18\r\x02\u0174" +
		"\u0173\x03\x02\x02\x02\u0175\u0178\x03\x02\x02\x02\u0176\u0174\x03\x02" +
		"\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0179\x03\x02\x02\x02\u0178" +
		"\u0176\x03\x02\x02\x02\u0179\u017A\x07\xBA\x02\x02\u017A\x15\x03\x02\x02" +
		"\x02\u017B\u017F\x07\xB9\x02\x02\u017C\u017E\x05&\x14\x02\u017D\u017C" +
		"\x03\x02\x02\x02\u017E\u0181\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02" +
		"\u017F\u0180\x03\x02\x02\x02\u0180\u0182\x03\x02\x02\x02\u0181\u017F\x03" +
		"\x02\x02\x02\u0182\u0183\x07\xBA\x02\x02\u0183\x17\x03\x02\x02\x02\u0184" +
		"\u0191\x07\xBD\x02\x02\u0185\u0187\x07&\x02\x02\u0186\u0185\x03\x02\x02" +
		"\x02\u0186\u0187\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188\u0191" +
		"\x05J&\x02\u0189\u018B\x05\x1A\x0E\x02\u018A\u0189\x03\x02\x02\x02\u018B" +
		"\u018E\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C\u018D\x03\x02" +
		"\x02\x02\u018D\u018F\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018F" +
		"\u0191\x05\x1C\x0F\x02\u0190\u0184\x03\x02\x02\x02\u0190\u0186\x03\x02" +
		"\x02\x02\u0190\u018C\x03\x02\x02\x02\u0191\x19\x03\x02\x02\x02\u0192\u01A6" +
		"\x05@!\x02\u0193\u01A6\x07\x13\x02\x02\u0194\u01A6\x07!\x02\x02\u0195" +
		"\u01A6\x07 \x02\x02\u0196\u01A6\x07\x1F\x02\x02\u0197\u01A6\x07,\x02\x02" +
		"\u0198\u01A6\x07&\x02\x02\u0199\u01A6\x07\x03\x02\x02\u019A\u01A6\x07" +
		"\x0F\x02\x02\u019B\u01A6\x074\x02\x02\u019C\u01A6\x07\x1E\x02\x02\u019D" +
		"\u01A6\x072\x02\x02\u019E\u01A6\x07)\x02\x02\u019F\u01A0\x077\x02\x02" +
		"\u01A0\u01A6\x07%\x02\x02\u01A1\u01A2\x078\x02\x02\u01A2\u01A6\x07%\x02" +
		"\x02\u01A3\u01A4\x07\x16\x02\x02\u01A4\u01A6\x07%\x02\x02\u01A5\u0192" +
		"\x03\x02\x02\x02\u01A5\u0193\x03\x02\x02\x02\u01A5\u0194\x03\x02\x02\x02" +
		"\u01A5\u0195\x03\x02\x02\x02\u01A5\u0196\x03\x02\x02\x02\u01A5\u0197\x03" +
		"\x02\x02\x02\u01A5\u0198\x03\x02\x02\x02\u01A5\u0199\x03\x02\x02\x02\u01A5" +
		"\u019A\x03\x02\x02\x02\u01A5\u019B\x03\x02\x02\x02\u01A5\u019C\x03\x02" +
		"\x02\x02\u01A5\u019D\x03\x02\x02\x02\u01A5\u019E\x03\x02\x02\x02\u01A5" +
		"\u019F\x03\x02\x02\x02\u01A5\u01A1\x03\x02\x02\x02\u01A5\u01A3\x03\x02" +
		"\x02\x02\u01A6\x1B\x03\x02\x02\x02\u01A7\u01AF\x05\x1E\x10\x02\u01A8\u01AF" +
		"\x05\"\x12\x02\u01A9\u01AF\x05 \x11\x02\u01AA\u01AF\x05\x10\t\x02\u01AB" +
		"\u01AF\x05\n\x06\x02\u01AC\u01AF\x05\f\x07\x02\u01AD\u01AF\x05$\x13\x02" +
		"\u01AE\u01A7\x03\x02\x02\x02\u01AE\u01A8\x03\x02\x02\x02\u01AE\u01A9\x03" +
		"\x02\x02\x02\u01AE\u01AA\x03\x02\x02\x02\u01AE\u01AB\x03\x02\x02\x02\u01AE" +
		"\u01AC\x03\x02\x02\x02\u01AE\u01AD\x03\x02\x02\x02\u01AF\x1D\x03\x02\x02" +
		"\x02\u01B0\u01B3\x05.\x18\x02\u01B1\u01B3\x073\x02\x02\u01B2\u01B0\x03" +
		"\x02\x02\x02\u01B2\u01B1\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4" +
		"\u01B5\x05\u0114\x8B\x02\u01B5\u01B8\x056\x1C\x02\u01B6\u01B9\x05J&\x02" +
		"\u01B7\u01B9\x07\xBD\x02\x02\u01B8\u01B6\x03\x02\x02\x02\u01B8\u01B7\x03" +
		"\x02\x02\x02\u01B9\x1F\x03\x02\x02\x02\u01BA\u01BB\x05<\x1F\x02\u01BB" +
		"\u01BC\x056\x1C\x02\u01BC\u01BD\x05J&\x02\u01BD!\x03\x02\x02\x02\u01BE" +
		"\u01BF\x05.\x18\x02\u01BF\u01C0\x05(\x15\x02\u01C0\u01C1\x07\xBD\x02\x02" +
		"\u01C1#\x03\x02\x02\x02\u01C2\u01C3\x05.\x18\x02\u01C3\u01C4\x05\u0114" +
		"\x8B\x02\u01C4\u01C8\x07\xB9\x02\x02\u01C5\u01C7\x05|?\x02\u01C6\u01C5" +
		"\x03\x02\x02\x02\u01C7\u01CA\x03\x02\x02\x02\u01C8\u01C6\x03\x02\x02\x02" +
		"\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CB\x03\x02\x02\x02\u01CA\u01C8\x03" +
		"\x02\x02\x02\u01CB\u01CC\x07\xBA\x02\x02\u01CC%\x03\x02\x02\x02\u01CD" +
		"\u01CF\x05\x1A\x0E\x02\u01CE\u01CD\x03\x02\x02\x02\u01CF\u01D2\x03\x02" +
		"\x02\x02\u01D0\u01CE\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1" +
		"\u01D5\x03\x02\x02\x02\u01D2\u01D0\x03\x02\x02\x02\u01D3\u01D6\x05.\x18" +
		"\x02\u01D4\u01D6\x073\x02\x02\u01D5\u01D3\x03\x02\x02\x02\u01D5\u01D4" +
		"\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01D8\x05\u0114\x8B" +
		"\x02\u01D8\u01D9\x056\x1C\x02\u01D9\u01DA\x07\xBD\x02\x02\u01DA\'\x03" +
		"\x02\x02\x02\u01DB\u01E0\x05*\x16\x02\u01DC\u01DD\x07\xBE\x02\x02\u01DD" +
		"\u01DF\x05*\x16\x02\u01DE\u01DC\x03\x02\x02\x02\u01DF\u01E2\x03\x02\x02" +
		"\x02\u01E0\u01DE\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1)\x03" +
		"\x02\x02\x02\u01E2\u01E0\x03\x02\x02\x02\u01E3\u01E6\x05\u0114\x8B\x02" +
		"\u01E4\u01E5\x07\xC0\x02\x02\u01E5\u01E7\x05\x92J\x02\u01E6\u01E4\x03" +
		"\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02\u01E7+\x03\x02\x02\x02\u01E8" +
		"\u01F4\x07\xB9\x02\x02\u01E9\u01EE\x05\x92J\x02\u01EA\u01EB\x07\xBE\x02" +
		"\x02\u01EB\u01ED\x05\x92J\x02\u01EC\u01EA\x03\x02\x02\x02\u01ED\u01F0" +
		"\x03\x02\x02\x02\u01EE\u01EC\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02" +
		"\u01EF\u01F2\x03\x02\x02\x02\u01F0\u01EE\x03\x02\x02\x02\u01F1\u01F3\x07" +
		"\xBE\x02\x02\u01F2\u01F1\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3" +
		"\u01F5\x03\x02\x02\x02\u01F4\u01E9\x03\x02\x02\x02\u01F4\u01F5\x03\x02" +
		"\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6\u01F7\x07\xBA\x02\x02\u01F7" +
		"-\x03\x02\x02\x02\u01F8\u01FD\x052\x1A\x02\u01F9\u01FA\x07\xBF\x02\x02" +
		"\u01FA\u01FC\x052\x1A\x02\u01FB\u01F9\x03\x02\x02\x02\u01FC\u01FF\x03" +
		"\x02\x02\x02\u01FD\u01FB\x03\x02\x02\x02\u01FD\u01FE\x03\x02\x02\x02\u01FE" +
		"\u0200\x03\x02\x02\x02\u01FF\u01FD\x03\x02\x02\x02\u0200\u0201\x050\x19" +
		"\x02\u0201/\x03\x02\x02\x02\u0202\u0203\x07\xBB\x02\x02\u0203\u0205\x07" +
		"\xBC\x02\x02\u0204\u0202\x03\x02\x02\x02\u0205\u0208\x03\x02\x02\x02\u0206" +
		"\u0204\x03\x02\x02\x02\u0206\u0207\x03\x02\x02\x02\u02071\x03\x02\x02" +
		"\x02\u0208\u0206\x03\x02\x02\x02\u0209\u020B\x079\x02\x02\u020A\u020C" +
		"\x054\x1B\x02\u020B\u020A\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02" +
		"\u020C\u021A\x03\x02\x02\x02\u020D\u020F\x07$\x02\x02\u020E\u0210\x05" +
		"4\x1B\x02\u020F\u020E\x03\x02\x02\x02\u020F\u0210\x03\x02\x02\x02\u0210" +
		"\u021A\x03\x02\x02\x02\u0211\u0213\x07:\x02\x02\u0212\u0214\x054\x1B\x02" +
		"\u0213\u0212\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\u021A\x03" +
		"\x02\x02\x02\u0215\u0217\x05\u0114\x8B\x02\u0216\u0218\x054\x1B\x02\u0217" +
		"\u0216\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218\u021A\x03\x02" +
		"\x02\x02\u0219\u0209\x03\x02\x02\x02\u0219\u020D\x03\x02\x02\x02\u0219" +
		"\u0211\x03\x02\x02\x02\u0219\u0215\x03\x02\x02\x02\u021A3\x03\x02\x02" +
		"\x02\u021B\u021C\x07\xC2\x02\x02\u021C\u021D\x05\x12\n\x02\u021D\u021E" +
		"\x07\xC1\x02\x02\u021E5\x03\x02\x02\x02\u021F\u0221\x07\xB7\x02\x02\u0220" +
		"\u0222\x058\x1D\x02\u0221\u0220\x03\x02\x02\x02\u0221\u0222\x03\x02\x02" +
		"\x02\u0222\u0223\x03\x02\x02\x02\u0223\u0224\x07\xB8\x02\x02\u02247\x03" +
		"\x02\x02\x02\u0225\u022A\x05:\x1E\x02\u0226\u0227\x07\xBE\x02\x02\u0227" +
		"\u0229\x05:\x1E\x02\u0228\u0226\x03\x02\x02\x02\u0229\u022C\x03\x02\x02" +
		"\x02\u022A\u0228\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B9\x03" +
		"\x02\x02\x02\u022C\u022A\x03\x02\x02\x02\u022D\u022F\x05\x1A\x0E\x02\u022E" +
		"\u022D\x03\x02\x02\x02\u022F\u0232\x03\x02\x02\x02\u0230\u022E\x03\x02" +
		"\x02\x02\u0230\u0231\x03\x02\x02\x02\u0231\u0233\x03\x02\x02\x02\u0232" +
		"\u0230\x03\x02\x02\x02\u0233\u0234\x05.\x18\x02\u0234\u0235\x05\u0114" +
		"\x8B\x02\u0235;\x03\x02\x02\x02\u0236\u023B\x05\u0114\x8B\x02\u0237\u0238" +
		"\x07\xBF\x02\x02\u0238\u023A\x05\u0114\x8B\x02\u0239\u0237\x03\x02\x02" +
		"\x02\u023A\u023D\x03\x02\x02\x02\u023B\u0239\x03\x02\x02\x02\u023B\u023C" +
		"\x03\x02\x02\x02\u023C=\x03\x02\x02\x02\u023D\u023B\x03\x02\x02\x02\u023E" +
		"\u023F\t\x04\x02\x02\u023F?\x03\x02\x02\x02\u0240\u0241\x07\xE5\x02\x02" +
		"\u0241\u0248\x05<\x1F\x02\u0242\u0245\x07\xB7\x02\x02\u0243\u0246\x05" +
		"B\"\x02\u0244\u0246\x05F$\x02\u0245\u0243\x03\x02\x02\x02\u0245\u0244" +
		"\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02" +
		"\u0247\u0249\x07\xB8\x02\x02\u0248\u0242\x03\x02\x02\x02\u0248\u0249\x03" +
		"\x02\x02\x02\u0249A\x03\x02\x02\x02\u024A\u0251\x05D#\x02\u024B\u024D" +
		"\x07\xBE\x02\x02\u024C\u024B\x03\x02\x02\x02\u024C\u024D\x03\x02\x02\x02" +
		"\u024D\u024E\x03\x02\x02\x02\u024E\u0250\x05D#\x02\u024F\u024C\x03\x02" +
		"\x02\x02\u0250\u0253\x03\x02\x02\x02\u0251\u024F\x03\x02\x02\x02\u0251" +
		"\u0252\x03\x02\x02\x02\u0252C\x03\x02\x02\x02\u0253\u0251\x03\x02\x02" +
		"\x02\u0254\u0255\x05\u0114\x8B\x02\u0255\u0256\x07\xC0\x02\x02\u0256\u0257" +
		"\x05F$\x02\u0257E\x03\x02\x02\x02\u0258\u025C\x05\x92J\x02\u0259\u025C" +
		"\x05@!\x02\u025A\u025C\x05H%\x02\u025B\u0258\x03\x02\x02\x02\u025B\u0259" +
		"\x03\x02\x02\x02\u025B\u025A\x03\x02\x02\x02\u025CG\x03\x02\x02\x02\u025D" +
		"\u0266\x07\xB9\x02\x02\u025E\u0263\x05F$\x02\u025F\u0260\x07\xBE\x02\x02" +
		"\u0260\u0262\x05F$\x02\u0261\u025F\x03\x02\x02\x02\u0262\u0265\x03\x02" +
		"\x02\x02\u0263\u0261\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02\u0264" +
		"\u0267\x03\x02\x02\x02\u0265\u0263\x03\x02\x02\x02\u0266\u025E\x03\x02" +
		"\x02\x02\u0266\u0267\x03\x02\x02\x02\u0267\u0269\x03\x02\x02\x02\u0268" +
		"\u026A\x07\xBE\x02\x02\u0269\u0268\x03\x02\x02\x02\u0269\u026A\x03\x02" +
		"\x02\x02\u026A\u026B\x03\x02\x02\x02\u026B\u026C\x07\xBA\x02\x02\u026C" +
		"I\x03\x02\x02\x02\u026D\u0271\x07\xB9\x02\x02\u026E\u0270\x05P)\x02\u026F" +
		"\u026E\x03\x02\x02\x02\u0270\u0273\x03\x02\x02\x02\u0271\u026F\x03\x02" +
		"\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272\u0274\x03\x02\x02\x02\u0273" +
		"\u0271\x03\x02\x02\x02\u0274\u0275\x07\xBA\x02\x02\u0275K\x03\x02\x02" +
		"\x02\u0276\u0277\x05N(\x02\u0277\u0278\x07\xBD\x02\x02\u0278M\x03\x02" +
		"\x02\x02\u0279\u027B\x05\x1A\x0E\x02\u027A\u0279\x03\x02\x02\x02\u027B" +
		"\u027E\x03\x02\x02\x02\u027C\u027A\x03\x02\x02\x02\u027C\u027D\x03\x02" +
		"\x02\x02\u027D\u027F\x03\x02\x02\x02\u027E\u027C\x03\x02\x02\x02\u027F" +
		"\u0280\x05.\x18\x02\u0280\u0281\x05(\x15\x02\u0281O\x03\x02\x02\x02\u0282" +
		"\u0297\x05J&\x02\u0283\u0297\x05R*\x02\u0284\u0297\x05T+\x02\u0285\u0297" +
		"\x05\\/\x02\u0286\u0297\x05^0\x02\u0287\u0297\x05`1\x02\u0288\u0297\x05" +
		"b2\x02\u0289\u0297\x05d3\x02\u028A\u0297\x05f4\x02\u028B\u0297\x05h5\x02" +
		"\u028C\u0297\x05j6\x02\u028D\u0297\x05l7\x02\u028E\u0297\x05n8\x02\u028F" +
		"\u0297\x05p9\x02\u0290\u0297\x05r:\x02\u0291\u0297\x05t;\x02\u0292\u0297" +
		"\x05v<\x02\u0293\u0297\x05x=\x02\u0294\u0297\x05L\'\x02\u0295\u0297\x05" +
		"z>\x02\u0296\u0282\x03\x02\x02\x02\u0296\u0283\x03\x02\x02\x02\u0296\u0284" +
		"\x03\x02\x02\x02\u0296\u0285\x03\x02\x02\x02\u0296\u0286\x03\x02\x02\x02" +
		"\u0296\u0287\x03\x02\x02\x02\u0296\u0288\x03\x02\x02\x02\u0296\u0289\x03" +
		"\x02\x02\x02\u0296\u028A\x03\x02\x02\x02\u0296\u028B\x03\x02\x02\x02\u0296" +
		"\u028C\x03\x02\x02\x02\u0296\u028D\x03\x02\x02\x02\u0296\u028E\x03\x02" +
		"\x02\x02\u0296\u028F\x03\x02\x02\x02\u0296\u0290\x03\x02\x02\x02\u0296" +
		"\u0291\x03\x02\x02\x02\u0296\u0292\x03\x02\x02\x02\u0296\u0293\x03\x02" +
		"\x02\x02\u0296\u0294\x03\x02\x02\x02\u0296\u0295\x03\x02\x02\x02\u0297" +
		"Q\x03\x02\x02\x02\u0298\u0299\x07\x14\x02\x02\u0299\u029A\x05\x8EH\x02" +
		"\u029A\u029D\x05P)\x02\u029B\u029C\x07\f\x02\x02\u029C\u029E\x05P)\x02" +
		"\u029D\u029B\x03\x02\x02\x02\u029D\u029E\x03\x02\x02\x02\u029ES\x03\x02" +
		"\x02\x02\u029F\u02A0\x07(\x02\x02\u02A0\u02A1\x07\x1D\x02\x02\u02A1\u02A2" +
		"\x05\x92J\x02\u02A2\u02A4\x07\xB9\x02\x02\u02A3\u02A5\x05V,\x02\u02A4" +
		"\u02A3\x03\x02\x02\x02\u02A5\u02A6\x03\x02\x02\x02\u02A6\u02A4\x03\x02" +
		"\x02\x02\u02A6\u02A7\x03\x02\x02\x02\u02A7\u02A8\x03\x02\x02\x02\u02A8" +
		"\u02A9\x07\xBA\x02\x02\u02A9U\x03\x02\x02\x02\u02AA\u02AB\x075\x02\x02" +
		"\u02AB\u02AC\x05X-\x02\u02AC\u02AD\x05J&\x02\u02ADW\x03\x02\x02\x02\u02AE" +
		"\u02BB\x07\f\x02\x02\u02AF\u02B4\x05Z.\x02\u02B0\u02B1\x07\xBE\x02\x02" +
		"\u02B1\u02B3\x05Z.\x02\u02B2\u02B0\x03\x02\x02\x02\u02B3\u02B6\x03\x02" +
		"\x02\x02\u02B4\u02B2\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5" +
		"\u02BB\x03\x02\x02\x02\u02B6\u02B4\x03\x02\x02\x02\u02B7\u02B8\x05\u0114" +
		"\x8B\x02\u02B8\u02B9\x05\u0114\x8B\x02\u02B9\u02BB\x03\x02\x02\x02\u02BA" +
		"\u02AE\x03\x02\x02\x02\u02BA\u02AF\x03\x02\x02\x02\u02BA\u02B7\x03\x02" +
		"\x02\x02\u02BBY\x03\x02\x02\x02\u02BC\u02BE\x07\xD2\x02\x02\u02BD\u02BC" +
		"\x03\x02\x02\x02\u02BD\u02BE\x03\x02\x02\x02\u02BE\u02BF\x03\x02\x02\x02" +
		"\u02BF\u02C5\x07\xB1\x02\x02\u02C0\u02C5\x07\xB2\x02\x02\u02C1\u02C5\x07" +
		"\xB5\x02\x02\u02C2\u02C5\x07\x1C\x02\x02\u02C3\u02C5\x05\u0114\x8B\x02" +
		"\u02C4\u02BD\x03\x02\x02\x02\u02C4\u02C0\x03\x02\x02\x02\u02C4\u02C1\x03" +
		"\x02\x02\x02\u02C4\u02C2\x03\x02\x02\x02\u02C4\u02C3\x03\x02\x02\x02\u02C5" +
		"[\x03\x02\x02\x02\u02C6\u02C7\x07\x11\x02\x02\u02C7\u02C8\x07\xB7\x02" +
		"\x02\u02C8\u02C9\x05\x86D\x02\u02C9\u02CA\x07\xB8\x02\x02\u02CA\u02CB" +
		"\x05P)\x02\u02CB]\x03\x02\x02\x02\u02CC\u02CD\x076\x02\x02\u02CD\u02CE" +
		"\x05\x8EH\x02\u02CE\u02CF\x05P)\x02\u02CF_\x03\x02\x02\x02\u02D0\u02D1" +
		"\x07\v\x02\x02\u02D1\u02D2\x05P)\x02\u02D2\u02D3\x076\x02\x02\u02D3\u02D4" +
		"\x05\x8EH\x02\u02D4\u02D5\x07\xBD\x02\x02\u02D5a\x03\x02\x02\x02\u02D6" +
		"\u02D7\x07.\x02\x02\u02D7\u02E1\x05J&\x02\u02D8\u02DA\x05\x82B\x02\u02D9" +
		"\u02D8\x03\x02\x02\x02\u02DA\u02DB\x03\x02\x02\x02\u02DB\u02D9\x03\x02" +
		"\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02DE\x03\x02\x02\x02\u02DD" +
		"\u02DF\x05\x84C\x02\u02DE\u02DD\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02" +
		"\x02\u02DF\u02E2\x03\x02\x02\x02\u02E0\u02E2\x05\x84C\x02\u02E1\u02D9" +
		"\x03\x02\x02\x02\u02E1\u02E0\x03\x02\x02\x02\u02E2c\x03\x02\x02\x02\u02E3" +
		"\u02E5\x07\"\x02\x02\u02E4\u02E6\x05\x92J\x02\u02E5\u02E4\x03\x02\x02" +
		"\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6\u02E7\x03\x02\x02\x02\u02E7\u02E8" +
		"\x07\xBD\x02\x02\u02E8e\x03\x02\x02\x02\u02E9\u02EA\x07+\x02\x02\u02EA" +
		"\u02EB\x05\x92J\x02\u02EB\u02EC\x07\xBD\x02\x02\u02ECg\x03\x02\x02\x02" +
		"\u02ED\u02EE\x07\x06\x02\x02\u02EE\u02EF\x07\xBD\x02\x02\u02EFi\x03\x02" +
		"\x02\x02\u02F0\u02F1\x07\t\x02\x02\u02F1\u02F2\x07\xBD\x02\x02\u02F2k" +
		"\x03\x02\x02\x02\u02F3\u02F4\x07\x17\x02\x02\u02F4\u02F5\x05\x92J\x02" +
		"\u02F5\u02F6\x07\xBD\x02\x02\u02F6m\x03\x02\x02\x02\u02F7\u02F8\x070\x02" +
		"\x02\u02F8\u02F9\x05\x92J\x02\u02F9\u02FA\x07\xBD\x02\x02\u02FAo\x03\x02" +
		"\x02\x02\u02FB\u02FC\x07\n\x02\x02\u02FC\u02FD\x05\x92J\x02\u02FD\u02FE" +
		"\x07\xBD\x02\x02\u02FEq\x03\x02\x02\x02\u02FF\u0300\x07/\x02\x02\u0300" +
		"\u0301\x05\x92J\x02\u0301\u0302\x07\xBD\x02\x02\u0302s\x03\x02\x02\x02" +
		"\u0303\u0304\x071\x02\x02\u0304\u0306\x05\x92J\x02\u0305\u0307\x05<\x1F" +
		"\x02\u0306\u0305\x03\x02\x02\x02\u0306\u0307\x03\x02\x02\x02\u0307\u0308" +
		"\x03\x02\x02\x02\u0308\u0309\x07\xBD\x02\x02\u0309u\x03\x02\x02\x02\u030A" +
		"\u030B\x07\x1A\x02\x02\u030B\u030C\x05\x92J\x02\u030C\u030D\x05\x92J\x02" +
		"\u030D\u030E\x07\xBD\x02\x02\u030Ew\x03\x02\x02\x02\u030F\u0310\x07#\x02" +
		"\x02\u0310\u0312\x07\xB7\x02\x02\u0311\u0313\x05\x90I\x02\u0312\u0311" +
		"\x03\x02\x02\x02\u0312\u0313\x03\x02\x02\x02\u0313\u0314\x03\x02\x02\x02" +
		"\u0314\u0315\x07\xB8\x02\x02\u0315\u0316\x05J&\x02\u0316y\x03\x02\x02" +
		"\x02\u0317\u0318\x05\x92J\x02\u0318\u0319\x07\xBD\x02\x02\u0319{\x03\x02" +
		"\x02\x02\u031A\u031C\x05\x1A\x0E\x02\u031B\u031A\x03\x02\x02\x02\u031C" +
		"\u031F\x03\x02\x02\x02\u031D\u031B\x03\x02\x02\x02\u031D\u031E\x03\x02" +
		"\x02\x02\u031E\u0322\x03\x02\x02\x02\u031F\u031D\x03\x02\x02\x02\u0320" +
		"\u0323\x05~@\x02\u0321\u0323\x05\x80A\x02\u0322\u0320\x03\x02\x02\x02" +
		"\u0322\u0321\x03\x02\x02\x02\u0323}\x03\x02\x02\x02\u0324\u0327\x07\x12" +
		"\x02\x02\u0325\u0328\x07\xBD\x02\x02\u0326\u0328\x05J&\x02\u0327\u0325" +
		"\x03\x02\x02\x02\u0327\u0326\x03\x02\x02\x02\u0328\x7F\x03\x02\x02\x02" +
		"\u0329\u032C\x07$\x02\x02\u032A\u032D\x07\xBD\x02\x02\u032B\u032D\x05" +
		"J&\x02\u032C\u032A\x03\x02\x02\x02\u032C\u032B\x03\x02\x02\x02\u032D\x81" +
		"\x03\x02\x02\x02\u032E\u032F\x07\x07\x02\x02\u032F\u0333\x07\xB7\x02\x02" +
		"\u0330\u0332\x05\x1A\x0E\x02\u0331\u0330\x03\x02\x02\x02\u0332\u0335\x03" +
		"\x02\x02\x02\u0333\u0331\x03\x02\x02\x02\u0333\u0334\x03\x02\x02\x02\u0334" +
		"\u0336\x03\x02\x02\x02\u0335\u0333\x03\x02\x02\x02\u0336\u0337\x05<\x1F" +
		"\x02\u0337\u0338\x05\u0114\x8B\x02\u0338\u0339\x07\xB8\x02\x02\u0339\u033A" +
		"\x05J&\x02\u033A\x83\x03\x02\x02\x02\u033B\u033C\x07\x10\x02\x02\u033C" +
		"\u033D\x05J&\x02\u033D\x85\x03\x02\x02\x02\u033E\u034B\x05\x8AF\x02\u033F" +
		"\u0341\x05\x88E\x02\u0340\u033F\x03\x02\x02\x02\u0340\u0341\x03\x02\x02" +
		"\x02\u0341\u0342\x03\x02\x02\x02\u0342\u0344\x07\xBD\x02\x02\u0343\u0345" +
		"\x05\x92J\x02\u0344\u0343\x03\x02\x02\x02\u0344\u0345\x03\x02\x02\x02" +
		"\u0345\u0346\x03\x02\x02\x02\u0346\u0348\x07\xBD\x02\x02\u0347\u0349\x05" +
		"\x8CG\x02\u0348\u0347\x03\x02\x02\x02\u0348\u0349\x03\x02\x02\x02\u0349" +
		"\u034B\x03\x02\x02\x02\u034A\u033E\x03\x02\x02\x02\u034A\u0340\x03\x02" +
		"\x02\x02\u034B\x87\x03\x02\x02\x02\u034C\u034F\x05N(\x02\u034D\u034F\x05" +
		"\x90I\x02\u034E\u034C\x03\x02\x02\x02\u034E\u034D\x03\x02\x02\x02\u034F" +
		"\x89\x03\x02\x02\x02\u0350\u0351\x05.\x18\x02\u0351\u0352\x05\u0114\x8B" +
		"\x02\u0352\u0353\x07\xC7\x02\x02\u0353\u0354\x05\x92J\x02\u0354\x8B\x03" +
		"\x02\x02\x02\u0355\u0356\x05\x90I\x02\u0356\x8D\x03\x02\x02\x02\u0357" +
		"\u0358\x07\xB7\x02\x02\u0358\u0359\x05\x92J\x02\u0359\u035A\x07\xB8\x02" +
		"\x02\u035A\x8F\x03\x02\x02\x02\u035B\u0360\x05\x92J\x02\u035C\u035D\x07" +
		"\xBE\x02\x02\u035D\u035F\x05\x92J\x02\u035E\u035C\x03\x02\x02\x02\u035F" +
		"\u0362\x03\x02\x02\x02\u0360\u035E\x03\x02\x02\x02\u0360\u0361\x03\x02" +
		"\x02\x02\u0361\x91\x03\x02\x02\x02\u0362\u0360\x03\x02\x02\x02\u0363\u0364" +
		"\bJ\x01\x02\u0364\u0376\x05\x94K\x02\u0365\u0376\x05\x96L\x02\u0366\u0367" +
		"\x07\x1B\x02\x02\u0367\u0376\x05\x9AN\x02\u0368\u0369\x07\xB7\x02\x02" +
		"\u0369\u036A\x05.\x18\x02\u036A\u036B\x07\xB8\x02\x02\u036B\u036C\x05" +
		"\x92J\x14\u036C\u0376\x03\x02\x02\x02\u036D\u036E\x07\xB7\x02\x02\u036E" +
		"\u036F\x05\x92J\x02\u036F\u0370\x07\xB8\x02\x02\u0370\u0376\x03\x02\x02" +
		"\x02\u0371\u0372\t\x05\x02\x02\u0372\u0376\x05\x92J\x11\u0373\u0374\t" +
		"\x06\x02\x02\u0374\u0376\x05\x92J\x10\u0375\u0363\x03\x02\x02\x02\u0375" +
		"\u0365\x03\x02\x02\x02\u0375\u0366\x03\x02\x02\x02\u0375\u0368\x03\x02" +
		"\x02\x02\u0375\u036D\x03\x02\x02\x02\u0375\u0371\x03\x02\x02\x02\u0375" +
		"\u0373\x03\x02\x02\x02\u0376\u03BB\x03\x02\x02\x02\u0377\u0378\f\x0F\x02" +
		"\x02\u0378\u0379\t\x07\x02\x02\u0379\u03BA\x05\x92J\x10\u037A\u037B\f" +
		"\x0E\x02\x02\u037B\u037C\t\b\x02\x02\u037C\u03BA\x05\x92J\x0F\u037D\u0385" +
		"\f\r\x02\x02\u037E\u037F\x07\xC2\x02\x02\u037F\u0386\x07\xC2\x02\x02\u0380" +
		"\u0381\x07\xC1\x02\x02\u0381\u0382\x07\xC1\x02\x02\u0382\u0386\x07\xC1" +
		"\x02\x02\u0383\u0384\x07\xC1\x02\x02\u0384\u0386\x07\xC1\x02\x02\u0385" +
		"\u037E\x03\x02\x02\x02\u0385\u0380\x03\x02\x02\x02\u0385\u0383\x03\x02" +
		"\x02\x02\u0386\u0387\x03\x02\x02\x02\u0387\u03BA\x05\x92J\x0E\u0388\u0389" +
		"\f\f\x02\x02\u0389\u038B\t\t\x02\x02\u038A\u038C\x07\xC0\x02\x02\u038B" +
		"\u038A\x03\x02\x02\x02\u038B\u038C\x03\x02\x02\x02\u038C\u038D\x03\x02" +
		"\x02\x02\u038D\u03BA\x05\x92J\r\u038E\u038F\f\n\x02\x02\u038F\u0390\t" +
		"\n\x02\x02\u0390\u03BA\x05\x92J\v\u0391\u0392\f\t\x02\x02\u0392\u0393" +
		"\x07\xD5\x02\x02\u0393\u03BA\x05\x92J\n\u0394\u0395\f\b\x02\x02\u0395" +
		"\u0396\x07\xD7\x02\x02\u0396\u03BA\x05\x92J\t\u0397\u0398\f\x07\x02\x02" +
		"\u0398\u0399\x07\xD6\x02\x02\u0399\u03BA\x05\x92J\b\u039A\u039B\f\x06" +
		"\x02\x02\u039B\u039C\x07\xCD\x02\x02\u039C\u03BA\x05\x92J\x07\u039D\u039E" +
		"\f\x05\x02\x02\u039E\u039F\x07\xCE\x02\x02\u039F\u03BA\x05\x92J\x06\u03A0" +
		"\u03A1\f\x04\x02\x02\u03A1\u03A2\x07\xC6\x02\x02\u03A2\u03A3\x05\x92J" +
		"\x02\u03A3\u03A4\x07\xC7\x02\x02\u03A4\u03A5\x05\x92J\x04\u03A5\u03BA" +
		"\x03\x02\x02\x02\u03A6\u03A7\f\x03\x02\x02\u03A7\u03A8\t\v\x02\x02\u03A8" +
		"\u03BA\x05\x92J\x03\u03A9\u03AA\f\x18\x02\x02\u03AA\u03AD\t\f\x02\x02" +
		"\u03AB\u03AE\x05\x98M\x02\u03AC\u03AE\x05\u0116\x8C\x02\u03AD\u03AB\x03" +
		"\x02\x02\x02\u03AD\u03AC\x03\x02\x02\x02\u03AE\u03BA\x03\x02\x02\x02\u03AF" +
		"\u03B0\f\x17\x02\x02\u03B0\u03B1\x07\xBB\x02\x02\u03B1\u03B2\x05\x92J" +
		"\x02\u03B2\u03B3\x07\xBC\x02\x02\u03B3\u03BA\x03\x02\x02\x02\u03B4\u03B5" +
		"\f\x12\x02\x02\u03B5\u03BA\t\r\x02\x02\u03B6\u03B7\f\v\x02\x02\u03B7\u03B8" +
		"\x07\x18\x02\x02\u03B8\u03BA\x05.\x18\x02\u03B9\u0377\x03\x02\x02\x02" +
		"\u03B9\u037A\x03\x02\x02\x02\u03B9\u037D\x03\x02\x02\x02\u03B9\u0388\x03" +
		"\x02\x02\x02\u03B9\u038E\x03\x02\x02\x02\u03B9\u0391\x03\x02\x02\x02\u03B9" +
		"\u0394\x03\x02\x02\x02\u03B9\u0397\x03\x02\x02\x02\u03B9\u039A\x03\x02" +
		"\x02\x02\u03B9\u039D\x03\x02\x02\x02\u03B9\u03A0\x03\x02\x02\x02\u03B9" +
		"\u03A6\x03\x02\x02\x02\u03B9\u03A9\x03\x02\x02\x02\u03B9\u03AF\x03\x02" +
		"\x02\x02\u03B9\u03B4\x03\x02\x02\x02\u03B9\u03B6\x03\x02\x02\x02\u03BA" +
		"\u03BD\x03\x02\x02\x02\u03BB\u03B9\x03\x02\x02\x02\u03BB\u03BC\x03\x02" +
		"\x02\x02\u03BC\x93\x03\x02\x02\x02\u03BD\u03BB\x03\x02\x02\x02\u03BE\u03C9" +
		"\x07*\x02\x02\u03BF\u03C9\x07\'\x02\x02\u03C0\u03C9\x05> \x02\u03C1\u03C2" +
		"\x05.\x18\x02\u03C2";
	private static readonly _serializedATNSegment2: string =
		"\u03C3\x07\xBF\x02\x02\u03C3\u03C4\x07\b\x02\x02\u03C4\u03C9\x03\x02\x02" +
		"\x02\u03C5\u03C9\x05\u0114\x8B\x02\u03C6\u03C9\x05\xAEX\x02\u03C7\u03C9" +
		"\x05\u0100\x81\x02\u03C8\u03BE\x03\x02\x02\x02\u03C8\u03BF\x03\x02\x02" +
		"\x02\u03C8\u03C0\x03\x02\x02\x02\u03C8\u03C1\x03\x02\x02\x02\u03C8\u03C5" +
		"\x03\x02\x02\x02\u03C8\u03C6\x03\x02\x02\x02\u03C8\u03C7\x03\x02\x02\x02" +
		"\u03C9\x95\x03\x02\x02\x02\u03CA\u03CB\x05\u0114\x8B\x02\u03CB\u03CD\x07" +
		"\xB7\x02\x02\u03CC\u03CE\x05\x90I\x02\u03CD\u03CC\x03\x02\x02\x02\u03CD" +
		"\u03CE\x03\x02\x02\x02\u03CE\u03CF\x03\x02\x02\x02\u03CF\u03D0\x07\xB8" +
		"\x02\x02\u03D0\u03DE\x03\x02\x02\x02\u03D1\u03D2\x07*\x02\x02\u03D2\u03D4" +
		"\x07\xB7\x02\x02\u03D3\u03D5\x05\x90I\x02\u03D4\u03D3\x03\x02\x02\x02" +
		"\u03D4\u03D5\x03\x02\x02\x02\u03D5\u03D6\x03\x02\x02\x02\u03D6\u03DE\x07" +
		"\xB8\x02\x02\u03D7\u03D8\x07\'\x02\x02\u03D8\u03DA\x07\xB7\x02\x02\u03D9" +
		"\u03DB\x05\x90I\x02\u03DA\u03D9\x03\x02\x02\x02\u03DA\u03DB\x03\x02\x02" +
		"\x02\u03DB\u03DC\x03\x02\x02\x02\u03DC\u03DE\x07\xB8\x02\x02\u03DD\u03CA" +
		"\x03\x02\x02\x02\u03DD\u03D1\x03\x02\x02\x02\u03DD\u03D7\x03\x02\x02\x02" +
		"\u03DE\x97\x03\x02\x02\x02\u03DF\u03E0\x05\u0116\x8C\x02\u03E0\u03E2\x07" +
		"\xB7\x02\x02\u03E1\u03E3\x05\x90I\x02\u03E2\u03E1\x03\x02\x02\x02\u03E2" +
		"\u03E3\x03\x02\x02\x02\u03E3\u03E4\x03\x02\x02\x02\u03E4\u03E5\x07\xB8" +
		"\x02\x02\u03E5\x99\x03\x02\x02\x02\u03E6\u03EC\x05\x9CO\x02\u03E7\u03ED" +
		"\x05\xA0Q\x02\u03E8\u03ED\x05\xA2R\x02\u03E9\u03ED\x05\xA4S\x02\u03EA" +
		"\u03ED\x05\xA6T\x02\u03EB\u03ED\x05\xAAV\x02\u03EC\u03E7\x03\x02\x02\x02" +
		"\u03EC\u03E8\x03\x02\x02\x02\u03EC\u03E9\x03\x02\x02\x02\u03EC\u03EA\x03" +
		"\x02\x02\x02\u03EC\u03EB\x03\x02\x02\x02\u03ED\x9B\x03\x02\x02\x02\u03EE" +
		"\u03F3\x05\x9EP\x02\u03EF\u03F0\x07\xBF\x02\x02\u03F0\u03F2\x05\x9EP\x02" +
		"\u03F1\u03EF\x03\x02\x02\x02\u03F2\u03F5\x03\x02\x02\x02\u03F3\u03F1\x03" +
		"\x02\x02\x02\u03F3\u03F4\x03\x02\x02\x02\u03F4\x9D\x03\x02\x02\x02\u03F5" +
		"\u03F3\x03\x02\x02\x02\u03F6\u03FB\x05\u0116\x8C\x02\u03F7\u03F8\x07\xC2" +
		"\x02\x02\u03F8\u03F9\x05\x12\n\x02\u03F9\u03FA\x07\xC1\x02\x02\u03FA\u03FC" +
		"\x03\x02\x02\x02\u03FB\u03F7\x03\x02\x02\x02\u03FB\u03FC\x03\x02\x02\x02" +
		"\u03FC\x9F\x03\x02\x02\x02\u03FD\u03FE\x07\xB9\x02\x02\u03FE\u03FF\x07" +
		"\xBA\x02\x02\u03FF\xA1\x03\x02\x02\x02\u0400\u0401\x05\xACW\x02\u0401" +
		"\xA3\x03\x02\x02\x02\u0402\u0403\x07\xBB\x02\x02\u0403\u0404\x05\x92J" +
		"\x02\u0404\u0405\x07\xBC\x02\x02\u0405\u040C\x03\x02\x02\x02\u0406\u0407" +
		"\x07\xBB\x02\x02\u0407\u0409\x07\xBC\x02\x02\u0408\u040A\x05,\x17\x02" +
		"\u0409\u0408\x03\x02\x02\x02\u0409\u040A\x03\x02\x02\x02\u040A\u040C\x03" +
		"\x02\x02\x02\u040B\u0402\x03\x02\x02\x02\u040B\u0406\x03\x02\x02\x02\u040C" +
		"\xA5\x03\x02\x02\x02\u040D\u040E\x07\xB9\x02\x02\u040E\u0413\x05\xA8U" +
		"\x02\u040F\u0410\x07\xBE\x02\x02\u0410\u0412\x05\xA8U\x02\u0411\u040F" +
		"\x03\x02\x02\x02\u0412\u0415\x03\x02\x02\x02\u0413\u0411\x03\x02\x02\x02" +
		"\u0413\u0414\x03\x02\x02\x02\u0414\u0416\x03\x02\x02\x02\u0415\u0413\x03" +
		"\x02\x02\x02\u0416\u0417\x07\xBA\x02\x02\u0417\xA7\x03\x02\x02\x02\u0418" +
		"\u0419\x05\x92J\x02\u0419\u041A\x07\xD9\x02\x02\u041A\u041B\x05\x92J\x02" +
		"\u041B\xA9\x03\x02\x02\x02\u041C\u041D\x07\xB9\x02\x02\u041D\u0422\x05" +
		"\x92J\x02\u041E\u041F\x07\xBE\x02\x02\u041F\u0421\x05\x92J\x02\u0420\u041E" +
		"\x03\x02\x02\x02\u0421\u0424\x03\x02\x02\x02\u0422\u0420\x03\x02\x02\x02" +
		"\u0422\u0423\x03\x02\x02\x02\u0423\u0425\x03\x02\x02\x02\u0424\u0422\x03" +
		"\x02\x02\x02\u0425\u0426\x07\xBA\x02\x02\u0426\xAB\x03\x02\x02\x02\u0427" +
		"\u0429\x07\xB7\x02\x02\u0428\u042A\x05\x90I\x02\u0429\u0428\x03\x02\x02" +
		"\x02\u0429\u042A\x03\x02\x02\x02\u042A\u042B\x03\x02\x02\x02\u042B\u042C" +
		"\x07\xB8\x02\x02\u042C\xAD\x03\x02\x02\x02\u042D\u042E\x07\xBB\x02\x02" +
		"\u042E\u042F\x05\xB0Y\x02\u042F\u0430\x07\xBC\x02\x02\u0430\xAF\x03\x02" +
		"\x02\x02\u0431\u0432\x07;\x02\x02\u0432\u0433\x05\xB4[\x02\u0433\u0434" +
		"\x07=\x02\x02\u0434\u0436\x05\xBA^\x02\u0435\u0437\x05\xCCg\x02\u0436" +
		"\u0435\x03\x02\x02\x02\u0436\u0437\x03\x02\x02\x02\u0437\u0439\x03\x02" +
		"\x02\x02\u0438\u043A\x05\xCEh\x02\u0439\u0438\x03\x02\x02\x02\u0439\u043A" +
		"\x03\x02\x02\x02\u043A\u043C\x03\x02\x02\x02\u043B\u043D\x05\xDEp\x02" +
		"\u043C\u043B\x03\x02\x02\x02\u043C\u043D\x03\x02\x02\x02\u043D\u043F\x03" +
		"\x02\x02\x02\u043E\u0440\x05\xE8u\x02\u043F\u043E\x03\x02\x02\x02\u043F" +
		"\u0440\x03\x02\x02\x02\u0440\u0442\x03\x02\x02\x02\u0441\u0443\x05\xEA" +
		"v\x02\u0442\u0441\x03\x02\x02\x02\u0442\u0443\x03\x02\x02\x02\u0443\u0445" +
		"\x03\x02\x02\x02\u0444\u0446\x05\xF0y\x02\u0445\u0444\x03\x02\x02\x02" +
		"\u0445\u0446\x03\x02\x02\x02\u0446\u0448\x03\x02\x02\x02\u0447\u0449\x05" +
		"\xF2z\x02\u0448\u0447\x03\x02\x02\x02\u0448\u0449\x03\x02\x02\x02\u0449" +
		"\u044B\x03\x02\x02\x02\u044A\u044C\x05\xF4{\x02\u044B\u044A\x03\x02\x02" +
		"\x02\u044B\u044C\x03\x02\x02\x02\u044C\u044D\x03\x02\x02\x02\u044D\u044E" +
		"\x05\xF6|\x02\u044E\xB1\x03\x02\x02\x02\u044F\u0450\x07;\x02\x02\u0450" +
		"\u0451\x05\xBC_\x02\u0451\u0452\x07=\x02\x02\u0452\u0454\x05\xBA^\x02" +
		"\u0453\u0455\x05\xCEh\x02\u0454\u0453\x03\x02\x02\x02\u0454\u0455\x03" +
		"\x02\x02\x02\u0455\u0457\x03\x02\x02\x02\u0456\u0458\x05\xEAv\x02\u0457" +
		"\u0456\x03\x02\x02\x02\u0457\u0458\x03\x02\x02\x02\u0458\u045A\x03\x02" +
		"\x02\x02\u0459\u045B\x05\xF0y\x02\u045A\u0459\x03\x02\x02\x02\u045A\u045B" +
		"\x03\x02\x02\x02\u045B\u045C\x03\x02\x02\x02\u045C\u045D\x05\xF6|\x02" +
		"\u045D\xB3\x03\x02\x02\x02\u045E\u0463\x05\xB6\\\x02\u045F\u0460\x07\xBE" +
		"\x02\x02\u0460\u0462\x05\xB6\\\x02\u0461\u045F\x03\x02\x02\x02\u0462\u0465" +
		"\x03\x02\x02\x02\u0463\u0461\x03\x02\x02\x02\u0463\u0464\x03\x02\x02\x02" +
		"\u0464\xB5\x03\x02\x02\x02\u0465\u0463\x03\x02\x02\x02\u0466\u0468\x05" +
		"\xB8]\x02\u0467\u0469\x05\xFE\x80\x02\u0468\u0467\x03\x02\x02\x02\u0468" +
		"\u0469\x03\x02\x02\x02\u0469\u0476\x03\x02\x02\x02\u046A\u046C\x05\xC0" +
		"a\x02\u046B\u046D\x05\xFE\x80\x02\u046C\u046B\x03\x02\x02\x02\u046C\u046D" +
		"\x03\x02\x02\x02\u046D\u0476\x03\x02\x02\x02\u046E\u046F\x07\xB7\x02\x02" +
		"\u046F\u0470\x05\xB2Z\x02\u0470\u0472\x07\xB8\x02\x02\u0471\u0473\x05" +
		"\xFE\x80\x02\u0472\u0471\x03\x02\x02\x02\u0472\u0473\x03\x02\x02\x02\u0473" +
		"\u0476\x03\x02\x02\x02\u0474\u0476\x05\xC4c\x02\u0475\u0466\x03\x02\x02" +
		"\x02\u0475\u046A\x03\x02\x02\x02\u0475\u046E\x03\x02\x02\x02\u0475\u0474" +
		"\x03\x02\x02\x02\u0476\xB7\x03\x02\x02\x02\u0477\u047C\x05\xFE\x80\x02" +
		"\u0478\u0479\x07\xBF\x02\x02\u0479\u047B\x05\xFE\x80\x02\u047A\u0478\x03" +
		"\x02\x02\x02\u047B\u047E\x03\x02\x02\x02\u047C\u047A\x03\x02\x02\x02\u047C" +
		"\u047D\x03\x02\x02\x02\u047D\xB9\x03\x02\x02\x02\u047E\u047C\x03\x02\x02" +
		"\x02\u047F\u0481\x05\xB8]\x02\u0480\u0482\x05\xFE\x80\x02\u0481\u0480" +
		"\x03\x02\x02\x02\u0481\u0482\x03\x02\x02\x02\u0482\u048A\x03\x02\x02\x02" +
		"\u0483\u0484\x07\xBE\x02\x02\u0484\u0486\x05\xB8]\x02\u0485\u0487\x05" +
		"\xFE\x80\x02\u0486\u0485\x03\x02\x02\x02\u0486\u0487\x03\x02\x02\x02\u0487" +
		"\u0489\x03\x02\x02\x02\u0488\u0483\x03\x02\x02\x02\u0489\u048C\x03\x02" +
		"\x02\x02\u048A\u0488\x03\x02\x02\x02\u048A\u048B\x03\x02\x02\x02\u048B" +
		"\xBB\x03\x02\x02\x02\u048C\u048A\x03\x02\x02\x02\u048D\u0492\x05\xBE`" +
		"\x02\u048E\u048F\x07\xBE\x02\x02\u048F\u0491\x05\xBE`\x02\u0490\u048E" +
		"\x03\x02\x02\x02\u0491\u0494\x03\x02\x02\x02\u0492\u0490\x03\x02\x02\x02" +
		"\u0492\u0493\x03\x02\x02\x02\u0493\xBD\x03\x02\x02\x02\u0494\u0492\x03" +
		"\x02\x02\x02\u0495\u0497\x05\xB8]\x02\u0496\u0498\x05\xFE\x80\x02\u0497" +
		"\u0496\x03\x02\x02\x02\u0497\u0498\x03\x02\x02\x02\u0498\u049E\x03\x02" +
		"\x02\x02\u0499\u049B\x05\xC0a\x02\u049A\u049C\x05\xFE\x80\x02\u049B\u049A" +
		"\x03\x02\x02\x02\u049B\u049C\x03\x02\x02\x02\u049C\u049E\x03\x02\x02\x02" +
		"\u049D\u0495\x03\x02\x02\x02\u049D\u0499\x03\x02\x02\x02\u049E\xBF\x03" +
		"\x02\x02\x02\u049F\u04A0\x07H\x02\x02\u04A0\u04A1\x07\xB7\x02\x02\u04A1" +
		"\u04A2\x05\xB8]\x02\u04A2\u04A3\x07\xB8\x02\x02\u04A3\u050C\x03\x02\x02" +
		"\x02\u04A4\u04A5\x07<\x02\x02\u04A5\u04A6\x07\xB7\x02\x02\u04A6\u050C" +
		"\x07\xB8\x02\x02\u04A7\u04A8\x07<\x02\x02\u04A8\u04A9\x07\xB7\x02\x02" +
		"\u04A9\u04AA\x05\xB8]\x02\u04AA\u04AB\x07\xB8\x02\x02\u04AB\u050C\x03" +
		"\x02\x02\x02\u04AC\u04AD\x07I\x02\x02\u04AD\u04AE\x07\xB7\x02\x02\u04AE" +
		"\u04AF\x05\xB8]\x02\u04AF\u04B0\x07\xB8\x02\x02\u04B0\u050C\x03\x02\x02" +
		"\x02\u04B1\u04B2\x07J\x02\x02\u04B2\u04B3\x07\xB7\x02\x02\u04B3\u04B4" +
		"\x05\xB8]\x02\u04B4\u04B5\x07\xB8\x02\x02\u04B5\u050C\x03\x02\x02\x02" +
		"\u04B6\u04B7\x07K\x02\x02\u04B7\u04B8\x07\xB7\x02\x02\u04B8\u04B9\x05" +
		"\xB8]\x02\u04B9\u04BA\x07\xB8\x02\x02\u04BA\u050C\x03\x02\x02\x02\u04BB" +
		"\u04BC\x07L\x02\x02\u04BC\u04BD\x07\xB7\x02\x02\u04BD\u04BE\x05\xB8]\x02" +
		"\u04BE\u04BF\x07\xB8\x02\x02\u04BF\u050C\x03\x02\x02\x02\u04C0\u04C1\x07" +
		"_\x02\x02\u04C1\u04C2\x07\xB7\x02\x02\u04C2\u04C3\x05\xB8]\x02\u04C3\u04C4" +
		"\x07\xB8\x02\x02\u04C4\u050C\x03\x02\x02\x02\u04C5\u04C6\x07j\x02\x02" +
		"\u04C6\u04C7\x07\xB7\x02\x02\u04C7\u04C8\x05\xB8]\x02\u04C8\u04C9\x07" +
		"\xB8\x02\x02\u04C9\u050C\x03\x02\x02\x02\u04CA\u04CB\x07m\x02\x02\u04CB" +
		"\u04CC\x07\xB7\x02\x02\u04CC\u04CD\x05\xC2b\x02\u04CD\u04CE\x07\xB8\x02" +
		"\x02\u04CE\u050C\x03\x02\x02\x02\u04CF\u04D0\x07n\x02\x02\u04D0\u04D1" +
		"\x07\xB7\x02\x02\u04D1\u04D2\x05\xC2b\x02\u04D2\u04D3\x07\xB8\x02\x02" +
		"\u04D3\u050C\x03\x02\x02\x02\u04D4\u04D5\x07o\x02\x02\u04D5\u04D6\x07" +
		"\xB7\x02\x02\u04D6\u04D7\x05\xC2b\x02\u04D7\u04D8\x07\xB8\x02\x02\u04D8" +
		"\u050C\x03\x02\x02\x02\u04D9\u04DA\x07p\x02\x02\u04DA\u04DB\x07\xB7\x02" +
		"\x02\u04DB\u04DC\x05\xC2b\x02\u04DC\u04DD\x07\xB8\x02\x02\u04DD\u050C" +
		"\x03\x02\x02\x02\u04DE\u04DF\x07q\x02\x02\u04DF\u04E0\x07\xB7\x02\x02" +
		"\u04E0\u04E1\x05\xC2b\x02\u04E1\u04E2\x07\xB8\x02\x02\u04E2\u050C\x03" +
		"\x02\x02\x02\u04E3\u04E4\x07r\x02\x02\u04E4\u04E5\x07\xB7\x02\x02\u04E5" +
		"\u04E6\x05\xC2b\x02\u04E6\u04E7\x07\xB8\x02\x02\u04E7\u050C\x03\x02\x02" +
		"\x02\u04E8\u04E9\x07s\x02\x02\u04E9\u04EA\x07\xB7\x02\x02\u04EA\u04EB" +
		"\x05\xC2b\x02\u04EB\u04EC\x07\xB8\x02\x02\u04EC\u050C\x03\x02\x02\x02" +
		"\u04ED\u04EE\x07t\x02\x02\u04EE\u04EF\x07\xB7\x02\x02\u04EF\u04F0\x05" +
		"\xC2b\x02\u04F0\u04F1\x07\xB8\x02\x02\u04F1\u050C\x03\x02\x02\x02\u04F2" +
		"\u04F3\x07u\x02\x02\u04F3\u04F4\x07\xB7\x02\x02\u04F4\u04F5\x05\xC2b\x02" +
		"\u04F5\u04F6\x07\xB8\x02\x02\u04F6\u050C\x03\x02\x02\x02\u04F7\u04F8\x07" +
		"v\x02\x02\u04F8\u04F9\x07\xB7\x02\x02\u04F9\u04FA\x05\xC2b\x02\u04FA\u04FB" +
		"\x07\xB8\x02\x02\u04FB\u050C\x03\x02\x02\x02\u04FC\u04FD\x07w\x02\x02" +
		"\u04FD\u04FE\x07\xB7\x02\x02\u04FE\u04FF\x05\xC2b\x02\u04FF\u0500\x07" +
		"\xB8\x02\x02\u0500\u050C\x03\x02\x02\x02\u0501\u0502\x07x\x02\x02\u0502" +
		"\u0503\x07\xB7\x02\x02\u0503\u0504\x05\xC2b\x02\u0504\u0505\x07\xB8\x02" +
		"\x02\u0505\u050C\x03\x02\x02\x02\u0506\u0507\x07y\x02\x02\u0507\u0508" +
		"\x07\xB7\x02\x02\u0508\u0509\x05\xC2b\x02\u0509\u050A\x07\xB8\x02\x02" +
		"\u050A\u050C\x03\x02\x02\x02\u050B\u049F\x03\x02\x02\x02\u050B\u04A4\x03" +
		"\x02\x02\x02\u050B\u04A7\x03\x02\x02\x02\u050B\u04AC\x03\x02\x02\x02\u050B" +
		"\u04B1\x03\x02\x02\x02\u050B\u04B6\x03\x02\x02\x02\u050B\u04BB\x03\x02" +
		"\x02\x02\u050B\u04C0\x03\x02\x02\x02\u050B\u04C5\x03\x02\x02\x02\u050B" +
		"\u04CA\x03\x02\x02\x02\u050B\u04CF\x03\x02\x02\x02\u050B\u04D4\x03\x02" +
		"\x02\x02\u050B\u04D9\x03\x02\x02\x02\u050B\u04DE\x03\x02\x02\x02\u050B" +
		"\u04E3\x03\x02\x02\x02\u050B\u04E8\x03\x02\x02\x02\u050B\u04ED\x03\x02" +
		"\x02\x02\u050B\u04F2\x03\x02\x02\x02\u050B\u04F7\x03\x02\x02\x02\u050B" +
		"\u04FC\x03\x02\x02\x02\u050B\u0501\x03\x02\x02\x02\u050B\u0506\x03\x02" +
		"\x02\x02\u050C\xC1\x03\x02\x02\x02\u050D\u050E\x07z\x02\x02\u050E\u050F" +
		"\x07\xB7\x02\x02\u050F\u0510\x05\xB8]\x02\u0510\u0511\x07\xB8\x02\x02" +
		"\u0511\u0514\x03\x02\x02\x02\u0512\u0514\x05\xB8]\x02\u0513\u050D\x03" +
		"\x02\x02\x02\u0513\u0512\x03\x02\x02\x02\u0514\xC3\x03\x02\x02\x02\u0515" +
		"\u0516\x07M\x02\x02\u0516\u0518\x05\xB8]\x02\u0517\u0519\x05\xC6d\x02" +
		"\u0518\u0517\x03\x02\x02\x02\u0519\u051A\x03\x02\x02\x02\u051A\u0518\x03" +
		"\x02\x02\x02\u051A\u051B\x03\x02\x02\x02\u051B\u051D\x03\x02\x02\x02\u051C" +
		"\u051E\x05\xC8e\x02\u051D\u051C\x03\x02\x02\x02\u051D\u051E\x03\x02\x02" +
		"\x02\u051E\u051F\x03\x02\x02\x02\u051F\u0520\x07N\x02\x02\u0520\xC5\x03" +
		"\x02\x02\x02\u0521\u0522\x075\x02\x02\u0522\u0523\x05\xB8]\x02\u0523\u0524" +
		"\x07O\x02\x02\u0524\u0525\x05\xCAf\x02\u0525\xC7\x03\x02\x02\x02\u0526" +
		"\u0527\x07\f\x02\x02\u0527\u0528\x05\xCAf\x02\u0528\xC9\x03\x02\x02\x02" +
		"\u0529\u052E\x05\xB8]\x02\u052A\u052B\x07\xBE\x02\x02\u052B\u052D\x05" +
		"\xB8]\x02\u052C\u052A\x03\x02\x02\x02\u052D\u0530\x03\x02\x02\x02\u052E" +
		"\u052C\x03\x02\x02\x02\u052E\u052F\x03\x02\x02\x02\u052F\xCB\x03\x02\x02" +
		"\x02\u0530\u052E\x03\x02\x02\x02\u0531\u0532\x07?\x02\x02\u0532\u0533" +
		"\x07@\x02\x02\u0533\u0534\x05\xFE\x80\x02\u0534\xCD\x03\x02\x02\x02\u0535" +
		"\u0536\x07A\x02\x02\u0536\u0537\x05\xD0i\x02\u0537\xCF\x03\x02\x02\x02" +
		"\u0538\u053D\x05\xD2j\x02\u0539\u053A\x07E\x02\x02\u053A\u053C\x05\xD2" +
		"j\x02\u053B\u0539\x03\x02\x02\x02\u053C\u053F\x03\x02\x02\x02\u053D\u053B" +
		"\x03\x02\x02\x02\u053D\u053E\x03\x02\x02\x02\u053E\u054B\x03\x02\x02\x02" +
		"\u053F\u053D\x03\x02\x02\x02\u0540\u0545\x05\xD2j\x02\u0541\u0542\x07" +
		"F\x02\x02\u0542\u0544\x05\xD2j\x02\u0543\u0541\x03\x02\x02\x02\u0544\u0547" +
		"\x03\x02\x02\x02\u0545\u0543\x03\x02\x02\x02\u0545\u0546\x03\x02\x02\x02" +
		"\u0546\u054B\x03\x02\x02\x02\u0547\u0545\x03\x02\x02\x02\u0548\u0549\x07" +
		"G\x02\x02\u0549\u054B\x05\xD2j\x02\u054A\u0538\x03\x02\x02\x02\u054A\u0540" +
		"\x03\x02\x02\x02\u054A\u0548\x03\x02\x02\x02\u054B\xD1\x03\x02\x02\x02" +
		"\u054C\u054D\x07\xB7\x02\x02\u054D\u054E\x05\xD0i\x02\u054E\u054F\x07" +
		"\xB8\x02\x02\u054F\u0552\x03\x02\x02\x02\u0550\u0552\x05\xD4k\x02\u0551" +
		"\u054C\x03\x02\x02\x02\u0551\u0550\x03\x02\x02\x02\u0552\xD3\x03\x02\x02" +
		"\x02\u0553\u0554\x05\xB8]\x02\u0554\u0555\x05\xD6l\x02\u0555\u0556\x05" +
		"\xD8m\x02\u0556\u055C\x03\x02\x02\x02\u0557\u0558\x05\xC0a\x02\u0558\u0559" +
		"\x05\xD6l\x02\u0559\u055A\x05\xD8m\x02\u055A\u055C\x03\x02\x02\x02\u055B" +
		"\u0553\x03\x02\x02\x02\u055B\u0557\x03\x02\x02\x02\u055C\xD5\x03\x02\x02" +
		"\x02\u055D\u056D\x07\xC0\x02\x02\u055E\u056D\x07\xCA\x02\x02\u055F\u056D" +
		"\x07\xC2\x02\x02\u0560\u056D\x07\xC1\x02\x02\u0561\u0562\x07\xC2\x02\x02" +
		"\u0562\u056D\x07\xC0\x02\x02\u0563\u0564\x07\xC1\x02\x02\u0564\u056D\x07" +
		"\xC0\x02\x02\u0565\u056D\x07\xCB\x02\x02\u0566\u056D\x07P\x02\x02\u0567" +
		"\u056D\x07Q\x02\x02\u0568\u0569\x07G\x02\x02\u0569\u056D\x07Q\x02\x02" +
		"\u056A\u056D\x07R\x02\x02\u056B\u056D\x07S\x02\x02\u056C\u055D\x03\x02" +
		"\x02\x02\u056C\u055E\x03\x02\x02\x02\u056C\u055F\x03\x02\x02\x02\u056C" +
		"\u0560\x03\x02\x02\x02\u056C\u0561\x03\x02\x02\x02\u056C\u0563\x03\x02" +
		"\x02\x02\u056C\u0565\x03\x02\x02\x02\u056C\u0566\x03\x02\x02\x02\u056C" +
		"\u0567\x03\x02\x02\x02\u056C\u0568\x03\x02\x02\x02\u056C\u056A\x03\x02" +
		"\x02\x02\u056C\u056B\x03\x02\x02\x02\u056D\xD7\x03\x02\x02\x02\u056E\u057F" +
		"\x07\x1C\x02\x02\u056F\u057F\x07\xB4\x02\x02\u0570\u057F\x07\xB1\x02\x02" +
		"\u0571\u057F\x07\xB2\x02\x02\u0572\u057F\x07\xB3\x02\x02\u0573\u057F\x07" +
		"\xB5\x02\x02\u0574\u057F\x07\xA0\x02\x02\u0575\u057F\x07\xA1\x02\x02\u0576" +
		"\u057F\x05\xFA~\x02\u0577\u057F\x05\xDCo\x02\u0578\u0579\x07\xB7\x02\x02" +
		"\u0579\u057A\x05\xB2Z\x02\u057A\u057B\x07\xB8\x02\x02\u057B\u057F\x03" +
		"\x02\x02\x02\u057C\u057F\x05\xDAn\x02\u057D\u057F\x05\xF8}\x02\u057E\u056E" +
		"\x03\x02\x02\x02\u057E\u056F\x03\x02\x02\x02\u057E\u0570\x03\x02\x02\x02" +
		"\u057E\u0571\x03\x02\x02\x02\u057E\u0572\x03\x02\x02\x02\u057E\u0573\x03" +
		"\x02\x02\x02\u057E\u0574\x03\x02\x02\x02\u057E\u0575\x03\x02\x02\x02\u057E" +
		"\u0576\x03\x02\x02\x02\u057E\u0577\x03\x02\x02\x02\u057E\u0578\x03\x02" +
		"\x02\x02\u057E\u057C\x03\x02\x02\x02\u057E\u057D\x03\x02\x02\x02\u057F" +
		"\xD9\x03\x02\x02\x02\u0580\u0581\x07\xB7\x02\x02\u0581\u0586\x05\xD8m" +
		"\x02\u0582\u0583\x07\xBE\x02\x02\u0583\u0585\x05\xD8m\x02\u0584\u0582" +
		"\x03\x02\x02\x02\u0585\u0588\x03\x02\x02\x02\u0586\u0584\x03\x02\x02\x02" +
		"\u0586\u0587\x03\x02\x02\x02\u0587\u0589\x03\x02\x02\x02\u0588\u0586\x03" +
		"\x02\x02\x02\u0589\u058A\x07\xB8\x02\x02\u058A\xDB\x03\x02\x02\x02\u058B" +
		"\u058C\x05\xFE\x80\x02\u058C\u058D\x05\xFC\x7F\x02\u058D\xDD\x03\x02\x02" +
		"\x02\u058E\u058F\x077\x02\x02\u058F\u0590\x07a\x02\x02\u0590\u0591\x07" +
		"b\x02\x02\u0591\u0597\x05\xE0q\x02\u0592\u0593\x077\x02\x02\u0593\u0597" +
		"\x07g\x02\x02\u0594\u0595\x077\x02\x02\u0595\u0597\x05\xD0i\x02\u0596" +
		"\u058E\x03\x02\x02\x02\u0596\u0592\x03\x02\x02\x02\u0596\u0594\x03\x02" +
		"\x02\x02\u0597\xDF\x03\x02\x02\x02\u0598\u059D\x05\xE2r\x02\u0599\u059A" +
		"\x07\xCD\x02\x02\u059A\u059C\x05\xE2r\x02\u059B\u0599\x03\x02\x02\x02" +
		"\u059C\u059F\x03\x02\x02\x02\u059D\u059B\x03\x02\x02\x02\u059D\u059E\x03" +
		"\x02\x02\x02\u059E\xE1\x03\x02\x02\x02\u059F\u059D\x03\x02\x02\x02\u05A0" +
		"\u05A1\x05\xFE\x80\x02\u05A1\u05A2\x05\xE6t\x02\u05A2\u05A3\x05\xE4s\x02" +
		"\u05A3\xE3\x03\x02\x02\x02\u05A4\u05B1\x05\xFE\x80\x02\u05A5\u05A6\x07" +
		"\xB7\x02\x02\u05A6\u05AB\x05\xFE\x80\x02\u05A7\u05A8\x07\xBE\x02\x02\u05A8" +
		"\u05AA\x05\xFE\x80\x02\u05A9\u05A7\x03\x02\x02\x02\u05AA\u05AD\x03\x02" +
		"\x02\x02\u05AB\u05A9\x03\x02\x02\x02\u05AB\u05AC\x03\x02\x02\x02\u05AC" +
		"\u05AE\x03\x02\x02\x02\u05AD\u05AB\x03\x02\x02\x02\u05AE\u05AF\x07\xB7" +
		"\x02\x02\u05AF\u05B1\x03\x02\x02\x02\u05B0\u05A4\x03\x02\x02\x02\u05B0" +
		"\u05A5\x03\x02\x02\x02\u05B1\xE5\x03\x02\x02\x02\u05B2\u05B3\t\x0E\x02" +
		"\x02\u05B3\xE7\x03\x02\x02\x02\u05B4\u05B5\x07Y\x02\x02\u05B5\u05B6\x07" +
		"C\x02\x02\u05B6\u05B9\x05\xB4[\x02\u05B7\u05B8\x07]\x02\x02\u05B8\u05BA" +
		"\x05\xD0i\x02\u05B9\u05B7\x03\x02\x02\x02\u05B9\u05BA\x03\x02\x02\x02" +
		"\u05BA\u05D8\x03\x02\x02\x02\u05BB\u05BC\x07Y\x02\x02\u05BC\u05BD\x07" +
		"C\x02\x02\u05BD\u05BE\x07^\x02\x02\u05BE\u05BF\x07\xB7\x02\x02\u05BF\u05C4" +
		"\x05\xB8]\x02\u05C0\u05C1\x07\xBE\x02\x02\u05C1\u05C3\x05\xB8]\x02\u05C2" +
		"\u05C0\x03\x02\x02\x02\u05C3\u05C6\x03\x02\x02\x02\u05C4\u05C2\x03\x02" +
		"\x02\x02\u05C4\u05C5\x03\x02\x02\x02\u05C5\u05C7\x03\x02\x02\x02\u05C6" +
		"\u05C4\x03\x02\x02\x02\u05C7\u05C8\x07\xB8\x02\x02\u05C8\u05D8\x03\x02" +
		"\x02\x02\u05C9\u05CA\x07Y\x02\x02\u05CA\u05CB\x07C\x02\x02\u05CB\u05CC" +
		"\x07i\x02\x02\u05CC\u05CD\x07\xB7\x02\x02\u05CD\u05D2\x05\xB8]\x02\u05CE" +
		"\u05CF\x07\xBE\x02\x02\u05CF\u05D1\x05\xB8]\x02\u05D0\u05CE\x03\x02\x02" +
		"\x02\u05D1\u05D4\x03\x02\x02\x02\u05D2\u05D0\x03\x02\x02\x02\u05D2\u05D3" +
		"\x03\x02\x02\x02\u05D3\u05D5\x03\x02\x02\x02\u05D4\u05D2\x03\x02\x02\x02" +
		"\u05D5\u05D6\x07\xB8\x02\x02\u05D6\u05D8\x03\x02\x02\x02\u05D7\u05B4\x03" +
		"\x02\x02\x02\u05D7\u05BB\x03\x02\x02\x02\u05D7\u05C9\x03\x02\x02\x02\u05D8" +
		"\xE9\x03\x02\x02\x02\u05D9\u05DA\x07B\x02\x02\u05DA\u05DB\x07C\x02\x02" +
		"\u05DB\u05DC\x05\xECw\x02\u05DC\xEB\x03\x02\x02\x02\u05DD\u05E2\x05\xEE" +
		"x\x02\u05DE\u05DF\x07\xBE\x02\x02\u05DF\u05E1\x05\xEEx\x02\u05E0\u05DE" +
		"\x03\x02\x02\x02\u05E1\u05E4\x03\x02\x02\x02\u05E2\u05E0\x03\x02\x02\x02" +
		"\u05E2\u05E3\x03\x02\x02\x02\u05E3\xED\x03\x02\x02\x02\u05E4\u05E2\x03" +
		"\x02\x02\x02\u05E5\u05E7\x05\xB8]\x02\u05E6\u05E8\t\x0F\x02\x02\u05E7" +
		"\u05E6\x03\x02\x02\x02\u05E7\u05E8\x03\x02\x02\x02\u05E8\u05EB\x03\x02" +
		"\x02\x02\u05E9\u05EA\x07V\x02\x02\u05EA\u05EC\t\x10\x02\x02\u05EB\u05E9" +
		"\x03\x02\x02\x02\u05EB\u05EC\x03\x02\x02\x02\u05EC\u05F6\x03\x02\x02\x02" +
		"\u05ED\u05EF\x05\xC0a\x02\u05EE\u05F0\t\x0F\x02\x02\u05EF\u05EE\x03\x02" +
		"\x02\x02\u05EF\u05F0\x03\x02\x02\x02\u05F0\u05F3\x03\x02\x02\x02\u05F1" +
		"\u05F2\x07V\x02\x02\u05F2\u05F4\t\x10\x02\x02\u05F3\u05F1\x03\x02\x02" +
		"\x02\u05F3\u05F4\x03\x02\x02\x02\u05F4\u05F6\x03\x02\x02\x02\u05F5\u05E5" +
		"\x03\x02\x02\x02\u05F5\u05ED\x03\x02\x02\x02\u05F6\xEF\x03\x02\x02\x02" +
		"\u05F7\u05F8\x07D\x02\x02\u05F8\u05FC\x07\xB1\x02\x02\u05F9\u05FA\x07" +
		"D\x02\x02\u05FA\u05FC\x05\xF8}\x02\u05FB\u05F7\x03\x02\x02\x02\u05FB\u05F9" +
		"\x03\x02\x02\x02\u05FC\xF1\x03\x02\x02\x02\u05FD\u05FE\x07`\x02\x02\u05FE" +
		"\u0602\x07\xB1\x02\x02\u05FF\u0600\x07`\x02\x02\u0600\u0602\x05\xF8}\x02" +
		"\u0601\u05FD\x03\x02\x02\x02\u0601\u05FF\x03\x02\x02\x02\u0602\xF3\x03" +
		"\x02\x02\x02\u0603\u0604\x07Z\x02\x02\u0604\u0605\x07[\x02\x02\u0605\xF5" +
		"\x03\x02\x02\x02\u0606\u0607\x07\x11\x02\x02\u0607\u0609\t\x11\x02\x02" +
		"\u0608\u0606\x03\x02\x02\x02\u0609\u060C\x03\x02\x02\x02\u060A\u0608\x03" +
		"\x02\x02\x02\u060A\u060B\x03\x02\x02\x02\u060B\xF7\x03\x02\x02\x02\u060C" +
		"\u060A\x03\x02\x02\x02\u060D\u060E\x07\xC7\x02\x02\u060E\u060F\x05\x92" +
		"J\x02\u060F\xF9\x03\x02\x02\x02\u0610\u0652\x07{\x02\x02\u0611\u0652\x07" +
		"|\x02\x02\u0612\u0652\x07}\x02\x02\u0613\u0652\x07~\x02\x02\u0614\u0652" +
		"\x07\x7F\x02\x02\u0615\u0652\x07\x80\x02\x02\u0616\u0652\x07\x81\x02\x02" +
		"\u0617\u0652\x07\x82\x02\x02\u0618\u0652\x07\x83\x02\x02\u0619\u0652\x07" +
		"\x84\x02\x02\u061A\u0652\x07\x85\x02\x02\u061B\u061C\x07\x86\x02\x02\u061C" +
		"\u061D\x07\xC7\x02\x02\u061D\u0652\x05\xFC\x7F\x02\u061E\u061F\x07\x87" +
		"\x02\x02\u061F\u0620\x07\xC7\x02\x02\u0620\u0652\x05\xFC\x7F\x02\u0621" +
		"\u0622\x07\x88\x02\x02\u0622\u0623\x07\xC7\x02\x02\u0623\u0652\x05\xFC" +
		"\x7F\x02\u0624\u0625\x07\x89\x02\x02\u0625\u0626\x07\xC7\x02\x02\u0626" +
		"\u0652\x05\xFC\x7F\x02\u0627\u0628\x07\x8A\x02\x02\u0628\u0629\x07\xC7" +
		"\x02\x02\u0629\u0652\x05\xFC\x7F\x02\u062A\u062B\x07\x8B\x02\x02\u062B" +
		"\u062C\x07\xC7\x02\x02\u062C\u0652\x05\xFC\x7F\x02\u062D\u0652\x07\x8C" +
		"\x02\x02\u062E\u0652\x07\x8D\x02\x02\u062F\u0652\x07\x8E\x02\x02\u0630" +
		"\u0631\x07\x8F\x02\x02\u0631\u0632\x07\xC7\x02\x02\u0632\u0652\x05\xFC" +
		"\x7F\x02\u0633\u0634\x07\x90\x02\x02\u0634\u0635\x07\xC7\x02\x02\u0635" +
		"\u0652\x05\xFC\x7F\x02\u0636\u0652\x07\x91\x02\x02\u0637\u0652\x07\x92" +
		"\x02\x02\u0638\u0652\x07\x93\x02\x02\u0639\u063A\x07\x94\x02\x02\u063A" +
		"\u063B\x07\xC7\x02\x02\u063B\u0652\x05\xFC\x7F\x02\u063C\u063D\x07\x95" +
		"\x02\x02\u063D\u063E\x07\xC7\x02\x02\u063E\u0652\x05\xFC\x7F\x02\u063F" +
		"\u0652\x07\x96\x02\x02\u0640\u0652\x07\x97\x02\x02\u0641\u0652\x07\x98" +
		"\x02\x02\u0642\u0643\x07\x99\x02\x02\u0643\u0644\x07\xC7\x02\x02\u0644" +
		"\u0652\x05\xFC\x7F\x02\u0645\u0646\x07\x9A\x02\x02\u0646\u0647\x07\xC7" +
		"\x02\x02\u0647\u0652\x05\xFC\x7F\x02\u0648\u0652\x07\x9B\x02\x02\u0649" +
		"\u0652\x07\x9C\x02\x02\u064A\u0652\x07\x9D\x02\x02\u064B\u064C\x07\x9E" +
		"\x02\x02\u064C\u064D\x07\xC7\x02\x02\u064D\u0652\x05\xFC\x7F\x02\u064E" +
		"\u064F\x07\x9F\x02\x02\u064F\u0650\x07\xC7\x02\x02\u0650\u0652\x05\xFC" +
		"\x7F\x02\u0651\u0610\x03\x02\x02\x02\u0651\u0611\x03\x02\x02\x02\u0651" +
		"\u0612\x03\x02\x02\x02\u0651\u0613\x03\x02\x02\x02\u0651\u0614\x03\x02" +
		"\x02\x02\u0651\u0615\x03\x02\x02\x02\u0651\u0616\x03\x02\x02\x02\u0651" +
		"\u0617\x03\x02\x02\x02\u0651\u0618\x03\x02\x02\x02\u0651\u0619\x03\x02" +
		"\x02\x02\u0651\u061A\x03\x02\x02\x02\u0651\u061B\x03\x02\x02\x02\u0651" +
		"\u061E\x03\x02\x02\x02\u0651\u0621\x03\x02\x02\x02\u0651\u0624\x03\x02" +
		"\x02\x02\u0651\u0627\x03\x02\x02\x02\u0651\u062A\x03\x02\x02\x02\u0651" +
		"\u062D\x03\x02\x02\x02\u0651\u062E\x03\x02\x02\x02\u0651\u062F\x03\x02" +
		"\x02\x02\u0651\u0630\x03\x02\x02\x02\u0651\u0633\x03\x02\x02\x02\u0651" +
		"\u0636\x03\x02\x02\x02\u0651\u0637\x03\x02\x02\x02\u0651\u0638\x03\x02" +
		"\x02\x02\u0651\u0639\x03\x02\x02\x02\u0651\u063C\x03\x02\x02\x02\u0651" +
		"\u063F\x03\x02\x02\x02\u0651\u0640\x03\x02\x02\x02\u0651\u0641\x03\x02" +
		"\x02\x02\u0651\u0642\x03\x02\x02\x02\u0651\u0645\x03\x02\x02\x02\u0651" +
		"\u0648\x03\x02\x02\x02\u0651\u0649\x03\x02\x02\x02\u0651\u064A\x03\x02" +
		"\x02\x02\u0651\u064B\x03\x02\x02\x02\u0651\u064E\x03\x02\x02\x02\u0652" +
		"\xFB\x03\x02\x02\x02\u0653\u0655\t\b\x02\x02\u0654\u0653\x03\x02\x02\x02" +
		"\u0654\u0655\x03\x02\x02\x02\u0655\u0656\x03\x02\x02\x02\u0656\u0657\x07" +
		"\xB1\x02\x02\u0657\xFD\x03\x02\x02\x02\u0658\u0659\x05\u0114\x8B\x02\u0659" +
		"\xFF\x03\x02\x02\x02\u065A\u065B\x07\xB0\x02\x02\u065B\u065C\x05\u0102" +
		"\x82\x02\u065C\u065D\x07\xBC\x02\x02\u065D\u0665\x03\x02\x02\x02\u065E" +
		"\u065F\x07\xBB\x02\x02\u065F\u0660\x07\xA2\x02\x02\u0660\u0661\x05\xF8" +
		"}\x02\u0661\u0662\x05\u0102\x82\x02\u0662\u0663\x07\xBC\x02\x02\u0663" +
		"\u0665\x03";
	private static readonly _serializedATNSegment3: string =
		"\x02\x02\x02\u0664\u065A\x03\x02\x02\x02\u0664\u065E\x03\x02\x02\x02\u0665" +
		"\u0101\x03\x02\x02\x02\u0666\u0667\x07Q\x02\x02\u0667\u0669\x05\u0104" +
		"\x83\x02\u0668\u0666\x03\x02\x02\x02\u0668\u0669\x03\x02\x02\x02\u0669" +
		"\u066C\x03\x02\x02\x02\u066A\u066B\x07\xAE\x02\x02\u066B\u066D\x05\u0106" +
		"\x84\x02\u066C\u066A\x03\x02\x02\x02\u066C\u066D\x03\x02\x02\x02\u066D" +
		"\u0672\x03\x02\x02\x02\u066E\u066F\x077\x02\x02\u066F\u0670\x07\xAD\x02" +
		"\x02\u0670\u0671\x07\xC0\x02\x02\u0671\u0673\x07\xB5\x02\x02\u0672\u066E" +
		"\x03\x02\x02\x02\u0672\u0673\x03\x02\x02\x02\u0673\u0678\x03\x02\x02\x02" +
		"\u0674\u0675\x077\x02\x02\u0675\u0676\x07a\x02\x02\u0676\u0677\x07b\x02" +
		"\x02\u0677\u0679\x05\xE0q\x02\u0678\u0674\x03\x02\x02\x02\u0678\u0679" +
		"\x03\x02\x02\x02\u0679\u0683\x03\x02\x02\x02\u067A\u067B\x077\x02\x02" +
		"\u067B\u0681\x07\xAB\x02\x02\u067C\u067D\x07\xB7\x02\x02\u067D\u067E\x07" +
		"\xAC\x02\x02\u067E\u067F\x07\xC0\x02\x02\u067F\u0680\x07\xB1\x02\x02\u0680" +
		"\u0682\x07\xB8\x02\x02\u0681\u067C\x03\x02\x02\x02\u0681\u0682\x03\x02" +
		"\x02\x02\u0682\u0684\x03\x02\x02\x02\u0683\u067A\x03\x02\x02\x02\u0683" +
		"\u0684\x03\x02\x02\x02\u0684\u068C\x03\x02\x02\x02\u0685\u0686\x077\x02" +
		"\x02\u0686\u0687\x07\xAA\x02\x02\u0687\u0688\x07Q\x02\x02\u0688\u0689" +
		"\x07\xB7\x02\x02\u0689\u068A\x05\u0110\x89\x02\u068A\u068B\x07\xB8\x02" +
		"\x02\u068B\u068D\x03\x02\x02\x02\u068C\u0685\x03\x02\x02\x02\u068C\u068D" +
		"\x03\x02\x02\x02\u068D\u0692\x03\x02\x02\x02\u068E\u068F\x077\x02\x02" +
		"\u068F\u0690\x07\xAA\x02\x02\u0690\u0691\x07\xC0\x02\x02\u0691\u0693\x07" +
		"\xB5\x02\x02\u0692\u068E\x03\x02\x02\x02\u0692\u0693\x03\x02\x02\x02\u0693" +
		"\u0698\x03\x02\x02\x02\u0694\u0695\x077\x02\x02\u0695\u0696\x07\xA9\x02" +
		"\x02\u0696\u0697\x07\xC0\x02\x02\u0697\u0699\x07\xB5\x02\x02\u0698\u0694" +
		"\x03\x02\x02\x02\u0698\u0699\x03\x02\x02\x02\u0699\u069E\x03\x02\x02\x02" +
		"\u069A\u069B\x077\x02\x02\u069B\u069C\x07\xA8\x02\x02\u069C\u069D\x07" +
		"\xC0\x02\x02\u069D\u069F\x07\xB5\x02\x02\u069E\u069A\x03\x02\x02\x02\u069E" +
		"\u069F\x03\x02\x02\x02\u069F\u06A1\x03\x02\x02\x02\u06A0\u06A2\x05\xF0" +
		"y\x02\u06A1\u06A0\x03\x02\x02\x02\u06A1\u06A2\x03\x02\x02\x02\u06A2\u06A5" +
		"\x03\x02\x02\x02\u06A3\u06A4\x070\x02\x02\u06A4\u06A6\x05\u010C\x87\x02" +
		"\u06A5\u06A3\x03\x02\x02\x02\u06A5\u06A6\x03\x02\x02\x02\u06A6\u0103\x03" +
		"\x02\x02\x02\u06A7\u06A8\t\x12\x02\x02\u06A8\u06A9\x07\xA7\x02\x02\u06A9" +
		"\u0105\x03\x02\x02\x02\u06AA\u06AF\x05\u0108\x85\x02\u06AB\u06AC\x07\xBE" +
		"\x02\x02\u06AC\u06AE\x05\u0106\x84\x02\u06AD\u06AB\x03\x02\x02\x02\u06AE" +
		"\u06B1\x03\x02\x02\x02\u06AF\u06AD\x03\x02\x02\x02\u06AF\u06B0\x03\x02" +
		"\x02\x02\u06B0\u0107\x03\x02\x02\x02\u06B1\u06AF\x03\x02\x02\x02\u06B2" +
		"\u06CC\x05\u0112\x8A\x02\u06B3\u06B4\x07\xB7\x02\x02\u06B4\u06B7\x05\u010A" +
		"\x86\x02\u06B5\u06B6\x07A\x02\x02\u06B6\u06B8\x05\xD0i\x02\u06B7\u06B5" +
		"\x03\x02\x02\x02\u06B7\u06B8\x03\x02\x02\x02\u06B8\u06BD\x03\x02\x02\x02" +
		"\u06B9\u06BA\x07?\x02\x02\u06BA\u06BB\x07\xAF\x02\x02\u06BB\u06BC\x07" +
		"\xC0\x02\x02\u06BC\u06BE\x05\u0112\x8A\x02\u06BD\u06B9\x03\x02\x02\x02" +
		"\u06BD\u06BE\x03\x02\x02\x02\u06BE\u06C2\x03\x02\x02\x02\u06BF\u06C0\x07" +
		"B\x02\x02\u06C0\u06C1\x07C\x02\x02\u06C1\u06C3\x05\xECw\x02\u06C2\u06BF" +
		"\x03\x02\x02\x02\u06C2\u06C3\x03\x02\x02\x02\u06C3\u06C5\x03\x02\x02\x02" +
		"\u06C4\u06C6\x05\xF0y\x02\u06C5\u06C4\x03\x02\x02\x02\u06C5\u06C6\x03" +
		"\x02\x02\x02\u06C6\u06C8\x03\x02\x02\x02\u06C7\u06C9\x05\xF2z\x02\u06C8" +
		"\u06C7\x03\x02\x02\x02\u06C8\u06C9\x03\x02\x02\x02\u06C9\u06CA\x03\x02" +
		"\x02\x02\u06CA\u06CB\x07\xB8\x02\x02\u06CB\u06CD\x03\x02\x02\x02\u06CC" +
		"\u06B3\x03\x02\x02\x02\u06CC\u06CD\x03\x02\x02\x02\u06CD\u0109\x03\x02" +
		"\x02\x02\u06CE\u06D3\x05\u0112\x8A\x02\u06CF\u06D0\x07\xBE\x02\x02\u06D0" +
		"\u06D2\x05\u010A\x86\x02\u06D1\u06CF\x03\x02\x02\x02\u06D2\u06D5\x03\x02" +
		"\x02\x02\u06D3\u06D1\x03\x02\x02\x02\u06D3\u06D4\x03\x02\x02\x02\u06D4" +
		"\u010B\x03\x02\x02\x02\u06D5\u06D3\x03\x02\x02\x02\u06D6\u06D9\x05\u010E" +
		"\x88\x02\u06D7\u06D8\x07\xBE\x02\x02\u06D8\u06DA\x05\u010C\x87\x02\u06D9" +
		"\u06D7\x03\x02\x02\x02\u06D9\u06DA\x03\x02\x02\x02\u06DA\u010D\x03\x02" +
		"\x02\x02\u06DB\u06DC\t\x13\x02\x02\u06DC\u010F\x03\x02\x02\x02\u06DD\u06E0" +
		"\x07\xB5\x02\x02\u06DE\u06DF\x07\xBE\x02\x02\u06DF\u06E1\x05\u0110\x89" +
		"\x02\u06E0\u06DE\x03\x02\x02\x02\u06E0\u06E1\x03\x02\x02\x02\u06E1\u0111" +
		"\x03\x02\x02\x02\u06E2\u06E7\x05\u0114\x8B\x02\u06E3\u06E4\x07\xBF\x02" +
		"\x02\u06E4\u06E6\x05\u0112\x8A\x02\u06E5\u06E3\x03\x02\x02\x02\u06E6\u06E9" +
		"\x03\x02\x02\x02\u06E7\u06E5\x03\x02\x02\x02\u06E7\u06E8\x03\x02\x02\x02" +
		"\u06E8\u0113\x03\x02\x02\x02\u06E9\u06E7\x03\x02\x02\x02\u06EA\u06EB\t" +
		"\x14\x02\x02\u06EB\u0115\x03\x02\x02\x02\u06EC\u06ED\t\x15\x02\x02\u06ED" +
		"\u0117\x03\x02\x02\x02\xAF\u0122\u0132\u0139\u0140\u0144\u014A\u014E\u0156" +
		"\u015F\u0166\u016F\u0176\u017F\u0186\u018C\u0190\u01A5\u01AE\u01B2\u01B8" +
		"\u01C8\u01D0\u01D5\u01E0\u01E6\u01EE\u01F2\u01F4\u01FD\u0206\u020B\u020F" +
		"\u0213\u0217\u0219\u0221\u022A\u0230\u023B\u0245\u0248\u024C\u0251\u025B" +
		"\u0263\u0266\u0269\u0271\u027C\u0296\u029D\u02A6\u02B4\u02BA\u02BD\u02C4" +
		"\u02DB\u02DE\u02E1\u02E5\u0306\u0312\u031D\u0322\u0327\u032C\u0333\u0340" +
		"\u0344\u0348\u034A\u034E\u0360\u0375\u0385\u038B\u03AD\u03B9\u03BB\u03C8" +
		"\u03CD\u03D4\u03DA\u03DD\u03E2\u03EC\u03F3\u03FB\u0409\u040B\u0413\u0422" +
		"\u0429\u0436\u0439\u043C\u043F\u0442\u0445\u0448\u044B\u0454\u0457\u045A" +
		"\u0463\u0468\u046C\u0472\u0475\u047C\u0481\u0486\u048A\u0492\u0497\u049B" +
		"\u049D\u050B\u0513\u051A\u051D\u052E\u053D\u0545\u054A\u0551\u055B\u056C" +
		"\u057E\u0586\u0596\u059D\u05AB\u05B0\u05B9\u05C4\u05D2\u05D7\u05E2\u05E7" +
		"\u05EB\u05EF\u05F3\u05F5\u05FB\u0601\u060A\u0651\u0654\u0664\u0668\u066C" +
		"\u0672\u0678\u0681\u0683\u068C\u0692\u0698\u069E\u06A1\u06A5\u06AF\u06B7" +
		"\u06BD\u06C2\u06C5\u06C8\u06CC\u06D3\u06D9\u06E0\u06E7";
	public static readonly _serializedATN: string = Utils.join(
		[
			ApexParser._serializedATNSegment0,
			ApexParser._serializedATNSegment1,
			ApexParser._serializedATNSegment2,
			ApexParser._serializedATNSegment3,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ApexParser.__ATN) {
			ApexParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ApexParser._serializedATN));
		}

		return ApexParser.__ATN;
	}

}

export class TriggerUnitContext extends ParserRuleContext {
	public TRIGGER(): TerminalNode { return this.getToken(ApexParser.TRIGGER, 0); }
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public ON(): TerminalNode { return this.getToken(ApexParser.ON, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ApexParser.LPAREN, 0); }
	public triggerCase(): TriggerCaseContext[];
	public triggerCase(i: number): TriggerCaseContext;
	public triggerCase(i?: number): TriggerCaseContext | TriggerCaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TriggerCaseContext);
		} else {
			return this.getRuleContext(i, TriggerCaseContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(ApexParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public EOF(): TerminalNode { return this.getToken(ApexParser.EOF, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.COMMA);
		} else {
			return this.getToken(ApexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_triggerUnit; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterTriggerUnit) {
			listener.enterTriggerUnit(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitTriggerUnit) {
			listener.exitTriggerUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitTriggerUnit) {
			return visitor.visitTriggerUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TriggerCaseContext extends ParserRuleContext {
	public BEFORE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.BEFORE, 0); }
	public AFTER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.AFTER, 0); }
	public INSERT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.INSERT, 0); }
	public UPDATE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.UPDATE, 0); }
	public DELETE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DELETE, 0); }
	public UNDELETE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.UNDELETE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_triggerCase; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterTriggerCase) {
			listener.enterTriggerCase(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitTriggerCase) {
			listener.exitTriggerCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitTriggerCase) {
			return visitor.visitTriggerCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompilationUnitContext extends ParserRuleContext {
	public typeDeclaration(): TypeDeclarationContext {
		return this.getRuleContext(0, TypeDeclarationContext);
	}
	public EOF(): TerminalNode { return this.getToken(ApexParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_compilationUnit; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterCompilationUnit) {
			listener.enterCompilationUnit(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitCompilationUnit) {
			listener.exitCompilationUnit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitCompilationUnit) {
			return visitor.visitCompilationUnit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_typeDeclaration; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterTypeDeclaration) {
			listener.enterTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitTypeDeclaration) {
			listener.exitTypeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitTypeDeclaration) {
			return visitor.visitTypeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(ApexParser.CLASS, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public classBody(): ClassBodyContext {
		return this.getRuleContext(0, ClassBodyContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(ApexParser.EXTENDS, 0); }
	public typeRef(): TypeRefContext | undefined {
		return this.tryGetRuleContext(0, TypeRefContext);
	}
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(ApexParser.IMPLEMENTS, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_classDeclaration; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterClassDeclaration) {
			listener.enterClassDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitClassDeclaration) {
			listener.exitClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDeclarationContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(ApexParser.ENUM, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(ApexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(ApexParser.RBRACE, 0); }
	public enumConstants(): EnumConstantsContext | undefined {
		return this.tryGetRuleContext(0, EnumConstantsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_enumDeclaration; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterEnumDeclaration) {
			listener.enterEnumDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitEnumDeclaration) {
			listener.exitEnumDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitEnumDeclaration) {
			return visitor.visitEnumDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumConstantsContext extends ParserRuleContext {
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.COMMA);
		} else {
			return this.getToken(ApexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_enumConstants; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterEnumConstants) {
			listener.enterEnumConstants(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitEnumConstants) {
			listener.exitEnumConstants(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitEnumConstants) {
			return visitor.visitEnumConstants(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceDeclarationContext extends ParserRuleContext {
	public INTERFACE(): TerminalNode { return this.getToken(ApexParser.INTERFACE, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public interfaceBody(): InterfaceBodyContext {
		return this.getRuleContext(0, InterfaceBodyContext);
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(ApexParser.EXTENDS, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_interfaceDeclaration; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterInterfaceDeclaration) {
			listener.enterInterfaceDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitInterfaceDeclaration) {
			listener.exitInterfaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitInterfaceDeclaration) {
			return visitor.visitInterfaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	public typeRef(): TypeRefContext[];
	public typeRef(i: number): TypeRefContext;
	public typeRef(i?: number): TypeRefContext | TypeRefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeRefContext);
		} else {
			return this.getRuleContext(i, TypeRefContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.COMMA);
		} else {
			return this.getToken(ApexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_typeList; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterTypeList) {
			listener.enterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitTypeList) {
			listener.exitTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitTypeList) {
			return visitor.visitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(ApexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(ApexParser.RBRACE, 0); }
	public classBodyDeclaration(): ClassBodyDeclarationContext[];
	public classBodyDeclaration(i: number): ClassBodyDeclarationContext;
	public classBodyDeclaration(i?: number): ClassBodyDeclarationContext | ClassBodyDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClassBodyDeclarationContext);
		} else {
			return this.getRuleContext(i, ClassBodyDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_classBody; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterClassBody) {
			listener.enterClassBody(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitClassBody) {
			listener.exitClassBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitClassBody) {
			return visitor.visitClassBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceBodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(ApexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(ApexParser.RBRACE, 0); }
	public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext[];
	public interfaceMethodDeclaration(i: number): InterfaceMethodDeclarationContext;
	public interfaceMethodDeclaration(i?: number): InterfaceMethodDeclarationContext | InterfaceMethodDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InterfaceMethodDeclarationContext);
		} else {
			return this.getRuleContext(i, InterfaceMethodDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_interfaceBody; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterInterfaceBody) {
			listener.enterInterfaceBody(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitInterfaceBody) {
			listener.exitInterfaceBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitInterfaceBody) {
			return visitor.visitInterfaceBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassBodyDeclarationContext extends ParserRuleContext {
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SEMI, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(ApexParser.STATIC, 0); }
	public memberDeclaration(): MemberDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MemberDeclarationContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_classBodyDeclaration; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterClassBodyDeclaration) {
			listener.enterClassBodyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitClassBodyDeclaration) {
			listener.exitClassBodyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitClassBodyDeclaration) {
			return visitor.visitClassBodyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierContext extends ParserRuleContext {
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public GLOBAL(): TerminalNode | undefined { return this.tryGetToken(ApexParser.GLOBAL, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(ApexParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(ApexParser.PROTECTED, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.PRIVATE, 0); }
	public TRANSIENT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.TRANSIENT, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(ApexParser.STATIC, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ABSTRACT, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(ApexParser.FINAL, 0); }
	public WEBSERVICE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.WEBSERVICE, 0); }
	public OVERRIDE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.OVERRIDE, 0); }
	public VIRTUAL(): TerminalNode | undefined { return this.tryGetToken(ApexParser.VIRTUAL, 0); }
	public TESTMETHOD(): TerminalNode | undefined { return this.tryGetToken(ApexParser.TESTMETHOD, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.WITH, 0); }
	public SHARING(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SHARING, 0); }
	public WITHOUT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.WITHOUT, 0); }
	public INHERITED(): TerminalNode | undefined { return this.tryGetToken(ApexParser.INHERITED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_modifier; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterModifier) {
			listener.enterModifier(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitModifier) {
			listener.exitModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitModifier) {
			return visitor.visitModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberDeclarationContext extends ParserRuleContext {
	public methodDeclaration(): MethodDeclarationContext | undefined {
		return this.tryGetRuleContext(0, MethodDeclarationContext);
	}
	public fieldDeclaration(): FieldDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FieldDeclarationContext);
	}
	public constructorDeclaration(): ConstructorDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ConstructorDeclarationContext);
	}
	public interfaceDeclaration(): InterfaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, InterfaceDeclarationContext);
	}
	public classDeclaration(): ClassDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ClassDeclarationContext);
	}
	public enumDeclaration(): EnumDeclarationContext | undefined {
		return this.tryGetRuleContext(0, EnumDeclarationContext);
	}
	public propertyDeclaration(): PropertyDeclarationContext | undefined {
		return this.tryGetRuleContext(0, PropertyDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_memberDeclaration; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterMemberDeclaration) {
			listener.enterMemberDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitMemberDeclaration) {
			listener.exitMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitMemberDeclaration) {
			return visitor.visitMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclarationContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public typeRef(): TypeRefContext | undefined {
		return this.tryGetRuleContext(0, TypeRefContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(ApexParser.VOID, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_methodDeclaration; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterMethodDeclaration) {
			listener.enterMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitMethodDeclaration) {
			listener.exitMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitMethodDeclaration) {
			return visitor.visitMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorDeclarationContext extends ParserRuleContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_constructorDeclaration; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterConstructorDeclaration) {
			listener.enterConstructorDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitConstructorDeclaration) {
			listener.exitConstructorDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitConstructorDeclaration) {
			return visitor.visitConstructorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldDeclarationContext extends ParserRuleContext {
	public typeRef(): TypeRefContext {
		return this.getRuleContext(0, TypeRefContext);
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	public SEMI(): TerminalNode { return this.getToken(ApexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_fieldDeclaration; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterFieldDeclaration) {
			listener.enterFieldDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitFieldDeclaration) {
			listener.exitFieldDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitFieldDeclaration) {
			return visitor.visitFieldDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyDeclarationContext extends ParserRuleContext {
	public typeRef(): TypeRefContext {
		return this.getRuleContext(0, TypeRefContext);
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(ApexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(ApexParser.RBRACE, 0); }
	public propertyBlock(): PropertyBlockContext[];
	public propertyBlock(i: number): PropertyBlockContext;
	public propertyBlock(i?: number): PropertyBlockContext | PropertyBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyBlockContext);
		} else {
			return this.getRuleContext(i, PropertyBlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_propertyDeclaration; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterPropertyDeclaration) {
			listener.enterPropertyDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitPropertyDeclaration) {
			listener.exitPropertyDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitPropertyDeclaration) {
			return visitor.visitPropertyDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceMethodDeclarationContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public formalParameters(): FormalParametersContext {
		return this.getRuleContext(0, FormalParametersContext);
	}
	public SEMI(): TerminalNode { return this.getToken(ApexParser.SEMI, 0); }
	public typeRef(): TypeRefContext | undefined {
		return this.tryGetRuleContext(0, TypeRefContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(ApexParser.VOID, 0); }
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_interfaceMethodDeclaration; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterInterfaceMethodDeclaration) {
			listener.enterInterfaceMethodDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitInterfaceMethodDeclaration) {
			listener.exitInterfaceMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitInterfaceMethodDeclaration) {
			return visitor.visitInterfaceMethodDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorsContext extends ParserRuleContext {
	public variableDeclarator(): VariableDeclaratorContext[];
	public variableDeclarator(i: number): VariableDeclaratorContext;
	public variableDeclarator(i?: number): VariableDeclaratorContext | VariableDeclaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclaratorContext);
		} else {
			return this.getRuleContext(i, VariableDeclaratorContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.COMMA);
		} else {
			return this.getToken(ApexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_variableDeclarators; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterVariableDeclarators) {
			listener.enterVariableDeclarators(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitVariableDeclarators) {
			listener.exitVariableDeclarators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarators) {
			return visitor.visitVariableDeclarators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaratorContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_variableDeclarator; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterVariableDeclarator) {
			listener.enterVariableDeclarator(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitVariableDeclarator) {
			listener.exitVariableDeclarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarator) {
			return visitor.visitVariableDeclarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(ApexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(ApexParser.RBRACE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.COMMA);
		} else {
			return this.getToken(ApexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_arrayInitializer; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterArrayInitializer) {
			listener.enterArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitArrayInitializer) {
			listener.exitArrayInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitArrayInitializer) {
			return visitor.visitArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeRefContext extends ParserRuleContext {
	public typeName(): TypeNameContext[];
	public typeName(i: number): TypeNameContext;
	public typeName(i?: number): TypeNameContext | TypeNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeNameContext);
		} else {
			return this.getRuleContext(i, TypeNameContext);
		}
	}
	public arraySubscripts(): ArraySubscriptsContext {
		return this.getRuleContext(0, ArraySubscriptsContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.DOT);
		} else {
			return this.getToken(ApexParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_typeRef; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterTypeRef) {
			listener.enterTypeRef(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitTypeRef) {
			listener.exitTypeRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitTypeRef) {
			return visitor.visitTypeRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArraySubscriptsContext extends ParserRuleContext {
	public LBRACK(): TerminalNode[];
	public LBRACK(i: number): TerminalNode;
	public LBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.LBRACK);
		} else {
			return this.getToken(ApexParser.LBRACK, i);
		}
	}
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.RBRACK);
		} else {
			return this.getToken(ApexParser.RBRACK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_arraySubscripts; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterArraySubscripts) {
			listener.enterArraySubscripts(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitArraySubscripts) {
			listener.exitArraySubscripts(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitArraySubscripts) {
			return visitor.visitArraySubscripts(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public LIST(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LIST, 0); }
	public typeArguments(): TypeArgumentsContext | undefined {
		return this.tryGetRuleContext(0, TypeArgumentsContext);
	}
	public SET(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SET, 0); }
	public MAP(): TerminalNode | undefined { return this.tryGetToken(ApexParser.MAP, 0); }
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_typeName; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArgumentsContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(ApexParser.LT, 0); }
	public typeList(): TypeListContext {
		return this.getRuleContext(0, TypeListContext);
	}
	public GT(): TerminalNode { return this.getToken(ApexParser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_typeArguments; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterTypeArguments) {
			listener.enterTypeArguments(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitTypeArguments) {
			listener.exitTypeArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitTypeArguments) {
			return visitor.visitTypeArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParametersContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(ApexParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(ApexParser.RPAREN, 0); }
	public formalParameterList(): FormalParameterListContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_formalParameters; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterFormalParameters) {
			listener.enterFormalParameters(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitFormalParameters) {
			listener.exitFormalParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitFormalParameters) {
			return visitor.visitFormalParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	public formalParameter(): FormalParameterContext[];
	public formalParameter(i: number): FormalParameterContext;
	public formalParameter(i?: number): FormalParameterContext | FormalParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalParameterContext);
		} else {
			return this.getRuleContext(i, FormalParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.COMMA);
		} else {
			return this.getToken(ApexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_formalParameterList; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterFormalParameterList) {
			listener.enterFormalParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitFormalParameterList) {
			listener.exitFormalParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterContext extends ParserRuleContext {
	public typeRef(): TypeRefContext {
		return this.getRuleContext(0, TypeRefContext);
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_formalParameter; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterFormalParameter) {
			listener.enterFormalParameter(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitFormalParameter) {
			listener.exitFormalParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitFormalParameter) {
			return visitor.visitFormalParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.DOT);
		} else {
			return this.getToken(ApexParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(ApexParser.IntegerLiteral, 0); }
	public LongLiteral(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LongLiteral, 0); }
	public NumberLiteral(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NumberLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(ApexParser.StringLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(ApexParser.BooleanLiteral, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_literal; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public ATSIGN(): TerminalNode { return this.getToken(ApexParser.ATSIGN, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.RPAREN, 0); }
	public elementValuePairs(): ElementValuePairsContext | undefined {
		return this.tryGetRuleContext(0, ElementValuePairsContext);
	}
	public elementValue(): ElementValueContext | undefined {
		return this.tryGetRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_annotation; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterAnnotation) {
			listener.enterAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitAnnotation) {
			listener.exitAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairsContext extends ParserRuleContext {
	public elementValuePair(): ElementValuePairContext[];
	public elementValuePair(i: number): ElementValuePairContext;
	public elementValuePair(i?: number): ElementValuePairContext | ElementValuePairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValuePairContext);
		} else {
			return this.getRuleContext(i, ElementValuePairContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.COMMA);
		} else {
			return this.getToken(ApexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_elementValuePairs; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterElementValuePairs) {
			listener.enterElementValuePairs(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitElementValuePairs) {
			listener.exitElementValuePairs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitElementValuePairs) {
			return visitor.visitElementValuePairs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValuePairContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(ApexParser.ASSIGN, 0); }
	public elementValue(): ElementValueContext {
		return this.getRuleContext(0, ElementValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_elementValuePair; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterElementValuePair) {
			listener.enterElementValuePair(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitElementValuePair) {
			listener.exitElementValuePair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitElementValuePair) {
			return visitor.visitElementValuePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public annotation(): AnnotationContext | undefined {
		return this.tryGetRuleContext(0, AnnotationContext);
	}
	public elementValueArrayInitializer(): ElementValueArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ElementValueArrayInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_elementValue; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterElementValue) {
			listener.enterElementValue(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitElementValue) {
			listener.exitElementValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitElementValue) {
			return visitor.visitElementValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementValueArrayInitializerContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(ApexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(ApexParser.RBRACE, 0); }
	public elementValue(): ElementValueContext[];
	public elementValue(i: number): ElementValueContext;
	public elementValue(i?: number): ElementValueContext | ElementValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementValueContext);
		} else {
			return this.getRuleContext(i, ElementValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.COMMA);
		} else {
			return this.getToken(ApexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_elementValueArrayInitializer; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterElementValueArrayInitializer) {
			listener.enterElementValueArrayInitializer(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitElementValueArrayInitializer) {
			listener.exitElementValueArrayInitializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitElementValueArrayInitializer) {
			return visitor.visitElementValueArrayInitializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(ApexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(ApexParser.RBRACE, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_block; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationStatementContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext {
		return this.getRuleContext(0, LocalVariableDeclarationContext);
	}
	public SEMI(): TerminalNode { return this.getToken(ApexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_localVariableDeclarationStatement; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterLocalVariableDeclarationStatement) {
			listener.enterLocalVariableDeclarationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitLocalVariableDeclarationStatement) {
			listener.exitLocalVariableDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclarationStatement) {
			return visitor.visitLocalVariableDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalVariableDeclarationContext extends ParserRuleContext {
	public typeRef(): TypeRefContext {
		return this.getRuleContext(0, TypeRefContext);
	}
	public variableDeclarators(): VariableDeclaratorsContext {
		return this.getRuleContext(0, VariableDeclaratorsContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_localVariableDeclaration; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterLocalVariableDeclaration) {
			listener.enterLocalVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitLocalVariableDeclaration) {
			listener.exitLocalVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitLocalVariableDeclaration) {
			return visitor.visitLocalVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public switchStatement(): SwitchStatementContext | undefined {
		return this.tryGetRuleContext(0, SwitchStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public doWhileStatement(): DoWhileStatementContext | undefined {
		return this.tryGetRuleContext(0, DoWhileStatementContext);
	}
	public tryStatement(): TryStatementContext | undefined {
		return this.tryGetRuleContext(0, TryStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public throwStatement(): ThrowStatementContext | undefined {
		return this.tryGetRuleContext(0, ThrowStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public insertStatement(): InsertStatementContext | undefined {
		return this.tryGetRuleContext(0, InsertStatementContext);
	}
	public updateStatement(): UpdateStatementContext | undefined {
		return this.tryGetRuleContext(0, UpdateStatementContext);
	}
	public deleteStatement(): DeleteStatementContext | undefined {
		return this.tryGetRuleContext(0, DeleteStatementContext);
	}
	public undeleteStatement(): UndeleteStatementContext | undefined {
		return this.tryGetRuleContext(0, UndeleteStatementContext);
	}
	public upsertStatement(): UpsertStatementContext | undefined {
		return this.tryGetRuleContext(0, UpsertStatementContext);
	}
	public mergeStatement(): MergeStatementContext | undefined {
		return this.tryGetRuleContext(0, MergeStatementContext);
	}
	public runAsStatement(): RunAsStatementContext | undefined {
		return this.tryGetRuleContext(0, RunAsStatementContext);
	}
	public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_statement; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(ApexParser.IF, 0); }
	public parExpression(): ParExpressionContext {
		return this.getRuleContext(0, ParExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(ApexParser.SWITCH, 0); }
	public ON(): TerminalNode { return this.getToken(ApexParser.ON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(ApexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(ApexParser.RBRACE, 0); }
	public whenControl(): WhenControlContext[];
	public whenControl(i: number): WhenControlContext;
	public whenControl(i?: number): WhenControlContext | WhenControlContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenControlContext);
		} else {
			return this.getRuleContext(i, WhenControlContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_switchStatement; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhenControlContext extends ParserRuleContext {
	public WHEN(): TerminalNode { return this.getToken(ApexParser.WHEN, 0); }
	public whenValue(): WhenValueContext {
		return this.getRuleContext(0, WhenValueContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_whenControl; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterWhenControl) {
			listener.enterWhenControl(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitWhenControl) {
			listener.exitWhenControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitWhenControl) {
			return visitor.visitWhenControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhenValueContext extends ParserRuleContext {
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ELSE, 0); }
	public whenLiteral(): WhenLiteralContext[];
	public whenLiteral(i: number): WhenLiteralContext;
	public whenLiteral(i?: number): WhenLiteralContext | WhenLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenLiteralContext);
		} else {
			return this.getRuleContext(i, WhenLiteralContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.COMMA);
		} else {
			return this.getToken(ApexParser.COMMA, i);
		}
	}
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_whenValue; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterWhenValue) {
			listener.enterWhenValue(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitWhenValue) {
			listener.exitWhenValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitWhenValue) {
			return visitor.visitWhenValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhenLiteralContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(ApexParser.IntegerLiteral, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SUB, 0); }
	public LongLiteral(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LongLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(ApexParser.StringLiteral, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NULL, 0); }
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_whenLiteral; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterWhenLiteral) {
			listener.enterWhenLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitWhenLiteral) {
			listener.exitWhenLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitWhenLiteral) {
			return visitor.visitWhenLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(ApexParser.FOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ApexParser.LPAREN, 0); }
	public forControl(): ForControlContext {
		return this.getRuleContext(0, ForControlContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ApexParser.RPAREN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_forStatement; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(ApexParser.WHILE, 0); }
	public parExpression(): ParExpressionContext {
		return this.getRuleContext(0, ParExpressionContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoWhileStatementContext extends ParserRuleContext {
	public DO(): TerminalNode { return this.getToken(ApexParser.DO, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public WHILE(): TerminalNode { return this.getToken(ApexParser.WHILE, 0); }
	public parExpression(): ParExpressionContext {
		return this.getRuleContext(0, ParExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(ApexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_doWhileStatement; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterDoWhileStatement) {
			listener.enterDoWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitDoWhileStatement) {
			listener.exitDoWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitDoWhileStatement) {
			return visitor.visitDoWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	public TRY(): TerminalNode { return this.getToken(ApexParser.TRY, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public finallyBlock(): FinallyBlockContext | undefined {
		return this.tryGetRuleContext(0, FinallyBlockContext);
	}
	public catchClause(): CatchClauseContext[];
	public catchClause(i: number): CatchClauseContext;
	public catchClause(i?: number): CatchClauseContext | CatchClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CatchClauseContext);
		} else {
			return this.getRuleContext(i, CatchClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_tryStatement; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterTryStatement) {
			listener.enterTryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitTryStatement) {
			listener.exitTryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitTryStatement) {
			return visitor.visitTryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(ApexParser.RETURN, 0); }
	public SEMI(): TerminalNode { return this.getToken(ApexParser.SEMI, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowStatementContext extends ParserRuleContext {
	public THROW(): TerminalNode { return this.getToken(ApexParser.THROW, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(ApexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_throwStatement; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterThrowStatement) {
			listener.enterThrowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitThrowStatement) {
			listener.exitThrowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitThrowStatement) {
			return visitor.visitThrowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(ApexParser.BREAK, 0); }
	public SEMI(): TerminalNode { return this.getToken(ApexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(ApexParser.CONTINUE, 0); }
	public SEMI(): TerminalNode { return this.getToken(ApexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_continueStatement; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InsertStatementContext extends ParserRuleContext {
	public INSERT(): TerminalNode { return this.getToken(ApexParser.INSERT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(ApexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_insertStatement; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterInsertStatement) {
			listener.enterInsertStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitInsertStatement) {
			listener.exitInsertStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitInsertStatement) {
			return visitor.visitInsertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UpdateStatementContext extends ParserRuleContext {
	public UPDATE(): TerminalNode { return this.getToken(ApexParser.UPDATE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(ApexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_updateStatement; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterUpdateStatement) {
			listener.enterUpdateStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitUpdateStatement) {
			listener.exitUpdateStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitUpdateStatement) {
			return visitor.visitUpdateStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeleteStatementContext extends ParserRuleContext {
	public DELETE(): TerminalNode { return this.getToken(ApexParser.DELETE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(ApexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_deleteStatement; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterDeleteStatement) {
			listener.enterDeleteStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitDeleteStatement) {
			listener.exitDeleteStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitDeleteStatement) {
			return visitor.visitDeleteStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UndeleteStatementContext extends ParserRuleContext {
	public UNDELETE(): TerminalNode { return this.getToken(ApexParser.UNDELETE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(ApexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_undeleteStatement; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterUndeleteStatement) {
			listener.enterUndeleteStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitUndeleteStatement) {
			listener.exitUndeleteStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitUndeleteStatement) {
			return visitor.visitUndeleteStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UpsertStatementContext extends ParserRuleContext {
	public UPSERT(): TerminalNode { return this.getToken(ApexParser.UPSERT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(ApexParser.SEMI, 0); }
	public qualifiedName(): QualifiedNameContext | undefined {
		return this.tryGetRuleContext(0, QualifiedNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_upsertStatement; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterUpsertStatement) {
			listener.enterUpsertStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitUpsertStatement) {
			listener.exitUpsertStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitUpsertStatement) {
			return visitor.visitUpsertStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MergeStatementContext extends ParserRuleContext {
	public MERGE(): TerminalNode { return this.getToken(ApexParser.MERGE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public SEMI(): TerminalNode { return this.getToken(ApexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_mergeStatement; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterMergeStatement) {
			listener.enterMergeStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitMergeStatement) {
			listener.exitMergeStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitMergeStatement) {
			return visitor.visitMergeStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RunAsStatementContext extends ParserRuleContext {
	public SYSTEMRUNAS(): TerminalNode { return this.getToken(ApexParser.SYSTEMRUNAS, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ApexParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(ApexParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_runAsStatement; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterRunAsStatement) {
			listener.enterRunAsStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitRunAsStatement) {
			listener.exitRunAsStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitRunAsStatement) {
			return visitor.visitRunAsStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(ApexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyBlockContext extends ParserRuleContext {
	public getter(): GetterContext | undefined {
		return this.tryGetRuleContext(0, GetterContext);
	}
	public setter(): SetterContext | undefined {
		return this.tryGetRuleContext(0, SetterContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_propertyBlock; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterPropertyBlock) {
			listener.enterPropertyBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitPropertyBlock) {
			listener.exitPropertyBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitPropertyBlock) {
			return visitor.visitPropertyBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetterContext extends ParserRuleContext {
	public GET(): TerminalNode { return this.getToken(ApexParser.GET, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SEMI, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_getter; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterGetter) {
			listener.enterGetter(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitGetter) {
			listener.exitGetter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitGetter) {
			return visitor.visitGetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetterContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(ApexParser.SET, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SEMI, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_setter; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterSetter) {
			listener.enterSetter(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitSetter) {
			listener.exitSetter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitSetter) {
			return visitor.visitSetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchClauseContext extends ParserRuleContext {
	public CATCH(): TerminalNode { return this.getToken(ApexParser.CATCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ApexParser.LPAREN, 0); }
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ApexParser.RPAREN, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_catchClause; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterCatchClause) {
			listener.enterCatchClause(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitCatchClause) {
			listener.exitCatchClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitCatchClause) {
			return visitor.visitCatchClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinallyBlockContext extends ParserRuleContext {
	public FINALLY(): TerminalNode { return this.getToken(ApexParser.FINALLY, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_finallyBlock; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterFinallyBlock) {
			listener.enterFinallyBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitFinallyBlock) {
			listener.exitFinallyBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitFinallyBlock) {
			return visitor.visitFinallyBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForControlContext extends ParserRuleContext {
	public enhancedForControl(): EnhancedForControlContext | undefined {
		return this.tryGetRuleContext(0, EnhancedForControlContext);
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.SEMI);
		} else {
			return this.getToken(ApexParser.SEMI, i);
		}
	}
	public forInit(): ForInitContext | undefined {
		return this.tryGetRuleContext(0, ForInitContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public forUpdate(): ForUpdateContext | undefined {
		return this.tryGetRuleContext(0, ForUpdateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_forControl; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterForControl) {
			listener.enterForControl(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitForControl) {
			listener.exitForControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitForControl) {
			return visitor.visitForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForInitContext extends ParserRuleContext {
	public localVariableDeclaration(): LocalVariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, LocalVariableDeclarationContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_forInit; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterForInit) {
			listener.enterForInit(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitForInit) {
			listener.exitForInit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitForInit) {
			return visitor.visitForInit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnhancedForControlContext extends ParserRuleContext {
	public typeRef(): TypeRefContext {
		return this.getRuleContext(0, TypeRefContext);
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public COLON(): TerminalNode { return this.getToken(ApexParser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_enhancedForControl; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterEnhancedForControl) {
			listener.enterEnhancedForControl(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitEnhancedForControl) {
			listener.exitEnhancedForControl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitEnhancedForControl) {
			return visitor.visitEnhancedForControl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForUpdateContext extends ParserRuleContext {
	public expressionList(): ExpressionListContext {
		return this.getRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_forUpdate; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterForUpdate) {
			listener.enterForUpdate(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitForUpdate) {
			listener.exitForUpdate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitForUpdate) {
			return visitor.visitForUpdate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParExpressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(ApexParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ApexParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_parExpression; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterParExpression) {
			listener.enterParExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitParExpression) {
			listener.exitParExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitParExpression) {
			return visitor.visitParExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.COMMA);
		} else {
			return this.getToken(ApexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PrimaryExpressionContext extends ExpressionContext {
	public primary(): PrimaryContext {
		return this.getRuleContext(0, PrimaryContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterPrimaryExpression) {
			listener.enterPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitPrimaryExpression) {
			listener.exitPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DotExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DOT, 0); }
	public QUESTIONDOT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.QUESTIONDOT, 0); }
	public dotMethodCall(): DotMethodCallContext | undefined {
		return this.tryGetRuleContext(0, DotMethodCallContext);
	}
	public anyId(): AnyIdContext | undefined {
		return this.tryGetRuleContext(0, AnyIdContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterDotExpression) {
			listener.enterDotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitDotExpression) {
			listener.exitDotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitDotExpression) {
			return visitor.visitDotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LBRACK(): TerminalNode { return this.getToken(ApexParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(ApexParser.RBRACK, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterArrayExpression) {
			listener.enterArrayExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitArrayExpression) {
			listener.exitArrayExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitArrayExpression) {
			return visitor.visitArrayExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MethodCallExpressionContext extends ExpressionContext {
	public methodCall(): MethodCallContext {
		return this.getRuleContext(0, MethodCallContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterMethodCallExpression) {
			listener.enterMethodCallExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitMethodCallExpression) {
			listener.exitMethodCallExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitMethodCallExpression) {
			return visitor.visitMethodCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NewExpressionContext extends ExpressionContext {
	public NEW(): TerminalNode { return this.getToken(ApexParser.NEW, 0); }
	public creator(): CreatorContext {
		return this.getRuleContext(0, CreatorContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterNewExpression) {
			listener.enterNewExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitNewExpression) {
			listener.exitNewExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitNewExpression) {
			return visitor.visitNewExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CastExpressionContext extends ExpressionContext {
	public LPAREN(): TerminalNode { return this.getToken(ApexParser.LPAREN, 0); }
	public typeRef(): TypeRefContext {
		return this.getRuleContext(0, TypeRefContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ApexParser.RPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterCastExpression) {
			listener.enterCastExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitCastExpression) {
			listener.exitCastExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitCastExpression) {
			return visitor.visitCastExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubExpressionContext extends ExpressionContext {
	public LPAREN(): TerminalNode { return this.getToken(ApexParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ApexParser.RPAREN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterSubExpression) {
			listener.enterSubExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitSubExpression) {
			listener.exitSubExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitSubExpression) {
			return visitor.visitSubExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PostOpExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public INC(): TerminalNode | undefined { return this.tryGetToken(ApexParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DEC, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterPostOpExpression) {
			listener.enterPostOpExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitPostOpExpression) {
			listener.exitPostOpExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitPostOpExpression) {
			return visitor.visitPostOpExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreOpExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SUB, 0); }
	public INC(): TerminalNode | undefined { return this.tryGetToken(ApexParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DEC, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterPreOpExpression) {
			listener.enterPreOpExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitPreOpExpression) {
			listener.exitPreOpExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitPreOpExpression) {
			return visitor.visitPreOpExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NegExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.TILDE, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(ApexParser.BANG, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterNegExpression) {
			listener.enterNegExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitNegExpression) {
			listener.exitNegExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitNegExpression) {
			return visitor.visitNegExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Arth1ExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(ApexParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(ApexParser.MOD, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterArth1Expression) {
			listener.enterArth1Expression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitArth1Expression) {
			listener.exitArth1Expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitArth1Expression) {
			return visitor.visitArth1Expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Arth2ExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SUB, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterArth2Expression) {
			listener.enterArth2Expression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitArth2Expression) {
			listener.exitArth2Expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitArth2Expression) {
			return visitor.visitArth2Expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LT(): TerminalNode[];
	public LT(i: number): TerminalNode;
	public LT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.LT);
		} else {
			return this.getToken(ApexParser.LT, i);
		}
	}
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.GT);
		} else {
			return this.getToken(ApexParser.GT, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterBitExpression) {
			listener.enterBitExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitBitExpression) {
			listener.exitBitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitBitExpression) {
			return visitor.visitBitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CmpExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public GT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LT, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ASSIGN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterCmpExpression) {
			listener.enterCmpExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitCmpExpression) {
			listener.exitCmpExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitCmpExpression) {
			return visitor.visitCmpExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InstanceOfExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public INSTANCEOF(): TerminalNode { return this.getToken(ApexParser.INSTANCEOF, 0); }
	public typeRef(): TypeRefContext {
		return this.getRuleContext(0, TypeRefContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterInstanceOfExpression) {
			listener.enterInstanceOfExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitInstanceOfExpression) {
			listener.exitInstanceOfExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitInstanceOfExpression) {
			return visitor.visitInstanceOfExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualityExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public TRIPLEEQUAL(): TerminalNode | undefined { return this.tryGetToken(ApexParser.TRIPLEEQUAL, 0); }
	public TRIPLENOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(ApexParser.TRIPLENOTEQUAL, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(ApexParser.EQUAL, 0); }
	public NOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NOTEQUAL, 0); }
	public LESSANDGREATER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LESSANDGREATER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitAndExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public BITAND(): TerminalNode { return this.getToken(ApexParser.BITAND, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterBitAndExpression) {
			listener.enterBitAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitBitAndExpression) {
			listener.exitBitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitBitAndExpression) {
			return visitor.visitBitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitNotExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public CARET(): TerminalNode { return this.getToken(ApexParser.CARET, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterBitNotExpression) {
			listener.enterBitNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitBitNotExpression) {
			listener.exitBitNotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitBitNotExpression) {
			return visitor.visitBitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitOrExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public BITOR(): TerminalNode { return this.getToken(ApexParser.BITOR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterBitOrExpression) {
			listener.enterBitOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitBitOrExpression) {
			listener.exitBitOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitBitOrExpression) {
			return visitor.visitBitOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogAndExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public AND(): TerminalNode { return this.getToken(ApexParser.AND, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterLogAndExpression) {
			listener.enterLogAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitLogAndExpression) {
			listener.exitLogAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitLogAndExpression) {
			return visitor.visitLogAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogOrExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OR(): TerminalNode { return this.getToken(ApexParser.OR, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterLogOrExpression) {
			listener.enterLogOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitLogOrExpression) {
			listener.exitLogOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitLogOrExpression) {
			return visitor.visitLogOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CondExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public QUESTION(): TerminalNode { return this.getToken(ApexParser.QUESTION, 0); }
	public COLON(): TerminalNode { return this.getToken(ApexParser.COLON, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterCondExpression) {
			listener.enterCondExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitCondExpression) {
			listener.exitCondExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitCondExpression) {
			return visitor.visitCondExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ASSIGN, 0); }
	public ADD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ADD_ASSIGN, 0); }
	public SUB_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SUB_ASSIGN, 0); }
	public MUL_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.MUL_ASSIGN, 0); }
	public DIV_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DIV_ASSIGN, 0); }
	public AND_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.AND_ASSIGN, 0); }
	public OR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.OR_ASSIGN, 0); }
	public XOR_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.XOR_ASSIGN, 0); }
	public RSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.RSHIFT_ASSIGN, 0); }
	public URSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.URSHIFT_ASSIGN, 0); }
	public LSHIFT_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LSHIFT_ASSIGN, 0); }
	public MOD_ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.MOD_ASSIGN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterAssignExpression) {
			listener.enterAssignExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitAssignExpression) {
			listener.exitAssignExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitAssignExpression) {
			return visitor.visitAssignExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_primary; }
	public copyFrom(ctx: PrimaryContext): void {
		super.copyFrom(ctx);
	}
}
export class ThisPrimaryContext extends PrimaryContext {
	public THIS(): TerminalNode { return this.getToken(ApexParser.THIS, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterThisPrimary) {
			listener.enterThisPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitThisPrimary) {
			listener.exitThisPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitThisPrimary) {
			return visitor.visitThisPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SuperPrimaryContext extends PrimaryContext {
	public SUPER(): TerminalNode { return this.getToken(ApexParser.SUPER, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterSuperPrimary) {
			listener.enterSuperPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitSuperPrimary) {
			listener.exitSuperPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitSuperPrimary) {
			return visitor.visitSuperPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralPrimaryContext extends PrimaryContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterLiteralPrimary) {
			listener.enterLiteralPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitLiteralPrimary) {
			listener.exitLiteralPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitLiteralPrimary) {
			return visitor.visitLiteralPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeRefPrimaryContext extends PrimaryContext {
	public typeRef(): TypeRefContext {
		return this.getRuleContext(0, TypeRefContext);
	}
	public DOT(): TerminalNode { return this.getToken(ApexParser.DOT, 0); }
	public CLASS(): TerminalNode { return this.getToken(ApexParser.CLASS, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterTypeRefPrimary) {
			listener.enterTypeRefPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitTypeRefPrimary) {
			listener.exitTypeRefPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitTypeRefPrimary) {
			return visitor.visitTypeRefPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdPrimaryContext extends PrimaryContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterIdPrimary) {
			listener.enterIdPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitIdPrimary) {
			listener.exitIdPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitIdPrimary) {
			return visitor.visitIdPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SoqlPrimaryContext extends PrimaryContext {
	public soqlLiteral(): SoqlLiteralContext {
		return this.getRuleContext(0, SoqlLiteralContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterSoqlPrimary) {
			listener.enterSoqlPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitSoqlPrimary) {
			listener.exitSoqlPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitSoqlPrimary) {
			return visitor.visitSoqlPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SoslPrimaryContext extends PrimaryContext {
	public soslLiteral(): SoslLiteralContext {
		return this.getRuleContext(0, SoslLiteralContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterSoslPrimary) {
			listener.enterSoslPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitSoslPrimary) {
			listener.exitSoslPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitSoslPrimary) {
			return visitor.visitSoslPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodCallContext extends ParserRuleContext {
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(ApexParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(ApexParser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public THIS(): TerminalNode | undefined { return this.tryGetToken(ApexParser.THIS, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SUPER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_methodCall; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterMethodCall) {
			listener.enterMethodCall(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitMethodCall) {
			listener.exitMethodCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitMethodCall) {
			return visitor.visitMethodCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DotMethodCallContext extends ParserRuleContext {
	public anyId(): AnyIdContext {
		return this.getRuleContext(0, AnyIdContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(ApexParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(ApexParser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_dotMethodCall; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterDotMethodCall) {
			listener.enterDotMethodCall(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitDotMethodCall) {
			listener.exitDotMethodCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitDotMethodCall) {
			return visitor.visitDotMethodCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreatorContext extends ParserRuleContext {
	public createdName(): CreatedNameContext {
		return this.getRuleContext(0, CreatedNameContext);
	}
	public noRest(): NoRestContext | undefined {
		return this.tryGetRuleContext(0, NoRestContext);
	}
	public classCreatorRest(): ClassCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, ClassCreatorRestContext);
	}
	public arrayCreatorRest(): ArrayCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, ArrayCreatorRestContext);
	}
	public mapCreatorRest(): MapCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, MapCreatorRestContext);
	}
	public setCreatorRest(): SetCreatorRestContext | undefined {
		return this.tryGetRuleContext(0, SetCreatorRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_creator; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterCreator) {
			listener.enterCreator(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitCreator) {
			listener.exitCreator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitCreator) {
			return visitor.visitCreator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreatedNameContext extends ParserRuleContext {
	public idCreatedNamePair(): IdCreatedNamePairContext[];
	public idCreatedNamePair(i: number): IdCreatedNamePairContext;
	public idCreatedNamePair(i?: number): IdCreatedNamePairContext | IdCreatedNamePairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdCreatedNamePairContext);
		} else {
			return this.getRuleContext(i, IdCreatedNamePairContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.DOT);
		} else {
			return this.getToken(ApexParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_createdName; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterCreatedName) {
			listener.enterCreatedName(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitCreatedName) {
			listener.exitCreatedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitCreatedName) {
			return visitor.visitCreatedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdCreatedNamePairContext extends ParserRuleContext {
	public anyId(): AnyIdContext {
		return this.getRuleContext(0, AnyIdContext);
	}
	public LT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LT, 0); }
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	public GT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_idCreatedNamePair; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterIdCreatedNamePair) {
			listener.enterIdCreatedNamePair(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitIdCreatedNamePair) {
			listener.exitIdCreatedNamePair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitIdCreatedNamePair) {
			return visitor.visitIdCreatedNamePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NoRestContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(ApexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(ApexParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_noRest; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterNoRest) {
			listener.enterNoRest(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitNoRest) {
			listener.exitNoRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitNoRest) {
			return visitor.visitNoRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassCreatorRestContext extends ParserRuleContext {
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_classCreatorRest; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterClassCreatorRest) {
			listener.enterClassCreatorRest(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitClassCreatorRest) {
			listener.exitClassCreatorRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitClassCreatorRest) {
			return visitor.visitClassCreatorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayCreatorRestContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(ApexParser.LBRACK, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(ApexParser.RBRACK, 0); }
	public arrayInitializer(): ArrayInitializerContext | undefined {
		return this.tryGetRuleContext(0, ArrayInitializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_arrayCreatorRest; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterArrayCreatorRest) {
			listener.enterArrayCreatorRest(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitArrayCreatorRest) {
			listener.exitArrayCreatorRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitArrayCreatorRest) {
			return visitor.visitArrayCreatorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapCreatorRestContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(ApexParser.LBRACE, 0); }
	public mapCreatorRestPair(): MapCreatorRestPairContext[];
	public mapCreatorRestPair(i: number): MapCreatorRestPairContext;
	public mapCreatorRestPair(i?: number): MapCreatorRestPairContext | MapCreatorRestPairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MapCreatorRestPairContext);
		} else {
			return this.getRuleContext(i, MapCreatorRestPairContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(ApexParser.RBRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.COMMA);
		} else {
			return this.getToken(ApexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_mapCreatorRest; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterMapCreatorRest) {
			listener.enterMapCreatorRest(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitMapCreatorRest) {
			listener.exitMapCreatorRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitMapCreatorRest) {
			return visitor.visitMapCreatorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapCreatorRestPairContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public MAPTO(): TerminalNode { return this.getToken(ApexParser.MAPTO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_mapCreatorRestPair; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterMapCreatorRestPair) {
			listener.enterMapCreatorRestPair(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitMapCreatorRestPair) {
			listener.exitMapCreatorRestPair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitMapCreatorRestPair) {
			return visitor.visitMapCreatorRestPair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetCreatorRestContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(ApexParser.LBRACE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RBRACE(): TerminalNode { return this.getToken(ApexParser.RBRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.COMMA);
		} else {
			return this.getToken(ApexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_setCreatorRest; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterSetCreatorRest) {
			listener.enterSetCreatorRest(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitSetCreatorRest) {
			listener.exitSetCreatorRest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitSetCreatorRest) {
			return visitor.visitSetCreatorRest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(ApexParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(ApexParser.RPAREN, 0); }
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_arguments; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SoqlLiteralContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(ApexParser.LBRACK, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(ApexParser.RBRACK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_soqlLiteral; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterSoqlLiteral) {
			listener.enterSoqlLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitSoqlLiteral) {
			listener.exitSoqlLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitSoqlLiteral) {
			return visitor.visitSoqlLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	public SELECT(): TerminalNode { return this.getToken(ApexParser.SELECT, 0); }
	public selectList(): SelectListContext {
		return this.getRuleContext(0, SelectListContext);
	}
	public FROM(): TerminalNode { return this.getToken(ApexParser.FROM, 0); }
	public fromNameList(): FromNameListContext {
		return this.getRuleContext(0, FromNameListContext);
	}
	public forClauses(): ForClausesContext {
		return this.getRuleContext(0, ForClausesContext);
	}
	public usingScope(): UsingScopeContext | undefined {
		return this.tryGetRuleContext(0, UsingScopeContext);
	}
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	public withClause(): WithClauseContext | undefined {
		return this.tryGetRuleContext(0, WithClauseContext);
	}
	public groupByClause(): GroupByClauseContext | undefined {
		return this.tryGetRuleContext(0, GroupByClauseContext);
	}
	public orderByClause(): OrderByClauseContext | undefined {
		return this.tryGetRuleContext(0, OrderByClauseContext);
	}
	public limitClause(): LimitClauseContext | undefined {
		return this.tryGetRuleContext(0, LimitClauseContext);
	}
	public offsetClause(): OffsetClauseContext | undefined {
		return this.tryGetRuleContext(0, OffsetClauseContext);
	}
	public allRowsClause(): AllRowsClauseContext | undefined {
		return this.tryGetRuleContext(0, AllRowsClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_query; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterQuery) {
			listener.enterQuery(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitQuery) {
			listener.exitQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitQuery) {
			return visitor.visitQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubQueryContext extends ParserRuleContext {
	public SELECT(): TerminalNode { return this.getToken(ApexParser.SELECT, 0); }
	public subFieldList(): SubFieldListContext {
		return this.getRuleContext(0, SubFieldListContext);
	}
	public FROM(): TerminalNode { return this.getToken(ApexParser.FROM, 0); }
	public fromNameList(): FromNameListContext {
		return this.getRuleContext(0, FromNameListContext);
	}
	public forClauses(): ForClausesContext {
		return this.getRuleContext(0, ForClausesContext);
	}
	public whereClause(): WhereClauseContext | undefined {
		return this.tryGetRuleContext(0, WhereClauseContext);
	}
	public orderByClause(): OrderByClauseContext | undefined {
		return this.tryGetRuleContext(0, OrderByClauseContext);
	}
	public limitClause(): LimitClauseContext | undefined {
		return this.tryGetRuleContext(0, LimitClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_subQuery; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterSubQuery) {
			listener.enterSubQuery(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitSubQuery) {
			listener.exitSubQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitSubQuery) {
			return visitor.visitSubQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectListContext extends ParserRuleContext {
	public selectEntry(): SelectEntryContext[];
	public selectEntry(i: number): SelectEntryContext;
	public selectEntry(i?: number): SelectEntryContext | SelectEntryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectEntryContext);
		} else {
			return this.getRuleContext(i, SelectEntryContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.COMMA);
		} else {
			return this.getToken(ApexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_selectList; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterSelectList) {
			listener.enterSelectList(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitSelectList) {
			listener.exitSelectList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitSelectList) {
			return visitor.visitSelectList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectEntryContext extends ParserRuleContext {
	public fieldName(): FieldNameContext | undefined {
		return this.tryGetRuleContext(0, FieldNameContext);
	}
	public soqlId(): SoqlIdContext | undefined {
		return this.tryGetRuleContext(0, SoqlIdContext);
	}
	public soqlFunction(): SoqlFunctionContext | undefined {
		return this.tryGetRuleContext(0, SoqlFunctionContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LPAREN, 0); }
	public subQuery(): SubQueryContext | undefined {
		return this.tryGetRuleContext(0, SubQueryContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.RPAREN, 0); }
	public typeOf(): TypeOfContext | undefined {
		return this.tryGetRuleContext(0, TypeOfContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_selectEntry; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterSelectEntry) {
			listener.enterSelectEntry(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitSelectEntry) {
			listener.exitSelectEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitSelectEntry) {
			return visitor.visitSelectEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldNameContext extends ParserRuleContext {
	public soqlId(): SoqlIdContext[];
	public soqlId(i: number): SoqlIdContext;
	public soqlId(i?: number): SoqlIdContext | SoqlIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SoqlIdContext);
		} else {
			return this.getRuleContext(i, SoqlIdContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.DOT);
		} else {
			return this.getToken(ApexParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_fieldName; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterFieldName) {
			listener.enterFieldName(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitFieldName) {
			listener.exitFieldName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitFieldName) {
			return visitor.visitFieldName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FromNameListContext extends ParserRuleContext {
	public fieldName(): FieldNameContext[];
	public fieldName(i: number): FieldNameContext;
	public fieldName(i?: number): FieldNameContext | FieldNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldNameContext);
		} else {
			return this.getRuleContext(i, FieldNameContext);
		}
	}
	public soqlId(): SoqlIdContext[];
	public soqlId(i: number): SoqlIdContext;
	public soqlId(i?: number): SoqlIdContext | SoqlIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SoqlIdContext);
		} else {
			return this.getRuleContext(i, SoqlIdContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.COMMA);
		} else {
			return this.getToken(ApexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_fromNameList; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterFromNameList) {
			listener.enterFromNameList(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitFromNameList) {
			listener.exitFromNameList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitFromNameList) {
			return visitor.visitFromNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubFieldListContext extends ParserRuleContext {
	public subFieldEntry(): SubFieldEntryContext[];
	public subFieldEntry(i: number): SubFieldEntryContext;
	public subFieldEntry(i?: number): SubFieldEntryContext | SubFieldEntryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubFieldEntryContext);
		} else {
			return this.getRuleContext(i, SubFieldEntryContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.COMMA);
		} else {
			return this.getToken(ApexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_subFieldList; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterSubFieldList) {
			listener.enterSubFieldList(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitSubFieldList) {
			listener.exitSubFieldList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitSubFieldList) {
			return visitor.visitSubFieldList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubFieldEntryContext extends ParserRuleContext {
	public fieldName(): FieldNameContext | undefined {
		return this.tryGetRuleContext(0, FieldNameContext);
	}
	public soqlId(): SoqlIdContext | undefined {
		return this.tryGetRuleContext(0, SoqlIdContext);
	}
	public soqlFunction(): SoqlFunctionContext | undefined {
		return this.tryGetRuleContext(0, SoqlFunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_subFieldEntry; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterSubFieldEntry) {
			listener.enterSubFieldEntry(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitSubFieldEntry) {
			listener.exitSubFieldEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitSubFieldEntry) {
			return visitor.visitSubFieldEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SoqlFunctionContext extends ParserRuleContext {
	public AVG(): TerminalNode | undefined { return this.tryGetToken(ApexParser.AVG, 0); }
	public LPAREN(): TerminalNode { return this.getToken(ApexParser.LPAREN, 0); }
	public fieldName(): FieldNameContext | undefined {
		return this.tryGetRuleContext(0, FieldNameContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ApexParser.RPAREN, 0); }
	public COUNT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.COUNT, 0); }
	public COUNT_DISTINCT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.COUNT_DISTINCT, 0); }
	public MIN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.MIN, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(ApexParser.MAX, 0); }
	public SUM(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SUM, 0); }
	public TOLABEL(): TerminalNode | undefined { return this.tryGetToken(ApexParser.TOLABEL, 0); }
	public FORMAT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.FORMAT, 0); }
	public CALENDAR_MONTH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.CALENDAR_MONTH, 0); }
	public dateFieldName(): DateFieldNameContext | undefined {
		return this.tryGetRuleContext(0, DateFieldNameContext);
	}
	public CALENDAR_QUARTER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.CALENDAR_QUARTER, 0); }
	public CALENDAR_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.CALENDAR_YEAR, 0); }
	public DAY_IN_MONTH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DAY_IN_MONTH, 0); }
	public DAY_IN_WEEK(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DAY_IN_WEEK, 0); }
	public DAY_IN_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DAY_IN_YEAR, 0); }
	public DAY_ONLY(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DAY_ONLY, 0); }
	public FISCAL_MONTH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.FISCAL_MONTH, 0); }
	public FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.FISCAL_QUARTER, 0); }
	public FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.FISCAL_YEAR, 0); }
	public HOUR_IN_DAY(): TerminalNode | undefined { return this.tryGetToken(ApexParser.HOUR_IN_DAY, 0); }
	public WEEK_IN_MONTH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.WEEK_IN_MONTH, 0); }
	public WEEK_IN_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.WEEK_IN_YEAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_soqlFunction; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterSoqlFunction) {
			listener.enterSoqlFunction(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitSoqlFunction) {
			listener.exitSoqlFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitSoqlFunction) {
			return visitor.visitSoqlFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateFieldNameContext extends ParserRuleContext {
	public CONVERT_TIMEZONE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.CONVERT_TIMEZONE, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LPAREN, 0); }
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_dateFieldName; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterDateFieldName) {
			listener.enterDateFieldName(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitDateFieldName) {
			listener.exitDateFieldName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitDateFieldName) {
			return visitor.visitDateFieldName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeOfContext extends ParserRuleContext {
	public TYPEOF(): TerminalNode { return this.getToken(ApexParser.TYPEOF, 0); }
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	public END(): TerminalNode { return this.getToken(ApexParser.END, 0); }
	public whenClause(): WhenClauseContext[];
	public whenClause(i: number): WhenClauseContext;
	public whenClause(i?: number): WhenClauseContext | WhenClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhenClauseContext);
		} else {
			return this.getRuleContext(i, WhenClauseContext);
		}
	}
	public elseClause(): ElseClauseContext | undefined {
		return this.tryGetRuleContext(0, ElseClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_typeOf; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterTypeOf) {
			listener.enterTypeOf(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitTypeOf) {
			listener.exitTypeOf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitTypeOf) {
			return visitor.visitTypeOf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhenClauseContext extends ParserRuleContext {
	public WHEN(): TerminalNode { return this.getToken(ApexParser.WHEN, 0); }
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	public THEN(): TerminalNode { return this.getToken(ApexParser.THEN, 0); }
	public fieldNameList(): FieldNameListContext {
		return this.getRuleContext(0, FieldNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_whenClause; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterWhenClause) {
			listener.enterWhenClause(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitWhenClause) {
			listener.exitWhenClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitWhenClause) {
			return visitor.visitWhenClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseClauseContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(ApexParser.ELSE, 0); }
	public fieldNameList(): FieldNameListContext {
		return this.getRuleContext(0, FieldNameListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_elseClause; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterElseClause) {
			listener.enterElseClause(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitElseClause) {
			listener.exitElseClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitElseClause) {
			return visitor.visitElseClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldNameListContext extends ParserRuleContext {
	public fieldName(): FieldNameContext[];
	public fieldName(i: number): FieldNameContext;
	public fieldName(i?: number): FieldNameContext | FieldNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldNameContext);
		} else {
			return this.getRuleContext(i, FieldNameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.COMMA);
		} else {
			return this.getToken(ApexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_fieldNameList; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterFieldNameList) {
			listener.enterFieldNameList(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitFieldNameList) {
			listener.exitFieldNameList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitFieldNameList) {
			return visitor.visitFieldNameList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsingScopeContext extends ParserRuleContext {
	public USING(): TerminalNode { return this.getToken(ApexParser.USING, 0); }
	public SCOPE(): TerminalNode { return this.getToken(ApexParser.SCOPE, 0); }
	public soqlId(): SoqlIdContext {
		return this.getRuleContext(0, SoqlIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_usingScope; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterUsingScope) {
			listener.enterUsingScope(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitUsingScope) {
			listener.exitUsingScope(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitUsingScope) {
			return visitor.visitUsingScope(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhereClauseContext extends ParserRuleContext {
	public WHERE(): TerminalNode { return this.getToken(ApexParser.WHERE, 0); }
	public logicalExpression(): LogicalExpressionContext {
		return this.getRuleContext(0, LogicalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_whereClause; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterWhereClause) {
			listener.enterWhereClause(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitWhereClause) {
			listener.exitWhereClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitWhereClause) {
			return visitor.visitWhereClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalExpressionContext extends ParserRuleContext {
	public conditionalExpression(): ConditionalExpressionContext[];
	public conditionalExpression(i: number): ConditionalExpressionContext;
	public conditionalExpression(i?: number): ConditionalExpressionContext | ConditionalExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionalExpressionContext);
		} else {
			return this.getRuleContext(i, ConditionalExpressionContext);
		}
	}
	public SOQLAND(): TerminalNode[];
	public SOQLAND(i: number): TerminalNode;
	public SOQLAND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.SOQLAND);
		} else {
			return this.getToken(ApexParser.SOQLAND, i);
		}
	}
	public SOQLOR(): TerminalNode[];
	public SOQLOR(i: number): TerminalNode;
	public SOQLOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.SOQLOR);
		} else {
			return this.getToken(ApexParser.SOQLOR, i);
		}
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_logicalExpression; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterLogicalExpression) {
			listener.enterLogicalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitLogicalExpression) {
			listener.exitLogicalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitLogicalExpression) {
			return visitor.visitLogicalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalExpressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LPAREN, 0); }
	public logicalExpression(): LogicalExpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.RPAREN, 0); }
	public fieldExpression(): FieldExpressionContext | undefined {
		return this.tryGetRuleContext(0, FieldExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_conditionalExpression; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterConditionalExpression) {
			listener.enterConditionalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitConditionalExpression) {
			listener.exitConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitConditionalExpression) {
			return visitor.visitConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldExpressionContext extends ParserRuleContext {
	public fieldName(): FieldNameContext | undefined {
		return this.tryGetRuleContext(0, FieldNameContext);
	}
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getRuleContext(0, ComparisonOperatorContext);
	}
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public soqlFunction(): SoqlFunctionContext | undefined {
		return this.tryGetRuleContext(0, SoqlFunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_fieldExpression; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterFieldExpression) {
			listener.enterFieldExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitFieldExpression) {
			listener.exitFieldExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitFieldExpression) {
			return visitor.visitFieldExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ASSIGN, 0); }
	public NOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NOTEQUAL, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.GT, 0); }
	public LESSANDGREATER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LESSANDGREATER, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LIKE, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.IN, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NOT, 0); }
	public INCLUDES(): TerminalNode | undefined { return this.tryGetToken(ApexParser.INCLUDES, 0); }
	public EXCLUDES(): TerminalNode | undefined { return this.tryGetToken(ApexParser.EXCLUDES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_comparisonOperator; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterComparisonOperator) {
			listener.enterComparisonOperator(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitComparisonOperator) {
			listener.exitComparisonOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitComparisonOperator) {
			return visitor.visitComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public NULL(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NULL, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(ApexParser.BooleanLiteral, 0); }
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(ApexParser.IntegerLiteral, 0); }
	public LongLiteral(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LongLiteral, 0); }
	public NumberLiteral(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NumberLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(ApexParser.StringLiteral, 0); }
	public DateLiteral(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DateLiteral, 0); }
	public DateTimeLiteral(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DateTimeLiteral, 0); }
	public dateFormula(): DateFormulaContext | undefined {
		return this.tryGetRuleContext(0, DateFormulaContext);
	}
	public currencyValue(): CurrencyValueContext | undefined {
		return this.tryGetRuleContext(0, CurrencyValueContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LPAREN, 0); }
	public subQuery(): SubQueryContext | undefined {
		return this.tryGetRuleContext(0, SubQueryContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.RPAREN, 0); }
	public valueList(): ValueListContext | undefined {
		return this.tryGetRuleContext(0, ValueListContext);
	}
	public boundExpression(): BoundExpressionContext | undefined {
		return this.tryGetRuleContext(0, BoundExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_value; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueListContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(ApexParser.LPAREN, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(ApexParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.COMMA);
		} else {
			return this.getToken(ApexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_valueList; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterValueList) {
			listener.enterValueList(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitValueList) {
			listener.exitValueList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitValueList) {
			return visitor.visitValueList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CurrencyValueContext extends ParserRuleContext {
	public soqlId(): SoqlIdContext {
		return this.getRuleContext(0, SoqlIdContext);
	}
	public signedInteger(): SignedIntegerContext {
		return this.getRuleContext(0, SignedIntegerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_currencyValue; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterCurrencyValue) {
			listener.enterCurrencyValue(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitCurrencyValue) {
			listener.exitCurrencyValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitCurrencyValue) {
			return visitor.visitCurrencyValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithClauseContext extends ParserRuleContext {
	public WITH(): TerminalNode { return this.getToken(ApexParser.WITH, 0); }
	public DATA(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DATA, 0); }
	public CATEGORY(): TerminalNode | undefined { return this.tryGetToken(ApexParser.CATEGORY, 0); }
	public filteringExpression(): FilteringExpressionContext | undefined {
		return this.tryGetRuleContext(0, FilteringExpressionContext);
	}
	public SECURITY_ENFORCED(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SECURITY_ENFORCED, 0); }
	public logicalExpression(): LogicalExpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_withClause; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterWithClause) {
			listener.enterWithClause(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitWithClause) {
			listener.exitWithClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitWithClause) {
			return visitor.visitWithClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FilteringExpressionContext extends ParserRuleContext {
	public dataCategorySelection(): DataCategorySelectionContext[];
	public dataCategorySelection(i: number): DataCategorySelectionContext;
	public dataCategorySelection(i?: number): DataCategorySelectionContext | DataCategorySelectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataCategorySelectionContext);
		} else {
			return this.getRuleContext(i, DataCategorySelectionContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.AND);
		} else {
			return this.getToken(ApexParser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_filteringExpression; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterFilteringExpression) {
			listener.enterFilteringExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitFilteringExpression) {
			listener.exitFilteringExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitFilteringExpression) {
			return visitor.visitFilteringExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataCategorySelectionContext extends ParserRuleContext {
	public soqlId(): SoqlIdContext {
		return this.getRuleContext(0, SoqlIdContext);
	}
	public filteringSelector(): FilteringSelectorContext {
		return this.getRuleContext(0, FilteringSelectorContext);
	}
	public dataCategoryName(): DataCategoryNameContext {
		return this.getRuleContext(0, DataCategoryNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_dataCategorySelection; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterDataCategorySelection) {
			listener.enterDataCategorySelection(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitDataCategorySelection) {
			listener.exitDataCategorySelection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitDataCategorySelection) {
			return visitor.visitDataCategorySelection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataCategoryNameContext extends ParserRuleContext {
	public soqlId(): SoqlIdContext[];
	public soqlId(i: number): SoqlIdContext;
	public soqlId(i?: number): SoqlIdContext | SoqlIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SoqlIdContext);
		} else {
			return this.getRuleContext(i, SoqlIdContext);
		}
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.LPAREN);
		} else {
			return this.getToken(ApexParser.LPAREN, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.COMMA);
		} else {
			return this.getToken(ApexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_dataCategoryName; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterDataCategoryName) {
			listener.enterDataCategoryName(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitDataCategoryName) {
			listener.exitDataCategoryName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitDataCategoryName) {
			return visitor.visitDataCategoryName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FilteringSelectorContext extends ParserRuleContext {
	public AT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.AT, 0); }
	public ABOVE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ABOVE, 0); }
	public BELOW(): TerminalNode | undefined { return this.tryGetToken(ApexParser.BELOW, 0); }
	public ABOVE_OR_BELOW(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ABOVE_OR_BELOW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_filteringSelector; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterFilteringSelector) {
			listener.enterFilteringSelector(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitFilteringSelector) {
			listener.exitFilteringSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitFilteringSelector) {
			return visitor.visitFilteringSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupByClauseContext extends ParserRuleContext {
	public GROUP(): TerminalNode { return this.getToken(ApexParser.GROUP, 0); }
	public BY(): TerminalNode { return this.getToken(ApexParser.BY, 0); }
	public selectList(): SelectListContext | undefined {
		return this.tryGetRuleContext(0, SelectListContext);
	}
	public HAVING(): TerminalNode | undefined { return this.tryGetToken(ApexParser.HAVING, 0); }
	public logicalExpression(): LogicalExpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalExpressionContext);
	}
	public ROLLUP(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ROLLUP, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LPAREN, 0); }
	public fieldName(): FieldNameContext[];
	public fieldName(i: number): FieldNameContext;
	public fieldName(i?: number): FieldNameContext | FieldNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldNameContext);
		} else {
			return this.getRuleContext(i, FieldNameContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.COMMA);
		} else {
			return this.getToken(ApexParser.COMMA, i);
		}
	}
	public CUBE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.CUBE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_groupByClause; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterGroupByClause) {
			listener.enterGroupByClause(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitGroupByClause) {
			listener.exitGroupByClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitGroupByClause) {
			return visitor.visitGroupByClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderByClauseContext extends ParserRuleContext {
	public ORDER(): TerminalNode { return this.getToken(ApexParser.ORDER, 0); }
	public BY(): TerminalNode { return this.getToken(ApexParser.BY, 0); }
	public fieldOrderList(): FieldOrderListContext {
		return this.getRuleContext(0, FieldOrderListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_orderByClause; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterOrderByClause) {
			listener.enterOrderByClause(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitOrderByClause) {
			listener.exitOrderByClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitOrderByClause) {
			return visitor.visitOrderByClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldOrderListContext extends ParserRuleContext {
	public fieldOrder(): FieldOrderContext[];
	public fieldOrder(i: number): FieldOrderContext;
	public fieldOrder(i?: number): FieldOrderContext | FieldOrderContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldOrderContext);
		} else {
			return this.getRuleContext(i, FieldOrderContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.COMMA);
		} else {
			return this.getToken(ApexParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_fieldOrderList; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterFieldOrderList) {
			listener.enterFieldOrderList(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitFieldOrderList) {
			listener.exitFieldOrderList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitFieldOrderList) {
			return visitor.visitFieldOrderList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldOrderContext extends ParserRuleContext {
	public fieldName(): FieldNameContext | undefined {
		return this.tryGetRuleContext(0, FieldNameContext);
	}
	public NULLS(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NULLS, 0); }
	public ASC(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ASC, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DESC, 0); }
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(ApexParser.FIRST, 0); }
	public LAST(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST, 0); }
	public soqlFunction(): SoqlFunctionContext | undefined {
		return this.tryGetRuleContext(0, SoqlFunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_fieldOrder; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterFieldOrder) {
			listener.enterFieldOrder(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitFieldOrder) {
			listener.exitFieldOrder(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitFieldOrder) {
			return visitor.visitFieldOrder(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LimitClauseContext extends ParserRuleContext {
	public LIMIT(): TerminalNode { return this.getToken(ApexParser.LIMIT, 0); }
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(ApexParser.IntegerLiteral, 0); }
	public boundExpression(): BoundExpressionContext | undefined {
		return this.tryGetRuleContext(0, BoundExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_limitClause; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterLimitClause) {
			listener.enterLimitClause(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitLimitClause) {
			listener.exitLimitClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitLimitClause) {
			return visitor.visitLimitClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OffsetClauseContext extends ParserRuleContext {
	public OFFSET(): TerminalNode { return this.getToken(ApexParser.OFFSET, 0); }
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(ApexParser.IntegerLiteral, 0); }
	public boundExpression(): BoundExpressionContext | undefined {
		return this.tryGetRuleContext(0, BoundExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_offsetClause; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterOffsetClause) {
			listener.enterOffsetClause(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitOffsetClause) {
			listener.exitOffsetClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitOffsetClause) {
			return visitor.visitOffsetClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AllRowsClauseContext extends ParserRuleContext {
	public ALL(): TerminalNode { return this.getToken(ApexParser.ALL, 0); }
	public ROWS(): TerminalNode { return this.getToken(ApexParser.ROWS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_allRowsClause; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterAllRowsClause) {
			listener.enterAllRowsClause(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitAllRowsClause) {
			listener.exitAllRowsClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitAllRowsClause) {
			return visitor.visitAllRowsClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForClausesContext extends ParserRuleContext {
	public FOR(): TerminalNode[];
	public FOR(i: number): TerminalNode;
	public FOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.FOR);
		} else {
			return this.getToken(ApexParser.FOR, i);
		}
	}
	public VIEW(): TerminalNode[];
	public VIEW(i: number): TerminalNode;
	public VIEW(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.VIEW);
		} else {
			return this.getToken(ApexParser.VIEW, i);
		}
	}
	public UPDATE(): TerminalNode[];
	public UPDATE(i: number): TerminalNode;
	public UPDATE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.UPDATE);
		} else {
			return this.getToken(ApexParser.UPDATE, i);
		}
	}
	public REFERENCE(): TerminalNode[];
	public REFERENCE(i: number): TerminalNode;
	public REFERENCE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.REFERENCE);
		} else {
			return this.getToken(ApexParser.REFERENCE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_forClauses; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterForClauses) {
			listener.enterForClauses(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitForClauses) {
			listener.exitForClauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitForClauses) {
			return visitor.visitForClauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoundExpressionContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(ApexParser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_boundExpression; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterBoundExpression) {
			listener.enterBoundExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitBoundExpression) {
			listener.exitBoundExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitBoundExpression) {
			return visitor.visitBoundExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateFormulaContext extends ParserRuleContext {
	public YESTERDAY(): TerminalNode | undefined { return this.tryGetToken(ApexParser.YESTERDAY, 0); }
	public TODAY(): TerminalNode | undefined { return this.tryGetToken(ApexParser.TODAY, 0); }
	public TOMORROW(): TerminalNode | undefined { return this.tryGetToken(ApexParser.TOMORROW, 0); }
	public LAST_WEEK(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_WEEK, 0); }
	public THIS_WEEK(): TerminalNode | undefined { return this.tryGetToken(ApexParser.THIS_WEEK, 0); }
	public NEXT_WEEK(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_WEEK, 0); }
	public LAST_MONTH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_MONTH, 0); }
	public THIS_MONTH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.THIS_MONTH, 0); }
	public NEXT_MONTH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_MONTH, 0); }
	public LAST_90_DAYS(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_90_DAYS, 0); }
	public NEXT_90_DAYS(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_90_DAYS, 0); }
	public LAST_N_DAYS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_N_DAYS_N, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(ApexParser.COLON, 0); }
	public signedInteger(): SignedIntegerContext | undefined {
		return this.tryGetRuleContext(0, SignedIntegerContext);
	}
	public NEXT_N_DAYS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_N_DAYS_N, 0); }
	public NEXT_N_WEEKS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_N_WEEKS_N, 0); }
	public LAST_N_WEEKS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_N_WEEKS_N, 0); }
	public NEXT_N_MONTHS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_N_MONTHS_N, 0); }
	public LAST_N_MONTHS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_N_MONTHS_N, 0); }
	public THIS_QUARTER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.THIS_QUARTER, 0); }
	public LAST_QUARTER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_QUARTER, 0); }
	public NEXT_QUARTER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_QUARTER, 0); }
	public NEXT_N_QUARTERS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_N_QUARTERS_N, 0); }
	public LAST_N_QUARTERS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_N_QUARTERS_N, 0); }
	public THIS_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.THIS_YEAR, 0); }
	public LAST_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_YEAR, 0); }
	public NEXT_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_YEAR, 0); }
	public NEXT_N_YEARS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_N_YEARS_N, 0); }
	public LAST_N_YEARS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_N_YEARS_N, 0); }
	public THIS_FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.THIS_FISCAL_QUARTER, 0); }
	public LAST_FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_FISCAL_QUARTER, 0); }
	public NEXT_FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_FISCAL_QUARTER, 0); }
	public NEXT_N_FISCAL_QUARTERS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_N_FISCAL_QUARTERS_N, 0); }
	public LAST_N_FISCAL_QUARTERS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_N_FISCAL_QUARTERS_N, 0); }
	public THIS_FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.THIS_FISCAL_YEAR, 0); }
	public LAST_FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_FISCAL_YEAR, 0); }
	public NEXT_FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_FISCAL_YEAR, 0); }
	public NEXT_N_FISCAL_YEARS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_N_FISCAL_YEARS_N, 0); }
	public LAST_N_FISCAL_YEARS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_N_FISCAL_YEARS_N, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_dateFormula; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterDateFormula) {
			listener.enterDateFormula(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitDateFormula) {
			listener.exitDateFormula(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitDateFormula) {
			return visitor.visitDateFormula(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignedIntegerContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode { return this.getToken(ApexParser.IntegerLiteral, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SUB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_signedInteger; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterSignedInteger) {
			listener.enterSignedInteger(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitSignedInteger) {
			listener.exitSignedInteger(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitSignedInteger) {
			return visitor.visitSignedInteger(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SoqlIdContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_soqlId; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterSoqlId) {
			listener.enterSoqlId(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitSoqlId) {
			listener.exitSoqlId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitSoqlId) {
			return visitor.visitSoqlId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SoslLiteralContext extends ParserRuleContext {
	public FindLiteral(): TerminalNode | undefined { return this.tryGetToken(ApexParser.FindLiteral, 0); }
	public soslClauses(): SoslClausesContext {
		return this.getRuleContext(0, SoslClausesContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(ApexParser.RBRACK, 0); }
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LBRACK, 0); }
	public FIND(): TerminalNode | undefined { return this.tryGetToken(ApexParser.FIND, 0); }
	public boundExpression(): BoundExpressionContext | undefined {
		return this.tryGetRuleContext(0, BoundExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_soslLiteral; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterSoslLiteral) {
			listener.enterSoslLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitSoslLiteral) {
			listener.exitSoslLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitSoslLiteral) {
			return visitor.visitSoslLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SoslClausesContext extends ParserRuleContext {
	public IN(): TerminalNode[];
	public IN(i: number): TerminalNode;
	public IN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.IN);
		} else {
			return this.getToken(ApexParser.IN, i);
		}
	}
	public searchGroup(): SearchGroupContext | undefined {
		return this.tryGetRuleContext(0, SearchGroupContext);
	}
	public RETURNING(): TerminalNode | undefined { return this.tryGetToken(ApexParser.RETURNING, 0); }
	public fieldSpecList(): FieldSpecListContext | undefined {
		return this.tryGetRuleContext(0, FieldSpecListContext);
	}
	public WITH(): TerminalNode[];
	public WITH(i: number): TerminalNode;
	public WITH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.WITH);
		} else {
			return this.getToken(ApexParser.WITH, i);
		}
	}
	public DIVISION(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DIVISION, 0); }
	public ASSIGN(): TerminalNode[];
	public ASSIGN(i: number): TerminalNode;
	public ASSIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.ASSIGN);
		} else {
			return this.getToken(ApexParser.ASSIGN, i);
		}
	}
	public StringLiteral(): TerminalNode[];
	public StringLiteral(i: number): TerminalNode;
	public StringLiteral(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.StringLiteral);
		} else {
			return this.getToken(ApexParser.StringLiteral, i);
		}
	}
	public DATA(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DATA, 0); }
	public CATEGORY(): TerminalNode | undefined { return this.tryGetToken(ApexParser.CATEGORY, 0); }
	public filteringExpression(): FilteringExpressionContext | undefined {
		return this.tryGetRuleContext(0, FilteringExpressionContext);
	}
	public SNIPPET(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SNIPPET, 0); }
	public NETWORK(): TerminalNode[];
	public NETWORK(i: number): TerminalNode;
	public NETWORK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.NETWORK);
		} else {
			return this.getToken(ApexParser.NETWORK, i);
		}
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.LPAREN);
		} else {
			return this.getToken(ApexParser.LPAREN, i);
		}
	}
	public networkList(): NetworkListContext | undefined {
		return this.tryGetRuleContext(0, NetworkListContext);
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.RPAREN);
		} else {
			return this.getToken(ApexParser.RPAREN, i);
		}
	}
	public PRICEBOOKID(): TerminalNode | undefined { return this.tryGetToken(ApexParser.PRICEBOOKID, 0); }
	public METADATA(): TerminalNode | undefined { return this.tryGetToken(ApexParser.METADATA, 0); }
	public limitClause(): LimitClauseContext | undefined {
		return this.tryGetRuleContext(0, LimitClauseContext);
	}
	public UPDATE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.UPDATE, 0); }
	public updateList(): UpdateListContext | undefined {
		return this.tryGetRuleContext(0, UpdateListContext);
	}
	public TARGET_LENGTH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.TARGET_LENGTH, 0); }
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(ApexParser.IntegerLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_soslClauses; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterSoslClauses) {
			listener.enterSoslClauses(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitSoslClauses) {
			listener.exitSoslClauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitSoslClauses) {
			return visitor.visitSoslClauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SearchGroupContext extends ParserRuleContext {
	public FIELDS(): TerminalNode { return this.getToken(ApexParser.FIELDS, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ALL, 0); }
	public EMAIL(): TerminalNode | undefined { return this.tryGetToken(ApexParser.EMAIL, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NAME, 0); }
	public PHONE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.PHONE, 0); }
	public SIDEBAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SIDEBAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_searchGroup; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterSearchGroup) {
			listener.enterSearchGroup(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitSearchGroup) {
			listener.exitSearchGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitSearchGroup) {
			return visitor.visitSearchGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldSpecListContext extends ParserRuleContext {
	public fieldSpec(): FieldSpecContext {
		return this.getRuleContext(0, FieldSpecContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.COMMA);
		} else {
			return this.getToken(ApexParser.COMMA, i);
		}
	}
	public fieldSpecList(): FieldSpecListContext[];
	public fieldSpecList(i: number): FieldSpecListContext;
	public fieldSpecList(i?: number): FieldSpecListContext | FieldSpecListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldSpecListContext);
		} else {
			return this.getRuleContext(i, FieldSpecListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_fieldSpecList; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterFieldSpecList) {
			listener.enterFieldSpecList(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitFieldSpecList) {
			listener.exitFieldSpecList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitFieldSpecList) {
			return visitor.visitFieldSpecList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldSpecContext extends ParserRuleContext {
	public soslId(): SoslIdContext[];
	public soslId(i: number): SoslIdContext;
	public soslId(i?: number): SoslIdContext | SoslIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SoslIdContext);
		} else {
			return this.getRuleContext(i, SoslIdContext);
		}
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LPAREN, 0); }
	public fieldList(): FieldListContext | undefined {
		return this.tryGetRuleContext(0, FieldListContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.RPAREN, 0); }
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.WHERE, 0); }
	public logicalExpression(): LogicalExpressionContext | undefined {
		return this.tryGetRuleContext(0, LogicalExpressionContext);
	}
	public USING(): TerminalNode | undefined { return this.tryGetToken(ApexParser.USING, 0); }
	public LISTVIEW(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LISTVIEW, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ASSIGN, 0); }
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ORDER, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(ApexParser.BY, 0); }
	public fieldOrderList(): FieldOrderListContext | undefined {
		return this.tryGetRuleContext(0, FieldOrderListContext);
	}
	public limitClause(): LimitClauseContext | undefined {
		return this.tryGetRuleContext(0, LimitClauseContext);
	}
	public offsetClause(): OffsetClauseContext | undefined {
		return this.tryGetRuleContext(0, OffsetClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_fieldSpec; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterFieldSpec) {
			listener.enterFieldSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitFieldSpec) {
			listener.exitFieldSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitFieldSpec) {
			return visitor.visitFieldSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldListContext extends ParserRuleContext {
	public soslId(): SoslIdContext {
		return this.getRuleContext(0, SoslIdContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.COMMA);
		} else {
			return this.getToken(ApexParser.COMMA, i);
		}
	}
	public fieldList(): FieldListContext[];
	public fieldList(i: number): FieldListContext;
	public fieldList(i?: number): FieldListContext | FieldListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldListContext);
		} else {
			return this.getRuleContext(i, FieldListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_fieldList; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterFieldList) {
			listener.enterFieldList(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitFieldList) {
			listener.exitFieldList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitFieldList) {
			return visitor.visitFieldList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UpdateListContext extends ParserRuleContext {
	public updateType(): UpdateTypeContext {
		return this.getRuleContext(0, UpdateTypeContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ApexParser.COMMA, 0); }
	public updateList(): UpdateListContext | undefined {
		return this.tryGetRuleContext(0, UpdateListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_updateList; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterUpdateList) {
			listener.enterUpdateList(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitUpdateList) {
			listener.exitUpdateList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitUpdateList) {
			return visitor.visitUpdateList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UpdateTypeContext extends ParserRuleContext {
	public TRACKING(): TerminalNode | undefined { return this.tryGetToken(ApexParser.TRACKING, 0); }
	public VIEWSTAT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.VIEWSTAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_updateType; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterUpdateType) {
			listener.enterUpdateType(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitUpdateType) {
			listener.exitUpdateType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitUpdateType) {
			return visitor.visitUpdateType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NetworkListContext extends ParserRuleContext {
	public StringLiteral(): TerminalNode { return this.getToken(ApexParser.StringLiteral, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ApexParser.COMMA, 0); }
	public networkList(): NetworkListContext | undefined {
		return this.tryGetRuleContext(0, NetworkListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_networkList; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterNetworkList) {
			listener.enterNetworkList(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitNetworkList) {
			listener.exitNetworkList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitNetworkList) {
			return visitor.visitNetworkList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SoslIdContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.DOT);
		} else {
			return this.getToken(ApexParser.DOT, i);
		}
	}
	public soslId(): SoslIdContext[];
	public soslId(i: number): SoslIdContext;
	public soslId(i?: number): SoslIdContext | SoslIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SoslIdContext);
		} else {
			return this.getRuleContext(i, SoslIdContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_soslId; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterSoslId) {
			listener.enterSoslId(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitSoslId) {
			listener.exitSoslId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitSoslId) {
			return visitor.visitSoslId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(ApexParser.Identifier, 0); }
	public AFTER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.AFTER, 0); }
	public BEFORE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.BEFORE, 0); }
	public GET(): TerminalNode | undefined { return this.tryGetToken(ApexParser.GET, 0); }
	public INHERITED(): TerminalNode | undefined { return this.tryGetToken(ApexParser.INHERITED, 0); }
	public INSTANCEOF(): TerminalNode | undefined { return this.tryGetToken(ApexParser.INSTANCEOF, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SET, 0); }
	public SHARING(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SHARING, 0); }
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SWITCH, 0); }
	public TRANSIENT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.TRANSIENT, 0); }
	public TRIGGER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.TRIGGER, 0); }
	public WHEN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.WHEN, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.WITH, 0); }
	public WITHOUT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.WITHOUT, 0); }
	public SELECT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SELECT, 0); }
	public COUNT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.COUNT, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(ApexParser.FROM, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(ApexParser.AS, 0); }
	public USING(): TerminalNode | undefined { return this.tryGetToken(ApexParser.USING, 0); }
	public SCOPE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SCOPE, 0); }
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.WHERE, 0); }
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ORDER, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(ApexParser.BY, 0); }
	public LIMIT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LIMIT, 0); }
	public SOQLAND(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SOQLAND, 0); }
	public SOQLOR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SOQLOR, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NOT, 0); }
	public AVG(): TerminalNode | undefined { return this.tryGetToken(ApexParser.AVG, 0); }
	public COUNT_DISTINCT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.COUNT_DISTINCT, 0); }
	public MIN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.MIN, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(ApexParser.MAX, 0); }
	public SUM(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SUM, 0); }
	public TYPEOF(): TerminalNode | undefined { return this.tryGetToken(ApexParser.TYPEOF, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(ApexParser.END, 0); }
	public THEN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.THEN, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LIKE, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.IN, 0); }
	public INCLUDES(): TerminalNode | undefined { return this.tryGetToken(ApexParser.INCLUDES, 0); }
	public EXCLUDES(): TerminalNode | undefined { return this.tryGetToken(ApexParser.EXCLUDES, 0); }
	public ASC(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ASC, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DESC, 0); }
	public NULLS(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NULLS, 0); }
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(ApexParser.FIRST, 0); }
	public LAST(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST, 0); }
	public GROUP(): TerminalNode | undefined { return this.tryGetToken(ApexParser.GROUP, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ALL, 0); }
	public ROWS(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ROWS, 0); }
	public VIEW(): TerminalNode | undefined { return this.tryGetToken(ApexParser.VIEW, 0); }
	public HAVING(): TerminalNode | undefined { return this.tryGetToken(ApexParser.HAVING, 0); }
	public ROLLUP(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ROLLUP, 0); }
	public TOLABEL(): TerminalNode | undefined { return this.tryGetToken(ApexParser.TOLABEL, 0); }
	public OFFSET(): TerminalNode | undefined { return this.tryGetToken(ApexParser.OFFSET, 0); }
	public DATA(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DATA, 0); }
	public CATEGORY(): TerminalNode | undefined { return this.tryGetToken(ApexParser.CATEGORY, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.AT, 0); }
	public ABOVE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ABOVE, 0); }
	public BELOW(): TerminalNode | undefined { return this.tryGetToken(ApexParser.BELOW, 0); }
	public ABOVE_OR_BELOW(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ABOVE_OR_BELOW, 0); }
	public SECURITY_ENFORCED(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SECURITY_ENFORCED, 0); }
	public REFERENCE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.REFERENCE, 0); }
	public CUBE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.CUBE, 0); }
	public FORMAT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.FORMAT, 0); }
	public TRACKING(): TerminalNode | undefined { return this.tryGetToken(ApexParser.TRACKING, 0); }
	public VIEWSTAT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.VIEWSTAT, 0); }
	public CALENDAR_MONTH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.CALENDAR_MONTH, 0); }
	public CALENDAR_QUARTER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.CALENDAR_QUARTER, 0); }
	public CALENDAR_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.CALENDAR_YEAR, 0); }
	public DAY_IN_MONTH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DAY_IN_MONTH, 0); }
	public DAY_IN_WEEK(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DAY_IN_WEEK, 0); }
	public DAY_IN_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DAY_IN_YEAR, 0); }
	public DAY_ONLY(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DAY_ONLY, 0); }
	public FISCAL_MONTH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.FISCAL_MONTH, 0); }
	public FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.FISCAL_QUARTER, 0); }
	public FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.FISCAL_YEAR, 0); }
	public HOUR_IN_DAY(): TerminalNode | undefined { return this.tryGetToken(ApexParser.HOUR_IN_DAY, 0); }
	public WEEK_IN_MONTH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.WEEK_IN_MONTH, 0); }
	public WEEK_IN_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.WEEK_IN_YEAR, 0); }
	public CONVERT_TIMEZONE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.CONVERT_TIMEZONE, 0); }
	public YESTERDAY(): TerminalNode | undefined { return this.tryGetToken(ApexParser.YESTERDAY, 0); }
	public TODAY(): TerminalNode | undefined { return this.tryGetToken(ApexParser.TODAY, 0); }
	public TOMORROW(): TerminalNode | undefined { return this.tryGetToken(ApexParser.TOMORROW, 0); }
	public LAST_WEEK(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_WEEK, 0); }
	public THIS_WEEK(): TerminalNode | undefined { return this.tryGetToken(ApexParser.THIS_WEEK, 0); }
	public NEXT_WEEK(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_WEEK, 0); }
	public LAST_MONTH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_MONTH, 0); }
	public THIS_MONTH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.THIS_MONTH, 0); }
	public NEXT_MONTH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_MONTH, 0); }
	public LAST_90_DAYS(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_90_DAYS, 0); }
	public NEXT_90_DAYS(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_90_DAYS, 0); }
	public LAST_N_DAYS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_N_DAYS_N, 0); }
	public NEXT_N_DAYS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_N_DAYS_N, 0); }
	public NEXT_N_WEEKS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_N_WEEKS_N, 0); }
	public LAST_N_WEEKS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_N_WEEKS_N, 0); }
	public NEXT_N_MONTHS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_N_MONTHS_N, 0); }
	public LAST_N_MONTHS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_N_MONTHS_N, 0); }
	public THIS_QUARTER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.THIS_QUARTER, 0); }
	public LAST_QUARTER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_QUARTER, 0); }
	public NEXT_QUARTER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_QUARTER, 0); }
	public NEXT_N_QUARTERS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_N_QUARTERS_N, 0); }
	public LAST_N_QUARTERS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_N_QUARTERS_N, 0); }
	public THIS_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.THIS_YEAR, 0); }
	public LAST_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_YEAR, 0); }
	public NEXT_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_YEAR, 0); }
	public NEXT_N_YEARS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_N_YEARS_N, 0); }
	public LAST_N_YEARS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_N_YEARS_N, 0); }
	public THIS_FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.THIS_FISCAL_QUARTER, 0); }
	public LAST_FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_FISCAL_QUARTER, 0); }
	public NEXT_FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_FISCAL_QUARTER, 0); }
	public NEXT_N_FISCAL_QUARTERS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_N_FISCAL_QUARTERS_N, 0); }
	public LAST_N_FISCAL_QUARTERS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_N_FISCAL_QUARTERS_N, 0); }
	public THIS_FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.THIS_FISCAL_YEAR, 0); }
	public LAST_FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_FISCAL_YEAR, 0); }
	public NEXT_FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_FISCAL_YEAR, 0); }
	public NEXT_N_FISCAL_YEARS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_N_FISCAL_YEARS_N, 0); }
	public LAST_N_FISCAL_YEARS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_N_FISCAL_YEARS_N, 0); }
	public FIND(): TerminalNode | undefined { return this.tryGetToken(ApexParser.FIND, 0); }
	public EMAIL(): TerminalNode | undefined { return this.tryGetToken(ApexParser.EMAIL, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NAME, 0); }
	public PHONE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.PHONE, 0); }
	public SIDEBAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SIDEBAR, 0); }
	public FIELDS(): TerminalNode | undefined { return this.tryGetToken(ApexParser.FIELDS, 0); }
	public METADATA(): TerminalNode | undefined { return this.tryGetToken(ApexParser.METADATA, 0); }
	public PRICEBOOKID(): TerminalNode | undefined { return this.tryGetToken(ApexParser.PRICEBOOKID, 0); }
	public NETWORK(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NETWORK, 0); }
	public SNIPPET(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SNIPPET, 0); }
	public TARGET_LENGTH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.TARGET_LENGTH, 0); }
	public DIVISION(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DIVISION, 0); }
	public RETURNING(): TerminalNode | undefined { return this.tryGetToken(ApexParser.RETURNING, 0); }
	public LISTVIEW(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LISTVIEW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_id; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterId) {
			listener.enterId(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitId) {
			listener.exitId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitId) {
			return visitor.visitId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnyIdContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(ApexParser.Identifier, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ABSTRACT, 0); }
	public AFTER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.AFTER, 0); }
	public BEFORE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.BEFORE, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(ApexParser.BREAK, 0); }
	public CATCH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.CATCH, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(ApexParser.CLASS, 0); }
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.CONTINUE, 0); }
	public DELETE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DELETE, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DO, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ELSE, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ENUM, 0); }
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(ApexParser.EXTENDS, 0); }
	public FINAL(): TerminalNode | undefined { return this.tryGetToken(ApexParser.FINAL, 0); }
	public FINALLY(): TerminalNode | undefined { return this.tryGetToken(ApexParser.FINALLY, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.FOR, 0); }
	public GET(): TerminalNode | undefined { return this.tryGetToken(ApexParser.GET, 0); }
	public GLOBAL(): TerminalNode | undefined { return this.tryGetToken(ApexParser.GLOBAL, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(ApexParser.IF, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(ApexParser.IMPLEMENTS, 0); }
	public INHERITED(): TerminalNode | undefined { return this.tryGetToken(ApexParser.INHERITED, 0); }
	public INSERT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.INSERT, 0); }
	public INSTANCEOF(): TerminalNode | undefined { return this.tryGetToken(ApexParser.INSTANCEOF, 0); }
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.INTERFACE, 0); }
	public LIST(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LIST, 0); }
	public MAP(): TerminalNode | undefined { return this.tryGetToken(ApexParser.MAP, 0); }
	public MERGE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.MERGE, 0); }
	public NEW(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEW, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NULL, 0); }
	public ON(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ON, 0); }
	public OVERRIDE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.OVERRIDE, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.PRIVATE, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(ApexParser.PROTECTED, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(ApexParser.PUBLIC, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.RETURN, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SET, 0); }
	public SHARING(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SHARING, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(ApexParser.STATIC, 0); }
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SUPER, 0); }
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SWITCH, 0); }
	public TESTMETHOD(): TerminalNode | undefined { return this.tryGetToken(ApexParser.TESTMETHOD, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(ApexParser.THIS, 0); }
	public THROW(): TerminalNode | undefined { return this.tryGetToken(ApexParser.THROW, 0); }
	public TRANSIENT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.TRANSIENT, 0); }
	public TRIGGER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.TRIGGER, 0); }
	public TRY(): TerminalNode | undefined { return this.tryGetToken(ApexParser.TRY, 0); }
	public UNDELETE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.UNDELETE, 0); }
	public UPDATE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.UPDATE, 0); }
	public UPSERT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.UPSERT, 0); }
	public VIRTUAL(): TerminalNode | undefined { return this.tryGetToken(ApexParser.VIRTUAL, 0); }
	public WEBSERVICE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.WEBSERVICE, 0); }
	public WHEN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.WHEN, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.WHILE, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.WITH, 0); }
	public WITHOUT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.WITHOUT, 0); }
	public SELECT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SELECT, 0); }
	public COUNT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.COUNT, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(ApexParser.FROM, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(ApexParser.AS, 0); }
	public USING(): TerminalNode | undefined { return this.tryGetToken(ApexParser.USING, 0); }
	public SCOPE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SCOPE, 0); }
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.WHERE, 0); }
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ORDER, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(ApexParser.BY, 0); }
	public LIMIT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LIMIT, 0); }
	public SOQLAND(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SOQLAND, 0); }
	public SOQLOR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SOQLOR, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NOT, 0); }
	public AVG(): TerminalNode | undefined { return this.tryGetToken(ApexParser.AVG, 0); }
	public COUNT_DISTINCT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.COUNT_DISTINCT, 0); }
	public MIN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.MIN, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(ApexParser.MAX, 0); }
	public SUM(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SUM, 0); }
	public TYPEOF(): TerminalNode | undefined { return this.tryGetToken(ApexParser.TYPEOF, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(ApexParser.END, 0); }
	public THEN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.THEN, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LIKE, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(ApexParser.IN, 0); }
	public INCLUDES(): TerminalNode | undefined { return this.tryGetToken(ApexParser.INCLUDES, 0); }
	public EXCLUDES(): TerminalNode | undefined { return this.tryGetToken(ApexParser.EXCLUDES, 0); }
	public ASC(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ASC, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DESC, 0); }
	public NULLS(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NULLS, 0); }
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(ApexParser.FIRST, 0); }
	public LAST(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST, 0); }
	public GROUP(): TerminalNode | undefined { return this.tryGetToken(ApexParser.GROUP, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ALL, 0); }
	public ROWS(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ROWS, 0); }
	public VIEW(): TerminalNode | undefined { return this.tryGetToken(ApexParser.VIEW, 0); }
	public HAVING(): TerminalNode | undefined { return this.tryGetToken(ApexParser.HAVING, 0); }
	public ROLLUP(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ROLLUP, 0); }
	public TOLABEL(): TerminalNode | undefined { return this.tryGetToken(ApexParser.TOLABEL, 0); }
	public OFFSET(): TerminalNode | undefined { return this.tryGetToken(ApexParser.OFFSET, 0); }
	public DATA(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DATA, 0); }
	public CATEGORY(): TerminalNode | undefined { return this.tryGetToken(ApexParser.CATEGORY, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.AT, 0); }
	public ABOVE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ABOVE, 0); }
	public BELOW(): TerminalNode | undefined { return this.tryGetToken(ApexParser.BELOW, 0); }
	public ABOVE_OR_BELOW(): TerminalNode | undefined { return this.tryGetToken(ApexParser.ABOVE_OR_BELOW, 0); }
	public SECURITY_ENFORCED(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SECURITY_ENFORCED, 0); }
	public REFERENCE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.REFERENCE, 0); }
	public CUBE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.CUBE, 0); }
	public FORMAT(): TerminalNode | undefined { return this.tryGetToken(ApexParser.FORMAT, 0); }
	public CALENDAR_MONTH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.CALENDAR_MONTH, 0); }
	public CALENDAR_QUARTER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.CALENDAR_QUARTER, 0); }
	public CALENDAR_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.CALENDAR_YEAR, 0); }
	public DAY_IN_MONTH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DAY_IN_MONTH, 0); }
	public DAY_IN_WEEK(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DAY_IN_WEEK, 0); }
	public DAY_IN_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DAY_IN_YEAR, 0); }
	public DAY_ONLY(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DAY_ONLY, 0); }
	public FISCAL_MONTH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.FISCAL_MONTH, 0); }
	public FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.FISCAL_QUARTER, 0); }
	public FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.FISCAL_YEAR, 0); }
	public HOUR_IN_DAY(): TerminalNode | undefined { return this.tryGetToken(ApexParser.HOUR_IN_DAY, 0); }
	public WEEK_IN_MONTH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.WEEK_IN_MONTH, 0); }
	public WEEK_IN_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.WEEK_IN_YEAR, 0); }
	public CONVERT_TIMEZONE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.CONVERT_TIMEZONE, 0); }
	public YESTERDAY(): TerminalNode | undefined { return this.tryGetToken(ApexParser.YESTERDAY, 0); }
	public TODAY(): TerminalNode | undefined { return this.tryGetToken(ApexParser.TODAY, 0); }
	public TOMORROW(): TerminalNode | undefined { return this.tryGetToken(ApexParser.TOMORROW, 0); }
	public LAST_WEEK(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_WEEK, 0); }
	public THIS_WEEK(): TerminalNode | undefined { return this.tryGetToken(ApexParser.THIS_WEEK, 0); }
	public NEXT_WEEK(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_WEEK, 0); }
	public LAST_MONTH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_MONTH, 0); }
	public THIS_MONTH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.THIS_MONTH, 0); }
	public NEXT_MONTH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_MONTH, 0); }
	public LAST_90_DAYS(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_90_DAYS, 0); }
	public NEXT_90_DAYS(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_90_DAYS, 0); }
	public LAST_N_DAYS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_N_DAYS_N, 0); }
	public NEXT_N_DAYS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_N_DAYS_N, 0); }
	public NEXT_N_WEEKS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_N_WEEKS_N, 0); }
	public LAST_N_WEEKS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_N_WEEKS_N, 0); }
	public NEXT_N_MONTHS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_N_MONTHS_N, 0); }
	public LAST_N_MONTHS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_N_MONTHS_N, 0); }
	public THIS_QUARTER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.THIS_QUARTER, 0); }
	public LAST_QUARTER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_QUARTER, 0); }
	public NEXT_QUARTER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_QUARTER, 0); }
	public NEXT_N_QUARTERS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_N_QUARTERS_N, 0); }
	public LAST_N_QUARTERS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_N_QUARTERS_N, 0); }
	public THIS_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.THIS_YEAR, 0); }
	public LAST_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_YEAR, 0); }
	public NEXT_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_YEAR, 0); }
	public NEXT_N_YEARS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_N_YEARS_N, 0); }
	public LAST_N_YEARS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_N_YEARS_N, 0); }
	public THIS_FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.THIS_FISCAL_QUARTER, 0); }
	public LAST_FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_FISCAL_QUARTER, 0); }
	public NEXT_FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_FISCAL_QUARTER, 0); }
	public NEXT_N_FISCAL_QUARTERS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_N_FISCAL_QUARTERS_N, 0); }
	public LAST_N_FISCAL_QUARTERS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_N_FISCAL_QUARTERS_N, 0); }
	public THIS_FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.THIS_FISCAL_YEAR, 0); }
	public LAST_FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_FISCAL_YEAR, 0); }
	public NEXT_FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_FISCAL_YEAR, 0); }
	public NEXT_N_FISCAL_YEARS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NEXT_N_FISCAL_YEARS_N, 0); }
	public LAST_N_FISCAL_YEARS_N(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LAST_N_FISCAL_YEARS_N, 0); }
	public FIND(): TerminalNode | undefined { return this.tryGetToken(ApexParser.FIND, 0); }
	public EMAIL(): TerminalNode | undefined { return this.tryGetToken(ApexParser.EMAIL, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NAME, 0); }
	public PHONE(): TerminalNode | undefined { return this.tryGetToken(ApexParser.PHONE, 0); }
	public SIDEBAR(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SIDEBAR, 0); }
	public FIELDS(): TerminalNode | undefined { return this.tryGetToken(ApexParser.FIELDS, 0); }
	public METADATA(): TerminalNode | undefined { return this.tryGetToken(ApexParser.METADATA, 0); }
	public PRICEBOOKID(): TerminalNode | undefined { return this.tryGetToken(ApexParser.PRICEBOOKID, 0); }
	public NETWORK(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NETWORK, 0); }
	public SNIPPET(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SNIPPET, 0); }
	public TARGET_LENGTH(): TerminalNode | undefined { return this.tryGetToken(ApexParser.TARGET_LENGTH, 0); }
	public DIVISION(): TerminalNode | undefined { return this.tryGetToken(ApexParser.DIVISION, 0); }
	public RETURNING(): TerminalNode | undefined { return this.tryGetToken(ApexParser.RETURNING, 0); }
	public LISTVIEW(): TerminalNode | undefined { return this.tryGetToken(ApexParser.LISTVIEW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_anyId; }
	// @Override
	public enterRule(listener: ApexParserListener): void {
		if (listener.enterAnyId) {
			listener.enterAnyId(this);
		}
	}
	// @Override
	public exitRule(listener: ApexParserListener): void {
		if (listener.exitAnyId) {
			listener.exitAnyId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ApexParserVisitor<Result>): Result {
		if (visitor.visitAnyId) {
			return visitor.visitAnyId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


