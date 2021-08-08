// Generated from ApexParser.g4 by ANTLR 4.8
package com.nawforce.apexparser;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ApexParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		ABSTRACT=1, AFTER=2, BEFORE=3, BREAK=4, CATCH=5, CLASS=6, CONTINUE=7, 
		DELETE=8, DO=9, ELSE=10, ENUM=11, EXTENDS=12, FINAL=13, FINALLY=14, FOR=15, 
		GET=16, GLOBAL=17, IF=18, IMPLEMENTS=19, INHERITED=20, INSERT=21, INSTANCEOF=22, 
		INTERFACE=23, MERGE=24, NEW=25, NULL=26, ON=27, OVERRIDE=28, PRIVATE=29, 
		PROTECTED=30, PUBLIC=31, RETURN=32, SYSTEMRUNAS=33, SET=34, SHARING=35, 
		STATIC=36, SUPER=37, SWITCH=38, TESTMETHOD=39, THIS=40, THROW=41, TRANSIENT=42, 
		TRIGGER=43, TRY=44, UNDELETE=45, UPDATE=46, UPSERT=47, VIRTUAL=48, VOID=49, 
		WEBSERVICE=50, WHEN=51, WHILE=52, WITH=53, WITHOUT=54, LIST=55, MAP=56, 
		SELECT=57, COUNT=58, FROM=59, AS=60, USING=61, SCOPE=62, WHERE=63, ORDER=64, 
		BY=65, LIMIT=66, SOQLAND=67, SOQLOR=68, NOT=69, AVG=70, COUNT_DISTINCT=71, 
		MIN=72, MAX=73, SUM=74, TYPEOF=75, END=76, THEN=77, LIKE=78, IN=79, INCLUDES=80, 
		EXCLUDES=81, ASC=82, DESC=83, NULLS=84, FIRST=85, LAST=86, GROUP=87, ALL=88, 
		ROWS=89, VIEW=90, HAVING=91, ROLLUP=92, TOLABEL=93, OFFSET=94, DATA=95, 
		CATEGORY=96, AT=97, ABOVE=98, BELOW=99, ABOVE_OR_BELOW=100, SECURITY_ENFORCED=101, 
		REFERENCE=102, CUBE=103, FORMAT=104, TRACKING=105, VIEWSTAT=106, CUSTOM=107, 
		STANDARD=108, CALENDAR_MONTH=109, CALENDAR_QUARTER=110, CALENDAR_YEAR=111, 
		DAY_IN_MONTH=112, DAY_IN_WEEK=113, DAY_IN_YEAR=114, DAY_ONLY=115, FISCAL_MONTH=116, 
		FISCAL_QUARTER=117, FISCAL_YEAR=118, HOUR_IN_DAY=119, WEEK_IN_MONTH=120, 
		WEEK_IN_YEAR=121, CONVERT_TIMEZONE=122, YESTERDAY=123, TODAY=124, TOMORROW=125, 
		LAST_WEEK=126, THIS_WEEK=127, NEXT_WEEK=128, LAST_MONTH=129, THIS_MONTH=130, 
		NEXT_MONTH=131, LAST_90_DAYS=132, NEXT_90_DAYS=133, LAST_N_DAYS_N=134, 
		NEXT_N_DAYS_N=135, NEXT_N_WEEKS_N=136, LAST_N_WEEKS_N=137, NEXT_N_MONTHS_N=138, 
		LAST_N_MONTHS_N=139, THIS_QUARTER=140, LAST_QUARTER=141, NEXT_QUARTER=142, 
		NEXT_N_QUARTERS_N=143, LAST_N_QUARTERS_N=144, THIS_YEAR=145, LAST_YEAR=146, 
		NEXT_YEAR=147, NEXT_N_YEARS_N=148, LAST_N_YEARS_N=149, THIS_FISCAL_QUARTER=150, 
		LAST_FISCAL_QUARTER=151, NEXT_FISCAL_QUARTER=152, NEXT_N_FISCAL_QUARTERS_N=153, 
		LAST_N_FISCAL_QUARTERS_N=154, THIS_FISCAL_YEAR=155, LAST_FISCAL_YEAR=156, 
		NEXT_FISCAL_YEAR=157, NEXT_N_FISCAL_YEARS_N=158, LAST_N_FISCAL_YEARS_N=159, 
		DateLiteral=160, DateTimeLiteral=161, FIND=162, EMAIL=163, NAME=164, PHONE=165, 
		SIDEBAR=166, FIELDS=167, METADATA=168, PRICEBOOKID=169, NETWORK=170, SNIPPET=171, 
		TARGET_LENGTH=172, DIVISION=173, RETURNING=174, LISTVIEW=175, FindLiteral=176, 
		IntegerLiteral=177, LongLiteral=178, NumberLiteral=179, BooleanLiteral=180, 
		StringLiteral=181, NullLiteral=182, LPAREN=183, RPAREN=184, LBRACE=185, 
		RBRACE=186, LBRACK=187, RBRACK=188, SEMI=189, COMMA=190, DOT=191, ASSIGN=192, 
		GT=193, LT=194, BANG=195, TILDE=196, QUESTIONDOT=197, QUESTION=198, COLON=199, 
		EQUAL=200, TRIPLEEQUAL=201, NOTEQUAL=202, LESSANDGREATER=203, TRIPLENOTEQUAL=204, 
		AND=205, OR=206, INC=207, DEC=208, ADD=209, SUB=210, MUL=211, DIV=212, 
		BITAND=213, BITOR=214, CARET=215, MOD=216, MAPTO=217, ADD_ASSIGN=218, 
		SUB_ASSIGN=219, MUL_ASSIGN=220, DIV_ASSIGN=221, AND_ASSIGN=222, OR_ASSIGN=223, 
		XOR_ASSIGN=224, MOD_ASSIGN=225, LSHIFT_ASSIGN=226, RSHIFT_ASSIGN=227, 
		URSHIFT_ASSIGN=228, ATSIGN=229, Identifier=230, WS=231, DOC_COMMENT=232, 
		COMMENT=233, LINE_COMMENT=234;
	public static final int
		RULE_triggerUnit = 0, RULE_triggerCase = 1, RULE_compilationUnit = 2, 
		RULE_typeDeclaration = 3, RULE_classDeclaration = 4, RULE_enumDeclaration = 5, 
		RULE_enumConstants = 6, RULE_interfaceDeclaration = 7, RULE_typeList = 8, 
		RULE_classBody = 9, RULE_interfaceBody = 10, RULE_classBodyDeclaration = 11, 
		RULE_modifier = 12, RULE_memberDeclaration = 13, RULE_methodDeclaration = 14, 
		RULE_constructorDeclaration = 15, RULE_fieldDeclaration = 16, RULE_propertyDeclaration = 17, 
		RULE_interfaceMethodDeclaration = 18, RULE_variableDeclarators = 19, RULE_variableDeclarator = 20, 
		RULE_arrayInitializer = 21, RULE_typeRef = 22, RULE_arraySubscripts = 23, 
		RULE_typeName = 24, RULE_typeArguments = 25, RULE_formalParameters = 26, 
		RULE_formalParameterList = 27, RULE_formalParameter = 28, RULE_qualifiedName = 29, 
		RULE_literal = 30, RULE_annotation = 31, RULE_elementValuePairs = 32, 
		RULE_elementValuePair = 33, RULE_elementValue = 34, RULE_elementValueArrayInitializer = 35, 
		RULE_block = 36, RULE_localVariableDeclarationStatement = 37, RULE_localVariableDeclaration = 38, 
		RULE_statement = 39, RULE_ifStatement = 40, RULE_switchStatement = 41, 
		RULE_whenControl = 42, RULE_whenValue = 43, RULE_whenLiteral = 44, RULE_forStatement = 45, 
		RULE_whileStatement = 46, RULE_doWhileStatement = 47, RULE_tryStatement = 48, 
		RULE_returnStatement = 49, RULE_throwStatement = 50, RULE_breakStatement = 51, 
		RULE_continueStatement = 52, RULE_insertStatement = 53, RULE_updateStatement = 54, 
		RULE_deleteStatement = 55, RULE_undeleteStatement = 56, RULE_upsertStatement = 57, 
		RULE_mergeStatement = 58, RULE_runAsStatement = 59, RULE_expressionStatement = 60, 
		RULE_propertyBlock = 61, RULE_getter = 62, RULE_setter = 63, RULE_catchClause = 64, 
		RULE_finallyBlock = 65, RULE_forControl = 66, RULE_forInit = 67, RULE_enhancedForControl = 68, 
		RULE_forUpdate = 69, RULE_parExpression = 70, RULE_expressionList = 71, 
		RULE_expression = 72, RULE_primary = 73, RULE_methodCall = 74, RULE_dotMethodCall = 75, 
		RULE_creator = 76, RULE_createdName = 77, RULE_idCreatedNamePair = 78, 
		RULE_noRest = 79, RULE_classCreatorRest = 80, RULE_arrayCreatorRest = 81, 
		RULE_mapCreatorRest = 82, RULE_mapCreatorRestPair = 83, RULE_setCreatorRest = 84, 
		RULE_arguments = 85, RULE_soqlLiteral = 86, RULE_query = 87, RULE_subQuery = 88, 
		RULE_selectList = 89, RULE_selectEntry = 90, RULE_fieldName = 91, RULE_fromNameList = 92, 
		RULE_subFieldList = 93, RULE_subFieldEntry = 94, RULE_soqlFieldsParameter = 95, 
		RULE_soqlFunction = 96, RULE_dateFieldName = 97, RULE_typeOf = 98, RULE_whenClause = 99, 
		RULE_elseClause = 100, RULE_fieldNameList = 101, RULE_usingScope = 102, 
		RULE_whereClause = 103, RULE_logicalExpression = 104, RULE_conditionalExpression = 105, 
		RULE_fieldExpression = 106, RULE_comparisonOperator = 107, RULE_value = 108, 
		RULE_valueList = 109, RULE_currencyValue = 110, RULE_withClause = 111, 
		RULE_filteringExpression = 112, RULE_dataCategorySelection = 113, RULE_dataCategoryName = 114, 
		RULE_filteringSelector = 115, RULE_groupByClause = 116, RULE_orderByClause = 117, 
		RULE_fieldOrderList = 118, RULE_fieldOrder = 119, RULE_limitClause = 120, 
		RULE_offsetClause = 121, RULE_allRowsClause = 122, RULE_forClauses = 123, 
		RULE_boundExpression = 124, RULE_dateFormula = 125, RULE_signedInteger = 126, 
		RULE_soqlId = 127, RULE_soslLiteral = 128, RULE_soslClauses = 129, RULE_searchGroup = 130, 
		RULE_fieldSpecList = 131, RULE_fieldSpec = 132, RULE_fieldList = 133, 
		RULE_updateList = 134, RULE_updateType = 135, RULE_networkList = 136, 
		RULE_soslId = 137, RULE_id = 138, RULE_anyId = 139;
	private static String[] makeRuleNames() {
		return new String[] {
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
			"soqlFieldsParameter", "soqlFunction", "dateFieldName", "typeOf", "whenClause", 
			"elseClause", "fieldNameList", "usingScope", "whereClause", "logicalExpression", 
			"conditionalExpression", "fieldExpression", "comparisonOperator", "value", 
			"valueList", "currencyValue", "withClause", "filteringExpression", "dataCategorySelection", 
			"dataCategoryName", "filteringSelector", "groupByClause", "orderByClause", 
			"fieldOrderList", "fieldOrder", "limitClause", "offsetClause", "allRowsClause", 
			"forClauses", "boundExpression", "dateFormula", "signedInteger", "soqlId", 
			"soslLiteral", "soslClauses", "searchGroup", "fieldSpecList", "fieldSpec", 
			"fieldList", "updateList", "updateType", "networkList", "soslId", "id", 
			"anyId"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'abstract'", "'after'", "'before'", "'break'", "'catch'", "'class'", 
			"'continue'", "'delete'", "'do'", "'else'", "'enum'", "'extends'", "'final'", 
			"'finally'", "'for'", "'get'", "'global'", "'if'", "'implements'", "'inherited'", 
			"'insert'", "'instanceof'", "'interface'", "'merge'", "'new'", "'null'", 
			"'on'", "'override'", "'private'", "'protected'", "'public'", "'return'", 
			"'system.runas'", "'set'", "'sharing'", "'static'", "'super'", "'switch'", 
			"'testmethod'", "'this'", "'throw'", "'transient'", "'trigger'", "'try'", 
			"'undelete'", "'update'", "'upsert'", "'virtual'", "'void'", "'webservice'", 
			"'when'", "'while'", "'with'", "'without'", "'list'", "'map'", "'select'", 
			"'count'", "'from'", "'as'", "'using'", "'scope'", "'where'", "'order'", 
			"'by'", "'limit'", "'and'", "'or'", "'not'", "'avg'", "'count_distinct'", 
			"'min'", "'max'", "'sum'", "'typeof'", "'end'", "'then'", "'like'", "'in'", 
			"'includes'", "'excludes'", "'asc'", "'desc'", "'nulls'", "'first'", 
			"'last'", "'group'", "'all'", "'rows'", "'view'", "'having'", "'rollup'", 
			"'tolabel'", "'offset'", "'data'", "'category'", "'at'", "'above'", "'below'", 
			"'above_or_below'", "'security_enforced'", "'reference'", "'cube'", "'format'", 
			"'tracking'", "'viewstat'", "'custom'", "'standard'", "'calendar_month'", 
			"'calendar_quarter'", "'calendar_year'", "'day_in_month'", "'day_in_week'", 
			"'day_in_year'", "'day_only'", "'fiscal_month'", "'fiscal_quarter'", 
			"'fiscal_year'", "'hour_in_day'", "'week_in_month'", "'week_in_year'", 
			"'converttimezone'", "'yesterday'", "'today'", "'tomorrow'", "'last_week'", 
			"'this_week'", "'next_week'", "'last_month'", "'this_month'", "'next_month'", 
			"'last_90_days'", "'next_90_days'", "'last_n_days'", "'next_n_days'", 
			"'next_n_weeks'", "'last_n_weeks'", "'next_n_months'", "'last_n_months'", 
			"'this_quarter'", "'last_quarted'", "'next_quarter'", "'next_n_quarters'", 
			"'last_n_quarters'", "'this_year'", "'last_year'", "'next_year'", "'next_n_years'", 
			"'last_n_years'", "'this_fiscal_quarter'", "'last_fiscal_quarter'", "'next_fiscal_quarter'", 
			"'next_n_fiscal_quarters'", "'last_n_fiscal_quarters'", "'this_fiscal_year'", 
			"'last_fiscal_year'", "'next_fiscal_year'", "'next_n_fiscal_years'", 
			"'last_n_fiscal_years'", null, null, "'find'", "'email'", "'name'", "'phone'", 
			"'sidebar'", "'fields'", "'metadata'", "'pricebookid'", "'network'", 
			"'snippet'", "'target_length'", "'division'", "'returning'", "'listview'", 
			null, null, null, null, null, null, null, "'('", "')'", "'{'", "'}'", 
			"'['", "']'", "';'", "','", "'.'", "'='", "'>'", "'<'", "'!'", "'~'", 
			"'?.'", "'?'", "':'", "'=='", "'==='", "'!='", "'<>'", "'!=='", "'&&'", 
			"'||'", "'++'", "'--'", "'+'", "'-'", "'*'", "'/'", "'&'", "'|'", "'^'", 
			"'%'", "'=>'", "'+='", "'-='", "'*='", "'/='", "'&='", "'|='", "'^='", 
			"'%='", "'<<='", "'>>='", "'>>>='", "'@'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "ABSTRACT", "AFTER", "BEFORE", "BREAK", "CATCH", "CLASS", "CONTINUE", 
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
			"FIRST", "LAST", "GROUP", "ALL", "ROWS", "VIEW", "HAVING", "ROLLUP", 
			"TOLABEL", "OFFSET", "DATA", "CATEGORY", "AT", "ABOVE", "BELOW", "ABOVE_OR_BELOW", 
			"SECURITY_ENFORCED", "REFERENCE", "CUBE", "FORMAT", "TRACKING", "VIEWSTAT", 
			"CUSTOM", "STANDARD", "CALENDAR_MONTH", "CALENDAR_QUARTER", "CALENDAR_YEAR", 
			"DAY_IN_MONTH", "DAY_IN_WEEK", "DAY_IN_YEAR", "DAY_ONLY", "FISCAL_MONTH", 
			"FISCAL_QUARTER", "FISCAL_YEAR", "HOUR_IN_DAY", "WEEK_IN_MONTH", "WEEK_IN_YEAR", 
			"CONVERT_TIMEZONE", "YESTERDAY", "TODAY", "TOMORROW", "LAST_WEEK", "THIS_WEEK", 
			"NEXT_WEEK", "LAST_MONTH", "THIS_MONTH", "NEXT_MONTH", "LAST_90_DAYS", 
			"NEXT_90_DAYS", "LAST_N_DAYS_N", "NEXT_N_DAYS_N", "NEXT_N_WEEKS_N", "LAST_N_WEEKS_N", 
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
			"TILDE", "QUESTIONDOT", "QUESTION", "COLON", "EQUAL", "TRIPLEEQUAL", 
			"NOTEQUAL", "LESSANDGREATER", "TRIPLENOTEQUAL", "AND", "OR", "INC", "DEC", 
			"ADD", "SUB", "MUL", "DIV", "BITAND", "BITOR", "CARET", "MOD", "MAPTO", 
			"ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", 
			"OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN", "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", 
			"URSHIFT_ASSIGN", "ATSIGN", "Identifier", "WS", "DOC_COMMENT", "COMMENT", 
			"LINE_COMMENT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "ApexParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }


	    public void clearCache() {
	        _interp.clearDFA();
	    }

	public ApexParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class TriggerUnitContext extends ParserRuleContext {
		public TerminalNode TRIGGER() { return getToken(ApexParser.TRIGGER, 0); }
		public List<IdContext> id() {
			return getRuleContexts(IdContext.class);
		}
		public IdContext id(int i) {
			return getRuleContext(IdContext.class,i);
		}
		public TerminalNode ON() { return getToken(ApexParser.ON, 0); }
		public TerminalNode LPAREN() { return getToken(ApexParser.LPAREN, 0); }
		public List<TriggerCaseContext> triggerCase() {
			return getRuleContexts(TriggerCaseContext.class);
		}
		public TriggerCaseContext triggerCase(int i) {
			return getRuleContext(TriggerCaseContext.class,i);
		}
		public TerminalNode RPAREN() { return getToken(ApexParser.RPAREN, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode EOF() { return getToken(ApexParser.EOF, 0); }
		public List<TerminalNode> COMMA() { return getTokens(ApexParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ApexParser.COMMA, i);
		}
		public TriggerUnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_triggerUnit; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterTriggerUnit(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitTriggerUnit(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitTriggerUnit(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TriggerUnitContext triggerUnit() throws RecognitionException {
		TriggerUnitContext _localctx = new TriggerUnitContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_triggerUnit);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(280);
			match(TRIGGER);
			setState(281);
			id();
			setState(282);
			match(ON);
			setState(283);
			id();
			setState(284);
			match(LPAREN);
			setState(285);
			triggerCase();
			setState(290);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(286);
				match(COMMA);
				setState(287);
				triggerCase();
				}
				}
				setState(292);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(293);
			match(RPAREN);
			setState(294);
			block();
			setState(295);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TriggerCaseContext extends ParserRuleContext {
		public TerminalNode BEFORE() { return getToken(ApexParser.BEFORE, 0); }
		public TerminalNode AFTER() { return getToken(ApexParser.AFTER, 0); }
		public TerminalNode INSERT() { return getToken(ApexParser.INSERT, 0); }
		public TerminalNode UPDATE() { return getToken(ApexParser.UPDATE, 0); }
		public TerminalNode DELETE() { return getToken(ApexParser.DELETE, 0); }
		public TerminalNode UNDELETE() { return getToken(ApexParser.UNDELETE, 0); }
		public TriggerCaseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_triggerCase; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterTriggerCase(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitTriggerCase(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitTriggerCase(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TriggerCaseContext triggerCase() throws RecognitionException {
		TriggerCaseContext _localctx = new TriggerCaseContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_triggerCase);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(297);
			_la = _input.LA(1);
			if ( !(_la==AFTER || _la==BEFORE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(298);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << DELETE) | (1L << INSERT) | (1L << UNDELETE) | (1L << UPDATE))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CompilationUnitContext extends ParserRuleContext {
		public TypeDeclarationContext typeDeclaration() {
			return getRuleContext(TypeDeclarationContext.class,0);
		}
		public TerminalNode EOF() { return getToken(ApexParser.EOF, 0); }
		public CompilationUnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compilationUnit; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterCompilationUnit(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitCompilationUnit(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitCompilationUnit(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CompilationUnitContext compilationUnit() throws RecognitionException {
		CompilationUnitContext _localctx = new CompilationUnitContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_compilationUnit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(300);
			typeDeclaration();
			setState(301);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeDeclarationContext extends ParserRuleContext {
		public ClassDeclarationContext classDeclaration() {
			return getRuleContext(ClassDeclarationContext.class,0);
		}
		public List<ModifierContext> modifier() {
			return getRuleContexts(ModifierContext.class);
		}
		public ModifierContext modifier(int i) {
			return getRuleContext(ModifierContext.class,i);
		}
		public EnumDeclarationContext enumDeclaration() {
			return getRuleContext(EnumDeclarationContext.class,0);
		}
		public InterfaceDeclarationContext interfaceDeclaration() {
			return getRuleContext(InterfaceDeclarationContext.class,0);
		}
		public TypeDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterTypeDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitTypeDeclaration(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitTypeDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TypeDeclarationContext typeDeclaration() throws RecognitionException {
		TypeDeclarationContext _localctx = new TypeDeclarationContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_typeDeclaration);
		int _la;
		try {
			setState(324);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(306);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ABSTRACT) | (1L << FINAL) | (1L << GLOBAL) | (1L << INHERITED) | (1L << OVERRIDE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << TESTMETHOD) | (1L << TRANSIENT) | (1L << VIRTUAL) | (1L << WEBSERVICE) | (1L << WITH) | (1L << WITHOUT))) != 0) || _la==ATSIGN) {
					{
					{
					setState(303);
					modifier();
					}
					}
					setState(308);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(309);
				classDeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(313);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ABSTRACT) | (1L << FINAL) | (1L << GLOBAL) | (1L << INHERITED) | (1L << OVERRIDE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << TESTMETHOD) | (1L << TRANSIENT) | (1L << VIRTUAL) | (1L << WEBSERVICE) | (1L << WITH) | (1L << WITHOUT))) != 0) || _la==ATSIGN) {
					{
					{
					setState(310);
					modifier();
					}
					}
					setState(315);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(316);
				enumDeclaration();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(320);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ABSTRACT) | (1L << FINAL) | (1L << GLOBAL) | (1L << INHERITED) | (1L << OVERRIDE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << TESTMETHOD) | (1L << TRANSIENT) | (1L << VIRTUAL) | (1L << WEBSERVICE) | (1L << WITH) | (1L << WITHOUT))) != 0) || _la==ATSIGN) {
					{
					{
					setState(317);
					modifier();
					}
					}
					setState(322);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(323);
				interfaceDeclaration();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassDeclarationContext extends ParserRuleContext {
		public TerminalNode CLASS() { return getToken(ApexParser.CLASS, 0); }
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public ClassBodyContext classBody() {
			return getRuleContext(ClassBodyContext.class,0);
		}
		public TerminalNode EXTENDS() { return getToken(ApexParser.EXTENDS, 0); }
		public TypeRefContext typeRef() {
			return getRuleContext(TypeRefContext.class,0);
		}
		public TerminalNode IMPLEMENTS() { return getToken(ApexParser.IMPLEMENTS, 0); }
		public TypeListContext typeList() {
			return getRuleContext(TypeListContext.class,0);
		}
		public ClassDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterClassDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitClassDeclaration(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitClassDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ClassDeclarationContext classDeclaration() throws RecognitionException {
		ClassDeclarationContext _localctx = new ClassDeclarationContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_classDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(326);
			match(CLASS);
			setState(327);
			id();
			setState(330);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXTENDS) {
				{
				setState(328);
				match(EXTENDS);
				setState(329);
				typeRef();
				}
			}

			setState(334);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IMPLEMENTS) {
				{
				setState(332);
				match(IMPLEMENTS);
				setState(333);
				typeList();
				}
			}

			setState(336);
			classBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumDeclarationContext extends ParserRuleContext {
		public TerminalNode ENUM() { return getToken(ApexParser.ENUM, 0); }
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TerminalNode LBRACE() { return getToken(ApexParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(ApexParser.RBRACE, 0); }
		public EnumConstantsContext enumConstants() {
			return getRuleContext(EnumConstantsContext.class,0);
		}
		public EnumDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterEnumDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitEnumDeclaration(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitEnumDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final EnumDeclarationContext enumDeclaration() throws RecognitionException {
		EnumDeclarationContext _localctx = new EnumDeclarationContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_enumDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(338);
			match(ENUM);
			setState(339);
			id();
			setState(340);
			match(LBRACE);
			setState(342);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << AFTER) | (1L << BEFORE) | (1L << GET) | (1L << INHERITED) | (1L << INSTANCEOF) | (1L << SET) | (1L << SHARING) | (1L << SWITCH) | (1L << TRANSIENT) | (1L << TRIGGER) | (1L << WHEN) | (1L << WITH) | (1L << WITHOUT) | (1L << SELECT) | (1L << COUNT) | (1L << FROM) | (1L << AS) | (1L << USING) | (1L << SCOPE) | (1L << WHERE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ORDER - 64)) | (1L << (BY - 64)) | (1L << (LIMIT - 64)) | (1L << (SOQLAND - 64)) | (1L << (SOQLOR - 64)) | (1L << (NOT - 64)) | (1L << (AVG - 64)) | (1L << (COUNT_DISTINCT - 64)) | (1L << (MIN - 64)) | (1L << (MAX - 64)) | (1L << (SUM - 64)) | (1L << (TYPEOF - 64)) | (1L << (END - 64)) | (1L << (THEN - 64)) | (1L << (LIKE - 64)) | (1L << (IN - 64)) | (1L << (INCLUDES - 64)) | (1L << (EXCLUDES - 64)) | (1L << (ASC - 64)) | (1L << (DESC - 64)) | (1L << (NULLS - 64)) | (1L << (FIRST - 64)) | (1L << (LAST - 64)) | (1L << (GROUP - 64)) | (1L << (ALL - 64)) | (1L << (ROWS - 64)) | (1L << (VIEW - 64)) | (1L << (HAVING - 64)) | (1L << (ROLLUP - 64)) | (1L << (TOLABEL - 64)) | (1L << (OFFSET - 64)) | (1L << (DATA - 64)) | (1L << (CATEGORY - 64)) | (1L << (AT - 64)) | (1L << (ABOVE - 64)) | (1L << (BELOW - 64)) | (1L << (ABOVE_OR_BELOW - 64)) | (1L << (SECURITY_ENFORCED - 64)) | (1L << (REFERENCE - 64)) | (1L << (CUBE - 64)) | (1L << (FORMAT - 64)) | (1L << (TRACKING - 64)) | (1L << (VIEWSTAT - 64)) | (1L << (CUSTOM - 64)) | (1L << (STANDARD - 64)) | (1L << (CALENDAR_MONTH - 64)) | (1L << (CALENDAR_QUARTER - 64)) | (1L << (CALENDAR_YEAR - 64)) | (1L << (DAY_IN_MONTH - 64)) | (1L << (DAY_IN_WEEK - 64)) | (1L << (DAY_IN_YEAR - 64)) | (1L << (DAY_ONLY - 64)) | (1L << (FISCAL_MONTH - 64)) | (1L << (FISCAL_QUARTER - 64)) | (1L << (FISCAL_YEAR - 64)) | (1L << (HOUR_IN_DAY - 64)) | (1L << (WEEK_IN_MONTH - 64)) | (1L << (WEEK_IN_YEAR - 64)) | (1L << (CONVERT_TIMEZONE - 64)) | (1L << (YESTERDAY - 64)) | (1L << (TODAY - 64)) | (1L << (TOMORROW - 64)) | (1L << (LAST_WEEK - 64)) | (1L << (THIS_WEEK - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (NEXT_WEEK - 128)) | (1L << (LAST_MONTH - 128)) | (1L << (THIS_MONTH - 128)) | (1L << (NEXT_MONTH - 128)) | (1L << (LAST_90_DAYS - 128)) | (1L << (NEXT_90_DAYS - 128)) | (1L << (LAST_N_DAYS_N - 128)) | (1L << (NEXT_N_DAYS_N - 128)) | (1L << (NEXT_N_WEEKS_N - 128)) | (1L << (LAST_N_WEEKS_N - 128)) | (1L << (NEXT_N_MONTHS_N - 128)) | (1L << (LAST_N_MONTHS_N - 128)) | (1L << (THIS_QUARTER - 128)) | (1L << (LAST_QUARTER - 128)) | (1L << (NEXT_QUARTER - 128)) | (1L << (NEXT_N_QUARTERS_N - 128)) | (1L << (LAST_N_QUARTERS_N - 128)) | (1L << (THIS_YEAR - 128)) | (1L << (LAST_YEAR - 128)) | (1L << (NEXT_YEAR - 128)) | (1L << (NEXT_N_YEARS_N - 128)) | (1L << (LAST_N_YEARS_N - 128)) | (1L << (THIS_FISCAL_QUARTER - 128)) | (1L << (LAST_FISCAL_QUARTER - 128)) | (1L << (NEXT_FISCAL_QUARTER - 128)) | (1L << (NEXT_N_FISCAL_QUARTERS_N - 128)) | (1L << (LAST_N_FISCAL_QUARTERS_N - 128)) | (1L << (THIS_FISCAL_YEAR - 128)) | (1L << (LAST_FISCAL_YEAR - 128)) | (1L << (NEXT_FISCAL_YEAR - 128)) | (1L << (NEXT_N_FISCAL_YEARS_N - 128)) | (1L << (LAST_N_FISCAL_YEARS_N - 128)) | (1L << (FIND - 128)) | (1L << (EMAIL - 128)) | (1L << (NAME - 128)) | (1L << (PHONE - 128)) | (1L << (SIDEBAR - 128)) | (1L << (FIELDS - 128)) | (1L << (METADATA - 128)) | (1L << (PRICEBOOKID - 128)) | (1L << (NETWORK - 128)) | (1L << (SNIPPET - 128)) | (1L << (TARGET_LENGTH - 128)) | (1L << (DIVISION - 128)) | (1L << (RETURNING - 128)) | (1L << (LISTVIEW - 128)))) != 0) || _la==Identifier) {
				{
				setState(341);
				enumConstants();
				}
			}

			setState(344);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnumConstantsContext extends ParserRuleContext {
		public List<IdContext> id() {
			return getRuleContexts(IdContext.class);
		}
		public IdContext id(int i) {
			return getRuleContext(IdContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(ApexParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ApexParser.COMMA, i);
		}
		public EnumConstantsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enumConstants; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterEnumConstants(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitEnumConstants(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitEnumConstants(this);
			else return visitor.visitChildren(this);
		}
	}

	public final EnumConstantsContext enumConstants() throws RecognitionException {
		EnumConstantsContext _localctx = new EnumConstantsContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_enumConstants);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(346);
			id();
			setState(351);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(347);
				match(COMMA);
				setState(348);
				id();
				}
				}
				setState(353);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InterfaceDeclarationContext extends ParserRuleContext {
		public TerminalNode INTERFACE() { return getToken(ApexParser.INTERFACE, 0); }
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public InterfaceBodyContext interfaceBody() {
			return getRuleContext(InterfaceBodyContext.class,0);
		}
		public TerminalNode EXTENDS() { return getToken(ApexParser.EXTENDS, 0); }
		public TypeListContext typeList() {
			return getRuleContext(TypeListContext.class,0);
		}
		public InterfaceDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_interfaceDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterInterfaceDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitInterfaceDeclaration(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitInterfaceDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final InterfaceDeclarationContext interfaceDeclaration() throws RecognitionException {
		InterfaceDeclarationContext _localctx = new InterfaceDeclarationContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_interfaceDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(354);
			match(INTERFACE);
			setState(355);
			id();
			setState(358);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EXTENDS) {
				{
				setState(356);
				match(EXTENDS);
				setState(357);
				typeList();
				}
			}

			setState(360);
			interfaceBody();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeListContext extends ParserRuleContext {
		public List<TypeRefContext> typeRef() {
			return getRuleContexts(TypeRefContext.class);
		}
		public TypeRefContext typeRef(int i) {
			return getRuleContext(TypeRefContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(ApexParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ApexParser.COMMA, i);
		}
		public TypeListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterTypeList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitTypeList(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitTypeList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TypeListContext typeList() throws RecognitionException {
		TypeListContext _localctx = new TypeListContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_typeList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(362);
			typeRef();
			setState(367);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(363);
				match(COMMA);
				setState(364);
				typeRef();
				}
				}
				setState(369);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassBodyContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(ApexParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(ApexParser.RBRACE, 0); }
		public List<ClassBodyDeclarationContext> classBodyDeclaration() {
			return getRuleContexts(ClassBodyDeclarationContext.class);
		}
		public ClassBodyDeclarationContext classBodyDeclaration(int i) {
			return getRuleContext(ClassBodyDeclarationContext.class,i);
		}
		public ClassBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classBody; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterClassBody(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitClassBody(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitClassBody(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ClassBodyContext classBody() throws RecognitionException {
		ClassBodyContext _localctx = new ClassBodyContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_classBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(370);
			match(LBRACE);
			setState(374);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ABSTRACT) | (1L << AFTER) | (1L << BEFORE) | (1L << CLASS) | (1L << ENUM) | (1L << FINAL) | (1L << GET) | (1L << GLOBAL) | (1L << INHERITED) | (1L << INSTANCEOF) | (1L << INTERFACE) | (1L << OVERRIDE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << SET) | (1L << SHARING) | (1L << STATIC) | (1L << SWITCH) | (1L << TESTMETHOD) | (1L << TRANSIENT) | (1L << TRIGGER) | (1L << VIRTUAL) | (1L << VOID) | (1L << WEBSERVICE) | (1L << WHEN) | (1L << WITH) | (1L << WITHOUT) | (1L << LIST) | (1L << MAP) | (1L << SELECT) | (1L << COUNT) | (1L << FROM) | (1L << AS) | (1L << USING) | (1L << SCOPE) | (1L << WHERE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ORDER - 64)) | (1L << (BY - 64)) | (1L << (LIMIT - 64)) | (1L << (SOQLAND - 64)) | (1L << (SOQLOR - 64)) | (1L << (NOT - 64)) | (1L << (AVG - 64)) | (1L << (COUNT_DISTINCT - 64)) | (1L << (MIN - 64)) | (1L << (MAX - 64)) | (1L << (SUM - 64)) | (1L << (TYPEOF - 64)) | (1L << (END - 64)) | (1L << (THEN - 64)) | (1L << (LIKE - 64)) | (1L << (IN - 64)) | (1L << (INCLUDES - 64)) | (1L << (EXCLUDES - 64)) | (1L << (ASC - 64)) | (1L << (DESC - 64)) | (1L << (NULLS - 64)) | (1L << (FIRST - 64)) | (1L << (LAST - 64)) | (1L << (GROUP - 64)) | (1L << (ALL - 64)) | (1L << (ROWS - 64)) | (1L << (VIEW - 64)) | (1L << (HAVING - 64)) | (1L << (ROLLUP - 64)) | (1L << (TOLABEL - 64)) | (1L << (OFFSET - 64)) | (1L << (DATA - 64)) | (1L << (CATEGORY - 64)) | (1L << (AT - 64)) | (1L << (ABOVE - 64)) | (1L << (BELOW - 64)) | (1L << (ABOVE_OR_BELOW - 64)) | (1L << (SECURITY_ENFORCED - 64)) | (1L << (REFERENCE - 64)) | (1L << (CUBE - 64)) | (1L << (FORMAT - 64)) | (1L << (TRACKING - 64)) | (1L << (VIEWSTAT - 64)) | (1L << (CUSTOM - 64)) | (1L << (STANDARD - 64)) | (1L << (CALENDAR_MONTH - 64)) | (1L << (CALENDAR_QUARTER - 64)) | (1L << (CALENDAR_YEAR - 64)) | (1L << (DAY_IN_MONTH - 64)) | (1L << (DAY_IN_WEEK - 64)) | (1L << (DAY_IN_YEAR - 64)) | (1L << (DAY_ONLY - 64)) | (1L << (FISCAL_MONTH - 64)) | (1L << (FISCAL_QUARTER - 64)) | (1L << (FISCAL_YEAR - 64)) | (1L << (HOUR_IN_DAY - 64)) | (1L << (WEEK_IN_MONTH - 64)) | (1L << (WEEK_IN_YEAR - 64)) | (1L << (CONVERT_TIMEZONE - 64)) | (1L << (YESTERDAY - 64)) | (1L << (TODAY - 64)) | (1L << (TOMORROW - 64)) | (1L << (LAST_WEEK - 64)) | (1L << (THIS_WEEK - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (NEXT_WEEK - 128)) | (1L << (LAST_MONTH - 128)) | (1L << (THIS_MONTH - 128)) | (1L << (NEXT_MONTH - 128)) | (1L << (LAST_90_DAYS - 128)) | (1L << (NEXT_90_DAYS - 128)) | (1L << (LAST_N_DAYS_N - 128)) | (1L << (NEXT_N_DAYS_N - 128)) | (1L << (NEXT_N_WEEKS_N - 128)) | (1L << (LAST_N_WEEKS_N - 128)) | (1L << (NEXT_N_MONTHS_N - 128)) | (1L << (LAST_N_MONTHS_N - 128)) | (1L << (THIS_QUARTER - 128)) | (1L << (LAST_QUARTER - 128)) | (1L << (NEXT_QUARTER - 128)) | (1L << (NEXT_N_QUARTERS_N - 128)) | (1L << (LAST_N_QUARTERS_N - 128)) | (1L << (THIS_YEAR - 128)) | (1L << (LAST_YEAR - 128)) | (1L << (NEXT_YEAR - 128)) | (1L << (NEXT_N_YEARS_N - 128)) | (1L << (LAST_N_YEARS_N - 128)) | (1L << (THIS_FISCAL_QUARTER - 128)) | (1L << (LAST_FISCAL_QUARTER - 128)) | (1L << (NEXT_FISCAL_QUARTER - 128)) | (1L << (NEXT_N_FISCAL_QUARTERS_N - 128)) | (1L << (LAST_N_FISCAL_QUARTERS_N - 128)) | (1L << (THIS_FISCAL_YEAR - 128)) | (1L << (LAST_FISCAL_YEAR - 128)) | (1L << (NEXT_FISCAL_YEAR - 128)) | (1L << (NEXT_N_FISCAL_YEARS_N - 128)) | (1L << (LAST_N_FISCAL_YEARS_N - 128)) | (1L << (FIND - 128)) | (1L << (EMAIL - 128)) | (1L << (NAME - 128)) | (1L << (PHONE - 128)) | (1L << (SIDEBAR - 128)) | (1L << (FIELDS - 128)) | (1L << (METADATA - 128)) | (1L << (PRICEBOOKID - 128)) | (1L << (NETWORK - 128)) | (1L << (SNIPPET - 128)) | (1L << (TARGET_LENGTH - 128)) | (1L << (DIVISION - 128)) | (1L << (RETURNING - 128)) | (1L << (LISTVIEW - 128)) | (1L << (LBRACE - 128)) | (1L << (SEMI - 128)))) != 0) || _la==ATSIGN || _la==Identifier) {
				{
				{
				setState(371);
				classBodyDeclaration();
				}
				}
				setState(376);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(377);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InterfaceBodyContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(ApexParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(ApexParser.RBRACE, 0); }
		public List<InterfaceMethodDeclarationContext> interfaceMethodDeclaration() {
			return getRuleContexts(InterfaceMethodDeclarationContext.class);
		}
		public InterfaceMethodDeclarationContext interfaceMethodDeclaration(int i) {
			return getRuleContext(InterfaceMethodDeclarationContext.class,i);
		}
		public InterfaceBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_interfaceBody; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterInterfaceBody(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitInterfaceBody(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitInterfaceBody(this);
			else return visitor.visitChildren(this);
		}
	}

	public final InterfaceBodyContext interfaceBody() throws RecognitionException {
		InterfaceBodyContext _localctx = new InterfaceBodyContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_interfaceBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(379);
			match(LBRACE);
			setState(383);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ABSTRACT) | (1L << AFTER) | (1L << BEFORE) | (1L << FINAL) | (1L << GET) | (1L << GLOBAL) | (1L << INHERITED) | (1L << INSTANCEOF) | (1L << OVERRIDE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << SET) | (1L << SHARING) | (1L << STATIC) | (1L << SWITCH) | (1L << TESTMETHOD) | (1L << TRANSIENT) | (1L << TRIGGER) | (1L << VIRTUAL) | (1L << VOID) | (1L << WEBSERVICE) | (1L << WHEN) | (1L << WITH) | (1L << WITHOUT) | (1L << LIST) | (1L << MAP) | (1L << SELECT) | (1L << COUNT) | (1L << FROM) | (1L << AS) | (1L << USING) | (1L << SCOPE) | (1L << WHERE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ORDER - 64)) | (1L << (BY - 64)) | (1L << (LIMIT - 64)) | (1L << (SOQLAND - 64)) | (1L << (SOQLOR - 64)) | (1L << (NOT - 64)) | (1L << (AVG - 64)) | (1L << (COUNT_DISTINCT - 64)) | (1L << (MIN - 64)) | (1L << (MAX - 64)) | (1L << (SUM - 64)) | (1L << (TYPEOF - 64)) | (1L << (END - 64)) | (1L << (THEN - 64)) | (1L << (LIKE - 64)) | (1L << (IN - 64)) | (1L << (INCLUDES - 64)) | (1L << (EXCLUDES - 64)) | (1L << (ASC - 64)) | (1L << (DESC - 64)) | (1L << (NULLS - 64)) | (1L << (FIRST - 64)) | (1L << (LAST - 64)) | (1L << (GROUP - 64)) | (1L << (ALL - 64)) | (1L << (ROWS - 64)) | (1L << (VIEW - 64)) | (1L << (HAVING - 64)) | (1L << (ROLLUP - 64)) | (1L << (TOLABEL - 64)) | (1L << (OFFSET - 64)) | (1L << (DATA - 64)) | (1L << (CATEGORY - 64)) | (1L << (AT - 64)) | (1L << (ABOVE - 64)) | (1L << (BELOW - 64)) | (1L << (ABOVE_OR_BELOW - 64)) | (1L << (SECURITY_ENFORCED - 64)) | (1L << (REFERENCE - 64)) | (1L << (CUBE - 64)) | (1L << (FORMAT - 64)) | (1L << (TRACKING - 64)) | (1L << (VIEWSTAT - 64)) | (1L << (CUSTOM - 64)) | (1L << (STANDARD - 64)) | (1L << (CALENDAR_MONTH - 64)) | (1L << (CALENDAR_QUARTER - 64)) | (1L << (CALENDAR_YEAR - 64)) | (1L << (DAY_IN_MONTH - 64)) | (1L << (DAY_IN_WEEK - 64)) | (1L << (DAY_IN_YEAR - 64)) | (1L << (DAY_ONLY - 64)) | (1L << (FISCAL_MONTH - 64)) | (1L << (FISCAL_QUARTER - 64)) | (1L << (FISCAL_YEAR - 64)) | (1L << (HOUR_IN_DAY - 64)) | (1L << (WEEK_IN_MONTH - 64)) | (1L << (WEEK_IN_YEAR - 64)) | (1L << (CONVERT_TIMEZONE - 64)) | (1L << (YESTERDAY - 64)) | (1L << (TODAY - 64)) | (1L << (TOMORROW - 64)) | (1L << (LAST_WEEK - 64)) | (1L << (THIS_WEEK - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (NEXT_WEEK - 128)) | (1L << (LAST_MONTH - 128)) | (1L << (THIS_MONTH - 128)) | (1L << (NEXT_MONTH - 128)) | (1L << (LAST_90_DAYS - 128)) | (1L << (NEXT_90_DAYS - 128)) | (1L << (LAST_N_DAYS_N - 128)) | (1L << (NEXT_N_DAYS_N - 128)) | (1L << (NEXT_N_WEEKS_N - 128)) | (1L << (LAST_N_WEEKS_N - 128)) | (1L << (NEXT_N_MONTHS_N - 128)) | (1L << (LAST_N_MONTHS_N - 128)) | (1L << (THIS_QUARTER - 128)) | (1L << (LAST_QUARTER - 128)) | (1L << (NEXT_QUARTER - 128)) | (1L << (NEXT_N_QUARTERS_N - 128)) | (1L << (LAST_N_QUARTERS_N - 128)) | (1L << (THIS_YEAR - 128)) | (1L << (LAST_YEAR - 128)) | (1L << (NEXT_YEAR - 128)) | (1L << (NEXT_N_YEARS_N - 128)) | (1L << (LAST_N_YEARS_N - 128)) | (1L << (THIS_FISCAL_QUARTER - 128)) | (1L << (LAST_FISCAL_QUARTER - 128)) | (1L << (NEXT_FISCAL_QUARTER - 128)) | (1L << (NEXT_N_FISCAL_QUARTERS_N - 128)) | (1L << (LAST_N_FISCAL_QUARTERS_N - 128)) | (1L << (THIS_FISCAL_YEAR - 128)) | (1L << (LAST_FISCAL_YEAR - 128)) | (1L << (NEXT_FISCAL_YEAR - 128)) | (1L << (NEXT_N_FISCAL_YEARS_N - 128)) | (1L << (LAST_N_FISCAL_YEARS_N - 128)) | (1L << (FIND - 128)) | (1L << (EMAIL - 128)) | (1L << (NAME - 128)) | (1L << (PHONE - 128)) | (1L << (SIDEBAR - 128)) | (1L << (FIELDS - 128)) | (1L << (METADATA - 128)) | (1L << (PRICEBOOKID - 128)) | (1L << (NETWORK - 128)) | (1L << (SNIPPET - 128)) | (1L << (TARGET_LENGTH - 128)) | (1L << (DIVISION - 128)) | (1L << (RETURNING - 128)) | (1L << (LISTVIEW - 128)))) != 0) || _la==ATSIGN || _la==Identifier) {
				{
				{
				setState(380);
				interfaceMethodDeclaration();
				}
				}
				setState(385);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(386);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassBodyDeclarationContext extends ParserRuleContext {
		public TerminalNode SEMI() { return getToken(ApexParser.SEMI, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode STATIC() { return getToken(ApexParser.STATIC, 0); }
		public MemberDeclarationContext memberDeclaration() {
			return getRuleContext(MemberDeclarationContext.class,0);
		}
		public List<ModifierContext> modifier() {
			return getRuleContexts(ModifierContext.class);
		}
		public ModifierContext modifier(int i) {
			return getRuleContext(ModifierContext.class,i);
		}
		public ClassBodyDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classBodyDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterClassBodyDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitClassBodyDeclaration(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitClassBodyDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ClassBodyDeclarationContext classBodyDeclaration() throws RecognitionException {
		ClassBodyDeclarationContext _localctx = new ClassBodyDeclarationContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_classBodyDeclaration);
		int _la;
		try {
			int _alt;
			setState(400);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(388);
				match(SEMI);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(390);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==STATIC) {
					{
					setState(389);
					match(STATIC);
					}
				}

				setState(392);
				block();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(396);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(393);
						modifier();
						}
						} 
					}
					setState(398);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
				}
				setState(399);
				memberDeclaration();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ModifierContext extends ParserRuleContext {
		public AnnotationContext annotation() {
			return getRuleContext(AnnotationContext.class,0);
		}
		public TerminalNode GLOBAL() { return getToken(ApexParser.GLOBAL, 0); }
		public TerminalNode PUBLIC() { return getToken(ApexParser.PUBLIC, 0); }
		public TerminalNode PROTECTED() { return getToken(ApexParser.PROTECTED, 0); }
		public TerminalNode PRIVATE() { return getToken(ApexParser.PRIVATE, 0); }
		public TerminalNode TRANSIENT() { return getToken(ApexParser.TRANSIENT, 0); }
		public TerminalNode STATIC() { return getToken(ApexParser.STATIC, 0); }
		public TerminalNode ABSTRACT() { return getToken(ApexParser.ABSTRACT, 0); }
		public TerminalNode FINAL() { return getToken(ApexParser.FINAL, 0); }
		public TerminalNode WEBSERVICE() { return getToken(ApexParser.WEBSERVICE, 0); }
		public TerminalNode OVERRIDE() { return getToken(ApexParser.OVERRIDE, 0); }
		public TerminalNode VIRTUAL() { return getToken(ApexParser.VIRTUAL, 0); }
		public TerminalNode TESTMETHOD() { return getToken(ApexParser.TESTMETHOD, 0); }
		public TerminalNode WITH() { return getToken(ApexParser.WITH, 0); }
		public TerminalNode SHARING() { return getToken(ApexParser.SHARING, 0); }
		public TerminalNode WITHOUT() { return getToken(ApexParser.WITHOUT, 0); }
		public TerminalNode INHERITED() { return getToken(ApexParser.INHERITED, 0); }
		public ModifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_modifier; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterModifier(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitModifier(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitModifier(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ModifierContext modifier() throws RecognitionException {
		ModifierContext _localctx = new ModifierContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_modifier);
		try {
			setState(421);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ATSIGN:
				enterOuterAlt(_localctx, 1);
				{
				setState(402);
				annotation();
				}
				break;
			case GLOBAL:
				enterOuterAlt(_localctx, 2);
				{
				setState(403);
				match(GLOBAL);
				}
				break;
			case PUBLIC:
				enterOuterAlt(_localctx, 3);
				{
				setState(404);
				match(PUBLIC);
				}
				break;
			case PROTECTED:
				enterOuterAlt(_localctx, 4);
				{
				setState(405);
				match(PROTECTED);
				}
				break;
			case PRIVATE:
				enterOuterAlt(_localctx, 5);
				{
				setState(406);
				match(PRIVATE);
				}
				break;
			case TRANSIENT:
				enterOuterAlt(_localctx, 6);
				{
				setState(407);
				match(TRANSIENT);
				}
				break;
			case STATIC:
				enterOuterAlt(_localctx, 7);
				{
				setState(408);
				match(STATIC);
				}
				break;
			case ABSTRACT:
				enterOuterAlt(_localctx, 8);
				{
				setState(409);
				match(ABSTRACT);
				}
				break;
			case FINAL:
				enterOuterAlt(_localctx, 9);
				{
				setState(410);
				match(FINAL);
				}
				break;
			case WEBSERVICE:
				enterOuterAlt(_localctx, 10);
				{
				setState(411);
				match(WEBSERVICE);
				}
				break;
			case OVERRIDE:
				enterOuterAlt(_localctx, 11);
				{
				setState(412);
				match(OVERRIDE);
				}
				break;
			case VIRTUAL:
				enterOuterAlt(_localctx, 12);
				{
				setState(413);
				match(VIRTUAL);
				}
				break;
			case TESTMETHOD:
				enterOuterAlt(_localctx, 13);
				{
				setState(414);
				match(TESTMETHOD);
				}
				break;
			case WITH:
				enterOuterAlt(_localctx, 14);
				{
				setState(415);
				match(WITH);
				setState(416);
				match(SHARING);
				}
				break;
			case WITHOUT:
				enterOuterAlt(_localctx, 15);
				{
				setState(417);
				match(WITHOUT);
				setState(418);
				match(SHARING);
				}
				break;
			case INHERITED:
				enterOuterAlt(_localctx, 16);
				{
				setState(419);
				match(INHERITED);
				setState(420);
				match(SHARING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MemberDeclarationContext extends ParserRuleContext {
		public MethodDeclarationContext methodDeclaration() {
			return getRuleContext(MethodDeclarationContext.class,0);
		}
		public FieldDeclarationContext fieldDeclaration() {
			return getRuleContext(FieldDeclarationContext.class,0);
		}
		public ConstructorDeclarationContext constructorDeclaration() {
			return getRuleContext(ConstructorDeclarationContext.class,0);
		}
		public InterfaceDeclarationContext interfaceDeclaration() {
			return getRuleContext(InterfaceDeclarationContext.class,0);
		}
		public ClassDeclarationContext classDeclaration() {
			return getRuleContext(ClassDeclarationContext.class,0);
		}
		public EnumDeclarationContext enumDeclaration() {
			return getRuleContext(EnumDeclarationContext.class,0);
		}
		public PropertyDeclarationContext propertyDeclaration() {
			return getRuleContext(PropertyDeclarationContext.class,0);
		}
		public MemberDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_memberDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterMemberDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitMemberDeclaration(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitMemberDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MemberDeclarationContext memberDeclaration() throws RecognitionException {
		MemberDeclarationContext _localctx = new MemberDeclarationContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_memberDeclaration);
		try {
			setState(430);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(423);
				methodDeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(424);
				fieldDeclaration();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(425);
				constructorDeclaration();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(426);
				interfaceDeclaration();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(427);
				classDeclaration();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(428);
				enumDeclaration();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(429);
				propertyDeclaration();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MethodDeclarationContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public FormalParametersContext formalParameters() {
			return getRuleContext(FormalParametersContext.class,0);
		}
		public TypeRefContext typeRef() {
			return getRuleContext(TypeRefContext.class,0);
		}
		public TerminalNode VOID() { return getToken(ApexParser.VOID, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(ApexParser.SEMI, 0); }
		public MethodDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_methodDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterMethodDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitMethodDeclaration(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitMethodDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MethodDeclarationContext methodDeclaration() throws RecognitionException {
		MethodDeclarationContext _localctx = new MethodDeclarationContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_methodDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(434);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case AFTER:
			case BEFORE:
			case GET:
			case INHERITED:
			case INSTANCEOF:
			case SET:
			case SHARING:
			case SWITCH:
			case TRANSIENT:
			case TRIGGER:
			case WHEN:
			case WITH:
			case WITHOUT:
			case LIST:
			case MAP:
			case SELECT:
			case COUNT:
			case FROM:
			case AS:
			case USING:
			case SCOPE:
			case WHERE:
			case ORDER:
			case BY:
			case LIMIT:
			case SOQLAND:
			case SOQLOR:
			case NOT:
			case AVG:
			case COUNT_DISTINCT:
			case MIN:
			case MAX:
			case SUM:
			case TYPEOF:
			case END:
			case THEN:
			case LIKE:
			case IN:
			case INCLUDES:
			case EXCLUDES:
			case ASC:
			case DESC:
			case NULLS:
			case FIRST:
			case LAST:
			case GROUP:
			case ALL:
			case ROWS:
			case VIEW:
			case HAVING:
			case ROLLUP:
			case TOLABEL:
			case OFFSET:
			case DATA:
			case CATEGORY:
			case AT:
			case ABOVE:
			case BELOW:
			case ABOVE_OR_BELOW:
			case SECURITY_ENFORCED:
			case REFERENCE:
			case CUBE:
			case FORMAT:
			case TRACKING:
			case VIEWSTAT:
			case CUSTOM:
			case STANDARD:
			case CALENDAR_MONTH:
			case CALENDAR_QUARTER:
			case CALENDAR_YEAR:
			case DAY_IN_MONTH:
			case DAY_IN_WEEK:
			case DAY_IN_YEAR:
			case DAY_ONLY:
			case FISCAL_MONTH:
			case FISCAL_QUARTER:
			case FISCAL_YEAR:
			case HOUR_IN_DAY:
			case WEEK_IN_MONTH:
			case WEEK_IN_YEAR:
			case CONVERT_TIMEZONE:
			case YESTERDAY:
			case TODAY:
			case TOMORROW:
			case LAST_WEEK:
			case THIS_WEEK:
			case NEXT_WEEK:
			case LAST_MONTH:
			case THIS_MONTH:
			case NEXT_MONTH:
			case LAST_90_DAYS:
			case NEXT_90_DAYS:
			case LAST_N_DAYS_N:
			case NEXT_N_DAYS_N:
			case NEXT_N_WEEKS_N:
			case LAST_N_WEEKS_N:
			case NEXT_N_MONTHS_N:
			case LAST_N_MONTHS_N:
			case THIS_QUARTER:
			case LAST_QUARTER:
			case NEXT_QUARTER:
			case NEXT_N_QUARTERS_N:
			case LAST_N_QUARTERS_N:
			case THIS_YEAR:
			case LAST_YEAR:
			case NEXT_YEAR:
			case NEXT_N_YEARS_N:
			case LAST_N_YEARS_N:
			case THIS_FISCAL_QUARTER:
			case LAST_FISCAL_QUARTER:
			case NEXT_FISCAL_QUARTER:
			case NEXT_N_FISCAL_QUARTERS_N:
			case LAST_N_FISCAL_QUARTERS_N:
			case THIS_FISCAL_YEAR:
			case LAST_FISCAL_YEAR:
			case NEXT_FISCAL_YEAR:
			case NEXT_N_FISCAL_YEARS_N:
			case LAST_N_FISCAL_YEARS_N:
			case FIND:
			case EMAIL:
			case NAME:
			case PHONE:
			case SIDEBAR:
			case FIELDS:
			case METADATA:
			case PRICEBOOKID:
			case NETWORK:
			case SNIPPET:
			case TARGET_LENGTH:
			case DIVISION:
			case RETURNING:
			case LISTVIEW:
			case Identifier:
				{
				setState(432);
				typeRef();
				}
				break;
			case VOID:
				{
				setState(433);
				match(VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(436);
			id();
			setState(437);
			formalParameters();
			setState(440);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LBRACE:
				{
				setState(438);
				block();
				}
				break;
			case SEMI:
				{
				setState(439);
				match(SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstructorDeclarationContext extends ParserRuleContext {
		public QualifiedNameContext qualifiedName() {
			return getRuleContext(QualifiedNameContext.class,0);
		}
		public FormalParametersContext formalParameters() {
			return getRuleContext(FormalParametersContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ConstructorDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constructorDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterConstructorDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitConstructorDeclaration(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitConstructorDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ConstructorDeclarationContext constructorDeclaration() throws RecognitionException {
		ConstructorDeclarationContext _localctx = new ConstructorDeclarationContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_constructorDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(442);
			qualifiedName();
			setState(443);
			formalParameters();
			setState(444);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldDeclarationContext extends ParserRuleContext {
		public TypeRefContext typeRef() {
			return getRuleContext(TypeRefContext.class,0);
		}
		public VariableDeclaratorsContext variableDeclarators() {
			return getRuleContext(VariableDeclaratorsContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(ApexParser.SEMI, 0); }
		public FieldDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterFieldDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitFieldDeclaration(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitFieldDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FieldDeclarationContext fieldDeclaration() throws RecognitionException {
		FieldDeclarationContext _localctx = new FieldDeclarationContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_fieldDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(446);
			typeRef();
			setState(447);
			variableDeclarators();
			setState(448);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PropertyDeclarationContext extends ParserRuleContext {
		public TypeRefContext typeRef() {
			return getRuleContext(TypeRefContext.class,0);
		}
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TerminalNode LBRACE() { return getToken(ApexParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(ApexParser.RBRACE, 0); }
		public List<PropertyBlockContext> propertyBlock() {
			return getRuleContexts(PropertyBlockContext.class);
		}
		public PropertyBlockContext propertyBlock(int i) {
			return getRuleContext(PropertyBlockContext.class,i);
		}
		public PropertyDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_propertyDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterPropertyDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitPropertyDeclaration(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitPropertyDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PropertyDeclarationContext propertyDeclaration() throws RecognitionException {
		PropertyDeclarationContext _localctx = new PropertyDeclarationContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_propertyDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(450);
			typeRef();
			setState(451);
			id();
			setState(452);
			match(LBRACE);
			setState(456);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ABSTRACT) | (1L << FINAL) | (1L << GET) | (1L << GLOBAL) | (1L << INHERITED) | (1L << OVERRIDE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << SET) | (1L << STATIC) | (1L << TESTMETHOD) | (1L << TRANSIENT) | (1L << VIRTUAL) | (1L << WEBSERVICE) | (1L << WITH) | (1L << WITHOUT))) != 0) || _la==ATSIGN) {
				{
				{
				setState(453);
				propertyBlock();
				}
				}
				setState(458);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(459);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InterfaceMethodDeclarationContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public FormalParametersContext formalParameters() {
			return getRuleContext(FormalParametersContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(ApexParser.SEMI, 0); }
		public TypeRefContext typeRef() {
			return getRuleContext(TypeRefContext.class,0);
		}
		public TerminalNode VOID() { return getToken(ApexParser.VOID, 0); }
		public List<ModifierContext> modifier() {
			return getRuleContexts(ModifierContext.class);
		}
		public ModifierContext modifier(int i) {
			return getRuleContext(ModifierContext.class,i);
		}
		public InterfaceMethodDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_interfaceMethodDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterInterfaceMethodDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitInterfaceMethodDeclaration(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitInterfaceMethodDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final InterfaceMethodDeclarationContext interfaceMethodDeclaration() throws RecognitionException {
		InterfaceMethodDeclarationContext _localctx = new InterfaceMethodDeclarationContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_interfaceMethodDeclaration);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(464);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(461);
					modifier();
					}
					} 
				}
				setState(466);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
			}
			setState(469);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case AFTER:
			case BEFORE:
			case GET:
			case INHERITED:
			case INSTANCEOF:
			case SET:
			case SHARING:
			case SWITCH:
			case TRANSIENT:
			case TRIGGER:
			case WHEN:
			case WITH:
			case WITHOUT:
			case LIST:
			case MAP:
			case SELECT:
			case COUNT:
			case FROM:
			case AS:
			case USING:
			case SCOPE:
			case WHERE:
			case ORDER:
			case BY:
			case LIMIT:
			case SOQLAND:
			case SOQLOR:
			case NOT:
			case AVG:
			case COUNT_DISTINCT:
			case MIN:
			case MAX:
			case SUM:
			case TYPEOF:
			case END:
			case THEN:
			case LIKE:
			case IN:
			case INCLUDES:
			case EXCLUDES:
			case ASC:
			case DESC:
			case NULLS:
			case FIRST:
			case LAST:
			case GROUP:
			case ALL:
			case ROWS:
			case VIEW:
			case HAVING:
			case ROLLUP:
			case TOLABEL:
			case OFFSET:
			case DATA:
			case CATEGORY:
			case AT:
			case ABOVE:
			case BELOW:
			case ABOVE_OR_BELOW:
			case SECURITY_ENFORCED:
			case REFERENCE:
			case CUBE:
			case FORMAT:
			case TRACKING:
			case VIEWSTAT:
			case CUSTOM:
			case STANDARD:
			case CALENDAR_MONTH:
			case CALENDAR_QUARTER:
			case CALENDAR_YEAR:
			case DAY_IN_MONTH:
			case DAY_IN_WEEK:
			case DAY_IN_YEAR:
			case DAY_ONLY:
			case FISCAL_MONTH:
			case FISCAL_QUARTER:
			case FISCAL_YEAR:
			case HOUR_IN_DAY:
			case WEEK_IN_MONTH:
			case WEEK_IN_YEAR:
			case CONVERT_TIMEZONE:
			case YESTERDAY:
			case TODAY:
			case TOMORROW:
			case LAST_WEEK:
			case THIS_WEEK:
			case NEXT_WEEK:
			case LAST_MONTH:
			case THIS_MONTH:
			case NEXT_MONTH:
			case LAST_90_DAYS:
			case NEXT_90_DAYS:
			case LAST_N_DAYS_N:
			case NEXT_N_DAYS_N:
			case NEXT_N_WEEKS_N:
			case LAST_N_WEEKS_N:
			case NEXT_N_MONTHS_N:
			case LAST_N_MONTHS_N:
			case THIS_QUARTER:
			case LAST_QUARTER:
			case NEXT_QUARTER:
			case NEXT_N_QUARTERS_N:
			case LAST_N_QUARTERS_N:
			case THIS_YEAR:
			case LAST_YEAR:
			case NEXT_YEAR:
			case NEXT_N_YEARS_N:
			case LAST_N_YEARS_N:
			case THIS_FISCAL_QUARTER:
			case LAST_FISCAL_QUARTER:
			case NEXT_FISCAL_QUARTER:
			case NEXT_N_FISCAL_QUARTERS_N:
			case LAST_N_FISCAL_QUARTERS_N:
			case THIS_FISCAL_YEAR:
			case LAST_FISCAL_YEAR:
			case NEXT_FISCAL_YEAR:
			case NEXT_N_FISCAL_YEARS_N:
			case LAST_N_FISCAL_YEARS_N:
			case FIND:
			case EMAIL:
			case NAME:
			case PHONE:
			case SIDEBAR:
			case FIELDS:
			case METADATA:
			case PRICEBOOKID:
			case NETWORK:
			case SNIPPET:
			case TARGET_LENGTH:
			case DIVISION:
			case RETURNING:
			case LISTVIEW:
			case Identifier:
				{
				setState(467);
				typeRef();
				}
				break;
			case VOID:
				{
				setState(468);
				match(VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(471);
			id();
			setState(472);
			formalParameters();
			setState(473);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableDeclaratorsContext extends ParserRuleContext {
		public List<VariableDeclaratorContext> variableDeclarator() {
			return getRuleContexts(VariableDeclaratorContext.class);
		}
		public VariableDeclaratorContext variableDeclarator(int i) {
			return getRuleContext(VariableDeclaratorContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(ApexParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ApexParser.COMMA, i);
		}
		public VariableDeclaratorsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclarators; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterVariableDeclarators(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitVariableDeclarators(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitVariableDeclarators(this);
			else return visitor.visitChildren(this);
		}
	}

	public final VariableDeclaratorsContext variableDeclarators() throws RecognitionException {
		VariableDeclaratorsContext _localctx = new VariableDeclaratorsContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_variableDeclarators);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(475);
			variableDeclarator();
			setState(480);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(476);
				match(COMMA);
				setState(477);
				variableDeclarator();
				}
				}
				setState(482);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VariableDeclaratorContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TerminalNode ASSIGN() { return getToken(ApexParser.ASSIGN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public VariableDeclaratorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclarator; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterVariableDeclarator(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitVariableDeclarator(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitVariableDeclarator(this);
			else return visitor.visitChildren(this);
		}
	}

	public final VariableDeclaratorContext variableDeclarator() throws RecognitionException {
		VariableDeclaratorContext _localctx = new VariableDeclaratorContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_variableDeclarator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(483);
			id();
			setState(486);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ASSIGN) {
				{
				setState(484);
				match(ASSIGN);
				setState(485);
				expression(0);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayInitializerContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(ApexParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(ApexParser.RBRACE, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(ApexParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ApexParser.COMMA, i);
		}
		public ArrayInitializerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayInitializer; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterArrayInitializer(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitArrayInitializer(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitArrayInitializer(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ArrayInitializerContext arrayInitializer() throws RecognitionException {
		ArrayInitializerContext _localctx = new ArrayInitializerContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_arrayInitializer);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(488);
			match(LBRACE);
			setState(500);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << AFTER) | (1L << BEFORE) | (1L << GET) | (1L << INHERITED) | (1L << INSTANCEOF) | (1L << NEW) | (1L << NULL) | (1L << SET) | (1L << SHARING) | (1L << SUPER) | (1L << SWITCH) | (1L << THIS) | (1L << TRANSIENT) | (1L << TRIGGER) | (1L << WHEN) | (1L << WITH) | (1L << WITHOUT) | (1L << LIST) | (1L << MAP) | (1L << SELECT) | (1L << COUNT) | (1L << FROM) | (1L << AS) | (1L << USING) | (1L << SCOPE) | (1L << WHERE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ORDER - 64)) | (1L << (BY - 64)) | (1L << (LIMIT - 64)) | (1L << (SOQLAND - 64)) | (1L << (SOQLOR - 64)) | (1L << (NOT - 64)) | (1L << (AVG - 64)) | (1L << (COUNT_DISTINCT - 64)) | (1L << (MIN - 64)) | (1L << (MAX - 64)) | (1L << (SUM - 64)) | (1L << (TYPEOF - 64)) | (1L << (END - 64)) | (1L << (THEN - 64)) | (1L << (LIKE - 64)) | (1L << (IN - 64)) | (1L << (INCLUDES - 64)) | (1L << (EXCLUDES - 64)) | (1L << (ASC - 64)) | (1L << (DESC - 64)) | (1L << (NULLS - 64)) | (1L << (FIRST - 64)) | (1L << (LAST - 64)) | (1L << (GROUP - 64)) | (1L << (ALL - 64)) | (1L << (ROWS - 64)) | (1L << (VIEW - 64)) | (1L << (HAVING - 64)) | (1L << (ROLLUP - 64)) | (1L << (TOLABEL - 64)) | (1L << (OFFSET - 64)) | (1L << (DATA - 64)) | (1L << (CATEGORY - 64)) | (1L << (AT - 64)) | (1L << (ABOVE - 64)) | (1L << (BELOW - 64)) | (1L << (ABOVE_OR_BELOW - 64)) | (1L << (SECURITY_ENFORCED - 64)) | (1L << (REFERENCE - 64)) | (1L << (CUBE - 64)) | (1L << (FORMAT - 64)) | (1L << (TRACKING - 64)) | (1L << (VIEWSTAT - 64)) | (1L << (CUSTOM - 64)) | (1L << (STANDARD - 64)) | (1L << (CALENDAR_MONTH - 64)) | (1L << (CALENDAR_QUARTER - 64)) | (1L << (CALENDAR_YEAR - 64)) | (1L << (DAY_IN_MONTH - 64)) | (1L << (DAY_IN_WEEK - 64)) | (1L << (DAY_IN_YEAR - 64)) | (1L << (DAY_ONLY - 64)) | (1L << (FISCAL_MONTH - 64)) | (1L << (FISCAL_QUARTER - 64)) | (1L << (FISCAL_YEAR - 64)) | (1L << (HOUR_IN_DAY - 64)) | (1L << (WEEK_IN_MONTH - 64)) | (1L << (WEEK_IN_YEAR - 64)) | (1L << (CONVERT_TIMEZONE - 64)) | (1L << (YESTERDAY - 64)) | (1L << (TODAY - 64)) | (1L << (TOMORROW - 64)) | (1L << (LAST_WEEK - 64)) | (1L << (THIS_WEEK - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (NEXT_WEEK - 128)) | (1L << (LAST_MONTH - 128)) | (1L << (THIS_MONTH - 128)) | (1L << (NEXT_MONTH - 128)) | (1L << (LAST_90_DAYS - 128)) | (1L << (NEXT_90_DAYS - 128)) | (1L << (LAST_N_DAYS_N - 128)) | (1L << (NEXT_N_DAYS_N - 128)) | (1L << (NEXT_N_WEEKS_N - 128)) | (1L << (LAST_N_WEEKS_N - 128)) | (1L << (NEXT_N_MONTHS_N - 128)) | (1L << (LAST_N_MONTHS_N - 128)) | (1L << (THIS_QUARTER - 128)) | (1L << (LAST_QUARTER - 128)) | (1L << (NEXT_QUARTER - 128)) | (1L << (NEXT_N_QUARTERS_N - 128)) | (1L << (LAST_N_QUARTERS_N - 128)) | (1L << (THIS_YEAR - 128)) | (1L << (LAST_YEAR - 128)) | (1L << (NEXT_YEAR - 128)) | (1L << (NEXT_N_YEARS_N - 128)) | (1L << (LAST_N_YEARS_N - 128)) | (1L << (THIS_FISCAL_QUARTER - 128)) | (1L << (LAST_FISCAL_QUARTER - 128)) | (1L << (NEXT_FISCAL_QUARTER - 128)) | (1L << (NEXT_N_FISCAL_QUARTERS_N - 128)) | (1L << (LAST_N_FISCAL_QUARTERS_N - 128)) | (1L << (THIS_FISCAL_YEAR - 128)) | (1L << (LAST_FISCAL_YEAR - 128)) | (1L << (NEXT_FISCAL_YEAR - 128)) | (1L << (NEXT_N_FISCAL_YEARS_N - 128)) | (1L << (LAST_N_FISCAL_YEARS_N - 128)) | (1L << (FIND - 128)) | (1L << (EMAIL - 128)) | (1L << (NAME - 128)) | (1L << (PHONE - 128)) | (1L << (SIDEBAR - 128)) | (1L << (FIELDS - 128)) | (1L << (METADATA - 128)) | (1L << (PRICEBOOKID - 128)) | (1L << (NETWORK - 128)) | (1L << (SNIPPET - 128)) | (1L << (TARGET_LENGTH - 128)) | (1L << (DIVISION - 128)) | (1L << (RETURNING - 128)) | (1L << (LISTVIEW - 128)) | (1L << (FindLiteral - 128)) | (1L << (IntegerLiteral - 128)) | (1L << (LongLiteral - 128)) | (1L << (NumberLiteral - 128)) | (1L << (BooleanLiteral - 128)) | (1L << (StringLiteral - 128)) | (1L << (LPAREN - 128)) | (1L << (LBRACK - 128)))) != 0) || ((((_la - 195)) & ~0x3f) == 0 && ((1L << (_la - 195)) & ((1L << (BANG - 195)) | (1L << (TILDE - 195)) | (1L << (INC - 195)) | (1L << (DEC - 195)) | (1L << (ADD - 195)) | (1L << (SUB - 195)) | (1L << (Identifier - 195)))) != 0)) {
				{
				setState(489);
				expression(0);
				setState(494);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,25,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(490);
						match(COMMA);
						setState(491);
						expression(0);
						}
						} 
					}
					setState(496);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,25,_ctx);
				}
				setState(498);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(497);
					match(COMMA);
					}
				}

				}
			}

			setState(502);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeRefContext extends ParserRuleContext {
		public List<TypeNameContext> typeName() {
			return getRuleContexts(TypeNameContext.class);
		}
		public TypeNameContext typeName(int i) {
			return getRuleContext(TypeNameContext.class,i);
		}
		public ArraySubscriptsContext arraySubscripts() {
			return getRuleContext(ArraySubscriptsContext.class,0);
		}
		public List<TerminalNode> DOT() { return getTokens(ApexParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(ApexParser.DOT, i);
		}
		public TypeRefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeRef; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterTypeRef(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitTypeRef(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitTypeRef(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TypeRefContext typeRef() throws RecognitionException {
		TypeRefContext _localctx = new TypeRefContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_typeRef);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(504);
			typeName();
			setState(509);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,28,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(505);
					match(DOT);
					setState(506);
					typeName();
					}
					} 
				}
				setState(511);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,28,_ctx);
			}
			setState(512);
			arraySubscripts();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArraySubscriptsContext extends ParserRuleContext {
		public List<TerminalNode> LBRACK() { return getTokens(ApexParser.LBRACK); }
		public TerminalNode LBRACK(int i) {
			return getToken(ApexParser.LBRACK, i);
		}
		public List<TerminalNode> RBRACK() { return getTokens(ApexParser.RBRACK); }
		public TerminalNode RBRACK(int i) {
			return getToken(ApexParser.RBRACK, i);
		}
		public ArraySubscriptsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arraySubscripts; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterArraySubscripts(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitArraySubscripts(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitArraySubscripts(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ArraySubscriptsContext arraySubscripts() throws RecognitionException {
		ArraySubscriptsContext _localctx = new ArraySubscriptsContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_arraySubscripts);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(518);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,29,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(514);
					match(LBRACK);
					setState(515);
					match(RBRACK);
					}
					} 
				}
				setState(520);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,29,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeNameContext extends ParserRuleContext {
		public TerminalNode LIST() { return getToken(ApexParser.LIST, 0); }
		public TypeArgumentsContext typeArguments() {
			return getRuleContext(TypeArgumentsContext.class,0);
		}
		public TerminalNode SET() { return getToken(ApexParser.SET, 0); }
		public TerminalNode MAP() { return getToken(ApexParser.MAP, 0); }
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TypeNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeName; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterTypeName(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitTypeName(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitTypeName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TypeNameContext typeName() throws RecognitionException {
		TypeNameContext _localctx = new TypeNameContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_typeName);
		try {
			setState(537);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,34,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(521);
				match(LIST);
				setState(523);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
				case 1:
					{
					setState(522);
					typeArguments();
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(525);
				match(SET);
				setState(527);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,31,_ctx) ) {
				case 1:
					{
					setState(526);
					typeArguments();
					}
					break;
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(529);
				match(MAP);
				setState(531);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,32,_ctx) ) {
				case 1:
					{
					setState(530);
					typeArguments();
					}
					break;
				}
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(533);
				id();
				setState(535);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
				case 1:
					{
					setState(534);
					typeArguments();
					}
					break;
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeArgumentsContext extends ParserRuleContext {
		public TerminalNode LT() { return getToken(ApexParser.LT, 0); }
		public TypeListContext typeList() {
			return getRuleContext(TypeListContext.class,0);
		}
		public TerminalNode GT() { return getToken(ApexParser.GT, 0); }
		public TypeArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeArguments; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterTypeArguments(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitTypeArguments(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitTypeArguments(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TypeArgumentsContext typeArguments() throws RecognitionException {
		TypeArgumentsContext _localctx = new TypeArgumentsContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_typeArguments);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(539);
			match(LT);
			setState(540);
			typeList();
			setState(541);
			match(GT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormalParametersContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(ApexParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(ApexParser.RPAREN, 0); }
		public FormalParameterListContext formalParameterList() {
			return getRuleContext(FormalParameterListContext.class,0);
		}
		public FormalParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParameters; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterFormalParameters(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitFormalParameters(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitFormalParameters(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FormalParametersContext formalParameters() throws RecognitionException {
		FormalParametersContext _localctx = new FormalParametersContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_formalParameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(543);
			match(LPAREN);
			setState(545);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ABSTRACT) | (1L << AFTER) | (1L << BEFORE) | (1L << FINAL) | (1L << GET) | (1L << GLOBAL) | (1L << INHERITED) | (1L << INSTANCEOF) | (1L << OVERRIDE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << SET) | (1L << SHARING) | (1L << STATIC) | (1L << SWITCH) | (1L << TESTMETHOD) | (1L << TRANSIENT) | (1L << TRIGGER) | (1L << VIRTUAL) | (1L << WEBSERVICE) | (1L << WHEN) | (1L << WITH) | (1L << WITHOUT) | (1L << LIST) | (1L << MAP) | (1L << SELECT) | (1L << COUNT) | (1L << FROM) | (1L << AS) | (1L << USING) | (1L << SCOPE) | (1L << WHERE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ORDER - 64)) | (1L << (BY - 64)) | (1L << (LIMIT - 64)) | (1L << (SOQLAND - 64)) | (1L << (SOQLOR - 64)) | (1L << (NOT - 64)) | (1L << (AVG - 64)) | (1L << (COUNT_DISTINCT - 64)) | (1L << (MIN - 64)) | (1L << (MAX - 64)) | (1L << (SUM - 64)) | (1L << (TYPEOF - 64)) | (1L << (END - 64)) | (1L << (THEN - 64)) | (1L << (LIKE - 64)) | (1L << (IN - 64)) | (1L << (INCLUDES - 64)) | (1L << (EXCLUDES - 64)) | (1L << (ASC - 64)) | (1L << (DESC - 64)) | (1L << (NULLS - 64)) | (1L << (FIRST - 64)) | (1L << (LAST - 64)) | (1L << (GROUP - 64)) | (1L << (ALL - 64)) | (1L << (ROWS - 64)) | (1L << (VIEW - 64)) | (1L << (HAVING - 64)) | (1L << (ROLLUP - 64)) | (1L << (TOLABEL - 64)) | (1L << (OFFSET - 64)) | (1L << (DATA - 64)) | (1L << (CATEGORY - 64)) | (1L << (AT - 64)) | (1L << (ABOVE - 64)) | (1L << (BELOW - 64)) | (1L << (ABOVE_OR_BELOW - 64)) | (1L << (SECURITY_ENFORCED - 64)) | (1L << (REFERENCE - 64)) | (1L << (CUBE - 64)) | (1L << (FORMAT - 64)) | (1L << (TRACKING - 64)) | (1L << (VIEWSTAT - 64)) | (1L << (CUSTOM - 64)) | (1L << (STANDARD - 64)) | (1L << (CALENDAR_MONTH - 64)) | (1L << (CALENDAR_QUARTER - 64)) | (1L << (CALENDAR_YEAR - 64)) | (1L << (DAY_IN_MONTH - 64)) | (1L << (DAY_IN_WEEK - 64)) | (1L << (DAY_IN_YEAR - 64)) | (1L << (DAY_ONLY - 64)) | (1L << (FISCAL_MONTH - 64)) | (1L << (FISCAL_QUARTER - 64)) | (1L << (FISCAL_YEAR - 64)) | (1L << (HOUR_IN_DAY - 64)) | (1L << (WEEK_IN_MONTH - 64)) | (1L << (WEEK_IN_YEAR - 64)) | (1L << (CONVERT_TIMEZONE - 64)) | (1L << (YESTERDAY - 64)) | (1L << (TODAY - 64)) | (1L << (TOMORROW - 64)) | (1L << (LAST_WEEK - 64)) | (1L << (THIS_WEEK - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (NEXT_WEEK - 128)) | (1L << (LAST_MONTH - 128)) | (1L << (THIS_MONTH - 128)) | (1L << (NEXT_MONTH - 128)) | (1L << (LAST_90_DAYS - 128)) | (1L << (NEXT_90_DAYS - 128)) | (1L << (LAST_N_DAYS_N - 128)) | (1L << (NEXT_N_DAYS_N - 128)) | (1L << (NEXT_N_WEEKS_N - 128)) | (1L << (LAST_N_WEEKS_N - 128)) | (1L << (NEXT_N_MONTHS_N - 128)) | (1L << (LAST_N_MONTHS_N - 128)) | (1L << (THIS_QUARTER - 128)) | (1L << (LAST_QUARTER - 128)) | (1L << (NEXT_QUARTER - 128)) | (1L << (NEXT_N_QUARTERS_N - 128)) | (1L << (LAST_N_QUARTERS_N - 128)) | (1L << (THIS_YEAR - 128)) | (1L << (LAST_YEAR - 128)) | (1L << (NEXT_YEAR - 128)) | (1L << (NEXT_N_YEARS_N - 128)) | (1L << (LAST_N_YEARS_N - 128)) | (1L << (THIS_FISCAL_QUARTER - 128)) | (1L << (LAST_FISCAL_QUARTER - 128)) | (1L << (NEXT_FISCAL_QUARTER - 128)) | (1L << (NEXT_N_FISCAL_QUARTERS_N - 128)) | (1L << (LAST_N_FISCAL_QUARTERS_N - 128)) | (1L << (THIS_FISCAL_YEAR - 128)) | (1L << (LAST_FISCAL_YEAR - 128)) | (1L << (NEXT_FISCAL_YEAR - 128)) | (1L << (NEXT_N_FISCAL_YEARS_N - 128)) | (1L << (LAST_N_FISCAL_YEARS_N - 128)) | (1L << (FIND - 128)) | (1L << (EMAIL - 128)) | (1L << (NAME - 128)) | (1L << (PHONE - 128)) | (1L << (SIDEBAR - 128)) | (1L << (FIELDS - 128)) | (1L << (METADATA - 128)) | (1L << (PRICEBOOKID - 128)) | (1L << (NETWORK - 128)) | (1L << (SNIPPET - 128)) | (1L << (TARGET_LENGTH - 128)) | (1L << (DIVISION - 128)) | (1L << (RETURNING - 128)) | (1L << (LISTVIEW - 128)))) != 0) || _la==ATSIGN || _la==Identifier) {
				{
				setState(544);
				formalParameterList();
				}
			}

			setState(547);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormalParameterListContext extends ParserRuleContext {
		public List<FormalParameterContext> formalParameter() {
			return getRuleContexts(FormalParameterContext.class);
		}
		public FormalParameterContext formalParameter(int i) {
			return getRuleContext(FormalParameterContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(ApexParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ApexParser.COMMA, i);
		}
		public FormalParameterListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParameterList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterFormalParameterList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitFormalParameterList(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitFormalParameterList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FormalParameterListContext formalParameterList() throws RecognitionException {
		FormalParameterListContext _localctx = new FormalParameterListContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_formalParameterList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(549);
			formalParameter();
			setState(554);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(550);
				match(COMMA);
				setState(551);
				formalParameter();
				}
				}
				setState(556);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormalParameterContext extends ParserRuleContext {
		public TypeRefContext typeRef() {
			return getRuleContext(TypeRefContext.class,0);
		}
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public List<ModifierContext> modifier() {
			return getRuleContexts(ModifierContext.class);
		}
		public ModifierContext modifier(int i) {
			return getRuleContext(ModifierContext.class,i);
		}
		public FormalParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParameter; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterFormalParameter(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitFormalParameter(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitFormalParameter(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FormalParameterContext formalParameter() throws RecognitionException {
		FormalParameterContext _localctx = new FormalParameterContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_formalParameter);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(560);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,37,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(557);
					modifier();
					}
					} 
				}
				setState(562);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,37,_ctx);
			}
			setState(563);
			typeRef();
			setState(564);
			id();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QualifiedNameContext extends ParserRuleContext {
		public List<IdContext> id() {
			return getRuleContexts(IdContext.class);
		}
		public IdContext id(int i) {
			return getRuleContext(IdContext.class,i);
		}
		public List<TerminalNode> DOT() { return getTokens(ApexParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(ApexParser.DOT, i);
		}
		public QualifiedNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_qualifiedName; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterQualifiedName(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitQualifiedName(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitQualifiedName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final QualifiedNameContext qualifiedName() throws RecognitionException {
		QualifiedNameContext _localctx = new QualifiedNameContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_qualifiedName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(566);
			id();
			setState(571);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==DOT) {
				{
				{
				setState(567);
				match(DOT);
				setState(568);
				id();
				}
				}
				setState(573);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralContext extends ParserRuleContext {
		public TerminalNode IntegerLiteral() { return getToken(ApexParser.IntegerLiteral, 0); }
		public TerminalNode LongLiteral() { return getToken(ApexParser.LongLiteral, 0); }
		public TerminalNode NumberLiteral() { return getToken(ApexParser.NumberLiteral, 0); }
		public TerminalNode StringLiteral() { return getToken(ApexParser.StringLiteral, 0); }
		public TerminalNode BooleanLiteral() { return getToken(ApexParser.BooleanLiteral, 0); }
		public TerminalNode NULL() { return getToken(ApexParser.NULL, 0); }
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterLiteral(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitLiteral(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_literal);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(574);
			_la = _input.LA(1);
			if ( !(_la==NULL || ((((_la - 177)) & ~0x3f) == 0 && ((1L << (_la - 177)) & ((1L << (IntegerLiteral - 177)) | (1L << (LongLiteral - 177)) | (1L << (NumberLiteral - 177)) | (1L << (BooleanLiteral - 177)) | (1L << (StringLiteral - 177)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AnnotationContext extends ParserRuleContext {
		public TerminalNode ATSIGN() { return getToken(ApexParser.ATSIGN, 0); }
		public QualifiedNameContext qualifiedName() {
			return getRuleContext(QualifiedNameContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(ApexParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(ApexParser.RPAREN, 0); }
		public ElementValuePairsContext elementValuePairs() {
			return getRuleContext(ElementValuePairsContext.class,0);
		}
		public ElementValueContext elementValue() {
			return getRuleContext(ElementValueContext.class,0);
		}
		public AnnotationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotation; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterAnnotation(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitAnnotation(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitAnnotation(this);
			else return visitor.visitChildren(this);
		}
	}

	public final AnnotationContext annotation() throws RecognitionException {
		AnnotationContext _localctx = new AnnotationContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_annotation);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(576);
			match(ATSIGN);
			setState(577);
			qualifiedName();
			setState(584);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LPAREN) {
				{
				setState(578);
				match(LPAREN);
				setState(581);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,39,_ctx) ) {
				case 1:
					{
					setState(579);
					elementValuePairs();
					}
					break;
				case 2:
					{
					setState(580);
					elementValue();
					}
					break;
				}
				setState(583);
				match(RPAREN);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElementValuePairsContext extends ParserRuleContext {
		public List<ElementValuePairContext> elementValuePair() {
			return getRuleContexts(ElementValuePairContext.class);
		}
		public ElementValuePairContext elementValuePair(int i) {
			return getRuleContext(ElementValuePairContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(ApexParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ApexParser.COMMA, i);
		}
		public ElementValuePairsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementValuePairs; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterElementValuePairs(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitElementValuePairs(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitElementValuePairs(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ElementValuePairsContext elementValuePairs() throws RecognitionException {
		ElementValuePairsContext _localctx = new ElementValuePairsContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_elementValuePairs);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(586);
			elementValuePair();
			setState(593);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << AFTER) | (1L << BEFORE) | (1L << GET) | (1L << INHERITED) | (1L << INSTANCEOF) | (1L << SET) | (1L << SHARING) | (1L << SWITCH) | (1L << TRANSIENT) | (1L << TRIGGER) | (1L << WHEN) | (1L << WITH) | (1L << WITHOUT) | (1L << SELECT) | (1L << COUNT) | (1L << FROM) | (1L << AS) | (1L << USING) | (1L << SCOPE) | (1L << WHERE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ORDER - 64)) | (1L << (BY - 64)) | (1L << (LIMIT - 64)) | (1L << (SOQLAND - 64)) | (1L << (SOQLOR - 64)) | (1L << (NOT - 64)) | (1L << (AVG - 64)) | (1L << (COUNT_DISTINCT - 64)) | (1L << (MIN - 64)) | (1L << (MAX - 64)) | (1L << (SUM - 64)) | (1L << (TYPEOF - 64)) | (1L << (END - 64)) | (1L << (THEN - 64)) | (1L << (LIKE - 64)) | (1L << (IN - 64)) | (1L << (INCLUDES - 64)) | (1L << (EXCLUDES - 64)) | (1L << (ASC - 64)) | (1L << (DESC - 64)) | (1L << (NULLS - 64)) | (1L << (FIRST - 64)) | (1L << (LAST - 64)) | (1L << (GROUP - 64)) | (1L << (ALL - 64)) | (1L << (ROWS - 64)) | (1L << (VIEW - 64)) | (1L << (HAVING - 64)) | (1L << (ROLLUP - 64)) | (1L << (TOLABEL - 64)) | (1L << (OFFSET - 64)) | (1L << (DATA - 64)) | (1L << (CATEGORY - 64)) | (1L << (AT - 64)) | (1L << (ABOVE - 64)) | (1L << (BELOW - 64)) | (1L << (ABOVE_OR_BELOW - 64)) | (1L << (SECURITY_ENFORCED - 64)) | (1L << (REFERENCE - 64)) | (1L << (CUBE - 64)) | (1L << (FORMAT - 64)) | (1L << (TRACKING - 64)) | (1L << (VIEWSTAT - 64)) | (1L << (CUSTOM - 64)) | (1L << (STANDARD - 64)) | (1L << (CALENDAR_MONTH - 64)) | (1L << (CALENDAR_QUARTER - 64)) | (1L << (CALENDAR_YEAR - 64)) | (1L << (DAY_IN_MONTH - 64)) | (1L << (DAY_IN_WEEK - 64)) | (1L << (DAY_IN_YEAR - 64)) | (1L << (DAY_ONLY - 64)) | (1L << (FISCAL_MONTH - 64)) | (1L << (FISCAL_QUARTER - 64)) | (1L << (FISCAL_YEAR - 64)) | (1L << (HOUR_IN_DAY - 64)) | (1L << (WEEK_IN_MONTH - 64)) | (1L << (WEEK_IN_YEAR - 64)) | (1L << (CONVERT_TIMEZONE - 64)) | (1L << (YESTERDAY - 64)) | (1L << (TODAY - 64)) | (1L << (TOMORROW - 64)) | (1L << (LAST_WEEK - 64)) | (1L << (THIS_WEEK - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (NEXT_WEEK - 128)) | (1L << (LAST_MONTH - 128)) | (1L << (THIS_MONTH - 128)) | (1L << (NEXT_MONTH - 128)) | (1L << (LAST_90_DAYS - 128)) | (1L << (NEXT_90_DAYS - 128)) | (1L << (LAST_N_DAYS_N - 128)) | (1L << (NEXT_N_DAYS_N - 128)) | (1L << (NEXT_N_WEEKS_N - 128)) | (1L << (LAST_N_WEEKS_N - 128)) | (1L << (NEXT_N_MONTHS_N - 128)) | (1L << (LAST_N_MONTHS_N - 128)) | (1L << (THIS_QUARTER - 128)) | (1L << (LAST_QUARTER - 128)) | (1L << (NEXT_QUARTER - 128)) | (1L << (NEXT_N_QUARTERS_N - 128)) | (1L << (LAST_N_QUARTERS_N - 128)) | (1L << (THIS_YEAR - 128)) | (1L << (LAST_YEAR - 128)) | (1L << (NEXT_YEAR - 128)) | (1L << (NEXT_N_YEARS_N - 128)) | (1L << (LAST_N_YEARS_N - 128)) | (1L << (THIS_FISCAL_QUARTER - 128)) | (1L << (LAST_FISCAL_QUARTER - 128)) | (1L << (NEXT_FISCAL_QUARTER - 128)) | (1L << (NEXT_N_FISCAL_QUARTERS_N - 128)) | (1L << (LAST_N_FISCAL_QUARTERS_N - 128)) | (1L << (THIS_FISCAL_YEAR - 128)) | (1L << (LAST_FISCAL_YEAR - 128)) | (1L << (NEXT_FISCAL_YEAR - 128)) | (1L << (NEXT_N_FISCAL_YEARS_N - 128)) | (1L << (LAST_N_FISCAL_YEARS_N - 128)) | (1L << (FIND - 128)) | (1L << (EMAIL - 128)) | (1L << (NAME - 128)) | (1L << (PHONE - 128)) | (1L << (SIDEBAR - 128)) | (1L << (FIELDS - 128)) | (1L << (METADATA - 128)) | (1L << (PRICEBOOKID - 128)) | (1L << (NETWORK - 128)) | (1L << (SNIPPET - 128)) | (1L << (TARGET_LENGTH - 128)) | (1L << (DIVISION - 128)) | (1L << (RETURNING - 128)) | (1L << (LISTVIEW - 128)) | (1L << (COMMA - 128)))) != 0) || _la==Identifier) {
				{
				{
				setState(588);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(587);
					match(COMMA);
					}
				}

				setState(590);
				elementValuePair();
				}
				}
				setState(595);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElementValuePairContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TerminalNode ASSIGN() { return getToken(ApexParser.ASSIGN, 0); }
		public ElementValueContext elementValue() {
			return getRuleContext(ElementValueContext.class,0);
		}
		public ElementValuePairContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementValuePair; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterElementValuePair(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitElementValuePair(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitElementValuePair(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ElementValuePairContext elementValuePair() throws RecognitionException {
		ElementValuePairContext _localctx = new ElementValuePairContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_elementValuePair);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(596);
			id();
			setState(597);
			match(ASSIGN);
			setState(598);
			elementValue();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElementValueContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public AnnotationContext annotation() {
			return getRuleContext(AnnotationContext.class,0);
		}
		public ElementValueArrayInitializerContext elementValueArrayInitializer() {
			return getRuleContext(ElementValueArrayInitializerContext.class,0);
		}
		public ElementValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementValue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterElementValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitElementValue(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitElementValue(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ElementValueContext elementValue() throws RecognitionException {
		ElementValueContext _localctx = new ElementValueContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_elementValue);
		try {
			setState(603);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case AFTER:
			case BEFORE:
			case GET:
			case INHERITED:
			case INSTANCEOF:
			case NEW:
			case NULL:
			case SET:
			case SHARING:
			case SUPER:
			case SWITCH:
			case THIS:
			case TRANSIENT:
			case TRIGGER:
			case WHEN:
			case WITH:
			case WITHOUT:
			case LIST:
			case MAP:
			case SELECT:
			case COUNT:
			case FROM:
			case AS:
			case USING:
			case SCOPE:
			case WHERE:
			case ORDER:
			case BY:
			case LIMIT:
			case SOQLAND:
			case SOQLOR:
			case NOT:
			case AVG:
			case COUNT_DISTINCT:
			case MIN:
			case MAX:
			case SUM:
			case TYPEOF:
			case END:
			case THEN:
			case LIKE:
			case IN:
			case INCLUDES:
			case EXCLUDES:
			case ASC:
			case DESC:
			case NULLS:
			case FIRST:
			case LAST:
			case GROUP:
			case ALL:
			case ROWS:
			case VIEW:
			case HAVING:
			case ROLLUP:
			case TOLABEL:
			case OFFSET:
			case DATA:
			case CATEGORY:
			case AT:
			case ABOVE:
			case BELOW:
			case ABOVE_OR_BELOW:
			case SECURITY_ENFORCED:
			case REFERENCE:
			case CUBE:
			case FORMAT:
			case TRACKING:
			case VIEWSTAT:
			case CUSTOM:
			case STANDARD:
			case CALENDAR_MONTH:
			case CALENDAR_QUARTER:
			case CALENDAR_YEAR:
			case DAY_IN_MONTH:
			case DAY_IN_WEEK:
			case DAY_IN_YEAR:
			case DAY_ONLY:
			case FISCAL_MONTH:
			case FISCAL_QUARTER:
			case FISCAL_YEAR:
			case HOUR_IN_DAY:
			case WEEK_IN_MONTH:
			case WEEK_IN_YEAR:
			case CONVERT_TIMEZONE:
			case YESTERDAY:
			case TODAY:
			case TOMORROW:
			case LAST_WEEK:
			case THIS_WEEK:
			case NEXT_WEEK:
			case LAST_MONTH:
			case THIS_MONTH:
			case NEXT_MONTH:
			case LAST_90_DAYS:
			case NEXT_90_DAYS:
			case LAST_N_DAYS_N:
			case NEXT_N_DAYS_N:
			case NEXT_N_WEEKS_N:
			case LAST_N_WEEKS_N:
			case NEXT_N_MONTHS_N:
			case LAST_N_MONTHS_N:
			case THIS_QUARTER:
			case LAST_QUARTER:
			case NEXT_QUARTER:
			case NEXT_N_QUARTERS_N:
			case LAST_N_QUARTERS_N:
			case THIS_YEAR:
			case LAST_YEAR:
			case NEXT_YEAR:
			case NEXT_N_YEARS_N:
			case LAST_N_YEARS_N:
			case THIS_FISCAL_QUARTER:
			case LAST_FISCAL_QUARTER:
			case NEXT_FISCAL_QUARTER:
			case NEXT_N_FISCAL_QUARTERS_N:
			case LAST_N_FISCAL_QUARTERS_N:
			case THIS_FISCAL_YEAR:
			case LAST_FISCAL_YEAR:
			case NEXT_FISCAL_YEAR:
			case NEXT_N_FISCAL_YEARS_N:
			case LAST_N_FISCAL_YEARS_N:
			case FIND:
			case EMAIL:
			case NAME:
			case PHONE:
			case SIDEBAR:
			case FIELDS:
			case METADATA:
			case PRICEBOOKID:
			case NETWORK:
			case SNIPPET:
			case TARGET_LENGTH:
			case DIVISION:
			case RETURNING:
			case LISTVIEW:
			case FindLiteral:
			case IntegerLiteral:
			case LongLiteral:
			case NumberLiteral:
			case BooleanLiteral:
			case StringLiteral:
			case LPAREN:
			case LBRACK:
			case BANG:
			case TILDE:
			case INC:
			case DEC:
			case ADD:
			case SUB:
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(600);
				expression(0);
				}
				break;
			case ATSIGN:
				enterOuterAlt(_localctx, 2);
				{
				setState(601);
				annotation();
				}
				break;
			case LBRACE:
				enterOuterAlt(_localctx, 3);
				{
				setState(602);
				elementValueArrayInitializer();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElementValueArrayInitializerContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(ApexParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(ApexParser.RBRACE, 0); }
		public List<ElementValueContext> elementValue() {
			return getRuleContexts(ElementValueContext.class);
		}
		public ElementValueContext elementValue(int i) {
			return getRuleContext(ElementValueContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(ApexParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ApexParser.COMMA, i);
		}
		public ElementValueArrayInitializerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementValueArrayInitializer; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterElementValueArrayInitializer(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitElementValueArrayInitializer(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitElementValueArrayInitializer(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ElementValueArrayInitializerContext elementValueArrayInitializer() throws RecognitionException {
		ElementValueArrayInitializerContext _localctx = new ElementValueArrayInitializerContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_elementValueArrayInitializer);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(605);
			match(LBRACE);
			setState(614);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << AFTER) | (1L << BEFORE) | (1L << GET) | (1L << INHERITED) | (1L << INSTANCEOF) | (1L << NEW) | (1L << NULL) | (1L << SET) | (1L << SHARING) | (1L << SUPER) | (1L << SWITCH) | (1L << THIS) | (1L << TRANSIENT) | (1L << TRIGGER) | (1L << WHEN) | (1L << WITH) | (1L << WITHOUT) | (1L << LIST) | (1L << MAP) | (1L << SELECT) | (1L << COUNT) | (1L << FROM) | (1L << AS) | (1L << USING) | (1L << SCOPE) | (1L << WHERE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ORDER - 64)) | (1L << (BY - 64)) | (1L << (LIMIT - 64)) | (1L << (SOQLAND - 64)) | (1L << (SOQLOR - 64)) | (1L << (NOT - 64)) | (1L << (AVG - 64)) | (1L << (COUNT_DISTINCT - 64)) | (1L << (MIN - 64)) | (1L << (MAX - 64)) | (1L << (SUM - 64)) | (1L << (TYPEOF - 64)) | (1L << (END - 64)) | (1L << (THEN - 64)) | (1L << (LIKE - 64)) | (1L << (IN - 64)) | (1L << (INCLUDES - 64)) | (1L << (EXCLUDES - 64)) | (1L << (ASC - 64)) | (1L << (DESC - 64)) | (1L << (NULLS - 64)) | (1L << (FIRST - 64)) | (1L << (LAST - 64)) | (1L << (GROUP - 64)) | (1L << (ALL - 64)) | (1L << (ROWS - 64)) | (1L << (VIEW - 64)) | (1L << (HAVING - 64)) | (1L << (ROLLUP - 64)) | (1L << (TOLABEL - 64)) | (1L << (OFFSET - 64)) | (1L << (DATA - 64)) | (1L << (CATEGORY - 64)) | (1L << (AT - 64)) | (1L << (ABOVE - 64)) | (1L << (BELOW - 64)) | (1L << (ABOVE_OR_BELOW - 64)) | (1L << (SECURITY_ENFORCED - 64)) | (1L << (REFERENCE - 64)) | (1L << (CUBE - 64)) | (1L << (FORMAT - 64)) | (1L << (TRACKING - 64)) | (1L << (VIEWSTAT - 64)) | (1L << (CUSTOM - 64)) | (1L << (STANDARD - 64)) | (1L << (CALENDAR_MONTH - 64)) | (1L << (CALENDAR_QUARTER - 64)) | (1L << (CALENDAR_YEAR - 64)) | (1L << (DAY_IN_MONTH - 64)) | (1L << (DAY_IN_WEEK - 64)) | (1L << (DAY_IN_YEAR - 64)) | (1L << (DAY_ONLY - 64)) | (1L << (FISCAL_MONTH - 64)) | (1L << (FISCAL_QUARTER - 64)) | (1L << (FISCAL_YEAR - 64)) | (1L << (HOUR_IN_DAY - 64)) | (1L << (WEEK_IN_MONTH - 64)) | (1L << (WEEK_IN_YEAR - 64)) | (1L << (CONVERT_TIMEZONE - 64)) | (1L << (YESTERDAY - 64)) | (1L << (TODAY - 64)) | (1L << (TOMORROW - 64)) | (1L << (LAST_WEEK - 64)) | (1L << (THIS_WEEK - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (NEXT_WEEK - 128)) | (1L << (LAST_MONTH - 128)) | (1L << (THIS_MONTH - 128)) | (1L << (NEXT_MONTH - 128)) | (1L << (LAST_90_DAYS - 128)) | (1L << (NEXT_90_DAYS - 128)) | (1L << (LAST_N_DAYS_N - 128)) | (1L << (NEXT_N_DAYS_N - 128)) | (1L << (NEXT_N_WEEKS_N - 128)) | (1L << (LAST_N_WEEKS_N - 128)) | (1L << (NEXT_N_MONTHS_N - 128)) | (1L << (LAST_N_MONTHS_N - 128)) | (1L << (THIS_QUARTER - 128)) | (1L << (LAST_QUARTER - 128)) | (1L << (NEXT_QUARTER - 128)) | (1L << (NEXT_N_QUARTERS_N - 128)) | (1L << (LAST_N_QUARTERS_N - 128)) | (1L << (THIS_YEAR - 128)) | (1L << (LAST_YEAR - 128)) | (1L << (NEXT_YEAR - 128)) | (1L << (NEXT_N_YEARS_N - 128)) | (1L << (LAST_N_YEARS_N - 128)) | (1L << (THIS_FISCAL_QUARTER - 128)) | (1L << (LAST_FISCAL_QUARTER - 128)) | (1L << (NEXT_FISCAL_QUARTER - 128)) | (1L << (NEXT_N_FISCAL_QUARTERS_N - 128)) | (1L << (LAST_N_FISCAL_QUARTERS_N - 128)) | (1L << (THIS_FISCAL_YEAR - 128)) | (1L << (LAST_FISCAL_YEAR - 128)) | (1L << (NEXT_FISCAL_YEAR - 128)) | (1L << (NEXT_N_FISCAL_YEARS_N - 128)) | (1L << (LAST_N_FISCAL_YEARS_N - 128)) | (1L << (FIND - 128)) | (1L << (EMAIL - 128)) | (1L << (NAME - 128)) | (1L << (PHONE - 128)) | (1L << (SIDEBAR - 128)) | (1L << (FIELDS - 128)) | (1L << (METADATA - 128)) | (1L << (PRICEBOOKID - 128)) | (1L << (NETWORK - 128)) | (1L << (SNIPPET - 128)) | (1L << (TARGET_LENGTH - 128)) | (1L << (DIVISION - 128)) | (1L << (RETURNING - 128)) | (1L << (LISTVIEW - 128)) | (1L << (FindLiteral - 128)) | (1L << (IntegerLiteral - 128)) | (1L << (LongLiteral - 128)) | (1L << (NumberLiteral - 128)) | (1L << (BooleanLiteral - 128)) | (1L << (StringLiteral - 128)) | (1L << (LPAREN - 128)) | (1L << (LBRACE - 128)) | (1L << (LBRACK - 128)))) != 0) || ((((_la - 195)) & ~0x3f) == 0 && ((1L << (_la - 195)) & ((1L << (BANG - 195)) | (1L << (TILDE - 195)) | (1L << (INC - 195)) | (1L << (DEC - 195)) | (1L << (ADD - 195)) | (1L << (SUB - 195)) | (1L << (ATSIGN - 195)) | (1L << (Identifier - 195)))) != 0)) {
				{
				setState(606);
				elementValue();
				setState(611);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,44,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(607);
						match(COMMA);
						setState(608);
						elementValue();
						}
						} 
					}
					setState(613);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,44,_ctx);
				}
				}
			}

			setState(617);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(616);
				match(COMMA);
				}
			}

			setState(619);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BlockContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(ApexParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(ApexParser.RBRACE, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterBlock(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitBlock(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitBlock(this);
			else return visitor.visitChildren(this);
		}
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(621);
			match(LBRACE);
			setState(625);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ABSTRACT) | (1L << AFTER) | (1L << BEFORE) | (1L << BREAK) | (1L << CONTINUE) | (1L << DELETE) | (1L << DO) | (1L << FINAL) | (1L << FOR) | (1L << GET) | (1L << GLOBAL) | (1L << IF) | (1L << INHERITED) | (1L << INSERT) | (1L << INSTANCEOF) | (1L << MERGE) | (1L << NEW) | (1L << NULL) | (1L << OVERRIDE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << RETURN) | (1L << SYSTEMRUNAS) | (1L << SET) | (1L << SHARING) | (1L << STATIC) | (1L << SUPER) | (1L << SWITCH) | (1L << TESTMETHOD) | (1L << THIS) | (1L << THROW) | (1L << TRANSIENT) | (1L << TRIGGER) | (1L << TRY) | (1L << UNDELETE) | (1L << UPDATE) | (1L << UPSERT) | (1L << VIRTUAL) | (1L << WEBSERVICE) | (1L << WHEN) | (1L << WHILE) | (1L << WITH) | (1L << WITHOUT) | (1L << LIST) | (1L << MAP) | (1L << SELECT) | (1L << COUNT) | (1L << FROM) | (1L << AS) | (1L << USING) | (1L << SCOPE) | (1L << WHERE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ORDER - 64)) | (1L << (BY - 64)) | (1L << (LIMIT - 64)) | (1L << (SOQLAND - 64)) | (1L << (SOQLOR - 64)) | (1L << (NOT - 64)) | (1L << (AVG - 64)) | (1L << (COUNT_DISTINCT - 64)) | (1L << (MIN - 64)) | (1L << (MAX - 64)) | (1L << (SUM - 64)) | (1L << (TYPEOF - 64)) | (1L << (END - 64)) | (1L << (THEN - 64)) | (1L << (LIKE - 64)) | (1L << (IN - 64)) | (1L << (INCLUDES - 64)) | (1L << (EXCLUDES - 64)) | (1L << (ASC - 64)) | (1L << (DESC - 64)) | (1L << (NULLS - 64)) | (1L << (FIRST - 64)) | (1L << (LAST - 64)) | (1L << (GROUP - 64)) | (1L << (ALL - 64)) | (1L << (ROWS - 64)) | (1L << (VIEW - 64)) | (1L << (HAVING - 64)) | (1L << (ROLLUP - 64)) | (1L << (TOLABEL - 64)) | (1L << (OFFSET - 64)) | (1L << (DATA - 64)) | (1L << (CATEGORY - 64)) | (1L << (AT - 64)) | (1L << (ABOVE - 64)) | (1L << (BELOW - 64)) | (1L << (ABOVE_OR_BELOW - 64)) | (1L << (SECURITY_ENFORCED - 64)) | (1L << (REFERENCE - 64)) | (1L << (CUBE - 64)) | (1L << (FORMAT - 64)) | (1L << (TRACKING - 64)) | (1L << (VIEWSTAT - 64)) | (1L << (CUSTOM - 64)) | (1L << (STANDARD - 64)) | (1L << (CALENDAR_MONTH - 64)) | (1L << (CALENDAR_QUARTER - 64)) | (1L << (CALENDAR_YEAR - 64)) | (1L << (DAY_IN_MONTH - 64)) | (1L << (DAY_IN_WEEK - 64)) | (1L << (DAY_IN_YEAR - 64)) | (1L << (DAY_ONLY - 64)) | (1L << (FISCAL_MONTH - 64)) | (1L << (FISCAL_QUARTER - 64)) | (1L << (FISCAL_YEAR - 64)) | (1L << (HOUR_IN_DAY - 64)) | (1L << (WEEK_IN_MONTH - 64)) | (1L << (WEEK_IN_YEAR - 64)) | (1L << (CONVERT_TIMEZONE - 64)) | (1L << (YESTERDAY - 64)) | (1L << (TODAY - 64)) | (1L << (TOMORROW - 64)) | (1L << (LAST_WEEK - 64)) | (1L << (THIS_WEEK - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (NEXT_WEEK - 128)) | (1L << (LAST_MONTH - 128)) | (1L << (THIS_MONTH - 128)) | (1L << (NEXT_MONTH - 128)) | (1L << (LAST_90_DAYS - 128)) | (1L << (NEXT_90_DAYS - 128)) | (1L << (LAST_N_DAYS_N - 128)) | (1L << (NEXT_N_DAYS_N - 128)) | (1L << (NEXT_N_WEEKS_N - 128)) | (1L << (LAST_N_WEEKS_N - 128)) | (1L << (NEXT_N_MONTHS_N - 128)) | (1L << (LAST_N_MONTHS_N - 128)) | (1L << (THIS_QUARTER - 128)) | (1L << (LAST_QUARTER - 128)) | (1L << (NEXT_QUARTER - 128)) | (1L << (NEXT_N_QUARTERS_N - 128)) | (1L << (LAST_N_QUARTERS_N - 128)) | (1L << (THIS_YEAR - 128)) | (1L << (LAST_YEAR - 128)) | (1L << (NEXT_YEAR - 128)) | (1L << (NEXT_N_YEARS_N - 128)) | (1L << (LAST_N_YEARS_N - 128)) | (1L << (THIS_FISCAL_QUARTER - 128)) | (1L << (LAST_FISCAL_QUARTER - 128)) | (1L << (NEXT_FISCAL_QUARTER - 128)) | (1L << (NEXT_N_FISCAL_QUARTERS_N - 128)) | (1L << (LAST_N_FISCAL_QUARTERS_N - 128)) | (1L << (THIS_FISCAL_YEAR - 128)) | (1L << (LAST_FISCAL_YEAR - 128)) | (1L << (NEXT_FISCAL_YEAR - 128)) | (1L << (NEXT_N_FISCAL_YEARS_N - 128)) | (1L << (LAST_N_FISCAL_YEARS_N - 128)) | (1L << (FIND - 128)) | (1L << (EMAIL - 128)) | (1L << (NAME - 128)) | (1L << (PHONE - 128)) | (1L << (SIDEBAR - 128)) | (1L << (FIELDS - 128)) | (1L << (METADATA - 128)) | (1L << (PRICEBOOKID - 128)) | (1L << (NETWORK - 128)) | (1L << (SNIPPET - 128)) | (1L << (TARGET_LENGTH - 128)) | (1L << (DIVISION - 128)) | (1L << (RETURNING - 128)) | (1L << (LISTVIEW - 128)) | (1L << (FindLiteral - 128)) | (1L << (IntegerLiteral - 128)) | (1L << (LongLiteral - 128)) | (1L << (NumberLiteral - 128)) | (1L << (BooleanLiteral - 128)) | (1L << (StringLiteral - 128)) | (1L << (LPAREN - 128)) | (1L << (LBRACE - 128)) | (1L << (LBRACK - 128)))) != 0) || ((((_la - 195)) & ~0x3f) == 0 && ((1L << (_la - 195)) & ((1L << (BANG - 195)) | (1L << (TILDE - 195)) | (1L << (INC - 195)) | (1L << (DEC - 195)) | (1L << (ADD - 195)) | (1L << (SUB - 195)) | (1L << (ATSIGN - 195)) | (1L << (Identifier - 195)))) != 0)) {
				{
				{
				setState(622);
				statement();
				}
				}
				setState(627);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(628);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LocalVariableDeclarationStatementContext extends ParserRuleContext {
		public LocalVariableDeclarationContext localVariableDeclaration() {
			return getRuleContext(LocalVariableDeclarationContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(ApexParser.SEMI, 0); }
		public LocalVariableDeclarationStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_localVariableDeclarationStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterLocalVariableDeclarationStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitLocalVariableDeclarationStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitLocalVariableDeclarationStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final LocalVariableDeclarationStatementContext localVariableDeclarationStatement() throws RecognitionException {
		LocalVariableDeclarationStatementContext _localctx = new LocalVariableDeclarationStatementContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_localVariableDeclarationStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(630);
			localVariableDeclaration();
			setState(631);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LocalVariableDeclarationContext extends ParserRuleContext {
		public TypeRefContext typeRef() {
			return getRuleContext(TypeRefContext.class,0);
		}
		public VariableDeclaratorsContext variableDeclarators() {
			return getRuleContext(VariableDeclaratorsContext.class,0);
		}
		public List<ModifierContext> modifier() {
			return getRuleContexts(ModifierContext.class);
		}
		public ModifierContext modifier(int i) {
			return getRuleContext(ModifierContext.class,i);
		}
		public LocalVariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_localVariableDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterLocalVariableDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitLocalVariableDeclaration(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitLocalVariableDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final LocalVariableDeclarationContext localVariableDeclaration() throws RecognitionException {
		LocalVariableDeclarationContext _localctx = new LocalVariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_localVariableDeclaration);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(636);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,48,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(633);
					modifier();
					}
					} 
				}
				setState(638);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,48,_ctx);
			}
			setState(639);
			typeRef();
			setState(640);
			variableDeclarators();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public IfStatementContext ifStatement() {
			return getRuleContext(IfStatementContext.class,0);
		}
		public SwitchStatementContext switchStatement() {
			return getRuleContext(SwitchStatementContext.class,0);
		}
		public ForStatementContext forStatement() {
			return getRuleContext(ForStatementContext.class,0);
		}
		public WhileStatementContext whileStatement() {
			return getRuleContext(WhileStatementContext.class,0);
		}
		public DoWhileStatementContext doWhileStatement() {
			return getRuleContext(DoWhileStatementContext.class,0);
		}
		public TryStatementContext tryStatement() {
			return getRuleContext(TryStatementContext.class,0);
		}
		public ReturnStatementContext returnStatement() {
			return getRuleContext(ReturnStatementContext.class,0);
		}
		public ThrowStatementContext throwStatement() {
			return getRuleContext(ThrowStatementContext.class,0);
		}
		public BreakStatementContext breakStatement() {
			return getRuleContext(BreakStatementContext.class,0);
		}
		public ContinueStatementContext continueStatement() {
			return getRuleContext(ContinueStatementContext.class,0);
		}
		public InsertStatementContext insertStatement() {
			return getRuleContext(InsertStatementContext.class,0);
		}
		public UpdateStatementContext updateStatement() {
			return getRuleContext(UpdateStatementContext.class,0);
		}
		public DeleteStatementContext deleteStatement() {
			return getRuleContext(DeleteStatementContext.class,0);
		}
		public UndeleteStatementContext undeleteStatement() {
			return getRuleContext(UndeleteStatementContext.class,0);
		}
		public UpsertStatementContext upsertStatement() {
			return getRuleContext(UpsertStatementContext.class,0);
		}
		public MergeStatementContext mergeStatement() {
			return getRuleContext(MergeStatementContext.class,0);
		}
		public RunAsStatementContext runAsStatement() {
			return getRuleContext(RunAsStatementContext.class,0);
		}
		public LocalVariableDeclarationStatementContext localVariableDeclarationStatement() {
			return getRuleContext(LocalVariableDeclarationStatementContext.class,0);
		}
		public ExpressionStatementContext expressionStatement() {
			return getRuleContext(ExpressionStatementContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_statement);
		try {
			setState(662);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,49,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(642);
				block();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(643);
				ifStatement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(644);
				switchStatement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(645);
				forStatement();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(646);
				whileStatement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(647);
				doWhileStatement();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(648);
				tryStatement();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(649);
				returnStatement();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(650);
				throwStatement();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(651);
				breakStatement();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(652);
				continueStatement();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(653);
				insertStatement();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(654);
				updateStatement();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(655);
				deleteStatement();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(656);
				undeleteStatement();
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(657);
				upsertStatement();
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(658);
				mergeStatement();
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(659);
				runAsStatement();
				}
				break;
			case 19:
				enterOuterAlt(_localctx, 19);
				{
				setState(660);
				localVariableDeclarationStatement();
				}
				break;
			case 20:
				enterOuterAlt(_localctx, 20);
				{
				setState(661);
				expressionStatement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IfStatementContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(ApexParser.IF, 0); }
		public ParExpressionContext parExpression() {
			return getRuleContext(ParExpressionContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(ApexParser.ELSE, 0); }
		public IfStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterIfStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitIfStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitIfStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final IfStatementContext ifStatement() throws RecognitionException {
		IfStatementContext _localctx = new IfStatementContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_ifStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(664);
			match(IF);
			setState(665);
			parExpression();
			setState(666);
			statement();
			setState(669);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,50,_ctx) ) {
			case 1:
				{
				setState(667);
				match(ELSE);
				setState(668);
				statement();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SwitchStatementContext extends ParserRuleContext {
		public TerminalNode SWITCH() { return getToken(ApexParser.SWITCH, 0); }
		public TerminalNode ON() { return getToken(ApexParser.ON, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode LBRACE() { return getToken(ApexParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(ApexParser.RBRACE, 0); }
		public List<WhenControlContext> whenControl() {
			return getRuleContexts(WhenControlContext.class);
		}
		public WhenControlContext whenControl(int i) {
			return getRuleContext(WhenControlContext.class,i);
		}
		public SwitchStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_switchStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterSwitchStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitSwitchStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitSwitchStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SwitchStatementContext switchStatement() throws RecognitionException {
		SwitchStatementContext _localctx = new SwitchStatementContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_switchStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(671);
			match(SWITCH);
			setState(672);
			match(ON);
			setState(673);
			expression(0);
			setState(674);
			match(LBRACE);
			setState(676); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(675);
				whenControl();
				}
				}
				setState(678); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==WHEN );
			setState(680);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WhenControlContext extends ParserRuleContext {
		public TerminalNode WHEN() { return getToken(ApexParser.WHEN, 0); }
		public WhenValueContext whenValue() {
			return getRuleContext(WhenValueContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public WhenControlContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whenControl; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterWhenControl(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitWhenControl(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitWhenControl(this);
			else return visitor.visitChildren(this);
		}
	}

	public final WhenControlContext whenControl() throws RecognitionException {
		WhenControlContext _localctx = new WhenControlContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_whenControl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(682);
			match(WHEN);
			setState(683);
			whenValue();
			setState(684);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WhenValueContext extends ParserRuleContext {
		public TerminalNode ELSE() { return getToken(ApexParser.ELSE, 0); }
		public List<WhenLiteralContext> whenLiteral() {
			return getRuleContexts(WhenLiteralContext.class);
		}
		public WhenLiteralContext whenLiteral(int i) {
			return getRuleContext(WhenLiteralContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(ApexParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ApexParser.COMMA, i);
		}
		public List<IdContext> id() {
			return getRuleContexts(IdContext.class);
		}
		public IdContext id(int i) {
			return getRuleContext(IdContext.class,i);
		}
		public WhenValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whenValue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterWhenValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitWhenValue(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitWhenValue(this);
			else return visitor.visitChildren(this);
		}
	}

	public final WhenValueContext whenValue() throws RecognitionException {
		WhenValueContext _localctx = new WhenValueContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_whenValue);
		int _la;
		try {
			setState(698);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,53,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(686);
				match(ELSE);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(687);
				whenLiteral();
				setState(692);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(688);
					match(COMMA);
					setState(689);
					whenLiteral();
					}
					}
					setState(694);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(695);
				id();
				setState(696);
				id();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WhenLiteralContext extends ParserRuleContext {
		public TerminalNode IntegerLiteral() { return getToken(ApexParser.IntegerLiteral, 0); }
		public TerminalNode SUB() { return getToken(ApexParser.SUB, 0); }
		public TerminalNode LongLiteral() { return getToken(ApexParser.LongLiteral, 0); }
		public TerminalNode StringLiteral() { return getToken(ApexParser.StringLiteral, 0); }
		public TerminalNode NULL() { return getToken(ApexParser.NULL, 0); }
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public WhenLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whenLiteral; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterWhenLiteral(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitWhenLiteral(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitWhenLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final WhenLiteralContext whenLiteral() throws RecognitionException {
		WhenLiteralContext _localctx = new WhenLiteralContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_whenLiteral);
		int _la;
		try {
			setState(708);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IntegerLiteral:
			case SUB:
				enterOuterAlt(_localctx, 1);
				{
				setState(701);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SUB) {
					{
					setState(700);
					match(SUB);
					}
				}

				setState(703);
				match(IntegerLiteral);
				}
				break;
			case LongLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(704);
				match(LongLiteral);
				}
				break;
			case StringLiteral:
				enterOuterAlt(_localctx, 3);
				{
				setState(705);
				match(StringLiteral);
				}
				break;
			case NULL:
				enterOuterAlt(_localctx, 4);
				{
				setState(706);
				match(NULL);
				}
				break;
			case AFTER:
			case BEFORE:
			case GET:
			case INHERITED:
			case INSTANCEOF:
			case SET:
			case SHARING:
			case SWITCH:
			case TRANSIENT:
			case TRIGGER:
			case WHEN:
			case WITH:
			case WITHOUT:
			case SELECT:
			case COUNT:
			case FROM:
			case AS:
			case USING:
			case SCOPE:
			case WHERE:
			case ORDER:
			case BY:
			case LIMIT:
			case SOQLAND:
			case SOQLOR:
			case NOT:
			case AVG:
			case COUNT_DISTINCT:
			case MIN:
			case MAX:
			case SUM:
			case TYPEOF:
			case END:
			case THEN:
			case LIKE:
			case IN:
			case INCLUDES:
			case EXCLUDES:
			case ASC:
			case DESC:
			case NULLS:
			case FIRST:
			case LAST:
			case GROUP:
			case ALL:
			case ROWS:
			case VIEW:
			case HAVING:
			case ROLLUP:
			case TOLABEL:
			case OFFSET:
			case DATA:
			case CATEGORY:
			case AT:
			case ABOVE:
			case BELOW:
			case ABOVE_OR_BELOW:
			case SECURITY_ENFORCED:
			case REFERENCE:
			case CUBE:
			case FORMAT:
			case TRACKING:
			case VIEWSTAT:
			case CUSTOM:
			case STANDARD:
			case CALENDAR_MONTH:
			case CALENDAR_QUARTER:
			case CALENDAR_YEAR:
			case DAY_IN_MONTH:
			case DAY_IN_WEEK:
			case DAY_IN_YEAR:
			case DAY_ONLY:
			case FISCAL_MONTH:
			case FISCAL_QUARTER:
			case FISCAL_YEAR:
			case HOUR_IN_DAY:
			case WEEK_IN_MONTH:
			case WEEK_IN_YEAR:
			case CONVERT_TIMEZONE:
			case YESTERDAY:
			case TODAY:
			case TOMORROW:
			case LAST_WEEK:
			case THIS_WEEK:
			case NEXT_WEEK:
			case LAST_MONTH:
			case THIS_MONTH:
			case NEXT_MONTH:
			case LAST_90_DAYS:
			case NEXT_90_DAYS:
			case LAST_N_DAYS_N:
			case NEXT_N_DAYS_N:
			case NEXT_N_WEEKS_N:
			case LAST_N_WEEKS_N:
			case NEXT_N_MONTHS_N:
			case LAST_N_MONTHS_N:
			case THIS_QUARTER:
			case LAST_QUARTER:
			case NEXT_QUARTER:
			case NEXT_N_QUARTERS_N:
			case LAST_N_QUARTERS_N:
			case THIS_YEAR:
			case LAST_YEAR:
			case NEXT_YEAR:
			case NEXT_N_YEARS_N:
			case LAST_N_YEARS_N:
			case THIS_FISCAL_QUARTER:
			case LAST_FISCAL_QUARTER:
			case NEXT_FISCAL_QUARTER:
			case NEXT_N_FISCAL_QUARTERS_N:
			case LAST_N_FISCAL_QUARTERS_N:
			case THIS_FISCAL_YEAR:
			case LAST_FISCAL_YEAR:
			case NEXT_FISCAL_YEAR:
			case NEXT_N_FISCAL_YEARS_N:
			case LAST_N_FISCAL_YEARS_N:
			case FIND:
			case EMAIL:
			case NAME:
			case PHONE:
			case SIDEBAR:
			case FIELDS:
			case METADATA:
			case PRICEBOOKID:
			case NETWORK:
			case SNIPPET:
			case TARGET_LENGTH:
			case DIVISION:
			case RETURNING:
			case LISTVIEW:
			case Identifier:
				enterOuterAlt(_localctx, 5);
				{
				setState(707);
				id();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForStatementContext extends ParserRuleContext {
		public TerminalNode FOR() { return getToken(ApexParser.FOR, 0); }
		public TerminalNode LPAREN() { return getToken(ApexParser.LPAREN, 0); }
		public ForControlContext forControl() {
			return getRuleContext(ForControlContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(ApexParser.RPAREN, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public ForStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterForStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitForStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitForStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ForStatementContext forStatement() throws RecognitionException {
		ForStatementContext _localctx = new ForStatementContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_forStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(710);
			match(FOR);
			setState(711);
			match(LPAREN);
			setState(712);
			forControl();
			setState(713);
			match(RPAREN);
			setState(714);
			statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WhileStatementContext extends ParserRuleContext {
		public TerminalNode WHILE() { return getToken(ApexParser.WHILE, 0); }
		public ParExpressionContext parExpression() {
			return getRuleContext(ParExpressionContext.class,0);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public WhileStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whileStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterWhileStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitWhileStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitWhileStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final WhileStatementContext whileStatement() throws RecognitionException {
		WhileStatementContext _localctx = new WhileStatementContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_whileStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(716);
			match(WHILE);
			setState(717);
			parExpression();
			setState(718);
			statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DoWhileStatementContext extends ParserRuleContext {
		public TerminalNode DO() { return getToken(ApexParser.DO, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode WHILE() { return getToken(ApexParser.WHILE, 0); }
		public ParExpressionContext parExpression() {
			return getRuleContext(ParExpressionContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(ApexParser.SEMI, 0); }
		public DoWhileStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_doWhileStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterDoWhileStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitDoWhileStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitDoWhileStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DoWhileStatementContext doWhileStatement() throws RecognitionException {
		DoWhileStatementContext _localctx = new DoWhileStatementContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_doWhileStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(720);
			match(DO);
			setState(721);
			statement();
			setState(722);
			match(WHILE);
			setState(723);
			parExpression();
			setState(724);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TryStatementContext extends ParserRuleContext {
		public TerminalNode TRY() { return getToken(ApexParser.TRY, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public FinallyBlockContext finallyBlock() {
			return getRuleContext(FinallyBlockContext.class,0);
		}
		public List<CatchClauseContext> catchClause() {
			return getRuleContexts(CatchClauseContext.class);
		}
		public CatchClauseContext catchClause(int i) {
			return getRuleContext(CatchClauseContext.class,i);
		}
		public TryStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tryStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterTryStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitTryStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitTryStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TryStatementContext tryStatement() throws RecognitionException {
		TryStatementContext _localctx = new TryStatementContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_tryStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(726);
			match(TRY);
			setState(727);
			block();
			setState(737);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CATCH:
				{
				setState(729); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(728);
					catchClause();
					}
					}
					setState(731); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==CATCH );
				setState(734);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==FINALLY) {
					{
					setState(733);
					finallyBlock();
					}
				}

				}
				break;
			case FINALLY:
				{
				setState(736);
				finallyBlock();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReturnStatementContext extends ParserRuleContext {
		public TerminalNode RETURN() { return getToken(ApexParser.RETURN, 0); }
		public TerminalNode SEMI() { return getToken(ApexParser.SEMI, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ReturnStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterReturnStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitReturnStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitReturnStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ReturnStatementContext returnStatement() throws RecognitionException {
		ReturnStatementContext _localctx = new ReturnStatementContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_returnStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(739);
			match(RETURN);
			setState(741);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << AFTER) | (1L << BEFORE) | (1L << GET) | (1L << INHERITED) | (1L << INSTANCEOF) | (1L << NEW) | (1L << NULL) | (1L << SET) | (1L << SHARING) | (1L << SUPER) | (1L << SWITCH) | (1L << THIS) | (1L << TRANSIENT) | (1L << TRIGGER) | (1L << WHEN) | (1L << WITH) | (1L << WITHOUT) | (1L << LIST) | (1L << MAP) | (1L << SELECT) | (1L << COUNT) | (1L << FROM) | (1L << AS) | (1L << USING) | (1L << SCOPE) | (1L << WHERE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ORDER - 64)) | (1L << (BY - 64)) | (1L << (LIMIT - 64)) | (1L << (SOQLAND - 64)) | (1L << (SOQLOR - 64)) | (1L << (NOT - 64)) | (1L << (AVG - 64)) | (1L << (COUNT_DISTINCT - 64)) | (1L << (MIN - 64)) | (1L << (MAX - 64)) | (1L << (SUM - 64)) | (1L << (TYPEOF - 64)) | (1L << (END - 64)) | (1L << (THEN - 64)) | (1L << (LIKE - 64)) | (1L << (IN - 64)) | (1L << (INCLUDES - 64)) | (1L << (EXCLUDES - 64)) | (1L << (ASC - 64)) | (1L << (DESC - 64)) | (1L << (NULLS - 64)) | (1L << (FIRST - 64)) | (1L << (LAST - 64)) | (1L << (GROUP - 64)) | (1L << (ALL - 64)) | (1L << (ROWS - 64)) | (1L << (VIEW - 64)) | (1L << (HAVING - 64)) | (1L << (ROLLUP - 64)) | (1L << (TOLABEL - 64)) | (1L << (OFFSET - 64)) | (1L << (DATA - 64)) | (1L << (CATEGORY - 64)) | (1L << (AT - 64)) | (1L << (ABOVE - 64)) | (1L << (BELOW - 64)) | (1L << (ABOVE_OR_BELOW - 64)) | (1L << (SECURITY_ENFORCED - 64)) | (1L << (REFERENCE - 64)) | (1L << (CUBE - 64)) | (1L << (FORMAT - 64)) | (1L << (TRACKING - 64)) | (1L << (VIEWSTAT - 64)) | (1L << (CUSTOM - 64)) | (1L << (STANDARD - 64)) | (1L << (CALENDAR_MONTH - 64)) | (1L << (CALENDAR_QUARTER - 64)) | (1L << (CALENDAR_YEAR - 64)) | (1L << (DAY_IN_MONTH - 64)) | (1L << (DAY_IN_WEEK - 64)) | (1L << (DAY_IN_YEAR - 64)) | (1L << (DAY_ONLY - 64)) | (1L << (FISCAL_MONTH - 64)) | (1L << (FISCAL_QUARTER - 64)) | (1L << (FISCAL_YEAR - 64)) | (1L << (HOUR_IN_DAY - 64)) | (1L << (WEEK_IN_MONTH - 64)) | (1L << (WEEK_IN_YEAR - 64)) | (1L << (CONVERT_TIMEZONE - 64)) | (1L << (YESTERDAY - 64)) | (1L << (TODAY - 64)) | (1L << (TOMORROW - 64)) | (1L << (LAST_WEEK - 64)) | (1L << (THIS_WEEK - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (NEXT_WEEK - 128)) | (1L << (LAST_MONTH - 128)) | (1L << (THIS_MONTH - 128)) | (1L << (NEXT_MONTH - 128)) | (1L << (LAST_90_DAYS - 128)) | (1L << (NEXT_90_DAYS - 128)) | (1L << (LAST_N_DAYS_N - 128)) | (1L << (NEXT_N_DAYS_N - 128)) | (1L << (NEXT_N_WEEKS_N - 128)) | (1L << (LAST_N_WEEKS_N - 128)) | (1L << (NEXT_N_MONTHS_N - 128)) | (1L << (LAST_N_MONTHS_N - 128)) | (1L << (THIS_QUARTER - 128)) | (1L << (LAST_QUARTER - 128)) | (1L << (NEXT_QUARTER - 128)) | (1L << (NEXT_N_QUARTERS_N - 128)) | (1L << (LAST_N_QUARTERS_N - 128)) | (1L << (THIS_YEAR - 128)) | (1L << (LAST_YEAR - 128)) | (1L << (NEXT_YEAR - 128)) | (1L << (NEXT_N_YEARS_N - 128)) | (1L << (LAST_N_YEARS_N - 128)) | (1L << (THIS_FISCAL_QUARTER - 128)) | (1L << (LAST_FISCAL_QUARTER - 128)) | (1L << (NEXT_FISCAL_QUARTER - 128)) | (1L << (NEXT_N_FISCAL_QUARTERS_N - 128)) | (1L << (LAST_N_FISCAL_QUARTERS_N - 128)) | (1L << (THIS_FISCAL_YEAR - 128)) | (1L << (LAST_FISCAL_YEAR - 128)) | (1L << (NEXT_FISCAL_YEAR - 128)) | (1L << (NEXT_N_FISCAL_YEARS_N - 128)) | (1L << (LAST_N_FISCAL_YEARS_N - 128)) | (1L << (FIND - 128)) | (1L << (EMAIL - 128)) | (1L << (NAME - 128)) | (1L << (PHONE - 128)) | (1L << (SIDEBAR - 128)) | (1L << (FIELDS - 128)) | (1L << (METADATA - 128)) | (1L << (PRICEBOOKID - 128)) | (1L << (NETWORK - 128)) | (1L << (SNIPPET - 128)) | (1L << (TARGET_LENGTH - 128)) | (1L << (DIVISION - 128)) | (1L << (RETURNING - 128)) | (1L << (LISTVIEW - 128)) | (1L << (FindLiteral - 128)) | (1L << (IntegerLiteral - 128)) | (1L << (LongLiteral - 128)) | (1L << (NumberLiteral - 128)) | (1L << (BooleanLiteral - 128)) | (1L << (StringLiteral - 128)) | (1L << (LPAREN - 128)) | (1L << (LBRACK - 128)))) != 0) || ((((_la - 195)) & ~0x3f) == 0 && ((1L << (_la - 195)) & ((1L << (BANG - 195)) | (1L << (TILDE - 195)) | (1L << (INC - 195)) | (1L << (DEC - 195)) | (1L << (ADD - 195)) | (1L << (SUB - 195)) | (1L << (Identifier - 195)))) != 0)) {
				{
				setState(740);
				expression(0);
				}
			}

			setState(743);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ThrowStatementContext extends ParserRuleContext {
		public TerminalNode THROW() { return getToken(ApexParser.THROW, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(ApexParser.SEMI, 0); }
		public ThrowStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_throwStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterThrowStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitThrowStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitThrowStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ThrowStatementContext throwStatement() throws RecognitionException {
		ThrowStatementContext _localctx = new ThrowStatementContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_throwStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(745);
			match(THROW);
			setState(746);
			expression(0);
			setState(747);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BreakStatementContext extends ParserRuleContext {
		public TerminalNode BREAK() { return getToken(ApexParser.BREAK, 0); }
		public TerminalNode SEMI() { return getToken(ApexParser.SEMI, 0); }
		public BreakStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_breakStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterBreakStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitBreakStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitBreakStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final BreakStatementContext breakStatement() throws RecognitionException {
		BreakStatementContext _localctx = new BreakStatementContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_breakStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(749);
			match(BREAK);
			setState(750);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ContinueStatementContext extends ParserRuleContext {
		public TerminalNode CONTINUE() { return getToken(ApexParser.CONTINUE, 0); }
		public TerminalNode SEMI() { return getToken(ApexParser.SEMI, 0); }
		public ContinueStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_continueStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterContinueStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitContinueStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitContinueStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ContinueStatementContext continueStatement() throws RecognitionException {
		ContinueStatementContext _localctx = new ContinueStatementContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_continueStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(752);
			match(CONTINUE);
			setState(753);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InsertStatementContext extends ParserRuleContext {
		public TerminalNode INSERT() { return getToken(ApexParser.INSERT, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(ApexParser.SEMI, 0); }
		public InsertStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_insertStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterInsertStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitInsertStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitInsertStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final InsertStatementContext insertStatement() throws RecognitionException {
		InsertStatementContext _localctx = new InsertStatementContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_insertStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(755);
			match(INSERT);
			setState(756);
			expression(0);
			setState(757);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UpdateStatementContext extends ParserRuleContext {
		public TerminalNode UPDATE() { return getToken(ApexParser.UPDATE, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(ApexParser.SEMI, 0); }
		public UpdateStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_updateStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterUpdateStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitUpdateStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitUpdateStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final UpdateStatementContext updateStatement() throws RecognitionException {
		UpdateStatementContext _localctx = new UpdateStatementContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_updateStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(759);
			match(UPDATE);
			setState(760);
			expression(0);
			setState(761);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeleteStatementContext extends ParserRuleContext {
		public TerminalNode DELETE() { return getToken(ApexParser.DELETE, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(ApexParser.SEMI, 0); }
		public DeleteStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_deleteStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterDeleteStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitDeleteStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitDeleteStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DeleteStatementContext deleteStatement() throws RecognitionException {
		DeleteStatementContext _localctx = new DeleteStatementContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_deleteStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(763);
			match(DELETE);
			setState(764);
			expression(0);
			setState(765);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UndeleteStatementContext extends ParserRuleContext {
		public TerminalNode UNDELETE() { return getToken(ApexParser.UNDELETE, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(ApexParser.SEMI, 0); }
		public UndeleteStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_undeleteStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterUndeleteStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitUndeleteStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitUndeleteStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final UndeleteStatementContext undeleteStatement() throws RecognitionException {
		UndeleteStatementContext _localctx = new UndeleteStatementContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_undeleteStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(767);
			match(UNDELETE);
			setState(768);
			expression(0);
			setState(769);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UpsertStatementContext extends ParserRuleContext {
		public TerminalNode UPSERT() { return getToken(ApexParser.UPSERT, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(ApexParser.SEMI, 0); }
		public QualifiedNameContext qualifiedName() {
			return getRuleContext(QualifiedNameContext.class,0);
		}
		public UpsertStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_upsertStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterUpsertStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitUpsertStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitUpsertStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final UpsertStatementContext upsertStatement() throws RecognitionException {
		UpsertStatementContext _localctx = new UpsertStatementContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_upsertStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(771);
			match(UPSERT);
			setState(772);
			expression(0);
			setState(774);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << AFTER) | (1L << BEFORE) | (1L << GET) | (1L << INHERITED) | (1L << INSTANCEOF) | (1L << SET) | (1L << SHARING) | (1L << SWITCH) | (1L << TRANSIENT) | (1L << TRIGGER) | (1L << WHEN) | (1L << WITH) | (1L << WITHOUT) | (1L << SELECT) | (1L << COUNT) | (1L << FROM) | (1L << AS) | (1L << USING) | (1L << SCOPE) | (1L << WHERE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ORDER - 64)) | (1L << (BY - 64)) | (1L << (LIMIT - 64)) | (1L << (SOQLAND - 64)) | (1L << (SOQLOR - 64)) | (1L << (NOT - 64)) | (1L << (AVG - 64)) | (1L << (COUNT_DISTINCT - 64)) | (1L << (MIN - 64)) | (1L << (MAX - 64)) | (1L << (SUM - 64)) | (1L << (TYPEOF - 64)) | (1L << (END - 64)) | (1L << (THEN - 64)) | (1L << (LIKE - 64)) | (1L << (IN - 64)) | (1L << (INCLUDES - 64)) | (1L << (EXCLUDES - 64)) | (1L << (ASC - 64)) | (1L << (DESC - 64)) | (1L << (NULLS - 64)) | (1L << (FIRST - 64)) | (1L << (LAST - 64)) | (1L << (GROUP - 64)) | (1L << (ALL - 64)) | (1L << (ROWS - 64)) | (1L << (VIEW - 64)) | (1L << (HAVING - 64)) | (1L << (ROLLUP - 64)) | (1L << (TOLABEL - 64)) | (1L << (OFFSET - 64)) | (1L << (DATA - 64)) | (1L << (CATEGORY - 64)) | (1L << (AT - 64)) | (1L << (ABOVE - 64)) | (1L << (BELOW - 64)) | (1L << (ABOVE_OR_BELOW - 64)) | (1L << (SECURITY_ENFORCED - 64)) | (1L << (REFERENCE - 64)) | (1L << (CUBE - 64)) | (1L << (FORMAT - 64)) | (1L << (TRACKING - 64)) | (1L << (VIEWSTAT - 64)) | (1L << (CUSTOM - 64)) | (1L << (STANDARD - 64)) | (1L << (CALENDAR_MONTH - 64)) | (1L << (CALENDAR_QUARTER - 64)) | (1L << (CALENDAR_YEAR - 64)) | (1L << (DAY_IN_MONTH - 64)) | (1L << (DAY_IN_WEEK - 64)) | (1L << (DAY_IN_YEAR - 64)) | (1L << (DAY_ONLY - 64)) | (1L << (FISCAL_MONTH - 64)) | (1L << (FISCAL_QUARTER - 64)) | (1L << (FISCAL_YEAR - 64)) | (1L << (HOUR_IN_DAY - 64)) | (1L << (WEEK_IN_MONTH - 64)) | (1L << (WEEK_IN_YEAR - 64)) | (1L << (CONVERT_TIMEZONE - 64)) | (1L << (YESTERDAY - 64)) | (1L << (TODAY - 64)) | (1L << (TOMORROW - 64)) | (1L << (LAST_WEEK - 64)) | (1L << (THIS_WEEK - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (NEXT_WEEK - 128)) | (1L << (LAST_MONTH - 128)) | (1L << (THIS_MONTH - 128)) | (1L << (NEXT_MONTH - 128)) | (1L << (LAST_90_DAYS - 128)) | (1L << (NEXT_90_DAYS - 128)) | (1L << (LAST_N_DAYS_N - 128)) | (1L << (NEXT_N_DAYS_N - 128)) | (1L << (NEXT_N_WEEKS_N - 128)) | (1L << (LAST_N_WEEKS_N - 128)) | (1L << (NEXT_N_MONTHS_N - 128)) | (1L << (LAST_N_MONTHS_N - 128)) | (1L << (THIS_QUARTER - 128)) | (1L << (LAST_QUARTER - 128)) | (1L << (NEXT_QUARTER - 128)) | (1L << (NEXT_N_QUARTERS_N - 128)) | (1L << (LAST_N_QUARTERS_N - 128)) | (1L << (THIS_YEAR - 128)) | (1L << (LAST_YEAR - 128)) | (1L << (NEXT_YEAR - 128)) | (1L << (NEXT_N_YEARS_N - 128)) | (1L << (LAST_N_YEARS_N - 128)) | (1L << (THIS_FISCAL_QUARTER - 128)) | (1L << (LAST_FISCAL_QUARTER - 128)) | (1L << (NEXT_FISCAL_QUARTER - 128)) | (1L << (NEXT_N_FISCAL_QUARTERS_N - 128)) | (1L << (LAST_N_FISCAL_QUARTERS_N - 128)) | (1L << (THIS_FISCAL_YEAR - 128)) | (1L << (LAST_FISCAL_YEAR - 128)) | (1L << (NEXT_FISCAL_YEAR - 128)) | (1L << (NEXT_N_FISCAL_YEARS_N - 128)) | (1L << (LAST_N_FISCAL_YEARS_N - 128)) | (1L << (FIND - 128)) | (1L << (EMAIL - 128)) | (1L << (NAME - 128)) | (1L << (PHONE - 128)) | (1L << (SIDEBAR - 128)) | (1L << (FIELDS - 128)) | (1L << (METADATA - 128)) | (1L << (PRICEBOOKID - 128)) | (1L << (NETWORK - 128)) | (1L << (SNIPPET - 128)) | (1L << (TARGET_LENGTH - 128)) | (1L << (DIVISION - 128)) | (1L << (RETURNING - 128)) | (1L << (LISTVIEW - 128)))) != 0) || _la==Identifier) {
				{
				setState(773);
				qualifiedName();
				}
			}

			setState(776);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MergeStatementContext extends ParserRuleContext {
		public TerminalNode MERGE() { return getToken(ApexParser.MERGE, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode SEMI() { return getToken(ApexParser.SEMI, 0); }
		public MergeStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mergeStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterMergeStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitMergeStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitMergeStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MergeStatementContext mergeStatement() throws RecognitionException {
		MergeStatementContext _localctx = new MergeStatementContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_mergeStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(778);
			match(MERGE);
			setState(779);
			expression(0);
			setState(780);
			expression(0);
			setState(781);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RunAsStatementContext extends ParserRuleContext {
		public TerminalNode SYSTEMRUNAS() { return getToken(ApexParser.SYSTEMRUNAS, 0); }
		public TerminalNode LPAREN() { return getToken(ApexParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(ApexParser.RPAREN, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public RunAsStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_runAsStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterRunAsStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitRunAsStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitRunAsStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final RunAsStatementContext runAsStatement() throws RecognitionException {
		RunAsStatementContext _localctx = new RunAsStatementContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_runAsStatement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(783);
			match(SYSTEMRUNAS);
			setState(784);
			match(LPAREN);
			setState(786);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << AFTER) | (1L << BEFORE) | (1L << GET) | (1L << INHERITED) | (1L << INSTANCEOF) | (1L << NEW) | (1L << NULL) | (1L << SET) | (1L << SHARING) | (1L << SUPER) | (1L << SWITCH) | (1L << THIS) | (1L << TRANSIENT) | (1L << TRIGGER) | (1L << WHEN) | (1L << WITH) | (1L << WITHOUT) | (1L << LIST) | (1L << MAP) | (1L << SELECT) | (1L << COUNT) | (1L << FROM) | (1L << AS) | (1L << USING) | (1L << SCOPE) | (1L << WHERE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ORDER - 64)) | (1L << (BY - 64)) | (1L << (LIMIT - 64)) | (1L << (SOQLAND - 64)) | (1L << (SOQLOR - 64)) | (1L << (NOT - 64)) | (1L << (AVG - 64)) | (1L << (COUNT_DISTINCT - 64)) | (1L << (MIN - 64)) | (1L << (MAX - 64)) | (1L << (SUM - 64)) | (1L << (TYPEOF - 64)) | (1L << (END - 64)) | (1L << (THEN - 64)) | (1L << (LIKE - 64)) | (1L << (IN - 64)) | (1L << (INCLUDES - 64)) | (1L << (EXCLUDES - 64)) | (1L << (ASC - 64)) | (1L << (DESC - 64)) | (1L << (NULLS - 64)) | (1L << (FIRST - 64)) | (1L << (LAST - 64)) | (1L << (GROUP - 64)) | (1L << (ALL - 64)) | (1L << (ROWS - 64)) | (1L << (VIEW - 64)) | (1L << (HAVING - 64)) | (1L << (ROLLUP - 64)) | (1L << (TOLABEL - 64)) | (1L << (OFFSET - 64)) | (1L << (DATA - 64)) | (1L << (CATEGORY - 64)) | (1L << (AT - 64)) | (1L << (ABOVE - 64)) | (1L << (BELOW - 64)) | (1L << (ABOVE_OR_BELOW - 64)) | (1L << (SECURITY_ENFORCED - 64)) | (1L << (REFERENCE - 64)) | (1L << (CUBE - 64)) | (1L << (FORMAT - 64)) | (1L << (TRACKING - 64)) | (1L << (VIEWSTAT - 64)) | (1L << (CUSTOM - 64)) | (1L << (STANDARD - 64)) | (1L << (CALENDAR_MONTH - 64)) | (1L << (CALENDAR_QUARTER - 64)) | (1L << (CALENDAR_YEAR - 64)) | (1L << (DAY_IN_MONTH - 64)) | (1L << (DAY_IN_WEEK - 64)) | (1L << (DAY_IN_YEAR - 64)) | (1L << (DAY_ONLY - 64)) | (1L << (FISCAL_MONTH - 64)) | (1L << (FISCAL_QUARTER - 64)) | (1L << (FISCAL_YEAR - 64)) | (1L << (HOUR_IN_DAY - 64)) | (1L << (WEEK_IN_MONTH - 64)) | (1L << (WEEK_IN_YEAR - 64)) | (1L << (CONVERT_TIMEZONE - 64)) | (1L << (YESTERDAY - 64)) | (1L << (TODAY - 64)) | (1L << (TOMORROW - 64)) | (1L << (LAST_WEEK - 64)) | (1L << (THIS_WEEK - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (NEXT_WEEK - 128)) | (1L << (LAST_MONTH - 128)) | (1L << (THIS_MONTH - 128)) | (1L << (NEXT_MONTH - 128)) | (1L << (LAST_90_DAYS - 128)) | (1L << (NEXT_90_DAYS - 128)) | (1L << (LAST_N_DAYS_N - 128)) | (1L << (NEXT_N_DAYS_N - 128)) | (1L << (NEXT_N_WEEKS_N - 128)) | (1L << (LAST_N_WEEKS_N - 128)) | (1L << (NEXT_N_MONTHS_N - 128)) | (1L << (LAST_N_MONTHS_N - 128)) | (1L << (THIS_QUARTER - 128)) | (1L << (LAST_QUARTER - 128)) | (1L << (NEXT_QUARTER - 128)) | (1L << (NEXT_N_QUARTERS_N - 128)) | (1L << (LAST_N_QUARTERS_N - 128)) | (1L << (THIS_YEAR - 128)) | (1L << (LAST_YEAR - 128)) | (1L << (NEXT_YEAR - 128)) | (1L << (NEXT_N_YEARS_N - 128)) | (1L << (LAST_N_YEARS_N - 128)) | (1L << (THIS_FISCAL_QUARTER - 128)) | (1L << (LAST_FISCAL_QUARTER - 128)) | (1L << (NEXT_FISCAL_QUARTER - 128)) | (1L << (NEXT_N_FISCAL_QUARTERS_N - 128)) | (1L << (LAST_N_FISCAL_QUARTERS_N - 128)) | (1L << (THIS_FISCAL_YEAR - 128)) | (1L << (LAST_FISCAL_YEAR - 128)) | (1L << (NEXT_FISCAL_YEAR - 128)) | (1L << (NEXT_N_FISCAL_YEARS_N - 128)) | (1L << (LAST_N_FISCAL_YEARS_N - 128)) | (1L << (FIND - 128)) | (1L << (EMAIL - 128)) | (1L << (NAME - 128)) | (1L << (PHONE - 128)) | (1L << (SIDEBAR - 128)) | (1L << (FIELDS - 128)) | (1L << (METADATA - 128)) | (1L << (PRICEBOOKID - 128)) | (1L << (NETWORK - 128)) | (1L << (SNIPPET - 128)) | (1L << (TARGET_LENGTH - 128)) | (1L << (DIVISION - 128)) | (1L << (RETURNING - 128)) | (1L << (LISTVIEW - 128)) | (1L << (FindLiteral - 128)) | (1L << (IntegerLiteral - 128)) | (1L << (LongLiteral - 128)) | (1L << (NumberLiteral - 128)) | (1L << (BooleanLiteral - 128)) | (1L << (StringLiteral - 128)) | (1L << (LPAREN - 128)) | (1L << (LBRACK - 128)))) != 0) || ((((_la - 195)) & ~0x3f) == 0 && ((1L << (_la - 195)) & ((1L << (BANG - 195)) | (1L << (TILDE - 195)) | (1L << (INC - 195)) | (1L << (DEC - 195)) | (1L << (ADD - 195)) | (1L << (SUB - 195)) | (1L << (Identifier - 195)))) != 0)) {
				{
				setState(785);
				expressionList();
				}
			}

			setState(788);
			match(RPAREN);
			setState(789);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionStatementContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(ApexParser.SEMI, 0); }
		public ExpressionStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterExpressionStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitExpressionStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitExpressionStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ExpressionStatementContext expressionStatement() throws RecognitionException {
		ExpressionStatementContext _localctx = new ExpressionStatementContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_expressionStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(791);
			expression(0);
			setState(792);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PropertyBlockContext extends ParserRuleContext {
		public GetterContext getter() {
			return getRuleContext(GetterContext.class,0);
		}
		public SetterContext setter() {
			return getRuleContext(SetterContext.class,0);
		}
		public List<ModifierContext> modifier() {
			return getRuleContexts(ModifierContext.class);
		}
		public ModifierContext modifier(int i) {
			return getRuleContext(ModifierContext.class,i);
		}
		public PropertyBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_propertyBlock; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterPropertyBlock(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitPropertyBlock(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitPropertyBlock(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PropertyBlockContext propertyBlock() throws RecognitionException {
		PropertyBlockContext _localctx = new PropertyBlockContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_propertyBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(797);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ABSTRACT) | (1L << FINAL) | (1L << GLOBAL) | (1L << INHERITED) | (1L << OVERRIDE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << STATIC) | (1L << TESTMETHOD) | (1L << TRANSIENT) | (1L << VIRTUAL) | (1L << WEBSERVICE) | (1L << WITH) | (1L << WITHOUT))) != 0) || _la==ATSIGN) {
				{
				{
				setState(794);
				modifier();
				}
				}
				setState(799);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(802);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case GET:
				{
				setState(800);
				getter();
				}
				break;
			case SET:
				{
				setState(801);
				setter();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GetterContext extends ParserRuleContext {
		public TerminalNode GET() { return getToken(ApexParser.GET, 0); }
		public TerminalNode SEMI() { return getToken(ApexParser.SEMI, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public GetterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_getter; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterGetter(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitGetter(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitGetter(this);
			else return visitor.visitChildren(this);
		}
	}

	public final GetterContext getter() throws RecognitionException {
		GetterContext _localctx = new GetterContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_getter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(804);
			match(GET);
			setState(807);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SEMI:
				{
				setState(805);
				match(SEMI);
				}
				break;
			case LBRACE:
				{
				setState(806);
				block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SetterContext extends ParserRuleContext {
		public TerminalNode SET() { return getToken(ApexParser.SET, 0); }
		public TerminalNode SEMI() { return getToken(ApexParser.SEMI, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public SetterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_setter; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterSetter(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitSetter(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitSetter(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SetterContext setter() throws RecognitionException {
		SetterContext _localctx = new SetterContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_setter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(809);
			match(SET);
			setState(812);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SEMI:
				{
				setState(810);
				match(SEMI);
				}
				break;
			case LBRACE:
				{
				setState(811);
				block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CatchClauseContext extends ParserRuleContext {
		public TerminalNode CATCH() { return getToken(ApexParser.CATCH, 0); }
		public TerminalNode LPAREN() { return getToken(ApexParser.LPAREN, 0); }
		public QualifiedNameContext qualifiedName() {
			return getRuleContext(QualifiedNameContext.class,0);
		}
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(ApexParser.RPAREN, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public List<ModifierContext> modifier() {
			return getRuleContexts(ModifierContext.class);
		}
		public ModifierContext modifier(int i) {
			return getRuleContext(ModifierContext.class,i);
		}
		public CatchClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_catchClause; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterCatchClause(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitCatchClause(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitCatchClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CatchClauseContext catchClause() throws RecognitionException {
		CatchClauseContext _localctx = new CatchClauseContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_catchClause);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(814);
			match(CATCH);
			setState(815);
			match(LPAREN);
			setState(819);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,66,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(816);
					modifier();
					}
					} 
				}
				setState(821);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,66,_ctx);
			}
			setState(822);
			qualifiedName();
			setState(823);
			id();
			setState(824);
			match(RPAREN);
			setState(825);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FinallyBlockContext extends ParserRuleContext {
		public TerminalNode FINALLY() { return getToken(ApexParser.FINALLY, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public FinallyBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_finallyBlock; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterFinallyBlock(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitFinallyBlock(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitFinallyBlock(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FinallyBlockContext finallyBlock() throws RecognitionException {
		FinallyBlockContext _localctx = new FinallyBlockContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_finallyBlock);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(827);
			match(FINALLY);
			setState(828);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForControlContext extends ParserRuleContext {
		public EnhancedForControlContext enhancedForControl() {
			return getRuleContext(EnhancedForControlContext.class,0);
		}
		public List<TerminalNode> SEMI() { return getTokens(ApexParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(ApexParser.SEMI, i);
		}
		public ForInitContext forInit() {
			return getRuleContext(ForInitContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ForUpdateContext forUpdate() {
			return getRuleContext(ForUpdateContext.class,0);
		}
		public ForControlContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forControl; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterForControl(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitForControl(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitForControl(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ForControlContext forControl() throws RecognitionException {
		ForControlContext _localctx = new ForControlContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_forControl);
		int _la;
		try {
			setState(842);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,70,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(830);
				enhancedForControl();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(832);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ABSTRACT) | (1L << AFTER) | (1L << BEFORE) | (1L << FINAL) | (1L << GET) | (1L << GLOBAL) | (1L << INHERITED) | (1L << INSTANCEOF) | (1L << NEW) | (1L << NULL) | (1L << OVERRIDE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << SET) | (1L << SHARING) | (1L << STATIC) | (1L << SUPER) | (1L << SWITCH) | (1L << TESTMETHOD) | (1L << THIS) | (1L << TRANSIENT) | (1L << TRIGGER) | (1L << VIRTUAL) | (1L << WEBSERVICE) | (1L << WHEN) | (1L << WITH) | (1L << WITHOUT) | (1L << LIST) | (1L << MAP) | (1L << SELECT) | (1L << COUNT) | (1L << FROM) | (1L << AS) | (1L << USING) | (1L << SCOPE) | (1L << WHERE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ORDER - 64)) | (1L << (BY - 64)) | (1L << (LIMIT - 64)) | (1L << (SOQLAND - 64)) | (1L << (SOQLOR - 64)) | (1L << (NOT - 64)) | (1L << (AVG - 64)) | (1L << (COUNT_DISTINCT - 64)) | (1L << (MIN - 64)) | (1L << (MAX - 64)) | (1L << (SUM - 64)) | (1L << (TYPEOF - 64)) | (1L << (END - 64)) | (1L << (THEN - 64)) | (1L << (LIKE - 64)) | (1L << (IN - 64)) | (1L << (INCLUDES - 64)) | (1L << (EXCLUDES - 64)) | (1L << (ASC - 64)) | (1L << (DESC - 64)) | (1L << (NULLS - 64)) | (1L << (FIRST - 64)) | (1L << (LAST - 64)) | (1L << (GROUP - 64)) | (1L << (ALL - 64)) | (1L << (ROWS - 64)) | (1L << (VIEW - 64)) | (1L << (HAVING - 64)) | (1L << (ROLLUP - 64)) | (1L << (TOLABEL - 64)) | (1L << (OFFSET - 64)) | (1L << (DATA - 64)) | (1L << (CATEGORY - 64)) | (1L << (AT - 64)) | (1L << (ABOVE - 64)) | (1L << (BELOW - 64)) | (1L << (ABOVE_OR_BELOW - 64)) | (1L << (SECURITY_ENFORCED - 64)) | (1L << (REFERENCE - 64)) | (1L << (CUBE - 64)) | (1L << (FORMAT - 64)) | (1L << (TRACKING - 64)) | (1L << (VIEWSTAT - 64)) | (1L << (CUSTOM - 64)) | (1L << (STANDARD - 64)) | (1L << (CALENDAR_MONTH - 64)) | (1L << (CALENDAR_QUARTER - 64)) | (1L << (CALENDAR_YEAR - 64)) | (1L << (DAY_IN_MONTH - 64)) | (1L << (DAY_IN_WEEK - 64)) | (1L << (DAY_IN_YEAR - 64)) | (1L << (DAY_ONLY - 64)) | (1L << (FISCAL_MONTH - 64)) | (1L << (FISCAL_QUARTER - 64)) | (1L << (FISCAL_YEAR - 64)) | (1L << (HOUR_IN_DAY - 64)) | (1L << (WEEK_IN_MONTH - 64)) | (1L << (WEEK_IN_YEAR - 64)) | (1L << (CONVERT_TIMEZONE - 64)) | (1L << (YESTERDAY - 64)) | (1L << (TODAY - 64)) | (1L << (TOMORROW - 64)) | (1L << (LAST_WEEK - 64)) | (1L << (THIS_WEEK - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (NEXT_WEEK - 128)) | (1L << (LAST_MONTH - 128)) | (1L << (THIS_MONTH - 128)) | (1L << (NEXT_MONTH - 128)) | (1L << (LAST_90_DAYS - 128)) | (1L << (NEXT_90_DAYS - 128)) | (1L << (LAST_N_DAYS_N - 128)) | (1L << (NEXT_N_DAYS_N - 128)) | (1L << (NEXT_N_WEEKS_N - 128)) | (1L << (LAST_N_WEEKS_N - 128)) | (1L << (NEXT_N_MONTHS_N - 128)) | (1L << (LAST_N_MONTHS_N - 128)) | (1L << (THIS_QUARTER - 128)) | (1L << (LAST_QUARTER - 128)) | (1L << (NEXT_QUARTER - 128)) | (1L << (NEXT_N_QUARTERS_N - 128)) | (1L << (LAST_N_QUARTERS_N - 128)) | (1L << (THIS_YEAR - 128)) | (1L << (LAST_YEAR - 128)) | (1L << (NEXT_YEAR - 128)) | (1L << (NEXT_N_YEARS_N - 128)) | (1L << (LAST_N_YEARS_N - 128)) | (1L << (THIS_FISCAL_QUARTER - 128)) | (1L << (LAST_FISCAL_QUARTER - 128)) | (1L << (NEXT_FISCAL_QUARTER - 128)) | (1L << (NEXT_N_FISCAL_QUARTERS_N - 128)) | (1L << (LAST_N_FISCAL_QUARTERS_N - 128)) | (1L << (THIS_FISCAL_YEAR - 128)) | (1L << (LAST_FISCAL_YEAR - 128)) | (1L << (NEXT_FISCAL_YEAR - 128)) | (1L << (NEXT_N_FISCAL_YEARS_N - 128)) | (1L << (LAST_N_FISCAL_YEARS_N - 128)) | (1L << (FIND - 128)) | (1L << (EMAIL - 128)) | (1L << (NAME - 128)) | (1L << (PHONE - 128)) | (1L << (SIDEBAR - 128)) | (1L << (FIELDS - 128)) | (1L << (METADATA - 128)) | (1L << (PRICEBOOKID - 128)) | (1L << (NETWORK - 128)) | (1L << (SNIPPET - 128)) | (1L << (TARGET_LENGTH - 128)) | (1L << (DIVISION - 128)) | (1L << (RETURNING - 128)) | (1L << (LISTVIEW - 128)) | (1L << (FindLiteral - 128)) | (1L << (IntegerLiteral - 128)) | (1L << (LongLiteral - 128)) | (1L << (NumberLiteral - 128)) | (1L << (BooleanLiteral - 128)) | (1L << (StringLiteral - 128)) | (1L << (LPAREN - 128)) | (1L << (LBRACK - 128)))) != 0) || ((((_la - 195)) & ~0x3f) == 0 && ((1L << (_la - 195)) & ((1L << (BANG - 195)) | (1L << (TILDE - 195)) | (1L << (INC - 195)) | (1L << (DEC - 195)) | (1L << (ADD - 195)) | (1L << (SUB - 195)) | (1L << (ATSIGN - 195)) | (1L << (Identifier - 195)))) != 0)) {
					{
					setState(831);
					forInit();
					}
				}

				setState(834);
				match(SEMI);
				setState(836);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << AFTER) | (1L << BEFORE) | (1L << GET) | (1L << INHERITED) | (1L << INSTANCEOF) | (1L << NEW) | (1L << NULL) | (1L << SET) | (1L << SHARING) | (1L << SUPER) | (1L << SWITCH) | (1L << THIS) | (1L << TRANSIENT) | (1L << TRIGGER) | (1L << WHEN) | (1L << WITH) | (1L << WITHOUT) | (1L << LIST) | (1L << MAP) | (1L << SELECT) | (1L << COUNT) | (1L << FROM) | (1L << AS) | (1L << USING) | (1L << SCOPE) | (1L << WHERE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ORDER - 64)) | (1L << (BY - 64)) | (1L << (LIMIT - 64)) | (1L << (SOQLAND - 64)) | (1L << (SOQLOR - 64)) | (1L << (NOT - 64)) | (1L << (AVG - 64)) | (1L << (COUNT_DISTINCT - 64)) | (1L << (MIN - 64)) | (1L << (MAX - 64)) | (1L << (SUM - 64)) | (1L << (TYPEOF - 64)) | (1L << (END - 64)) | (1L << (THEN - 64)) | (1L << (LIKE - 64)) | (1L << (IN - 64)) | (1L << (INCLUDES - 64)) | (1L << (EXCLUDES - 64)) | (1L << (ASC - 64)) | (1L << (DESC - 64)) | (1L << (NULLS - 64)) | (1L << (FIRST - 64)) | (1L << (LAST - 64)) | (1L << (GROUP - 64)) | (1L << (ALL - 64)) | (1L << (ROWS - 64)) | (1L << (VIEW - 64)) | (1L << (HAVING - 64)) | (1L << (ROLLUP - 64)) | (1L << (TOLABEL - 64)) | (1L << (OFFSET - 64)) | (1L << (DATA - 64)) | (1L << (CATEGORY - 64)) | (1L << (AT - 64)) | (1L << (ABOVE - 64)) | (1L << (BELOW - 64)) | (1L << (ABOVE_OR_BELOW - 64)) | (1L << (SECURITY_ENFORCED - 64)) | (1L << (REFERENCE - 64)) | (1L << (CUBE - 64)) | (1L << (FORMAT - 64)) | (1L << (TRACKING - 64)) | (1L << (VIEWSTAT - 64)) | (1L << (CUSTOM - 64)) | (1L << (STANDARD - 64)) | (1L << (CALENDAR_MONTH - 64)) | (1L << (CALENDAR_QUARTER - 64)) | (1L << (CALENDAR_YEAR - 64)) | (1L << (DAY_IN_MONTH - 64)) | (1L << (DAY_IN_WEEK - 64)) | (1L << (DAY_IN_YEAR - 64)) | (1L << (DAY_ONLY - 64)) | (1L << (FISCAL_MONTH - 64)) | (1L << (FISCAL_QUARTER - 64)) | (1L << (FISCAL_YEAR - 64)) | (1L << (HOUR_IN_DAY - 64)) | (1L << (WEEK_IN_MONTH - 64)) | (1L << (WEEK_IN_YEAR - 64)) | (1L << (CONVERT_TIMEZONE - 64)) | (1L << (YESTERDAY - 64)) | (1L << (TODAY - 64)) | (1L << (TOMORROW - 64)) | (1L << (LAST_WEEK - 64)) | (1L << (THIS_WEEK - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (NEXT_WEEK - 128)) | (1L << (LAST_MONTH - 128)) | (1L << (THIS_MONTH - 128)) | (1L << (NEXT_MONTH - 128)) | (1L << (LAST_90_DAYS - 128)) | (1L << (NEXT_90_DAYS - 128)) | (1L << (LAST_N_DAYS_N - 128)) | (1L << (NEXT_N_DAYS_N - 128)) | (1L << (NEXT_N_WEEKS_N - 128)) | (1L << (LAST_N_WEEKS_N - 128)) | (1L << (NEXT_N_MONTHS_N - 128)) | (1L << (LAST_N_MONTHS_N - 128)) | (1L << (THIS_QUARTER - 128)) | (1L << (LAST_QUARTER - 128)) | (1L << (NEXT_QUARTER - 128)) | (1L << (NEXT_N_QUARTERS_N - 128)) | (1L << (LAST_N_QUARTERS_N - 128)) | (1L << (THIS_YEAR - 128)) | (1L << (LAST_YEAR - 128)) | (1L << (NEXT_YEAR - 128)) | (1L << (NEXT_N_YEARS_N - 128)) | (1L << (LAST_N_YEARS_N - 128)) | (1L << (THIS_FISCAL_QUARTER - 128)) | (1L << (LAST_FISCAL_QUARTER - 128)) | (1L << (NEXT_FISCAL_QUARTER - 128)) | (1L << (NEXT_N_FISCAL_QUARTERS_N - 128)) | (1L << (LAST_N_FISCAL_QUARTERS_N - 128)) | (1L << (THIS_FISCAL_YEAR - 128)) | (1L << (LAST_FISCAL_YEAR - 128)) | (1L << (NEXT_FISCAL_YEAR - 128)) | (1L << (NEXT_N_FISCAL_YEARS_N - 128)) | (1L << (LAST_N_FISCAL_YEARS_N - 128)) | (1L << (FIND - 128)) | (1L << (EMAIL - 128)) | (1L << (NAME - 128)) | (1L << (PHONE - 128)) | (1L << (SIDEBAR - 128)) | (1L << (FIELDS - 128)) | (1L << (METADATA - 128)) | (1L << (PRICEBOOKID - 128)) | (1L << (NETWORK - 128)) | (1L << (SNIPPET - 128)) | (1L << (TARGET_LENGTH - 128)) | (1L << (DIVISION - 128)) | (1L << (RETURNING - 128)) | (1L << (LISTVIEW - 128)) | (1L << (FindLiteral - 128)) | (1L << (IntegerLiteral - 128)) | (1L << (LongLiteral - 128)) | (1L << (NumberLiteral - 128)) | (1L << (BooleanLiteral - 128)) | (1L << (StringLiteral - 128)) | (1L << (LPAREN - 128)) | (1L << (LBRACK - 128)))) != 0) || ((((_la - 195)) & ~0x3f) == 0 && ((1L << (_la - 195)) & ((1L << (BANG - 195)) | (1L << (TILDE - 195)) | (1L << (INC - 195)) | (1L << (DEC - 195)) | (1L << (ADD - 195)) | (1L << (SUB - 195)) | (1L << (Identifier - 195)))) != 0)) {
					{
					setState(835);
					expression(0);
					}
				}

				setState(838);
				match(SEMI);
				setState(840);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << AFTER) | (1L << BEFORE) | (1L << GET) | (1L << INHERITED) | (1L << INSTANCEOF) | (1L << NEW) | (1L << NULL) | (1L << SET) | (1L << SHARING) | (1L << SUPER) | (1L << SWITCH) | (1L << THIS) | (1L << TRANSIENT) | (1L << TRIGGER) | (1L << WHEN) | (1L << WITH) | (1L << WITHOUT) | (1L << LIST) | (1L << MAP) | (1L << SELECT) | (1L << COUNT) | (1L << FROM) | (1L << AS) | (1L << USING) | (1L << SCOPE) | (1L << WHERE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ORDER - 64)) | (1L << (BY - 64)) | (1L << (LIMIT - 64)) | (1L << (SOQLAND - 64)) | (1L << (SOQLOR - 64)) | (1L << (NOT - 64)) | (1L << (AVG - 64)) | (1L << (COUNT_DISTINCT - 64)) | (1L << (MIN - 64)) | (1L << (MAX - 64)) | (1L << (SUM - 64)) | (1L << (TYPEOF - 64)) | (1L << (END - 64)) | (1L << (THEN - 64)) | (1L << (LIKE - 64)) | (1L << (IN - 64)) | (1L << (INCLUDES - 64)) | (1L << (EXCLUDES - 64)) | (1L << (ASC - 64)) | (1L << (DESC - 64)) | (1L << (NULLS - 64)) | (1L << (FIRST - 64)) | (1L << (LAST - 64)) | (1L << (GROUP - 64)) | (1L << (ALL - 64)) | (1L << (ROWS - 64)) | (1L << (VIEW - 64)) | (1L << (HAVING - 64)) | (1L << (ROLLUP - 64)) | (1L << (TOLABEL - 64)) | (1L << (OFFSET - 64)) | (1L << (DATA - 64)) | (1L << (CATEGORY - 64)) | (1L << (AT - 64)) | (1L << (ABOVE - 64)) | (1L << (BELOW - 64)) | (1L << (ABOVE_OR_BELOW - 64)) | (1L << (SECURITY_ENFORCED - 64)) | (1L << (REFERENCE - 64)) | (1L << (CUBE - 64)) | (1L << (FORMAT - 64)) | (1L << (TRACKING - 64)) | (1L << (VIEWSTAT - 64)) | (1L << (CUSTOM - 64)) | (1L << (STANDARD - 64)) | (1L << (CALENDAR_MONTH - 64)) | (1L << (CALENDAR_QUARTER - 64)) | (1L << (CALENDAR_YEAR - 64)) | (1L << (DAY_IN_MONTH - 64)) | (1L << (DAY_IN_WEEK - 64)) | (1L << (DAY_IN_YEAR - 64)) | (1L << (DAY_ONLY - 64)) | (1L << (FISCAL_MONTH - 64)) | (1L << (FISCAL_QUARTER - 64)) | (1L << (FISCAL_YEAR - 64)) | (1L << (HOUR_IN_DAY - 64)) | (1L << (WEEK_IN_MONTH - 64)) | (1L << (WEEK_IN_YEAR - 64)) | (1L << (CONVERT_TIMEZONE - 64)) | (1L << (YESTERDAY - 64)) | (1L << (TODAY - 64)) | (1L << (TOMORROW - 64)) | (1L << (LAST_WEEK - 64)) | (1L << (THIS_WEEK - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (NEXT_WEEK - 128)) | (1L << (LAST_MONTH - 128)) | (1L << (THIS_MONTH - 128)) | (1L << (NEXT_MONTH - 128)) | (1L << (LAST_90_DAYS - 128)) | (1L << (NEXT_90_DAYS - 128)) | (1L << (LAST_N_DAYS_N - 128)) | (1L << (NEXT_N_DAYS_N - 128)) | (1L << (NEXT_N_WEEKS_N - 128)) | (1L << (LAST_N_WEEKS_N - 128)) | (1L << (NEXT_N_MONTHS_N - 128)) | (1L << (LAST_N_MONTHS_N - 128)) | (1L << (THIS_QUARTER - 128)) | (1L << (LAST_QUARTER - 128)) | (1L << (NEXT_QUARTER - 128)) | (1L << (NEXT_N_QUARTERS_N - 128)) | (1L << (LAST_N_QUARTERS_N - 128)) | (1L << (THIS_YEAR - 128)) | (1L << (LAST_YEAR - 128)) | (1L << (NEXT_YEAR - 128)) | (1L << (NEXT_N_YEARS_N - 128)) | (1L << (LAST_N_YEARS_N - 128)) | (1L << (THIS_FISCAL_QUARTER - 128)) | (1L << (LAST_FISCAL_QUARTER - 128)) | (1L << (NEXT_FISCAL_QUARTER - 128)) | (1L << (NEXT_N_FISCAL_QUARTERS_N - 128)) | (1L << (LAST_N_FISCAL_QUARTERS_N - 128)) | (1L << (THIS_FISCAL_YEAR - 128)) | (1L << (LAST_FISCAL_YEAR - 128)) | (1L << (NEXT_FISCAL_YEAR - 128)) | (1L << (NEXT_N_FISCAL_YEARS_N - 128)) | (1L << (LAST_N_FISCAL_YEARS_N - 128)) | (1L << (FIND - 128)) | (1L << (EMAIL - 128)) | (1L << (NAME - 128)) | (1L << (PHONE - 128)) | (1L << (SIDEBAR - 128)) | (1L << (FIELDS - 128)) | (1L << (METADATA - 128)) | (1L << (PRICEBOOKID - 128)) | (1L << (NETWORK - 128)) | (1L << (SNIPPET - 128)) | (1L << (TARGET_LENGTH - 128)) | (1L << (DIVISION - 128)) | (1L << (RETURNING - 128)) | (1L << (LISTVIEW - 128)) | (1L << (FindLiteral - 128)) | (1L << (IntegerLiteral - 128)) | (1L << (LongLiteral - 128)) | (1L << (NumberLiteral - 128)) | (1L << (BooleanLiteral - 128)) | (1L << (StringLiteral - 128)) | (1L << (LPAREN - 128)) | (1L << (LBRACK - 128)))) != 0) || ((((_la - 195)) & ~0x3f) == 0 && ((1L << (_la - 195)) & ((1L << (BANG - 195)) | (1L << (TILDE - 195)) | (1L << (INC - 195)) | (1L << (DEC - 195)) | (1L << (ADD - 195)) | (1L << (SUB - 195)) | (1L << (Identifier - 195)))) != 0)) {
					{
					setState(839);
					forUpdate();
					}
				}

				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForInitContext extends ParserRuleContext {
		public LocalVariableDeclarationContext localVariableDeclaration() {
			return getRuleContext(LocalVariableDeclarationContext.class,0);
		}
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public ForInitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forInit; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterForInit(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitForInit(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitForInit(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ForInitContext forInit() throws RecognitionException {
		ForInitContext _localctx = new ForInitContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_forInit);
		try {
			setState(846);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,71,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(844);
				localVariableDeclaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(845);
				expressionList();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnhancedForControlContext extends ParserRuleContext {
		public TypeRefContext typeRef() {
			return getRuleContext(TypeRefContext.class,0);
		}
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TerminalNode COLON() { return getToken(ApexParser.COLON, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public EnhancedForControlContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enhancedForControl; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterEnhancedForControl(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitEnhancedForControl(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitEnhancedForControl(this);
			else return visitor.visitChildren(this);
		}
	}

	public final EnhancedForControlContext enhancedForControl() throws RecognitionException {
		EnhancedForControlContext _localctx = new EnhancedForControlContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_enhancedForControl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(848);
			typeRef();
			setState(849);
			id();
			setState(850);
			match(COLON);
			setState(851);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForUpdateContext extends ParserRuleContext {
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public ForUpdateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forUpdate; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterForUpdate(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitForUpdate(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitForUpdate(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ForUpdateContext forUpdate() throws RecognitionException {
		ForUpdateContext _localctx = new ForUpdateContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_forUpdate);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(853);
			expressionList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParExpressionContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(ApexParser.LPAREN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(ApexParser.RPAREN, 0); }
		public ParExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterParExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitParExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitParExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ParExpressionContext parExpression() throws RecognitionException {
		ParExpressionContext _localctx = new ParExpressionContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_parExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(855);
			match(LPAREN);
			setState(856);
			expression(0);
			setState(857);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionListContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(ApexParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ApexParser.COMMA, i);
		}
		public ExpressionListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expressionList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterExpressionList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitExpressionList(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitExpressionList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ExpressionListContext expressionList() throws RecognitionException {
		ExpressionListContext _localctx = new ExpressionListContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_expressionList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(859);
			expression(0);
			setState(864);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(860);
				match(COMMA);
				setState(861);
				expression(0);
				}
				}
				setState(866);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	 
		public ExpressionContext() { }
		public void copyFrom(ExpressionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class PrimaryExpressionContext extends ExpressionContext {
		public PrimaryContext primary() {
			return getRuleContext(PrimaryContext.class,0);
		}
		public PrimaryExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterPrimaryExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitPrimaryExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitPrimaryExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class Arth1ExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode MUL() { return getToken(ApexParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(ApexParser.DIV, 0); }
		public TerminalNode MOD() { return getToken(ApexParser.MOD, 0); }
		public Arth1ExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterArth1Expression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitArth1Expression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitArth1Expression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class DotExpressionContext extends ExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode DOT() { return getToken(ApexParser.DOT, 0); }
		public TerminalNode QUESTIONDOT() { return getToken(ApexParser.QUESTIONDOT, 0); }
		public DotMethodCallContext dotMethodCall() {
			return getRuleContext(DotMethodCallContext.class,0);
		}
		public AnyIdContext anyId() {
			return getRuleContext(AnyIdContext.class,0);
		}
		public DotExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterDotExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitDotExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitDotExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class BitOrExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode BITOR() { return getToken(ApexParser.BITOR, 0); }
		public BitOrExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterBitOrExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitBitOrExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitBitOrExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class ArrayExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode LBRACK() { return getToken(ApexParser.LBRACK, 0); }
		public TerminalNode RBRACK() { return getToken(ApexParser.RBRACK, 0); }
		public ArrayExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterArrayExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitArrayExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitArrayExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class NewExpressionContext extends ExpressionContext {
		public TerminalNode NEW() { return getToken(ApexParser.NEW, 0); }
		public CreatorContext creator() {
			return getRuleContext(CreatorContext.class,0);
		}
		public NewExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterNewExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitNewExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitNewExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class AssignExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode ASSIGN() { return getToken(ApexParser.ASSIGN, 0); }
		public TerminalNode ADD_ASSIGN() { return getToken(ApexParser.ADD_ASSIGN, 0); }
		public TerminalNode SUB_ASSIGN() { return getToken(ApexParser.SUB_ASSIGN, 0); }
		public TerminalNode MUL_ASSIGN() { return getToken(ApexParser.MUL_ASSIGN, 0); }
		public TerminalNode DIV_ASSIGN() { return getToken(ApexParser.DIV_ASSIGN, 0); }
		public TerminalNode AND_ASSIGN() { return getToken(ApexParser.AND_ASSIGN, 0); }
		public TerminalNode OR_ASSIGN() { return getToken(ApexParser.OR_ASSIGN, 0); }
		public TerminalNode XOR_ASSIGN() { return getToken(ApexParser.XOR_ASSIGN, 0); }
		public TerminalNode RSHIFT_ASSIGN() { return getToken(ApexParser.RSHIFT_ASSIGN, 0); }
		public TerminalNode URSHIFT_ASSIGN() { return getToken(ApexParser.URSHIFT_ASSIGN, 0); }
		public TerminalNode LSHIFT_ASSIGN() { return getToken(ApexParser.LSHIFT_ASSIGN, 0); }
		public TerminalNode MOD_ASSIGN() { return getToken(ApexParser.MOD_ASSIGN, 0); }
		public AssignExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterAssignExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitAssignExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitAssignExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class MethodCallExpressionContext extends ExpressionContext {
		public MethodCallContext methodCall() {
			return getRuleContext(MethodCallContext.class,0);
		}
		public MethodCallExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterMethodCallExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitMethodCallExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitMethodCallExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class BitNotExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode CARET() { return getToken(ApexParser.CARET, 0); }
		public BitNotExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterBitNotExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitBitNotExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitBitNotExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class Arth2ExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode ADD() { return getToken(ApexParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(ApexParser.SUB, 0); }
		public Arth2ExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterArth2Expression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitArth2Expression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitArth2Expression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class LogAndExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode AND() { return getToken(ApexParser.AND, 0); }
		public LogAndExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterLogAndExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitLogAndExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitLogAndExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class CastExpressionContext extends ExpressionContext {
		public TerminalNode LPAREN() { return getToken(ApexParser.LPAREN, 0); }
		public TypeRefContext typeRef() {
			return getRuleContext(TypeRefContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(ApexParser.RPAREN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public CastExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterCastExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitCastExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitCastExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class BitAndExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode BITAND() { return getToken(ApexParser.BITAND, 0); }
		public BitAndExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterBitAndExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitBitAndExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitBitAndExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class CmpExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode GT() { return getToken(ApexParser.GT, 0); }
		public TerminalNode LT() { return getToken(ApexParser.LT, 0); }
		public TerminalNode ASSIGN() { return getToken(ApexParser.ASSIGN, 0); }
		public CmpExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterCmpExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitCmpExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitCmpExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class BitExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> LT() { return getTokens(ApexParser.LT); }
		public TerminalNode LT(int i) {
			return getToken(ApexParser.LT, i);
		}
		public List<TerminalNode> GT() { return getTokens(ApexParser.GT); }
		public TerminalNode GT(int i) {
			return getToken(ApexParser.GT, i);
		}
		public BitExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterBitExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitBitExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitBitExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class LogOrExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode OR() { return getToken(ApexParser.OR, 0); }
		public LogOrExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterLogOrExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitLogOrExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitLogOrExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class CondExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode QUESTION() { return getToken(ApexParser.QUESTION, 0); }
		public TerminalNode COLON() { return getToken(ApexParser.COLON, 0); }
		public CondExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterCondExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitCondExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitCondExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class EqualityExpressionContext extends ExpressionContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode TRIPLEEQUAL() { return getToken(ApexParser.TRIPLEEQUAL, 0); }
		public TerminalNode TRIPLENOTEQUAL() { return getToken(ApexParser.TRIPLENOTEQUAL, 0); }
		public TerminalNode EQUAL() { return getToken(ApexParser.EQUAL, 0); }
		public TerminalNode NOTEQUAL() { return getToken(ApexParser.NOTEQUAL, 0); }
		public TerminalNode LESSANDGREATER() { return getToken(ApexParser.LESSANDGREATER, 0); }
		public EqualityExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterEqualityExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitEqualityExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitEqualityExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class PostOpExpressionContext extends ExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode INC() { return getToken(ApexParser.INC, 0); }
		public TerminalNode DEC() { return getToken(ApexParser.DEC, 0); }
		public PostOpExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterPostOpExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitPostOpExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitPostOpExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class NegExpressionContext extends ExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode TILDE() { return getToken(ApexParser.TILDE, 0); }
		public TerminalNode BANG() { return getToken(ApexParser.BANG, 0); }
		public NegExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterNegExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitNegExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitNegExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class PreOpExpressionContext extends ExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode ADD() { return getToken(ApexParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(ApexParser.SUB, 0); }
		public TerminalNode INC() { return getToken(ApexParser.INC, 0); }
		public TerminalNode DEC() { return getToken(ApexParser.DEC, 0); }
		public PreOpExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterPreOpExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitPreOpExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitPreOpExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class SubExpressionContext extends ExpressionContext {
		public TerminalNode LPAREN() { return getToken(ApexParser.LPAREN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(ApexParser.RPAREN, 0); }
		public SubExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterSubExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitSubExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitSubExpression(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class InstanceOfExpressionContext extends ExpressionContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode INSTANCEOF() { return getToken(ApexParser.INSTANCEOF, 0); }
		public TypeRefContext typeRef() {
			return getRuleContext(TypeRefContext.class,0);
		}
		public InstanceOfExpressionContext(ExpressionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterInstanceOfExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitInstanceOfExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitInstanceOfExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 144;
		enterRecursionRule(_localctx, 144, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(885);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,73,_ctx) ) {
			case 1:
				{
				_localctx = new PrimaryExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(868);
				primary();
				}
				break;
			case 2:
				{
				_localctx = new MethodCallExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(869);
				methodCall();
				}
				break;
			case 3:
				{
				_localctx = new NewExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(870);
				match(NEW);
				setState(871);
				creator();
				}
				break;
			case 4:
				{
				_localctx = new CastExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(872);
				match(LPAREN);
				setState(873);
				typeRef();
				setState(874);
				match(RPAREN);
				setState(875);
				expression(18);
				}
				break;
			case 5:
				{
				_localctx = new SubExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(877);
				match(LPAREN);
				setState(878);
				expression(0);
				setState(879);
				match(RPAREN);
				}
				break;
			case 6:
				{
				_localctx = new PreOpExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(881);
				_la = _input.LA(1);
				if ( !(((((_la - 207)) & ~0x3f) == 0 && ((1L << (_la - 207)) & ((1L << (INC - 207)) | (1L << (DEC - 207)) | (1L << (ADD - 207)) | (1L << (SUB - 207)))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(882);
				expression(15);
				}
				break;
			case 7:
				{
				_localctx = new NegExpressionContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(883);
				_la = _input.LA(1);
				if ( !(_la==BANG || _la==TILDE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(884);
				expression(14);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(955);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,78,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(953);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,77,_ctx) ) {
					case 1:
						{
						_localctx = new Arth1ExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(887);
						if (!(precpred(_ctx, 13))) throw new FailedPredicateException(this, "precpred(_ctx, 13)");
						setState(888);
						_la = _input.LA(1);
						if ( !(((((_la - 211)) & ~0x3f) == 0 && ((1L << (_la - 211)) & ((1L << (MUL - 211)) | (1L << (DIV - 211)) | (1L << (MOD - 211)))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(889);
						expression(14);
						}
						break;
					case 2:
						{
						_localctx = new Arth2ExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(890);
						if (!(precpred(_ctx, 12))) throw new FailedPredicateException(this, "precpred(_ctx, 12)");
						setState(891);
						_la = _input.LA(1);
						if ( !(_la==ADD || _la==SUB) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(892);
						expression(13);
						}
						break;
					case 3:
						{
						_localctx = new BitExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(893);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(901);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,74,_ctx) ) {
						case 1:
							{
							setState(894);
							match(LT);
							setState(895);
							match(LT);
							}
							break;
						case 2:
							{
							setState(896);
							match(GT);
							setState(897);
							match(GT);
							setState(898);
							match(GT);
							}
							break;
						case 3:
							{
							setState(899);
							match(GT);
							setState(900);
							match(GT);
							}
							break;
						}
						setState(903);
						expression(12);
						}
						break;
					case 4:
						{
						_localctx = new CmpExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(904);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(905);
						_la = _input.LA(1);
						if ( !(_la==GT || _la==LT) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(907);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==ASSIGN) {
							{
							setState(906);
							match(ASSIGN);
							}
						}

						setState(909);
						expression(11);
						}
						break;
					case 5:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(910);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(911);
						_la = _input.LA(1);
						if ( !(((((_la - 200)) & ~0x3f) == 0 && ((1L << (_la - 200)) & ((1L << (EQUAL - 200)) | (1L << (TRIPLEEQUAL - 200)) | (1L << (NOTEQUAL - 200)) | (1L << (LESSANDGREATER - 200)) | (1L << (TRIPLENOTEQUAL - 200)))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(912);
						expression(9);
						}
						break;
					case 6:
						{
						_localctx = new BitAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(913);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(914);
						match(BITAND);
						setState(915);
						expression(8);
						}
						break;
					case 7:
						{
						_localctx = new BitNotExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(916);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(917);
						match(CARET);
						setState(918);
						expression(7);
						}
						break;
					case 8:
						{
						_localctx = new BitOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(919);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(920);
						match(BITOR);
						setState(921);
						expression(6);
						}
						break;
					case 9:
						{
						_localctx = new LogAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(922);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(923);
						match(AND);
						setState(924);
						expression(5);
						}
						break;
					case 10:
						{
						_localctx = new LogOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(925);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(926);
						match(OR);
						setState(927);
						expression(4);
						}
						break;
					case 11:
						{
						_localctx = new CondExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(928);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(929);
						match(QUESTION);
						setState(930);
						expression(0);
						setState(931);
						match(COLON);
						setState(932);
						expression(2);
						}
						break;
					case 12:
						{
						_localctx = new AssignExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(934);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(935);
						_la = _input.LA(1);
						if ( !(((((_la - 192)) & ~0x3f) == 0 && ((1L << (_la - 192)) & ((1L << (ASSIGN - 192)) | (1L << (ADD_ASSIGN - 192)) | (1L << (SUB_ASSIGN - 192)) | (1L << (MUL_ASSIGN - 192)) | (1L << (DIV_ASSIGN - 192)) | (1L << (AND_ASSIGN - 192)) | (1L << (OR_ASSIGN - 192)) | (1L << (XOR_ASSIGN - 192)) | (1L << (MOD_ASSIGN - 192)) | (1L << (LSHIFT_ASSIGN - 192)) | (1L << (RSHIFT_ASSIGN - 192)) | (1L << (URSHIFT_ASSIGN - 192)))) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(936);
						expression(1);
						}
						break;
					case 13:
						{
						_localctx = new DotExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(937);
						if (!(precpred(_ctx, 22))) throw new FailedPredicateException(this, "precpred(_ctx, 22)");
						setState(938);
						_la = _input.LA(1);
						if ( !(_la==DOT || _la==QUESTIONDOT) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(941);
						_errHandler.sync(this);
						switch ( getInterpreter().adaptivePredict(_input,76,_ctx) ) {
						case 1:
							{
							setState(939);
							dotMethodCall();
							}
							break;
						case 2:
							{
							setState(940);
							anyId();
							}
							break;
						}
						}
						break;
					case 14:
						{
						_localctx = new ArrayExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(943);
						if (!(precpred(_ctx, 21))) throw new FailedPredicateException(this, "precpred(_ctx, 21)");
						setState(944);
						match(LBRACK);
						setState(945);
						expression(0);
						setState(946);
						match(RBRACK);
						}
						break;
					case 15:
						{
						_localctx = new PostOpExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(948);
						if (!(precpred(_ctx, 16))) throw new FailedPredicateException(this, "precpred(_ctx, 16)");
						setState(949);
						_la = _input.LA(1);
						if ( !(_la==INC || _la==DEC) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						break;
					case 16:
						{
						_localctx = new InstanceOfExpressionContext(new ExpressionContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(950);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(951);
						match(INSTANCEOF);
						setState(952);
						typeRef();
						}
						break;
					}
					} 
				}
				setState(957);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,78,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class PrimaryContext extends ParserRuleContext {
		public PrimaryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primary; }
	 
		public PrimaryContext() { }
		public void copyFrom(PrimaryContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ThisPrimaryContext extends PrimaryContext {
		public TerminalNode THIS() { return getToken(ApexParser.THIS, 0); }
		public ThisPrimaryContext(PrimaryContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterThisPrimary(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitThisPrimary(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitThisPrimary(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class SoqlPrimaryContext extends PrimaryContext {
		public SoqlLiteralContext soqlLiteral() {
			return getRuleContext(SoqlLiteralContext.class,0);
		}
		public SoqlPrimaryContext(PrimaryContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterSoqlPrimary(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitSoqlPrimary(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitSoqlPrimary(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class SuperPrimaryContext extends PrimaryContext {
		public TerminalNode SUPER() { return getToken(ApexParser.SUPER, 0); }
		public SuperPrimaryContext(PrimaryContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterSuperPrimary(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitSuperPrimary(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitSuperPrimary(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class TypeRefPrimaryContext extends PrimaryContext {
		public TypeRefContext typeRef() {
			return getRuleContext(TypeRefContext.class,0);
		}
		public TerminalNode DOT() { return getToken(ApexParser.DOT, 0); }
		public TerminalNode CLASS() { return getToken(ApexParser.CLASS, 0); }
		public TypeRefPrimaryContext(PrimaryContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterTypeRefPrimary(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitTypeRefPrimary(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitTypeRefPrimary(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class IdPrimaryContext extends PrimaryContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public IdPrimaryContext(PrimaryContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterIdPrimary(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitIdPrimary(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitIdPrimary(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class SoslPrimaryContext extends PrimaryContext {
		public SoslLiteralContext soslLiteral() {
			return getRuleContext(SoslLiteralContext.class,0);
		}
		public SoslPrimaryContext(PrimaryContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterSoslPrimary(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitSoslPrimary(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitSoslPrimary(this);
			else return visitor.visitChildren(this);
		}
	}
	public static class LiteralPrimaryContext extends PrimaryContext {
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public LiteralPrimaryContext(PrimaryContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterLiteralPrimary(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitLiteralPrimary(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitLiteralPrimary(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PrimaryContext primary() throws RecognitionException {
		PrimaryContext _localctx = new PrimaryContext(_ctx, getState());
		enterRule(_localctx, 146, RULE_primary);
		try {
			setState(968);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,79,_ctx) ) {
			case 1:
				_localctx = new ThisPrimaryContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(958);
				match(THIS);
				}
				break;
			case 2:
				_localctx = new SuperPrimaryContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(959);
				match(SUPER);
				}
				break;
			case 3:
				_localctx = new LiteralPrimaryContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(960);
				literal();
				}
				break;
			case 4:
				_localctx = new TypeRefPrimaryContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(961);
				typeRef();
				setState(962);
				match(DOT);
				setState(963);
				match(CLASS);
				}
				break;
			case 5:
				_localctx = new IdPrimaryContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(965);
				id();
				}
				break;
			case 6:
				_localctx = new SoqlPrimaryContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(966);
				soqlLiteral();
				}
				break;
			case 7:
				_localctx = new SoslPrimaryContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(967);
				soslLiteral();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MethodCallContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(ApexParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(ApexParser.RPAREN, 0); }
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public TerminalNode THIS() { return getToken(ApexParser.THIS, 0); }
		public TerminalNode SUPER() { return getToken(ApexParser.SUPER, 0); }
		public MethodCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_methodCall; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterMethodCall(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitMethodCall(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitMethodCall(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MethodCallContext methodCall() throws RecognitionException {
		MethodCallContext _localctx = new MethodCallContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_methodCall);
		int _la;
		try {
			setState(989);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case AFTER:
			case BEFORE:
			case GET:
			case INHERITED:
			case INSTANCEOF:
			case SET:
			case SHARING:
			case SWITCH:
			case TRANSIENT:
			case TRIGGER:
			case WHEN:
			case WITH:
			case WITHOUT:
			case SELECT:
			case COUNT:
			case FROM:
			case AS:
			case USING:
			case SCOPE:
			case WHERE:
			case ORDER:
			case BY:
			case LIMIT:
			case SOQLAND:
			case SOQLOR:
			case NOT:
			case AVG:
			case COUNT_DISTINCT:
			case MIN:
			case MAX:
			case SUM:
			case TYPEOF:
			case END:
			case THEN:
			case LIKE:
			case IN:
			case INCLUDES:
			case EXCLUDES:
			case ASC:
			case DESC:
			case NULLS:
			case FIRST:
			case LAST:
			case GROUP:
			case ALL:
			case ROWS:
			case VIEW:
			case HAVING:
			case ROLLUP:
			case TOLABEL:
			case OFFSET:
			case DATA:
			case CATEGORY:
			case AT:
			case ABOVE:
			case BELOW:
			case ABOVE_OR_BELOW:
			case SECURITY_ENFORCED:
			case REFERENCE:
			case CUBE:
			case FORMAT:
			case TRACKING:
			case VIEWSTAT:
			case CUSTOM:
			case STANDARD:
			case CALENDAR_MONTH:
			case CALENDAR_QUARTER:
			case CALENDAR_YEAR:
			case DAY_IN_MONTH:
			case DAY_IN_WEEK:
			case DAY_IN_YEAR:
			case DAY_ONLY:
			case FISCAL_MONTH:
			case FISCAL_QUARTER:
			case FISCAL_YEAR:
			case HOUR_IN_DAY:
			case WEEK_IN_MONTH:
			case WEEK_IN_YEAR:
			case CONVERT_TIMEZONE:
			case YESTERDAY:
			case TODAY:
			case TOMORROW:
			case LAST_WEEK:
			case THIS_WEEK:
			case NEXT_WEEK:
			case LAST_MONTH:
			case THIS_MONTH:
			case NEXT_MONTH:
			case LAST_90_DAYS:
			case NEXT_90_DAYS:
			case LAST_N_DAYS_N:
			case NEXT_N_DAYS_N:
			case NEXT_N_WEEKS_N:
			case LAST_N_WEEKS_N:
			case NEXT_N_MONTHS_N:
			case LAST_N_MONTHS_N:
			case THIS_QUARTER:
			case LAST_QUARTER:
			case NEXT_QUARTER:
			case NEXT_N_QUARTERS_N:
			case LAST_N_QUARTERS_N:
			case THIS_YEAR:
			case LAST_YEAR:
			case NEXT_YEAR:
			case NEXT_N_YEARS_N:
			case LAST_N_YEARS_N:
			case THIS_FISCAL_QUARTER:
			case LAST_FISCAL_QUARTER:
			case NEXT_FISCAL_QUARTER:
			case NEXT_N_FISCAL_QUARTERS_N:
			case LAST_N_FISCAL_QUARTERS_N:
			case THIS_FISCAL_YEAR:
			case LAST_FISCAL_YEAR:
			case NEXT_FISCAL_YEAR:
			case NEXT_N_FISCAL_YEARS_N:
			case LAST_N_FISCAL_YEARS_N:
			case FIND:
			case EMAIL:
			case NAME:
			case PHONE:
			case SIDEBAR:
			case FIELDS:
			case METADATA:
			case PRICEBOOKID:
			case NETWORK:
			case SNIPPET:
			case TARGET_LENGTH:
			case DIVISION:
			case RETURNING:
			case LISTVIEW:
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(970);
				id();
				setState(971);
				match(LPAREN);
				setState(973);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << AFTER) | (1L << BEFORE) | (1L << GET) | (1L << INHERITED) | (1L << INSTANCEOF) | (1L << NEW) | (1L << NULL) | (1L << SET) | (1L << SHARING) | (1L << SUPER) | (1L << SWITCH) | (1L << THIS) | (1L << TRANSIENT) | (1L << TRIGGER) | (1L << WHEN) | (1L << WITH) | (1L << WITHOUT) | (1L << LIST) | (1L << MAP) | (1L << SELECT) | (1L << COUNT) | (1L << FROM) | (1L << AS) | (1L << USING) | (1L << SCOPE) | (1L << WHERE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ORDER - 64)) | (1L << (BY - 64)) | (1L << (LIMIT - 64)) | (1L << (SOQLAND - 64)) | (1L << (SOQLOR - 64)) | (1L << (NOT - 64)) | (1L << (AVG - 64)) | (1L << (COUNT_DISTINCT - 64)) | (1L << (MIN - 64)) | (1L << (MAX - 64)) | (1L << (SUM - 64)) | (1L << (TYPEOF - 64)) | (1L << (END - 64)) | (1L << (THEN - 64)) | (1L << (LIKE - 64)) | (1L << (IN - 64)) | (1L << (INCLUDES - 64)) | (1L << (EXCLUDES - 64)) | (1L << (ASC - 64)) | (1L << (DESC - 64)) | (1L << (NULLS - 64)) | (1L << (FIRST - 64)) | (1L << (LAST - 64)) | (1L << (GROUP - 64)) | (1L << (ALL - 64)) | (1L << (ROWS - 64)) | (1L << (VIEW - 64)) | (1L << (HAVING - 64)) | (1L << (ROLLUP - 64)) | (1L << (TOLABEL - 64)) | (1L << (OFFSET - 64)) | (1L << (DATA - 64)) | (1L << (CATEGORY - 64)) | (1L << (AT - 64)) | (1L << (ABOVE - 64)) | (1L << (BELOW - 64)) | (1L << (ABOVE_OR_BELOW - 64)) | (1L << (SECURITY_ENFORCED - 64)) | (1L << (REFERENCE - 64)) | (1L << (CUBE - 64)) | (1L << (FORMAT - 64)) | (1L << (TRACKING - 64)) | (1L << (VIEWSTAT - 64)) | (1L << (CUSTOM - 64)) | (1L << (STANDARD - 64)) | (1L << (CALENDAR_MONTH - 64)) | (1L << (CALENDAR_QUARTER - 64)) | (1L << (CALENDAR_YEAR - 64)) | (1L << (DAY_IN_MONTH - 64)) | (1L << (DAY_IN_WEEK - 64)) | (1L << (DAY_IN_YEAR - 64)) | (1L << (DAY_ONLY - 64)) | (1L << (FISCAL_MONTH - 64)) | (1L << (FISCAL_QUARTER - 64)) | (1L << (FISCAL_YEAR - 64)) | (1L << (HOUR_IN_DAY - 64)) | (1L << (WEEK_IN_MONTH - 64)) | (1L << (WEEK_IN_YEAR - 64)) | (1L << (CONVERT_TIMEZONE - 64)) | (1L << (YESTERDAY - 64)) | (1L << (TODAY - 64)) | (1L << (TOMORROW - 64)) | (1L << (LAST_WEEK - 64)) | (1L << (THIS_WEEK - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (NEXT_WEEK - 128)) | (1L << (LAST_MONTH - 128)) | (1L << (THIS_MONTH - 128)) | (1L << (NEXT_MONTH - 128)) | (1L << (LAST_90_DAYS - 128)) | (1L << (NEXT_90_DAYS - 128)) | (1L << (LAST_N_DAYS_N - 128)) | (1L << (NEXT_N_DAYS_N - 128)) | (1L << (NEXT_N_WEEKS_N - 128)) | (1L << (LAST_N_WEEKS_N - 128)) | (1L << (NEXT_N_MONTHS_N - 128)) | (1L << (LAST_N_MONTHS_N - 128)) | (1L << (THIS_QUARTER - 128)) | (1L << (LAST_QUARTER - 128)) | (1L << (NEXT_QUARTER - 128)) | (1L << (NEXT_N_QUARTERS_N - 128)) | (1L << (LAST_N_QUARTERS_N - 128)) | (1L << (THIS_YEAR - 128)) | (1L << (LAST_YEAR - 128)) | (1L << (NEXT_YEAR - 128)) | (1L << (NEXT_N_YEARS_N - 128)) | (1L << (LAST_N_YEARS_N - 128)) | (1L << (THIS_FISCAL_QUARTER - 128)) | (1L << (LAST_FISCAL_QUARTER - 128)) | (1L << (NEXT_FISCAL_QUARTER - 128)) | (1L << (NEXT_N_FISCAL_QUARTERS_N - 128)) | (1L << (LAST_N_FISCAL_QUARTERS_N - 128)) | (1L << (THIS_FISCAL_YEAR - 128)) | (1L << (LAST_FISCAL_YEAR - 128)) | (1L << (NEXT_FISCAL_YEAR - 128)) | (1L << (NEXT_N_FISCAL_YEARS_N - 128)) | (1L << (LAST_N_FISCAL_YEARS_N - 128)) | (1L << (FIND - 128)) | (1L << (EMAIL - 128)) | (1L << (NAME - 128)) | (1L << (PHONE - 128)) | (1L << (SIDEBAR - 128)) | (1L << (FIELDS - 128)) | (1L << (METADATA - 128)) | (1L << (PRICEBOOKID - 128)) | (1L << (NETWORK - 128)) | (1L << (SNIPPET - 128)) | (1L << (TARGET_LENGTH - 128)) | (1L << (DIVISION - 128)) | (1L << (RETURNING - 128)) | (1L << (LISTVIEW - 128)) | (1L << (FindLiteral - 128)) | (1L << (IntegerLiteral - 128)) | (1L << (LongLiteral - 128)) | (1L << (NumberLiteral - 128)) | (1L << (BooleanLiteral - 128)) | (1L << (StringLiteral - 128)) | (1L << (LPAREN - 128)) | (1L << (LBRACK - 128)))) != 0) || ((((_la - 195)) & ~0x3f) == 0 && ((1L << (_la - 195)) & ((1L << (BANG - 195)) | (1L << (TILDE - 195)) | (1L << (INC - 195)) | (1L << (DEC - 195)) | (1L << (ADD - 195)) | (1L << (SUB - 195)) | (1L << (Identifier - 195)))) != 0)) {
					{
					setState(972);
					expressionList();
					}
				}

				setState(975);
				match(RPAREN);
				}
				break;
			case THIS:
				enterOuterAlt(_localctx, 2);
				{
				setState(977);
				match(THIS);
				setState(978);
				match(LPAREN);
				setState(980);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << AFTER) | (1L << BEFORE) | (1L << GET) | (1L << INHERITED) | (1L << INSTANCEOF) | (1L << NEW) | (1L << NULL) | (1L << SET) | (1L << SHARING) | (1L << SUPER) | (1L << SWITCH) | (1L << THIS) | (1L << TRANSIENT) | (1L << TRIGGER) | (1L << WHEN) | (1L << WITH) | (1L << WITHOUT) | (1L << LIST) | (1L << MAP) | (1L << SELECT) | (1L << COUNT) | (1L << FROM) | (1L << AS) | (1L << USING) | (1L << SCOPE) | (1L << WHERE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ORDER - 64)) | (1L << (BY - 64)) | (1L << (LIMIT - 64)) | (1L << (SOQLAND - 64)) | (1L << (SOQLOR - 64)) | (1L << (NOT - 64)) | (1L << (AVG - 64)) | (1L << (COUNT_DISTINCT - 64)) | (1L << (MIN - 64)) | (1L << (MAX - 64)) | (1L << (SUM - 64)) | (1L << (TYPEOF - 64)) | (1L << (END - 64)) | (1L << (THEN - 64)) | (1L << (LIKE - 64)) | (1L << (IN - 64)) | (1L << (INCLUDES - 64)) | (1L << (EXCLUDES - 64)) | (1L << (ASC - 64)) | (1L << (DESC - 64)) | (1L << (NULLS - 64)) | (1L << (FIRST - 64)) | (1L << (LAST - 64)) | (1L << (GROUP - 64)) | (1L << (ALL - 64)) | (1L << (ROWS - 64)) | (1L << (VIEW - 64)) | (1L << (HAVING - 64)) | (1L << (ROLLUP - 64)) | (1L << (TOLABEL - 64)) | (1L << (OFFSET - 64)) | (1L << (DATA - 64)) | (1L << (CATEGORY - 64)) | (1L << (AT - 64)) | (1L << (ABOVE - 64)) | (1L << (BELOW - 64)) | (1L << (ABOVE_OR_BELOW - 64)) | (1L << (SECURITY_ENFORCED - 64)) | (1L << (REFERENCE - 64)) | (1L << (CUBE - 64)) | (1L << (FORMAT - 64)) | (1L << (TRACKING - 64)) | (1L << (VIEWSTAT - 64)) | (1L << (CUSTOM - 64)) | (1L << (STANDARD - 64)) | (1L << (CALENDAR_MONTH - 64)) | (1L << (CALENDAR_QUARTER - 64)) | (1L << (CALENDAR_YEAR - 64)) | (1L << (DAY_IN_MONTH - 64)) | (1L << (DAY_IN_WEEK - 64)) | (1L << (DAY_IN_YEAR - 64)) | (1L << (DAY_ONLY - 64)) | (1L << (FISCAL_MONTH - 64)) | (1L << (FISCAL_QUARTER - 64)) | (1L << (FISCAL_YEAR - 64)) | (1L << (HOUR_IN_DAY - 64)) | (1L << (WEEK_IN_MONTH - 64)) | (1L << (WEEK_IN_YEAR - 64)) | (1L << (CONVERT_TIMEZONE - 64)) | (1L << (YESTERDAY - 64)) | (1L << (TODAY - 64)) | (1L << (TOMORROW - 64)) | (1L << (LAST_WEEK - 64)) | (1L << (THIS_WEEK - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (NEXT_WEEK - 128)) | (1L << (LAST_MONTH - 128)) | (1L << (THIS_MONTH - 128)) | (1L << (NEXT_MONTH - 128)) | (1L << (LAST_90_DAYS - 128)) | (1L << (NEXT_90_DAYS - 128)) | (1L << (LAST_N_DAYS_N - 128)) | (1L << (NEXT_N_DAYS_N - 128)) | (1L << (NEXT_N_WEEKS_N - 128)) | (1L << (LAST_N_WEEKS_N - 128)) | (1L << (NEXT_N_MONTHS_N - 128)) | (1L << (LAST_N_MONTHS_N - 128)) | (1L << (THIS_QUARTER - 128)) | (1L << (LAST_QUARTER - 128)) | (1L << (NEXT_QUARTER - 128)) | (1L << (NEXT_N_QUARTERS_N - 128)) | (1L << (LAST_N_QUARTERS_N - 128)) | (1L << (THIS_YEAR - 128)) | (1L << (LAST_YEAR - 128)) | (1L << (NEXT_YEAR - 128)) | (1L << (NEXT_N_YEARS_N - 128)) | (1L << (LAST_N_YEARS_N - 128)) | (1L << (THIS_FISCAL_QUARTER - 128)) | (1L << (LAST_FISCAL_QUARTER - 128)) | (1L << (NEXT_FISCAL_QUARTER - 128)) | (1L << (NEXT_N_FISCAL_QUARTERS_N - 128)) | (1L << (LAST_N_FISCAL_QUARTERS_N - 128)) | (1L << (THIS_FISCAL_YEAR - 128)) | (1L << (LAST_FISCAL_YEAR - 128)) | (1L << (NEXT_FISCAL_YEAR - 128)) | (1L << (NEXT_N_FISCAL_YEARS_N - 128)) | (1L << (LAST_N_FISCAL_YEARS_N - 128)) | (1L << (FIND - 128)) | (1L << (EMAIL - 128)) | (1L << (NAME - 128)) | (1L << (PHONE - 128)) | (1L << (SIDEBAR - 128)) | (1L << (FIELDS - 128)) | (1L << (METADATA - 128)) | (1L << (PRICEBOOKID - 128)) | (1L << (NETWORK - 128)) | (1L << (SNIPPET - 128)) | (1L << (TARGET_LENGTH - 128)) | (1L << (DIVISION - 128)) | (1L << (RETURNING - 128)) | (1L << (LISTVIEW - 128)) | (1L << (FindLiteral - 128)) | (1L << (IntegerLiteral - 128)) | (1L << (LongLiteral - 128)) | (1L << (NumberLiteral - 128)) | (1L << (BooleanLiteral - 128)) | (1L << (StringLiteral - 128)) | (1L << (LPAREN - 128)) | (1L << (LBRACK - 128)))) != 0) || ((((_la - 195)) & ~0x3f) == 0 && ((1L << (_la - 195)) & ((1L << (BANG - 195)) | (1L << (TILDE - 195)) | (1L << (INC - 195)) | (1L << (DEC - 195)) | (1L << (ADD - 195)) | (1L << (SUB - 195)) | (1L << (Identifier - 195)))) != 0)) {
					{
					setState(979);
					expressionList();
					}
				}

				setState(982);
				match(RPAREN);
				}
				break;
			case SUPER:
				enterOuterAlt(_localctx, 3);
				{
				setState(983);
				match(SUPER);
				setState(984);
				match(LPAREN);
				setState(986);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << AFTER) | (1L << BEFORE) | (1L << GET) | (1L << INHERITED) | (1L << INSTANCEOF) | (1L << NEW) | (1L << NULL) | (1L << SET) | (1L << SHARING) | (1L << SUPER) | (1L << SWITCH) | (1L << THIS) | (1L << TRANSIENT) | (1L << TRIGGER) | (1L << WHEN) | (1L << WITH) | (1L << WITHOUT) | (1L << LIST) | (1L << MAP) | (1L << SELECT) | (1L << COUNT) | (1L << FROM) | (1L << AS) | (1L << USING) | (1L << SCOPE) | (1L << WHERE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ORDER - 64)) | (1L << (BY - 64)) | (1L << (LIMIT - 64)) | (1L << (SOQLAND - 64)) | (1L << (SOQLOR - 64)) | (1L << (NOT - 64)) | (1L << (AVG - 64)) | (1L << (COUNT_DISTINCT - 64)) | (1L << (MIN - 64)) | (1L << (MAX - 64)) | (1L << (SUM - 64)) | (1L << (TYPEOF - 64)) | (1L << (END - 64)) | (1L << (THEN - 64)) | (1L << (LIKE - 64)) | (1L << (IN - 64)) | (1L << (INCLUDES - 64)) | (1L << (EXCLUDES - 64)) | (1L << (ASC - 64)) | (1L << (DESC - 64)) | (1L << (NULLS - 64)) | (1L << (FIRST - 64)) | (1L << (LAST - 64)) | (1L << (GROUP - 64)) | (1L << (ALL - 64)) | (1L << (ROWS - 64)) | (1L << (VIEW - 64)) | (1L << (HAVING - 64)) | (1L << (ROLLUP - 64)) | (1L << (TOLABEL - 64)) | (1L << (OFFSET - 64)) | (1L << (DATA - 64)) | (1L << (CATEGORY - 64)) | (1L << (AT - 64)) | (1L << (ABOVE - 64)) | (1L << (BELOW - 64)) | (1L << (ABOVE_OR_BELOW - 64)) | (1L << (SECURITY_ENFORCED - 64)) | (1L << (REFERENCE - 64)) | (1L << (CUBE - 64)) | (1L << (FORMAT - 64)) | (1L << (TRACKING - 64)) | (1L << (VIEWSTAT - 64)) | (1L << (CUSTOM - 64)) | (1L << (STANDARD - 64)) | (1L << (CALENDAR_MONTH - 64)) | (1L << (CALENDAR_QUARTER - 64)) | (1L << (CALENDAR_YEAR - 64)) | (1L << (DAY_IN_MONTH - 64)) | (1L << (DAY_IN_WEEK - 64)) | (1L << (DAY_IN_YEAR - 64)) | (1L << (DAY_ONLY - 64)) | (1L << (FISCAL_MONTH - 64)) | (1L << (FISCAL_QUARTER - 64)) | (1L << (FISCAL_YEAR - 64)) | (1L << (HOUR_IN_DAY - 64)) | (1L << (WEEK_IN_MONTH - 64)) | (1L << (WEEK_IN_YEAR - 64)) | (1L << (CONVERT_TIMEZONE - 64)) | (1L << (YESTERDAY - 64)) | (1L << (TODAY - 64)) | (1L << (TOMORROW - 64)) | (1L << (LAST_WEEK - 64)) | (1L << (THIS_WEEK - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (NEXT_WEEK - 128)) | (1L << (LAST_MONTH - 128)) | (1L << (THIS_MONTH - 128)) | (1L << (NEXT_MONTH - 128)) | (1L << (LAST_90_DAYS - 128)) | (1L << (NEXT_90_DAYS - 128)) | (1L << (LAST_N_DAYS_N - 128)) | (1L << (NEXT_N_DAYS_N - 128)) | (1L << (NEXT_N_WEEKS_N - 128)) | (1L << (LAST_N_WEEKS_N - 128)) | (1L << (NEXT_N_MONTHS_N - 128)) | (1L << (LAST_N_MONTHS_N - 128)) | (1L << (THIS_QUARTER - 128)) | (1L << (LAST_QUARTER - 128)) | (1L << (NEXT_QUARTER - 128)) | (1L << (NEXT_N_QUARTERS_N - 128)) | (1L << (LAST_N_QUARTERS_N - 128)) | (1L << (THIS_YEAR - 128)) | (1L << (LAST_YEAR - 128)) | (1L << (NEXT_YEAR - 128)) | (1L << (NEXT_N_YEARS_N - 128)) | (1L << (LAST_N_YEARS_N - 128)) | (1L << (THIS_FISCAL_QUARTER - 128)) | (1L << (LAST_FISCAL_QUARTER - 128)) | (1L << (NEXT_FISCAL_QUARTER - 128)) | (1L << (NEXT_N_FISCAL_QUARTERS_N - 128)) | (1L << (LAST_N_FISCAL_QUARTERS_N - 128)) | (1L << (THIS_FISCAL_YEAR - 128)) | (1L << (LAST_FISCAL_YEAR - 128)) | (1L << (NEXT_FISCAL_YEAR - 128)) | (1L << (NEXT_N_FISCAL_YEARS_N - 128)) | (1L << (LAST_N_FISCAL_YEARS_N - 128)) | (1L << (FIND - 128)) | (1L << (EMAIL - 128)) | (1L << (NAME - 128)) | (1L << (PHONE - 128)) | (1L << (SIDEBAR - 128)) | (1L << (FIELDS - 128)) | (1L << (METADATA - 128)) | (1L << (PRICEBOOKID - 128)) | (1L << (NETWORK - 128)) | (1L << (SNIPPET - 128)) | (1L << (TARGET_LENGTH - 128)) | (1L << (DIVISION - 128)) | (1L << (RETURNING - 128)) | (1L << (LISTVIEW - 128)) | (1L << (FindLiteral - 128)) | (1L << (IntegerLiteral - 128)) | (1L << (LongLiteral - 128)) | (1L << (NumberLiteral - 128)) | (1L << (BooleanLiteral - 128)) | (1L << (StringLiteral - 128)) | (1L << (LPAREN - 128)) | (1L << (LBRACK - 128)))) != 0) || ((((_la - 195)) & ~0x3f) == 0 && ((1L << (_la - 195)) & ((1L << (BANG - 195)) | (1L << (TILDE - 195)) | (1L << (INC - 195)) | (1L << (DEC - 195)) | (1L << (ADD - 195)) | (1L << (SUB - 195)) | (1L << (Identifier - 195)))) != 0)) {
					{
					setState(985);
					expressionList();
					}
				}

				setState(988);
				match(RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DotMethodCallContext extends ParserRuleContext {
		public AnyIdContext anyId() {
			return getRuleContext(AnyIdContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(ApexParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(ApexParser.RPAREN, 0); }
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public DotMethodCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dotMethodCall; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterDotMethodCall(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitDotMethodCall(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitDotMethodCall(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DotMethodCallContext dotMethodCall() throws RecognitionException {
		DotMethodCallContext _localctx = new DotMethodCallContext(_ctx, getState());
		enterRule(_localctx, 150, RULE_dotMethodCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(991);
			anyId();
			setState(992);
			match(LPAREN);
			setState(994);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << AFTER) | (1L << BEFORE) | (1L << GET) | (1L << INHERITED) | (1L << INSTANCEOF) | (1L << NEW) | (1L << NULL) | (1L << SET) | (1L << SHARING) | (1L << SUPER) | (1L << SWITCH) | (1L << THIS) | (1L << TRANSIENT) | (1L << TRIGGER) | (1L << WHEN) | (1L << WITH) | (1L << WITHOUT) | (1L << LIST) | (1L << MAP) | (1L << SELECT) | (1L << COUNT) | (1L << FROM) | (1L << AS) | (1L << USING) | (1L << SCOPE) | (1L << WHERE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ORDER - 64)) | (1L << (BY - 64)) | (1L << (LIMIT - 64)) | (1L << (SOQLAND - 64)) | (1L << (SOQLOR - 64)) | (1L << (NOT - 64)) | (1L << (AVG - 64)) | (1L << (COUNT_DISTINCT - 64)) | (1L << (MIN - 64)) | (1L << (MAX - 64)) | (1L << (SUM - 64)) | (1L << (TYPEOF - 64)) | (1L << (END - 64)) | (1L << (THEN - 64)) | (1L << (LIKE - 64)) | (1L << (IN - 64)) | (1L << (INCLUDES - 64)) | (1L << (EXCLUDES - 64)) | (1L << (ASC - 64)) | (1L << (DESC - 64)) | (1L << (NULLS - 64)) | (1L << (FIRST - 64)) | (1L << (LAST - 64)) | (1L << (GROUP - 64)) | (1L << (ALL - 64)) | (1L << (ROWS - 64)) | (1L << (VIEW - 64)) | (1L << (HAVING - 64)) | (1L << (ROLLUP - 64)) | (1L << (TOLABEL - 64)) | (1L << (OFFSET - 64)) | (1L << (DATA - 64)) | (1L << (CATEGORY - 64)) | (1L << (AT - 64)) | (1L << (ABOVE - 64)) | (1L << (BELOW - 64)) | (1L << (ABOVE_OR_BELOW - 64)) | (1L << (SECURITY_ENFORCED - 64)) | (1L << (REFERENCE - 64)) | (1L << (CUBE - 64)) | (1L << (FORMAT - 64)) | (1L << (TRACKING - 64)) | (1L << (VIEWSTAT - 64)) | (1L << (CUSTOM - 64)) | (1L << (STANDARD - 64)) | (1L << (CALENDAR_MONTH - 64)) | (1L << (CALENDAR_QUARTER - 64)) | (1L << (CALENDAR_YEAR - 64)) | (1L << (DAY_IN_MONTH - 64)) | (1L << (DAY_IN_WEEK - 64)) | (1L << (DAY_IN_YEAR - 64)) | (1L << (DAY_ONLY - 64)) | (1L << (FISCAL_MONTH - 64)) | (1L << (FISCAL_QUARTER - 64)) | (1L << (FISCAL_YEAR - 64)) | (1L << (HOUR_IN_DAY - 64)) | (1L << (WEEK_IN_MONTH - 64)) | (1L << (WEEK_IN_YEAR - 64)) | (1L << (CONVERT_TIMEZONE - 64)) | (1L << (YESTERDAY - 64)) | (1L << (TODAY - 64)) | (1L << (TOMORROW - 64)) | (1L << (LAST_WEEK - 64)) | (1L << (THIS_WEEK - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (NEXT_WEEK - 128)) | (1L << (LAST_MONTH - 128)) | (1L << (THIS_MONTH - 128)) | (1L << (NEXT_MONTH - 128)) | (1L << (LAST_90_DAYS - 128)) | (1L << (NEXT_90_DAYS - 128)) | (1L << (LAST_N_DAYS_N - 128)) | (1L << (NEXT_N_DAYS_N - 128)) | (1L << (NEXT_N_WEEKS_N - 128)) | (1L << (LAST_N_WEEKS_N - 128)) | (1L << (NEXT_N_MONTHS_N - 128)) | (1L << (LAST_N_MONTHS_N - 128)) | (1L << (THIS_QUARTER - 128)) | (1L << (LAST_QUARTER - 128)) | (1L << (NEXT_QUARTER - 128)) | (1L << (NEXT_N_QUARTERS_N - 128)) | (1L << (LAST_N_QUARTERS_N - 128)) | (1L << (THIS_YEAR - 128)) | (1L << (LAST_YEAR - 128)) | (1L << (NEXT_YEAR - 128)) | (1L << (NEXT_N_YEARS_N - 128)) | (1L << (LAST_N_YEARS_N - 128)) | (1L << (THIS_FISCAL_QUARTER - 128)) | (1L << (LAST_FISCAL_QUARTER - 128)) | (1L << (NEXT_FISCAL_QUARTER - 128)) | (1L << (NEXT_N_FISCAL_QUARTERS_N - 128)) | (1L << (LAST_N_FISCAL_QUARTERS_N - 128)) | (1L << (THIS_FISCAL_YEAR - 128)) | (1L << (LAST_FISCAL_YEAR - 128)) | (1L << (NEXT_FISCAL_YEAR - 128)) | (1L << (NEXT_N_FISCAL_YEARS_N - 128)) | (1L << (LAST_N_FISCAL_YEARS_N - 128)) | (1L << (FIND - 128)) | (1L << (EMAIL - 128)) | (1L << (NAME - 128)) | (1L << (PHONE - 128)) | (1L << (SIDEBAR - 128)) | (1L << (FIELDS - 128)) | (1L << (METADATA - 128)) | (1L << (PRICEBOOKID - 128)) | (1L << (NETWORK - 128)) | (1L << (SNIPPET - 128)) | (1L << (TARGET_LENGTH - 128)) | (1L << (DIVISION - 128)) | (1L << (RETURNING - 128)) | (1L << (LISTVIEW - 128)) | (1L << (FindLiteral - 128)) | (1L << (IntegerLiteral - 128)) | (1L << (LongLiteral - 128)) | (1L << (NumberLiteral - 128)) | (1L << (BooleanLiteral - 128)) | (1L << (StringLiteral - 128)) | (1L << (LPAREN - 128)) | (1L << (LBRACK - 128)))) != 0) || ((((_la - 195)) & ~0x3f) == 0 && ((1L << (_la - 195)) & ((1L << (BANG - 195)) | (1L << (TILDE - 195)) | (1L << (INC - 195)) | (1L << (DEC - 195)) | (1L << (ADD - 195)) | (1L << (SUB - 195)) | (1L << (Identifier - 195)))) != 0)) {
				{
				setState(993);
				expressionList();
				}
			}

			setState(996);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreatorContext extends ParserRuleContext {
		public CreatedNameContext createdName() {
			return getRuleContext(CreatedNameContext.class,0);
		}
		public NoRestContext noRest() {
			return getRuleContext(NoRestContext.class,0);
		}
		public ClassCreatorRestContext classCreatorRest() {
			return getRuleContext(ClassCreatorRestContext.class,0);
		}
		public ArrayCreatorRestContext arrayCreatorRest() {
			return getRuleContext(ArrayCreatorRestContext.class,0);
		}
		public MapCreatorRestContext mapCreatorRest() {
			return getRuleContext(MapCreatorRestContext.class,0);
		}
		public SetCreatorRestContext setCreatorRest() {
			return getRuleContext(SetCreatorRestContext.class,0);
		}
		public CreatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_creator; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterCreator(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitCreator(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitCreator(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CreatorContext creator() throws RecognitionException {
		CreatorContext _localctx = new CreatorContext(_ctx, getState());
		enterRule(_localctx, 152, RULE_creator);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(998);
			createdName();
			setState(1004);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,85,_ctx) ) {
			case 1:
				{
				setState(999);
				noRest();
				}
				break;
			case 2:
				{
				setState(1000);
				classCreatorRest();
				}
				break;
			case 3:
				{
				setState(1001);
				arrayCreatorRest();
				}
				break;
			case 4:
				{
				setState(1002);
				mapCreatorRest();
				}
				break;
			case 5:
				{
				setState(1003);
				setCreatorRest();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CreatedNameContext extends ParserRuleContext {
		public List<IdCreatedNamePairContext> idCreatedNamePair() {
			return getRuleContexts(IdCreatedNamePairContext.class);
		}
		public IdCreatedNamePairContext idCreatedNamePair(int i) {
			return getRuleContext(IdCreatedNamePairContext.class,i);
		}
		public List<TerminalNode> DOT() { return getTokens(ApexParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(ApexParser.DOT, i);
		}
		public CreatedNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_createdName; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterCreatedName(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitCreatedName(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitCreatedName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CreatedNameContext createdName() throws RecognitionException {
		CreatedNameContext _localctx = new CreatedNameContext(_ctx, getState());
		enterRule(_localctx, 154, RULE_createdName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1006);
			idCreatedNamePair();
			setState(1011);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==DOT) {
				{
				{
				setState(1007);
				match(DOT);
				setState(1008);
				idCreatedNamePair();
				}
				}
				setState(1013);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdCreatedNamePairContext extends ParserRuleContext {
		public AnyIdContext anyId() {
			return getRuleContext(AnyIdContext.class,0);
		}
		public TerminalNode LT() { return getToken(ApexParser.LT, 0); }
		public TypeListContext typeList() {
			return getRuleContext(TypeListContext.class,0);
		}
		public TerminalNode GT() { return getToken(ApexParser.GT, 0); }
		public IdCreatedNamePairContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_idCreatedNamePair; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterIdCreatedNamePair(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitIdCreatedNamePair(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitIdCreatedNamePair(this);
			else return visitor.visitChildren(this);
		}
	}

	public final IdCreatedNamePairContext idCreatedNamePair() throws RecognitionException {
		IdCreatedNamePairContext _localctx = new IdCreatedNamePairContext(_ctx, getState());
		enterRule(_localctx, 156, RULE_idCreatedNamePair);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1014);
			anyId();
			setState(1019);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LT) {
				{
				setState(1015);
				match(LT);
				setState(1016);
				typeList();
				setState(1017);
				match(GT);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NoRestContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(ApexParser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(ApexParser.RBRACE, 0); }
		public NoRestContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_noRest; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterNoRest(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitNoRest(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitNoRest(this);
			else return visitor.visitChildren(this);
		}
	}

	public final NoRestContext noRest() throws RecognitionException {
		NoRestContext _localctx = new NoRestContext(_ctx, getState());
		enterRule(_localctx, 158, RULE_noRest);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1021);
			match(LBRACE);
			setState(1022);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ClassCreatorRestContext extends ParserRuleContext {
		public ArgumentsContext arguments() {
			return getRuleContext(ArgumentsContext.class,0);
		}
		public ClassCreatorRestContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_classCreatorRest; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterClassCreatorRest(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitClassCreatorRest(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitClassCreatorRest(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ClassCreatorRestContext classCreatorRest() throws RecognitionException {
		ClassCreatorRestContext _localctx = new ClassCreatorRestContext(_ctx, getState());
		enterRule(_localctx, 160, RULE_classCreatorRest);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1024);
			arguments();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayCreatorRestContext extends ParserRuleContext {
		public TerminalNode LBRACK() { return getToken(ApexParser.LBRACK, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RBRACK() { return getToken(ApexParser.RBRACK, 0); }
		public ArrayInitializerContext arrayInitializer() {
			return getRuleContext(ArrayInitializerContext.class,0);
		}
		public ArrayCreatorRestContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayCreatorRest; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterArrayCreatorRest(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitArrayCreatorRest(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitArrayCreatorRest(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ArrayCreatorRestContext arrayCreatorRest() throws RecognitionException {
		ArrayCreatorRestContext _localctx = new ArrayCreatorRestContext(_ctx, getState());
		enterRule(_localctx, 162, RULE_arrayCreatorRest);
		try {
			setState(1035);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,89,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1026);
				match(LBRACK);
				setState(1027);
				expression(0);
				setState(1028);
				match(RBRACK);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1030);
				match(LBRACK);
				setState(1031);
				match(RBRACK);
				setState(1033);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,88,_ctx) ) {
				case 1:
					{
					setState(1032);
					arrayInitializer();
					}
					break;
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MapCreatorRestContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(ApexParser.LBRACE, 0); }
		public List<MapCreatorRestPairContext> mapCreatorRestPair() {
			return getRuleContexts(MapCreatorRestPairContext.class);
		}
		public MapCreatorRestPairContext mapCreatorRestPair(int i) {
			return getRuleContext(MapCreatorRestPairContext.class,i);
		}
		public TerminalNode RBRACE() { return getToken(ApexParser.RBRACE, 0); }
		public List<TerminalNode> COMMA() { return getTokens(ApexParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ApexParser.COMMA, i);
		}
		public MapCreatorRestContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mapCreatorRest; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterMapCreatorRest(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitMapCreatorRest(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitMapCreatorRest(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MapCreatorRestContext mapCreatorRest() throws RecognitionException {
		MapCreatorRestContext _localctx = new MapCreatorRestContext(_ctx, getState());
		enterRule(_localctx, 164, RULE_mapCreatorRest);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1037);
			match(LBRACE);
			setState(1038);
			mapCreatorRestPair();
			setState(1043);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1039);
				match(COMMA);
				setState(1040);
				mapCreatorRestPair();
				}
				}
				setState(1045);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1046);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MapCreatorRestPairContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode MAPTO() { return getToken(ApexParser.MAPTO, 0); }
		public MapCreatorRestPairContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mapCreatorRestPair; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterMapCreatorRestPair(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitMapCreatorRestPair(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitMapCreatorRestPair(this);
			else return visitor.visitChildren(this);
		}
	}

	public final MapCreatorRestPairContext mapCreatorRestPair() throws RecognitionException {
		MapCreatorRestPairContext _localctx = new MapCreatorRestPairContext(_ctx, getState());
		enterRule(_localctx, 166, RULE_mapCreatorRestPair);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1048);
			expression(0);
			setState(1049);
			match(MAPTO);
			setState(1050);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SetCreatorRestContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(ApexParser.LBRACE, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode RBRACE() { return getToken(ApexParser.RBRACE, 0); }
		public List<TerminalNode> COMMA() { return getTokens(ApexParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ApexParser.COMMA, i);
		}
		public SetCreatorRestContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_setCreatorRest; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterSetCreatorRest(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitSetCreatorRest(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitSetCreatorRest(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SetCreatorRestContext setCreatorRest() throws RecognitionException {
		SetCreatorRestContext _localctx = new SetCreatorRestContext(_ctx, getState());
		enterRule(_localctx, 168, RULE_setCreatorRest);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1052);
			match(LBRACE);
			setState(1053);
			expression(0);
			setState(1058);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1054);
				match(COMMA);
				{
				setState(1055);
				expression(0);
				}
				}
				}
				setState(1060);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1061);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgumentsContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(ApexParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(ApexParser.RPAREN, 0); }
		public ExpressionListContext expressionList() {
			return getRuleContext(ExpressionListContext.class,0);
		}
		public ArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arguments; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterArguments(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitArguments(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitArguments(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ArgumentsContext arguments() throws RecognitionException {
		ArgumentsContext _localctx = new ArgumentsContext(_ctx, getState());
		enterRule(_localctx, 170, RULE_arguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1063);
			match(LPAREN);
			setState(1065);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << AFTER) | (1L << BEFORE) | (1L << GET) | (1L << INHERITED) | (1L << INSTANCEOF) | (1L << NEW) | (1L << NULL) | (1L << SET) | (1L << SHARING) | (1L << SUPER) | (1L << SWITCH) | (1L << THIS) | (1L << TRANSIENT) | (1L << TRIGGER) | (1L << WHEN) | (1L << WITH) | (1L << WITHOUT) | (1L << LIST) | (1L << MAP) | (1L << SELECT) | (1L << COUNT) | (1L << FROM) | (1L << AS) | (1L << USING) | (1L << SCOPE) | (1L << WHERE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ORDER - 64)) | (1L << (BY - 64)) | (1L << (LIMIT - 64)) | (1L << (SOQLAND - 64)) | (1L << (SOQLOR - 64)) | (1L << (NOT - 64)) | (1L << (AVG - 64)) | (1L << (COUNT_DISTINCT - 64)) | (1L << (MIN - 64)) | (1L << (MAX - 64)) | (1L << (SUM - 64)) | (1L << (TYPEOF - 64)) | (1L << (END - 64)) | (1L << (THEN - 64)) | (1L << (LIKE - 64)) | (1L << (IN - 64)) | (1L << (INCLUDES - 64)) | (1L << (EXCLUDES - 64)) | (1L << (ASC - 64)) | (1L << (DESC - 64)) | (1L << (NULLS - 64)) | (1L << (FIRST - 64)) | (1L << (LAST - 64)) | (1L << (GROUP - 64)) | (1L << (ALL - 64)) | (1L << (ROWS - 64)) | (1L << (VIEW - 64)) | (1L << (HAVING - 64)) | (1L << (ROLLUP - 64)) | (1L << (TOLABEL - 64)) | (1L << (OFFSET - 64)) | (1L << (DATA - 64)) | (1L << (CATEGORY - 64)) | (1L << (AT - 64)) | (1L << (ABOVE - 64)) | (1L << (BELOW - 64)) | (1L << (ABOVE_OR_BELOW - 64)) | (1L << (SECURITY_ENFORCED - 64)) | (1L << (REFERENCE - 64)) | (1L << (CUBE - 64)) | (1L << (FORMAT - 64)) | (1L << (TRACKING - 64)) | (1L << (VIEWSTAT - 64)) | (1L << (CUSTOM - 64)) | (1L << (STANDARD - 64)) | (1L << (CALENDAR_MONTH - 64)) | (1L << (CALENDAR_QUARTER - 64)) | (1L << (CALENDAR_YEAR - 64)) | (1L << (DAY_IN_MONTH - 64)) | (1L << (DAY_IN_WEEK - 64)) | (1L << (DAY_IN_YEAR - 64)) | (1L << (DAY_ONLY - 64)) | (1L << (FISCAL_MONTH - 64)) | (1L << (FISCAL_QUARTER - 64)) | (1L << (FISCAL_YEAR - 64)) | (1L << (HOUR_IN_DAY - 64)) | (1L << (WEEK_IN_MONTH - 64)) | (1L << (WEEK_IN_YEAR - 64)) | (1L << (CONVERT_TIMEZONE - 64)) | (1L << (YESTERDAY - 64)) | (1L << (TODAY - 64)) | (1L << (TOMORROW - 64)) | (1L << (LAST_WEEK - 64)) | (1L << (THIS_WEEK - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (NEXT_WEEK - 128)) | (1L << (LAST_MONTH - 128)) | (1L << (THIS_MONTH - 128)) | (1L << (NEXT_MONTH - 128)) | (1L << (LAST_90_DAYS - 128)) | (1L << (NEXT_90_DAYS - 128)) | (1L << (LAST_N_DAYS_N - 128)) | (1L << (NEXT_N_DAYS_N - 128)) | (1L << (NEXT_N_WEEKS_N - 128)) | (1L << (LAST_N_WEEKS_N - 128)) | (1L << (NEXT_N_MONTHS_N - 128)) | (1L << (LAST_N_MONTHS_N - 128)) | (1L << (THIS_QUARTER - 128)) | (1L << (LAST_QUARTER - 128)) | (1L << (NEXT_QUARTER - 128)) | (1L << (NEXT_N_QUARTERS_N - 128)) | (1L << (LAST_N_QUARTERS_N - 128)) | (1L << (THIS_YEAR - 128)) | (1L << (LAST_YEAR - 128)) | (1L << (NEXT_YEAR - 128)) | (1L << (NEXT_N_YEARS_N - 128)) | (1L << (LAST_N_YEARS_N - 128)) | (1L << (THIS_FISCAL_QUARTER - 128)) | (1L << (LAST_FISCAL_QUARTER - 128)) | (1L << (NEXT_FISCAL_QUARTER - 128)) | (1L << (NEXT_N_FISCAL_QUARTERS_N - 128)) | (1L << (LAST_N_FISCAL_QUARTERS_N - 128)) | (1L << (THIS_FISCAL_YEAR - 128)) | (1L << (LAST_FISCAL_YEAR - 128)) | (1L << (NEXT_FISCAL_YEAR - 128)) | (1L << (NEXT_N_FISCAL_YEARS_N - 128)) | (1L << (LAST_N_FISCAL_YEARS_N - 128)) | (1L << (FIND - 128)) | (1L << (EMAIL - 128)) | (1L << (NAME - 128)) | (1L << (PHONE - 128)) | (1L << (SIDEBAR - 128)) | (1L << (FIELDS - 128)) | (1L << (METADATA - 128)) | (1L << (PRICEBOOKID - 128)) | (1L << (NETWORK - 128)) | (1L << (SNIPPET - 128)) | (1L << (TARGET_LENGTH - 128)) | (1L << (DIVISION - 128)) | (1L << (RETURNING - 128)) | (1L << (LISTVIEW - 128)) | (1L << (FindLiteral - 128)) | (1L << (IntegerLiteral - 128)) | (1L << (LongLiteral - 128)) | (1L << (NumberLiteral - 128)) | (1L << (BooleanLiteral - 128)) | (1L << (StringLiteral - 128)) | (1L << (LPAREN - 128)) | (1L << (LBRACK - 128)))) != 0) || ((((_la - 195)) & ~0x3f) == 0 && ((1L << (_la - 195)) & ((1L << (BANG - 195)) | (1L << (TILDE - 195)) | (1L << (INC - 195)) | (1L << (DEC - 195)) | (1L << (ADD - 195)) | (1L << (SUB - 195)) | (1L << (Identifier - 195)))) != 0)) {
				{
				setState(1064);
				expressionList();
				}
			}

			setState(1067);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SoqlLiteralContext extends ParserRuleContext {
		public TerminalNode LBRACK() { return getToken(ApexParser.LBRACK, 0); }
		public QueryContext query() {
			return getRuleContext(QueryContext.class,0);
		}
		public TerminalNode RBRACK() { return getToken(ApexParser.RBRACK, 0); }
		public SoqlLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_soqlLiteral; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterSoqlLiteral(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitSoqlLiteral(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitSoqlLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SoqlLiteralContext soqlLiteral() throws RecognitionException {
		SoqlLiteralContext _localctx = new SoqlLiteralContext(_ctx, getState());
		enterRule(_localctx, 172, RULE_soqlLiteral);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1069);
			match(LBRACK);
			setState(1070);
			query();
			setState(1071);
			match(RBRACK);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class QueryContext extends ParserRuleContext {
		public TerminalNode SELECT() { return getToken(ApexParser.SELECT, 0); }
		public SelectListContext selectList() {
			return getRuleContext(SelectListContext.class,0);
		}
		public TerminalNode FROM() { return getToken(ApexParser.FROM, 0); }
		public FromNameListContext fromNameList() {
			return getRuleContext(FromNameListContext.class,0);
		}
		public ForClausesContext forClauses() {
			return getRuleContext(ForClausesContext.class,0);
		}
		public UsingScopeContext usingScope() {
			return getRuleContext(UsingScopeContext.class,0);
		}
		public WhereClauseContext whereClause() {
			return getRuleContext(WhereClauseContext.class,0);
		}
		public WithClauseContext withClause() {
			return getRuleContext(WithClauseContext.class,0);
		}
		public GroupByClauseContext groupByClause() {
			return getRuleContext(GroupByClauseContext.class,0);
		}
		public OrderByClauseContext orderByClause() {
			return getRuleContext(OrderByClauseContext.class,0);
		}
		public LimitClauseContext limitClause() {
			return getRuleContext(LimitClauseContext.class,0);
		}
		public OffsetClauseContext offsetClause() {
			return getRuleContext(OffsetClauseContext.class,0);
		}
		public AllRowsClauseContext allRowsClause() {
			return getRuleContext(AllRowsClauseContext.class,0);
		}
		public QueryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_query; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterQuery(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitQuery(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitQuery(this);
			else return visitor.visitChildren(this);
		}
	}

	public final QueryContext query() throws RecognitionException {
		QueryContext _localctx = new QueryContext(_ctx, getState());
		enterRule(_localctx, 174, RULE_query);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1073);
			match(SELECT);
			setState(1074);
			selectList();
			setState(1075);
			match(FROM);
			setState(1076);
			fromNameList();
			setState(1078);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==USING) {
				{
				setState(1077);
				usingScope();
				}
			}

			setState(1081);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WHERE) {
				{
				setState(1080);
				whereClause();
				}
			}

			setState(1084);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WITH) {
				{
				setState(1083);
				withClause();
				}
			}

			setState(1087);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==GROUP) {
				{
				setState(1086);
				groupByClause();
				}
			}

			setState(1090);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ORDER) {
				{
				setState(1089);
				orderByClause();
				}
			}

			setState(1093);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LIMIT) {
				{
				setState(1092);
				limitClause();
				}
			}

			setState(1096);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OFFSET) {
				{
				setState(1095);
				offsetClause();
				}
			}

			setState(1099);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ALL) {
				{
				setState(1098);
				allRowsClause();
				}
			}

			setState(1101);
			forClauses();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SubQueryContext extends ParserRuleContext {
		public TerminalNode SELECT() { return getToken(ApexParser.SELECT, 0); }
		public SubFieldListContext subFieldList() {
			return getRuleContext(SubFieldListContext.class,0);
		}
		public TerminalNode FROM() { return getToken(ApexParser.FROM, 0); }
		public FromNameListContext fromNameList() {
			return getRuleContext(FromNameListContext.class,0);
		}
		public ForClausesContext forClauses() {
			return getRuleContext(ForClausesContext.class,0);
		}
		public WhereClauseContext whereClause() {
			return getRuleContext(WhereClauseContext.class,0);
		}
		public OrderByClauseContext orderByClause() {
			return getRuleContext(OrderByClauseContext.class,0);
		}
		public LimitClauseContext limitClause() {
			return getRuleContext(LimitClauseContext.class,0);
		}
		public SubQueryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_subQuery; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterSubQuery(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitSubQuery(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitSubQuery(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SubQueryContext subQuery() throws RecognitionException {
		SubQueryContext _localctx = new SubQueryContext(_ctx, getState());
		enterRule(_localctx, 176, RULE_subQuery);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1103);
			match(SELECT);
			setState(1104);
			subFieldList();
			setState(1105);
			match(FROM);
			setState(1106);
			fromNameList();
			setState(1108);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WHERE) {
				{
				setState(1107);
				whereClause();
				}
			}

			setState(1111);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ORDER) {
				{
				setState(1110);
				orderByClause();
				}
			}

			setState(1114);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LIMIT) {
				{
				setState(1113);
				limitClause();
				}
			}

			setState(1116);
			forClauses();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SelectListContext extends ParserRuleContext {
		public List<SelectEntryContext> selectEntry() {
			return getRuleContexts(SelectEntryContext.class);
		}
		public SelectEntryContext selectEntry(int i) {
			return getRuleContext(SelectEntryContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(ApexParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ApexParser.COMMA, i);
		}
		public SelectListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selectList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterSelectList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitSelectList(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitSelectList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SelectListContext selectList() throws RecognitionException {
		SelectListContext _localctx = new SelectListContext(_ctx, getState());
		enterRule(_localctx, 178, RULE_selectList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1118);
			selectEntry();
			setState(1123);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1119);
				match(COMMA);
				setState(1120);
				selectEntry();
				}
				}
				setState(1125);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SelectEntryContext extends ParserRuleContext {
		public FieldNameContext fieldName() {
			return getRuleContext(FieldNameContext.class,0);
		}
		public SoqlIdContext soqlId() {
			return getRuleContext(SoqlIdContext.class,0);
		}
		public SoqlFunctionContext soqlFunction() {
			return getRuleContext(SoqlFunctionContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(ApexParser.LPAREN, 0); }
		public SubQueryContext subQuery() {
			return getRuleContext(SubQueryContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(ApexParser.RPAREN, 0); }
		public TypeOfContext typeOf() {
			return getRuleContext(TypeOfContext.class,0);
		}
		public SelectEntryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_selectEntry; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterSelectEntry(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitSelectEntry(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitSelectEntry(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SelectEntryContext selectEntry() throws RecognitionException {
		SelectEntryContext _localctx = new SelectEntryContext(_ctx, getState());
		enterRule(_localctx, 180, RULE_selectEntry);
		try {
			setState(1141);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,108,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1126);
				fieldName();
				setState(1128);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,105,_ctx) ) {
				case 1:
					{
					setState(1127);
					soqlId();
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1130);
				soqlFunction();
				setState(1132);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,106,_ctx) ) {
				case 1:
					{
					setState(1131);
					soqlId();
					}
					break;
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1134);
				match(LPAREN);
				setState(1135);
				subQuery();
				setState(1136);
				match(RPAREN);
				setState(1138);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,107,_ctx) ) {
				case 1:
					{
					setState(1137);
					soqlId();
					}
					break;
				}
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1140);
				typeOf();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldNameContext extends ParserRuleContext {
		public List<SoqlIdContext> soqlId() {
			return getRuleContexts(SoqlIdContext.class);
		}
		public SoqlIdContext soqlId(int i) {
			return getRuleContext(SoqlIdContext.class,i);
		}
		public List<TerminalNode> DOT() { return getTokens(ApexParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(ApexParser.DOT, i);
		}
		public FieldNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldName; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterFieldName(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitFieldName(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitFieldName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FieldNameContext fieldName() throws RecognitionException {
		FieldNameContext _localctx = new FieldNameContext(_ctx, getState());
		enterRule(_localctx, 182, RULE_fieldName);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1143);
			soqlId();
			setState(1148);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==DOT) {
				{
				{
				setState(1144);
				match(DOT);
				setState(1145);
				soqlId();
				}
				}
				setState(1150);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FromNameListContext extends ParserRuleContext {
		public List<FieldNameContext> fieldName() {
			return getRuleContexts(FieldNameContext.class);
		}
		public FieldNameContext fieldName(int i) {
			return getRuleContext(FieldNameContext.class,i);
		}
		public List<SoqlIdContext> soqlId() {
			return getRuleContexts(SoqlIdContext.class);
		}
		public SoqlIdContext soqlId(int i) {
			return getRuleContext(SoqlIdContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(ApexParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ApexParser.COMMA, i);
		}
		public FromNameListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fromNameList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterFromNameList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitFromNameList(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitFromNameList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FromNameListContext fromNameList() throws RecognitionException {
		FromNameListContext _localctx = new FromNameListContext(_ctx, getState());
		enterRule(_localctx, 184, RULE_fromNameList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1151);
			fieldName();
			setState(1153);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,110,_ctx) ) {
			case 1:
				{
				setState(1152);
				soqlId();
				}
				break;
			}
			setState(1162);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1155);
				match(COMMA);
				setState(1156);
				fieldName();
				setState(1158);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,111,_ctx) ) {
				case 1:
					{
					setState(1157);
					soqlId();
					}
					break;
				}
				}
				}
				setState(1164);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SubFieldListContext extends ParserRuleContext {
		public List<SubFieldEntryContext> subFieldEntry() {
			return getRuleContexts(SubFieldEntryContext.class);
		}
		public SubFieldEntryContext subFieldEntry(int i) {
			return getRuleContext(SubFieldEntryContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(ApexParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ApexParser.COMMA, i);
		}
		public SubFieldListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_subFieldList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterSubFieldList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitSubFieldList(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitSubFieldList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SubFieldListContext subFieldList() throws RecognitionException {
		SubFieldListContext _localctx = new SubFieldListContext(_ctx, getState());
		enterRule(_localctx, 186, RULE_subFieldList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1165);
			subFieldEntry();
			setState(1170);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1166);
				match(COMMA);
				setState(1167);
				subFieldEntry();
				}
				}
				setState(1172);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SubFieldEntryContext extends ParserRuleContext {
		public FieldNameContext fieldName() {
			return getRuleContext(FieldNameContext.class,0);
		}
		public SoqlIdContext soqlId() {
			return getRuleContext(SoqlIdContext.class,0);
		}
		public SoqlFunctionContext soqlFunction() {
			return getRuleContext(SoqlFunctionContext.class,0);
		}
		public SubFieldEntryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_subFieldEntry; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterSubFieldEntry(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitSubFieldEntry(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitSubFieldEntry(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SubFieldEntryContext subFieldEntry() throws RecognitionException {
		SubFieldEntryContext _localctx = new SubFieldEntryContext(_ctx, getState());
		enterRule(_localctx, 188, RULE_subFieldEntry);
		try {
			setState(1181);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,116,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1173);
				fieldName();
				setState(1175);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,114,_ctx) ) {
				case 1:
					{
					setState(1174);
					soqlId();
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1177);
				soqlFunction();
				setState(1179);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,115,_ctx) ) {
				case 1:
					{
					setState(1178);
					soqlId();
					}
					break;
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SoqlFieldsParameterContext extends ParserRuleContext {
		public TerminalNode ALL() { return getToken(ApexParser.ALL, 0); }
		public TerminalNode CUSTOM() { return getToken(ApexParser.CUSTOM, 0); }
		public TerminalNode STANDARD() { return getToken(ApexParser.STANDARD, 0); }
		public SoqlFieldsParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_soqlFieldsParameter; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterSoqlFieldsParameter(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitSoqlFieldsParameter(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitSoqlFieldsParameter(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SoqlFieldsParameterContext soqlFieldsParameter() throws RecognitionException {
		SoqlFieldsParameterContext _localctx = new SoqlFieldsParameterContext(_ctx, getState());
		enterRule(_localctx, 190, RULE_soqlFieldsParameter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1183);
			_la = _input.LA(1);
			if ( !(((((_la - 88)) & ~0x3f) == 0 && ((1L << (_la - 88)) & ((1L << (ALL - 88)) | (1L << (CUSTOM - 88)) | (1L << (STANDARD - 88)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SoqlFunctionContext extends ParserRuleContext {
		public TerminalNode AVG() { return getToken(ApexParser.AVG, 0); }
		public TerminalNode LPAREN() { return getToken(ApexParser.LPAREN, 0); }
		public FieldNameContext fieldName() {
			return getRuleContext(FieldNameContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(ApexParser.RPAREN, 0); }
		public TerminalNode COUNT() { return getToken(ApexParser.COUNT, 0); }
		public TerminalNode COUNT_DISTINCT() { return getToken(ApexParser.COUNT_DISTINCT, 0); }
		public TerminalNode MIN() { return getToken(ApexParser.MIN, 0); }
		public TerminalNode MAX() { return getToken(ApexParser.MAX, 0); }
		public TerminalNode SUM() { return getToken(ApexParser.SUM, 0); }
		public TerminalNode TOLABEL() { return getToken(ApexParser.TOLABEL, 0); }
		public TerminalNode FORMAT() { return getToken(ApexParser.FORMAT, 0); }
		public TerminalNode CALENDAR_MONTH() { return getToken(ApexParser.CALENDAR_MONTH, 0); }
		public DateFieldNameContext dateFieldName() {
			return getRuleContext(DateFieldNameContext.class,0);
		}
		public TerminalNode CALENDAR_QUARTER() { return getToken(ApexParser.CALENDAR_QUARTER, 0); }
		public TerminalNode CALENDAR_YEAR() { return getToken(ApexParser.CALENDAR_YEAR, 0); }
		public TerminalNode DAY_IN_MONTH() { return getToken(ApexParser.DAY_IN_MONTH, 0); }
		public TerminalNode DAY_IN_WEEK() { return getToken(ApexParser.DAY_IN_WEEK, 0); }
		public TerminalNode DAY_IN_YEAR() { return getToken(ApexParser.DAY_IN_YEAR, 0); }
		public TerminalNode DAY_ONLY() { return getToken(ApexParser.DAY_ONLY, 0); }
		public TerminalNode FISCAL_MONTH() { return getToken(ApexParser.FISCAL_MONTH, 0); }
		public TerminalNode FISCAL_QUARTER() { return getToken(ApexParser.FISCAL_QUARTER, 0); }
		public TerminalNode FISCAL_YEAR() { return getToken(ApexParser.FISCAL_YEAR, 0); }
		public TerminalNode HOUR_IN_DAY() { return getToken(ApexParser.HOUR_IN_DAY, 0); }
		public TerminalNode WEEK_IN_MONTH() { return getToken(ApexParser.WEEK_IN_MONTH, 0); }
		public TerminalNode WEEK_IN_YEAR() { return getToken(ApexParser.WEEK_IN_YEAR, 0); }
		public TerminalNode FIELDS() { return getToken(ApexParser.FIELDS, 0); }
		public SoqlFieldsParameterContext soqlFieldsParameter() {
			return getRuleContext(SoqlFieldsParameterContext.class,0);
		}
		public SoqlFunctionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_soqlFunction; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterSoqlFunction(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitSoqlFunction(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitSoqlFunction(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SoqlFunctionContext soqlFunction() throws RecognitionException {
		SoqlFunctionContext _localctx = new SoqlFunctionContext(_ctx, getState());
		enterRule(_localctx, 192, RULE_soqlFunction);
		try {
			setState(1298);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,117,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1185);
				match(AVG);
				setState(1186);
				match(LPAREN);
				setState(1187);
				fieldName();
				setState(1188);
				match(RPAREN);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1190);
				match(COUNT);
				setState(1191);
				match(LPAREN);
				setState(1192);
				match(RPAREN);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1193);
				match(COUNT);
				setState(1194);
				match(LPAREN);
				setState(1195);
				fieldName();
				setState(1196);
				match(RPAREN);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1198);
				match(COUNT_DISTINCT);
				setState(1199);
				match(LPAREN);
				setState(1200);
				fieldName();
				setState(1201);
				match(RPAREN);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1203);
				match(MIN);
				setState(1204);
				match(LPAREN);
				setState(1205);
				fieldName();
				setState(1206);
				match(RPAREN);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1208);
				match(MAX);
				setState(1209);
				match(LPAREN);
				setState(1210);
				fieldName();
				setState(1211);
				match(RPAREN);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(1213);
				match(SUM);
				setState(1214);
				match(LPAREN);
				setState(1215);
				fieldName();
				setState(1216);
				match(RPAREN);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(1218);
				match(TOLABEL);
				setState(1219);
				match(LPAREN);
				setState(1220);
				fieldName();
				setState(1221);
				match(RPAREN);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(1223);
				match(FORMAT);
				setState(1224);
				match(LPAREN);
				setState(1225);
				fieldName();
				setState(1226);
				match(RPAREN);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(1228);
				match(CALENDAR_MONTH);
				setState(1229);
				match(LPAREN);
				setState(1230);
				dateFieldName();
				setState(1231);
				match(RPAREN);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(1233);
				match(CALENDAR_QUARTER);
				setState(1234);
				match(LPAREN);
				setState(1235);
				dateFieldName();
				setState(1236);
				match(RPAREN);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(1238);
				match(CALENDAR_YEAR);
				setState(1239);
				match(LPAREN);
				setState(1240);
				dateFieldName();
				setState(1241);
				match(RPAREN);
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(1243);
				match(DAY_IN_MONTH);
				setState(1244);
				match(LPAREN);
				setState(1245);
				dateFieldName();
				setState(1246);
				match(RPAREN);
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(1248);
				match(DAY_IN_WEEK);
				setState(1249);
				match(LPAREN);
				setState(1250);
				dateFieldName();
				setState(1251);
				match(RPAREN);
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(1253);
				match(DAY_IN_YEAR);
				setState(1254);
				match(LPAREN);
				setState(1255);
				dateFieldName();
				setState(1256);
				match(RPAREN);
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(1258);
				match(DAY_ONLY);
				setState(1259);
				match(LPAREN);
				setState(1260);
				dateFieldName();
				setState(1261);
				match(RPAREN);
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(1263);
				match(FISCAL_MONTH);
				setState(1264);
				match(LPAREN);
				setState(1265);
				dateFieldName();
				setState(1266);
				match(RPAREN);
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(1268);
				match(FISCAL_QUARTER);
				setState(1269);
				match(LPAREN);
				setState(1270);
				dateFieldName();
				setState(1271);
				match(RPAREN);
				}
				break;
			case 19:
				enterOuterAlt(_localctx, 19);
				{
				setState(1273);
				match(FISCAL_YEAR);
				setState(1274);
				match(LPAREN);
				setState(1275);
				dateFieldName();
				setState(1276);
				match(RPAREN);
				}
				break;
			case 20:
				enterOuterAlt(_localctx, 20);
				{
				setState(1278);
				match(HOUR_IN_DAY);
				setState(1279);
				match(LPAREN);
				setState(1280);
				dateFieldName();
				setState(1281);
				match(RPAREN);
				}
				break;
			case 21:
				enterOuterAlt(_localctx, 21);
				{
				setState(1283);
				match(WEEK_IN_MONTH);
				setState(1284);
				match(LPAREN);
				setState(1285);
				dateFieldName();
				setState(1286);
				match(RPAREN);
				}
				break;
			case 22:
				enterOuterAlt(_localctx, 22);
				{
				setState(1288);
				match(WEEK_IN_YEAR);
				setState(1289);
				match(LPAREN);
				setState(1290);
				dateFieldName();
				setState(1291);
				match(RPAREN);
				}
				break;
			case 23:
				enterOuterAlt(_localctx, 23);
				{
				setState(1293);
				match(FIELDS);
				setState(1294);
				match(LPAREN);
				setState(1295);
				soqlFieldsParameter();
				setState(1296);
				match(RPAREN);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DateFieldNameContext extends ParserRuleContext {
		public TerminalNode CONVERT_TIMEZONE() { return getToken(ApexParser.CONVERT_TIMEZONE, 0); }
		public TerminalNode LPAREN() { return getToken(ApexParser.LPAREN, 0); }
		public FieldNameContext fieldName() {
			return getRuleContext(FieldNameContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(ApexParser.RPAREN, 0); }
		public DateFieldNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dateFieldName; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterDateFieldName(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitDateFieldName(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitDateFieldName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DateFieldNameContext dateFieldName() throws RecognitionException {
		DateFieldNameContext _localctx = new DateFieldNameContext(_ctx, getState());
		enterRule(_localctx, 194, RULE_dateFieldName);
		try {
			setState(1306);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,118,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1300);
				match(CONVERT_TIMEZONE);
				setState(1301);
				match(LPAREN);
				setState(1302);
				fieldName();
				setState(1303);
				match(RPAREN);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1305);
				fieldName();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeOfContext extends ParserRuleContext {
		public TerminalNode TYPEOF() { return getToken(ApexParser.TYPEOF, 0); }
		public FieldNameContext fieldName() {
			return getRuleContext(FieldNameContext.class,0);
		}
		public TerminalNode END() { return getToken(ApexParser.END, 0); }
		public List<WhenClauseContext> whenClause() {
			return getRuleContexts(WhenClauseContext.class);
		}
		public WhenClauseContext whenClause(int i) {
			return getRuleContext(WhenClauseContext.class,i);
		}
		public ElseClauseContext elseClause() {
			return getRuleContext(ElseClauseContext.class,0);
		}
		public TypeOfContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typeOf; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterTypeOf(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitTypeOf(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitTypeOf(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TypeOfContext typeOf() throws RecognitionException {
		TypeOfContext _localctx = new TypeOfContext(_ctx, getState());
		enterRule(_localctx, 196, RULE_typeOf);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1308);
			match(TYPEOF);
			setState(1309);
			fieldName();
			setState(1311); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(1310);
				whenClause();
				}
				}
				setState(1313); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==WHEN );
			setState(1316);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(1315);
				elseClause();
				}
			}

			setState(1318);
			match(END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WhenClauseContext extends ParserRuleContext {
		public TerminalNode WHEN() { return getToken(ApexParser.WHEN, 0); }
		public FieldNameContext fieldName() {
			return getRuleContext(FieldNameContext.class,0);
		}
		public TerminalNode THEN() { return getToken(ApexParser.THEN, 0); }
		public FieldNameListContext fieldNameList() {
			return getRuleContext(FieldNameListContext.class,0);
		}
		public WhenClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whenClause; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterWhenClause(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitWhenClause(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitWhenClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final WhenClauseContext whenClause() throws RecognitionException {
		WhenClauseContext _localctx = new WhenClauseContext(_ctx, getState());
		enterRule(_localctx, 198, RULE_whenClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1320);
			match(WHEN);
			setState(1321);
			fieldName();
			setState(1322);
			match(THEN);
			setState(1323);
			fieldNameList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElseClauseContext extends ParserRuleContext {
		public TerminalNode ELSE() { return getToken(ApexParser.ELSE, 0); }
		public FieldNameListContext fieldNameList() {
			return getRuleContext(FieldNameListContext.class,0);
		}
		public ElseClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseClause; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterElseClause(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitElseClause(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitElseClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ElseClauseContext elseClause() throws RecognitionException {
		ElseClauseContext _localctx = new ElseClauseContext(_ctx, getState());
		enterRule(_localctx, 200, RULE_elseClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1325);
			match(ELSE);
			setState(1326);
			fieldNameList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldNameListContext extends ParserRuleContext {
		public List<FieldNameContext> fieldName() {
			return getRuleContexts(FieldNameContext.class);
		}
		public FieldNameContext fieldName(int i) {
			return getRuleContext(FieldNameContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(ApexParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ApexParser.COMMA, i);
		}
		public FieldNameListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldNameList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterFieldNameList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitFieldNameList(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitFieldNameList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FieldNameListContext fieldNameList() throws RecognitionException {
		FieldNameListContext _localctx = new FieldNameListContext(_ctx, getState());
		enterRule(_localctx, 202, RULE_fieldNameList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1328);
			fieldName();
			setState(1333);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1329);
				match(COMMA);
				setState(1330);
				fieldName();
				}
				}
				setState(1335);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UsingScopeContext extends ParserRuleContext {
		public TerminalNode USING() { return getToken(ApexParser.USING, 0); }
		public TerminalNode SCOPE() { return getToken(ApexParser.SCOPE, 0); }
		public SoqlIdContext soqlId() {
			return getRuleContext(SoqlIdContext.class,0);
		}
		public UsingScopeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_usingScope; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterUsingScope(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitUsingScope(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitUsingScope(this);
			else return visitor.visitChildren(this);
		}
	}

	public final UsingScopeContext usingScope() throws RecognitionException {
		UsingScopeContext _localctx = new UsingScopeContext(_ctx, getState());
		enterRule(_localctx, 204, RULE_usingScope);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1336);
			match(USING);
			setState(1337);
			match(SCOPE);
			setState(1338);
			soqlId();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WhereClauseContext extends ParserRuleContext {
		public TerminalNode WHERE() { return getToken(ApexParser.WHERE, 0); }
		public LogicalExpressionContext logicalExpression() {
			return getRuleContext(LogicalExpressionContext.class,0);
		}
		public WhereClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whereClause; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterWhereClause(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitWhereClause(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitWhereClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final WhereClauseContext whereClause() throws RecognitionException {
		WhereClauseContext _localctx = new WhereClauseContext(_ctx, getState());
		enterRule(_localctx, 206, RULE_whereClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1340);
			match(WHERE);
			setState(1341);
			logicalExpression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LogicalExpressionContext extends ParserRuleContext {
		public List<ConditionalExpressionContext> conditionalExpression() {
			return getRuleContexts(ConditionalExpressionContext.class);
		}
		public ConditionalExpressionContext conditionalExpression(int i) {
			return getRuleContext(ConditionalExpressionContext.class,i);
		}
		public List<TerminalNode> SOQLAND() { return getTokens(ApexParser.SOQLAND); }
		public TerminalNode SOQLAND(int i) {
			return getToken(ApexParser.SOQLAND, i);
		}
		public List<TerminalNode> SOQLOR() { return getTokens(ApexParser.SOQLOR); }
		public TerminalNode SOQLOR(int i) {
			return getToken(ApexParser.SOQLOR, i);
		}
		public TerminalNode NOT() { return getToken(ApexParser.NOT, 0); }
		public LogicalExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logicalExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterLogicalExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitLogicalExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitLogicalExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final LogicalExpressionContext logicalExpression() throws RecognitionException {
		LogicalExpressionContext _localctx = new LogicalExpressionContext(_ctx, getState());
		enterRule(_localctx, 208, RULE_logicalExpression);
		int _la;
		try {
			setState(1361);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,124,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1343);
				conditionalExpression();
				setState(1348);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==SOQLAND) {
					{
					{
					setState(1344);
					match(SOQLAND);
					setState(1345);
					conditionalExpression();
					}
					}
					setState(1350);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1351);
				conditionalExpression();
				setState(1356);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==SOQLOR) {
					{
					{
					setState(1352);
					match(SOQLOR);
					setState(1353);
					conditionalExpression();
					}
					}
					setState(1358);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1359);
				match(NOT);
				setState(1360);
				conditionalExpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConditionalExpressionContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(ApexParser.LPAREN, 0); }
		public LogicalExpressionContext logicalExpression() {
			return getRuleContext(LogicalExpressionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(ApexParser.RPAREN, 0); }
		public FieldExpressionContext fieldExpression() {
			return getRuleContext(FieldExpressionContext.class,0);
		}
		public ConditionalExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conditionalExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterConditionalExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitConditionalExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitConditionalExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ConditionalExpressionContext conditionalExpression() throws RecognitionException {
		ConditionalExpressionContext _localctx = new ConditionalExpressionContext(_ctx, getState());
		enterRule(_localctx, 210, RULE_conditionalExpression);
		try {
			setState(1368);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LPAREN:
				enterOuterAlt(_localctx, 1);
				{
				setState(1363);
				match(LPAREN);
				setState(1364);
				logicalExpression();
				setState(1365);
				match(RPAREN);
				}
				break;
			case AFTER:
			case BEFORE:
			case GET:
			case INHERITED:
			case INSTANCEOF:
			case SET:
			case SHARING:
			case SWITCH:
			case TRANSIENT:
			case TRIGGER:
			case WHEN:
			case WITH:
			case WITHOUT:
			case SELECT:
			case COUNT:
			case FROM:
			case AS:
			case USING:
			case SCOPE:
			case WHERE:
			case ORDER:
			case BY:
			case LIMIT:
			case SOQLAND:
			case SOQLOR:
			case NOT:
			case AVG:
			case COUNT_DISTINCT:
			case MIN:
			case MAX:
			case SUM:
			case TYPEOF:
			case END:
			case THEN:
			case LIKE:
			case IN:
			case INCLUDES:
			case EXCLUDES:
			case ASC:
			case DESC:
			case NULLS:
			case FIRST:
			case LAST:
			case GROUP:
			case ALL:
			case ROWS:
			case VIEW:
			case HAVING:
			case ROLLUP:
			case TOLABEL:
			case OFFSET:
			case DATA:
			case CATEGORY:
			case AT:
			case ABOVE:
			case BELOW:
			case ABOVE_OR_BELOW:
			case SECURITY_ENFORCED:
			case REFERENCE:
			case CUBE:
			case FORMAT:
			case TRACKING:
			case VIEWSTAT:
			case CUSTOM:
			case STANDARD:
			case CALENDAR_MONTH:
			case CALENDAR_QUARTER:
			case CALENDAR_YEAR:
			case DAY_IN_MONTH:
			case DAY_IN_WEEK:
			case DAY_IN_YEAR:
			case DAY_ONLY:
			case FISCAL_MONTH:
			case FISCAL_QUARTER:
			case FISCAL_YEAR:
			case HOUR_IN_DAY:
			case WEEK_IN_MONTH:
			case WEEK_IN_YEAR:
			case CONVERT_TIMEZONE:
			case YESTERDAY:
			case TODAY:
			case TOMORROW:
			case LAST_WEEK:
			case THIS_WEEK:
			case NEXT_WEEK:
			case LAST_MONTH:
			case THIS_MONTH:
			case NEXT_MONTH:
			case LAST_90_DAYS:
			case NEXT_90_DAYS:
			case LAST_N_DAYS_N:
			case NEXT_N_DAYS_N:
			case NEXT_N_WEEKS_N:
			case LAST_N_WEEKS_N:
			case NEXT_N_MONTHS_N:
			case LAST_N_MONTHS_N:
			case THIS_QUARTER:
			case LAST_QUARTER:
			case NEXT_QUARTER:
			case NEXT_N_QUARTERS_N:
			case LAST_N_QUARTERS_N:
			case THIS_YEAR:
			case LAST_YEAR:
			case NEXT_YEAR:
			case NEXT_N_YEARS_N:
			case LAST_N_YEARS_N:
			case THIS_FISCAL_QUARTER:
			case LAST_FISCAL_QUARTER:
			case NEXT_FISCAL_QUARTER:
			case NEXT_N_FISCAL_QUARTERS_N:
			case LAST_N_FISCAL_QUARTERS_N:
			case THIS_FISCAL_YEAR:
			case LAST_FISCAL_YEAR:
			case NEXT_FISCAL_YEAR:
			case NEXT_N_FISCAL_YEARS_N:
			case LAST_N_FISCAL_YEARS_N:
			case FIND:
			case EMAIL:
			case NAME:
			case PHONE:
			case SIDEBAR:
			case FIELDS:
			case METADATA:
			case PRICEBOOKID:
			case NETWORK:
			case SNIPPET:
			case TARGET_LENGTH:
			case DIVISION:
			case RETURNING:
			case LISTVIEW:
			case Identifier:
				enterOuterAlt(_localctx, 2);
				{
				setState(1367);
				fieldExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldExpressionContext extends ParserRuleContext {
		public FieldNameContext fieldName() {
			return getRuleContext(FieldNameContext.class,0);
		}
		public ComparisonOperatorContext comparisonOperator() {
			return getRuleContext(ComparisonOperatorContext.class,0);
		}
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public SoqlFunctionContext soqlFunction() {
			return getRuleContext(SoqlFunctionContext.class,0);
		}
		public FieldExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterFieldExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitFieldExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitFieldExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FieldExpressionContext fieldExpression() throws RecognitionException {
		FieldExpressionContext _localctx = new FieldExpressionContext(_ctx, getState());
		enterRule(_localctx, 212, RULE_fieldExpression);
		try {
			setState(1378);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,126,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1370);
				fieldName();
				setState(1371);
				comparisonOperator();
				setState(1372);
				value();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1374);
				soqlFunction();
				setState(1375);
				comparisonOperator();
				setState(1376);
				value();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ComparisonOperatorContext extends ParserRuleContext {
		public TerminalNode ASSIGN() { return getToken(ApexParser.ASSIGN, 0); }
		public TerminalNode NOTEQUAL() { return getToken(ApexParser.NOTEQUAL, 0); }
		public TerminalNode LT() { return getToken(ApexParser.LT, 0); }
		public TerminalNode GT() { return getToken(ApexParser.GT, 0); }
		public TerminalNode LESSANDGREATER() { return getToken(ApexParser.LESSANDGREATER, 0); }
		public TerminalNode LIKE() { return getToken(ApexParser.LIKE, 0); }
		public TerminalNode IN() { return getToken(ApexParser.IN, 0); }
		public TerminalNode NOT() { return getToken(ApexParser.NOT, 0); }
		public TerminalNode INCLUDES() { return getToken(ApexParser.INCLUDES, 0); }
		public TerminalNode EXCLUDES() { return getToken(ApexParser.EXCLUDES, 0); }
		public ComparisonOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comparisonOperator; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterComparisonOperator(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitComparisonOperator(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitComparisonOperator(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ComparisonOperatorContext comparisonOperator() throws RecognitionException {
		ComparisonOperatorContext _localctx = new ComparisonOperatorContext(_ctx, getState());
		enterRule(_localctx, 214, RULE_comparisonOperator);
		try {
			setState(1395);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,127,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1380);
				match(ASSIGN);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1381);
				match(NOTEQUAL);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1382);
				match(LT);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1383);
				match(GT);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1384);
				match(LT);
				setState(1385);
				match(ASSIGN);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1386);
				match(GT);
				setState(1387);
				match(ASSIGN);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(1388);
				match(LESSANDGREATER);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(1389);
				match(LIKE);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(1390);
				match(IN);
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(1391);
				match(NOT);
				setState(1392);
				match(IN);
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(1393);
				match(INCLUDES);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(1394);
				match(EXCLUDES);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ValueContext extends ParserRuleContext {
		public TerminalNode NULL() { return getToken(ApexParser.NULL, 0); }
		public TerminalNode BooleanLiteral() { return getToken(ApexParser.BooleanLiteral, 0); }
		public TerminalNode IntegerLiteral() { return getToken(ApexParser.IntegerLiteral, 0); }
		public TerminalNode LongLiteral() { return getToken(ApexParser.LongLiteral, 0); }
		public TerminalNode NumberLiteral() { return getToken(ApexParser.NumberLiteral, 0); }
		public TerminalNode StringLiteral() { return getToken(ApexParser.StringLiteral, 0); }
		public TerminalNode DateLiteral() { return getToken(ApexParser.DateLiteral, 0); }
		public TerminalNode DateTimeLiteral() { return getToken(ApexParser.DateTimeLiteral, 0); }
		public DateFormulaContext dateFormula() {
			return getRuleContext(DateFormulaContext.class,0);
		}
		public CurrencyValueContext currencyValue() {
			return getRuleContext(CurrencyValueContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(ApexParser.LPAREN, 0); }
		public SubQueryContext subQuery() {
			return getRuleContext(SubQueryContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(ApexParser.RPAREN, 0); }
		public ValueListContext valueList() {
			return getRuleContext(ValueListContext.class,0);
		}
		public BoundExpressionContext boundExpression() {
			return getRuleContext(BoundExpressionContext.class,0);
		}
		public ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_value; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitValue(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitValue(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ValueContext value() throws RecognitionException {
		ValueContext _localctx = new ValueContext(_ctx, getState());
		enterRule(_localctx, 216, RULE_value);
		try {
			setState(1413);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,128,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1397);
				match(NULL);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1398);
				match(BooleanLiteral);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1399);
				match(IntegerLiteral);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1400);
				match(LongLiteral);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1401);
				match(NumberLiteral);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1402);
				match(StringLiteral);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(1403);
				match(DateLiteral);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(1404);
				match(DateTimeLiteral);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(1405);
				dateFormula();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(1406);
				currencyValue();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(1407);
				match(LPAREN);
				setState(1408);
				subQuery();
				setState(1409);
				match(RPAREN);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(1411);
				valueList();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(1412);
				boundExpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ValueListContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(ApexParser.LPAREN, 0); }
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public TerminalNode RPAREN() { return getToken(ApexParser.RPAREN, 0); }
		public List<TerminalNode> COMMA() { return getTokens(ApexParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ApexParser.COMMA, i);
		}
		public ValueListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valueList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterValueList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitValueList(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitValueList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ValueListContext valueList() throws RecognitionException {
		ValueListContext _localctx = new ValueListContext(_ctx, getState());
		enterRule(_localctx, 218, RULE_valueList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1415);
			match(LPAREN);
			setState(1416);
			value();
			setState(1421);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1417);
				match(COMMA);
				setState(1418);
				value();
				}
				}
				setState(1423);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1424);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CurrencyValueContext extends ParserRuleContext {
		public SoqlIdContext soqlId() {
			return getRuleContext(SoqlIdContext.class,0);
		}
		public SignedIntegerContext signedInteger() {
			return getRuleContext(SignedIntegerContext.class,0);
		}
		public CurrencyValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_currencyValue; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterCurrencyValue(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitCurrencyValue(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitCurrencyValue(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CurrencyValueContext currencyValue() throws RecognitionException {
		CurrencyValueContext _localctx = new CurrencyValueContext(_ctx, getState());
		enterRule(_localctx, 220, RULE_currencyValue);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1426);
			soqlId();
			setState(1427);
			signedInteger();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WithClauseContext extends ParserRuleContext {
		public TerminalNode WITH() { return getToken(ApexParser.WITH, 0); }
		public TerminalNode DATA() { return getToken(ApexParser.DATA, 0); }
		public TerminalNode CATEGORY() { return getToken(ApexParser.CATEGORY, 0); }
		public FilteringExpressionContext filteringExpression() {
			return getRuleContext(FilteringExpressionContext.class,0);
		}
		public TerminalNode SECURITY_ENFORCED() { return getToken(ApexParser.SECURITY_ENFORCED, 0); }
		public LogicalExpressionContext logicalExpression() {
			return getRuleContext(LogicalExpressionContext.class,0);
		}
		public WithClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_withClause; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterWithClause(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitWithClause(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitWithClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final WithClauseContext withClause() throws RecognitionException {
		WithClauseContext _localctx = new WithClauseContext(_ctx, getState());
		enterRule(_localctx, 222, RULE_withClause);
		try {
			setState(1437);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,130,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1429);
				match(WITH);
				setState(1430);
				match(DATA);
				setState(1431);
				match(CATEGORY);
				setState(1432);
				filteringExpression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1433);
				match(WITH);
				setState(1434);
				match(SECURITY_ENFORCED);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1435);
				match(WITH);
				setState(1436);
				logicalExpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FilteringExpressionContext extends ParserRuleContext {
		public List<DataCategorySelectionContext> dataCategorySelection() {
			return getRuleContexts(DataCategorySelectionContext.class);
		}
		public DataCategorySelectionContext dataCategorySelection(int i) {
			return getRuleContext(DataCategorySelectionContext.class,i);
		}
		public List<TerminalNode> AND() { return getTokens(ApexParser.AND); }
		public TerminalNode AND(int i) {
			return getToken(ApexParser.AND, i);
		}
		public FilteringExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_filteringExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterFilteringExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitFilteringExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitFilteringExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FilteringExpressionContext filteringExpression() throws RecognitionException {
		FilteringExpressionContext _localctx = new FilteringExpressionContext(_ctx, getState());
		enterRule(_localctx, 224, RULE_filteringExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1439);
			dataCategorySelection();
			setState(1444);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==AND) {
				{
				{
				setState(1440);
				match(AND);
				setState(1441);
				dataCategorySelection();
				}
				}
				setState(1446);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataCategorySelectionContext extends ParserRuleContext {
		public SoqlIdContext soqlId() {
			return getRuleContext(SoqlIdContext.class,0);
		}
		public FilteringSelectorContext filteringSelector() {
			return getRuleContext(FilteringSelectorContext.class,0);
		}
		public DataCategoryNameContext dataCategoryName() {
			return getRuleContext(DataCategoryNameContext.class,0);
		}
		public DataCategorySelectionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataCategorySelection; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterDataCategorySelection(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitDataCategorySelection(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitDataCategorySelection(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DataCategorySelectionContext dataCategorySelection() throws RecognitionException {
		DataCategorySelectionContext _localctx = new DataCategorySelectionContext(_ctx, getState());
		enterRule(_localctx, 226, RULE_dataCategorySelection);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1447);
			soqlId();
			setState(1448);
			filteringSelector();
			setState(1449);
			dataCategoryName();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DataCategoryNameContext extends ParserRuleContext {
		public List<SoqlIdContext> soqlId() {
			return getRuleContexts(SoqlIdContext.class);
		}
		public SoqlIdContext soqlId(int i) {
			return getRuleContext(SoqlIdContext.class,i);
		}
		public List<TerminalNode> LPAREN() { return getTokens(ApexParser.LPAREN); }
		public TerminalNode LPAREN(int i) {
			return getToken(ApexParser.LPAREN, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(ApexParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ApexParser.COMMA, i);
		}
		public DataCategoryNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dataCategoryName; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterDataCategoryName(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitDataCategoryName(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitDataCategoryName(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DataCategoryNameContext dataCategoryName() throws RecognitionException {
		DataCategoryNameContext _localctx = new DataCategoryNameContext(_ctx, getState());
		enterRule(_localctx, 228, RULE_dataCategoryName);
		int _la;
		try {
			setState(1463);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case AFTER:
			case BEFORE:
			case GET:
			case INHERITED:
			case INSTANCEOF:
			case SET:
			case SHARING:
			case SWITCH:
			case TRANSIENT:
			case TRIGGER:
			case WHEN:
			case WITH:
			case WITHOUT:
			case SELECT:
			case COUNT:
			case FROM:
			case AS:
			case USING:
			case SCOPE:
			case WHERE:
			case ORDER:
			case BY:
			case LIMIT:
			case SOQLAND:
			case SOQLOR:
			case NOT:
			case AVG:
			case COUNT_DISTINCT:
			case MIN:
			case MAX:
			case SUM:
			case TYPEOF:
			case END:
			case THEN:
			case LIKE:
			case IN:
			case INCLUDES:
			case EXCLUDES:
			case ASC:
			case DESC:
			case NULLS:
			case FIRST:
			case LAST:
			case GROUP:
			case ALL:
			case ROWS:
			case VIEW:
			case HAVING:
			case ROLLUP:
			case TOLABEL:
			case OFFSET:
			case DATA:
			case CATEGORY:
			case AT:
			case ABOVE:
			case BELOW:
			case ABOVE_OR_BELOW:
			case SECURITY_ENFORCED:
			case REFERENCE:
			case CUBE:
			case FORMAT:
			case TRACKING:
			case VIEWSTAT:
			case CUSTOM:
			case STANDARD:
			case CALENDAR_MONTH:
			case CALENDAR_QUARTER:
			case CALENDAR_YEAR:
			case DAY_IN_MONTH:
			case DAY_IN_WEEK:
			case DAY_IN_YEAR:
			case DAY_ONLY:
			case FISCAL_MONTH:
			case FISCAL_QUARTER:
			case FISCAL_YEAR:
			case HOUR_IN_DAY:
			case WEEK_IN_MONTH:
			case WEEK_IN_YEAR:
			case CONVERT_TIMEZONE:
			case YESTERDAY:
			case TODAY:
			case TOMORROW:
			case LAST_WEEK:
			case THIS_WEEK:
			case NEXT_WEEK:
			case LAST_MONTH:
			case THIS_MONTH:
			case NEXT_MONTH:
			case LAST_90_DAYS:
			case NEXT_90_DAYS:
			case LAST_N_DAYS_N:
			case NEXT_N_DAYS_N:
			case NEXT_N_WEEKS_N:
			case LAST_N_WEEKS_N:
			case NEXT_N_MONTHS_N:
			case LAST_N_MONTHS_N:
			case THIS_QUARTER:
			case LAST_QUARTER:
			case NEXT_QUARTER:
			case NEXT_N_QUARTERS_N:
			case LAST_N_QUARTERS_N:
			case THIS_YEAR:
			case LAST_YEAR:
			case NEXT_YEAR:
			case NEXT_N_YEARS_N:
			case LAST_N_YEARS_N:
			case THIS_FISCAL_QUARTER:
			case LAST_FISCAL_QUARTER:
			case NEXT_FISCAL_QUARTER:
			case NEXT_N_FISCAL_QUARTERS_N:
			case LAST_N_FISCAL_QUARTERS_N:
			case THIS_FISCAL_YEAR:
			case LAST_FISCAL_YEAR:
			case NEXT_FISCAL_YEAR:
			case NEXT_N_FISCAL_YEARS_N:
			case LAST_N_FISCAL_YEARS_N:
			case FIND:
			case EMAIL:
			case NAME:
			case PHONE:
			case SIDEBAR:
			case FIELDS:
			case METADATA:
			case PRICEBOOKID:
			case NETWORK:
			case SNIPPET:
			case TARGET_LENGTH:
			case DIVISION:
			case RETURNING:
			case LISTVIEW:
			case Identifier:
				enterOuterAlt(_localctx, 1);
				{
				setState(1451);
				soqlId();
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 2);
				{
				setState(1452);
				match(LPAREN);
				setState(1453);
				soqlId();
				setState(1458);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1454);
					match(COMMA);
					setState(1455);
					soqlId();
					}
					}
					setState(1460);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1461);
				match(LPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FilteringSelectorContext extends ParserRuleContext {
		public TerminalNode AT() { return getToken(ApexParser.AT, 0); }
		public TerminalNode ABOVE() { return getToken(ApexParser.ABOVE, 0); }
		public TerminalNode BELOW() { return getToken(ApexParser.BELOW, 0); }
		public TerminalNode ABOVE_OR_BELOW() { return getToken(ApexParser.ABOVE_OR_BELOW, 0); }
		public FilteringSelectorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_filteringSelector; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterFilteringSelector(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitFilteringSelector(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitFilteringSelector(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FilteringSelectorContext filteringSelector() throws RecognitionException {
		FilteringSelectorContext _localctx = new FilteringSelectorContext(_ctx, getState());
		enterRule(_localctx, 230, RULE_filteringSelector);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1465);
			_la = _input.LA(1);
			if ( !(((((_la - 97)) & ~0x3f) == 0 && ((1L << (_la - 97)) & ((1L << (AT - 97)) | (1L << (ABOVE - 97)) | (1L << (BELOW - 97)) | (1L << (ABOVE_OR_BELOW - 97)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GroupByClauseContext extends ParserRuleContext {
		public TerminalNode GROUP() { return getToken(ApexParser.GROUP, 0); }
		public TerminalNode BY() { return getToken(ApexParser.BY, 0); }
		public SelectListContext selectList() {
			return getRuleContext(SelectListContext.class,0);
		}
		public TerminalNode HAVING() { return getToken(ApexParser.HAVING, 0); }
		public LogicalExpressionContext logicalExpression() {
			return getRuleContext(LogicalExpressionContext.class,0);
		}
		public TerminalNode ROLLUP() { return getToken(ApexParser.ROLLUP, 0); }
		public TerminalNode LPAREN() { return getToken(ApexParser.LPAREN, 0); }
		public List<FieldNameContext> fieldName() {
			return getRuleContexts(FieldNameContext.class);
		}
		public FieldNameContext fieldName(int i) {
			return getRuleContext(FieldNameContext.class,i);
		}
		public TerminalNode RPAREN() { return getToken(ApexParser.RPAREN, 0); }
		public List<TerminalNode> COMMA() { return getTokens(ApexParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ApexParser.COMMA, i);
		}
		public TerminalNode CUBE() { return getToken(ApexParser.CUBE, 0); }
		public GroupByClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_groupByClause; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterGroupByClause(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitGroupByClause(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitGroupByClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final GroupByClauseContext groupByClause() throws RecognitionException {
		GroupByClauseContext _localctx = new GroupByClauseContext(_ctx, getState());
		enterRule(_localctx, 232, RULE_groupByClause);
		int _la;
		try {
			setState(1502);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,137,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1467);
				match(GROUP);
				setState(1468);
				match(BY);
				setState(1469);
				selectList();
				setState(1472);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==HAVING) {
					{
					setState(1470);
					match(HAVING);
					setState(1471);
					logicalExpression();
					}
				}

				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1474);
				match(GROUP);
				setState(1475);
				match(BY);
				setState(1476);
				match(ROLLUP);
				setState(1477);
				match(LPAREN);
				setState(1478);
				fieldName();
				setState(1483);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1479);
					match(COMMA);
					setState(1480);
					fieldName();
					}
					}
					setState(1485);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1486);
				match(RPAREN);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1488);
				match(GROUP);
				setState(1489);
				match(BY);
				setState(1490);
				match(CUBE);
				setState(1491);
				match(LPAREN);
				setState(1492);
				fieldName();
				setState(1497);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(1493);
					match(COMMA);
					setState(1494);
					fieldName();
					}
					}
					setState(1499);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(1500);
				match(RPAREN);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OrderByClauseContext extends ParserRuleContext {
		public TerminalNode ORDER() { return getToken(ApexParser.ORDER, 0); }
		public TerminalNode BY() { return getToken(ApexParser.BY, 0); }
		public FieldOrderListContext fieldOrderList() {
			return getRuleContext(FieldOrderListContext.class,0);
		}
		public OrderByClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_orderByClause; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterOrderByClause(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitOrderByClause(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitOrderByClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final OrderByClauseContext orderByClause() throws RecognitionException {
		OrderByClauseContext _localctx = new OrderByClauseContext(_ctx, getState());
		enterRule(_localctx, 234, RULE_orderByClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1504);
			match(ORDER);
			setState(1505);
			match(BY);
			setState(1506);
			fieldOrderList();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldOrderListContext extends ParserRuleContext {
		public List<FieldOrderContext> fieldOrder() {
			return getRuleContexts(FieldOrderContext.class);
		}
		public FieldOrderContext fieldOrder(int i) {
			return getRuleContext(FieldOrderContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(ApexParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ApexParser.COMMA, i);
		}
		public FieldOrderListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldOrderList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterFieldOrderList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitFieldOrderList(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitFieldOrderList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FieldOrderListContext fieldOrderList() throws RecognitionException {
		FieldOrderListContext _localctx = new FieldOrderListContext(_ctx, getState());
		enterRule(_localctx, 236, RULE_fieldOrderList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1508);
			fieldOrder();
			setState(1513);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1509);
				match(COMMA);
				setState(1510);
				fieldOrder();
				}
				}
				setState(1515);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldOrderContext extends ParserRuleContext {
		public FieldNameContext fieldName() {
			return getRuleContext(FieldNameContext.class,0);
		}
		public TerminalNode NULLS() { return getToken(ApexParser.NULLS, 0); }
		public TerminalNode ASC() { return getToken(ApexParser.ASC, 0); }
		public TerminalNode DESC() { return getToken(ApexParser.DESC, 0); }
		public TerminalNode FIRST() { return getToken(ApexParser.FIRST, 0); }
		public TerminalNode LAST() { return getToken(ApexParser.LAST, 0); }
		public SoqlFunctionContext soqlFunction() {
			return getRuleContext(SoqlFunctionContext.class,0);
		}
		public FieldOrderContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldOrder; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterFieldOrder(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitFieldOrder(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitFieldOrder(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FieldOrderContext fieldOrder() throws RecognitionException {
		FieldOrderContext _localctx = new FieldOrderContext(_ctx, getState());
		enterRule(_localctx, 238, RULE_fieldOrder);
		int _la;
		try {
			setState(1532);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,143,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1516);
				fieldName();
				setState(1518);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==ASC || _la==DESC) {
					{
					setState(1517);
					_la = _input.LA(1);
					if ( !(_la==ASC || _la==DESC) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
				}

				setState(1522);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NULLS) {
					{
					setState(1520);
					match(NULLS);
					setState(1521);
					_la = _input.LA(1);
					if ( !(_la==FIRST || _la==LAST) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
				}

				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1524);
				soqlFunction();
				setState(1526);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==ASC || _la==DESC) {
					{
					setState(1525);
					_la = _input.LA(1);
					if ( !(_la==ASC || _la==DESC) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
				}

				setState(1530);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NULLS) {
					{
					setState(1528);
					match(NULLS);
					setState(1529);
					_la = _input.LA(1);
					if ( !(_la==FIRST || _la==LAST) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
				}

				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LimitClauseContext extends ParserRuleContext {
		public TerminalNode LIMIT() { return getToken(ApexParser.LIMIT, 0); }
		public TerminalNode IntegerLiteral() { return getToken(ApexParser.IntegerLiteral, 0); }
		public BoundExpressionContext boundExpression() {
			return getRuleContext(BoundExpressionContext.class,0);
		}
		public LimitClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_limitClause; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterLimitClause(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitLimitClause(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitLimitClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final LimitClauseContext limitClause() throws RecognitionException {
		LimitClauseContext _localctx = new LimitClauseContext(_ctx, getState());
		enterRule(_localctx, 240, RULE_limitClause);
		try {
			setState(1538);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,144,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1534);
				match(LIMIT);
				setState(1535);
				match(IntegerLiteral);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1536);
				match(LIMIT);
				setState(1537);
				boundExpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OffsetClauseContext extends ParserRuleContext {
		public TerminalNode OFFSET() { return getToken(ApexParser.OFFSET, 0); }
		public TerminalNode IntegerLiteral() { return getToken(ApexParser.IntegerLiteral, 0); }
		public BoundExpressionContext boundExpression() {
			return getRuleContext(BoundExpressionContext.class,0);
		}
		public OffsetClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_offsetClause; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterOffsetClause(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitOffsetClause(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitOffsetClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final OffsetClauseContext offsetClause() throws RecognitionException {
		OffsetClauseContext _localctx = new OffsetClauseContext(_ctx, getState());
		enterRule(_localctx, 242, RULE_offsetClause);
		try {
			setState(1544);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,145,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1540);
				match(OFFSET);
				setState(1541);
				match(IntegerLiteral);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1542);
				match(OFFSET);
				setState(1543);
				boundExpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AllRowsClauseContext extends ParserRuleContext {
		public TerminalNode ALL() { return getToken(ApexParser.ALL, 0); }
		public TerminalNode ROWS() { return getToken(ApexParser.ROWS, 0); }
		public AllRowsClauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_allRowsClause; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterAllRowsClause(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitAllRowsClause(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitAllRowsClause(this);
			else return visitor.visitChildren(this);
		}
	}

	public final AllRowsClauseContext allRowsClause() throws RecognitionException {
		AllRowsClauseContext _localctx = new AllRowsClauseContext(_ctx, getState());
		enterRule(_localctx, 244, RULE_allRowsClause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1546);
			match(ALL);
			setState(1547);
			match(ROWS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ForClausesContext extends ParserRuleContext {
		public List<TerminalNode> FOR() { return getTokens(ApexParser.FOR); }
		public TerminalNode FOR(int i) {
			return getToken(ApexParser.FOR, i);
		}
		public List<TerminalNode> VIEW() { return getTokens(ApexParser.VIEW); }
		public TerminalNode VIEW(int i) {
			return getToken(ApexParser.VIEW, i);
		}
		public List<TerminalNode> UPDATE() { return getTokens(ApexParser.UPDATE); }
		public TerminalNode UPDATE(int i) {
			return getToken(ApexParser.UPDATE, i);
		}
		public List<TerminalNode> REFERENCE() { return getTokens(ApexParser.REFERENCE); }
		public TerminalNode REFERENCE(int i) {
			return getToken(ApexParser.REFERENCE, i);
		}
		public ForClausesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_forClauses; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterForClauses(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitForClauses(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitForClauses(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ForClausesContext forClauses() throws RecognitionException {
		ForClausesContext _localctx = new ForClausesContext(_ctx, getState());
		enterRule(_localctx, 246, RULE_forClauses);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1553);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==FOR) {
				{
				{
				setState(1549);
				match(FOR);
				setState(1550);
				_la = _input.LA(1);
				if ( !(((((_la - 46)) & ~0x3f) == 0 && ((1L << (_la - 46)) & ((1L << (UPDATE - 46)) | (1L << (VIEW - 46)) | (1L << (REFERENCE - 46)))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(1555);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BoundExpressionContext extends ParserRuleContext {
		public TerminalNode COLON() { return getToken(ApexParser.COLON, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public BoundExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_boundExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterBoundExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitBoundExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitBoundExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final BoundExpressionContext boundExpression() throws RecognitionException {
		BoundExpressionContext _localctx = new BoundExpressionContext(_ctx, getState());
		enterRule(_localctx, 248, RULE_boundExpression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1556);
			match(COLON);
			setState(1557);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DateFormulaContext extends ParserRuleContext {
		public TerminalNode YESTERDAY() { return getToken(ApexParser.YESTERDAY, 0); }
		public TerminalNode TODAY() { return getToken(ApexParser.TODAY, 0); }
		public TerminalNode TOMORROW() { return getToken(ApexParser.TOMORROW, 0); }
		public TerminalNode LAST_WEEK() { return getToken(ApexParser.LAST_WEEK, 0); }
		public TerminalNode THIS_WEEK() { return getToken(ApexParser.THIS_WEEK, 0); }
		public TerminalNode NEXT_WEEK() { return getToken(ApexParser.NEXT_WEEK, 0); }
		public TerminalNode LAST_MONTH() { return getToken(ApexParser.LAST_MONTH, 0); }
		public TerminalNode THIS_MONTH() { return getToken(ApexParser.THIS_MONTH, 0); }
		public TerminalNode NEXT_MONTH() { return getToken(ApexParser.NEXT_MONTH, 0); }
		public TerminalNode LAST_90_DAYS() { return getToken(ApexParser.LAST_90_DAYS, 0); }
		public TerminalNode NEXT_90_DAYS() { return getToken(ApexParser.NEXT_90_DAYS, 0); }
		public TerminalNode LAST_N_DAYS_N() { return getToken(ApexParser.LAST_N_DAYS_N, 0); }
		public TerminalNode COLON() { return getToken(ApexParser.COLON, 0); }
		public SignedIntegerContext signedInteger() {
			return getRuleContext(SignedIntegerContext.class,0);
		}
		public TerminalNode NEXT_N_DAYS_N() { return getToken(ApexParser.NEXT_N_DAYS_N, 0); }
		public TerminalNode NEXT_N_WEEKS_N() { return getToken(ApexParser.NEXT_N_WEEKS_N, 0); }
		public TerminalNode LAST_N_WEEKS_N() { return getToken(ApexParser.LAST_N_WEEKS_N, 0); }
		public TerminalNode NEXT_N_MONTHS_N() { return getToken(ApexParser.NEXT_N_MONTHS_N, 0); }
		public TerminalNode LAST_N_MONTHS_N() { return getToken(ApexParser.LAST_N_MONTHS_N, 0); }
		public TerminalNode THIS_QUARTER() { return getToken(ApexParser.THIS_QUARTER, 0); }
		public TerminalNode LAST_QUARTER() { return getToken(ApexParser.LAST_QUARTER, 0); }
		public TerminalNode NEXT_QUARTER() { return getToken(ApexParser.NEXT_QUARTER, 0); }
		public TerminalNode NEXT_N_QUARTERS_N() { return getToken(ApexParser.NEXT_N_QUARTERS_N, 0); }
		public TerminalNode LAST_N_QUARTERS_N() { return getToken(ApexParser.LAST_N_QUARTERS_N, 0); }
		public TerminalNode THIS_YEAR() { return getToken(ApexParser.THIS_YEAR, 0); }
		public TerminalNode LAST_YEAR() { return getToken(ApexParser.LAST_YEAR, 0); }
		public TerminalNode NEXT_YEAR() { return getToken(ApexParser.NEXT_YEAR, 0); }
		public TerminalNode NEXT_N_YEARS_N() { return getToken(ApexParser.NEXT_N_YEARS_N, 0); }
		public TerminalNode LAST_N_YEARS_N() { return getToken(ApexParser.LAST_N_YEARS_N, 0); }
		public TerminalNode THIS_FISCAL_QUARTER() { return getToken(ApexParser.THIS_FISCAL_QUARTER, 0); }
		public TerminalNode LAST_FISCAL_QUARTER() { return getToken(ApexParser.LAST_FISCAL_QUARTER, 0); }
		public TerminalNode NEXT_FISCAL_QUARTER() { return getToken(ApexParser.NEXT_FISCAL_QUARTER, 0); }
		public TerminalNode NEXT_N_FISCAL_QUARTERS_N() { return getToken(ApexParser.NEXT_N_FISCAL_QUARTERS_N, 0); }
		public TerminalNode LAST_N_FISCAL_QUARTERS_N() { return getToken(ApexParser.LAST_N_FISCAL_QUARTERS_N, 0); }
		public TerminalNode THIS_FISCAL_YEAR() { return getToken(ApexParser.THIS_FISCAL_YEAR, 0); }
		public TerminalNode LAST_FISCAL_YEAR() { return getToken(ApexParser.LAST_FISCAL_YEAR, 0); }
		public TerminalNode NEXT_FISCAL_YEAR() { return getToken(ApexParser.NEXT_FISCAL_YEAR, 0); }
		public TerminalNode NEXT_N_FISCAL_YEARS_N() { return getToken(ApexParser.NEXT_N_FISCAL_YEARS_N, 0); }
		public TerminalNode LAST_N_FISCAL_YEARS_N() { return getToken(ApexParser.LAST_N_FISCAL_YEARS_N, 0); }
		public DateFormulaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dateFormula; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterDateFormula(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitDateFormula(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitDateFormula(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DateFormulaContext dateFormula() throws RecognitionException {
		DateFormulaContext _localctx = new DateFormulaContext(_ctx, getState());
		enterRule(_localctx, 250, RULE_dateFormula);
		try {
			setState(1624);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case YESTERDAY:
				enterOuterAlt(_localctx, 1);
				{
				setState(1559);
				match(YESTERDAY);
				}
				break;
			case TODAY:
				enterOuterAlt(_localctx, 2);
				{
				setState(1560);
				match(TODAY);
				}
				break;
			case TOMORROW:
				enterOuterAlt(_localctx, 3);
				{
				setState(1561);
				match(TOMORROW);
				}
				break;
			case LAST_WEEK:
				enterOuterAlt(_localctx, 4);
				{
				setState(1562);
				match(LAST_WEEK);
				}
				break;
			case THIS_WEEK:
				enterOuterAlt(_localctx, 5);
				{
				setState(1563);
				match(THIS_WEEK);
				}
				break;
			case NEXT_WEEK:
				enterOuterAlt(_localctx, 6);
				{
				setState(1564);
				match(NEXT_WEEK);
				}
				break;
			case LAST_MONTH:
				enterOuterAlt(_localctx, 7);
				{
				setState(1565);
				match(LAST_MONTH);
				}
				break;
			case THIS_MONTH:
				enterOuterAlt(_localctx, 8);
				{
				setState(1566);
				match(THIS_MONTH);
				}
				break;
			case NEXT_MONTH:
				enterOuterAlt(_localctx, 9);
				{
				setState(1567);
				match(NEXT_MONTH);
				}
				break;
			case LAST_90_DAYS:
				enterOuterAlt(_localctx, 10);
				{
				setState(1568);
				match(LAST_90_DAYS);
				}
				break;
			case NEXT_90_DAYS:
				enterOuterAlt(_localctx, 11);
				{
				setState(1569);
				match(NEXT_90_DAYS);
				}
				break;
			case LAST_N_DAYS_N:
				enterOuterAlt(_localctx, 12);
				{
				setState(1570);
				match(LAST_N_DAYS_N);
				setState(1571);
				match(COLON);
				setState(1572);
				signedInteger();
				}
				break;
			case NEXT_N_DAYS_N:
				enterOuterAlt(_localctx, 13);
				{
				setState(1573);
				match(NEXT_N_DAYS_N);
				setState(1574);
				match(COLON);
				setState(1575);
				signedInteger();
				}
				break;
			case NEXT_N_WEEKS_N:
				enterOuterAlt(_localctx, 14);
				{
				setState(1576);
				match(NEXT_N_WEEKS_N);
				setState(1577);
				match(COLON);
				setState(1578);
				signedInteger();
				}
				break;
			case LAST_N_WEEKS_N:
				enterOuterAlt(_localctx, 15);
				{
				setState(1579);
				match(LAST_N_WEEKS_N);
				setState(1580);
				match(COLON);
				setState(1581);
				signedInteger();
				}
				break;
			case NEXT_N_MONTHS_N:
				enterOuterAlt(_localctx, 16);
				{
				setState(1582);
				match(NEXT_N_MONTHS_N);
				setState(1583);
				match(COLON);
				setState(1584);
				signedInteger();
				}
				break;
			case LAST_N_MONTHS_N:
				enterOuterAlt(_localctx, 17);
				{
				setState(1585);
				match(LAST_N_MONTHS_N);
				setState(1586);
				match(COLON);
				setState(1587);
				signedInteger();
				}
				break;
			case THIS_QUARTER:
				enterOuterAlt(_localctx, 18);
				{
				setState(1588);
				match(THIS_QUARTER);
				}
				break;
			case LAST_QUARTER:
				enterOuterAlt(_localctx, 19);
				{
				setState(1589);
				match(LAST_QUARTER);
				}
				break;
			case NEXT_QUARTER:
				enterOuterAlt(_localctx, 20);
				{
				setState(1590);
				match(NEXT_QUARTER);
				}
				break;
			case NEXT_N_QUARTERS_N:
				enterOuterAlt(_localctx, 21);
				{
				setState(1591);
				match(NEXT_N_QUARTERS_N);
				setState(1592);
				match(COLON);
				setState(1593);
				signedInteger();
				}
				break;
			case LAST_N_QUARTERS_N:
				enterOuterAlt(_localctx, 22);
				{
				setState(1594);
				match(LAST_N_QUARTERS_N);
				setState(1595);
				match(COLON);
				setState(1596);
				signedInteger();
				}
				break;
			case THIS_YEAR:
				enterOuterAlt(_localctx, 23);
				{
				setState(1597);
				match(THIS_YEAR);
				}
				break;
			case LAST_YEAR:
				enterOuterAlt(_localctx, 24);
				{
				setState(1598);
				match(LAST_YEAR);
				}
				break;
			case NEXT_YEAR:
				enterOuterAlt(_localctx, 25);
				{
				setState(1599);
				match(NEXT_YEAR);
				}
				break;
			case NEXT_N_YEARS_N:
				enterOuterAlt(_localctx, 26);
				{
				setState(1600);
				match(NEXT_N_YEARS_N);
				setState(1601);
				match(COLON);
				setState(1602);
				signedInteger();
				}
				break;
			case LAST_N_YEARS_N:
				enterOuterAlt(_localctx, 27);
				{
				setState(1603);
				match(LAST_N_YEARS_N);
				setState(1604);
				match(COLON);
				setState(1605);
				signedInteger();
				}
				break;
			case THIS_FISCAL_QUARTER:
				enterOuterAlt(_localctx, 28);
				{
				setState(1606);
				match(THIS_FISCAL_QUARTER);
				}
				break;
			case LAST_FISCAL_QUARTER:
				enterOuterAlt(_localctx, 29);
				{
				setState(1607);
				match(LAST_FISCAL_QUARTER);
				}
				break;
			case NEXT_FISCAL_QUARTER:
				enterOuterAlt(_localctx, 30);
				{
				setState(1608);
				match(NEXT_FISCAL_QUARTER);
				}
				break;
			case NEXT_N_FISCAL_QUARTERS_N:
				enterOuterAlt(_localctx, 31);
				{
				setState(1609);
				match(NEXT_N_FISCAL_QUARTERS_N);
				setState(1610);
				match(COLON);
				setState(1611);
				signedInteger();
				}
				break;
			case LAST_N_FISCAL_QUARTERS_N:
				enterOuterAlt(_localctx, 32);
				{
				setState(1612);
				match(LAST_N_FISCAL_QUARTERS_N);
				setState(1613);
				match(COLON);
				setState(1614);
				signedInteger();
				}
				break;
			case THIS_FISCAL_YEAR:
				enterOuterAlt(_localctx, 33);
				{
				setState(1615);
				match(THIS_FISCAL_YEAR);
				}
				break;
			case LAST_FISCAL_YEAR:
				enterOuterAlt(_localctx, 34);
				{
				setState(1616);
				match(LAST_FISCAL_YEAR);
				}
				break;
			case NEXT_FISCAL_YEAR:
				enterOuterAlt(_localctx, 35);
				{
				setState(1617);
				match(NEXT_FISCAL_YEAR);
				}
				break;
			case NEXT_N_FISCAL_YEARS_N:
				enterOuterAlt(_localctx, 36);
				{
				setState(1618);
				match(NEXT_N_FISCAL_YEARS_N);
				setState(1619);
				match(COLON);
				setState(1620);
				signedInteger();
				}
				break;
			case LAST_N_FISCAL_YEARS_N:
				enterOuterAlt(_localctx, 37);
				{
				setState(1621);
				match(LAST_N_FISCAL_YEARS_N);
				setState(1622);
				match(COLON);
				setState(1623);
				signedInteger();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SignedIntegerContext extends ParserRuleContext {
		public TerminalNode IntegerLiteral() { return getToken(ApexParser.IntegerLiteral, 0); }
		public TerminalNode ADD() { return getToken(ApexParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(ApexParser.SUB, 0); }
		public SignedIntegerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_signedInteger; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterSignedInteger(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitSignedInteger(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitSignedInteger(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SignedIntegerContext signedInteger() throws RecognitionException {
		SignedIntegerContext _localctx = new SignedIntegerContext(_ctx, getState());
		enterRule(_localctx, 252, RULE_signedInteger);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1627);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ADD || _la==SUB) {
				{
				setState(1626);
				_la = _input.LA(1);
				if ( !(_la==ADD || _la==SUB) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(1629);
			match(IntegerLiteral);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SoqlIdContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public SoqlIdContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_soqlId; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterSoqlId(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitSoqlId(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitSoqlId(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SoqlIdContext soqlId() throws RecognitionException {
		SoqlIdContext _localctx = new SoqlIdContext(_ctx, getState());
		enterRule(_localctx, 254, RULE_soqlId);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1631);
			id();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SoslLiteralContext extends ParserRuleContext {
		public TerminalNode FindLiteral() { return getToken(ApexParser.FindLiteral, 0); }
		public SoslClausesContext soslClauses() {
			return getRuleContext(SoslClausesContext.class,0);
		}
		public TerminalNode RBRACK() { return getToken(ApexParser.RBRACK, 0); }
		public TerminalNode LBRACK() { return getToken(ApexParser.LBRACK, 0); }
		public TerminalNode FIND() { return getToken(ApexParser.FIND, 0); }
		public BoundExpressionContext boundExpression() {
			return getRuleContext(BoundExpressionContext.class,0);
		}
		public SoslLiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_soslLiteral; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterSoslLiteral(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitSoslLiteral(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitSoslLiteral(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SoslLiteralContext soslLiteral() throws RecognitionException {
		SoslLiteralContext _localctx = new SoslLiteralContext(_ctx, getState());
		enterRule(_localctx, 256, RULE_soslLiteral);
		try {
			setState(1643);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case FindLiteral:
				enterOuterAlt(_localctx, 1);
				{
				setState(1633);
				match(FindLiteral);
				setState(1634);
				soslClauses();
				setState(1635);
				match(RBRACK);
				}
				break;
			case LBRACK:
				enterOuterAlt(_localctx, 2);
				{
				setState(1637);
				match(LBRACK);
				setState(1638);
				match(FIND);
				setState(1639);
				boundExpression();
				setState(1640);
				soslClauses();
				setState(1641);
				match(RBRACK);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SoslClausesContext extends ParserRuleContext {
		public List<TerminalNode> IN() { return getTokens(ApexParser.IN); }
		public TerminalNode IN(int i) {
			return getToken(ApexParser.IN, i);
		}
		public SearchGroupContext searchGroup() {
			return getRuleContext(SearchGroupContext.class,0);
		}
		public TerminalNode RETURNING() { return getToken(ApexParser.RETURNING, 0); }
		public FieldSpecListContext fieldSpecList() {
			return getRuleContext(FieldSpecListContext.class,0);
		}
		public List<TerminalNode> WITH() { return getTokens(ApexParser.WITH); }
		public TerminalNode WITH(int i) {
			return getToken(ApexParser.WITH, i);
		}
		public TerminalNode DIVISION() { return getToken(ApexParser.DIVISION, 0); }
		public List<TerminalNode> ASSIGN() { return getTokens(ApexParser.ASSIGN); }
		public TerminalNode ASSIGN(int i) {
			return getToken(ApexParser.ASSIGN, i);
		}
		public List<TerminalNode> StringLiteral() { return getTokens(ApexParser.StringLiteral); }
		public TerminalNode StringLiteral(int i) {
			return getToken(ApexParser.StringLiteral, i);
		}
		public TerminalNode DATA() { return getToken(ApexParser.DATA, 0); }
		public TerminalNode CATEGORY() { return getToken(ApexParser.CATEGORY, 0); }
		public FilteringExpressionContext filteringExpression() {
			return getRuleContext(FilteringExpressionContext.class,0);
		}
		public TerminalNode SNIPPET() { return getToken(ApexParser.SNIPPET, 0); }
		public List<TerminalNode> NETWORK() { return getTokens(ApexParser.NETWORK); }
		public TerminalNode NETWORK(int i) {
			return getToken(ApexParser.NETWORK, i);
		}
		public List<TerminalNode> LPAREN() { return getTokens(ApexParser.LPAREN); }
		public TerminalNode LPAREN(int i) {
			return getToken(ApexParser.LPAREN, i);
		}
		public NetworkListContext networkList() {
			return getRuleContext(NetworkListContext.class,0);
		}
		public List<TerminalNode> RPAREN() { return getTokens(ApexParser.RPAREN); }
		public TerminalNode RPAREN(int i) {
			return getToken(ApexParser.RPAREN, i);
		}
		public TerminalNode PRICEBOOKID() { return getToken(ApexParser.PRICEBOOKID, 0); }
		public TerminalNode METADATA() { return getToken(ApexParser.METADATA, 0); }
		public LimitClauseContext limitClause() {
			return getRuleContext(LimitClauseContext.class,0);
		}
		public TerminalNode UPDATE() { return getToken(ApexParser.UPDATE, 0); }
		public UpdateListContext updateList() {
			return getRuleContext(UpdateListContext.class,0);
		}
		public TerminalNode TARGET_LENGTH() { return getToken(ApexParser.TARGET_LENGTH, 0); }
		public TerminalNode IntegerLiteral() { return getToken(ApexParser.IntegerLiteral, 0); }
		public SoslClausesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_soslClauses; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterSoslClauses(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitSoslClauses(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitSoslClauses(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SoslClausesContext soslClauses() throws RecognitionException {
		SoslClausesContext _localctx = new SoslClausesContext(_ctx, getState());
		enterRule(_localctx, 258, RULE_soslClauses);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1647);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IN) {
				{
				setState(1645);
				match(IN);
				setState(1646);
				searchGroup();
				}
			}

			setState(1651);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==RETURNING) {
				{
				setState(1649);
				match(RETURNING);
				setState(1650);
				fieldSpecList();
				}
			}

			setState(1657);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,152,_ctx) ) {
			case 1:
				{
				setState(1653);
				match(WITH);
				setState(1654);
				match(DIVISION);
				setState(1655);
				match(ASSIGN);
				setState(1656);
				match(StringLiteral);
				}
				break;
			}
			setState(1663);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,153,_ctx) ) {
			case 1:
				{
				setState(1659);
				match(WITH);
				setState(1660);
				match(DATA);
				setState(1661);
				match(CATEGORY);
				setState(1662);
				filteringExpression();
				}
				break;
			}
			setState(1674);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,155,_ctx) ) {
			case 1:
				{
				setState(1665);
				match(WITH);
				setState(1666);
				match(SNIPPET);
				setState(1672);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LPAREN) {
					{
					setState(1667);
					match(LPAREN);
					setState(1668);
					match(TARGET_LENGTH);
					setState(1669);
					match(ASSIGN);
					setState(1670);
					match(IntegerLiteral);
					setState(1671);
					match(RPAREN);
					}
				}

				}
				break;
			}
			setState(1683);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,156,_ctx) ) {
			case 1:
				{
				setState(1676);
				match(WITH);
				setState(1677);
				match(NETWORK);
				setState(1678);
				match(IN);
				setState(1679);
				match(LPAREN);
				setState(1680);
				networkList();
				setState(1681);
				match(RPAREN);
				}
				break;
			}
			setState(1689);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,157,_ctx) ) {
			case 1:
				{
				setState(1685);
				match(WITH);
				setState(1686);
				match(NETWORK);
				setState(1687);
				match(ASSIGN);
				setState(1688);
				match(StringLiteral);
				}
				break;
			}
			setState(1695);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,158,_ctx) ) {
			case 1:
				{
				setState(1691);
				match(WITH);
				setState(1692);
				match(PRICEBOOKID);
				setState(1693);
				match(ASSIGN);
				setState(1694);
				match(StringLiteral);
				}
				break;
			}
			setState(1701);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WITH) {
				{
				setState(1697);
				match(WITH);
				setState(1698);
				match(METADATA);
				setState(1699);
				match(ASSIGN);
				setState(1700);
				match(StringLiteral);
				}
			}

			setState(1704);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LIMIT) {
				{
				setState(1703);
				limitClause();
				}
			}

			setState(1708);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==UPDATE) {
				{
				setState(1706);
				match(UPDATE);
				setState(1707);
				updateList();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SearchGroupContext extends ParserRuleContext {
		public TerminalNode FIELDS() { return getToken(ApexParser.FIELDS, 0); }
		public TerminalNode ALL() { return getToken(ApexParser.ALL, 0); }
		public TerminalNode EMAIL() { return getToken(ApexParser.EMAIL, 0); }
		public TerminalNode NAME() { return getToken(ApexParser.NAME, 0); }
		public TerminalNode PHONE() { return getToken(ApexParser.PHONE, 0); }
		public TerminalNode SIDEBAR() { return getToken(ApexParser.SIDEBAR, 0); }
		public SearchGroupContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_searchGroup; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterSearchGroup(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitSearchGroup(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitSearchGroup(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SearchGroupContext searchGroup() throws RecognitionException {
		SearchGroupContext _localctx = new SearchGroupContext(_ctx, getState());
		enterRule(_localctx, 260, RULE_searchGroup);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1710);
			_la = _input.LA(1);
			if ( !(_la==ALL || ((((_la - 163)) & ~0x3f) == 0 && ((1L << (_la - 163)) & ((1L << (EMAIL - 163)) | (1L << (NAME - 163)) | (1L << (PHONE - 163)) | (1L << (SIDEBAR - 163)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(1711);
			match(FIELDS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldSpecListContext extends ParserRuleContext {
		public FieldSpecContext fieldSpec() {
			return getRuleContext(FieldSpecContext.class,0);
		}
		public List<TerminalNode> COMMA() { return getTokens(ApexParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ApexParser.COMMA, i);
		}
		public List<FieldSpecListContext> fieldSpecList() {
			return getRuleContexts(FieldSpecListContext.class);
		}
		public FieldSpecListContext fieldSpecList(int i) {
			return getRuleContext(FieldSpecListContext.class,i);
		}
		public FieldSpecListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldSpecList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterFieldSpecList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitFieldSpecList(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitFieldSpecList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FieldSpecListContext fieldSpecList() throws RecognitionException {
		FieldSpecListContext _localctx = new FieldSpecListContext(_ctx, getState());
		enterRule(_localctx, 262, RULE_fieldSpecList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1713);
			fieldSpec();
			setState(1718);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,162,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1714);
					match(COMMA);
					setState(1715);
					fieldSpecList();
					}
					} 
				}
				setState(1720);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,162,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldSpecContext extends ParserRuleContext {
		public List<SoslIdContext> soslId() {
			return getRuleContexts(SoslIdContext.class);
		}
		public SoslIdContext soslId(int i) {
			return getRuleContext(SoslIdContext.class,i);
		}
		public TerminalNode LPAREN() { return getToken(ApexParser.LPAREN, 0); }
		public FieldListContext fieldList() {
			return getRuleContext(FieldListContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(ApexParser.RPAREN, 0); }
		public TerminalNode WHERE() { return getToken(ApexParser.WHERE, 0); }
		public LogicalExpressionContext logicalExpression() {
			return getRuleContext(LogicalExpressionContext.class,0);
		}
		public TerminalNode USING() { return getToken(ApexParser.USING, 0); }
		public TerminalNode LISTVIEW() { return getToken(ApexParser.LISTVIEW, 0); }
		public TerminalNode ASSIGN() { return getToken(ApexParser.ASSIGN, 0); }
		public TerminalNode ORDER() { return getToken(ApexParser.ORDER, 0); }
		public TerminalNode BY() { return getToken(ApexParser.BY, 0); }
		public FieldOrderListContext fieldOrderList() {
			return getRuleContext(FieldOrderListContext.class,0);
		}
		public LimitClauseContext limitClause() {
			return getRuleContext(LimitClauseContext.class,0);
		}
		public OffsetClauseContext offsetClause() {
			return getRuleContext(OffsetClauseContext.class,0);
		}
		public FieldSpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldSpec; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterFieldSpec(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitFieldSpec(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitFieldSpec(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FieldSpecContext fieldSpec() throws RecognitionException {
		FieldSpecContext _localctx = new FieldSpecContext(_ctx, getState());
		enterRule(_localctx, 264, RULE_fieldSpec);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1721);
			soslId();
			setState(1747);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LPAREN) {
				{
				setState(1722);
				match(LPAREN);
				setState(1723);
				fieldList();
				setState(1726);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==WHERE) {
					{
					setState(1724);
					match(WHERE);
					setState(1725);
					logicalExpression();
					}
				}

				setState(1732);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==USING) {
					{
					setState(1728);
					match(USING);
					setState(1729);
					match(LISTVIEW);
					setState(1730);
					match(ASSIGN);
					setState(1731);
					soslId();
					}
				}

				setState(1737);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==ORDER) {
					{
					setState(1734);
					match(ORDER);
					setState(1735);
					match(BY);
					setState(1736);
					fieldOrderList();
					}
				}

				setState(1740);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==LIMIT) {
					{
					setState(1739);
					limitClause();
					}
				}

				setState(1743);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==OFFSET) {
					{
					setState(1742);
					offsetClause();
					}
				}

				setState(1745);
				match(RPAREN);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FieldListContext extends ParserRuleContext {
		public SoslIdContext soslId() {
			return getRuleContext(SoslIdContext.class,0);
		}
		public List<TerminalNode> COMMA() { return getTokens(ApexParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(ApexParser.COMMA, i);
		}
		public List<FieldListContext> fieldList() {
			return getRuleContexts(FieldListContext.class);
		}
		public FieldListContext fieldList(int i) {
			return getRuleContext(FieldListContext.class,i);
		}
		public FieldListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fieldList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterFieldList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitFieldList(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitFieldList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final FieldListContext fieldList() throws RecognitionException {
		FieldListContext _localctx = new FieldListContext(_ctx, getState());
		enterRule(_localctx, 266, RULE_fieldList);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1749);
			soslId();
			setState(1754);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,169,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1750);
					match(COMMA);
					setState(1751);
					fieldList();
					}
					} 
				}
				setState(1756);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,169,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UpdateListContext extends ParserRuleContext {
		public UpdateTypeContext updateType() {
			return getRuleContext(UpdateTypeContext.class,0);
		}
		public TerminalNode COMMA() { return getToken(ApexParser.COMMA, 0); }
		public UpdateListContext updateList() {
			return getRuleContext(UpdateListContext.class,0);
		}
		public UpdateListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_updateList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterUpdateList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitUpdateList(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitUpdateList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final UpdateListContext updateList() throws RecognitionException {
		UpdateListContext _localctx = new UpdateListContext(_ctx, getState());
		enterRule(_localctx, 268, RULE_updateList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1757);
			updateType();
			setState(1760);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(1758);
				match(COMMA);
				setState(1759);
				updateList();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UpdateTypeContext extends ParserRuleContext {
		public TerminalNode TRACKING() { return getToken(ApexParser.TRACKING, 0); }
		public TerminalNode VIEWSTAT() { return getToken(ApexParser.VIEWSTAT, 0); }
		public UpdateTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_updateType; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterUpdateType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitUpdateType(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitUpdateType(this);
			else return visitor.visitChildren(this);
		}
	}

	public final UpdateTypeContext updateType() throws RecognitionException {
		UpdateTypeContext _localctx = new UpdateTypeContext(_ctx, getState());
		enterRule(_localctx, 270, RULE_updateType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1762);
			_la = _input.LA(1);
			if ( !(_la==TRACKING || _la==VIEWSTAT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NetworkListContext extends ParserRuleContext {
		public TerminalNode StringLiteral() { return getToken(ApexParser.StringLiteral, 0); }
		public TerminalNode COMMA() { return getToken(ApexParser.COMMA, 0); }
		public NetworkListContext networkList() {
			return getRuleContext(NetworkListContext.class,0);
		}
		public NetworkListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_networkList; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterNetworkList(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitNetworkList(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitNetworkList(this);
			else return visitor.visitChildren(this);
		}
	}

	public final NetworkListContext networkList() throws RecognitionException {
		NetworkListContext _localctx = new NetworkListContext(_ctx, getState());
		enterRule(_localctx, 272, RULE_networkList);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1764);
			match(StringLiteral);
			setState(1767);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COMMA) {
				{
				setState(1765);
				match(COMMA);
				setState(1766);
				networkList();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SoslIdContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public List<TerminalNode> DOT() { return getTokens(ApexParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(ApexParser.DOT, i);
		}
		public List<SoslIdContext> soslId() {
			return getRuleContexts(SoslIdContext.class);
		}
		public SoslIdContext soslId(int i) {
			return getRuleContext(SoslIdContext.class,i);
		}
		public SoslIdContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_soslId; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterSoslId(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitSoslId(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitSoslId(this);
			else return visitor.visitChildren(this);
		}
	}

	public final SoslIdContext soslId() throws RecognitionException {
		SoslIdContext _localctx = new SoslIdContext(_ctx, getState());
		enterRule(_localctx, 274, RULE_soslId);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1769);
			id();
			setState(1774);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,172,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(1770);
					match(DOT);
					setState(1771);
					soslId();
					}
					} 
				}
				setState(1776);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,172,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(ApexParser.Identifier, 0); }
		public TerminalNode AFTER() { return getToken(ApexParser.AFTER, 0); }
		public TerminalNode BEFORE() { return getToken(ApexParser.BEFORE, 0); }
		public TerminalNode GET() { return getToken(ApexParser.GET, 0); }
		public TerminalNode INHERITED() { return getToken(ApexParser.INHERITED, 0); }
		public TerminalNode INSTANCEOF() { return getToken(ApexParser.INSTANCEOF, 0); }
		public TerminalNode SET() { return getToken(ApexParser.SET, 0); }
		public TerminalNode SHARING() { return getToken(ApexParser.SHARING, 0); }
		public TerminalNode SWITCH() { return getToken(ApexParser.SWITCH, 0); }
		public TerminalNode TRANSIENT() { return getToken(ApexParser.TRANSIENT, 0); }
		public TerminalNode TRIGGER() { return getToken(ApexParser.TRIGGER, 0); }
		public TerminalNode WHEN() { return getToken(ApexParser.WHEN, 0); }
		public TerminalNode WITH() { return getToken(ApexParser.WITH, 0); }
		public TerminalNode WITHOUT() { return getToken(ApexParser.WITHOUT, 0); }
		public TerminalNode SELECT() { return getToken(ApexParser.SELECT, 0); }
		public TerminalNode COUNT() { return getToken(ApexParser.COUNT, 0); }
		public TerminalNode FROM() { return getToken(ApexParser.FROM, 0); }
		public TerminalNode AS() { return getToken(ApexParser.AS, 0); }
		public TerminalNode USING() { return getToken(ApexParser.USING, 0); }
		public TerminalNode SCOPE() { return getToken(ApexParser.SCOPE, 0); }
		public TerminalNode WHERE() { return getToken(ApexParser.WHERE, 0); }
		public TerminalNode ORDER() { return getToken(ApexParser.ORDER, 0); }
		public TerminalNode BY() { return getToken(ApexParser.BY, 0); }
		public TerminalNode LIMIT() { return getToken(ApexParser.LIMIT, 0); }
		public TerminalNode SOQLAND() { return getToken(ApexParser.SOQLAND, 0); }
		public TerminalNode SOQLOR() { return getToken(ApexParser.SOQLOR, 0); }
		public TerminalNode NOT() { return getToken(ApexParser.NOT, 0); }
		public TerminalNode AVG() { return getToken(ApexParser.AVG, 0); }
		public TerminalNode COUNT_DISTINCT() { return getToken(ApexParser.COUNT_DISTINCT, 0); }
		public TerminalNode MIN() { return getToken(ApexParser.MIN, 0); }
		public TerminalNode MAX() { return getToken(ApexParser.MAX, 0); }
		public TerminalNode SUM() { return getToken(ApexParser.SUM, 0); }
		public TerminalNode TYPEOF() { return getToken(ApexParser.TYPEOF, 0); }
		public TerminalNode END() { return getToken(ApexParser.END, 0); }
		public TerminalNode THEN() { return getToken(ApexParser.THEN, 0); }
		public TerminalNode LIKE() { return getToken(ApexParser.LIKE, 0); }
		public TerminalNode IN() { return getToken(ApexParser.IN, 0); }
		public TerminalNode INCLUDES() { return getToken(ApexParser.INCLUDES, 0); }
		public TerminalNode EXCLUDES() { return getToken(ApexParser.EXCLUDES, 0); }
		public TerminalNode ASC() { return getToken(ApexParser.ASC, 0); }
		public TerminalNode DESC() { return getToken(ApexParser.DESC, 0); }
		public TerminalNode NULLS() { return getToken(ApexParser.NULLS, 0); }
		public TerminalNode FIRST() { return getToken(ApexParser.FIRST, 0); }
		public TerminalNode LAST() { return getToken(ApexParser.LAST, 0); }
		public TerminalNode GROUP() { return getToken(ApexParser.GROUP, 0); }
		public TerminalNode ALL() { return getToken(ApexParser.ALL, 0); }
		public TerminalNode ROWS() { return getToken(ApexParser.ROWS, 0); }
		public TerminalNode VIEW() { return getToken(ApexParser.VIEW, 0); }
		public TerminalNode HAVING() { return getToken(ApexParser.HAVING, 0); }
		public TerminalNode ROLLUP() { return getToken(ApexParser.ROLLUP, 0); }
		public TerminalNode TOLABEL() { return getToken(ApexParser.TOLABEL, 0); }
		public TerminalNode OFFSET() { return getToken(ApexParser.OFFSET, 0); }
		public TerminalNode DATA() { return getToken(ApexParser.DATA, 0); }
		public TerminalNode CATEGORY() { return getToken(ApexParser.CATEGORY, 0); }
		public TerminalNode AT() { return getToken(ApexParser.AT, 0); }
		public TerminalNode ABOVE() { return getToken(ApexParser.ABOVE, 0); }
		public TerminalNode BELOW() { return getToken(ApexParser.BELOW, 0); }
		public TerminalNode ABOVE_OR_BELOW() { return getToken(ApexParser.ABOVE_OR_BELOW, 0); }
		public TerminalNode SECURITY_ENFORCED() { return getToken(ApexParser.SECURITY_ENFORCED, 0); }
		public TerminalNode REFERENCE() { return getToken(ApexParser.REFERENCE, 0); }
		public TerminalNode CUBE() { return getToken(ApexParser.CUBE, 0); }
		public TerminalNode FORMAT() { return getToken(ApexParser.FORMAT, 0); }
		public TerminalNode TRACKING() { return getToken(ApexParser.TRACKING, 0); }
		public TerminalNode VIEWSTAT() { return getToken(ApexParser.VIEWSTAT, 0); }
		public TerminalNode STANDARD() { return getToken(ApexParser.STANDARD, 0); }
		public TerminalNode CUSTOM() { return getToken(ApexParser.CUSTOM, 0); }
		public TerminalNode CALENDAR_MONTH() { return getToken(ApexParser.CALENDAR_MONTH, 0); }
		public TerminalNode CALENDAR_QUARTER() { return getToken(ApexParser.CALENDAR_QUARTER, 0); }
		public TerminalNode CALENDAR_YEAR() { return getToken(ApexParser.CALENDAR_YEAR, 0); }
		public TerminalNode DAY_IN_MONTH() { return getToken(ApexParser.DAY_IN_MONTH, 0); }
		public TerminalNode DAY_IN_WEEK() { return getToken(ApexParser.DAY_IN_WEEK, 0); }
		public TerminalNode DAY_IN_YEAR() { return getToken(ApexParser.DAY_IN_YEAR, 0); }
		public TerminalNode DAY_ONLY() { return getToken(ApexParser.DAY_ONLY, 0); }
		public TerminalNode FISCAL_MONTH() { return getToken(ApexParser.FISCAL_MONTH, 0); }
		public TerminalNode FISCAL_QUARTER() { return getToken(ApexParser.FISCAL_QUARTER, 0); }
		public TerminalNode FISCAL_YEAR() { return getToken(ApexParser.FISCAL_YEAR, 0); }
		public TerminalNode HOUR_IN_DAY() { return getToken(ApexParser.HOUR_IN_DAY, 0); }
		public TerminalNode WEEK_IN_MONTH() { return getToken(ApexParser.WEEK_IN_MONTH, 0); }
		public TerminalNode WEEK_IN_YEAR() { return getToken(ApexParser.WEEK_IN_YEAR, 0); }
		public TerminalNode CONVERT_TIMEZONE() { return getToken(ApexParser.CONVERT_TIMEZONE, 0); }
		public TerminalNode YESTERDAY() { return getToken(ApexParser.YESTERDAY, 0); }
		public TerminalNode TODAY() { return getToken(ApexParser.TODAY, 0); }
		public TerminalNode TOMORROW() { return getToken(ApexParser.TOMORROW, 0); }
		public TerminalNode LAST_WEEK() { return getToken(ApexParser.LAST_WEEK, 0); }
		public TerminalNode THIS_WEEK() { return getToken(ApexParser.THIS_WEEK, 0); }
		public TerminalNode NEXT_WEEK() { return getToken(ApexParser.NEXT_WEEK, 0); }
		public TerminalNode LAST_MONTH() { return getToken(ApexParser.LAST_MONTH, 0); }
		public TerminalNode THIS_MONTH() { return getToken(ApexParser.THIS_MONTH, 0); }
		public TerminalNode NEXT_MONTH() { return getToken(ApexParser.NEXT_MONTH, 0); }
		public TerminalNode LAST_90_DAYS() { return getToken(ApexParser.LAST_90_DAYS, 0); }
		public TerminalNode NEXT_90_DAYS() { return getToken(ApexParser.NEXT_90_DAYS, 0); }
		public TerminalNode LAST_N_DAYS_N() { return getToken(ApexParser.LAST_N_DAYS_N, 0); }
		public TerminalNode NEXT_N_DAYS_N() { return getToken(ApexParser.NEXT_N_DAYS_N, 0); }
		public TerminalNode NEXT_N_WEEKS_N() { return getToken(ApexParser.NEXT_N_WEEKS_N, 0); }
		public TerminalNode LAST_N_WEEKS_N() { return getToken(ApexParser.LAST_N_WEEKS_N, 0); }
		public TerminalNode NEXT_N_MONTHS_N() { return getToken(ApexParser.NEXT_N_MONTHS_N, 0); }
		public TerminalNode LAST_N_MONTHS_N() { return getToken(ApexParser.LAST_N_MONTHS_N, 0); }
		public TerminalNode THIS_QUARTER() { return getToken(ApexParser.THIS_QUARTER, 0); }
		public TerminalNode LAST_QUARTER() { return getToken(ApexParser.LAST_QUARTER, 0); }
		public TerminalNode NEXT_QUARTER() { return getToken(ApexParser.NEXT_QUARTER, 0); }
		public TerminalNode NEXT_N_QUARTERS_N() { return getToken(ApexParser.NEXT_N_QUARTERS_N, 0); }
		public TerminalNode LAST_N_QUARTERS_N() { return getToken(ApexParser.LAST_N_QUARTERS_N, 0); }
		public TerminalNode THIS_YEAR() { return getToken(ApexParser.THIS_YEAR, 0); }
		public TerminalNode LAST_YEAR() { return getToken(ApexParser.LAST_YEAR, 0); }
		public TerminalNode NEXT_YEAR() { return getToken(ApexParser.NEXT_YEAR, 0); }
		public TerminalNode NEXT_N_YEARS_N() { return getToken(ApexParser.NEXT_N_YEARS_N, 0); }
		public TerminalNode LAST_N_YEARS_N() { return getToken(ApexParser.LAST_N_YEARS_N, 0); }
		public TerminalNode THIS_FISCAL_QUARTER() { return getToken(ApexParser.THIS_FISCAL_QUARTER, 0); }
		public TerminalNode LAST_FISCAL_QUARTER() { return getToken(ApexParser.LAST_FISCAL_QUARTER, 0); }
		public TerminalNode NEXT_FISCAL_QUARTER() { return getToken(ApexParser.NEXT_FISCAL_QUARTER, 0); }
		public TerminalNode NEXT_N_FISCAL_QUARTERS_N() { return getToken(ApexParser.NEXT_N_FISCAL_QUARTERS_N, 0); }
		public TerminalNode LAST_N_FISCAL_QUARTERS_N() { return getToken(ApexParser.LAST_N_FISCAL_QUARTERS_N, 0); }
		public TerminalNode THIS_FISCAL_YEAR() { return getToken(ApexParser.THIS_FISCAL_YEAR, 0); }
		public TerminalNode LAST_FISCAL_YEAR() { return getToken(ApexParser.LAST_FISCAL_YEAR, 0); }
		public TerminalNode NEXT_FISCAL_YEAR() { return getToken(ApexParser.NEXT_FISCAL_YEAR, 0); }
		public TerminalNode NEXT_N_FISCAL_YEARS_N() { return getToken(ApexParser.NEXT_N_FISCAL_YEARS_N, 0); }
		public TerminalNode LAST_N_FISCAL_YEARS_N() { return getToken(ApexParser.LAST_N_FISCAL_YEARS_N, 0); }
		public TerminalNode FIND() { return getToken(ApexParser.FIND, 0); }
		public TerminalNode EMAIL() { return getToken(ApexParser.EMAIL, 0); }
		public TerminalNode NAME() { return getToken(ApexParser.NAME, 0); }
		public TerminalNode PHONE() { return getToken(ApexParser.PHONE, 0); }
		public TerminalNode SIDEBAR() { return getToken(ApexParser.SIDEBAR, 0); }
		public TerminalNode FIELDS() { return getToken(ApexParser.FIELDS, 0); }
		public TerminalNode METADATA() { return getToken(ApexParser.METADATA, 0); }
		public TerminalNode PRICEBOOKID() { return getToken(ApexParser.PRICEBOOKID, 0); }
		public TerminalNode NETWORK() { return getToken(ApexParser.NETWORK, 0); }
		public TerminalNode SNIPPET() { return getToken(ApexParser.SNIPPET, 0); }
		public TerminalNode TARGET_LENGTH() { return getToken(ApexParser.TARGET_LENGTH, 0); }
		public TerminalNode DIVISION() { return getToken(ApexParser.DIVISION, 0); }
		public TerminalNode RETURNING() { return getToken(ApexParser.RETURNING, 0); }
		public TerminalNode LISTVIEW() { return getToken(ApexParser.LISTVIEW, 0); }
		public IdContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_id; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterId(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitId(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitId(this);
			else return visitor.visitChildren(this);
		}
	}

	public final IdContext id() throws RecognitionException {
		IdContext _localctx = new IdContext(_ctx, getState());
		enterRule(_localctx, 276, RULE_id);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1777);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << AFTER) | (1L << BEFORE) | (1L << GET) | (1L << INHERITED) | (1L << INSTANCEOF) | (1L << SET) | (1L << SHARING) | (1L << SWITCH) | (1L << TRANSIENT) | (1L << TRIGGER) | (1L << WHEN) | (1L << WITH) | (1L << WITHOUT) | (1L << SELECT) | (1L << COUNT) | (1L << FROM) | (1L << AS) | (1L << USING) | (1L << SCOPE) | (1L << WHERE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ORDER - 64)) | (1L << (BY - 64)) | (1L << (LIMIT - 64)) | (1L << (SOQLAND - 64)) | (1L << (SOQLOR - 64)) | (1L << (NOT - 64)) | (1L << (AVG - 64)) | (1L << (COUNT_DISTINCT - 64)) | (1L << (MIN - 64)) | (1L << (MAX - 64)) | (1L << (SUM - 64)) | (1L << (TYPEOF - 64)) | (1L << (END - 64)) | (1L << (THEN - 64)) | (1L << (LIKE - 64)) | (1L << (IN - 64)) | (1L << (INCLUDES - 64)) | (1L << (EXCLUDES - 64)) | (1L << (ASC - 64)) | (1L << (DESC - 64)) | (1L << (NULLS - 64)) | (1L << (FIRST - 64)) | (1L << (LAST - 64)) | (1L << (GROUP - 64)) | (1L << (ALL - 64)) | (1L << (ROWS - 64)) | (1L << (VIEW - 64)) | (1L << (HAVING - 64)) | (1L << (ROLLUP - 64)) | (1L << (TOLABEL - 64)) | (1L << (OFFSET - 64)) | (1L << (DATA - 64)) | (1L << (CATEGORY - 64)) | (1L << (AT - 64)) | (1L << (ABOVE - 64)) | (1L << (BELOW - 64)) | (1L << (ABOVE_OR_BELOW - 64)) | (1L << (SECURITY_ENFORCED - 64)) | (1L << (REFERENCE - 64)) | (1L << (CUBE - 64)) | (1L << (FORMAT - 64)) | (1L << (TRACKING - 64)) | (1L << (VIEWSTAT - 64)) | (1L << (CUSTOM - 64)) | (1L << (STANDARD - 64)) | (1L << (CALENDAR_MONTH - 64)) | (1L << (CALENDAR_QUARTER - 64)) | (1L << (CALENDAR_YEAR - 64)) | (1L << (DAY_IN_MONTH - 64)) | (1L << (DAY_IN_WEEK - 64)) | (1L << (DAY_IN_YEAR - 64)) | (1L << (DAY_ONLY - 64)) | (1L << (FISCAL_MONTH - 64)) | (1L << (FISCAL_QUARTER - 64)) | (1L << (FISCAL_YEAR - 64)) | (1L << (HOUR_IN_DAY - 64)) | (1L << (WEEK_IN_MONTH - 64)) | (1L << (WEEK_IN_YEAR - 64)) | (1L << (CONVERT_TIMEZONE - 64)) | (1L << (YESTERDAY - 64)) | (1L << (TODAY - 64)) | (1L << (TOMORROW - 64)) | (1L << (LAST_WEEK - 64)) | (1L << (THIS_WEEK - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (NEXT_WEEK - 128)) | (1L << (LAST_MONTH - 128)) | (1L << (THIS_MONTH - 128)) | (1L << (NEXT_MONTH - 128)) | (1L << (LAST_90_DAYS - 128)) | (1L << (NEXT_90_DAYS - 128)) | (1L << (LAST_N_DAYS_N - 128)) | (1L << (NEXT_N_DAYS_N - 128)) | (1L << (NEXT_N_WEEKS_N - 128)) | (1L << (LAST_N_WEEKS_N - 128)) | (1L << (NEXT_N_MONTHS_N - 128)) | (1L << (LAST_N_MONTHS_N - 128)) | (1L << (THIS_QUARTER - 128)) | (1L << (LAST_QUARTER - 128)) | (1L << (NEXT_QUARTER - 128)) | (1L << (NEXT_N_QUARTERS_N - 128)) | (1L << (LAST_N_QUARTERS_N - 128)) | (1L << (THIS_YEAR - 128)) | (1L << (LAST_YEAR - 128)) | (1L << (NEXT_YEAR - 128)) | (1L << (NEXT_N_YEARS_N - 128)) | (1L << (LAST_N_YEARS_N - 128)) | (1L << (THIS_FISCAL_QUARTER - 128)) | (1L << (LAST_FISCAL_QUARTER - 128)) | (1L << (NEXT_FISCAL_QUARTER - 128)) | (1L << (NEXT_N_FISCAL_QUARTERS_N - 128)) | (1L << (LAST_N_FISCAL_QUARTERS_N - 128)) | (1L << (THIS_FISCAL_YEAR - 128)) | (1L << (LAST_FISCAL_YEAR - 128)) | (1L << (NEXT_FISCAL_YEAR - 128)) | (1L << (NEXT_N_FISCAL_YEARS_N - 128)) | (1L << (LAST_N_FISCAL_YEARS_N - 128)) | (1L << (FIND - 128)) | (1L << (EMAIL - 128)) | (1L << (NAME - 128)) | (1L << (PHONE - 128)) | (1L << (SIDEBAR - 128)) | (1L << (FIELDS - 128)) | (1L << (METADATA - 128)) | (1L << (PRICEBOOKID - 128)) | (1L << (NETWORK - 128)) | (1L << (SNIPPET - 128)) | (1L << (TARGET_LENGTH - 128)) | (1L << (DIVISION - 128)) | (1L << (RETURNING - 128)) | (1L << (LISTVIEW - 128)))) != 0) || _la==Identifier) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AnyIdContext extends ParserRuleContext {
		public TerminalNode Identifier() { return getToken(ApexParser.Identifier, 0); }
		public TerminalNode ABSTRACT() { return getToken(ApexParser.ABSTRACT, 0); }
		public TerminalNode AFTER() { return getToken(ApexParser.AFTER, 0); }
		public TerminalNode BEFORE() { return getToken(ApexParser.BEFORE, 0); }
		public TerminalNode BREAK() { return getToken(ApexParser.BREAK, 0); }
		public TerminalNode CATCH() { return getToken(ApexParser.CATCH, 0); }
		public TerminalNode CLASS() { return getToken(ApexParser.CLASS, 0); }
		public TerminalNode CONTINUE() { return getToken(ApexParser.CONTINUE, 0); }
		public TerminalNode DELETE() { return getToken(ApexParser.DELETE, 0); }
		public TerminalNode DO() { return getToken(ApexParser.DO, 0); }
		public TerminalNode ELSE() { return getToken(ApexParser.ELSE, 0); }
		public TerminalNode ENUM() { return getToken(ApexParser.ENUM, 0); }
		public TerminalNode EXTENDS() { return getToken(ApexParser.EXTENDS, 0); }
		public TerminalNode FINAL() { return getToken(ApexParser.FINAL, 0); }
		public TerminalNode FINALLY() { return getToken(ApexParser.FINALLY, 0); }
		public TerminalNode FOR() { return getToken(ApexParser.FOR, 0); }
		public TerminalNode GET() { return getToken(ApexParser.GET, 0); }
		public TerminalNode GLOBAL() { return getToken(ApexParser.GLOBAL, 0); }
		public TerminalNode IF() { return getToken(ApexParser.IF, 0); }
		public TerminalNode IMPLEMENTS() { return getToken(ApexParser.IMPLEMENTS, 0); }
		public TerminalNode INHERITED() { return getToken(ApexParser.INHERITED, 0); }
		public TerminalNode INSERT() { return getToken(ApexParser.INSERT, 0); }
		public TerminalNode INSTANCEOF() { return getToken(ApexParser.INSTANCEOF, 0); }
		public TerminalNode INTERFACE() { return getToken(ApexParser.INTERFACE, 0); }
		public TerminalNode LIST() { return getToken(ApexParser.LIST, 0); }
		public TerminalNode MAP() { return getToken(ApexParser.MAP, 0); }
		public TerminalNode MERGE() { return getToken(ApexParser.MERGE, 0); }
		public TerminalNode NEW() { return getToken(ApexParser.NEW, 0); }
		public TerminalNode NULL() { return getToken(ApexParser.NULL, 0); }
		public TerminalNode ON() { return getToken(ApexParser.ON, 0); }
		public TerminalNode OVERRIDE() { return getToken(ApexParser.OVERRIDE, 0); }
		public TerminalNode PRIVATE() { return getToken(ApexParser.PRIVATE, 0); }
		public TerminalNode PROTECTED() { return getToken(ApexParser.PROTECTED, 0); }
		public TerminalNode PUBLIC() { return getToken(ApexParser.PUBLIC, 0); }
		public TerminalNode RETURN() { return getToken(ApexParser.RETURN, 0); }
		public TerminalNode SET() { return getToken(ApexParser.SET, 0); }
		public TerminalNode SHARING() { return getToken(ApexParser.SHARING, 0); }
		public TerminalNode STATIC() { return getToken(ApexParser.STATIC, 0); }
		public TerminalNode SUPER() { return getToken(ApexParser.SUPER, 0); }
		public TerminalNode SWITCH() { return getToken(ApexParser.SWITCH, 0); }
		public TerminalNode TESTMETHOD() { return getToken(ApexParser.TESTMETHOD, 0); }
		public TerminalNode THIS() { return getToken(ApexParser.THIS, 0); }
		public TerminalNode THROW() { return getToken(ApexParser.THROW, 0); }
		public TerminalNode TRANSIENT() { return getToken(ApexParser.TRANSIENT, 0); }
		public TerminalNode TRIGGER() { return getToken(ApexParser.TRIGGER, 0); }
		public TerminalNode TRY() { return getToken(ApexParser.TRY, 0); }
		public TerminalNode UNDELETE() { return getToken(ApexParser.UNDELETE, 0); }
		public TerminalNode UPDATE() { return getToken(ApexParser.UPDATE, 0); }
		public TerminalNode UPSERT() { return getToken(ApexParser.UPSERT, 0); }
		public TerminalNode VIRTUAL() { return getToken(ApexParser.VIRTUAL, 0); }
		public TerminalNode WEBSERVICE() { return getToken(ApexParser.WEBSERVICE, 0); }
		public TerminalNode WHEN() { return getToken(ApexParser.WHEN, 0); }
		public TerminalNode WHILE() { return getToken(ApexParser.WHILE, 0); }
		public TerminalNode WITH() { return getToken(ApexParser.WITH, 0); }
		public TerminalNode WITHOUT() { return getToken(ApexParser.WITHOUT, 0); }
		public TerminalNode SELECT() { return getToken(ApexParser.SELECT, 0); }
		public TerminalNode COUNT() { return getToken(ApexParser.COUNT, 0); }
		public TerminalNode FROM() { return getToken(ApexParser.FROM, 0); }
		public TerminalNode AS() { return getToken(ApexParser.AS, 0); }
		public TerminalNode USING() { return getToken(ApexParser.USING, 0); }
		public TerminalNode SCOPE() { return getToken(ApexParser.SCOPE, 0); }
		public TerminalNode WHERE() { return getToken(ApexParser.WHERE, 0); }
		public TerminalNode ORDER() { return getToken(ApexParser.ORDER, 0); }
		public TerminalNode BY() { return getToken(ApexParser.BY, 0); }
		public TerminalNode LIMIT() { return getToken(ApexParser.LIMIT, 0); }
		public TerminalNode SOQLAND() { return getToken(ApexParser.SOQLAND, 0); }
		public TerminalNode SOQLOR() { return getToken(ApexParser.SOQLOR, 0); }
		public TerminalNode NOT() { return getToken(ApexParser.NOT, 0); }
		public TerminalNode AVG() { return getToken(ApexParser.AVG, 0); }
		public TerminalNode COUNT_DISTINCT() { return getToken(ApexParser.COUNT_DISTINCT, 0); }
		public TerminalNode MIN() { return getToken(ApexParser.MIN, 0); }
		public TerminalNode MAX() { return getToken(ApexParser.MAX, 0); }
		public TerminalNode SUM() { return getToken(ApexParser.SUM, 0); }
		public TerminalNode TYPEOF() { return getToken(ApexParser.TYPEOF, 0); }
		public TerminalNode END() { return getToken(ApexParser.END, 0); }
		public TerminalNode THEN() { return getToken(ApexParser.THEN, 0); }
		public TerminalNode LIKE() { return getToken(ApexParser.LIKE, 0); }
		public TerminalNode IN() { return getToken(ApexParser.IN, 0); }
		public TerminalNode INCLUDES() { return getToken(ApexParser.INCLUDES, 0); }
		public TerminalNode EXCLUDES() { return getToken(ApexParser.EXCLUDES, 0); }
		public TerminalNode ASC() { return getToken(ApexParser.ASC, 0); }
		public TerminalNode DESC() { return getToken(ApexParser.DESC, 0); }
		public TerminalNode NULLS() { return getToken(ApexParser.NULLS, 0); }
		public TerminalNode FIRST() { return getToken(ApexParser.FIRST, 0); }
		public TerminalNode LAST() { return getToken(ApexParser.LAST, 0); }
		public TerminalNode GROUP() { return getToken(ApexParser.GROUP, 0); }
		public TerminalNode ALL() { return getToken(ApexParser.ALL, 0); }
		public TerminalNode ROWS() { return getToken(ApexParser.ROWS, 0); }
		public TerminalNode VIEW() { return getToken(ApexParser.VIEW, 0); }
		public TerminalNode HAVING() { return getToken(ApexParser.HAVING, 0); }
		public TerminalNode ROLLUP() { return getToken(ApexParser.ROLLUP, 0); }
		public TerminalNode TOLABEL() { return getToken(ApexParser.TOLABEL, 0); }
		public TerminalNode OFFSET() { return getToken(ApexParser.OFFSET, 0); }
		public TerminalNode DATA() { return getToken(ApexParser.DATA, 0); }
		public TerminalNode CATEGORY() { return getToken(ApexParser.CATEGORY, 0); }
		public TerminalNode AT() { return getToken(ApexParser.AT, 0); }
		public TerminalNode ABOVE() { return getToken(ApexParser.ABOVE, 0); }
		public TerminalNode BELOW() { return getToken(ApexParser.BELOW, 0); }
		public TerminalNode ABOVE_OR_BELOW() { return getToken(ApexParser.ABOVE_OR_BELOW, 0); }
		public TerminalNode SECURITY_ENFORCED() { return getToken(ApexParser.SECURITY_ENFORCED, 0); }
		public TerminalNode REFERENCE() { return getToken(ApexParser.REFERENCE, 0); }
		public TerminalNode CUBE() { return getToken(ApexParser.CUBE, 0); }
		public TerminalNode FORMAT() { return getToken(ApexParser.FORMAT, 0); }
		public TerminalNode TRACKING() { return getToken(ApexParser.TRACKING, 0); }
		public TerminalNode VIEWSTAT() { return getToken(ApexParser.VIEWSTAT, 0); }
		public TerminalNode STANDARD() { return getToken(ApexParser.STANDARD, 0); }
		public TerminalNode CUSTOM() { return getToken(ApexParser.CUSTOM, 0); }
		public TerminalNode CALENDAR_MONTH() { return getToken(ApexParser.CALENDAR_MONTH, 0); }
		public TerminalNode CALENDAR_QUARTER() { return getToken(ApexParser.CALENDAR_QUARTER, 0); }
		public TerminalNode CALENDAR_YEAR() { return getToken(ApexParser.CALENDAR_YEAR, 0); }
		public TerminalNode DAY_IN_MONTH() { return getToken(ApexParser.DAY_IN_MONTH, 0); }
		public TerminalNode DAY_IN_WEEK() { return getToken(ApexParser.DAY_IN_WEEK, 0); }
		public TerminalNode DAY_IN_YEAR() { return getToken(ApexParser.DAY_IN_YEAR, 0); }
		public TerminalNode DAY_ONLY() { return getToken(ApexParser.DAY_ONLY, 0); }
		public TerminalNode FISCAL_MONTH() { return getToken(ApexParser.FISCAL_MONTH, 0); }
		public TerminalNode FISCAL_QUARTER() { return getToken(ApexParser.FISCAL_QUARTER, 0); }
		public TerminalNode FISCAL_YEAR() { return getToken(ApexParser.FISCAL_YEAR, 0); }
		public TerminalNode HOUR_IN_DAY() { return getToken(ApexParser.HOUR_IN_DAY, 0); }
		public TerminalNode WEEK_IN_MONTH() { return getToken(ApexParser.WEEK_IN_MONTH, 0); }
		public TerminalNode WEEK_IN_YEAR() { return getToken(ApexParser.WEEK_IN_YEAR, 0); }
		public TerminalNode CONVERT_TIMEZONE() { return getToken(ApexParser.CONVERT_TIMEZONE, 0); }
		public TerminalNode YESTERDAY() { return getToken(ApexParser.YESTERDAY, 0); }
		public TerminalNode TODAY() { return getToken(ApexParser.TODAY, 0); }
		public TerminalNode TOMORROW() { return getToken(ApexParser.TOMORROW, 0); }
		public TerminalNode LAST_WEEK() { return getToken(ApexParser.LAST_WEEK, 0); }
		public TerminalNode THIS_WEEK() { return getToken(ApexParser.THIS_WEEK, 0); }
		public TerminalNode NEXT_WEEK() { return getToken(ApexParser.NEXT_WEEK, 0); }
		public TerminalNode LAST_MONTH() { return getToken(ApexParser.LAST_MONTH, 0); }
		public TerminalNode THIS_MONTH() { return getToken(ApexParser.THIS_MONTH, 0); }
		public TerminalNode NEXT_MONTH() { return getToken(ApexParser.NEXT_MONTH, 0); }
		public TerminalNode LAST_90_DAYS() { return getToken(ApexParser.LAST_90_DAYS, 0); }
		public TerminalNode NEXT_90_DAYS() { return getToken(ApexParser.NEXT_90_DAYS, 0); }
		public TerminalNode LAST_N_DAYS_N() { return getToken(ApexParser.LAST_N_DAYS_N, 0); }
		public TerminalNode NEXT_N_DAYS_N() { return getToken(ApexParser.NEXT_N_DAYS_N, 0); }
		public TerminalNode NEXT_N_WEEKS_N() { return getToken(ApexParser.NEXT_N_WEEKS_N, 0); }
		public TerminalNode LAST_N_WEEKS_N() { return getToken(ApexParser.LAST_N_WEEKS_N, 0); }
		public TerminalNode NEXT_N_MONTHS_N() { return getToken(ApexParser.NEXT_N_MONTHS_N, 0); }
		public TerminalNode LAST_N_MONTHS_N() { return getToken(ApexParser.LAST_N_MONTHS_N, 0); }
		public TerminalNode THIS_QUARTER() { return getToken(ApexParser.THIS_QUARTER, 0); }
		public TerminalNode LAST_QUARTER() { return getToken(ApexParser.LAST_QUARTER, 0); }
		public TerminalNode NEXT_QUARTER() { return getToken(ApexParser.NEXT_QUARTER, 0); }
		public TerminalNode NEXT_N_QUARTERS_N() { return getToken(ApexParser.NEXT_N_QUARTERS_N, 0); }
		public TerminalNode LAST_N_QUARTERS_N() { return getToken(ApexParser.LAST_N_QUARTERS_N, 0); }
		public TerminalNode THIS_YEAR() { return getToken(ApexParser.THIS_YEAR, 0); }
		public TerminalNode LAST_YEAR() { return getToken(ApexParser.LAST_YEAR, 0); }
		public TerminalNode NEXT_YEAR() { return getToken(ApexParser.NEXT_YEAR, 0); }
		public TerminalNode NEXT_N_YEARS_N() { return getToken(ApexParser.NEXT_N_YEARS_N, 0); }
		public TerminalNode LAST_N_YEARS_N() { return getToken(ApexParser.LAST_N_YEARS_N, 0); }
		public TerminalNode THIS_FISCAL_QUARTER() { return getToken(ApexParser.THIS_FISCAL_QUARTER, 0); }
		public TerminalNode LAST_FISCAL_QUARTER() { return getToken(ApexParser.LAST_FISCAL_QUARTER, 0); }
		public TerminalNode NEXT_FISCAL_QUARTER() { return getToken(ApexParser.NEXT_FISCAL_QUARTER, 0); }
		public TerminalNode NEXT_N_FISCAL_QUARTERS_N() { return getToken(ApexParser.NEXT_N_FISCAL_QUARTERS_N, 0); }
		public TerminalNode LAST_N_FISCAL_QUARTERS_N() { return getToken(ApexParser.LAST_N_FISCAL_QUARTERS_N, 0); }
		public TerminalNode THIS_FISCAL_YEAR() { return getToken(ApexParser.THIS_FISCAL_YEAR, 0); }
		public TerminalNode LAST_FISCAL_YEAR() { return getToken(ApexParser.LAST_FISCAL_YEAR, 0); }
		public TerminalNode NEXT_FISCAL_YEAR() { return getToken(ApexParser.NEXT_FISCAL_YEAR, 0); }
		public TerminalNode NEXT_N_FISCAL_YEARS_N() { return getToken(ApexParser.NEXT_N_FISCAL_YEARS_N, 0); }
		public TerminalNode LAST_N_FISCAL_YEARS_N() { return getToken(ApexParser.LAST_N_FISCAL_YEARS_N, 0); }
		public TerminalNode FIND() { return getToken(ApexParser.FIND, 0); }
		public TerminalNode EMAIL() { return getToken(ApexParser.EMAIL, 0); }
		public TerminalNode NAME() { return getToken(ApexParser.NAME, 0); }
		public TerminalNode PHONE() { return getToken(ApexParser.PHONE, 0); }
		public TerminalNode SIDEBAR() { return getToken(ApexParser.SIDEBAR, 0); }
		public TerminalNode FIELDS() { return getToken(ApexParser.FIELDS, 0); }
		public TerminalNode METADATA() { return getToken(ApexParser.METADATA, 0); }
		public TerminalNode PRICEBOOKID() { return getToken(ApexParser.PRICEBOOKID, 0); }
		public TerminalNode NETWORK() { return getToken(ApexParser.NETWORK, 0); }
		public TerminalNode SNIPPET() { return getToken(ApexParser.SNIPPET, 0); }
		public TerminalNode TARGET_LENGTH() { return getToken(ApexParser.TARGET_LENGTH, 0); }
		public TerminalNode DIVISION() { return getToken(ApexParser.DIVISION, 0); }
		public TerminalNode RETURNING() { return getToken(ApexParser.RETURNING, 0); }
		public TerminalNode LISTVIEW() { return getToken(ApexParser.LISTVIEW, 0); }
		public AnyIdContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_anyId; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).enterAnyId(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof ApexParserListener ) ((ApexParserListener)listener).exitAnyId(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof ApexParserVisitor ) return ((ApexParserVisitor<? extends T>)visitor).visitAnyId(this);
			else return visitor.visitChildren(this);
		}
	}

	public final AnyIdContext anyId() throws RecognitionException {
		AnyIdContext _localctx = new AnyIdContext(_ctx, getState());
		enterRule(_localctx, 278, RULE_anyId);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1779);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ABSTRACT) | (1L << AFTER) | (1L << BEFORE) | (1L << BREAK) | (1L << CATCH) | (1L << CLASS) | (1L << CONTINUE) | (1L << DELETE) | (1L << DO) | (1L << ELSE) | (1L << ENUM) | (1L << EXTENDS) | (1L << FINAL) | (1L << FINALLY) | (1L << FOR) | (1L << GET) | (1L << GLOBAL) | (1L << IF) | (1L << IMPLEMENTS) | (1L << INHERITED) | (1L << INSERT) | (1L << INSTANCEOF) | (1L << INTERFACE) | (1L << MERGE) | (1L << NEW) | (1L << NULL) | (1L << ON) | (1L << OVERRIDE) | (1L << PRIVATE) | (1L << PROTECTED) | (1L << PUBLIC) | (1L << RETURN) | (1L << SET) | (1L << SHARING) | (1L << STATIC) | (1L << SUPER) | (1L << SWITCH) | (1L << TESTMETHOD) | (1L << THIS) | (1L << THROW) | (1L << TRANSIENT) | (1L << TRIGGER) | (1L << TRY) | (1L << UNDELETE) | (1L << UPDATE) | (1L << UPSERT) | (1L << VIRTUAL) | (1L << WEBSERVICE) | (1L << WHEN) | (1L << WHILE) | (1L << WITH) | (1L << WITHOUT) | (1L << LIST) | (1L << MAP) | (1L << SELECT) | (1L << COUNT) | (1L << FROM) | (1L << AS) | (1L << USING) | (1L << SCOPE) | (1L << WHERE))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (ORDER - 64)) | (1L << (BY - 64)) | (1L << (LIMIT - 64)) | (1L << (SOQLAND - 64)) | (1L << (SOQLOR - 64)) | (1L << (NOT - 64)) | (1L << (AVG - 64)) | (1L << (COUNT_DISTINCT - 64)) | (1L << (MIN - 64)) | (1L << (MAX - 64)) | (1L << (SUM - 64)) | (1L << (TYPEOF - 64)) | (1L << (END - 64)) | (1L << (THEN - 64)) | (1L << (LIKE - 64)) | (1L << (IN - 64)) | (1L << (INCLUDES - 64)) | (1L << (EXCLUDES - 64)) | (1L << (ASC - 64)) | (1L << (DESC - 64)) | (1L << (NULLS - 64)) | (1L << (FIRST - 64)) | (1L << (LAST - 64)) | (1L << (GROUP - 64)) | (1L << (ALL - 64)) | (1L << (ROWS - 64)) | (1L << (VIEW - 64)) | (1L << (HAVING - 64)) | (1L << (ROLLUP - 64)) | (1L << (TOLABEL - 64)) | (1L << (OFFSET - 64)) | (1L << (DATA - 64)) | (1L << (CATEGORY - 64)) | (1L << (AT - 64)) | (1L << (ABOVE - 64)) | (1L << (BELOW - 64)) | (1L << (ABOVE_OR_BELOW - 64)) | (1L << (SECURITY_ENFORCED - 64)) | (1L << (REFERENCE - 64)) | (1L << (CUBE - 64)) | (1L << (FORMAT - 64)) | (1L << (TRACKING - 64)) | (1L << (VIEWSTAT - 64)) | (1L << (CUSTOM - 64)) | (1L << (STANDARD - 64)) | (1L << (CALENDAR_MONTH - 64)) | (1L << (CALENDAR_QUARTER - 64)) | (1L << (CALENDAR_YEAR - 64)) | (1L << (DAY_IN_MONTH - 64)) | (1L << (DAY_IN_WEEK - 64)) | (1L << (DAY_IN_YEAR - 64)) | (1L << (DAY_ONLY - 64)) | (1L << (FISCAL_MONTH - 64)) | (1L << (FISCAL_QUARTER - 64)) | (1L << (FISCAL_YEAR - 64)) | (1L << (HOUR_IN_DAY - 64)) | (1L << (WEEK_IN_MONTH - 64)) | (1L << (WEEK_IN_YEAR - 64)) | (1L << (CONVERT_TIMEZONE - 64)) | (1L << (YESTERDAY - 64)) | (1L << (TODAY - 64)) | (1L << (TOMORROW - 64)) | (1L << (LAST_WEEK - 64)) | (1L << (THIS_WEEK - 64)))) != 0) || ((((_la - 128)) & ~0x3f) == 0 && ((1L << (_la - 128)) & ((1L << (NEXT_WEEK - 128)) | (1L << (LAST_MONTH - 128)) | (1L << (THIS_MONTH - 128)) | (1L << (NEXT_MONTH - 128)) | (1L << (LAST_90_DAYS - 128)) | (1L << (NEXT_90_DAYS - 128)) | (1L << (LAST_N_DAYS_N - 128)) | (1L << (NEXT_N_DAYS_N - 128)) | (1L << (NEXT_N_WEEKS_N - 128)) | (1L << (LAST_N_WEEKS_N - 128)) | (1L << (NEXT_N_MONTHS_N - 128)) | (1L << (LAST_N_MONTHS_N - 128)) | (1L << (THIS_QUARTER - 128)) | (1L << (LAST_QUARTER - 128)) | (1L << (NEXT_QUARTER - 128)) | (1L << (NEXT_N_QUARTERS_N - 128)) | (1L << (LAST_N_QUARTERS_N - 128)) | (1L << (THIS_YEAR - 128)) | (1L << (LAST_YEAR - 128)) | (1L << (NEXT_YEAR - 128)) | (1L << (NEXT_N_YEARS_N - 128)) | (1L << (LAST_N_YEARS_N - 128)) | (1L << (THIS_FISCAL_QUARTER - 128)) | (1L << (LAST_FISCAL_QUARTER - 128)) | (1L << (NEXT_FISCAL_QUARTER - 128)) | (1L << (NEXT_N_FISCAL_QUARTERS_N - 128)) | (1L << (LAST_N_FISCAL_QUARTERS_N - 128)) | (1L << (THIS_FISCAL_YEAR - 128)) | (1L << (LAST_FISCAL_YEAR - 128)) | (1L << (NEXT_FISCAL_YEAR - 128)) | (1L << (NEXT_N_FISCAL_YEARS_N - 128)) | (1L << (LAST_N_FISCAL_YEARS_N - 128)) | (1L << (FIND - 128)) | (1L << (EMAIL - 128)) | (1L << (NAME - 128)) | (1L << (PHONE - 128)) | (1L << (SIDEBAR - 128)) | (1L << (FIELDS - 128)) | (1L << (METADATA - 128)) | (1L << (PRICEBOOKID - 128)) | (1L << (NETWORK - 128)) | (1L << (SNIPPET - 128)) | (1L << (TARGET_LENGTH - 128)) | (1L << (DIVISION - 128)) | (1L << (RETURNING - 128)) | (1L << (LISTVIEW - 128)))) != 0) || _la==Identifier) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 72:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 13);
		case 1:
			return precpred(_ctx, 12);
		case 2:
			return precpred(_ctx, 11);
		case 3:
			return precpred(_ctx, 10);
		case 4:
			return precpred(_ctx, 8);
		case 5:
			return precpred(_ctx, 7);
		case 6:
			return precpred(_ctx, 6);
		case 7:
			return precpred(_ctx, 5);
		case 8:
			return precpred(_ctx, 4);
		case 9:
			return precpred(_ctx, 3);
		case 10:
			return precpred(_ctx, 2);
		case 11:
			return precpred(_ctx, 1);
		case 12:
			return precpred(_ctx, 22);
		case 13:
			return precpred(_ctx, 21);
		case 14:
			return precpred(_ctx, 16);
		case 15:
			return precpred(_ctx, 9);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\u00ec\u06f8\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\4U\tU\4V\tV\4W\tW\4X\tX\4Y\tY\4Z\tZ\4[\t[\4\\\t\\\4]\t]\4^\t^\4_\t_\4"+
		"`\t`\4a\ta\4b\tb\4c\tc\4d\td\4e\te\4f\tf\4g\tg\4h\th\4i\ti\4j\tj\4k\t"+
		"k\4l\tl\4m\tm\4n\tn\4o\to\4p\tp\4q\tq\4r\tr\4s\ts\4t\tt\4u\tu\4v\tv\4"+
		"w\tw\4x\tx\4y\ty\4z\tz\4{\t{\4|\t|\4}\t}\4~\t~\4\177\t\177\4\u0080\t\u0080"+
		"\4\u0081\t\u0081\4\u0082\t\u0082\4\u0083\t\u0083\4\u0084\t\u0084\4\u0085"+
		"\t\u0085\4\u0086\t\u0086\4\u0087\t\u0087\4\u0088\t\u0088\4\u0089\t\u0089"+
		"\4\u008a\t\u008a\4\u008b\t\u008b\4\u008c\t\u008c\4\u008d\t\u008d\3\2\3"+
		"\2\3\2\3\2\3\2\3\2\3\2\3\2\7\2\u0123\n\2\f\2\16\2\u0126\13\2\3\2\3\2\3"+
		"\2\3\2\3\3\3\3\3\3\3\4\3\4\3\4\3\5\7\5\u0133\n\5\f\5\16\5\u0136\13\5\3"+
		"\5\3\5\7\5\u013a\n\5\f\5\16\5\u013d\13\5\3\5\3\5\7\5\u0141\n\5\f\5\16"+
		"\5\u0144\13\5\3\5\5\5\u0147\n\5\3\6\3\6\3\6\3\6\5\6\u014d\n\6\3\6\3\6"+
		"\5\6\u0151\n\6\3\6\3\6\3\7\3\7\3\7\3\7\5\7\u0159\n\7\3\7\3\7\3\b\3\b\3"+
		"\b\7\b\u0160\n\b\f\b\16\b\u0163\13\b\3\t\3\t\3\t\3\t\5\t\u0169\n\t\3\t"+
		"\3\t\3\n\3\n\3\n\7\n\u0170\n\n\f\n\16\n\u0173\13\n\3\13\3\13\7\13\u0177"+
		"\n\13\f\13\16\13\u017a\13\13\3\13\3\13\3\f\3\f\7\f\u0180\n\f\f\f\16\f"+
		"\u0183\13\f\3\f\3\f\3\r\3\r\5\r\u0189\n\r\3\r\3\r\7\r\u018d\n\r\f\r\16"+
		"\r\u0190\13\r\3\r\5\r\u0193\n\r\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16"+
		"\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\5\16\u01a8\n\16"+
		"\3\17\3\17\3\17\3\17\3\17\3\17\3\17\5\17\u01b1\n\17\3\20\3\20\5\20\u01b5"+
		"\n\20\3\20\3\20\3\20\3\20\5\20\u01bb\n\20\3\21\3\21\3\21\3\21\3\22\3\22"+
		"\3\22\3\22\3\23\3\23\3\23\3\23\7\23\u01c9\n\23\f\23\16\23\u01cc\13\23"+
		"\3\23\3\23\3\24\7\24\u01d1\n\24\f\24\16\24\u01d4\13\24\3\24\3\24\5\24"+
		"\u01d8\n\24\3\24\3\24\3\24\3\24\3\25\3\25\3\25\7\25\u01e1\n\25\f\25\16"+
		"\25\u01e4\13\25\3\26\3\26\3\26\5\26\u01e9\n\26\3\27\3\27\3\27\3\27\7\27"+
		"\u01ef\n\27\f\27\16\27\u01f2\13\27\3\27\5\27\u01f5\n\27\5\27\u01f7\n\27"+
		"\3\27\3\27\3\30\3\30\3\30\7\30\u01fe\n\30\f\30\16\30\u0201\13\30\3\30"+
		"\3\30\3\31\3\31\7\31\u0207\n\31\f\31\16\31\u020a\13\31\3\32\3\32\5\32"+
		"\u020e\n\32\3\32\3\32\5\32\u0212\n\32\3\32\3\32\5\32\u0216\n\32\3\32\3"+
		"\32\5\32\u021a\n\32\5\32\u021c\n\32\3\33\3\33\3\33\3\33\3\34\3\34\5\34"+
		"\u0224\n\34\3\34\3\34\3\35\3\35\3\35\7\35\u022b\n\35\f\35\16\35\u022e"+
		"\13\35\3\36\7\36\u0231\n\36\f\36\16\36\u0234\13\36\3\36\3\36\3\36\3\37"+
		"\3\37\3\37\7\37\u023c\n\37\f\37\16\37\u023f\13\37\3 \3 \3!\3!\3!\3!\3"+
		"!\5!\u0248\n!\3!\5!\u024b\n!\3\"\3\"\5\"\u024f\n\"\3\"\7\"\u0252\n\"\f"+
		"\"\16\"\u0255\13\"\3#\3#\3#\3#\3$\3$\3$\5$\u025e\n$\3%\3%\3%\3%\7%\u0264"+
		"\n%\f%\16%\u0267\13%\5%\u0269\n%\3%\5%\u026c\n%\3%\3%\3&\3&\7&\u0272\n"+
		"&\f&\16&\u0275\13&\3&\3&\3\'\3\'\3\'\3(\7(\u027d\n(\f(\16(\u0280\13(\3"+
		"(\3(\3(\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\5"+
		")\u0299\n)\3*\3*\3*\3*\3*\5*\u02a0\n*\3+\3+\3+\3+\3+\6+\u02a7\n+\r+\16"+
		"+\u02a8\3+\3+\3,\3,\3,\3,\3-\3-\3-\3-\7-\u02b5\n-\f-\16-\u02b8\13-\3-"+
		"\3-\3-\5-\u02bd\n-\3.\5.\u02c0\n.\3.\3.\3.\3.\3.\5.\u02c7\n.\3/\3/\3/"+
		"\3/\3/\3/\3\60\3\60\3\60\3\60\3\61\3\61\3\61\3\61\3\61\3\61\3\62\3\62"+
		"\3\62\6\62\u02dc\n\62\r\62\16\62\u02dd\3\62\5\62\u02e1\n\62\3\62\5\62"+
		"\u02e4\n\62\3\63\3\63\5\63\u02e8\n\63\3\63\3\63\3\64\3\64\3\64\3\64\3"+
		"\65\3\65\3\65\3\66\3\66\3\66\3\67\3\67\3\67\3\67\38\38\38\38\39\39\39"+
		"\39\3:\3:\3:\3:\3;\3;\3;\5;\u0309\n;\3;\3;\3<\3<\3<\3<\3<\3=\3=\3=\5="+
		"\u0315\n=\3=\3=\3=\3>\3>\3>\3?\7?\u031e\n?\f?\16?\u0321\13?\3?\3?\5?\u0325"+
		"\n?\3@\3@\3@\5@\u032a\n@\3A\3A\3A\5A\u032f\nA\3B\3B\3B\7B\u0334\nB\fB"+
		"\16B\u0337\13B\3B\3B\3B\3B\3B\3C\3C\3C\3D\3D\5D\u0343\nD\3D\3D\5D\u0347"+
		"\nD\3D\3D\5D\u034b\nD\5D\u034d\nD\3E\3E\5E\u0351\nE\3F\3F\3F\3F\3F\3G"+
		"\3G\3H\3H\3H\3H\3I\3I\3I\7I\u0361\nI\fI\16I\u0364\13I\3J\3J\3J\3J\3J\3"+
		"J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\5J\u0378\nJ\3J\3J\3J\3J\3J\3J\3"+
		"J\3J\3J\3J\3J\3J\3J\3J\5J\u0388\nJ\3J\3J\3J\3J\5J\u038e\nJ\3J\3J\3J\3"+
		"J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\3"+
		"J\3J\3J\3J\3J\3J\5J\u03b0\nJ\3J\3J\3J\3J\3J\3J\3J\3J\3J\3J\7J\u03bc\n"+
		"J\fJ\16J\u03bf\13J\3K\3K\3K\3K\3K\3K\3K\3K\3K\3K\5K\u03cb\nK\3L\3L\3L"+
		"\5L\u03d0\nL\3L\3L\3L\3L\3L\5L\u03d7\nL\3L\3L\3L\3L\5L\u03dd\nL\3L\5L"+
		"\u03e0\nL\3M\3M\3M\5M\u03e5\nM\3M\3M\3N\3N\3N\3N\3N\3N\5N\u03ef\nN\3O"+
		"\3O\3O\7O\u03f4\nO\fO\16O\u03f7\13O\3P\3P\3P\3P\3P\5P\u03fe\nP\3Q\3Q\3"+
		"Q\3R\3R\3S\3S\3S\3S\3S\3S\3S\5S\u040c\nS\5S\u040e\nS\3T\3T\3T\3T\7T\u0414"+
		"\nT\fT\16T\u0417\13T\3T\3T\3U\3U\3U\3U\3V\3V\3V\3V\7V\u0423\nV\fV\16V"+
		"\u0426\13V\3V\3V\3W\3W\5W\u042c\nW\3W\3W\3X\3X\3X\3X\3Y\3Y\3Y\3Y\3Y\5"+
		"Y\u0439\nY\3Y\5Y\u043c\nY\3Y\5Y\u043f\nY\3Y\5Y\u0442\nY\3Y\5Y\u0445\n"+
		"Y\3Y\5Y\u0448\nY\3Y\5Y\u044b\nY\3Y\5Y\u044e\nY\3Y\3Y\3Z\3Z\3Z\3Z\3Z\5"+
		"Z\u0457\nZ\3Z\5Z\u045a\nZ\3Z\5Z\u045d\nZ\3Z\3Z\3[\3[\3[\7[\u0464\n[\f"+
		"[\16[\u0467\13[\3\\\3\\\5\\\u046b\n\\\3\\\3\\\5\\\u046f\n\\\3\\\3\\\3"+
		"\\\3\\\5\\\u0475\n\\\3\\\5\\\u0478\n\\\3]\3]\3]\7]\u047d\n]\f]\16]\u0480"+
		"\13]\3^\3^\5^\u0484\n^\3^\3^\3^\5^\u0489\n^\7^\u048b\n^\f^\16^\u048e\13"+
		"^\3_\3_\3_\7_\u0493\n_\f_\16_\u0496\13_\3`\3`\5`\u049a\n`\3`\3`\5`\u049e"+
		"\n`\5`\u04a0\n`\3a\3a\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b"+
		"\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b"+
		"\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b"+
		"\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b"+
		"\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b\3b"+
		"\3b\3b\3b\3b\3b\5b\u0515\nb\3c\3c\3c\3c\3c\3c\5c\u051d\nc\3d\3d\3d\6d"+
		"\u0522\nd\rd\16d\u0523\3d\5d\u0527\nd\3d\3d\3e\3e\3e\3e\3e\3f\3f\3f\3"+
		"g\3g\3g\7g\u0536\ng\fg\16g\u0539\13g\3h\3h\3h\3h\3i\3i\3i\3j\3j\3j\7j"+
		"\u0545\nj\fj\16j\u0548\13j\3j\3j\3j\7j\u054d\nj\fj\16j\u0550\13j\3j\3"+
		"j\5j\u0554\nj\3k\3k\3k\3k\3k\5k\u055b\nk\3l\3l\3l\3l\3l\3l\3l\3l\5l\u0565"+
		"\nl\3m\3m\3m\3m\3m\3m\3m\3m\3m\3m\3m\3m\3m\3m\3m\5m\u0576\nm\3n\3n\3n"+
		"\3n\3n\3n\3n\3n\3n\3n\3n\3n\3n\3n\3n\3n\5n\u0588\nn\3o\3o\3o\3o\7o\u058e"+
		"\no\fo\16o\u0591\13o\3o\3o\3p\3p\3p\3q\3q\3q\3q\3q\3q\3q\3q\5q\u05a0\n"+
		"q\3r\3r\3r\7r\u05a5\nr\fr\16r\u05a8\13r\3s\3s\3s\3s\3t\3t\3t\3t\3t\7t"+
		"\u05b3\nt\ft\16t\u05b6\13t\3t\3t\5t\u05ba\nt\3u\3u\3v\3v\3v\3v\3v\5v\u05c3"+
		"\nv\3v\3v\3v\3v\3v\3v\3v\7v\u05cc\nv\fv\16v\u05cf\13v\3v\3v\3v\3v\3v\3"+
		"v\3v\3v\3v\7v\u05da\nv\fv\16v\u05dd\13v\3v\3v\5v\u05e1\nv\3w\3w\3w\3w"+
		"\3x\3x\3x\7x\u05ea\nx\fx\16x\u05ed\13x\3y\3y\5y\u05f1\ny\3y\3y\5y\u05f5"+
		"\ny\3y\3y\5y\u05f9\ny\3y\3y\5y\u05fd\ny\5y\u05ff\ny\3z\3z\3z\3z\5z\u0605"+
		"\nz\3{\3{\3{\3{\5{\u060b\n{\3|\3|\3|\3}\3}\7}\u0612\n}\f}\16}\u0615\13"+
		"}\3~\3~\3~\3\177\3\177\3\177\3\177\3\177\3\177\3\177\3\177\3\177\3\177"+
		"\3\177\3\177\3\177\3\177\3\177\3\177\3\177\3\177\3\177\3\177\3\177\3\177"+
		"\3\177\3\177\3\177\3\177\3\177\3\177\3\177\3\177\3\177\3\177\3\177\3\177"+
		"\3\177\3\177\3\177\3\177\3\177\3\177\3\177\3\177\3\177\3\177\3\177\3\177"+
		"\3\177\3\177\3\177\3\177\3\177\3\177\3\177\3\177\3\177\3\177\3\177\3\177"+
		"\3\177\3\177\3\177\3\177\3\177\3\177\3\177\5\177\u065b\n\177\3\u0080\5"+
		"\u0080\u065e\n\u0080\3\u0080\3\u0080\3\u0081\3\u0081\3\u0082\3\u0082\3"+
		"\u0082\3\u0082\3\u0082\3\u0082\3\u0082\3\u0082\3\u0082\3\u0082\5\u0082"+
		"\u066e\n\u0082\3\u0083\3\u0083\5\u0083\u0672\n\u0083\3\u0083\3\u0083\5"+
		"\u0083\u0676\n\u0083\3\u0083\3\u0083\3\u0083\3\u0083\5\u0083\u067c\n\u0083"+
		"\3\u0083\3\u0083\3\u0083\3\u0083\5\u0083\u0682\n\u0083\3\u0083\3\u0083"+
		"\3\u0083\3\u0083\3\u0083\3\u0083\3\u0083\5\u0083\u068b\n\u0083\5\u0083"+
		"\u068d\n\u0083\3\u0083\3\u0083\3\u0083\3\u0083\3\u0083\3\u0083\3\u0083"+
		"\5\u0083\u0696\n\u0083\3\u0083\3\u0083\3\u0083\3\u0083\5\u0083\u069c\n"+
		"\u0083\3\u0083\3\u0083\3\u0083\3\u0083\5\u0083\u06a2\n\u0083\3\u0083\3"+
		"\u0083\3\u0083\3\u0083\5\u0083\u06a8\n\u0083\3\u0083\5\u0083\u06ab\n\u0083"+
		"\3\u0083\3\u0083\5\u0083\u06af\n\u0083\3\u0084\3\u0084\3\u0084\3\u0085"+
		"\3\u0085\3\u0085\7\u0085\u06b7\n\u0085\f\u0085\16\u0085\u06ba\13\u0085"+
		"\3\u0086\3\u0086\3\u0086\3\u0086\3\u0086\5\u0086\u06c1\n\u0086\3\u0086"+
		"\3\u0086\3\u0086\3\u0086\5\u0086\u06c7\n\u0086\3\u0086\3\u0086\3\u0086"+
		"\5\u0086\u06cc\n\u0086\3\u0086\5\u0086\u06cf\n\u0086\3\u0086\5\u0086\u06d2"+
		"\n\u0086\3\u0086\3\u0086\5\u0086\u06d6\n\u0086\3\u0087\3\u0087\3\u0087"+
		"\7\u0087\u06db\n\u0087\f\u0087\16\u0087\u06de\13\u0087\3\u0088\3\u0088"+
		"\3\u0088\5\u0088\u06e3\n\u0088\3\u0089\3\u0089\3\u008a\3\u008a\3\u008a"+
		"\5\u008a\u06ea\n\u008a\3\u008b\3\u008b\3\u008b\7\u008b\u06ef\n\u008b\f"+
		"\u008b\16\u008b\u06f2\13\u008b\3\u008c\3\u008c\3\u008d\3\u008d\3\u008d"+
		"\2\3\u0092\u008e\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62"+
		"\64\668:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\u0084\u0086\u0088"+
		"\u008a\u008c\u008e\u0090\u0092\u0094\u0096\u0098\u009a\u009c\u009e\u00a0"+
		"\u00a2\u00a4\u00a6\u00a8\u00aa\u00ac\u00ae\u00b0\u00b2\u00b4\u00b6\u00b8"+
		"\u00ba\u00bc\u00be\u00c0\u00c2\u00c4\u00c6\u00c8\u00ca\u00cc\u00ce\u00d0"+
		"\u00d2\u00d4\u00d6\u00d8\u00da\u00dc\u00de\u00e0\u00e2\u00e4\u00e6\u00e8"+
		"\u00ea\u00ec\u00ee\u00f0\u00f2\u00f4\u00f6\u00f8\u00fa\u00fc\u00fe\u0100"+
		"\u0102\u0104\u0106\u0108\u010a\u010c\u010e\u0110\u0112\u0114\u0116\u0118"+
		"\2\27\3\2\4\5\5\2\n\n\27\27/\60\4\2\34\34\u00b3\u00b7\3\2\u00d1\u00d4"+
		"\3\2\u00c5\u00c6\4\2\u00d5\u00d6\u00da\u00da\3\2\u00d3\u00d4\3\2\u00c3"+
		"\u00c4\3\2\u00ca\u00ce\4\2\u00c2\u00c2\u00dc\u00e6\4\2\u00c1\u00c1\u00c7"+
		"\u00c7\3\2\u00d1\u00d2\4\2ZZmn\3\2cf\3\2TU\3\2WX\5\2\60\60\\\\hh\4\2Z"+
		"Z\u00a5\u00a8\3\2kl\16\2\4\5\22\22\26\26\30\30$%((,-\65\65\678;\u00a1"+
		"\u00a4\u00b1\u00e8\u00e8\7\2\3\"$\62\64\u00a1\u00a4\u00b1\u00e8\u00e8"+
		"\2\u07b6\2\u011a\3\2\2\2\4\u012b\3\2\2\2\6\u012e\3\2\2\2\b\u0146\3\2\2"+
		"\2\n\u0148\3\2\2\2\f\u0154\3\2\2\2\16\u015c\3\2\2\2\20\u0164\3\2\2\2\22"+
		"\u016c\3\2\2\2\24\u0174\3\2\2\2\26\u017d\3\2\2\2\30\u0192\3\2\2\2\32\u01a7"+
		"\3\2\2\2\34\u01b0\3\2\2\2\36\u01b4\3\2\2\2 \u01bc\3\2\2\2\"\u01c0\3\2"+
		"\2\2$\u01c4\3\2\2\2&\u01d2\3\2\2\2(\u01dd\3\2\2\2*\u01e5\3\2\2\2,\u01ea"+
		"\3\2\2\2.\u01fa\3\2\2\2\60\u0208\3\2\2\2\62\u021b\3\2\2\2\64\u021d\3\2"+
		"\2\2\66\u0221\3\2\2\28\u0227\3\2\2\2:\u0232\3\2\2\2<\u0238\3\2\2\2>\u0240"+
		"\3\2\2\2@\u0242\3\2\2\2B\u024c\3\2\2\2D\u0256\3\2\2\2F\u025d\3\2\2\2H"+
		"\u025f\3\2\2\2J\u026f\3\2\2\2L\u0278\3\2\2\2N\u027e\3\2\2\2P\u0298\3\2"+
		"\2\2R\u029a\3\2\2\2T\u02a1\3\2\2\2V\u02ac\3\2\2\2X\u02bc\3\2\2\2Z\u02c6"+
		"\3\2\2\2\\\u02c8\3\2\2\2^\u02ce\3\2\2\2`\u02d2\3\2\2\2b\u02d8\3\2\2\2"+
		"d\u02e5\3\2\2\2f\u02eb\3\2\2\2h\u02ef\3\2\2\2j\u02f2\3\2\2\2l\u02f5\3"+
		"\2\2\2n\u02f9\3\2\2\2p\u02fd\3\2\2\2r\u0301\3\2\2\2t\u0305\3\2\2\2v\u030c"+
		"\3\2\2\2x\u0311\3\2\2\2z\u0319\3\2\2\2|\u031f\3\2\2\2~\u0326\3\2\2\2\u0080"+
		"\u032b\3\2\2\2\u0082\u0330\3\2\2\2\u0084\u033d\3\2\2\2\u0086\u034c\3\2"+
		"\2\2\u0088\u0350\3\2\2\2\u008a\u0352\3\2\2\2\u008c\u0357\3\2\2\2\u008e"+
		"\u0359\3\2\2\2\u0090\u035d\3\2\2\2\u0092\u0377\3\2\2\2\u0094\u03ca\3\2"+
		"\2\2\u0096\u03df\3\2\2\2\u0098\u03e1\3\2\2\2\u009a\u03e8\3\2\2\2\u009c"+
		"\u03f0\3\2\2\2\u009e\u03f8\3\2\2\2\u00a0\u03ff\3\2\2\2\u00a2\u0402\3\2"+
		"\2\2\u00a4\u040d\3\2\2\2\u00a6\u040f\3\2\2\2\u00a8\u041a\3\2\2\2\u00aa"+
		"\u041e\3\2\2\2\u00ac\u0429\3\2\2\2\u00ae\u042f\3\2\2\2\u00b0\u0433\3\2"+
		"\2\2\u00b2\u0451\3\2\2\2\u00b4\u0460\3\2\2\2\u00b6\u0477\3\2\2\2\u00b8"+
		"\u0479\3\2\2\2\u00ba\u0481\3\2\2\2\u00bc\u048f\3\2\2\2\u00be\u049f\3\2"+
		"\2\2\u00c0\u04a1\3\2\2\2\u00c2\u0514\3\2\2\2\u00c4\u051c\3\2\2\2\u00c6"+
		"\u051e\3\2\2\2\u00c8\u052a\3\2\2\2\u00ca\u052f\3\2\2\2\u00cc\u0532\3\2"+
		"\2\2\u00ce\u053a\3\2\2\2\u00d0\u053e\3\2\2\2\u00d2\u0553\3\2\2\2\u00d4"+
		"\u055a\3\2\2\2\u00d6\u0564\3\2\2\2\u00d8\u0575\3\2\2\2\u00da\u0587\3\2"+
		"\2\2\u00dc\u0589\3\2\2\2\u00de\u0594\3\2\2\2\u00e0\u059f\3\2\2\2\u00e2"+
		"\u05a1\3\2\2\2\u00e4\u05a9\3\2\2\2\u00e6\u05b9\3\2\2\2\u00e8\u05bb\3\2"+
		"\2\2\u00ea\u05e0\3\2\2\2\u00ec\u05e2\3\2\2\2\u00ee\u05e6\3\2\2\2\u00f0"+
		"\u05fe\3\2\2\2\u00f2\u0604\3\2\2\2\u00f4\u060a\3\2\2\2\u00f6\u060c\3\2"+
		"\2\2\u00f8\u0613\3\2\2\2\u00fa\u0616\3\2\2\2\u00fc\u065a\3\2\2\2\u00fe"+
		"\u065d\3\2\2\2\u0100\u0661\3\2\2\2\u0102\u066d\3\2\2\2\u0104\u0671\3\2"+
		"\2\2\u0106\u06b0\3\2\2\2\u0108\u06b3\3\2\2\2\u010a\u06bb\3\2\2\2\u010c"+
		"\u06d7\3\2\2\2\u010e\u06df\3\2\2\2\u0110\u06e4\3\2\2\2\u0112\u06e6\3\2"+
		"\2\2\u0114\u06eb\3\2\2\2\u0116\u06f3\3\2\2\2\u0118\u06f5\3\2\2\2\u011a"+
		"\u011b\7-\2\2\u011b\u011c\5\u0116\u008c\2\u011c\u011d\7\35\2\2\u011d\u011e"+
		"\5\u0116\u008c\2\u011e\u011f\7\u00b9\2\2\u011f\u0124\5\4\3\2\u0120\u0121"+
		"\7\u00c0\2\2\u0121\u0123\5\4\3\2\u0122\u0120\3\2\2\2\u0123\u0126\3\2\2"+
		"\2\u0124\u0122\3\2\2\2\u0124\u0125\3\2\2\2\u0125\u0127\3\2\2\2\u0126\u0124"+
		"\3\2\2\2\u0127\u0128\7\u00ba\2\2\u0128\u0129\5J&\2\u0129\u012a\7\2\2\3"+
		"\u012a\3\3\2\2\2\u012b\u012c\t\2\2\2\u012c\u012d\t\3\2\2\u012d\5\3\2\2"+
		"\2\u012e\u012f\5\b\5\2\u012f\u0130\7\2\2\3\u0130\7\3\2\2\2\u0131\u0133"+
		"\5\32\16\2\u0132\u0131\3\2\2\2\u0133\u0136\3\2\2\2\u0134\u0132\3\2\2\2"+
		"\u0134\u0135\3\2\2\2\u0135\u0137\3\2\2\2\u0136\u0134\3\2\2\2\u0137\u0147"+
		"\5\n\6\2\u0138\u013a\5\32\16\2\u0139\u0138\3\2\2\2\u013a\u013d\3\2\2\2"+
		"\u013b\u0139\3\2\2\2\u013b\u013c\3\2\2\2\u013c\u013e\3\2\2\2\u013d\u013b"+
		"\3\2\2\2\u013e\u0147\5\f\7\2\u013f\u0141\5\32\16\2\u0140\u013f\3\2\2\2"+
		"\u0141\u0144\3\2\2\2\u0142\u0140\3\2\2\2\u0142\u0143\3\2\2\2\u0143\u0145"+
		"\3\2\2\2\u0144\u0142\3\2\2\2\u0145\u0147\5\20\t\2\u0146\u0134\3\2\2\2"+
		"\u0146\u013b\3\2\2\2\u0146\u0142\3\2\2\2\u0147\t\3\2\2\2\u0148\u0149\7"+
		"\b\2\2\u0149\u014c\5\u0116\u008c\2\u014a\u014b\7\16\2\2\u014b\u014d\5"+
		".\30\2\u014c\u014a\3\2\2\2\u014c\u014d\3\2\2\2\u014d\u0150\3\2\2\2\u014e"+
		"\u014f\7\25\2\2\u014f\u0151\5\22\n\2\u0150\u014e\3\2\2\2\u0150\u0151\3"+
		"\2\2\2\u0151\u0152\3\2\2\2\u0152\u0153\5\24\13\2\u0153\13\3\2\2\2\u0154"+
		"\u0155\7\r\2\2\u0155\u0156\5\u0116\u008c\2\u0156\u0158\7\u00bb\2\2\u0157"+
		"\u0159\5\16\b\2\u0158\u0157\3\2\2\2\u0158\u0159\3\2\2\2\u0159\u015a\3"+
		"\2\2\2\u015a\u015b\7\u00bc\2\2\u015b\r\3\2\2\2\u015c\u0161\5\u0116\u008c"+
		"\2\u015d\u015e\7\u00c0\2\2\u015e\u0160\5\u0116\u008c\2\u015f\u015d\3\2"+
		"\2\2\u0160\u0163\3\2\2\2\u0161\u015f\3\2\2\2\u0161\u0162\3\2\2\2\u0162"+
		"\17\3\2\2\2\u0163\u0161\3\2\2\2\u0164\u0165\7\31\2\2\u0165\u0168\5\u0116"+
		"\u008c\2\u0166\u0167\7\16\2\2\u0167\u0169\5\22\n\2\u0168\u0166\3\2\2\2"+
		"\u0168\u0169\3\2\2\2\u0169\u016a\3\2\2\2\u016a\u016b\5\26\f\2\u016b\21"+
		"\3\2\2\2\u016c\u0171\5.\30\2\u016d\u016e\7\u00c0\2\2\u016e\u0170\5.\30"+
		"\2\u016f\u016d\3\2\2\2\u0170\u0173\3\2\2\2\u0171\u016f\3\2\2\2\u0171\u0172"+
		"\3\2\2\2\u0172\23\3\2\2\2\u0173\u0171\3\2\2\2\u0174\u0178\7\u00bb\2\2"+
		"\u0175\u0177\5\30\r\2\u0176\u0175\3\2\2\2\u0177\u017a\3\2\2\2\u0178\u0176"+
		"\3\2\2\2\u0178\u0179\3\2\2\2\u0179\u017b\3\2\2\2\u017a\u0178\3\2\2\2\u017b"+
		"\u017c\7\u00bc\2\2\u017c\25\3\2\2\2\u017d\u0181\7\u00bb\2\2\u017e\u0180"+
		"\5&\24\2\u017f\u017e\3\2\2\2\u0180\u0183\3\2\2\2\u0181\u017f\3\2\2\2\u0181"+
		"\u0182\3\2\2\2\u0182\u0184\3\2\2\2\u0183\u0181\3\2\2\2\u0184\u0185\7\u00bc"+
		"\2\2\u0185\27\3\2\2\2\u0186\u0193\7\u00bf\2\2\u0187\u0189\7&\2\2\u0188"+
		"\u0187\3\2\2\2\u0188\u0189\3\2\2\2\u0189\u018a\3\2\2\2\u018a\u0193\5J"+
		"&\2\u018b\u018d\5\32\16\2\u018c\u018b\3\2\2\2\u018d\u0190\3\2\2\2\u018e"+
		"\u018c\3\2\2\2\u018e\u018f\3\2\2\2\u018f\u0191\3\2\2\2\u0190\u018e\3\2"+
		"\2\2\u0191\u0193\5\34\17\2\u0192\u0186\3\2\2\2\u0192\u0188\3\2\2\2\u0192"+
		"\u018e\3\2\2\2\u0193\31\3\2\2\2\u0194\u01a8\5@!\2\u0195\u01a8\7\23\2\2"+
		"\u0196\u01a8\7!\2\2\u0197\u01a8\7 \2\2\u0198\u01a8\7\37\2\2\u0199\u01a8"+
		"\7,\2\2\u019a\u01a8\7&\2\2\u019b\u01a8\7\3\2\2\u019c\u01a8\7\17\2\2\u019d"+
		"\u01a8\7\64\2\2\u019e\u01a8\7\36\2\2\u019f\u01a8\7\62\2\2\u01a0\u01a8"+
		"\7)\2\2\u01a1\u01a2\7\67\2\2\u01a2\u01a8\7%\2\2\u01a3\u01a4\78\2\2\u01a4"+
		"\u01a8\7%\2\2\u01a5\u01a6\7\26\2\2\u01a6\u01a8\7%\2\2\u01a7\u0194\3\2"+
		"\2\2\u01a7\u0195\3\2\2\2\u01a7\u0196\3\2\2\2\u01a7\u0197\3\2\2\2\u01a7"+
		"\u0198\3\2\2\2\u01a7\u0199\3\2\2\2\u01a7\u019a\3\2\2\2\u01a7\u019b\3\2"+
		"\2\2\u01a7\u019c\3\2\2\2\u01a7\u019d\3\2\2\2\u01a7\u019e\3\2\2\2\u01a7"+
		"\u019f\3\2\2\2\u01a7\u01a0\3\2\2\2\u01a7\u01a1\3\2\2\2\u01a7\u01a3\3\2"+
		"\2\2\u01a7\u01a5\3\2\2\2\u01a8\33\3\2\2\2\u01a9\u01b1\5\36\20\2\u01aa"+
		"\u01b1\5\"\22\2\u01ab\u01b1\5 \21\2\u01ac\u01b1\5\20\t\2\u01ad\u01b1\5"+
		"\n\6\2\u01ae\u01b1\5\f\7\2\u01af\u01b1\5$\23\2\u01b0\u01a9\3\2\2\2\u01b0"+
		"\u01aa\3\2\2\2\u01b0\u01ab\3\2\2\2\u01b0\u01ac\3\2\2\2\u01b0\u01ad\3\2"+
		"\2\2\u01b0\u01ae\3\2\2\2\u01b0\u01af\3\2\2\2\u01b1\35\3\2\2\2\u01b2\u01b5"+
		"\5.\30\2\u01b3\u01b5\7\63\2\2\u01b4\u01b2\3\2\2\2\u01b4\u01b3\3\2\2\2"+
		"\u01b5\u01b6\3\2\2\2\u01b6\u01b7\5\u0116\u008c\2\u01b7\u01ba\5\66\34\2"+
		"\u01b8\u01bb\5J&\2\u01b9\u01bb\7\u00bf\2\2\u01ba\u01b8\3\2\2\2\u01ba\u01b9"+
		"\3\2\2\2\u01bb\37\3\2\2\2\u01bc\u01bd\5<\37\2\u01bd\u01be\5\66\34\2\u01be"+
		"\u01bf\5J&\2\u01bf!\3\2\2\2\u01c0\u01c1\5.\30\2\u01c1\u01c2\5(\25\2\u01c2"+
		"\u01c3\7\u00bf\2\2\u01c3#\3\2\2\2\u01c4\u01c5\5.\30\2\u01c5\u01c6\5\u0116"+
		"\u008c\2\u01c6\u01ca\7\u00bb\2\2\u01c7\u01c9\5|?\2\u01c8\u01c7\3\2\2\2"+
		"\u01c9\u01cc\3\2\2\2\u01ca\u01c8\3\2\2\2\u01ca\u01cb\3\2\2\2\u01cb\u01cd"+
		"\3\2\2\2\u01cc\u01ca\3\2\2\2\u01cd\u01ce\7\u00bc\2\2\u01ce%\3\2\2\2\u01cf"+
		"\u01d1\5\32\16\2\u01d0\u01cf\3\2\2\2\u01d1\u01d4\3\2\2\2\u01d2\u01d0\3"+
		"\2\2\2\u01d2\u01d3\3\2\2\2\u01d3\u01d7\3\2\2\2\u01d4\u01d2\3\2\2\2\u01d5"+
		"\u01d8\5.\30\2\u01d6\u01d8\7\63\2\2\u01d7\u01d5\3\2\2\2\u01d7\u01d6\3"+
		"\2\2\2\u01d8\u01d9\3\2\2\2\u01d9\u01da\5\u0116\u008c\2\u01da\u01db\5\66"+
		"\34\2\u01db\u01dc\7\u00bf\2\2\u01dc\'\3\2\2\2\u01dd\u01e2\5*\26\2\u01de"+
		"\u01df\7\u00c0\2\2\u01df\u01e1\5*\26\2\u01e0\u01de\3\2\2\2\u01e1\u01e4"+
		"\3\2\2\2\u01e2\u01e0\3\2\2\2\u01e2\u01e3\3\2\2\2\u01e3)\3\2\2\2\u01e4"+
		"\u01e2\3\2\2\2\u01e5\u01e8\5\u0116\u008c\2\u01e6\u01e7\7\u00c2\2\2\u01e7"+
		"\u01e9\5\u0092J\2\u01e8\u01e6\3\2\2\2\u01e8\u01e9\3\2\2\2\u01e9+\3\2\2"+
		"\2\u01ea\u01f6\7\u00bb\2\2\u01eb\u01f0\5\u0092J\2\u01ec\u01ed\7\u00c0"+
		"\2\2\u01ed\u01ef\5\u0092J\2\u01ee\u01ec\3\2\2\2\u01ef\u01f2\3\2\2\2\u01f0"+
		"\u01ee\3\2\2\2\u01f0\u01f1\3\2\2\2\u01f1\u01f4\3\2\2\2\u01f2\u01f0\3\2"+
		"\2\2\u01f3\u01f5\7\u00c0\2\2\u01f4\u01f3\3\2\2\2\u01f4\u01f5\3\2\2\2\u01f5"+
		"\u01f7\3\2\2\2\u01f6\u01eb\3\2\2\2\u01f6\u01f7\3\2\2\2\u01f7\u01f8\3\2"+
		"\2\2\u01f8\u01f9\7\u00bc\2\2\u01f9-\3\2\2\2\u01fa\u01ff\5\62\32\2\u01fb"+
		"\u01fc\7\u00c1\2\2\u01fc\u01fe\5\62\32\2\u01fd\u01fb\3\2\2\2\u01fe\u0201"+
		"\3\2\2\2\u01ff\u01fd\3\2\2\2\u01ff\u0200\3\2\2\2\u0200\u0202\3\2\2\2\u0201"+
		"\u01ff\3\2\2\2\u0202\u0203\5\60\31\2\u0203/\3\2\2\2\u0204\u0205\7\u00bd"+
		"\2\2\u0205\u0207\7\u00be\2\2\u0206\u0204\3\2\2\2\u0207\u020a\3\2\2\2\u0208"+
		"\u0206\3\2\2\2\u0208\u0209\3\2\2\2\u0209\61\3\2\2\2\u020a\u0208\3\2\2"+
		"\2\u020b\u020d\79\2\2\u020c\u020e\5\64\33\2\u020d\u020c\3\2\2\2\u020d"+
		"\u020e\3\2\2\2\u020e\u021c\3\2\2\2\u020f\u0211\7$\2\2\u0210\u0212\5\64"+
		"\33\2\u0211\u0210\3\2\2\2\u0211\u0212\3\2\2\2\u0212\u021c\3\2\2\2\u0213"+
		"\u0215\7:\2\2\u0214\u0216\5\64\33\2\u0215\u0214\3\2\2\2\u0215\u0216\3"+
		"\2\2\2\u0216\u021c\3\2\2\2\u0217\u0219\5\u0116\u008c\2\u0218\u021a\5\64"+
		"\33\2\u0219\u0218\3\2\2\2\u0219\u021a\3\2\2\2\u021a\u021c\3\2\2\2\u021b"+
		"\u020b\3\2\2\2\u021b\u020f\3\2\2\2\u021b\u0213\3\2\2\2\u021b\u0217\3\2"+
		"\2\2\u021c\63\3\2\2\2\u021d\u021e\7\u00c4\2\2\u021e\u021f\5\22\n\2\u021f"+
		"\u0220\7\u00c3\2\2\u0220\65\3\2\2\2\u0221\u0223\7\u00b9\2\2\u0222\u0224"+
		"\58\35\2\u0223\u0222\3\2\2\2\u0223\u0224\3\2\2\2\u0224\u0225\3\2\2\2\u0225"+
		"\u0226\7\u00ba\2\2\u0226\67\3\2\2\2\u0227\u022c\5:\36\2\u0228\u0229\7"+
		"\u00c0\2\2\u0229\u022b\5:\36\2\u022a\u0228\3\2\2\2\u022b\u022e\3\2\2\2"+
		"\u022c\u022a\3\2\2\2\u022c\u022d\3\2\2\2\u022d9\3\2\2\2\u022e\u022c\3"+
		"\2\2\2\u022f\u0231\5\32\16\2\u0230\u022f\3\2\2\2\u0231\u0234\3\2\2\2\u0232"+
		"\u0230\3\2\2\2\u0232\u0233\3\2\2\2\u0233\u0235\3\2\2\2\u0234\u0232\3\2"+
		"\2\2\u0235\u0236\5.\30\2\u0236\u0237\5\u0116\u008c\2\u0237;\3\2\2\2\u0238"+
		"\u023d\5\u0116\u008c\2\u0239\u023a\7\u00c1\2\2\u023a\u023c\5\u0116\u008c"+
		"\2\u023b\u0239\3\2\2\2\u023c\u023f\3\2\2\2\u023d\u023b\3\2\2\2\u023d\u023e"+
		"\3\2\2\2\u023e=\3\2\2\2\u023f\u023d\3\2\2\2\u0240\u0241\t\4\2\2\u0241"+
		"?\3\2\2\2\u0242\u0243\7\u00e7\2\2\u0243\u024a\5<\37\2\u0244\u0247\7\u00b9"+
		"\2\2\u0245\u0248\5B\"\2\u0246\u0248\5F$\2\u0247\u0245\3\2\2\2\u0247\u0246"+
		"\3\2\2\2\u0247\u0248\3\2\2\2\u0248\u0249\3\2\2\2\u0249\u024b\7\u00ba\2"+
		"\2\u024a\u0244\3\2\2\2\u024a\u024b\3\2\2\2\u024bA\3\2\2\2\u024c\u0253"+
		"\5D#\2\u024d\u024f\7\u00c0\2\2\u024e\u024d\3\2\2\2\u024e\u024f\3\2\2\2"+
		"\u024f\u0250\3\2\2\2\u0250\u0252\5D#\2\u0251\u024e\3\2\2\2\u0252\u0255"+
		"\3\2\2\2\u0253\u0251\3\2\2\2\u0253\u0254\3\2\2\2\u0254C\3\2\2\2\u0255"+
		"\u0253\3\2\2\2\u0256\u0257\5\u0116\u008c\2\u0257\u0258\7\u00c2\2\2\u0258"+
		"\u0259\5F$\2\u0259E\3\2\2\2\u025a\u025e\5\u0092J\2\u025b\u025e\5@!\2\u025c"+
		"\u025e\5H%\2\u025d\u025a\3\2\2\2\u025d\u025b\3\2\2\2\u025d\u025c\3\2\2"+
		"\2\u025eG\3\2\2\2\u025f\u0268\7\u00bb\2\2\u0260\u0265\5F$\2\u0261\u0262"+
		"\7\u00c0\2\2\u0262\u0264\5F$\2\u0263\u0261\3\2\2\2\u0264\u0267\3\2\2\2"+
		"\u0265\u0263\3\2\2\2\u0265\u0266\3\2\2\2\u0266\u0269\3\2\2\2\u0267\u0265"+
		"\3\2\2\2\u0268\u0260\3\2\2\2\u0268\u0269\3\2\2\2\u0269\u026b\3\2\2\2\u026a"+
		"\u026c\7\u00c0\2\2\u026b\u026a\3\2\2\2\u026b\u026c\3\2\2\2\u026c\u026d"+
		"\3\2\2\2\u026d\u026e\7\u00bc\2\2\u026eI\3\2\2\2\u026f\u0273\7\u00bb\2"+
		"\2\u0270\u0272\5P)\2\u0271\u0270\3\2\2\2\u0272\u0275\3\2\2\2\u0273\u0271"+
		"\3\2\2\2\u0273\u0274\3\2\2\2\u0274\u0276\3\2\2\2\u0275\u0273\3\2\2\2\u0276"+
		"\u0277\7\u00bc\2\2\u0277K\3\2\2\2\u0278\u0279\5N(\2\u0279\u027a\7\u00bf"+
		"\2\2\u027aM\3\2\2\2\u027b\u027d\5\32\16\2\u027c\u027b\3\2\2\2\u027d\u0280"+
		"\3\2\2\2\u027e\u027c\3\2\2\2\u027e\u027f\3\2\2\2\u027f\u0281\3\2\2\2\u0280"+
		"\u027e\3\2\2\2\u0281\u0282\5.\30\2\u0282\u0283\5(\25\2\u0283O\3\2\2\2"+
		"\u0284\u0299\5J&\2\u0285\u0299\5R*\2\u0286\u0299\5T+\2\u0287\u0299\5\\"+
		"/\2\u0288\u0299\5^\60\2\u0289\u0299\5`\61\2\u028a\u0299\5b\62\2\u028b"+
		"\u0299\5d\63\2\u028c\u0299\5f\64\2\u028d\u0299\5h\65\2\u028e\u0299\5j"+
		"\66\2\u028f\u0299\5l\67\2\u0290\u0299\5n8\2\u0291\u0299\5p9\2\u0292\u0299"+
		"\5r:\2\u0293\u0299\5t;\2\u0294\u0299\5v<\2\u0295\u0299\5x=\2\u0296\u0299"+
		"\5L\'\2\u0297\u0299\5z>\2\u0298\u0284\3\2\2\2\u0298\u0285\3\2\2\2\u0298"+
		"\u0286\3\2\2\2\u0298\u0287\3\2\2\2\u0298\u0288\3\2\2\2\u0298\u0289\3\2"+
		"\2\2\u0298\u028a\3\2\2\2\u0298\u028b\3\2\2\2\u0298\u028c\3\2\2\2\u0298"+
		"\u028d\3\2\2\2\u0298\u028e\3\2\2\2\u0298\u028f\3\2\2\2\u0298\u0290\3\2"+
		"\2\2\u0298\u0291\3\2\2\2\u0298\u0292\3\2\2\2\u0298\u0293\3\2\2\2\u0298"+
		"\u0294\3\2\2\2\u0298\u0295\3\2\2\2\u0298\u0296\3\2\2\2\u0298\u0297\3\2"+
		"\2\2\u0299Q\3\2\2\2\u029a\u029b\7\24\2\2\u029b\u029c\5\u008eH\2\u029c"+
		"\u029f\5P)\2\u029d\u029e\7\f\2\2\u029e\u02a0\5P)\2\u029f\u029d\3\2\2\2"+
		"\u029f\u02a0\3\2\2\2\u02a0S\3\2\2\2\u02a1\u02a2\7(\2\2\u02a2\u02a3\7\35"+
		"\2\2\u02a3\u02a4\5\u0092J\2\u02a4\u02a6\7\u00bb\2\2\u02a5\u02a7\5V,\2"+
		"\u02a6\u02a5\3\2\2\2\u02a7\u02a8\3\2\2\2\u02a8\u02a6\3\2\2\2\u02a8\u02a9"+
		"\3\2\2\2\u02a9\u02aa\3\2\2\2\u02aa\u02ab\7\u00bc\2\2\u02abU\3\2\2\2\u02ac"+
		"\u02ad\7\65\2\2\u02ad\u02ae\5X-\2\u02ae\u02af\5J&\2\u02afW\3\2\2\2\u02b0"+
		"\u02bd\7\f\2\2\u02b1\u02b6\5Z.\2\u02b2\u02b3\7\u00c0\2\2\u02b3\u02b5\5"+
		"Z.\2\u02b4\u02b2\3\2\2\2\u02b5\u02b8\3\2\2\2\u02b6\u02b4\3\2\2\2\u02b6"+
		"\u02b7\3\2\2\2\u02b7\u02bd\3\2\2\2\u02b8\u02b6\3\2\2\2\u02b9\u02ba\5\u0116"+
		"\u008c\2\u02ba\u02bb\5\u0116\u008c\2\u02bb\u02bd\3\2\2\2\u02bc\u02b0\3"+
		"\2\2\2\u02bc\u02b1\3\2\2\2\u02bc\u02b9\3\2\2\2\u02bdY\3\2\2\2\u02be\u02c0"+
		"\7\u00d4\2\2\u02bf\u02be\3\2\2\2\u02bf\u02c0\3\2\2\2\u02c0\u02c1\3\2\2"+
		"\2\u02c1\u02c7\7\u00b3\2\2\u02c2\u02c7\7\u00b4\2\2\u02c3\u02c7\7\u00b7"+
		"\2\2\u02c4\u02c7\7\34\2\2\u02c5\u02c7\5\u0116\u008c\2\u02c6\u02bf\3\2"+
		"\2\2\u02c6\u02c2\3\2\2\2\u02c6\u02c3\3\2\2\2\u02c6\u02c4\3\2\2\2\u02c6"+
		"\u02c5\3\2\2\2\u02c7[\3\2\2\2\u02c8\u02c9\7\21\2\2\u02c9\u02ca\7\u00b9"+
		"\2\2\u02ca\u02cb\5\u0086D\2\u02cb\u02cc\7\u00ba\2\2\u02cc\u02cd\5P)\2"+
		"\u02cd]\3\2\2\2\u02ce\u02cf\7\66\2\2\u02cf\u02d0\5\u008eH\2\u02d0\u02d1"+
		"\5P)\2\u02d1_\3\2\2\2\u02d2\u02d3\7\13\2\2\u02d3\u02d4\5P)\2\u02d4\u02d5"+
		"\7\66\2\2\u02d5\u02d6\5\u008eH\2\u02d6\u02d7\7\u00bf\2\2\u02d7a\3\2\2"+
		"\2\u02d8\u02d9\7.\2\2\u02d9\u02e3\5J&\2\u02da\u02dc\5\u0082B\2\u02db\u02da"+
		"\3\2\2\2\u02dc\u02dd\3\2\2\2\u02dd\u02db\3\2\2\2\u02dd\u02de\3\2\2\2\u02de"+
		"\u02e0\3\2\2\2\u02df\u02e1\5\u0084C\2\u02e0\u02df\3\2\2\2\u02e0\u02e1"+
		"\3\2\2\2\u02e1\u02e4\3\2\2\2\u02e2\u02e4\5\u0084C\2\u02e3\u02db\3\2\2"+
		"\2\u02e3\u02e2\3\2\2\2\u02e4c\3\2\2\2\u02e5\u02e7\7\"\2\2\u02e6\u02e8"+
		"\5\u0092J\2\u02e7\u02e6\3\2\2\2\u02e7\u02e8\3\2\2\2\u02e8\u02e9\3\2\2"+
		"\2\u02e9\u02ea\7\u00bf\2\2\u02eae\3\2\2\2\u02eb\u02ec\7+\2\2\u02ec\u02ed"+
		"\5\u0092J\2\u02ed\u02ee\7\u00bf\2\2\u02eeg\3\2\2\2\u02ef\u02f0\7\6\2\2"+
		"\u02f0\u02f1\7\u00bf\2\2\u02f1i\3\2\2\2\u02f2\u02f3\7\t\2\2\u02f3\u02f4"+
		"\7\u00bf\2\2\u02f4k\3\2\2\2\u02f5\u02f6\7\27\2\2\u02f6\u02f7\5\u0092J"+
		"\2\u02f7\u02f8\7\u00bf\2\2\u02f8m\3\2\2\2\u02f9\u02fa\7\60\2\2\u02fa\u02fb"+
		"\5\u0092J\2\u02fb\u02fc\7\u00bf\2\2\u02fco\3\2\2\2\u02fd\u02fe\7\n\2\2"+
		"\u02fe\u02ff\5\u0092J\2\u02ff\u0300\7\u00bf\2\2\u0300q\3\2\2\2\u0301\u0302"+
		"\7/\2\2\u0302\u0303\5\u0092J\2\u0303\u0304\7\u00bf\2\2\u0304s\3\2\2\2"+
		"\u0305\u0306\7\61\2\2\u0306\u0308\5\u0092J\2\u0307\u0309\5<\37\2\u0308"+
		"\u0307\3\2\2\2\u0308\u0309\3\2\2\2\u0309\u030a\3\2\2\2\u030a\u030b\7\u00bf"+
		"\2\2\u030bu\3\2\2\2\u030c\u030d\7\32\2\2\u030d\u030e\5\u0092J\2\u030e"+
		"\u030f\5\u0092J\2\u030f\u0310\7\u00bf\2\2\u0310w\3\2\2\2\u0311\u0312\7"+
		"#\2\2\u0312\u0314\7\u00b9\2\2\u0313\u0315\5\u0090I\2\u0314\u0313\3\2\2"+
		"\2\u0314\u0315\3\2\2\2\u0315\u0316\3\2\2\2\u0316\u0317\7\u00ba\2\2\u0317"+
		"\u0318\5J&\2\u0318y\3\2\2\2\u0319\u031a\5\u0092J\2\u031a\u031b\7\u00bf"+
		"\2\2\u031b{\3\2\2\2\u031c\u031e\5\32\16\2\u031d\u031c\3\2\2\2\u031e\u0321"+
		"\3\2\2\2\u031f\u031d\3\2\2\2\u031f\u0320\3\2\2\2\u0320\u0324\3\2\2\2\u0321"+
		"\u031f\3\2\2\2\u0322\u0325\5~@\2\u0323\u0325\5\u0080A\2\u0324\u0322\3"+
		"\2\2\2\u0324\u0323\3\2\2\2\u0325}\3\2\2\2\u0326\u0329\7\22\2\2\u0327\u032a"+
		"\7\u00bf\2\2\u0328\u032a\5J&\2\u0329\u0327\3\2\2\2\u0329\u0328\3\2\2\2"+
		"\u032a\177\3\2\2\2\u032b\u032e\7$\2\2\u032c\u032f\7\u00bf\2\2\u032d\u032f"+
		"\5J&\2\u032e\u032c\3\2\2\2\u032e\u032d\3\2\2\2\u032f\u0081\3\2\2\2\u0330"+
		"\u0331\7\7\2\2\u0331\u0335\7\u00b9\2\2\u0332\u0334\5\32\16\2\u0333\u0332"+
		"\3\2\2\2\u0334\u0337\3\2\2\2\u0335\u0333\3\2\2\2\u0335\u0336\3\2\2\2\u0336"+
		"\u0338\3\2\2\2\u0337\u0335\3\2\2\2\u0338\u0339\5<\37\2\u0339\u033a\5\u0116"+
		"\u008c\2\u033a\u033b\7\u00ba\2\2\u033b\u033c\5J&\2\u033c\u0083\3\2\2\2"+
		"\u033d\u033e\7\20\2\2\u033e\u033f\5J&\2\u033f\u0085\3\2\2\2\u0340\u034d"+
		"\5\u008aF\2\u0341\u0343\5\u0088E\2\u0342\u0341\3\2\2\2\u0342\u0343\3\2"+
		"\2\2\u0343\u0344\3\2\2\2\u0344\u0346\7\u00bf\2\2\u0345\u0347\5\u0092J"+
		"\2\u0346\u0345\3\2\2\2\u0346\u0347\3\2\2\2\u0347\u0348\3\2\2\2\u0348\u034a"+
		"\7\u00bf\2\2\u0349\u034b\5\u008cG\2\u034a\u0349\3\2\2\2\u034a\u034b\3"+
		"\2\2\2\u034b\u034d\3\2\2\2\u034c\u0340\3\2\2\2\u034c\u0342\3\2\2\2\u034d"+
		"\u0087\3\2\2\2\u034e\u0351\5N(\2\u034f\u0351\5\u0090I\2\u0350\u034e\3"+
		"\2\2\2\u0350\u034f\3\2\2\2\u0351\u0089\3\2\2\2\u0352\u0353\5.\30\2\u0353"+
		"\u0354\5\u0116\u008c\2\u0354\u0355\7\u00c9\2\2\u0355\u0356\5\u0092J\2"+
		"\u0356\u008b\3\2\2\2\u0357\u0358\5\u0090I\2\u0358\u008d\3\2\2\2\u0359"+
		"\u035a\7\u00b9\2\2\u035a\u035b\5\u0092J\2\u035b\u035c\7\u00ba\2\2\u035c"+
		"\u008f\3\2\2\2\u035d\u0362\5\u0092J\2\u035e\u035f\7\u00c0\2\2\u035f\u0361"+
		"\5\u0092J\2\u0360\u035e\3\2\2\2\u0361\u0364\3\2\2\2\u0362\u0360\3\2\2"+
		"\2\u0362\u0363\3\2\2\2\u0363\u0091\3\2\2\2\u0364\u0362\3\2\2\2\u0365\u0366"+
		"\bJ\1\2\u0366\u0378\5\u0094K\2\u0367\u0378\5\u0096L\2\u0368\u0369\7\33"+
		"\2\2\u0369\u0378\5\u009aN\2\u036a\u036b\7\u00b9\2\2\u036b\u036c\5.\30"+
		"\2\u036c\u036d\7\u00ba\2\2\u036d\u036e\5\u0092J\24\u036e\u0378\3\2\2\2"+
		"\u036f\u0370\7\u00b9\2\2\u0370\u0371\5\u0092J\2\u0371\u0372\7\u00ba\2"+
		"\2\u0372\u0378\3\2\2\2\u0373\u0374\t\5\2\2\u0374\u0378\5\u0092J\21\u0375"+
		"\u0376\t\6\2\2\u0376\u0378\5\u0092J\20\u0377\u0365\3\2\2\2\u0377\u0367"+
		"\3\2\2\2\u0377\u0368\3\2\2\2\u0377\u036a\3\2\2\2\u0377\u036f\3\2\2\2\u0377"+
		"\u0373\3\2\2\2\u0377\u0375\3\2\2\2\u0378\u03bd\3\2\2\2\u0379\u037a\f\17"+
		"\2\2\u037a\u037b\t\7\2\2\u037b\u03bc\5\u0092J\20\u037c\u037d\f\16\2\2"+
		"\u037d\u037e\t\b\2\2\u037e\u03bc\5\u0092J\17\u037f\u0387\f\r\2\2\u0380"+
		"\u0381\7\u00c4\2\2\u0381\u0388\7\u00c4\2\2\u0382\u0383\7\u00c3\2\2\u0383"+
		"\u0384\7\u00c3\2\2\u0384\u0388\7\u00c3\2\2\u0385\u0386\7\u00c3\2\2\u0386"+
		"\u0388\7\u00c3\2\2\u0387\u0380\3\2\2\2\u0387\u0382\3\2\2\2\u0387\u0385"+
		"\3\2\2\2\u0388\u0389\3\2\2\2\u0389\u03bc\5\u0092J\16\u038a\u038b\f\f\2"+
		"\2\u038b\u038d\t\t\2\2\u038c\u038e\7\u00c2\2\2\u038d\u038c\3\2\2\2\u038d"+
		"\u038e\3\2\2\2\u038e\u038f\3\2\2\2\u038f\u03bc\5\u0092J\r\u0390\u0391"+
		"\f\n\2\2\u0391\u0392\t\n\2\2\u0392\u03bc\5\u0092J\13\u0393\u0394\f\t\2"+
		"\2\u0394\u0395\7\u00d7\2\2\u0395\u03bc\5\u0092J\n\u0396\u0397\f\b\2\2"+
		"\u0397\u0398\7\u00d9\2\2\u0398\u03bc\5\u0092J\t\u0399\u039a\f\7\2\2\u039a"+
		"\u039b\7\u00d8\2\2\u039b\u03bc\5\u0092J\b\u039c\u039d\f\6\2\2\u039d\u039e"+
		"\7\u00cf\2\2\u039e\u03bc\5\u0092J\7\u039f\u03a0\f\5\2\2\u03a0\u03a1\7"+
		"\u00d0\2\2\u03a1\u03bc\5\u0092J\6\u03a2\u03a3\f\4\2\2\u03a3\u03a4\7\u00c8"+
		"\2\2\u03a4\u03a5\5\u0092J\2\u03a5\u03a6\7\u00c9\2\2\u03a6\u03a7\5\u0092"+
		"J\4\u03a7\u03bc\3\2\2\2\u03a8\u03a9\f\3\2\2\u03a9\u03aa\t\13\2\2\u03aa"+
		"\u03bc\5\u0092J\3\u03ab\u03ac\f\30\2\2\u03ac\u03af\t\f\2\2\u03ad\u03b0"+
		"\5\u0098M\2\u03ae\u03b0\5\u0118\u008d\2\u03af\u03ad\3\2\2\2\u03af\u03ae"+
		"\3\2\2\2\u03b0\u03bc\3\2\2\2\u03b1\u03b2\f\27\2\2\u03b2\u03b3\7\u00bd"+
		"\2\2\u03b3\u03b4\5\u0092J\2\u03b4\u03b5\7\u00be\2\2\u03b5\u03bc\3\2\2"+
		"\2\u03b6\u03b7\f\22\2\2\u03b7\u03bc\t\r\2\2\u03b8\u03b9\f\13\2\2\u03b9"+
		"\u03ba\7\30\2\2\u03ba\u03bc\5.\30\2\u03bb\u0379\3\2\2\2\u03bb\u037c\3"+
		"\2\2\2\u03bb\u037f\3\2\2\2\u03bb\u038a\3\2\2\2\u03bb\u0390\3\2\2\2\u03bb"+
		"\u0393\3\2\2\2\u03bb\u0396\3\2\2\2\u03bb\u0399\3\2\2\2\u03bb\u039c\3\2"+
		"\2\2\u03bb\u039f\3\2\2\2\u03bb\u03a2\3\2\2\2\u03bb\u03a8\3\2\2\2\u03bb"+
		"\u03ab\3\2\2\2\u03bb\u03b1\3\2\2\2\u03bb\u03b6\3\2\2\2\u03bb\u03b8\3\2"+
		"\2\2\u03bc\u03bf\3\2\2\2\u03bd\u03bb\3\2\2\2\u03bd\u03be\3\2\2\2\u03be"+
		"\u0093\3\2\2\2\u03bf\u03bd\3\2\2\2\u03c0\u03cb\7*\2\2\u03c1\u03cb\7\'"+
		"\2\2\u03c2\u03cb\5> \2\u03c3\u03c4\5.\30\2\u03c4\u03c5\7\u00c1\2\2\u03c5"+
		"\u03c6\7\b\2\2\u03c6\u03cb\3\2\2\2\u03c7\u03cb\5\u0116\u008c\2\u03c8\u03cb"+
		"\5\u00aeX\2\u03c9\u03cb\5\u0102\u0082\2\u03ca\u03c0\3\2\2\2\u03ca\u03c1"+
		"\3\2\2\2\u03ca\u03c2\3\2\2\2\u03ca\u03c3\3\2\2\2\u03ca\u03c7\3\2\2\2\u03ca"+
		"\u03c8\3\2\2\2\u03ca\u03c9\3\2\2\2\u03cb\u0095\3\2\2\2\u03cc\u03cd\5\u0116"+
		"\u008c\2\u03cd\u03cf\7\u00b9\2\2\u03ce\u03d0\5\u0090I\2\u03cf\u03ce\3"+
		"\2\2\2\u03cf\u03d0\3\2\2\2\u03d0\u03d1\3\2\2\2\u03d1\u03d2\7\u00ba\2\2"+
		"\u03d2\u03e0\3\2\2\2\u03d3\u03d4\7*\2\2\u03d4\u03d6\7\u00b9\2\2\u03d5"+
		"\u03d7\5\u0090I\2\u03d6\u03d5\3\2\2\2\u03d6\u03d7\3\2\2\2\u03d7\u03d8"+
		"\3\2\2\2\u03d8\u03e0\7\u00ba\2\2\u03d9\u03da\7\'\2\2\u03da\u03dc\7\u00b9"+
		"\2\2\u03db\u03dd\5\u0090I\2\u03dc\u03db\3\2\2\2\u03dc\u03dd\3\2\2\2\u03dd"+
		"\u03de\3\2\2\2\u03de\u03e0\7\u00ba\2\2\u03df\u03cc\3\2\2\2\u03df\u03d3"+
		"\3\2\2\2\u03df\u03d9\3\2\2\2\u03e0\u0097\3\2\2\2\u03e1\u03e2\5\u0118\u008d"+
		"\2\u03e2\u03e4\7\u00b9\2\2\u03e3\u03e5\5\u0090I\2\u03e4\u03e3\3\2\2\2"+
		"\u03e4\u03e5\3\2\2\2\u03e5\u03e6\3\2\2\2\u03e6\u03e7\7\u00ba\2\2\u03e7"+
		"\u0099\3\2\2\2\u03e8\u03ee\5\u009cO\2\u03e9\u03ef\5\u00a0Q\2\u03ea\u03ef"+
		"\5\u00a2R\2\u03eb\u03ef\5\u00a4S\2\u03ec\u03ef\5\u00a6T\2\u03ed\u03ef"+
		"\5\u00aaV\2\u03ee\u03e9\3\2\2\2\u03ee\u03ea\3\2\2\2\u03ee\u03eb\3\2\2"+
		"\2\u03ee\u03ec\3\2\2\2\u03ee\u03ed\3\2\2\2\u03ef\u009b\3\2\2\2\u03f0\u03f5"+
		"\5\u009eP\2\u03f1\u03f2\7\u00c1\2\2\u03f2\u03f4\5\u009eP\2\u03f3\u03f1"+
		"\3\2\2\2\u03f4\u03f7\3\2\2\2\u03f5\u03f3\3\2\2\2\u03f5\u03f6\3\2\2\2\u03f6"+
		"\u009d\3\2\2\2\u03f7\u03f5\3\2\2\2\u03f8\u03fd\5\u0118\u008d\2\u03f9\u03fa"+
		"\7\u00c4\2\2\u03fa\u03fb\5\22\n\2\u03fb\u03fc\7\u00c3\2\2\u03fc\u03fe"+
		"\3\2\2\2\u03fd\u03f9\3\2\2\2\u03fd\u03fe\3\2\2\2\u03fe\u009f\3\2\2\2\u03ff"+
		"\u0400\7\u00bb\2\2\u0400\u0401\7\u00bc\2\2\u0401\u00a1\3\2\2\2\u0402\u0403"+
		"\5\u00acW\2\u0403\u00a3\3\2\2\2\u0404\u0405\7\u00bd\2\2\u0405\u0406\5"+
		"\u0092J\2\u0406\u0407\7\u00be\2\2\u0407\u040e\3\2\2\2\u0408\u0409\7\u00bd"+
		"\2\2\u0409\u040b\7\u00be\2\2\u040a\u040c\5,\27\2\u040b\u040a\3\2\2\2\u040b"+
		"\u040c\3\2\2\2\u040c\u040e\3\2\2\2\u040d\u0404\3\2\2\2\u040d\u0408\3\2"+
		"\2\2\u040e\u00a5\3\2\2\2\u040f\u0410\7\u00bb\2\2\u0410\u0415\5\u00a8U"+
		"\2\u0411\u0412\7\u00c0\2\2\u0412\u0414\5\u00a8U\2\u0413\u0411\3\2\2\2"+
		"\u0414\u0417\3\2\2\2\u0415\u0413\3\2\2\2\u0415\u0416\3\2\2\2\u0416\u0418"+
		"\3\2\2\2\u0417\u0415\3\2\2\2\u0418\u0419\7\u00bc\2\2\u0419\u00a7\3\2\2"+
		"\2\u041a\u041b\5\u0092J\2\u041b\u041c\7\u00db\2\2\u041c\u041d\5\u0092"+
		"J\2\u041d\u00a9\3\2\2\2\u041e\u041f\7\u00bb\2\2\u041f\u0424\5\u0092J\2"+
		"\u0420\u0421\7\u00c0\2\2\u0421\u0423\5\u0092J\2\u0422\u0420\3\2\2\2\u0423"+
		"\u0426\3\2\2\2\u0424\u0422\3\2\2\2\u0424\u0425\3\2\2\2\u0425\u0427\3\2"+
		"\2\2\u0426\u0424\3\2\2\2\u0427\u0428\7\u00bc\2\2\u0428\u00ab\3\2\2\2\u0429"+
		"\u042b\7\u00b9\2\2\u042a\u042c\5\u0090I\2\u042b\u042a\3\2\2\2\u042b\u042c"+
		"\3\2\2\2\u042c\u042d\3\2\2\2\u042d\u042e\7\u00ba\2\2\u042e\u00ad\3\2\2"+
		"\2\u042f\u0430\7\u00bd\2\2\u0430\u0431\5\u00b0Y\2\u0431\u0432\7\u00be"+
		"\2\2\u0432\u00af\3\2\2\2\u0433\u0434\7;\2\2\u0434\u0435\5\u00b4[\2\u0435"+
		"\u0436\7=\2\2\u0436\u0438\5\u00ba^\2\u0437\u0439\5\u00ceh\2\u0438\u0437"+
		"\3\2\2\2\u0438\u0439\3\2\2\2\u0439\u043b\3\2\2\2\u043a\u043c\5\u00d0i"+
		"\2\u043b\u043a\3\2\2\2\u043b\u043c\3\2\2\2\u043c\u043e\3\2\2\2\u043d\u043f"+
		"\5\u00e0q\2\u043e\u043d\3\2\2\2\u043e\u043f\3\2\2\2\u043f\u0441\3\2\2"+
		"\2\u0440\u0442\5\u00eav\2\u0441\u0440\3\2\2\2\u0441\u0442\3\2\2\2\u0442"+
		"\u0444\3\2\2\2\u0443\u0445\5\u00ecw\2\u0444\u0443\3\2\2\2\u0444\u0445"+
		"\3\2\2\2\u0445\u0447\3\2\2\2\u0446\u0448\5\u00f2z\2\u0447\u0446\3\2\2"+
		"\2\u0447\u0448\3\2\2\2\u0448\u044a\3\2\2\2\u0449\u044b\5\u00f4{\2\u044a"+
		"\u0449\3\2\2\2\u044a\u044b\3\2\2\2\u044b\u044d\3\2\2\2\u044c\u044e\5\u00f6"+
		"|\2\u044d\u044c\3\2\2\2\u044d\u044e\3\2\2\2\u044e\u044f\3\2\2\2\u044f"+
		"\u0450\5\u00f8}\2\u0450\u00b1\3\2\2\2\u0451\u0452\7;\2\2\u0452\u0453\5"+
		"\u00bc_\2\u0453\u0454\7=\2\2\u0454\u0456\5\u00ba^\2\u0455\u0457\5\u00d0"+
		"i\2\u0456\u0455\3\2\2\2\u0456\u0457\3\2\2\2\u0457\u0459\3\2\2\2\u0458"+
		"\u045a\5\u00ecw\2\u0459\u0458\3\2\2\2\u0459\u045a\3\2\2\2\u045a\u045c"+
		"\3\2\2\2\u045b\u045d\5\u00f2z\2\u045c\u045b\3\2\2\2\u045c\u045d\3\2\2"+
		"\2\u045d\u045e\3\2\2\2\u045e\u045f\5\u00f8}\2\u045f\u00b3\3\2\2\2\u0460"+
		"\u0465\5\u00b6\\\2\u0461\u0462\7\u00c0\2\2\u0462\u0464\5\u00b6\\\2\u0463"+
		"\u0461\3\2\2\2\u0464\u0467\3\2\2\2\u0465\u0463\3\2\2\2\u0465\u0466\3\2"+
		"\2\2\u0466\u00b5\3\2\2\2\u0467\u0465\3\2\2\2\u0468\u046a\5\u00b8]\2\u0469"+
		"\u046b\5\u0100\u0081\2\u046a\u0469\3\2\2\2\u046a\u046b\3\2\2\2\u046b\u0478"+
		"\3\2\2\2\u046c\u046e\5\u00c2b\2\u046d\u046f\5\u0100\u0081\2\u046e\u046d"+
		"\3\2\2\2\u046e\u046f\3\2\2\2\u046f\u0478\3\2\2\2\u0470\u0471\7\u00b9\2"+
		"\2\u0471\u0472\5\u00b2Z\2\u0472\u0474\7\u00ba\2\2\u0473\u0475\5\u0100"+
		"\u0081\2\u0474\u0473\3\2\2\2\u0474\u0475\3\2\2\2\u0475\u0478\3\2\2\2\u0476"+
		"\u0478\5\u00c6d\2\u0477\u0468\3\2\2\2\u0477\u046c\3\2\2\2\u0477\u0470"+
		"\3\2\2\2\u0477\u0476\3\2\2\2\u0478\u00b7\3\2\2\2\u0479\u047e\5\u0100\u0081"+
		"\2\u047a\u047b\7\u00c1\2\2\u047b\u047d\5\u0100\u0081\2\u047c\u047a\3\2"+
		"\2\2\u047d\u0480\3\2\2\2\u047e\u047c\3\2\2\2\u047e\u047f\3\2\2\2\u047f"+
		"\u00b9\3\2\2\2\u0480\u047e\3\2\2\2\u0481\u0483\5\u00b8]\2\u0482\u0484"+
		"\5\u0100\u0081\2\u0483\u0482\3\2\2\2\u0483\u0484\3\2\2\2\u0484\u048c\3"+
		"\2\2\2\u0485\u0486\7\u00c0\2\2\u0486\u0488\5\u00b8]\2\u0487\u0489\5\u0100"+
		"\u0081\2\u0488\u0487\3\2\2\2\u0488\u0489\3\2\2\2\u0489\u048b\3\2\2\2\u048a"+
		"\u0485\3\2\2\2\u048b\u048e\3\2\2\2\u048c\u048a\3\2\2\2\u048c\u048d\3\2"+
		"\2\2\u048d\u00bb\3\2\2\2\u048e\u048c\3\2\2\2\u048f\u0494\5\u00be`\2\u0490"+
		"\u0491\7\u00c0\2\2\u0491\u0493\5\u00be`\2\u0492\u0490\3\2\2\2\u0493\u0496"+
		"\3\2\2\2\u0494\u0492\3\2\2\2\u0494\u0495\3\2\2\2\u0495\u00bd\3\2\2\2\u0496"+
		"\u0494\3\2\2\2\u0497\u0499\5\u00b8]\2\u0498\u049a\5\u0100\u0081\2\u0499"+
		"\u0498\3\2\2\2\u0499\u049a\3\2\2\2\u049a\u04a0\3\2\2\2\u049b\u049d\5\u00c2"+
		"b\2\u049c\u049e\5\u0100\u0081\2\u049d\u049c\3\2\2\2\u049d\u049e\3\2\2"+
		"\2\u049e\u04a0\3\2\2\2\u049f\u0497\3\2\2\2\u049f\u049b\3\2\2\2\u04a0\u00bf"+
		"\3\2\2\2\u04a1\u04a2\t\16\2\2\u04a2\u00c1\3\2\2\2\u04a3\u04a4\7H\2\2\u04a4"+
		"\u04a5\7\u00b9\2\2\u04a5\u04a6\5\u00b8]\2\u04a6\u04a7\7\u00ba\2\2\u04a7"+
		"\u0515\3\2\2\2\u04a8\u04a9\7<\2\2\u04a9\u04aa\7\u00b9\2\2\u04aa\u0515"+
		"\7\u00ba\2\2\u04ab\u04ac\7<\2\2\u04ac\u04ad\7\u00b9\2\2\u04ad\u04ae\5"+
		"\u00b8]\2\u04ae\u04af\7\u00ba\2\2\u04af\u0515\3\2\2\2\u04b0\u04b1\7I\2"+
		"\2\u04b1\u04b2\7\u00b9\2\2\u04b2\u04b3\5\u00b8]\2\u04b3\u04b4\7\u00ba"+
		"\2\2\u04b4\u0515\3\2\2\2\u04b5\u04b6\7J\2\2\u04b6\u04b7\7\u00b9\2\2\u04b7"+
		"\u04b8\5\u00b8]\2\u04b8\u04b9\7\u00ba\2\2\u04b9\u0515\3\2\2\2\u04ba\u04bb"+
		"\7K\2\2\u04bb\u04bc\7\u00b9\2\2\u04bc\u04bd\5\u00b8]\2\u04bd\u04be\7\u00ba"+
		"\2\2\u04be\u0515\3\2\2\2\u04bf\u04c0\7L\2\2\u04c0\u04c1\7\u00b9\2\2\u04c1"+
		"\u04c2\5\u00b8]\2\u04c2\u04c3\7\u00ba\2\2\u04c3\u0515\3\2\2\2\u04c4\u04c5"+
		"\7_\2\2\u04c5\u04c6\7\u00b9\2\2\u04c6\u04c7\5\u00b8]\2\u04c7\u04c8\7\u00ba"+
		"\2\2\u04c8\u0515\3\2\2\2\u04c9\u04ca\7j\2\2\u04ca\u04cb\7\u00b9\2\2\u04cb"+
		"\u04cc\5\u00b8]\2\u04cc\u04cd\7\u00ba\2\2\u04cd\u0515\3\2\2\2\u04ce\u04cf"+
		"\7o\2\2\u04cf\u04d0\7\u00b9\2\2\u04d0\u04d1\5\u00c4c\2\u04d1\u04d2\7\u00ba"+
		"\2\2\u04d2\u0515\3\2\2\2\u04d3\u04d4\7p\2\2\u04d4\u04d5\7\u00b9\2\2\u04d5"+
		"\u04d6\5\u00c4c\2\u04d6\u04d7\7\u00ba\2\2\u04d7\u0515\3\2\2\2\u04d8\u04d9"+
		"\7q\2\2\u04d9\u04da\7\u00b9\2\2\u04da\u04db\5\u00c4c\2\u04db\u04dc\7\u00ba"+
		"\2\2\u04dc\u0515\3\2\2\2\u04dd\u04de\7r\2\2\u04de\u04df\7\u00b9\2\2\u04df"+
		"\u04e0\5\u00c4c\2\u04e0\u04e1\7\u00ba\2\2\u04e1\u0515\3\2\2\2\u04e2\u04e3"+
		"\7s\2\2\u04e3\u04e4\7\u00b9\2\2\u04e4\u04e5\5\u00c4c\2\u04e5\u04e6\7\u00ba"+
		"\2\2\u04e6\u0515\3\2\2\2\u04e7\u04e8\7t\2\2\u04e8\u04e9\7\u00b9\2\2\u04e9"+
		"\u04ea\5\u00c4c\2\u04ea\u04eb\7\u00ba\2\2\u04eb\u0515\3\2\2\2\u04ec\u04ed"+
		"\7u\2\2\u04ed\u04ee\7\u00b9\2\2\u04ee\u04ef\5\u00c4c\2\u04ef\u04f0\7\u00ba"+
		"\2\2\u04f0\u0515\3\2\2\2\u04f1\u04f2\7v\2\2\u04f2\u04f3\7\u00b9\2\2\u04f3"+
		"\u04f4\5\u00c4c\2\u04f4\u04f5\7\u00ba\2\2\u04f5\u0515\3\2\2\2\u04f6\u04f7"+
		"\7w\2\2\u04f7\u04f8\7\u00b9\2\2\u04f8\u04f9\5\u00c4c\2\u04f9\u04fa\7\u00ba"+
		"\2\2\u04fa\u0515\3\2\2\2\u04fb\u04fc\7x\2\2\u04fc\u04fd\7\u00b9\2\2\u04fd"+
		"\u04fe\5\u00c4c\2\u04fe\u04ff\7\u00ba\2\2\u04ff\u0515\3\2\2\2\u0500\u0501"+
		"\7y\2\2\u0501\u0502\7\u00b9\2\2\u0502\u0503\5\u00c4c\2\u0503\u0504\7\u00ba"+
		"\2\2\u0504\u0515\3\2\2\2\u0505\u0506\7z\2\2\u0506\u0507\7\u00b9\2\2\u0507"+
		"\u0508\5\u00c4c\2\u0508\u0509\7\u00ba\2\2\u0509\u0515\3\2\2\2\u050a\u050b"+
		"\7{\2\2\u050b\u050c\7\u00b9\2\2\u050c\u050d\5\u00c4c\2\u050d\u050e\7\u00ba"+
		"\2\2\u050e\u0515\3\2\2\2\u050f\u0510\7\u00a9\2\2\u0510\u0511\7\u00b9\2"+
		"\2\u0511\u0512\5\u00c0a\2\u0512\u0513\7\u00ba\2\2\u0513\u0515\3\2\2\2"+
		"\u0514\u04a3\3\2\2\2\u0514\u04a8\3\2\2\2\u0514\u04ab\3\2\2\2\u0514\u04b0"+
		"\3\2\2\2\u0514\u04b5\3\2\2\2\u0514\u04ba\3\2\2\2\u0514\u04bf\3\2\2\2\u0514"+
		"\u04c4\3\2\2\2\u0514\u04c9\3\2\2\2\u0514\u04ce\3\2\2\2\u0514\u04d3\3\2"+
		"\2\2\u0514\u04d8\3\2\2\2\u0514\u04dd\3\2\2\2\u0514\u04e2\3\2\2\2\u0514"+
		"\u04e7\3\2\2\2\u0514\u04ec\3\2\2\2\u0514\u04f1\3\2\2\2\u0514\u04f6\3\2"+
		"\2\2\u0514\u04fb\3\2\2\2\u0514\u0500\3\2\2\2\u0514\u0505\3\2\2\2\u0514"+
		"\u050a\3\2\2\2\u0514\u050f\3\2\2\2\u0515\u00c3\3\2\2\2\u0516\u0517\7|"+
		"\2\2\u0517\u0518\7\u00b9\2\2\u0518\u0519\5\u00b8]\2\u0519\u051a\7\u00ba"+
		"\2\2\u051a\u051d\3\2\2\2\u051b\u051d\5\u00b8]\2\u051c\u0516\3\2\2\2\u051c"+
		"\u051b\3\2\2\2\u051d\u00c5\3\2\2\2\u051e\u051f\7M\2\2\u051f\u0521\5\u00b8"+
		"]\2\u0520\u0522\5\u00c8e\2\u0521\u0520\3\2\2\2\u0522\u0523\3\2\2\2\u0523"+
		"\u0521\3\2\2\2\u0523\u0524\3\2\2\2\u0524\u0526\3\2\2\2\u0525\u0527\5\u00ca"+
		"f\2\u0526\u0525\3\2\2\2\u0526\u0527\3\2\2\2\u0527\u0528\3\2\2\2\u0528"+
		"\u0529\7N\2\2\u0529\u00c7\3\2\2\2\u052a\u052b\7\65\2\2\u052b\u052c\5\u00b8"+
		"]\2\u052c\u052d\7O\2\2\u052d\u052e\5\u00ccg\2\u052e\u00c9\3\2\2\2\u052f"+
		"\u0530\7\f\2\2\u0530\u0531\5\u00ccg\2\u0531\u00cb\3\2\2\2\u0532\u0537"+
		"\5\u00b8]\2\u0533\u0534\7\u00c0\2\2\u0534\u0536\5\u00b8]\2\u0535\u0533"+
		"\3\2\2\2\u0536\u0539\3\2\2\2\u0537\u0535\3\2\2\2\u0537\u0538\3\2\2\2\u0538"+
		"\u00cd\3\2\2\2\u0539\u0537\3\2\2\2\u053a\u053b\7?\2\2\u053b\u053c\7@\2"+
		"\2\u053c\u053d\5\u0100\u0081\2\u053d\u00cf\3\2\2\2\u053e\u053f\7A\2\2"+
		"\u053f\u0540\5\u00d2j\2\u0540\u00d1\3\2\2\2\u0541\u0546\5\u00d4k\2\u0542"+
		"\u0543\7E\2\2\u0543\u0545\5\u00d4k\2\u0544\u0542\3\2\2\2\u0545\u0548\3"+
		"\2\2\2\u0546\u0544\3\2\2\2\u0546\u0547\3\2\2\2\u0547\u0554\3\2\2\2\u0548"+
		"\u0546\3\2\2\2\u0549\u054e\5\u00d4k\2\u054a\u054b\7F\2\2\u054b\u054d\5"+
		"\u00d4k\2\u054c\u054a\3\2\2\2\u054d\u0550\3\2\2\2\u054e\u054c\3\2\2\2"+
		"\u054e\u054f\3\2\2\2\u054f\u0554\3\2\2\2\u0550\u054e\3\2\2\2\u0551\u0552"+
		"\7G\2\2\u0552\u0554\5\u00d4k\2\u0553\u0541\3\2\2\2\u0553\u0549\3\2\2\2"+
		"\u0553\u0551\3\2\2\2\u0554\u00d3\3\2\2\2\u0555\u0556\7\u00b9\2\2\u0556"+
		"\u0557\5\u00d2j\2\u0557\u0558\7\u00ba\2\2\u0558\u055b\3\2\2\2\u0559\u055b"+
		"\5\u00d6l\2\u055a\u0555\3\2\2\2\u055a\u0559\3\2\2\2\u055b\u00d5\3\2\2"+
		"\2\u055c\u055d\5\u00b8]\2\u055d\u055e\5\u00d8m\2\u055e\u055f\5\u00dan"+
		"\2\u055f\u0565\3\2\2\2\u0560\u0561\5\u00c2b\2\u0561\u0562\5\u00d8m\2\u0562"+
		"\u0563\5\u00dan\2\u0563\u0565\3\2\2\2\u0564\u055c\3\2\2\2\u0564\u0560"+
		"\3\2\2\2\u0565\u00d7\3\2\2\2\u0566\u0576\7\u00c2\2\2\u0567\u0576\7\u00cc"+
		"\2\2\u0568\u0576\7\u00c4\2\2\u0569\u0576\7\u00c3\2\2\u056a\u056b\7\u00c4"+
		"\2\2\u056b\u0576\7\u00c2\2\2\u056c\u056d\7\u00c3\2\2\u056d\u0576\7\u00c2"+
		"\2\2\u056e\u0576\7\u00cd\2\2\u056f\u0576\7P\2\2\u0570\u0576\7Q\2\2\u0571"+
		"\u0572\7G\2\2\u0572\u0576\7Q\2\2\u0573\u0576\7R\2\2\u0574\u0576\7S\2\2"+
		"\u0575\u0566\3\2\2\2\u0575\u0567\3\2\2\2\u0575\u0568\3\2\2\2\u0575\u0569"+
		"\3\2\2\2\u0575\u056a\3\2\2\2\u0575\u056c\3\2\2\2\u0575\u056e\3\2\2\2\u0575"+
		"\u056f\3\2\2\2\u0575\u0570\3\2\2\2\u0575\u0571\3\2\2\2\u0575\u0573\3\2"+
		"\2\2\u0575\u0574\3\2\2\2\u0576\u00d9\3\2\2\2\u0577\u0588\7\34\2\2\u0578"+
		"\u0588\7\u00b6\2\2\u0579\u0588\7\u00b3\2\2\u057a\u0588\7\u00b4\2\2\u057b"+
		"\u0588\7\u00b5\2\2\u057c\u0588\7\u00b7\2\2\u057d\u0588\7\u00a2\2\2\u057e"+
		"\u0588\7\u00a3\2\2\u057f\u0588\5\u00fc\177\2\u0580\u0588\5\u00dep\2\u0581"+
		"\u0582\7\u00b9\2\2\u0582\u0583\5\u00b2Z\2\u0583\u0584\7\u00ba\2\2\u0584"+
		"\u0588\3\2\2\2\u0585\u0588\5\u00dco\2\u0586\u0588\5\u00fa~\2\u0587\u0577"+
		"\3\2\2\2\u0587\u0578\3\2\2\2\u0587\u0579\3\2\2\2\u0587\u057a\3\2\2\2\u0587"+
		"\u057b\3\2\2\2\u0587\u057c\3\2\2\2\u0587\u057d\3\2\2\2\u0587\u057e\3\2"+
		"\2\2\u0587\u057f\3\2\2\2\u0587\u0580\3\2\2\2\u0587\u0581\3\2\2\2\u0587"+
		"\u0585\3\2\2\2\u0587\u0586\3\2\2\2\u0588\u00db\3\2\2\2\u0589\u058a\7\u00b9"+
		"\2\2\u058a\u058f\5\u00dan\2\u058b\u058c\7\u00c0\2\2\u058c\u058e\5\u00da"+
		"n\2\u058d\u058b\3\2\2\2\u058e\u0591\3\2\2\2\u058f\u058d\3\2\2\2\u058f"+
		"\u0590\3\2\2\2\u0590\u0592\3\2\2\2\u0591\u058f\3\2\2\2\u0592\u0593\7\u00ba"+
		"\2\2\u0593\u00dd\3\2\2\2\u0594\u0595\5\u0100\u0081\2\u0595\u0596\5\u00fe"+
		"\u0080\2\u0596\u00df\3\2\2\2\u0597\u0598\7\67\2\2\u0598\u0599\7a\2\2\u0599"+
		"\u059a\7b\2\2\u059a\u05a0\5\u00e2r\2\u059b\u059c\7\67\2\2\u059c\u05a0"+
		"\7g\2\2\u059d\u059e\7\67\2\2\u059e\u05a0\5\u00d2j\2\u059f\u0597\3\2\2"+
		"\2\u059f\u059b\3\2\2\2\u059f\u059d\3\2\2\2\u05a0\u00e1\3\2\2\2\u05a1\u05a6"+
		"\5\u00e4s\2\u05a2\u05a3\7\u00cf\2\2\u05a3\u05a5\5\u00e4s\2\u05a4\u05a2"+
		"\3\2\2\2\u05a5\u05a8\3\2\2\2\u05a6\u05a4\3\2\2\2\u05a6\u05a7\3\2\2\2\u05a7"+
		"\u00e3\3\2\2\2\u05a8\u05a6\3\2\2\2\u05a9\u05aa\5\u0100\u0081\2\u05aa\u05ab"+
		"\5\u00e8u\2\u05ab\u05ac\5\u00e6t\2\u05ac\u00e5\3\2\2\2\u05ad\u05ba\5\u0100"+
		"\u0081\2\u05ae\u05af\7\u00b9\2\2\u05af\u05b4\5\u0100\u0081\2\u05b0\u05b1"+
		"\7\u00c0\2\2\u05b1\u05b3\5\u0100\u0081\2\u05b2\u05b0\3\2\2\2\u05b3\u05b6"+
		"\3\2\2\2\u05b4\u05b2\3\2\2\2\u05b4\u05b5\3\2\2\2\u05b5\u05b7\3\2\2\2\u05b6"+
		"\u05b4\3\2\2\2\u05b7\u05b8\7\u00b9\2\2\u05b8\u05ba\3\2\2\2\u05b9\u05ad"+
		"\3\2\2\2\u05b9\u05ae\3\2\2\2\u05ba\u00e7\3\2\2\2\u05bb\u05bc\t\17\2\2"+
		"\u05bc\u00e9\3\2\2\2\u05bd\u05be\7Y\2\2\u05be\u05bf\7C\2\2\u05bf\u05c2"+
		"\5\u00b4[\2\u05c0\u05c1\7]\2\2\u05c1\u05c3\5\u00d2j\2\u05c2\u05c0\3\2"+
		"\2\2\u05c2\u05c3\3\2\2\2\u05c3\u05e1\3\2\2\2\u05c4\u05c5\7Y\2\2\u05c5"+
		"\u05c6\7C\2\2\u05c6\u05c7\7^\2\2\u05c7\u05c8\7\u00b9\2\2\u05c8\u05cd\5"+
		"\u00b8]\2\u05c9\u05ca\7\u00c0\2\2\u05ca\u05cc\5\u00b8]\2\u05cb\u05c9\3"+
		"\2\2\2\u05cc\u05cf\3\2\2\2\u05cd\u05cb\3\2\2\2\u05cd\u05ce\3\2\2\2\u05ce"+
		"\u05d0\3\2\2\2\u05cf\u05cd\3\2\2\2\u05d0\u05d1\7\u00ba\2\2\u05d1\u05e1"+
		"\3\2\2\2\u05d2\u05d3\7Y\2\2\u05d3\u05d4\7C\2\2\u05d4\u05d5\7i\2\2\u05d5"+
		"\u05d6\7\u00b9\2\2\u05d6\u05db\5\u00b8]\2\u05d7\u05d8\7\u00c0\2\2\u05d8"+
		"\u05da\5\u00b8]\2\u05d9\u05d7\3\2\2\2\u05da\u05dd\3\2\2\2\u05db\u05d9"+
		"\3\2\2\2\u05db\u05dc\3\2\2\2\u05dc\u05de\3\2\2\2\u05dd\u05db\3\2\2\2\u05de"+
		"\u05df\7\u00ba\2\2\u05df\u05e1\3\2\2\2\u05e0\u05bd\3\2\2\2\u05e0\u05c4"+
		"\3\2\2\2\u05e0\u05d2\3\2\2\2\u05e1\u00eb\3\2\2\2\u05e2\u05e3\7B\2\2\u05e3"+
		"\u05e4\7C\2\2\u05e4\u05e5\5\u00eex\2\u05e5\u00ed\3\2\2\2\u05e6\u05eb\5"+
		"\u00f0y\2\u05e7\u05e8\7\u00c0\2\2\u05e8\u05ea\5\u00f0y\2\u05e9\u05e7\3"+
		"\2\2\2\u05ea\u05ed\3\2\2\2\u05eb\u05e9\3\2\2\2\u05eb\u05ec\3\2\2\2\u05ec"+
		"\u00ef\3\2\2\2\u05ed\u05eb\3\2\2\2\u05ee\u05f0\5\u00b8]\2\u05ef\u05f1"+
		"\t\20\2\2\u05f0\u05ef\3\2\2\2\u05f0\u05f1\3\2\2\2\u05f1\u05f4\3\2\2\2"+
		"\u05f2\u05f3\7V\2\2\u05f3\u05f5\t\21\2\2\u05f4\u05f2\3\2\2\2\u05f4\u05f5"+
		"\3\2\2\2\u05f5\u05ff\3\2\2\2\u05f6\u05f8\5\u00c2b\2\u05f7\u05f9\t\20\2"+
		"\2\u05f8\u05f7\3\2\2\2\u05f8\u05f9\3\2\2\2\u05f9\u05fc\3\2\2\2\u05fa\u05fb"+
		"\7V\2\2\u05fb\u05fd\t\21\2\2\u05fc\u05fa\3\2\2\2\u05fc\u05fd\3\2\2\2\u05fd"+
		"\u05ff\3\2\2\2\u05fe\u05ee\3\2\2\2\u05fe\u05f6\3\2\2\2\u05ff\u00f1\3\2"+
		"\2\2\u0600\u0601\7D\2\2\u0601\u0605\7\u00b3\2\2\u0602\u0603\7D\2\2\u0603"+
		"\u0605\5\u00fa~\2\u0604\u0600\3\2\2\2\u0604\u0602\3\2\2\2\u0605\u00f3"+
		"\3\2\2\2\u0606\u0607\7`\2\2\u0607\u060b\7\u00b3\2\2\u0608\u0609\7`\2\2"+
		"\u0609\u060b\5\u00fa~\2\u060a\u0606\3\2\2\2\u060a\u0608\3\2\2\2\u060b"+
		"\u00f5\3\2\2\2\u060c\u060d\7Z\2\2\u060d\u060e\7[\2\2\u060e\u00f7\3\2\2"+
		"\2\u060f\u0610\7\21\2\2\u0610\u0612\t\22\2\2\u0611\u060f\3\2\2\2\u0612"+
		"\u0615\3\2\2\2\u0613\u0611\3\2\2\2\u0613\u0614\3\2\2\2\u0614\u00f9\3\2"+
		"\2\2\u0615\u0613\3\2\2\2\u0616\u0617\7\u00c9\2\2\u0617\u0618\5\u0092J"+
		"\2\u0618\u00fb\3\2\2\2\u0619\u065b\7}\2\2\u061a\u065b\7~\2\2\u061b\u065b"+
		"\7\177\2\2\u061c\u065b\7\u0080\2\2\u061d\u065b\7\u0081\2\2\u061e\u065b"+
		"\7\u0082\2\2\u061f\u065b\7\u0083\2\2\u0620\u065b\7\u0084\2\2\u0621\u065b"+
		"\7\u0085\2\2\u0622\u065b\7\u0086\2\2\u0623\u065b\7\u0087\2\2\u0624\u0625"+
		"\7\u0088\2\2\u0625\u0626\7\u00c9\2\2\u0626\u065b\5\u00fe\u0080\2\u0627"+
		"\u0628\7\u0089\2\2\u0628\u0629\7\u00c9\2\2\u0629\u065b\5\u00fe\u0080\2"+
		"\u062a\u062b\7\u008a\2\2\u062b\u062c\7\u00c9\2\2\u062c\u065b\5\u00fe\u0080"+
		"\2\u062d\u062e\7\u008b\2\2\u062e\u062f\7\u00c9\2\2\u062f\u065b\5\u00fe"+
		"\u0080\2\u0630\u0631\7\u008c\2\2\u0631\u0632\7\u00c9\2\2\u0632\u065b\5"+
		"\u00fe\u0080\2\u0633\u0634\7\u008d\2\2\u0634\u0635\7\u00c9\2\2\u0635\u065b"+
		"\5\u00fe\u0080\2\u0636\u065b\7\u008e\2\2\u0637\u065b\7\u008f\2\2\u0638"+
		"\u065b\7\u0090\2\2\u0639\u063a\7\u0091\2\2\u063a\u063b\7\u00c9\2\2\u063b"+
		"\u065b\5\u00fe\u0080\2\u063c\u063d\7\u0092\2\2\u063d\u063e\7\u00c9\2\2"+
		"\u063e\u065b\5\u00fe\u0080\2\u063f\u065b\7\u0093\2\2\u0640\u065b\7\u0094"+
		"\2\2\u0641\u065b\7\u0095\2\2\u0642\u0643\7\u0096\2\2\u0643\u0644\7\u00c9"+
		"\2\2\u0644\u065b\5\u00fe\u0080\2\u0645\u0646\7\u0097\2\2\u0646\u0647\7"+
		"\u00c9\2\2\u0647\u065b\5\u00fe\u0080\2\u0648\u065b\7\u0098\2\2\u0649\u065b"+
		"\7\u0099\2\2\u064a\u065b\7\u009a\2\2\u064b\u064c\7\u009b\2\2\u064c\u064d"+
		"\7\u00c9\2\2\u064d\u065b\5\u00fe\u0080\2\u064e\u064f\7\u009c\2\2\u064f"+
		"\u0650\7\u00c9\2\2\u0650\u065b\5\u00fe\u0080\2\u0651\u065b\7\u009d\2\2"+
		"\u0652\u065b\7\u009e\2\2\u0653\u065b\7\u009f\2\2\u0654\u0655\7\u00a0\2"+
		"\2\u0655\u0656\7\u00c9\2\2\u0656\u065b\5\u00fe\u0080\2\u0657\u0658\7\u00a1"+
		"\2\2\u0658\u0659\7\u00c9\2\2\u0659\u065b\5\u00fe\u0080\2\u065a\u0619\3"+
		"\2\2\2\u065a\u061a\3\2\2\2\u065a\u061b\3\2\2\2\u065a\u061c\3\2\2\2\u065a"+
		"\u061d\3\2\2\2\u065a\u061e\3\2\2\2\u065a\u061f\3\2\2\2\u065a\u0620\3\2"+
		"\2\2\u065a\u0621\3\2\2\2\u065a\u0622\3\2\2\2\u065a\u0623\3\2\2\2\u065a"+
		"\u0624\3\2\2\2\u065a\u0627\3\2\2\2\u065a\u062a\3\2\2\2\u065a\u062d\3\2"+
		"\2\2\u065a\u0630\3\2\2\2\u065a\u0633\3\2\2\2\u065a\u0636\3\2\2\2\u065a"+
		"\u0637\3\2\2\2\u065a\u0638\3\2\2\2\u065a\u0639\3\2\2\2\u065a\u063c\3\2"+
		"\2\2\u065a\u063f\3\2\2\2\u065a\u0640\3\2\2\2\u065a\u0641\3\2\2\2\u065a"+
		"\u0642\3\2\2\2\u065a\u0645\3\2\2\2\u065a\u0648\3\2\2\2\u065a\u0649\3\2"+
		"\2\2\u065a\u064a\3\2\2\2\u065a\u064b\3\2\2\2\u065a\u064e\3\2\2\2\u065a"+
		"\u0651\3\2\2\2\u065a\u0652\3\2\2\2\u065a\u0653\3\2\2\2\u065a\u0654\3\2"+
		"\2\2\u065a\u0657\3\2\2\2\u065b\u00fd\3\2\2\2\u065c\u065e\t\b\2\2\u065d"+
		"\u065c\3\2\2\2\u065d\u065e\3\2\2\2\u065e\u065f\3\2\2\2\u065f\u0660\7\u00b3"+
		"\2\2\u0660\u00ff\3\2\2\2\u0661\u0662\5\u0116\u008c\2\u0662\u0101\3\2\2"+
		"\2\u0663\u0664\7\u00b2\2\2\u0664\u0665\5\u0104\u0083\2\u0665\u0666\7\u00be"+
		"\2\2\u0666\u066e\3\2\2\2\u0667\u0668\7\u00bd\2\2\u0668\u0669\7\u00a4\2"+
		"\2\u0669\u066a\5\u00fa~\2\u066a\u066b\5\u0104\u0083\2\u066b\u066c\7\u00be"+
		"\2\2\u066c\u066e\3\2\2\2\u066d\u0663\3\2\2\2\u066d\u0667\3\2\2\2\u066e"+
		"\u0103\3\2\2\2\u066f\u0670\7Q\2\2\u0670\u0672\5\u0106\u0084\2\u0671\u066f"+
		"\3\2\2\2\u0671\u0672\3\2\2\2\u0672\u0675\3\2\2\2\u0673\u0674\7\u00b0\2"+
		"\2\u0674\u0676\5\u0108\u0085\2\u0675\u0673\3\2\2\2\u0675\u0676\3\2\2\2"+
		"\u0676\u067b\3\2\2\2\u0677\u0678\7\67\2\2\u0678\u0679\7\u00af\2\2\u0679"+
		"\u067a\7\u00c2\2\2\u067a\u067c\7\u00b7\2\2\u067b\u0677\3\2\2\2\u067b\u067c"+
		"\3\2\2\2\u067c\u0681\3\2\2\2\u067d\u067e\7\67\2\2\u067e\u067f\7a\2\2\u067f"+
		"\u0680\7b\2\2\u0680\u0682\5\u00e2r\2\u0681\u067d\3\2\2\2\u0681\u0682\3"+
		"\2\2\2\u0682\u068c\3\2\2\2\u0683\u0684\7\67\2\2\u0684\u068a\7\u00ad\2"+
		"\2\u0685\u0686\7\u00b9\2\2\u0686\u0687\7\u00ae\2\2\u0687\u0688\7\u00c2"+
		"\2\2\u0688\u0689\7\u00b3\2\2\u0689\u068b\7\u00ba\2\2\u068a\u0685\3\2\2"+
		"\2\u068a\u068b\3\2\2\2\u068b\u068d\3\2\2\2\u068c\u0683\3\2\2\2\u068c\u068d"+
		"\3\2\2\2\u068d\u0695\3\2\2\2\u068e\u068f\7\67\2\2\u068f\u0690\7\u00ac"+
		"\2\2\u0690\u0691\7Q\2\2\u0691\u0692\7\u00b9\2\2\u0692\u0693\5\u0112\u008a"+
		"\2\u0693\u0694\7\u00ba\2\2\u0694\u0696\3\2\2\2\u0695\u068e\3\2\2\2\u0695"+
		"\u0696\3\2\2\2\u0696\u069b\3\2\2\2\u0697\u0698\7\67\2\2\u0698\u0699\7"+
		"\u00ac\2\2\u0699\u069a\7\u00c2\2\2\u069a\u069c\7\u00b7\2\2\u069b\u0697"+
		"\3\2\2\2\u069b\u069c\3\2\2\2\u069c\u06a1\3\2\2\2\u069d\u069e\7\67\2\2"+
		"\u069e\u069f\7\u00ab\2\2\u069f\u06a0\7\u00c2\2\2\u06a0\u06a2\7\u00b7\2"+
		"\2\u06a1\u069d\3\2\2\2\u06a1\u06a2\3\2\2\2\u06a2\u06a7\3\2\2\2\u06a3\u06a4"+
		"\7\67\2\2\u06a4\u06a5\7\u00aa\2\2\u06a5\u06a6\7\u00c2\2\2\u06a6\u06a8"+
		"\7\u00b7\2\2\u06a7\u06a3\3\2\2\2\u06a7\u06a8\3\2\2\2\u06a8\u06aa\3\2\2"+
		"\2\u06a9\u06ab\5\u00f2z\2\u06aa\u06a9\3\2\2\2\u06aa\u06ab\3\2\2\2\u06ab"+
		"\u06ae\3\2\2\2\u06ac\u06ad\7\60\2\2\u06ad\u06af\5\u010e\u0088\2\u06ae"+
		"\u06ac\3\2\2\2\u06ae\u06af\3\2\2\2\u06af\u0105\3\2\2\2\u06b0\u06b1\t\23"+
		"\2\2\u06b1\u06b2\7\u00a9\2\2\u06b2\u0107\3\2\2\2\u06b3\u06b8\5\u010a\u0086"+
		"\2\u06b4\u06b5\7\u00c0\2\2\u06b5\u06b7\5\u0108\u0085\2\u06b6\u06b4\3\2"+
		"\2\2\u06b7\u06ba\3\2\2\2\u06b8\u06b6\3\2\2\2\u06b8\u06b9\3\2\2\2\u06b9"+
		"\u0109\3\2\2\2\u06ba\u06b8\3\2\2\2\u06bb\u06d5\5\u0114\u008b\2\u06bc\u06bd"+
		"\7\u00b9\2\2\u06bd\u06c0\5\u010c\u0087\2\u06be\u06bf\7A\2\2\u06bf\u06c1"+
		"\5\u00d2j\2\u06c0\u06be\3\2\2\2\u06c0\u06c1\3\2\2\2\u06c1\u06c6\3\2\2"+
		"\2\u06c2\u06c3\7?\2\2\u06c3\u06c4\7\u00b1\2\2\u06c4\u06c5\7\u00c2\2\2"+
		"\u06c5\u06c7\5\u0114\u008b\2\u06c6\u06c2\3\2\2\2\u06c6\u06c7\3\2\2\2\u06c7"+
		"\u06cb\3\2\2\2\u06c8\u06c9\7B\2\2\u06c9\u06ca\7C\2\2\u06ca\u06cc\5\u00ee"+
		"x\2\u06cb\u06c8\3\2\2\2\u06cb\u06cc\3\2\2\2\u06cc\u06ce\3\2\2\2\u06cd"+
		"\u06cf\5\u00f2z\2\u06ce\u06cd\3\2\2\2\u06ce\u06cf\3\2\2\2\u06cf\u06d1"+
		"\3\2\2\2\u06d0\u06d2\5\u00f4{\2\u06d1\u06d0\3\2\2\2\u06d1\u06d2\3\2\2"+
		"\2\u06d2\u06d3\3\2\2\2\u06d3\u06d4\7\u00ba\2\2\u06d4\u06d6\3\2\2\2\u06d5"+
		"\u06bc\3\2\2\2\u06d5\u06d6\3\2\2\2\u06d6\u010b\3\2\2\2\u06d7\u06dc\5\u0114"+
		"\u008b\2\u06d8\u06d9\7\u00c0\2\2\u06d9\u06db\5\u010c\u0087\2\u06da\u06d8"+
		"\3\2\2\2\u06db\u06de\3\2\2\2\u06dc\u06da\3\2\2\2\u06dc\u06dd\3\2\2\2\u06dd"+
		"\u010d\3\2\2\2\u06de\u06dc\3\2\2\2\u06df\u06e2\5\u0110\u0089\2\u06e0\u06e1"+
		"\7\u00c0\2\2\u06e1\u06e3\5\u010e\u0088\2\u06e2\u06e0\3\2\2\2\u06e2\u06e3"+
		"\3\2\2\2\u06e3\u010f\3\2\2\2\u06e4\u06e5\t\24\2\2\u06e5\u0111\3\2\2\2"+
		"\u06e6\u06e9\7\u00b7\2\2\u06e7\u06e8\7\u00c0\2\2\u06e8\u06ea\5\u0112\u008a"+
		"\2\u06e9\u06e7\3\2\2\2\u06e9\u06ea\3\2\2\2\u06ea\u0113\3\2\2\2\u06eb\u06f0"+
		"\5\u0116\u008c\2\u06ec\u06ed\7\u00c1\2\2\u06ed\u06ef\5\u0114\u008b\2\u06ee"+
		"\u06ec\3\2\2\2\u06ef\u06f2\3\2\2\2\u06f0\u06ee\3\2\2\2\u06f0\u06f1\3\2"+
		"\2\2\u06f1\u0115\3\2\2\2\u06f2\u06f0\3\2\2\2\u06f3\u06f4\t\25\2\2\u06f4"+
		"\u0117\3\2\2\2\u06f5\u06f6\t\26\2\2\u06f6\u0119\3\2\2\2\u00af\u0124\u0134"+
		"\u013b\u0142\u0146\u014c\u0150\u0158\u0161\u0168\u0171\u0178\u0181\u0188"+
		"\u018e\u0192\u01a7\u01b0\u01b4\u01ba\u01ca\u01d2\u01d7\u01e2\u01e8\u01f0"+
		"\u01f4\u01f6\u01ff\u0208\u020d\u0211\u0215\u0219\u021b\u0223\u022c\u0232"+
		"\u023d\u0247\u024a\u024e\u0253\u025d\u0265\u0268\u026b\u0273\u027e\u0298"+
		"\u029f\u02a8\u02b6\u02bc\u02bf\u02c6\u02dd\u02e0\u02e3\u02e7\u0308\u0314"+
		"\u031f\u0324\u0329\u032e\u0335\u0342\u0346\u034a\u034c\u0350\u0362\u0377"+
		"\u0387\u038d\u03af\u03bb\u03bd\u03ca\u03cf\u03d6\u03dc\u03df\u03e4\u03ee"+
		"\u03f5\u03fd\u040b\u040d\u0415\u0424\u042b\u0438\u043b\u043e\u0441\u0444"+
		"\u0447\u044a\u044d\u0456\u0459\u045c\u0465\u046a\u046e\u0474\u0477\u047e"+
		"\u0483\u0488\u048c\u0494\u0499\u049d\u049f\u0514\u051c\u0523\u0526\u0537"+
		"\u0546\u054e\u0553\u055a\u0564\u0575\u0587\u058f\u059f\u05a6\u05b4\u05b9"+
		"\u05c2\u05cd\u05db\u05e0\u05eb\u05f0\u05f4\u05f8\u05fc\u05fe\u0604\u060a"+
		"\u0613\u065a\u065d\u066d\u0671\u0675\u067b\u0681\u068a\u068c\u0695\u069b"+
		"\u06a1\u06a7\u06aa\u06ae\u06b8\u06c0\u06c6\u06cb\u06ce\u06d1\u06d5\u06dc"+
		"\u06e2\u06e9\u06f0";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
