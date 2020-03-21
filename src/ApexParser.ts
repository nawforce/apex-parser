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
	public static readonly IntegerLiteral = 57;
	public static readonly NumberLiteral = 58;
	public static readonly BooleanLiteral = 59;
	public static readonly StringLiteral = 60;
	public static readonly NullLiteral = 61;
	public static readonly LPAREN = 62;
	public static readonly RPAREN = 63;
	public static readonly LBRACE = 64;
	public static readonly RBRACE = 65;
	public static readonly LBRACK = 66;
	public static readonly RBRACK = 67;
	public static readonly SEMI = 68;
	public static readonly COMMA = 69;
	public static readonly DOT = 70;
	public static readonly ASSIGN = 71;
	public static readonly GT = 72;
	public static readonly LT = 73;
	public static readonly BANG = 74;
	public static readonly TILDE = 75;
	public static readonly QUESTION = 76;
	public static readonly COLON = 77;
	public static readonly EQUAL = 78;
	public static readonly TRIPLEEQUAL = 79;
	public static readonly NOTEQUAL = 80;
	public static readonly LESSANDGREATER = 81;
	public static readonly TRIPLENOTEQUAL = 82;
	public static readonly AND = 83;
	public static readonly OR = 84;
	public static readonly INC = 85;
	public static readonly DEC = 86;
	public static readonly ADD = 87;
	public static readonly SUB = 88;
	public static readonly MUL = 89;
	public static readonly DIV = 90;
	public static readonly BITAND = 91;
	public static readonly BITOR = 92;
	public static readonly CARET = 93;
	public static readonly MOD = 94;
	public static readonly MAPTO = 95;
	public static readonly ADD_ASSIGN = 96;
	public static readonly SUB_ASSIGN = 97;
	public static readonly MUL_ASSIGN = 98;
	public static readonly DIV_ASSIGN = 99;
	public static readonly AND_ASSIGN = 100;
	public static readonly OR_ASSIGN = 101;
	public static readonly XOR_ASSIGN = 102;
	public static readonly MOD_ASSIGN = 103;
	public static readonly LSHIFT_ASSIGN = 104;
	public static readonly RSHIFT_ASSIGN = 105;
	public static readonly URSHIFT_ASSIGN = 106;
	public static readonly AT = 107;
	public static readonly Identifier = 108;
	public static readonly WS = 109;
	public static readonly DOC_COMMENT = 110;
	public static readonly COMMENT = 111;
	public static readonly LINE_COMMENT = 112;
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
	public static readonly RULE_id = 87;
	public static readonly RULE_anyId = 88;
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
		"setCreatorRest", "arguments", "soqlLiteral", "id", "anyId",
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
		"'map'", undefined, undefined, undefined, undefined, undefined, "'('", 
		"')'", "'{'", "'}'", "'['", "']'", "';'", "','", "'.'", "'='", "'>'", 
		"'<'", "'!'", "'~'", "'?'", "':'", "'=='", "'==='", "'!='", "'<>'", "'!=='", 
		"'&&'", "'||'", "'++'", "'--'", "'+'", "'-'", "'*'", "'/'", "'&'", "'|'", 
		"'^'", "'%'", "'=>'", "'+='", "'-='", "'*='", "'/='", "'&='", "'|='", 
		"'^='", "'%='", "'<<='", "'>>='", "'>>>='", "'@'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ABSTRACT", "AFTER", "BEFORE", "BREAK", "CATCH", "CLASS", "CONTINUE", 
		"DELETE", "DO", "ELSE", "ENUM", "EXTENDS", "FINAL", "FINALLY", "FOR", 
		"GET", "GLOBAL", "IF", "IMPLEMENTS", "INHERITED", "INSERT", "INSTANCEOF", 
		"INTERFACE", "MERGE", "NEW", "NULL", "ON", "OVERRIDE", "PRIVATE", "PROTECTED", 
		"PUBLIC", "RETURN", "SYSTEMRUNAS", "SET", "SHARING", "STATIC", "SUPER", 
		"SWITCH", "TESTMETHOD", "THIS", "THROW", "TRANSIENT", "TRIGGER", "TRY", 
		"UNDELETE", "UPDATE", "UPSERT", "VIRTUAL", "VOID", "WEBSERVICE", "WHEN", 
		"WHILE", "WITH", "WITHOUT", "LIST", "MAP", "IntegerLiteral", "NumberLiteral", 
		"BooleanLiteral", "StringLiteral", "NullLiteral", "LPAREN", "RPAREN", 
		"LBRACE", "RBRACE", "LBRACK", "RBRACK", "SEMI", "COMMA", "DOT", "ASSIGN", 
		"GT", "LT", "BANG", "TILDE", "QUESTION", "COLON", "EQUAL", "TRIPLEEQUAL", 
		"NOTEQUAL", "LESSANDGREATER", "TRIPLENOTEQUAL", "AND", "OR", "INC", "DEC", 
		"ADD", "SUB", "MUL", "DIV", "BITAND", "BITOR", "CARET", "MOD", "MAPTO", 
		"ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", 
		"OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN", "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", 
		"URSHIFT_ASSIGN", "AT", "Identifier", "WS", "DOC_COMMENT", "COMMENT", 
		"LINE_COMMENT",
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
			this.state = 178;
			this.match(ApexParser.TRIGGER);
			this.state = 179;
			this.id();
			this.state = 180;
			this.match(ApexParser.ON);
			this.state = 181;
			this.id();
			this.state = 182;
			this.match(ApexParser.LPAREN);
			this.state = 183;
			this.triggerCase();
			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.COMMA) {
				{
				{
				this.state = 184;
				this.match(ApexParser.COMMA);
				this.state = 185;
				this.triggerCase();
				}
				}
				this.state = 190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 191;
			this.match(ApexParser.RPAREN);
			this.state = 192;
			this.block();
			this.state = 193;
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
			this.state = 195;
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
			this.state = 196;
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
			this.state = 198;
			this.typeDeclaration();
			this.state = 199;
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
			this.state = 222;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 204;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.ABSTRACT) | (1 << ApexParser.FINAL) | (1 << ApexParser.GLOBAL) | (1 << ApexParser.INHERITED) | (1 << ApexParser.OVERRIDE) | (1 << ApexParser.PRIVATE) | (1 << ApexParser.PROTECTED) | (1 << ApexParser.PUBLIC))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (ApexParser.STATIC - 36)) | (1 << (ApexParser.TESTMETHOD - 36)) | (1 << (ApexParser.TRANSIENT - 36)) | (1 << (ApexParser.VIRTUAL - 36)) | (1 << (ApexParser.WEBSERVICE - 36)) | (1 << (ApexParser.WITH - 36)) | (1 << (ApexParser.WITHOUT - 36)))) !== 0) || _la === ApexParser.AT) {
					{
					{
					this.state = 201;
					this.modifier();
					}
					}
					this.state = 206;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 207;
				this.classDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.ABSTRACT) | (1 << ApexParser.FINAL) | (1 << ApexParser.GLOBAL) | (1 << ApexParser.INHERITED) | (1 << ApexParser.OVERRIDE) | (1 << ApexParser.PRIVATE) | (1 << ApexParser.PROTECTED) | (1 << ApexParser.PUBLIC))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (ApexParser.STATIC - 36)) | (1 << (ApexParser.TESTMETHOD - 36)) | (1 << (ApexParser.TRANSIENT - 36)) | (1 << (ApexParser.VIRTUAL - 36)) | (1 << (ApexParser.WEBSERVICE - 36)) | (1 << (ApexParser.WITH - 36)) | (1 << (ApexParser.WITHOUT - 36)))) !== 0) || _la === ApexParser.AT) {
					{
					{
					this.state = 208;
					this.modifier();
					}
					}
					this.state = 213;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 214;
				this.enumDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.ABSTRACT) | (1 << ApexParser.FINAL) | (1 << ApexParser.GLOBAL) | (1 << ApexParser.INHERITED) | (1 << ApexParser.OVERRIDE) | (1 << ApexParser.PRIVATE) | (1 << ApexParser.PROTECTED) | (1 << ApexParser.PUBLIC))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (ApexParser.STATIC - 36)) | (1 << (ApexParser.TESTMETHOD - 36)) | (1 << (ApexParser.TRANSIENT - 36)) | (1 << (ApexParser.VIRTUAL - 36)) | (1 << (ApexParser.WEBSERVICE - 36)) | (1 << (ApexParser.WITH - 36)) | (1 << (ApexParser.WITHOUT - 36)))) !== 0) || _la === ApexParser.AT) {
					{
					{
					this.state = 215;
					this.modifier();
					}
					}
					this.state = 220;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 221;
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
			this.state = 224;
			this.match(ApexParser.CLASS);
			this.state = 225;
			this.id();
			this.state = 228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.EXTENDS) {
				{
				this.state = 226;
				this.match(ApexParser.EXTENDS);
				this.state = 227;
				this.typeRef();
				}
			}

			this.state = 232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.IMPLEMENTS) {
				{
				this.state = 230;
				this.match(ApexParser.IMPLEMENTS);
				this.state = 231;
				this.typeList();
				}
			}

			this.state = 234;
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
			this.state = 236;
			this.match(ApexParser.ENUM);
			this.state = 237;
			this.id();
			this.state = 238;
			this.match(ApexParser.LBRACE);
			this.state = 240;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)))) !== 0) || _la === ApexParser.Identifier) {
				{
				this.state = 239;
				this.enumConstants();
				}
			}

			this.state = 242;
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
			this.state = 244;
			this.id();
			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.COMMA) {
				{
				{
				this.state = 245;
				this.match(ApexParser.COMMA);
				this.state = 246;
				this.id();
				}
				}
				this.state = 251;
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
			this.state = 252;
			this.match(ApexParser.INTERFACE);
			this.state = 253;
			this.id();
			this.state = 256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.EXTENDS) {
				{
				this.state = 254;
				this.match(ApexParser.EXTENDS);
				this.state = 255;
				this.typeList();
				}
			}

			this.state = 258;
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
			this.state = 260;
			this.typeRef();
			this.state = 265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.COMMA) {
				{
				{
				this.state = 261;
				this.match(ApexParser.COMMA);
				this.state = 262;
				this.typeRef();
				}
				}
				this.state = 267;
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
			this.state = 268;
			this.match(ApexParser.LBRACE);
			this.state = 272;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.ABSTRACT) | (1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.CLASS) | (1 << ApexParser.ENUM) | (1 << ApexParser.FINAL) | (1 << ApexParser.GET) | (1 << ApexParser.GLOBAL) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.INTERFACE) | (1 << ApexParser.OVERRIDE) | (1 << ApexParser.PRIVATE) | (1 << ApexParser.PROTECTED) | (1 << ApexParser.PUBLIC))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.STATIC - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.TESTMETHOD - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.VIRTUAL - 34)) | (1 << (ApexParser.VOID - 34)) | (1 << (ApexParser.WEBSERVICE - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.LBRACE - 34)))) !== 0) || _la === ApexParser.SEMI || _la === ApexParser.AT || _la === ApexParser.Identifier) {
				{
				{
				this.state = 269;
				this.classBodyDeclaration();
				}
				}
				this.state = 274;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 275;
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
			this.state = 277;
			this.match(ApexParser.LBRACE);
			this.state = 281;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.ABSTRACT) | (1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.FINAL) | (1 << ApexParser.GET) | (1 << ApexParser.GLOBAL) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.OVERRIDE) | (1 << ApexParser.PRIVATE) | (1 << ApexParser.PROTECTED) | (1 << ApexParser.PUBLIC))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.STATIC - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.TESTMETHOD - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.VIRTUAL - 34)) | (1 << (ApexParser.VOID - 34)) | (1 << (ApexParser.WEBSERVICE - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)))) !== 0) || _la === ApexParser.AT || _la === ApexParser.Identifier) {
				{
				{
				this.state = 278;
				this.interfaceMethodDeclaration();
				}
				}
				this.state = 283;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 284;
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
			this.state = 298;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 286;
				this.match(ApexParser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 288;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ApexParser.STATIC) {
					{
					this.state = 287;
					this.match(ApexParser.STATIC);
					}
				}

				this.state = 290;
				this.block();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 294;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 291;
						this.modifier();
						}
						}
					}
					this.state = 296;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
				}
				this.state = 297;
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
			this.state = 319;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ApexParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 300;
				this.annotation();
				}
				break;
			case ApexParser.GLOBAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 301;
				this.match(ApexParser.GLOBAL);
				}
				break;
			case ApexParser.PUBLIC:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 302;
				this.match(ApexParser.PUBLIC);
				}
				break;
			case ApexParser.PROTECTED:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 303;
				this.match(ApexParser.PROTECTED);
				}
				break;
			case ApexParser.PRIVATE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 304;
				this.match(ApexParser.PRIVATE);
				}
				break;
			case ApexParser.TRANSIENT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 305;
				this.match(ApexParser.TRANSIENT);
				}
				break;
			case ApexParser.STATIC:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 306;
				this.match(ApexParser.STATIC);
				}
				break;
			case ApexParser.ABSTRACT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 307;
				this.match(ApexParser.ABSTRACT);
				}
				break;
			case ApexParser.FINAL:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 308;
				this.match(ApexParser.FINAL);
				}
				break;
			case ApexParser.WEBSERVICE:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 309;
				this.match(ApexParser.WEBSERVICE);
				}
				break;
			case ApexParser.OVERRIDE:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 310;
				this.match(ApexParser.OVERRIDE);
				}
				break;
			case ApexParser.VIRTUAL:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 311;
				this.match(ApexParser.VIRTUAL);
				}
				break;
			case ApexParser.TESTMETHOD:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 312;
				this.match(ApexParser.TESTMETHOD);
				}
				break;
			case ApexParser.WITH:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 313;
				this.match(ApexParser.WITH);
				this.state = 314;
				this.match(ApexParser.SHARING);
				}
				break;
			case ApexParser.WITHOUT:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 315;
				this.match(ApexParser.WITHOUT);
				this.state = 316;
				this.match(ApexParser.SHARING);
				}
				break;
			case ApexParser.INHERITED:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 317;
				this.match(ApexParser.INHERITED);
				this.state = 318;
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
			this.state = 328;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 321;
				this.methodDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 322;
				this.fieldDeclaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 323;
				this.constructorDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 324;
				this.interfaceDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 325;
				this.classDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 326;
				this.enumDeclaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 327;
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
			this.state = 332;
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
			case ApexParser.Identifier:
				{
				this.state = 330;
				this.typeRef();
				}
				break;
			case ApexParser.VOID:
				{
				this.state = 331;
				this.match(ApexParser.VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 334;
			this.id();
			this.state = 335;
			this.formalParameters();
			this.state = 338;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ApexParser.LBRACE:
				{
				this.state = 336;
				this.block();
				}
				break;
			case ApexParser.SEMI:
				{
				this.state = 337;
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
			this.state = 340;
			this.qualifiedName();
			this.state = 341;
			this.formalParameters();
			this.state = 342;
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
			this.state = 344;
			this.typeRef();
			this.state = 345;
			this.variableDeclarators();
			this.state = 346;
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
			this.state = 348;
			this.typeRef();
			this.state = 349;
			this.id();
			this.state = 350;
			this.match(ApexParser.LBRACE);
			this.state = 354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.ABSTRACT) | (1 << ApexParser.FINAL) | (1 << ApexParser.GET) | (1 << ApexParser.GLOBAL) | (1 << ApexParser.INHERITED) | (1 << ApexParser.OVERRIDE) | (1 << ApexParser.PRIVATE) | (1 << ApexParser.PROTECTED) | (1 << ApexParser.PUBLIC))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.STATIC - 34)) | (1 << (ApexParser.TESTMETHOD - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.VIRTUAL - 34)) | (1 << (ApexParser.WEBSERVICE - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)))) !== 0) || _la === ApexParser.AT) {
				{
				{
				this.state = 351;
				this.propertyBlock();
				}
				}
				this.state = 356;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 357;
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
			this.state = 362;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 359;
					this.modifier();
					}
					}
				}
				this.state = 364;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			this.state = 367;
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
			case ApexParser.Identifier:
				{
				this.state = 365;
				this.typeRef();
				}
				break;
			case ApexParser.VOID:
				{
				this.state = 366;
				this.match(ApexParser.VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 369;
			this.id();
			this.state = 370;
			this.formalParameters();
			this.state = 371;
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
			this.state = 373;
			this.variableDeclarator();
			this.state = 378;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.COMMA) {
				{
				{
				this.state = 374;
				this.match(ApexParser.COMMA);
				this.state = 375;
				this.variableDeclarator();
				}
				}
				this.state = 380;
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
			this.state = 381;
			this.id();
			this.state = 384;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.ASSIGN) {
				{
				this.state = 382;
				this.match(ApexParser.ASSIGN);
				this.state = 383;
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
			this.state = 386;
			this.match(ApexParser.LBRACE);
			this.state = 398;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SUPER - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.THIS - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.IntegerLiteral - 34)) | (1 << (ApexParser.NumberLiteral - 34)) | (1 << (ApexParser.BooleanLiteral - 34)) | (1 << (ApexParser.StringLiteral - 34)) | (1 << (ApexParser.LPAREN - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LBRACK - 66)) | (1 << (ApexParser.BANG - 66)) | (1 << (ApexParser.TILDE - 66)) | (1 << (ApexParser.INC - 66)) | (1 << (ApexParser.DEC - 66)) | (1 << (ApexParser.ADD - 66)) | (1 << (ApexParser.SUB - 66)))) !== 0) || _la === ApexParser.Identifier) {
				{
				this.state = 387;
				this.expression(0);
				this.state = 392;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 388;
						this.match(ApexParser.COMMA);
						this.state = 389;
						this.expression(0);
						}
						}
					}
					this.state = 394;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
				}
				this.state = 396;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ApexParser.COMMA) {
					{
					this.state = 395;
					this.match(ApexParser.COMMA);
					}
				}

				}
			}

			this.state = 400;
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
			this.state = 402;
			this.typeName();
			this.state = 407;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 403;
					this.match(ApexParser.DOT);
					this.state = 404;
					this.typeName();
					}
					}
				}
				this.state = 409;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 410;
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
			this.state = 416;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 412;
					this.match(ApexParser.LBRACK);
					this.state = 413;
					this.match(ApexParser.RBRACK);
					}
					}
				}
				this.state = 418;
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
			this.state = 435;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 419;
				this.match(ApexParser.LIST);
				this.state = 421;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
				case 1:
					{
					this.state = 420;
					this.typeArguments();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 423;
				this.match(ApexParser.SET);
				this.state = 425;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
				case 1:
					{
					this.state = 424;
					this.typeArguments();
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 427;
				this.match(ApexParser.MAP);
				this.state = 429;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
				case 1:
					{
					this.state = 428;
					this.typeArguments();
					}
					break;
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 431;
				this.id();
				this.state = 433;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
				case 1:
					{
					this.state = 432;
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
			this.state = 437;
			this.match(ApexParser.LT);
			this.state = 438;
			this.typeList();
			this.state = 439;
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
			this.state = 441;
			this.match(ApexParser.LPAREN);
			this.state = 443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.ABSTRACT) | (1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.FINAL) | (1 << ApexParser.GET) | (1 << ApexParser.GLOBAL) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.OVERRIDE) | (1 << ApexParser.PRIVATE) | (1 << ApexParser.PROTECTED) | (1 << ApexParser.PUBLIC))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.STATIC - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.TESTMETHOD - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.VIRTUAL - 34)) | (1 << (ApexParser.WEBSERVICE - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)))) !== 0) || _la === ApexParser.AT || _la === ApexParser.Identifier) {
				{
				this.state = 442;
				this.formalParameterList();
				}
			}

			this.state = 445;
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
			this.state = 447;
			this.formalParameter();
			this.state = 452;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.COMMA) {
				{
				{
				this.state = 448;
				this.match(ApexParser.COMMA);
				this.state = 449;
				this.formalParameter();
				}
				}
				this.state = 454;
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
			this.state = 458;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 455;
					this.modifier();
					}
					}
				}
				this.state = 460;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			}
			this.state = 461;
			this.typeRef();
			this.state = 462;
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
			this.state = 464;
			this.id();
			this.state = 469;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.DOT) {
				{
				{
				this.state = 465;
				this.match(ApexParser.DOT);
				this.state = 466;
				this.id();
				}
				}
				this.state = 471;
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
			this.state = 472;
			_la = this._input.LA(1);
			if (!(_la === ApexParser.NULL || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (ApexParser.IntegerLiteral - 57)) | (1 << (ApexParser.NumberLiteral - 57)) | (1 << (ApexParser.BooleanLiteral - 57)) | (1 << (ApexParser.StringLiteral - 57)))) !== 0))) {
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
			this.state = 474;
			this.match(ApexParser.AT);
			this.state = 475;
			this.qualifiedName();
			this.state = 482;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.LPAREN) {
				{
				this.state = 476;
				this.match(ApexParser.LPAREN);
				this.state = 479;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
				case 1:
					{
					this.state = 477;
					this.elementValuePairs();
					}
					break;

				case 2:
					{
					this.state = 478;
					this.elementValue();
					}
					break;
				}
				this.state = 481;
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
			this.state = 484;
			this.elementValuePair();
			this.state = 491;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)))) !== 0) || _la === ApexParser.COMMA || _la === ApexParser.Identifier) {
				{
				{
				this.state = 486;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ApexParser.COMMA) {
					{
					this.state = 485;
					this.match(ApexParser.COMMA);
					}
				}

				this.state = 488;
				this.elementValuePair();
				}
				}
				this.state = 493;
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
			this.state = 494;
			this.id();
			this.state = 495;
			this.match(ApexParser.ASSIGN);
			this.state = 496;
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
			this.state = 501;
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
			case ApexParser.IntegerLiteral:
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
				this.state = 498;
				this.expression(0);
				}
				break;
			case ApexParser.AT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 499;
				this.annotation();
				}
				break;
			case ApexParser.LBRACE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 500;
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
			this.state = 503;
			this.match(ApexParser.LBRACE);
			this.state = 512;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SUPER - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.THIS - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.IntegerLiteral - 34)) | (1 << (ApexParser.NumberLiteral - 34)) | (1 << (ApexParser.BooleanLiteral - 34)) | (1 << (ApexParser.StringLiteral - 34)) | (1 << (ApexParser.LPAREN - 34)) | (1 << (ApexParser.LBRACE - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LBRACK - 66)) | (1 << (ApexParser.BANG - 66)) | (1 << (ApexParser.TILDE - 66)) | (1 << (ApexParser.INC - 66)) | (1 << (ApexParser.DEC - 66)) | (1 << (ApexParser.ADD - 66)) | (1 << (ApexParser.SUB - 66)))) !== 0) || _la === ApexParser.AT || _la === ApexParser.Identifier) {
				{
				this.state = 504;
				this.elementValue();
				this.state = 509;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 505;
						this.match(ApexParser.COMMA);
						this.state = 506;
						this.elementValue();
						}
						}
					}
					this.state = 511;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
				}
				}
			}

			this.state = 515;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.COMMA) {
				{
				this.state = 514;
				this.match(ApexParser.COMMA);
				}
			}

			this.state = 517;
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
			this.state = 519;
			this.match(ApexParser.LBRACE);
			this.state = 523;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.ABSTRACT) | (1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.BREAK) | (1 << ApexParser.CONTINUE) | (1 << ApexParser.DELETE) | (1 << ApexParser.DO) | (1 << ApexParser.FINAL) | (1 << ApexParser.FOR) | (1 << ApexParser.GET) | (1 << ApexParser.GLOBAL) | (1 << ApexParser.IF) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSERT) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.MERGE) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL) | (1 << ApexParser.OVERRIDE) | (1 << ApexParser.PRIVATE) | (1 << ApexParser.PROTECTED) | (1 << ApexParser.PUBLIC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ApexParser.RETURN - 32)) | (1 << (ApexParser.SYSTEMRUNAS - 32)) | (1 << (ApexParser.SET - 32)) | (1 << (ApexParser.SHARING - 32)) | (1 << (ApexParser.STATIC - 32)) | (1 << (ApexParser.SUPER - 32)) | (1 << (ApexParser.SWITCH - 32)) | (1 << (ApexParser.TESTMETHOD - 32)) | (1 << (ApexParser.THIS - 32)) | (1 << (ApexParser.THROW - 32)) | (1 << (ApexParser.TRANSIENT - 32)) | (1 << (ApexParser.TRIGGER - 32)) | (1 << (ApexParser.TRY - 32)) | (1 << (ApexParser.UNDELETE - 32)) | (1 << (ApexParser.UPDATE - 32)) | (1 << (ApexParser.UPSERT - 32)) | (1 << (ApexParser.VIRTUAL - 32)) | (1 << (ApexParser.WEBSERVICE - 32)) | (1 << (ApexParser.WHEN - 32)) | (1 << (ApexParser.WHILE - 32)) | (1 << (ApexParser.WITH - 32)) | (1 << (ApexParser.WITHOUT - 32)) | (1 << (ApexParser.LIST - 32)) | (1 << (ApexParser.MAP - 32)) | (1 << (ApexParser.IntegerLiteral - 32)) | (1 << (ApexParser.NumberLiteral - 32)) | (1 << (ApexParser.BooleanLiteral - 32)) | (1 << (ApexParser.StringLiteral - 32)) | (1 << (ApexParser.LPAREN - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (ApexParser.LBRACE - 64)) | (1 << (ApexParser.LBRACK - 64)) | (1 << (ApexParser.BANG - 64)) | (1 << (ApexParser.TILDE - 64)) | (1 << (ApexParser.INC - 64)) | (1 << (ApexParser.DEC - 64)) | (1 << (ApexParser.ADD - 64)) | (1 << (ApexParser.SUB - 64)))) !== 0) || _la === ApexParser.AT || _la === ApexParser.Identifier) {
				{
				{
				this.state = 520;
				this.statement();
				}
				}
				this.state = 525;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 526;
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
			this.state = 528;
			this.localVariableDeclaration();
			this.state = 529;
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
			this.state = 534;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 531;
					this.modifier();
					}
					}
				}
				this.state = 536;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			}
			this.state = 537;
			this.typeRef();
			this.state = 538;
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
			this.state = 560;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 540;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 541;
				this.ifStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 542;
				this.switchStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 543;
				this.forStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 544;
				this.whileStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 545;
				this.doWhileStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 546;
				this.tryStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 547;
				this.returnStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 548;
				this.throwStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 549;
				this.breakStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 550;
				this.continueStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 551;
				this.insertStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 552;
				this.updateStatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 553;
				this.deleteStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 554;
				this.undeleteStatement();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 555;
				this.upsertStatement();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 556;
				this.mergeStatement();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 557;
				this.runAsStatement();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 558;
				this.localVariableDeclarationStatement();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 559;
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
			this.state = 562;
			this.match(ApexParser.IF);
			this.state = 563;
			this.parExpression();
			this.state = 564;
			this.statement();
			this.state = 567;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 565;
				this.match(ApexParser.ELSE);
				this.state = 566;
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
			this.state = 569;
			this.match(ApexParser.SWITCH);
			this.state = 570;
			this.match(ApexParser.ON);
			this.state = 571;
			this.expression(0);
			this.state = 572;
			this.match(ApexParser.LBRACE);
			this.state = 574;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 573;
				this.whenControl();
				}
				}
				this.state = 576;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ApexParser.WHEN);
			this.state = 578;
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
			this.state = 580;
			this.match(ApexParser.WHEN);
			this.state = 581;
			this.whenValue();
			this.state = 582;
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
			this.state = 596;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 584;
				this.match(ApexParser.ELSE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 585;
				this.whenLiteral();
				this.state = 590;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ApexParser.COMMA) {
					{
					{
					this.state = 586;
					this.match(ApexParser.COMMA);
					this.state = 587;
					this.whenLiteral();
					}
					}
					this.state = 592;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 593;
				this.id();
				this.state = 594;
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
			this.state = 605;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ApexParser.IntegerLiteral:
			case ApexParser.SUB:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 599;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ApexParser.SUB) {
					{
					this.state = 598;
					this.match(ApexParser.SUB);
					}
				}

				this.state = 601;
				this.match(ApexParser.IntegerLiteral);
				}
				break;
			case ApexParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 602;
				this.match(ApexParser.StringLiteral);
				}
				break;
			case ApexParser.NULL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 603;
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
			case ApexParser.Identifier:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 604;
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
			this.state = 607;
			this.match(ApexParser.FOR);
			this.state = 608;
			this.match(ApexParser.LPAREN);
			this.state = 609;
			this.forControl();
			this.state = 610;
			this.match(ApexParser.RPAREN);
			this.state = 611;
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
			this.state = 613;
			this.match(ApexParser.WHILE);
			this.state = 614;
			this.parExpression();
			this.state = 615;
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
			this.state = 617;
			this.match(ApexParser.DO);
			this.state = 618;
			this.statement();
			this.state = 619;
			this.match(ApexParser.WHILE);
			this.state = 620;
			this.parExpression();
			this.state = 621;
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
			this.state = 623;
			this.match(ApexParser.TRY);
			this.state = 624;
			this.block();
			this.state = 634;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ApexParser.CATCH:
				{
				this.state = 626;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 625;
					this.catchClause();
					}
					}
					this.state = 628;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === ApexParser.CATCH);
				this.state = 631;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ApexParser.FINALLY) {
					{
					this.state = 630;
					this.finallyBlock();
					}
				}

				}
				break;
			case ApexParser.FINALLY:
				{
				this.state = 633;
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
			this.state = 636;
			this.match(ApexParser.RETURN);
			this.state = 638;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SUPER - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.THIS - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.IntegerLiteral - 34)) | (1 << (ApexParser.NumberLiteral - 34)) | (1 << (ApexParser.BooleanLiteral - 34)) | (1 << (ApexParser.StringLiteral - 34)) | (1 << (ApexParser.LPAREN - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LBRACK - 66)) | (1 << (ApexParser.BANG - 66)) | (1 << (ApexParser.TILDE - 66)) | (1 << (ApexParser.INC - 66)) | (1 << (ApexParser.DEC - 66)) | (1 << (ApexParser.ADD - 66)) | (1 << (ApexParser.SUB - 66)))) !== 0) || _la === ApexParser.Identifier) {
				{
				this.state = 637;
				this.expression(0);
				}
			}

			this.state = 640;
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
			this.state = 642;
			this.match(ApexParser.THROW);
			this.state = 643;
			this.expression(0);
			this.state = 644;
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
			this.state = 646;
			this.match(ApexParser.BREAK);
			this.state = 647;
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
			this.state = 649;
			this.match(ApexParser.CONTINUE);
			this.state = 650;
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
			this.state = 652;
			this.match(ApexParser.INSERT);
			this.state = 653;
			this.expression(0);
			this.state = 654;
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
			this.state = 656;
			this.match(ApexParser.UPDATE);
			this.state = 657;
			this.expression(0);
			this.state = 658;
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
			this.state = 660;
			this.match(ApexParser.DELETE);
			this.state = 661;
			this.expression(0);
			this.state = 662;
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
			this.state = 664;
			this.match(ApexParser.UNDELETE);
			this.state = 665;
			this.expression(0);
			this.state = 666;
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
			this.state = 668;
			this.match(ApexParser.UPSERT);
			this.state = 669;
			this.expression(0);
			this.state = 671;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)))) !== 0) || _la === ApexParser.Identifier) {
				{
				this.state = 670;
				this.qualifiedName();
				}
			}

			this.state = 673;
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
			this.state = 675;
			this.match(ApexParser.MERGE);
			this.state = 676;
			this.expression(0);
			this.state = 677;
			this.expression(0);
			this.state = 678;
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
			this.state = 680;
			this.match(ApexParser.SYSTEMRUNAS);
			this.state = 681;
			this.match(ApexParser.LPAREN);
			this.state = 683;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SUPER - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.THIS - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.IntegerLiteral - 34)) | (1 << (ApexParser.NumberLiteral - 34)) | (1 << (ApexParser.BooleanLiteral - 34)) | (1 << (ApexParser.StringLiteral - 34)) | (1 << (ApexParser.LPAREN - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LBRACK - 66)) | (1 << (ApexParser.BANG - 66)) | (1 << (ApexParser.TILDE - 66)) | (1 << (ApexParser.INC - 66)) | (1 << (ApexParser.DEC - 66)) | (1 << (ApexParser.ADD - 66)) | (1 << (ApexParser.SUB - 66)))) !== 0) || _la === ApexParser.Identifier) {
				{
				this.state = 682;
				this.expressionList();
				}
			}

			this.state = 685;
			this.match(ApexParser.RPAREN);
			this.state = 686;
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
			this.state = 688;
			this.expression(0);
			this.state = 689;
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
			this.state = 694;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.ABSTRACT) | (1 << ApexParser.FINAL) | (1 << ApexParser.GLOBAL) | (1 << ApexParser.INHERITED) | (1 << ApexParser.OVERRIDE) | (1 << ApexParser.PRIVATE) | (1 << ApexParser.PROTECTED) | (1 << ApexParser.PUBLIC))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (ApexParser.STATIC - 36)) | (1 << (ApexParser.TESTMETHOD - 36)) | (1 << (ApexParser.TRANSIENT - 36)) | (1 << (ApexParser.VIRTUAL - 36)) | (1 << (ApexParser.WEBSERVICE - 36)) | (1 << (ApexParser.WITH - 36)) | (1 << (ApexParser.WITHOUT - 36)))) !== 0) || _la === ApexParser.AT) {
				{
				{
				this.state = 691;
				this.modifier();
				}
				}
				this.state = 696;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 699;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ApexParser.GET:
				{
				this.state = 697;
				this.getter();
				}
				break;
			case ApexParser.SET:
				{
				this.state = 698;
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
			this.state = 701;
			this.match(ApexParser.GET);
			this.state = 704;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ApexParser.SEMI:
				{
				this.state = 702;
				this.match(ApexParser.SEMI);
				}
				break;
			case ApexParser.LBRACE:
				{
				this.state = 703;
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
			this.state = 706;
			this.match(ApexParser.SET);
			this.state = 709;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ApexParser.SEMI:
				{
				this.state = 707;
				this.match(ApexParser.SEMI);
				}
				break;
			case ApexParser.LBRACE:
				{
				this.state = 708;
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
			this.state = 711;
			this.match(ApexParser.CATCH);
			this.state = 712;
			this.match(ApexParser.LPAREN);
			this.state = 716;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 713;
					this.modifier();
					}
					}
				}
				this.state = 718;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
			}
			this.state = 719;
			this.qualifiedName();
			this.state = 720;
			this.id();
			this.state = 721;
			this.match(ApexParser.RPAREN);
			this.state = 722;
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
			this.state = 724;
			this.match(ApexParser.FINALLY);
			this.state = 725;
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
			this.state = 739;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 727;
				this.enhancedForControl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 729;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.ABSTRACT) | (1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.FINAL) | (1 << ApexParser.GET) | (1 << ApexParser.GLOBAL) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL) | (1 << ApexParser.OVERRIDE) | (1 << ApexParser.PRIVATE) | (1 << ApexParser.PROTECTED) | (1 << ApexParser.PUBLIC))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.STATIC - 34)) | (1 << (ApexParser.SUPER - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.TESTMETHOD - 34)) | (1 << (ApexParser.THIS - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.VIRTUAL - 34)) | (1 << (ApexParser.WEBSERVICE - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.IntegerLiteral - 34)) | (1 << (ApexParser.NumberLiteral - 34)) | (1 << (ApexParser.BooleanLiteral - 34)) | (1 << (ApexParser.StringLiteral - 34)) | (1 << (ApexParser.LPAREN - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LBRACK - 66)) | (1 << (ApexParser.BANG - 66)) | (1 << (ApexParser.TILDE - 66)) | (1 << (ApexParser.INC - 66)) | (1 << (ApexParser.DEC - 66)) | (1 << (ApexParser.ADD - 66)) | (1 << (ApexParser.SUB - 66)))) !== 0) || _la === ApexParser.AT || _la === ApexParser.Identifier) {
					{
					this.state = 728;
					this.forInit();
					}
				}

				this.state = 731;
				this.match(ApexParser.SEMI);
				this.state = 733;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SUPER - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.THIS - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.IntegerLiteral - 34)) | (1 << (ApexParser.NumberLiteral - 34)) | (1 << (ApexParser.BooleanLiteral - 34)) | (1 << (ApexParser.StringLiteral - 34)) | (1 << (ApexParser.LPAREN - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LBRACK - 66)) | (1 << (ApexParser.BANG - 66)) | (1 << (ApexParser.TILDE - 66)) | (1 << (ApexParser.INC - 66)) | (1 << (ApexParser.DEC - 66)) | (1 << (ApexParser.ADD - 66)) | (1 << (ApexParser.SUB - 66)))) !== 0) || _la === ApexParser.Identifier) {
					{
					this.state = 732;
					this.expression(0);
					}
				}

				this.state = 735;
				this.match(ApexParser.SEMI);
				this.state = 737;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SUPER - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.THIS - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.IntegerLiteral - 34)) | (1 << (ApexParser.NumberLiteral - 34)) | (1 << (ApexParser.BooleanLiteral - 34)) | (1 << (ApexParser.StringLiteral - 34)) | (1 << (ApexParser.LPAREN - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LBRACK - 66)) | (1 << (ApexParser.BANG - 66)) | (1 << (ApexParser.TILDE - 66)) | (1 << (ApexParser.INC - 66)) | (1 << (ApexParser.DEC - 66)) | (1 << (ApexParser.ADD - 66)) | (1 << (ApexParser.SUB - 66)))) !== 0) || _la === ApexParser.Identifier) {
					{
					this.state = 736;
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
			this.state = 743;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 741;
				this.localVariableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 742;
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 748;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 745;
					this.modifier();
					}
					}
				}
				this.state = 750;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
			}
			this.state = 751;
			this.typeRef();
			this.state = 752;
			this.id();
			this.state = 753;
			this.match(ApexParser.COLON);
			this.state = 754;
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
			this.state = 756;
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
			this.state = 758;
			this.match(ApexParser.LPAREN);
			this.state = 759;
			this.expression(0);
			this.state = 760;
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
			this.state = 762;
			this.expression(0);
			this.state = 767;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.COMMA) {
				{
				{
				this.state = 763;
				this.match(ApexParser.COMMA);
				this.state = 764;
				this.expression(0);
				}
				}
				this.state = 769;
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
			this.state = 784;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
			case 1:
				{
				_localctx = new PrimaryExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 771;
				this.primary();
				}
				break;

			case 2:
				{
				_localctx = new MethodCallExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 772;
				this.methodCall();
				}
				break;

			case 3:
				{
				_localctx = new NewExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 773;
				this.match(ApexParser.NEW);
				this.state = 774;
				this.creator();
				}
				break;

			case 4:
				{
				_localctx = new CastExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 775;
				this.match(ApexParser.LPAREN);
				this.state = 776;
				this.typeRef();
				this.state = 777;
				this.match(ApexParser.RPAREN);
				this.state = 778;
				this.expression(17);
				}
				break;

			case 5:
				{
				_localctx = new PreOpExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 780;
				_la = this._input.LA(1);
				if (!(((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & ((1 << (ApexParser.INC - 85)) | (1 << (ApexParser.DEC - 85)) | (1 << (ApexParser.ADD - 85)) | (1 << (ApexParser.SUB - 85)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 781;
				this.expression(15);
				}
				break;

			case 6:
				{
				_localctx = new NegExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 782;
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
				this.state = 783;
				this.expression(14);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 854;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 852;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
					case 1:
						{
						_localctx = new Arth1ExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 786;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 787;
						_la = this._input.LA(1);
						if (!(((((_la - 89)) & ~0x1F) === 0 && ((1 << (_la - 89)) & ((1 << (ApexParser.MUL - 89)) | (1 << (ApexParser.DIV - 89)) | (1 << (ApexParser.MOD - 89)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 788;
						this.expression(14);
						}
						break;

					case 2:
						{
						_localctx = new Arth2ExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 789;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 790;
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
						this.state = 791;
						this.expression(13);
						}
						break;

					case 3:
						{
						_localctx = new BitExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 792;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 800;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
						case 1:
							{
							this.state = 793;
							this.match(ApexParser.LT);
							this.state = 794;
							this.match(ApexParser.LT);
							}
							break;

						case 2:
							{
							this.state = 795;
							this.match(ApexParser.GT);
							this.state = 796;
							this.match(ApexParser.GT);
							this.state = 797;
							this.match(ApexParser.GT);
							}
							break;

						case 3:
							{
							this.state = 798;
							this.match(ApexParser.GT);
							this.state = 799;
							this.match(ApexParser.GT);
							}
							break;
						}
						this.state = 802;
						this.expression(12);
						}
						break;

					case 4:
						{
						_localctx = new CmpExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 803;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 804;
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
						this.state = 806;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === ApexParser.ASSIGN) {
							{
							this.state = 805;
							this.match(ApexParser.ASSIGN);
							}
						}

						this.state = 808;
						this.expression(11);
						}
						break;

					case 5:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 809;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 810;
						_la = this._input.LA(1);
						if (!(((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (ApexParser.EQUAL - 78)) | (1 << (ApexParser.TRIPLEEQUAL - 78)) | (1 << (ApexParser.NOTEQUAL - 78)) | (1 << (ApexParser.LESSANDGREATER - 78)) | (1 << (ApexParser.TRIPLENOTEQUAL - 78)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 811;
						this.expression(9);
						}
						break;

					case 6:
						{
						_localctx = new BitAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 812;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 813;
						this.match(ApexParser.BITAND);
						this.state = 814;
						this.expression(8);
						}
						break;

					case 7:
						{
						_localctx = new BitNotExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 815;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 816;
						this.match(ApexParser.CARET);
						this.state = 817;
						this.expression(7);
						}
						break;

					case 8:
						{
						_localctx = new BitOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 818;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 819;
						this.match(ApexParser.BITOR);
						this.state = 820;
						this.expression(6);
						}
						break;

					case 9:
						{
						_localctx = new LogAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 821;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 822;
						this.match(ApexParser.AND);
						this.state = 823;
						this.expression(5);
						}
						break;

					case 10:
						{
						_localctx = new LogOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 824;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 825;
						this.match(ApexParser.OR);
						this.state = 826;
						this.expression(4);
						}
						break;

					case 11:
						{
						_localctx = new CondExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 827;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 828;
						this.match(ApexParser.QUESTION);
						this.state = 829;
						this.expression(0);
						this.state = 830;
						this.match(ApexParser.COLON);
						this.state = 831;
						this.expression(2);
						}
						break;

					case 12:
						{
						_localctx = new AssignExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 833;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 834;
						_la = this._input.LA(1);
						if (!(((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (ApexParser.ASSIGN - 71)) | (1 << (ApexParser.ADD_ASSIGN - 71)) | (1 << (ApexParser.SUB_ASSIGN - 71)) | (1 << (ApexParser.MUL_ASSIGN - 71)) | (1 << (ApexParser.DIV_ASSIGN - 71)) | (1 << (ApexParser.AND_ASSIGN - 71)) | (1 << (ApexParser.OR_ASSIGN - 71)) | (1 << (ApexParser.XOR_ASSIGN - 71)))) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & ((1 << (ApexParser.MOD_ASSIGN - 103)) | (1 << (ApexParser.LSHIFT_ASSIGN - 103)) | (1 << (ApexParser.RSHIFT_ASSIGN - 103)) | (1 << (ApexParser.URSHIFT_ASSIGN - 103)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 835;
						this.expression(1);
						}
						break;

					case 13:
						{
						_localctx = new DotExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 836;
						if (!(this.precpred(this._ctx, 21))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 21)");
						}
						this.state = 837;
						this.match(ApexParser.DOT);
						this.state = 840;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
						case 1:
							{
							this.state = 838;
							this.dotMethodCall();
							}
							break;

						case 2:
							{
							this.state = 839;
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
						this.state = 842;
						if (!(this.precpred(this._ctx, 20))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 20)");
						}
						this.state = 843;
						this.match(ApexParser.LBRACK);
						this.state = 844;
						this.expression(0);
						this.state = 845;
						this.match(ApexParser.RBRACK);
						}
						break;

					case 15:
						{
						_localctx = new PostOpExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ApexParser.RULE_expression);
						this.state = 847;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 848;
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
						this.state = 849;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 850;
						this.match(ApexParser.INSTANCEOF);
						this.state = 851;
						this.typeRef();
						}
						break;
					}
					}
				}
				this.state = 856;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
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
			this.state = 870;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				_localctx = new SubPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 857;
				this.match(ApexParser.LPAREN);
				this.state = 858;
				this.expression(0);
				this.state = 859;
				this.match(ApexParser.RPAREN);
				}
				break;

			case 2:
				_localctx = new ThisPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 861;
				this.match(ApexParser.THIS);
				}
				break;

			case 3:
				_localctx = new SuperPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 862;
				this.match(ApexParser.SUPER);
				}
				break;

			case 4:
				_localctx = new LiteralPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 863;
				this.literal();
				}
				break;

			case 5:
				_localctx = new TypeRefPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 864;
				this.typeRef();
				this.state = 865;
				this.match(ApexParser.DOT);
				this.state = 866;
				this.match(ApexParser.CLASS);
				}
				break;

			case 6:
				_localctx = new IdPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 868;
				this.id();
				}
				break;

			case 7:
				_localctx = new SoqlPrimaryContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 869;
				this.soqlLiteral();
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
			this.state = 891;
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
			case ApexParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 872;
				this.id();
				this.state = 873;
				this.match(ApexParser.LPAREN);
				this.state = 875;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SUPER - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.THIS - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.IntegerLiteral - 34)) | (1 << (ApexParser.NumberLiteral - 34)) | (1 << (ApexParser.BooleanLiteral - 34)) | (1 << (ApexParser.StringLiteral - 34)) | (1 << (ApexParser.LPAREN - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LBRACK - 66)) | (1 << (ApexParser.BANG - 66)) | (1 << (ApexParser.TILDE - 66)) | (1 << (ApexParser.INC - 66)) | (1 << (ApexParser.DEC - 66)) | (1 << (ApexParser.ADD - 66)) | (1 << (ApexParser.SUB - 66)))) !== 0) || _la === ApexParser.Identifier) {
					{
					this.state = 874;
					this.expressionList();
					}
				}

				this.state = 877;
				this.match(ApexParser.RPAREN);
				}
				break;
			case ApexParser.THIS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 879;
				this.match(ApexParser.THIS);
				this.state = 880;
				this.match(ApexParser.LPAREN);
				this.state = 882;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SUPER - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.THIS - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.IntegerLiteral - 34)) | (1 << (ApexParser.NumberLiteral - 34)) | (1 << (ApexParser.BooleanLiteral - 34)) | (1 << (ApexParser.StringLiteral - 34)) | (1 << (ApexParser.LPAREN - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LBRACK - 66)) | (1 << (ApexParser.BANG - 66)) | (1 << (ApexParser.TILDE - 66)) | (1 << (ApexParser.INC - 66)) | (1 << (ApexParser.DEC - 66)) | (1 << (ApexParser.ADD - 66)) | (1 << (ApexParser.SUB - 66)))) !== 0) || _la === ApexParser.Identifier) {
					{
					this.state = 881;
					this.expressionList();
					}
				}

				this.state = 884;
				this.match(ApexParser.RPAREN);
				}
				break;
			case ApexParser.SUPER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 885;
				this.match(ApexParser.SUPER);
				this.state = 886;
				this.match(ApexParser.LPAREN);
				this.state = 888;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SUPER - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.THIS - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.IntegerLiteral - 34)) | (1 << (ApexParser.NumberLiteral - 34)) | (1 << (ApexParser.BooleanLiteral - 34)) | (1 << (ApexParser.StringLiteral - 34)) | (1 << (ApexParser.LPAREN - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LBRACK - 66)) | (1 << (ApexParser.BANG - 66)) | (1 << (ApexParser.TILDE - 66)) | (1 << (ApexParser.INC - 66)) | (1 << (ApexParser.DEC - 66)) | (1 << (ApexParser.ADD - 66)) | (1 << (ApexParser.SUB - 66)))) !== 0) || _la === ApexParser.Identifier) {
					{
					this.state = 887;
					this.expressionList();
					}
				}

				this.state = 890;
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
			this.state = 893;
			this.anyId();
			this.state = 894;
			this.match(ApexParser.LPAREN);
			this.state = 896;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SUPER - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.THIS - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.IntegerLiteral - 34)) | (1 << (ApexParser.NumberLiteral - 34)) | (1 << (ApexParser.BooleanLiteral - 34)) | (1 << (ApexParser.StringLiteral - 34)) | (1 << (ApexParser.LPAREN - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LBRACK - 66)) | (1 << (ApexParser.BANG - 66)) | (1 << (ApexParser.TILDE - 66)) | (1 << (ApexParser.INC - 66)) | (1 << (ApexParser.DEC - 66)) | (1 << (ApexParser.ADD - 66)) | (1 << (ApexParser.SUB - 66)))) !== 0) || _la === ApexParser.Identifier) {
				{
				this.state = 895;
				this.expressionList();
				}
			}

			this.state = 898;
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
			this.state = 900;
			this.createdName();
			this.state = 906;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				this.state = 901;
				this.noRest();
				}
				break;

			case 2:
				{
				this.state = 902;
				this.classCreatorRest();
				}
				break;

			case 3:
				{
				this.state = 903;
				this.arrayCreatorRest();
				}
				break;

			case 4:
				{
				this.state = 904;
				this.mapCreatorRest();
				}
				break;

			case 5:
				{
				this.state = 905;
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
			this.state = 908;
			this.idCreatedNamePair();
			this.state = 913;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.DOT) {
				{
				{
				this.state = 909;
				this.match(ApexParser.DOT);
				this.state = 910;
				this.idCreatedNamePair();
				}
				}
				this.state = 915;
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
			this.state = 916;
			this.anyId();
			this.state = 921;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ApexParser.LT) {
				{
				this.state = 917;
				this.match(ApexParser.LT);
				this.state = 918;
				this.typeList();
				this.state = 919;
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
			this.state = 923;
			this.match(ApexParser.LBRACE);
			this.state = 924;
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
			this.state = 926;
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
			this.state = 937;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 928;
				this.match(ApexParser.LBRACK);
				this.state = 929;
				this.expression(0);
				this.state = 930;
				this.match(ApexParser.RBRACK);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 932;
				this.match(ApexParser.LBRACK);
				this.state = 933;
				this.match(ApexParser.RBRACK);
				this.state = 935;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
				case 1:
					{
					this.state = 934;
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
			this.state = 939;
			this.match(ApexParser.LBRACE);
			this.state = 940;
			this.mapCreatorRestPair();
			this.state = 945;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.COMMA) {
				{
				{
				this.state = 941;
				this.match(ApexParser.COMMA);
				this.state = 942;
				this.mapCreatorRestPair();
				}
				}
				this.state = 947;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 948;
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
			this.state = 950;
			this.expression(0);
			this.state = 951;
			this.match(ApexParser.MAPTO);
			this.state = 952;
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
			this.state = 954;
			this.match(ApexParser.LBRACE);
			this.state = 955;
			this.expression(0);
			this.state = 960;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ApexParser.COMMA) {
				{
				{
				this.state = 956;
				this.match(ApexParser.COMMA);
				{
				this.state = 957;
				this.expression(0);
				}
				}
				}
				this.state = 962;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 963;
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
			this.state = 965;
			this.match(ApexParser.LPAREN);
			this.state = 967;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SUPER - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.THIS - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)) | (1 << (ApexParser.LIST - 34)) | (1 << (ApexParser.MAP - 34)) | (1 << (ApexParser.IntegerLiteral - 34)) | (1 << (ApexParser.NumberLiteral - 34)) | (1 << (ApexParser.BooleanLiteral - 34)) | (1 << (ApexParser.StringLiteral - 34)) | (1 << (ApexParser.LPAREN - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ApexParser.LBRACK - 66)) | (1 << (ApexParser.BANG - 66)) | (1 << (ApexParser.TILDE - 66)) | (1 << (ApexParser.INC - 66)) | (1 << (ApexParser.DEC - 66)) | (1 << (ApexParser.ADD - 66)) | (1 << (ApexParser.SUB - 66)))) !== 0) || _la === ApexParser.Identifier) {
				{
				this.state = 966;
				this.expressionList();
				}
			}

			this.state = 969;
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
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 971;
			this.match(ApexParser.LBRACK);
			this.state = 976;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					this.state = 974;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
					case 1:
						{
						this.state = 972;
						this.soqlLiteral();
						}
						break;

					case 2:
						{
						this.state = 973;
						_la = this._input.LA(1);
						if (_la <= 0 || (_la === ApexParser.RBRACK)) {
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
					}
					}
				}
				this.state = 978;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
			}
			this.state = 979;
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
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, ApexParser.RULE_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 981;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.GET) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSTANCEOF))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (ApexParser.SET - 34)) | (1 << (ApexParser.SHARING - 34)) | (1 << (ApexParser.SWITCH - 34)) | (1 << (ApexParser.TRANSIENT - 34)) | (1 << (ApexParser.TRIGGER - 34)) | (1 << (ApexParser.WHEN - 34)) | (1 << (ApexParser.WITH - 34)) | (1 << (ApexParser.WITHOUT - 34)))) !== 0) || _la === ApexParser.Identifier)) {
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
		this.enterRule(_localctx, 176, ApexParser.RULE_anyId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 983;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ApexParser.ABSTRACT) | (1 << ApexParser.AFTER) | (1 << ApexParser.BEFORE) | (1 << ApexParser.BREAK) | (1 << ApexParser.CATCH) | (1 << ApexParser.CLASS) | (1 << ApexParser.CONTINUE) | (1 << ApexParser.DELETE) | (1 << ApexParser.DO) | (1 << ApexParser.ELSE) | (1 << ApexParser.ENUM) | (1 << ApexParser.EXTENDS) | (1 << ApexParser.FINAL) | (1 << ApexParser.FINALLY) | (1 << ApexParser.FOR) | (1 << ApexParser.GET) | (1 << ApexParser.GLOBAL) | (1 << ApexParser.IF) | (1 << ApexParser.IMPLEMENTS) | (1 << ApexParser.INHERITED) | (1 << ApexParser.INSERT) | (1 << ApexParser.INSTANCEOF) | (1 << ApexParser.INTERFACE) | (1 << ApexParser.MERGE) | (1 << ApexParser.NEW) | (1 << ApexParser.NULL) | (1 << ApexParser.ON) | (1 << ApexParser.OVERRIDE) | (1 << ApexParser.PRIVATE) | (1 << ApexParser.PROTECTED) | (1 << ApexParser.PUBLIC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ApexParser.RETURN - 32)) | (1 << (ApexParser.SET - 32)) | (1 << (ApexParser.SHARING - 32)) | (1 << (ApexParser.STATIC - 32)) | (1 << (ApexParser.SUPER - 32)) | (1 << (ApexParser.SWITCH - 32)) | (1 << (ApexParser.TESTMETHOD - 32)) | (1 << (ApexParser.THIS - 32)) | (1 << (ApexParser.THROW - 32)) | (1 << (ApexParser.TRANSIENT - 32)) | (1 << (ApexParser.TRIGGER - 32)) | (1 << (ApexParser.TRY - 32)) | (1 << (ApexParser.UNDELETE - 32)) | (1 << (ApexParser.UPDATE - 32)) | (1 << (ApexParser.UPSERT - 32)) | (1 << (ApexParser.VIRTUAL - 32)) | (1 << (ApexParser.WEBSERVICE - 32)) | (1 << (ApexParser.WHEN - 32)) | (1 << (ApexParser.WHILE - 32)) | (1 << (ApexParser.WITH - 32)) | (1 << (ApexParser.WITHOUT - 32)) | (1 << (ApexParser.LIST - 32)) | (1 << (ApexParser.MAP - 32)))) !== 0) || _la === ApexParser.Identifier)) {
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
			return this.precpred(this._ctx, 21);

		case 13:
			return this.precpred(this._ctx, 20);

		case 14:
			return this.precpred(this._ctx, 16);

		case 15:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03r\u03DC\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x07\x02\xBD\n\x02\f\x02\x0E\x02\xC0\v\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x05" +
		"\x07\x05\xCD\n\x05\f\x05\x0E\x05\xD0\v\x05\x03\x05\x03\x05\x07\x05\xD4" +
		"\n\x05\f\x05\x0E\x05\xD7\v\x05\x03\x05\x03\x05\x07\x05\xDB\n\x05\f\x05" +
		"\x0E\x05\xDE\v\x05\x03\x05\x05\x05\xE1\n\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x05\x06\xE7\n\x06\x03\x06\x03\x06\x05\x06\xEB\n\x06\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xF3\n\x07\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\b\x07\b\xFA\n\b\f\b\x0E\b\xFD\v\b\x03\t\x03\t\x03\t\x03\t" +
		"\x05\t\u0103\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x07\n\u010A\n\n\f\n\x0E" +
		"\n\u010D\v\n\x03\v\x03\v\x07\v\u0111\n\v\f\v\x0E\v\u0114\v\v\x03\v\x03" +
		"\v\x03\f\x03\f\x07\f\u011A\n\f\f\f\x0E\f\u011D\v\f\x03\f\x03\f\x03\r\x03" +
		"\r\x05\r\u0123\n\r\x03\r\x03\r\x07\r\u0127\n\r\f\r\x0E\r\u012A\v\r\x03" +
		"\r\x05\r\u012D\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0142\n\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u014B\n\x0F\x03\x10\x03\x10\x05" +
		"\x10\u014F\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0155\n\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x07\x13\u0163\n\x13\f\x13\x0E\x13\u0166\v\x13\x03" +
		"\x13\x03\x13\x03\x14\x07\x14\u016B\n\x14\f\x14\x0E\x14\u016E\v\x14\x03" +
		"\x14\x03\x14\x05\x14\u0172\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15" +
		"\x03\x15\x03\x15\x07\x15\u017B\n\x15\f\x15\x0E\x15\u017E\v\x15\x03\x16" +
		"\x03\x16\x03\x16\x05\x16\u0183\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x07" +
		"\x17\u0189\n\x17\f\x17\x0E\x17\u018C\v\x17\x03\x17\x05\x17\u018F\n\x17" +
		"\x05\x17\u0191\n\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x07\x18\u0198" +
		"\n\x18\f\x18\x0E\x18\u019B\v\x18\x03\x18\x03\x18\x03\x19\x03\x19\x07\x19" +
		"\u01A1\n\x19\f\x19\x0E\x19\u01A4\v\x19\x03\x1A\x03\x1A\x05\x1A\u01A8\n" +
		"\x1A\x03\x1A\x03\x1A\x05\x1A\u01AC\n\x1A\x03\x1A\x03\x1A\x05\x1A\u01B0" +
		"\n\x1A\x03\x1A\x03\x1A\x05\x1A\u01B4\n\x1A\x05\x1A\u01B6\n\x1A\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x05\x1C\u01BE\n\x1C\x03\x1C\x03" +
		"\x1C\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u01C5\n\x1D\f\x1D\x0E\x1D\u01C8\v" +
		"\x1D\x03\x1E\x07\x1E\u01CB\n\x1E\f\x1E\x0E\x1E\u01CE\v\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u01D6\n\x1F\f\x1F\x0E\x1F" +
		"\u01D9\v\x1F\x03 \x03 \x03!\x03!\x03!\x03!\x03!\x05!\u01E2\n!\x03!\x05" +
		"!\u01E5\n!\x03\"\x03\"\x05\"\u01E9\n\"\x03\"\x07\"\u01EC\n\"\f\"\x0E\"" +
		"\u01EF\v\"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x05$\u01F8\n$\x03%\x03%" +
		"\x03%\x03%\x07%\u01FE\n%\f%\x0E%\u0201\v%\x05%\u0203\n%\x03%\x05%\u0206" +
		"\n%\x03%\x03%\x03&\x03&\x07&\u020C\n&\f&\x0E&\u020F\v&\x03&\x03&\x03\'" +
		"\x03\'\x03\'\x03(\x07(\u0217\n(\f(\x0E(\u021A\v(\x03(\x03(\x03(\x03)\x03" +
		")\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03" +
		")\x03)\x03)\x03)\x03)\x05)\u0233\n)\x03*\x03*\x03*\x03*\x03*\x05*\u023A" +
		"\n*\x03+\x03+\x03+\x03+\x03+\x06+\u0241\n+\r+\x0E+\u0242\x03+\x03+\x03" +
		",\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x07-\u024F\n-\f-\x0E-\u0252\v-\x03" +
		"-\x03-\x03-\x05-\u0257\n-\x03.\x05.\u025A\n.\x03.\x03.\x03.\x03.\x05." +
		"\u0260\n.\x03/\x03/\x03/\x03/\x03/\x03/\x030\x030\x030\x030\x031\x031" +
		"\x031\x031\x031\x031\x032\x032\x032\x062\u0275\n2\r2\x0E2\u0276\x032\x05" +
		"2\u027A\n2\x032\x052\u027D\n2\x033\x033\x053\u0281\n3\x033\x033\x034\x03" +
		"4\x034\x034\x035\x035\x035\x036\x036\x036\x037\x037\x037\x037\x038\x03" +
		"8\x038\x038\x039\x039\x039\x039\x03:\x03:\x03:\x03:\x03;\x03;\x03;\x05" +
		";\u02A2\n;\x03;\x03;\x03<\x03<\x03<\x03<\x03<\x03=\x03=\x03=\x05=\u02AE" +
		"\n=\x03=\x03=\x03=\x03>\x03>\x03>\x03?\x07?\u02B7\n?\f?\x0E?\u02BA\v?" +
		"\x03?\x03?\x05?\u02BE\n?\x03@\x03@\x03@\x05@\u02C3\n@\x03A\x03A\x03A\x05" +
		"A\u02C8\nA\x03B\x03B\x03B\x07B\u02CD\nB\fB\x0EB\u02D0\vB\x03B\x03B\x03" +
		"B\x03B\x03B\x03C\x03C\x03C\x03D\x03D\x05D\u02DC\nD\x03D\x03D\x05D\u02E0" +
		"\nD\x03D\x03D\x05D\u02E4\nD\x05D\u02E6\nD\x03E\x03E\x05E\u02EA\nE\x03" +
		"F\x07F\u02ED\nF\fF\x0EF\u02F0\vF\x03F\x03F\x03F\x03F\x03F\x03G\x03G\x03" +
		"H\x03H\x03H\x03H\x03I\x03I\x03I\x07I\u0300\nI\fI\x0EI\u0303\vI\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u0313" +
		"\nJ\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x05J\u0323\nJ\x03J\x03J\x03J\x03J\x05J\u0329\nJ\x03J\x03J\x03J\x03J" +
		"\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03" +
		"J\x05J\u034B\nJ\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x07" +
		"J\u0357\nJ\fJ\x0EJ\u035A\vJ\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03K\x03" +
		"K\x03K\x03K\x03K\x03K\x05K\u0369\nK\x03L\x03L\x03L\x05L\u036E\nL\x03L" +
		"\x03L\x03L\x03L\x03L\x05L\u0375\nL\x03L\x03L\x03L\x03L\x05L\u037B\nL\x03" +
		"L\x05L\u037E\nL\x03M\x03M\x03M\x05M\u0383\nM\x03M\x03M\x03N\x03N\x03N" +
		"\x03N\x03N\x03N\x05N\u038D\nN\x03O\x03O\x03O\x07O\u0392\nO\fO\x0EO\u0395" +
		"\vO\x03P\x03P\x03P\x03P\x03P\x05P\u039C\nP\x03Q\x03Q\x03Q\x03R\x03R\x03" +
		"S\x03S\x03S\x03S\x03S\x03S\x03S\x05S\u03AA\nS\x05S\u03AC\nS\x03T\x03T" +
		"\x03T\x03T\x07T\u03B2\nT\fT\x0ET\u03B5\vT\x03T\x03T\x03U\x03U\x03U\x03" +
		"U\x03V\x03V\x03V\x03V\x07V\u03C1\nV\fV\x0EV\u03C4\vV\x03V\x03V\x03W\x03" +
		"W\x05W\u03CA\nW\x03W\x03W\x03X\x03X\x03X\x07X\u03D1\nX\fX\x0EX\u03D4\v" +
		"X\x03X\x03X\x03Y\x03Y\x03Z\x03Z\x03Z\x03\u03D2\x02\x03\x92[\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
		"\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02" +
		"f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80" +
		"\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92" +
		"\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4" +
		"\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\x02\x10\x03" +
		"\x02\x04\x05\x05\x02\n\n\x17\x17/0\x04\x02\x1C\x1C;>\x03\x02WZ\x03\x02" +
		"LM\x04\x02[\\``\x03\x02YZ\x03\x02JK\x03\x02PT\x04\x02IIbl\x03\x02WX\x03" +
		"\x02EE\f\x02\x04\x05\x12\x12\x16\x16\x18\x18$%((,-5578nn\x06\x02\x03\"" +
		"$24:nn\x02\u042C\x02\xB4\x03\x02\x02\x02\x04\xC5\x03\x02\x02\x02\x06\xC8" +
		"\x03\x02\x02\x02\b\xE0\x03\x02\x02\x02\n\xE2\x03\x02\x02\x02\f\xEE\x03" +
		"\x02\x02\x02\x0E\xF6\x03\x02\x02\x02\x10\xFE\x03\x02\x02\x02\x12\u0106" +
		"\x03\x02\x02\x02\x14\u010E\x03\x02\x02\x02\x16\u0117\x03\x02\x02\x02\x18" +
		"\u012C\x03\x02\x02\x02\x1A\u0141\x03\x02\x02\x02\x1C\u014A\x03\x02\x02" +
		"\x02\x1E\u014E\x03\x02\x02\x02 \u0156\x03\x02\x02\x02\"\u015A\x03\x02" +
		"\x02\x02$\u015E\x03\x02\x02\x02&\u016C\x03\x02\x02\x02(\u0177\x03\x02" +
		"\x02\x02*\u017F\x03\x02\x02\x02,\u0184\x03\x02\x02\x02.\u0194\x03\x02" +
		"\x02\x020\u01A2\x03\x02\x02\x022\u01B5\x03\x02\x02\x024\u01B7\x03\x02" +
		"\x02\x026\u01BB\x03\x02\x02\x028\u01C1\x03\x02\x02\x02:\u01CC\x03\x02" +
		"\x02\x02<\u01D2\x03\x02\x02\x02>\u01DA\x03\x02\x02\x02@\u01DC\x03\x02" +
		"\x02\x02B\u01E6\x03\x02\x02\x02D\u01F0\x03\x02\x02\x02F\u01F7\x03\x02" +
		"\x02\x02H\u01F9\x03\x02\x02\x02J\u0209\x03\x02\x02\x02L\u0212\x03\x02" +
		"\x02\x02N\u0218\x03\x02\x02\x02P\u0232\x03\x02\x02\x02R\u0234\x03\x02" +
		"\x02\x02T\u023B\x03\x02\x02\x02V\u0246\x03\x02\x02\x02X\u0256\x03\x02" +
		"\x02\x02Z\u025F\x03\x02\x02\x02\\\u0261\x03\x02\x02\x02^\u0267\x03\x02" +
		"\x02\x02`\u026B\x03\x02\x02\x02b\u0271\x03\x02\x02\x02d\u027E\x03\x02" +
		"\x02\x02f\u0284\x03\x02\x02\x02h\u0288\x03\x02\x02\x02j\u028B\x03\x02" +
		"\x02\x02l\u028E\x03\x02\x02\x02n\u0292\x03\x02\x02\x02p\u0296\x03\x02" +
		"\x02\x02r\u029A\x03\x02\x02\x02t\u029E\x03\x02\x02\x02v\u02A5\x03\x02" +
		"\x02\x02x\u02AA\x03\x02\x02\x02z\u02B2\x03\x02\x02\x02|\u02B8\x03\x02" +
		"\x02\x02~\u02BF\x03\x02\x02\x02\x80\u02C4\x03\x02\x02\x02\x82\u02C9\x03" +
		"\x02\x02\x02\x84\u02D6\x03\x02\x02\x02\x86\u02E5\x03\x02\x02\x02\x88\u02E9" +
		"\x03\x02\x02\x02\x8A\u02EE\x03\x02\x02\x02\x8C\u02F6\x03\x02\x02\x02\x8E" +
		"\u02F8\x03\x02\x02\x02\x90\u02FC\x03\x02\x02\x02\x92\u0312\x03\x02\x02" +
		"\x02\x94\u0368\x03\x02\x02\x02\x96\u037D\x03\x02\x02\x02\x98\u037F\x03" +
		"\x02\x02\x02\x9A\u0386\x03\x02\x02\x02\x9C\u038E\x03\x02\x02\x02\x9E\u0396" +
		"\x03\x02\x02\x02\xA0\u039D\x03\x02\x02\x02\xA2\u03A0\x03\x02\x02\x02\xA4" +
		"\u03AB\x03\x02\x02\x02\xA6\u03AD\x03\x02\x02\x02\xA8\u03B8\x03\x02\x02" +
		"\x02\xAA\u03BC\x03\x02\x02\x02\xAC\u03C7\x03\x02\x02\x02\xAE\u03CD\x03" +
		"\x02\x02\x02\xB0\u03D7\x03\x02\x02\x02\xB2\u03D9\x03\x02\x02\x02\xB4\xB5" +
		"\x07-\x02\x02\xB5\xB6\x05\xB0Y\x02\xB6\xB7\x07\x1D\x02\x02\xB7\xB8\x05" +
		"\xB0Y\x02\xB8\xB9\x07@\x02\x02\xB9\xBE\x05\x04\x03\x02\xBA\xBB\x07G\x02" +
		"\x02\xBB\xBD\x05\x04\x03\x02\xBC\xBA\x03\x02\x02\x02\xBD\xC0\x03\x02\x02" +
		"\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC1\x03\x02\x02" +
		"\x02\xC0\xBE\x03\x02\x02\x02\xC1\xC2\x07A\x02\x02\xC2\xC3\x05J&\x02\xC3" +
		"\xC4\x07\x02\x02\x03\xC4\x03\x03\x02\x02\x02\xC5\xC6\t\x02\x02\x02\xC6" +
		"\xC7\t\x03\x02\x02\xC7\x05\x03\x02\x02\x02\xC8\xC9\x05\b\x05\x02\xC9\xCA" +
		"\x07\x02\x02\x03\xCA\x07\x03\x02\x02\x02\xCB\xCD\x05\x1A\x0E\x02\xCC\xCB" +
		"\x03\x02\x02\x02\xCD\xD0\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCF" +
		"\x03\x02\x02\x02\xCF\xD1\x03\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD1\xE1" +
		"\x05\n\x06\x02\xD2\xD4\x05\x1A\x0E\x02\xD3\xD2\x03\x02\x02\x02\xD4\xD7" +
		"\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD8" +
		"\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD8\xE1\x05\f\x07\x02\xD9\xDB" +
		"\x05\x1A\x0E\x02\xDA\xD9\x03\x02\x02\x02\xDB\xDE\x03\x02\x02\x02\xDC\xDA" +
		"\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDF\x03\x02\x02\x02\xDE\xDC" +
		"\x03\x02\x02\x02\xDF\xE1\x05\x10\t\x02\xE0\xCE\x03\x02\x02\x02\xE0\xD5" +
		"\x03\x02\x02\x02\xE0\xDC\x03\x02\x02\x02\xE1\t\x03\x02\x02\x02\xE2\xE3" +
		"\x07\b\x02\x02\xE3\xE6\x05\xB0Y\x02\xE4\xE5\x07\x0E\x02\x02\xE5\xE7\x05" +
		".\x18\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xEA\x03" +
		"\x02\x02\x02\xE8\xE9\x07\x15\x02\x02\xE9\xEB\x05\x12\n\x02\xEA\xE8\x03" +
		"\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xED\x05" +
		"\x14\v\x02\xED\v\x03\x02\x02\x02\xEE\xEF\x07\r\x02\x02\xEF\xF0\x05\xB0" +
		"Y\x02\xF0\xF2\x07B\x02\x02\xF1\xF3\x05\x0E\b\x02\xF2\xF1\x03\x02\x02\x02" +
		"\xF2\xF3\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF5\x07C\x02\x02" +
		"\xF5\r\x03\x02\x02\x02\xF6\xFB\x05\xB0Y\x02\xF7\xF8\x07G\x02\x02\xF8\xFA" +
		"\x05\xB0Y\x02\xF9\xF7\x03\x02\x02\x02\xFA\xFD\x03\x02\x02\x02\xFB\xF9" +
		"\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\x0F\x03\x02\x02\x02\xFD\xFB" +
		"\x03\x02\x02\x02\xFE\xFF\x07\x19\x02\x02\xFF\u0102\x05\xB0Y\x02\u0100" +
		"\u0101\x07\x0E\x02\x02\u0101\u0103\x05\x12\n\x02\u0102\u0100\x03\x02\x02" +
		"\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\u0105" +
		"\x05\x16\f\x02\u0105\x11\x03\x02\x02\x02\u0106\u010B\x05.\x18\x02\u0107" +
		"\u0108\x07G\x02\x02\u0108\u010A\x05.\x18\x02\u0109\u0107\x03\x02\x02\x02" +
		"\u010A\u010D\x03\x02\x02\x02\u010B\u0109\x03\x02\x02\x02\u010B\u010C\x03" +
		"\x02\x02\x02\u010C\x13\x03\x02\x02\x02\u010D\u010B\x03\x02\x02\x02\u010E" +
		"\u0112\x07B\x02\x02\u010F\u0111\x05\x18\r\x02\u0110\u010F\x03\x02\x02" +
		"\x02\u0111\u0114\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02\u0112\u0113" +
		"\x03\x02\x02\x02\u0113\u0115\x03\x02\x02\x02\u0114\u0112\x03\x02\x02\x02" +
		"\u0115\u0116\x07C\x02\x02\u0116\x15\x03\x02\x02\x02\u0117\u011B\x07B\x02" +
		"\x02\u0118\u011A\x05&\x14\x02\u0119\u0118\x03\x02\x02\x02\u011A\u011D" +
		"\x03\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02" +
		"\u011C\u011E\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011E\u011F\x07" +
		"C\x02\x02\u011F\x17\x03\x02\x02\x02\u0120\u012D\x07F\x02\x02\u0121\u0123" +
		"\x07&\x02\x02\u0122\u0121\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02" +
		"\u0123\u0124\x03\x02\x02\x02\u0124\u012D\x05J&\x02\u0125\u0127\x05\x1A" +
		"\x0E\x02\u0126\u0125\x03\x02\x02\x02\u0127\u012A\x03\x02\x02\x02\u0128" +
		"\u0126\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\u012B\x03\x02" +
		"\x02\x02\u012A\u0128\x03\x02\x02\x02\u012B\u012D\x05\x1C\x0F\x02\u012C" +
		"\u0120\x03\x02\x02\x02\u012C\u0122\x03\x02\x02\x02\u012C\u0128\x03\x02" +
		"\x02\x02\u012D\x19\x03\x02\x02\x02\u012E\u0142\x05@!\x02\u012F\u0142\x07" +
		"\x13\x02\x02\u0130\u0142\x07!\x02\x02\u0131\u0142\x07 \x02\x02\u0132\u0142" +
		"\x07\x1F\x02\x02\u0133\u0142\x07,\x02\x02\u0134\u0142\x07&\x02\x02\u0135" +
		"\u0142\x07\x03\x02\x02\u0136\u0142\x07\x0F\x02\x02\u0137\u0142\x074\x02" +
		"\x02\u0138\u0142\x07\x1E\x02\x02\u0139\u0142\x072\x02\x02\u013A\u0142" +
		"\x07)\x02\x02\u013B\u013C\x077\x02\x02\u013C\u0142\x07%\x02\x02\u013D" +
		"\u013E\x078\x02\x02\u013E\u0142\x07%\x02\x02\u013F\u0140\x07\x16\x02\x02" +
		"\u0140\u0142\x07%\x02\x02\u0141\u012E\x03\x02\x02\x02\u0141\u012F\x03" +
		"\x02\x02\x02\u0141\u0130\x03\x02\x02\x02\u0141\u0131\x03\x02\x02\x02\u0141" +
		"\u0132\x03\x02\x02\x02\u0141\u0133\x03\x02\x02\x02\u0141\u0134\x03\x02" +
		"\x02\x02\u0141\u0135\x03\x02\x02\x02\u0141\u0136\x03\x02\x02\x02\u0141" +
		"\u0137\x03\x02\x02\x02\u0141\u0138\x03\x02\x02\x02\u0141\u0139\x03\x02" +
		"\x02\x02\u0141\u013A\x03\x02\x02\x02\u0141\u013B\x03\x02\x02\x02\u0141" +
		"\u013D\x03\x02\x02\x02\u0141\u013F\x03\x02\x02\x02\u0142\x1B\x03\x02\x02" +
		"\x02\u0143\u014B\x05\x1E\x10\x02\u0144\u014B\x05\"\x12\x02\u0145\u014B" +
		"\x05 \x11\x02\u0146\u014B\x05\x10\t\x02\u0147\u014B\x05\n\x06\x02\u0148" +
		"\u014B\x05\f\x07\x02\u0149\u014B\x05$\x13\x02\u014A\u0143\x03\x02\x02" +
		"\x02\u014A\u0144\x03\x02\x02\x02\u014A\u0145\x03\x02\x02\x02\u014A\u0146" +
		"\x03\x02\x02\x02\u014A\u0147\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02" +
		"\u014A\u0149\x03\x02\x02\x02\u014B\x1D\x03\x02\x02\x02\u014C\u014F\x05" +
		".\x18\x02\u014D\u014F\x073\x02\x02\u014E\u014C\x03\x02\x02\x02\u014E\u014D" +
		"\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0151\x05\xB0Y\x02" +
		"\u0151\u0154\x056\x1C\x02\u0152\u0155\x05J&\x02\u0153\u0155\x07F\x02\x02" +
		"\u0154\u0152\x03\x02\x02\x02\u0154\u0153\x03\x02\x02\x02\u0155\x1F\x03" +
		"\x02\x02\x02\u0156\u0157\x05<\x1F\x02\u0157\u0158\x056\x1C\x02\u0158\u0159" +
		"\x05J&\x02\u0159!\x03\x02\x02\x02\u015A\u015B\x05.\x18\x02\u015B\u015C" +
		"\x05(\x15\x02\u015C\u015D\x07F\x02\x02\u015D#\x03\x02\x02\x02\u015E\u015F" +
		"\x05.\x18\x02\u015F\u0160\x05\xB0Y\x02\u0160\u0164\x07B\x02\x02\u0161" +
		"\u0163\x05|?\x02\u0162\u0161\x03\x02\x02\x02\u0163\u0166\x03\x02\x02\x02" +
		"\u0164\u0162\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0167\x03" +
		"\x02\x02\x02\u0166\u0164\x03\x02\x02\x02\u0167\u0168\x07C\x02\x02\u0168" +
		"%\x03\x02\x02\x02\u0169\u016B\x05\x1A\x0E\x02\u016A\u0169\x03\x02\x02" +
		"\x02\u016B\u016E\x03\x02\x02\x02\u016C\u016A\x03\x02\x02\x02\u016C\u016D" +
		"\x03\x02\x02\x02\u016D\u0171\x03\x02\x02\x02\u016E\u016C\x03\x02\x02\x02" +
		"\u016F\u0172\x05.\x18\x02\u0170\u0172\x073\x02\x02\u0171\u016F\x03\x02" +
		"\x02\x02\u0171\u0170\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173" +
		"\u0174\x05\xB0Y\x02\u0174\u0175\x056\x1C\x02\u0175\u0176\x07F\x02\x02" +
		"\u0176\'\x03\x02\x02\x02\u0177\u017C\x05*\x16\x02\u0178\u0179\x07G\x02" +
		"\x02\u0179\u017B\x05*\x16\x02\u017A\u0178\x03\x02\x02\x02\u017B\u017E" +
		"\x03\x02\x02\x02\u017C\u017A\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02" +
		"\u017D)\x03\x02\x02\x02\u017E\u017C\x03\x02\x02\x02\u017F\u0182\x05\xB0" +
		"Y\x02\u0180\u0181\x07I\x02\x02\u0181\u0183\x05\x92J\x02\u0182\u0180\x03" +
		"\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183+\x03\x02\x02\x02\u0184" +
		"\u0190\x07B\x02\x02\u0185\u018A\x05\x92J\x02\u0186\u0187\x07G\x02\x02" +
		"\u0187\u0189\x05\x92J\x02\u0188\u0186\x03\x02\x02\x02\u0189\u018C\x03" +
		"\x02\x02\x02\u018A\u0188\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B" +
		"\u018E\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018D\u018F\x07G\x02" +
		"\x02\u018E\u018D\x03\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F\u0191" +
		"\x03\x02\x02\x02\u0190\u0185\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02" +
		"\u0191\u0192\x03\x02\x02\x02\u0192\u0193\x07C\x02\x02\u0193-\x03\x02\x02" +
		"\x02\u0194\u0199\x052\x1A\x02\u0195\u0196\x07H\x02\x02\u0196\u0198\x05" +
		"2\x1A\x02\u0197\u0195\x03\x02\x02\x02\u0198\u019B\x03\x02\x02\x02\u0199" +
		"\u0197\x03\x02\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A\u019C\x03\x02" +
		"\x02\x02\u019B\u0199\x03\x02\x02\x02\u019C\u019D\x050\x19\x02\u019D/\x03" +
		"\x02\x02\x02\u019E\u019F\x07D\x02\x02\u019F\u01A1\x07E\x02\x02\u01A0\u019E" +
		"\x03\x02\x02\x02\u01A1\u01A4\x03\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02" +
		"\u01A2\u01A3\x03\x02\x02\x02\u01A31\x03\x02\x02\x02\u01A4\u01A2\x03\x02" +
		"\x02\x02\u01A5\u01A7\x079\x02\x02\u01A6\u01A8\x054\x1B\x02\u01A7\u01A6" +
		"\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01B6\x03\x02\x02\x02" +
		"\u01A9\u01AB\x07$\x02\x02\u01AA\u01AC\x054\x1B\x02\u01AB\u01AA\x03\x02" +
		"\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC\u01B6\x03\x02\x02\x02\u01AD" +
		"\u01AF\x07:\x02\x02\u01AE\u01B0\x054\x1B\x02\u01AF\u01AE\x03\x02\x02\x02" +
		"\u01AF\u01B0\x03\x02\x02\x02\u01B0\u01B6\x03\x02\x02\x02\u01B1\u01B3\x05" +
		"\xB0Y\x02\u01B2\u01B4\x054\x1B\x02\u01B3\u01B2\x03\x02\x02\x02\u01B3\u01B4" +
		"\x03\x02\x02\x02\u01B4\u01B6\x03\x02\x02\x02\u01B5\u01A5\x03\x02\x02\x02" +
		"\u01B5\u01A9\x03\x02\x02\x02\u01B5\u01AD\x03\x02\x02\x02\u01B5\u01B1\x03" +
		"\x02\x02\x02\u01B63\x03\x02\x02\x02\u01B7\u01B8\x07K\x02\x02\u01B8\u01B9" +
		"\x05\x12\n\x02\u01B9\u01BA\x07J\x02\x02\u01BA5\x03\x02\x02\x02\u01BB\u01BD" +
		"\x07@\x02\x02\u01BC\u01BE\x058\x1D\x02\u01BD\u01BC\x03\x02\x02\x02\u01BD" +
		"\u01BE\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02\u01BF\u01C0\x07A\x02" +
		"\x02\u01C07\x03\x02\x02\x02\u01C1\u01C6\x05:\x1E\x02\u01C2\u01C3\x07G" +
		"\x02\x02\u01C3\u01C5\x05:\x1E\x02\u01C4\u01C2\x03\x02\x02\x02\u01C5\u01C8" +
		"\x03\x02\x02\x02\u01C6\u01C4\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02" +
		"\u01C79\x03\x02\x02\x02\u01C8\u01C6\x03\x02\x02\x02\u01C9\u01CB\x05\x1A" +
		"\x0E\x02\u01CA\u01C9\x03\x02\x02\x02\u01CB\u01CE\x03\x02\x02\x02\u01CC" +
		"\u01CA\x03\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CF\x03\x02" +
		"\x02\x02\u01CE\u01CC\x03\x02\x02\x02\u01CF\u01D0\x05.\x18\x02\u01D0\u01D1" +
		"\x05\xB0Y\x02";
	private static readonly _serializedATNSegment1: string =
		"\u01D1;\x03\x02\x02\x02\u01D2\u01D7\x05\xB0Y\x02\u01D3\u01D4\x07H\x02" +
		"\x02\u01D4\u01D6\x05\xB0Y\x02\u01D5\u01D3\x03\x02\x02\x02\u01D6\u01D9" +
		"\x03\x02\x02\x02\u01D7\u01D5\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02" +
		"\u01D8=\x03\x02\x02\x02\u01D9\u01D7\x03\x02\x02\x02\u01DA\u01DB\t\x04" +
		"\x02\x02\u01DB?\x03\x02\x02\x02\u01DC\u01DD\x07m\x02\x02\u01DD\u01E4\x05" +
		"<\x1F\x02\u01DE\u01E1\x07@\x02\x02\u01DF\u01E2\x05B\"\x02\u01E0\u01E2" +
		"\x05F$\x02\u01E1\u01DF\x03\x02\x02\x02\u01E1\u01E0\x03\x02\x02\x02\u01E1" +
		"\u01E2\x03\x02\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E5\x07A\x02" +
		"\x02\u01E4\u01DE\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5A\x03" +
		"\x02\x02\x02\u01E6\u01ED\x05D#\x02\u01E7\u01E9\x07G\x02\x02\u01E8\u01E7" +
		"\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02" +
		"\u01EA\u01EC\x05D#\x02\u01EB\u01E8\x03\x02\x02\x02\u01EC\u01EF\x03\x02" +
		"\x02\x02\u01ED\u01EB\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02\u01EE" +
		"C\x03\x02\x02\x02\u01EF\u01ED\x03\x02\x02\x02\u01F0\u01F1\x05\xB0Y\x02" +
		"\u01F1\u01F2\x07I\x02\x02\u01F2\u01F3\x05F$\x02\u01F3E\x03\x02\x02\x02" +
		"\u01F4\u01F8\x05\x92J\x02\u01F5\u01F8\x05@!\x02\u01F6\u01F8\x05H%\x02" +
		"\u01F7\u01F4\x03\x02\x02\x02\u01F7\u01F5\x03\x02\x02\x02\u01F7\u01F6\x03" +
		"\x02\x02\x02\u01F8G\x03\x02\x02\x02\u01F9\u0202\x07B\x02\x02\u01FA\u01FF" +
		"\x05F$\x02\u01FB\u01FC\x07G\x02\x02\u01FC\u01FE\x05F$\x02\u01FD\u01FB" +
		"\x03\x02\x02\x02\u01FE\u0201\x03\x02\x02\x02\u01FF\u01FD\x03\x02\x02\x02" +
		"\u01FF\u0200\x03\x02\x02\x02\u0200\u0203\x03\x02\x02\x02\u0201\u01FF\x03" +
		"\x02\x02\x02\u0202\u01FA\x03\x02\x02\x02\u0202\u0203\x03\x02\x02\x02\u0203" +
		"\u0205\x03\x02\x02\x02\u0204\u0206\x07G\x02\x02\u0205\u0204\x03\x02\x02" +
		"\x02\u0205\u0206\x03\x02\x02\x02\u0206\u0207\x03\x02\x02\x02\u0207\u0208" +
		"\x07C\x02\x02\u0208I\x03\x02\x02\x02\u0209\u020D\x07B\x02\x02\u020A\u020C" +
		"\x05P)\x02\u020B\u020A\x03\x02\x02\x02\u020C\u020F\x03\x02\x02\x02\u020D" +
		"\u020B\x03\x02\x02\x02\u020D\u020E\x03\x02\x02\x02\u020E\u0210\x03\x02" +
		"\x02\x02\u020F\u020D\x03\x02\x02\x02\u0210\u0211\x07C\x02\x02\u0211K\x03" +
		"\x02\x02\x02\u0212\u0213\x05N(\x02\u0213\u0214\x07F\x02\x02\u0214M\x03" +
		"\x02\x02\x02\u0215\u0217\x05\x1A\x0E\x02\u0216\u0215\x03\x02\x02\x02\u0217" +
		"\u021A\x03\x02\x02\x02\u0218\u0216\x03\x02\x02\x02\u0218\u0219\x03\x02" +
		"\x02\x02\u0219\u021B\x03\x02\x02\x02\u021A\u0218\x03\x02\x02\x02\u021B" +
		"\u021C\x05.\x18\x02\u021C\u021D\x05(\x15\x02\u021DO\x03\x02\x02\x02\u021E" +
		"\u0233\x05J&\x02\u021F\u0233\x05R*\x02\u0220\u0233\x05T+\x02\u0221\u0233" +
		"\x05\\/\x02\u0222\u0233\x05^0\x02\u0223\u0233\x05`1\x02\u0224\u0233\x05" +
		"b2\x02\u0225\u0233\x05d3\x02\u0226\u0233\x05f4\x02\u0227\u0233\x05h5\x02" +
		"\u0228\u0233\x05j6\x02\u0229\u0233\x05l7\x02\u022A\u0233\x05n8\x02\u022B" +
		"\u0233\x05p9\x02\u022C\u0233\x05r:\x02\u022D\u0233\x05t;\x02\u022E\u0233" +
		"\x05v<\x02\u022F\u0233\x05x=\x02\u0230\u0233\x05L\'\x02\u0231\u0233\x05" +
		"z>\x02\u0232\u021E\x03\x02\x02\x02\u0232\u021F\x03\x02\x02\x02\u0232\u0220" +
		"\x03\x02\x02\x02\u0232\u0221\x03\x02\x02\x02\u0232\u0222\x03\x02\x02\x02" +
		"\u0232\u0223\x03\x02\x02\x02\u0232\u0224\x03\x02\x02\x02\u0232\u0225\x03" +
		"\x02\x02\x02\u0232\u0226\x03\x02\x02\x02\u0232\u0227\x03\x02\x02\x02\u0232" +
		"\u0228\x03\x02\x02\x02\u0232\u0229\x03\x02\x02\x02\u0232\u022A\x03\x02" +
		"\x02\x02\u0232\u022B\x03\x02\x02\x02\u0232\u022C\x03\x02\x02\x02\u0232" +
		"\u022D\x03\x02\x02\x02\u0232\u022E\x03\x02\x02\x02\u0232\u022F\x03\x02" +
		"\x02\x02\u0232\u0230\x03\x02\x02\x02\u0232\u0231\x03\x02\x02\x02\u0233" +
		"Q\x03\x02\x02\x02\u0234\u0235\x07\x14\x02\x02\u0235\u0236\x05\x8EH\x02" +
		"\u0236\u0239\x05P)\x02\u0237\u0238\x07\f\x02\x02\u0238\u023A\x05P)\x02" +
		"\u0239\u0237\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02\u023AS\x03\x02" +
		"\x02\x02\u023B\u023C\x07(\x02\x02\u023C\u023D\x07\x1D\x02\x02\u023D\u023E" +
		"\x05\x92J\x02\u023E\u0240\x07B\x02\x02\u023F\u0241\x05V,\x02\u0240\u023F" +
		"\x03\x02\x02\x02\u0241\u0242\x03\x02\x02\x02\u0242\u0240\x03\x02\x02\x02" +
		"\u0242\u0243\x03\x02\x02\x02\u0243\u0244\x03\x02\x02\x02\u0244\u0245\x07" +
		"C\x02\x02\u0245U\x03\x02\x02\x02\u0246\u0247\x075\x02\x02\u0247\u0248" +
		"\x05X-\x02\u0248\u0249\x05J&\x02\u0249W\x03\x02\x02\x02\u024A\u0257\x07" +
		"\f\x02\x02\u024B\u0250\x05Z.\x02\u024C\u024D\x07G\x02\x02\u024D\u024F" +
		"\x05Z.\x02\u024E\u024C\x03\x02\x02\x02\u024F\u0252\x03\x02\x02\x02\u0250" +
		"\u024E\x03\x02\x02\x02\u0250\u0251\x03\x02\x02\x02\u0251\u0257\x03\x02" +
		"\x02\x02\u0252\u0250\x03\x02\x02\x02\u0253\u0254\x05\xB0Y\x02\u0254\u0255" +
		"\x05\xB0Y\x02\u0255\u0257\x03\x02\x02\x02\u0256\u024A\x03\x02\x02\x02" +
		"\u0256\u024B\x03\x02\x02\x02\u0256\u0253\x03\x02\x02\x02\u0257Y\x03\x02" +
		"\x02\x02\u0258\u025A\x07Z\x02\x02\u0259\u0258\x03\x02\x02\x02\u0259\u025A" +
		"\x03\x02\x02\x02\u025A\u025B\x03\x02\x02\x02\u025B\u0260\x07;\x02\x02" +
		"\u025C\u0260\x07>\x02\x02\u025D\u0260\x07\x1C\x02\x02\u025E\u0260\x05" +
		"\xB0Y\x02\u025F\u0259\x03\x02\x02\x02\u025F\u025C\x03\x02\x02\x02\u025F" +
		"\u025D\x03\x02\x02\x02\u025F\u025E\x03\x02\x02\x02\u0260[\x03\x02\x02" +
		"\x02\u0261\u0262\x07\x11\x02\x02\u0262\u0263\x07@\x02\x02\u0263\u0264" +
		"\x05\x86D\x02\u0264\u0265\x07A\x02\x02\u0265\u0266\x05P)\x02\u0266]\x03" +
		"\x02\x02\x02\u0267\u0268\x076\x02\x02\u0268\u0269\x05\x8EH\x02\u0269\u026A" +
		"\x05P)\x02\u026A_\x03\x02\x02\x02\u026B\u026C\x07\v\x02\x02\u026C\u026D" +
		"\x05P)\x02\u026D\u026E\x076\x02\x02\u026E\u026F\x05\x8EH\x02\u026F\u0270" +
		"\x07F\x02\x02\u0270a\x03\x02\x02\x02\u0271\u0272\x07.\x02\x02\u0272\u027C" +
		"\x05J&\x02\u0273\u0275\x05\x82B\x02\u0274\u0273\x03\x02\x02\x02\u0275" +
		"\u0276\x03\x02\x02\x02\u0276\u0274\x03\x02\x02\x02\u0276\u0277\x03\x02" +
		"\x02\x02\u0277\u0279\x03\x02\x02\x02\u0278\u027A\x05\x84C\x02\u0279\u0278" +
		"\x03\x02\x02\x02\u0279\u027A\x03\x02\x02\x02\u027A\u027D\x03\x02\x02\x02" +
		"\u027B\u027D\x05\x84C\x02\u027C\u0274\x03\x02\x02\x02\u027C\u027B\x03" +
		"\x02\x02\x02\u027Dc\x03\x02\x02\x02\u027E\u0280\x07\"\x02\x02\u027F\u0281" +
		"\x05\x92J\x02\u0280\u027F\x03\x02\x02\x02\u0280\u0281\x03\x02\x02\x02" +
		"\u0281\u0282\x03\x02\x02\x02\u0282\u0283\x07F\x02\x02\u0283e\x03\x02\x02" +
		"\x02\u0284\u0285\x07+\x02\x02\u0285\u0286\x05\x92J\x02\u0286\u0287\x07" +
		"F\x02\x02\u0287g\x03\x02\x02\x02\u0288\u0289\x07\x06\x02\x02\u0289\u028A" +
		"\x07F\x02\x02\u028Ai\x03\x02\x02\x02\u028B\u028C\x07\t\x02\x02\u028C\u028D" +
		"\x07F\x02\x02\u028Dk\x03\x02\x02\x02\u028E\u028F\x07\x17\x02\x02\u028F" +
		"\u0290\x05\x92J\x02\u0290\u0291\x07F\x02\x02\u0291m\x03\x02\x02\x02\u0292" +
		"\u0293\x070\x02\x02\u0293\u0294\x05\x92J\x02\u0294\u0295\x07F\x02\x02" +
		"\u0295o\x03\x02\x02\x02\u0296\u0297\x07\n\x02\x02\u0297\u0298\x05\x92" +
		"J\x02\u0298\u0299\x07F\x02\x02\u0299q\x03\x02\x02\x02\u029A\u029B\x07" +
		"/\x02\x02\u029B\u029C\x05\x92J\x02\u029C\u029D\x07F\x02\x02\u029Ds\x03" +
		"\x02\x02\x02\u029E\u029F\x071\x02\x02\u029F\u02A1\x05\x92J\x02\u02A0\u02A2" +
		"\x05<\x1F\x02\u02A1\u02A0\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02\x02" +
		"\u02A2\u02A3\x03\x02\x02\x02\u02A3\u02A4\x07F\x02\x02\u02A4u\x03\x02\x02" +
		"\x02\u02A5\u02A6\x07\x1A\x02\x02\u02A6\u02A7\x05\x92J\x02\u02A7\u02A8" +
		"\x05\x92J\x02\u02A8\u02A9\x07F\x02\x02\u02A9w\x03\x02\x02\x02\u02AA\u02AB" +
		"\x07#\x02\x02\u02AB\u02AD\x07@\x02\x02\u02AC\u02AE\x05\x90I\x02\u02AD" +
		"\u02AC\x03\x02\x02\x02\u02AD\u02AE\x03\x02\x02\x02\u02AE\u02AF\x03\x02" +
		"\x02\x02\u02AF\u02B0\x07A\x02\x02\u02B0\u02B1\x05J&\x02\u02B1y\x03\x02" +
		"\x02\x02\u02B2\u02B3\x05\x92J\x02\u02B3\u02B4\x07F\x02\x02\u02B4{\x03" +
		"\x02\x02\x02\u02B5\u02B7\x05\x1A\x0E\x02\u02B6\u02B5\x03\x02\x02\x02\u02B7" +
		"\u02BA\x03\x02\x02\x02\u02B8\u02B6\x03\x02\x02\x02\u02B8\u02B9\x03\x02" +
		"\x02\x02\u02B9\u02BD\x03\x02\x02\x02\u02BA\u02B8\x03\x02\x02\x02\u02BB" +
		"\u02BE\x05~@\x02\u02BC\u02BE\x05\x80A\x02\u02BD\u02BB\x03\x02\x02\x02" +
		"\u02BD\u02BC\x03\x02\x02\x02\u02BE}\x03\x02\x02\x02\u02BF\u02C2\x07\x12" +
		"\x02\x02\u02C0\u02C3\x07F\x02\x02\u02C1\u02C3\x05J&\x02\u02C2\u02C0\x03" +
		"\x02\x02\x02\u02C2\u02C1\x03\x02\x02\x02\u02C3\x7F\x03\x02\x02\x02\u02C4" +
		"\u02C7\x07$\x02\x02\u02C5\u02C8\x07F\x02\x02\u02C6\u02C8\x05J&\x02\u02C7" +
		"\u02C5\x03\x02\x02\x02\u02C7\u02C6\x03\x02\x02\x02\u02C8\x81\x03\x02\x02" +
		"\x02\u02C9\u02CA\x07\x07\x02\x02\u02CA\u02CE\x07@\x02\x02\u02CB\u02CD" +
		"\x05\x1A\x0E\x02\u02CC\u02CB\x03\x02\x02\x02\u02CD\u02D0\x03\x02\x02\x02" +
		"\u02CE\u02CC\x03\x02\x02\x02\u02CE\u02CF\x03\x02\x02\x02\u02CF\u02D1\x03" +
		"\x02\x02\x02\u02D0\u02CE\x03\x02\x02\x02\u02D1\u02D2\x05<\x1F\x02\u02D2" +
		"\u02D3\x05\xB0Y\x02\u02D3\u02D4\x07A\x02\x02\u02D4\u02D5\x05J&\x02\u02D5" +
		"\x83\x03\x02\x02\x02\u02D6\u02D7\x07\x10\x02\x02\u02D7\u02D8\x05J&\x02" +
		"\u02D8\x85\x03\x02\x02\x02\u02D9\u02E6\x05\x8AF\x02\u02DA\u02DC\x05\x88" +
		"E\x02\u02DB\u02DA\x03\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02DD" +
		"\x03\x02\x02\x02\u02DD\u02DF\x07F\x02\x02\u02DE\u02E0\x05\x92J\x02\u02DF" +
		"\u02DE\x03\x02\x02\x02\u02DF\u02E0\x03\x02\x02\x02\u02E0\u02E1\x03\x02" +
		"\x02\x02\u02E1\u02E3\x07F\x02\x02\u02E2\u02E4\x05\x8CG\x02\u02E3\u02E2" +
		"\x03\x02\x02\x02\u02E3\u02E4\x03\x02\x02\x02\u02E4\u02E6\x03\x02\x02\x02" +
		"\u02E5\u02D9\x03\x02\x02\x02\u02E5\u02DB\x03\x02\x02\x02\u02E6\x87\x03" +
		"\x02\x02\x02\u02E7\u02EA\x05N(\x02\u02E8\u02EA\x05\x90I\x02\u02E9\u02E7" +
		"\x03\x02\x02\x02\u02E9\u02E8\x03\x02\x02\x02\u02EA\x89\x03\x02\x02\x02" +
		"\u02EB\u02ED\x05\x1A\x0E\x02\u02EC\u02EB\x03\x02\x02\x02\u02ED\u02F0\x03" +
		"\x02\x02\x02\u02EE\u02EC\x03\x02\x02\x02\u02EE\u02EF\x03\x02\x02\x02\u02EF" +
		"\u02F1\x03\x02\x02\x02\u02F0\u02EE\x03\x02\x02\x02\u02F1\u02F2\x05.\x18" +
		"\x02\u02F2\u02F3\x05\xB0Y\x02\u02F3\u02F4\x07O\x02\x02\u02F4\u02F5\x05" +
		"\x92J\x02\u02F5\x8B\x03\x02\x02\x02\u02F6\u02F7\x05\x90I\x02\u02F7\x8D" +
		"\x03\x02\x02\x02\u02F8\u02F9\x07@\x02\x02\u02F9\u02FA\x05\x92J\x02\u02FA" +
		"\u02FB\x07A\x02\x02\u02FB\x8F\x03\x02\x02\x02\u02FC\u0301\x05\x92J\x02" +
		"\u02FD\u02FE\x07G\x02\x02\u02FE\u0300\x05\x92J\x02\u02FF\u02FD\x03\x02" +
		"\x02\x02\u0300\u0303\x03\x02\x02\x02\u0301\u02FF\x03\x02\x02\x02\u0301" +
		"\u0302\x03\x02\x02\x02\u0302\x91\x03\x02\x02\x02\u0303\u0301\x03\x02\x02" +
		"\x02\u0304\u0305\bJ\x01\x02\u0305\u0313\x05\x94K\x02\u0306\u0313\x05\x96" +
		"L\x02\u0307\u0308\x07\x1B\x02\x02\u0308\u0313\x05\x9AN\x02\u0309\u030A" +
		"\x07@\x02\x02\u030A\u030B\x05.\x18\x02\u030B\u030C\x07A\x02\x02\u030C" +
		"\u030D\x05\x92J\x13\u030D\u0313\x03\x02\x02\x02\u030E\u030F\t\x05\x02" +
		"\x02\u030F\u0313\x05\x92J\x11\u0310\u0311\t\x06\x02\x02\u0311\u0313\x05" +
		"\x92J\x10\u0312\u0304\x03\x02\x02\x02\u0312\u0306\x03\x02\x02\x02\u0312" +
		"\u0307\x03\x02\x02\x02\u0312\u0309\x03\x02\x02\x02\u0312\u030E\x03\x02" +
		"\x02\x02\u0312\u0310\x03\x02\x02\x02\u0313\u0358\x03\x02\x02\x02\u0314" +
		"\u0315\f\x0F\x02\x02\u0315\u0316\t\x07\x02\x02\u0316\u0357\x05\x92J\x10" +
		"\u0317\u0318\f\x0E\x02\x02\u0318\u0319\t\b\x02\x02\u0319\u0357\x05\x92" +
		"J\x0F\u031A\u0322\f\r\x02\x02\u031B\u031C\x07K\x02\x02\u031C\u0323\x07" +
		"K\x02\x02\u031D\u031E\x07J\x02\x02\u031E\u031F\x07J\x02\x02\u031F\u0323" +
		"\x07J\x02\x02\u0320\u0321\x07J\x02\x02\u0321\u0323\x07J\x02\x02\u0322" +
		"\u031B\x03\x02\x02\x02\u0322\u031D\x03\x02\x02\x02\u0322\u0320\x03\x02" +
		"\x02\x02\u0323\u0324\x03\x02\x02\x02\u0324\u0357\x05\x92J\x0E\u0325\u0326" +
		"\f\f\x02\x02\u0326\u0328\t\t\x02\x02\u0327\u0329\x07I\x02\x02\u0328\u0327" +
		"\x03\x02\x02\x02\u0328\u0329\x03\x02\x02\x02\u0329\u032A\x03\x02\x02\x02" +
		"\u032A\u0357\x05\x92J\r\u032B\u032C\f\n\x02\x02\u032C\u032D\t\n\x02\x02" +
		"\u032D\u0357\x05\x92J\v\u032E\u032F\f\t\x02\x02\u032F\u0330\x07]\x02\x02" +
		"\u0330\u0357\x05\x92J\n\u0331\u0332\f\b\x02\x02\u0332\u0333\x07_\x02\x02" +
		"\u0333\u0357\x05\x92J\t\u0334\u0335\f\x07\x02\x02\u0335\u0336\x07^\x02" +
		"\x02\u0336\u0357\x05\x92J\b\u0337\u0338\f\x06\x02\x02\u0338\u0339\x07" +
		"U\x02\x02\u0339\u0357\x05\x92J\x07\u033A\u033B\f\x05\x02\x02\u033B\u033C" +
		"\x07V\x02\x02\u033C\u0357\x05\x92J\x06\u033D\u033E\f\x04\x02\x02\u033E" +
		"\u033F\x07N\x02\x02\u033F\u0340\x05\x92J\x02\u0340\u0341\x07O\x02\x02" +
		"\u0341\u0342\x05\x92J\x04\u0342\u0357\x03\x02\x02\x02\u0343\u0344\f\x03" +
		"\x02\x02\u0344\u0345\t\v\x02\x02\u0345\u0357\x05\x92J\x03\u0346\u0347" +
		"\f\x17\x02\x02\u0347\u034A\x07H\x02\x02\u0348\u034B\x05\x98M\x02\u0349" +
		"\u034B\x05\xB2Z\x02\u034A\u0348\x03\x02\x02\x02\u034A\u0349\x03\x02\x02" +
		"\x02\u034B\u0357\x03\x02\x02\x02\u034C\u034D\f\x16\x02\x02\u034D\u034E" +
		"\x07D\x02\x02\u034E\u034F\x05\x92J\x02\u034F\u0350\x07E\x02\x02\u0350" +
		"\u0357\x03\x02\x02\x02\u0351\u0352\f\x12\x02\x02\u0352\u0357\t\f\x02\x02" +
		"\u0353\u0354\f\v\x02\x02\u0354\u0355\x07\x18\x02\x02\u0355\u0357\x05." +
		"\x18\x02\u0356\u0314\x03\x02\x02\x02\u0356\u0317\x03\x02\x02\x02\u0356" +
		"\u031A\x03\x02\x02\x02\u0356\u0325\x03\x02\x02\x02\u0356\u032B\x03\x02" +
		"\x02\x02\u0356\u032E\x03\x02\x02\x02\u0356\u0331\x03\x02\x02\x02\u0356" +
		"\u0334\x03\x02\x02\x02\u0356\u0337\x03\x02\x02\x02\u0356\u033A\x03\x02" +
		"\x02\x02\u0356\u033D\x03\x02\x02\x02\u0356\u0343\x03\x02\x02\x02\u0356" +
		"\u0346\x03\x02\x02\x02\u0356\u034C\x03\x02\x02\x02\u0356\u0351\x03\x02" +
		"\x02\x02\u0356\u0353\x03\x02\x02\x02\u0357\u035A\x03\x02\x02\x02\u0358" +
		"\u0356\x03\x02\x02\x02\u0358\u0359\x03\x02\x02\x02\u0359\x93\x03\x02\x02" +
		"\x02\u035A\u0358\x03\x02\x02\x02\u035B\u035C\x07@\x02\x02\u035C\u035D" +
		"\x05\x92J\x02\u035D\u035E\x07A\x02\x02\u035E\u0369\x03\x02\x02\x02\u035F" +
		"\u0369\x07*\x02\x02\u0360\u0369\x07\'\x02\x02\u0361\u0369\x05> \x02\u0362" +
		"\u0363\x05.\x18\x02\u0363\u0364\x07H\x02\x02\u0364\u0365\x07\b\x02\x02" +
		"\u0365\u0369\x03\x02\x02\x02\u0366\u0369\x05\xB0Y\x02\u0367\u0369\x05" +
		"\xAEX\x02\u0368\u035B\x03\x02\x02\x02\u0368\u035F\x03\x02\x02\x02\u0368" +
		"\u0360\x03\x02\x02\x02\u0368\u0361\x03\x02\x02\x02\u0368\u0362\x03\x02" +
		"\x02\x02\u0368\u0366\x03\x02\x02\x02\u0368\u0367\x03\x02\x02\x02\u0369" +
		"\x95\x03\x02\x02\x02\u036A\u036B\x05\xB0Y\x02\u036B\u036D\x07@\x02\x02" +
		"\u036C\u036E\x05\x90I\x02\u036D\u036C\x03\x02\x02\x02\u036D\u036E\x03" +
		"\x02\x02\x02\u036E\u036F\x03\x02\x02\x02\u036F\u0370\x07A\x02\x02\u0370" +
		"\u037E\x03\x02\x02\x02\u0371\u0372\x07*\x02\x02\u0372\u0374\x07@\x02\x02" +
		"\u0373\u0375\x05\x90I\x02\u0374\u0373\x03\x02\x02\x02\u0374\u0375\x03" +
		"\x02\x02\x02\u0375\u0376\x03\x02\x02\x02\u0376\u037E\x07A\x02\x02\u0377" +
		"\u0378\x07\'\x02\x02\u0378\u037A\x07@\x02\x02\u0379\u037B\x05\x90I\x02" +
		"\u037A\u0379\x03\x02\x02\x02\u037A\u037B\x03\x02\x02\x02\u037B\u037C\x03" +
		"\x02\x02\x02\u037C\u037E\x07A\x02\x02\u037D\u036A\x03\x02\x02\x02\u037D" +
		"\u0371\x03\x02\x02\x02\u037D\u0377\x03\x02\x02\x02\u037E\x97\x03\x02\x02" +
		"\x02\u037F\u0380\x05\xB2Z\x02\u0380\u0382\x07@\x02\x02\u0381\u0383\x05" +
		"\x90I\x02\u0382\u0381\x03\x02\x02\x02\u0382\u0383\x03\x02\x02\x02\u0383" +
		"\u0384\x03\x02\x02\x02\u0384\u0385\x07A\x02\x02\u0385\x99\x03\x02\x02" +
		"\x02\u0386\u038C\x05\x9CO\x02\u0387\u038D\x05\xA0Q\x02\u0388\u038D\x05" +
		"\xA2R\x02\u0389\u038D\x05\xA4S\x02\u038A\u038D\x05\xA6T\x02\u038B\u038D" +
		"\x05\xAAV\x02\u038C\u0387\x03\x02\x02\x02\u038C\u0388\x03\x02\x02\x02" +
		"\u038C\u0389\x03\x02\x02\x02\u038C\u038A\x03\x02\x02\x02\u038C\u038B\x03" +
		"\x02\x02\x02\u038D\x9B\x03\x02\x02\x02\u038E\u0393\x05\x9EP\x02\u038F" +
		"\u0390\x07H\x02\x02\u0390\u0392\x05\x9EP\x02\u0391\u038F\x03\x02\x02\x02" +
		"\u0392\u0395\x03\x02\x02\x02\u0393\u0391\x03\x02\x02\x02\u0393\u0394\x03" +
		"\x02\x02\x02\u0394\x9D\x03\x02\x02\x02\u0395\u0393\x03\x02\x02\x02\u0396" +
		"\u039B\x05\xB2Z\x02\u0397\u0398\x07K\x02\x02\u0398\u0399\x05\x12\n\x02" +
		"\u0399\u039A\x07J\x02\x02\u039A\u039C\x03\x02\x02\x02\u039B\u0397\x03" +
		"\x02\x02\x02\u039B\u039C\x03\x02\x02\x02\u039C\x9F\x03\x02\x02\x02\u039D" +
		"\u039E\x07B\x02\x02\u039E\u039F\x07C\x02\x02\u039F\xA1\x03\x02\x02\x02" +
		"\u03A0\u03A1\x05\xACW\x02\u03A1\xA3\x03\x02\x02\x02\u03A2\u03A3\x07D\x02" +
		"\x02\u03A3\u03A4\x05\x92J\x02\u03A4\u03A5\x07E\x02\x02\u03A5\u03AC\x03" +
		"\x02\x02\x02\u03A6\u03A7\x07D\x02\x02\u03A7\u03A9\x07E\x02\x02\u03A8\u03AA" +
		"\x05,\x17\x02\u03A9\u03A8\x03\x02\x02\x02\u03A9\u03AA\x03\x02\x02\x02" +
		"\u03AA\u03AC\x03\x02\x02\x02\u03AB\u03A2\x03\x02\x02\x02\u03AB\u03A6\x03" +
		"\x02\x02\x02\u03AC\xA5\x03\x02\x02\x02\u03AD\u03AE\x07B\x02\x02\u03AE" +
		"\u03B3\x05\xA8U\x02\u03AF\u03B0\x07G\x02\x02\u03B0\u03B2\x05\xA8U\x02" +
		"\u03B1\u03AF\x03\x02\x02\x02\u03B2\u03B5\x03\x02\x02\x02\u03B3\u03B1\x03" +
		"\x02\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4\u03B6\x03\x02\x02\x02\u03B5" +
		"\u03B3\x03\x02\x02\x02\u03B6\u03B7\x07C\x02\x02\u03B7\xA7\x03\x02\x02" +
		"\x02\u03B8\u03B9\x05\x92J\x02\u03B9\u03BA\x07a\x02\x02\u03BA\u03BB\x05" +
		"\x92J\x02\u03BB\xA9\x03\x02\x02\x02\u03BC\u03BD\x07B\x02\x02\u03BD\u03C2" +
		"\x05\x92J\x02\u03BE\u03BF\x07G\x02\x02\u03BF\u03C1\x05\x92J\x02\u03C0" +
		"\u03BE\x03\x02\x02\x02\u03C1\u03C4\x03\x02\x02\x02\u03C2\u03C0\x03\x02" +
		"\x02\x02\u03C2\u03C3\x03\x02\x02\x02\u03C3\u03C5\x03\x02\x02\x02\u03C4" +
		"\u03C2\x03\x02\x02\x02\u03C5\u03C6\x07C\x02\x02\u03C6\xAB\x03\x02\x02" +
		"\x02\u03C7\u03C9\x07@\x02\x02\u03C8\u03CA\x05\x90I\x02\u03C9\u03C8\x03" +
		"\x02\x02\x02\u03C9\u03CA\x03\x02\x02\x02\u03CA\u03CB\x03\x02\x02\x02\u03CB" +
		"\u03CC\x07A\x02\x02\u03CC\xAD\x03\x02\x02\x02\u03CD\u03D2\x07D\x02\x02" +
		"\u03CE\u03D1\x05\xAEX\x02\u03CF\u03D1\n\r\x02\x02\u03D0\u03CE\x03\x02" +
		"\x02\x02\u03D0\u03CF\x03\x02\x02\x02\u03D1\u03D4\x03\x02\x02\x02\u03D2" +
		"\u03D3\x03\x02\x02\x02\u03D2\u03D0\x03\x02\x02\x02\u03D3\u03D5\x03\x02" +
		"\x02\x02\u03D4\u03D2\x03\x02\x02\x02\u03D5\u03D6\x07E\x02\x02\u03D6\xAF" +
		"\x03\x02\x02\x02\u03D7\u03D8\t\x0E\x02\x02\u03D8\xB1\x03\x02\x02\x02\u03D9" +
		"\u03DA\t\x0F\x02\x02\u03DA\xB3\x03\x02\x02\x02b\xBE\xCE\xD5\xDC\xE0\xE6" +
		"\xEA\xF2\xFB\u0102\u010B\u0112\u011B\u0122\u0128\u012C\u0141\u014A\u014E" +
		"\u0154\u0164\u016C\u0171\u017C\u0182\u018A\u018E\u0190\u0199\u01A2\u01A7" +
		"\u01AB\u01AF\u01B3\u01B5\u01BD\u01C6\u01CC\u01D7\u01E1\u01E4\u01E8\u01ED" +
		"\u01F7\u01FF\u0202\u0205\u020D\u0218\u0232\u0239\u0242\u0250\u0256\u0259" +
		"\u025F\u0276\u0279\u027C\u0280\u02A1\u02AD\u02B8\u02BD\u02C2\u02C7\u02CE" +
		"\u02DB\u02DF\u02E3\u02E5\u02E9\u02EE\u0301\u0312\u0322\u0328\u034A\u0356" +
		"\u0358\u0368\u036D\u0374\u037A\u037D\u0382\u038C\u0393\u039B\u03A9\u03AB" +
		"\u03B3\u03C2\u03C9\u03D0\u03D2";
	public static readonly _serializedATN: string = Utils.join(
		[
			ApexParser._serializedATNSegment0,
			ApexParser._serializedATNSegment1,
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
}


export class LiteralContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(ApexParser.IntegerLiteral, 0); }
	public NumberLiteral(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NumberLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(ApexParser.StringLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(ApexParser.BooleanLiteral, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(ApexParser.NULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_literal; }
}


export class AnnotationContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(ApexParser.AT, 0); }
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
}


export class WhenLiteralContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(ApexParser.IntegerLiteral, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(ApexParser.SUB, 0); }
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
}


export class BreakStatementContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(ApexParser.BREAK, 0); }
	public SEMI(): TerminalNode { return this.getToken(ApexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_breakStatement; }
}


export class ContinueStatementContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(ApexParser.CONTINUE, 0); }
	public SEMI(): TerminalNode { return this.getToken(ApexParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_continueStatement; }
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
	public get ruleIndex(): number { return ApexParser.RULE_enhancedForControl; }
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
}
export class DotExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(ApexParser.DOT, 0); }
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
}
export class MethodCallExpressionContext extends ExpressionContext {
	public methodCall(): MethodCallContext {
		return this.getRuleContext(0, MethodCallContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
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
export class SubPrimaryContext extends PrimaryContext {
	public LPAREN(): TerminalNode { return this.getToken(ApexParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ApexParser.RPAREN, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ThisPrimaryContext extends PrimaryContext {
	public THIS(): TerminalNode { return this.getToken(ApexParser.THIS, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class SuperPrimaryContext extends PrimaryContext {
	public SUPER(): TerminalNode { return this.getToken(ApexParser.SUPER, 0); }
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
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
}
export class IdPrimaryContext extends PrimaryContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(ctx: PrimaryContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
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
}


export class NoRestContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(ApexParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(ApexParser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_noRest; }
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
}


export class SoqlLiteralContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(ApexParser.LBRACK, 0); }
	public RBRACK(): TerminalNode[];
	public RBRACK(i: number): TerminalNode;
	public RBRACK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ApexParser.RBRACK);
		} else {
			return this.getToken(ApexParser.RBRACK, i);
		}
	}
	public soqlLiteral(): SoqlLiteralContext[];
	public soqlLiteral(i: number): SoqlLiteralContext;
	public soqlLiteral(i?: number): SoqlLiteralContext | SoqlLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SoqlLiteralContext);
		} else {
			return this.getRuleContext(i, SoqlLiteralContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_soqlLiteral; }
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_id; }
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ApexParser.RULE_anyId; }
}


