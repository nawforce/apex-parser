// Generated from ApexParser.g4 by ANTLR 4.8
package com.nawforce.apexparser;
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link ApexParser}.
 */
public interface ApexParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link ApexParser#triggerUnit}.
	 * @param ctx the parse tree
	 */
	void enterTriggerUnit(ApexParser.TriggerUnitContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#triggerUnit}.
	 * @param ctx the parse tree
	 */
	void exitTriggerUnit(ApexParser.TriggerUnitContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#triggerCase}.
	 * @param ctx the parse tree
	 */
	void enterTriggerCase(ApexParser.TriggerCaseContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#triggerCase}.
	 * @param ctx the parse tree
	 */
	void exitTriggerCase(ApexParser.TriggerCaseContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#compilationUnit}.
	 * @param ctx the parse tree
	 */
	void enterCompilationUnit(ApexParser.CompilationUnitContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#compilationUnit}.
	 * @param ctx the parse tree
	 */
	void exitCompilationUnit(ApexParser.CompilationUnitContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#typeDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterTypeDeclaration(ApexParser.TypeDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#typeDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitTypeDeclaration(ApexParser.TypeDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#classDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterClassDeclaration(ApexParser.ClassDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#classDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitClassDeclaration(ApexParser.ClassDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#enumDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterEnumDeclaration(ApexParser.EnumDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#enumDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitEnumDeclaration(ApexParser.EnumDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#enumConstants}.
	 * @param ctx the parse tree
	 */
	void enterEnumConstants(ApexParser.EnumConstantsContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#enumConstants}.
	 * @param ctx the parse tree
	 */
	void exitEnumConstants(ApexParser.EnumConstantsContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#interfaceDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterInterfaceDeclaration(ApexParser.InterfaceDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#interfaceDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitInterfaceDeclaration(ApexParser.InterfaceDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#typeList}.
	 * @param ctx the parse tree
	 */
	void enterTypeList(ApexParser.TypeListContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#typeList}.
	 * @param ctx the parse tree
	 */
	void exitTypeList(ApexParser.TypeListContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#classBody}.
	 * @param ctx the parse tree
	 */
	void enterClassBody(ApexParser.ClassBodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#classBody}.
	 * @param ctx the parse tree
	 */
	void exitClassBody(ApexParser.ClassBodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#interfaceBody}.
	 * @param ctx the parse tree
	 */
	void enterInterfaceBody(ApexParser.InterfaceBodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#interfaceBody}.
	 * @param ctx the parse tree
	 */
	void exitInterfaceBody(ApexParser.InterfaceBodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#classBodyDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterClassBodyDeclaration(ApexParser.ClassBodyDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#classBodyDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitClassBodyDeclaration(ApexParser.ClassBodyDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#modifier}.
	 * @param ctx the parse tree
	 */
	void enterModifier(ApexParser.ModifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#modifier}.
	 * @param ctx the parse tree
	 */
	void exitModifier(ApexParser.ModifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#memberDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterMemberDeclaration(ApexParser.MemberDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#memberDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitMemberDeclaration(ApexParser.MemberDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#methodDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterMethodDeclaration(ApexParser.MethodDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#methodDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitMethodDeclaration(ApexParser.MethodDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#constructorDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterConstructorDeclaration(ApexParser.ConstructorDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#constructorDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitConstructorDeclaration(ApexParser.ConstructorDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#fieldDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterFieldDeclaration(ApexParser.FieldDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#fieldDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitFieldDeclaration(ApexParser.FieldDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#propertyDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterPropertyDeclaration(ApexParser.PropertyDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#propertyDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitPropertyDeclaration(ApexParser.PropertyDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#interfaceMethodDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterInterfaceMethodDeclaration(ApexParser.InterfaceMethodDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#interfaceMethodDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitInterfaceMethodDeclaration(ApexParser.InterfaceMethodDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#variableDeclarators}.
	 * @param ctx the parse tree
	 */
	void enterVariableDeclarators(ApexParser.VariableDeclaratorsContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#variableDeclarators}.
	 * @param ctx the parse tree
	 */
	void exitVariableDeclarators(ApexParser.VariableDeclaratorsContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#variableDeclarator}.
	 * @param ctx the parse tree
	 */
	void enterVariableDeclarator(ApexParser.VariableDeclaratorContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#variableDeclarator}.
	 * @param ctx the parse tree
	 */
	void exitVariableDeclarator(ApexParser.VariableDeclaratorContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#arrayInitializer}.
	 * @param ctx the parse tree
	 */
	void enterArrayInitializer(ApexParser.ArrayInitializerContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#arrayInitializer}.
	 * @param ctx the parse tree
	 */
	void exitArrayInitializer(ApexParser.ArrayInitializerContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#typeRef}.
	 * @param ctx the parse tree
	 */
	void enterTypeRef(ApexParser.TypeRefContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#typeRef}.
	 * @param ctx the parse tree
	 */
	void exitTypeRef(ApexParser.TypeRefContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#arraySubscripts}.
	 * @param ctx the parse tree
	 */
	void enterArraySubscripts(ApexParser.ArraySubscriptsContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#arraySubscripts}.
	 * @param ctx the parse tree
	 */
	void exitArraySubscripts(ApexParser.ArraySubscriptsContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#typeName}.
	 * @param ctx the parse tree
	 */
	void enterTypeName(ApexParser.TypeNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#typeName}.
	 * @param ctx the parse tree
	 */
	void exitTypeName(ApexParser.TypeNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#typeArguments}.
	 * @param ctx the parse tree
	 */
	void enterTypeArguments(ApexParser.TypeArgumentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#typeArguments}.
	 * @param ctx the parse tree
	 */
	void exitTypeArguments(ApexParser.TypeArgumentsContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#formalParameters}.
	 * @param ctx the parse tree
	 */
	void enterFormalParameters(ApexParser.FormalParametersContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#formalParameters}.
	 * @param ctx the parse tree
	 */
	void exitFormalParameters(ApexParser.FormalParametersContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#formalParameterList}.
	 * @param ctx the parse tree
	 */
	void enterFormalParameterList(ApexParser.FormalParameterListContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#formalParameterList}.
	 * @param ctx the parse tree
	 */
	void exitFormalParameterList(ApexParser.FormalParameterListContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#formalParameter}.
	 * @param ctx the parse tree
	 */
	void enterFormalParameter(ApexParser.FormalParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#formalParameter}.
	 * @param ctx the parse tree
	 */
	void exitFormalParameter(ApexParser.FormalParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#qualifiedName}.
	 * @param ctx the parse tree
	 */
	void enterQualifiedName(ApexParser.QualifiedNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#qualifiedName}.
	 * @param ctx the parse tree
	 */
	void exitQualifiedName(ApexParser.QualifiedNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#literal}.
	 * @param ctx the parse tree
	 */
	void enterLiteral(ApexParser.LiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#literal}.
	 * @param ctx the parse tree
	 */
	void exitLiteral(ApexParser.LiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#annotation}.
	 * @param ctx the parse tree
	 */
	void enterAnnotation(ApexParser.AnnotationContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#annotation}.
	 * @param ctx the parse tree
	 */
	void exitAnnotation(ApexParser.AnnotationContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#elementValuePairs}.
	 * @param ctx the parse tree
	 */
	void enterElementValuePairs(ApexParser.ElementValuePairsContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#elementValuePairs}.
	 * @param ctx the parse tree
	 */
	void exitElementValuePairs(ApexParser.ElementValuePairsContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#elementValuePair}.
	 * @param ctx the parse tree
	 */
	void enterElementValuePair(ApexParser.ElementValuePairContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#elementValuePair}.
	 * @param ctx the parse tree
	 */
	void exitElementValuePair(ApexParser.ElementValuePairContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#elementValue}.
	 * @param ctx the parse tree
	 */
	void enterElementValue(ApexParser.ElementValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#elementValue}.
	 * @param ctx the parse tree
	 */
	void exitElementValue(ApexParser.ElementValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#elementValueArrayInitializer}.
	 * @param ctx the parse tree
	 */
	void enterElementValueArrayInitializer(ApexParser.ElementValueArrayInitializerContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#elementValueArrayInitializer}.
	 * @param ctx the parse tree
	 */
	void exitElementValueArrayInitializer(ApexParser.ElementValueArrayInitializerContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(ApexParser.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(ApexParser.BlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#localVariableDeclarationStatement}.
	 * @param ctx the parse tree
	 */
	void enterLocalVariableDeclarationStatement(ApexParser.LocalVariableDeclarationStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#localVariableDeclarationStatement}.
	 * @param ctx the parse tree
	 */
	void exitLocalVariableDeclarationStatement(ApexParser.LocalVariableDeclarationStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#localVariableDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterLocalVariableDeclaration(ApexParser.LocalVariableDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#localVariableDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitLocalVariableDeclaration(ApexParser.LocalVariableDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(ApexParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(ApexParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#ifStatement}.
	 * @param ctx the parse tree
	 */
	void enterIfStatement(ApexParser.IfStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#ifStatement}.
	 * @param ctx the parse tree
	 */
	void exitIfStatement(ApexParser.IfStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#switchStatement}.
	 * @param ctx the parse tree
	 */
	void enterSwitchStatement(ApexParser.SwitchStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#switchStatement}.
	 * @param ctx the parse tree
	 */
	void exitSwitchStatement(ApexParser.SwitchStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#whenControl}.
	 * @param ctx the parse tree
	 */
	void enterWhenControl(ApexParser.WhenControlContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#whenControl}.
	 * @param ctx the parse tree
	 */
	void exitWhenControl(ApexParser.WhenControlContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#whenValue}.
	 * @param ctx the parse tree
	 */
	void enterWhenValue(ApexParser.WhenValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#whenValue}.
	 * @param ctx the parse tree
	 */
	void exitWhenValue(ApexParser.WhenValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#whenLiteral}.
	 * @param ctx the parse tree
	 */
	void enterWhenLiteral(ApexParser.WhenLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#whenLiteral}.
	 * @param ctx the parse tree
	 */
	void exitWhenLiteral(ApexParser.WhenLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#forStatement}.
	 * @param ctx the parse tree
	 */
	void enterForStatement(ApexParser.ForStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#forStatement}.
	 * @param ctx the parse tree
	 */
	void exitForStatement(ApexParser.ForStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#whileStatement}.
	 * @param ctx the parse tree
	 */
	void enterWhileStatement(ApexParser.WhileStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#whileStatement}.
	 * @param ctx the parse tree
	 */
	void exitWhileStatement(ApexParser.WhileStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#doWhileStatement}.
	 * @param ctx the parse tree
	 */
	void enterDoWhileStatement(ApexParser.DoWhileStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#doWhileStatement}.
	 * @param ctx the parse tree
	 */
	void exitDoWhileStatement(ApexParser.DoWhileStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#tryStatement}.
	 * @param ctx the parse tree
	 */
	void enterTryStatement(ApexParser.TryStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#tryStatement}.
	 * @param ctx the parse tree
	 */
	void exitTryStatement(ApexParser.TryStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#returnStatement}.
	 * @param ctx the parse tree
	 */
	void enterReturnStatement(ApexParser.ReturnStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#returnStatement}.
	 * @param ctx the parse tree
	 */
	void exitReturnStatement(ApexParser.ReturnStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#throwStatement}.
	 * @param ctx the parse tree
	 */
	void enterThrowStatement(ApexParser.ThrowStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#throwStatement}.
	 * @param ctx the parse tree
	 */
	void exitThrowStatement(ApexParser.ThrowStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#breakStatement}.
	 * @param ctx the parse tree
	 */
	void enterBreakStatement(ApexParser.BreakStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#breakStatement}.
	 * @param ctx the parse tree
	 */
	void exitBreakStatement(ApexParser.BreakStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#continueStatement}.
	 * @param ctx the parse tree
	 */
	void enterContinueStatement(ApexParser.ContinueStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#continueStatement}.
	 * @param ctx the parse tree
	 */
	void exitContinueStatement(ApexParser.ContinueStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#insertStatement}.
	 * @param ctx the parse tree
	 */
	void enterInsertStatement(ApexParser.InsertStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#insertStatement}.
	 * @param ctx the parse tree
	 */
	void exitInsertStatement(ApexParser.InsertStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#updateStatement}.
	 * @param ctx the parse tree
	 */
	void enterUpdateStatement(ApexParser.UpdateStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#updateStatement}.
	 * @param ctx the parse tree
	 */
	void exitUpdateStatement(ApexParser.UpdateStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#deleteStatement}.
	 * @param ctx the parse tree
	 */
	void enterDeleteStatement(ApexParser.DeleteStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#deleteStatement}.
	 * @param ctx the parse tree
	 */
	void exitDeleteStatement(ApexParser.DeleteStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#undeleteStatement}.
	 * @param ctx the parse tree
	 */
	void enterUndeleteStatement(ApexParser.UndeleteStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#undeleteStatement}.
	 * @param ctx the parse tree
	 */
	void exitUndeleteStatement(ApexParser.UndeleteStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#upsertStatement}.
	 * @param ctx the parse tree
	 */
	void enterUpsertStatement(ApexParser.UpsertStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#upsertStatement}.
	 * @param ctx the parse tree
	 */
	void exitUpsertStatement(ApexParser.UpsertStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#mergeStatement}.
	 * @param ctx the parse tree
	 */
	void enterMergeStatement(ApexParser.MergeStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#mergeStatement}.
	 * @param ctx the parse tree
	 */
	void exitMergeStatement(ApexParser.MergeStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#runAsStatement}.
	 * @param ctx the parse tree
	 */
	void enterRunAsStatement(ApexParser.RunAsStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#runAsStatement}.
	 * @param ctx the parse tree
	 */
	void exitRunAsStatement(ApexParser.RunAsStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#expressionStatement}.
	 * @param ctx the parse tree
	 */
	void enterExpressionStatement(ApexParser.ExpressionStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#expressionStatement}.
	 * @param ctx the parse tree
	 */
	void exitExpressionStatement(ApexParser.ExpressionStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#propertyBlock}.
	 * @param ctx the parse tree
	 */
	void enterPropertyBlock(ApexParser.PropertyBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#propertyBlock}.
	 * @param ctx the parse tree
	 */
	void exitPropertyBlock(ApexParser.PropertyBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#getter}.
	 * @param ctx the parse tree
	 */
	void enterGetter(ApexParser.GetterContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#getter}.
	 * @param ctx the parse tree
	 */
	void exitGetter(ApexParser.GetterContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#setter}.
	 * @param ctx the parse tree
	 */
	void enterSetter(ApexParser.SetterContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#setter}.
	 * @param ctx the parse tree
	 */
	void exitSetter(ApexParser.SetterContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#catchClause}.
	 * @param ctx the parse tree
	 */
	void enterCatchClause(ApexParser.CatchClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#catchClause}.
	 * @param ctx the parse tree
	 */
	void exitCatchClause(ApexParser.CatchClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#finallyBlock}.
	 * @param ctx the parse tree
	 */
	void enterFinallyBlock(ApexParser.FinallyBlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#finallyBlock}.
	 * @param ctx the parse tree
	 */
	void exitFinallyBlock(ApexParser.FinallyBlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#forControl}.
	 * @param ctx the parse tree
	 */
	void enterForControl(ApexParser.ForControlContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#forControl}.
	 * @param ctx the parse tree
	 */
	void exitForControl(ApexParser.ForControlContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#forInit}.
	 * @param ctx the parse tree
	 */
	void enterForInit(ApexParser.ForInitContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#forInit}.
	 * @param ctx the parse tree
	 */
	void exitForInit(ApexParser.ForInitContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#enhancedForControl}.
	 * @param ctx the parse tree
	 */
	void enterEnhancedForControl(ApexParser.EnhancedForControlContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#enhancedForControl}.
	 * @param ctx the parse tree
	 */
	void exitEnhancedForControl(ApexParser.EnhancedForControlContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#forUpdate}.
	 * @param ctx the parse tree
	 */
	void enterForUpdate(ApexParser.ForUpdateContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#forUpdate}.
	 * @param ctx the parse tree
	 */
	void exitForUpdate(ApexParser.ForUpdateContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#parExpression}.
	 * @param ctx the parse tree
	 */
	void enterParExpression(ApexParser.ParExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#parExpression}.
	 * @param ctx the parse tree
	 */
	void exitParExpression(ApexParser.ParExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#expressionList}.
	 * @param ctx the parse tree
	 */
	void enterExpressionList(ApexParser.ExpressionListContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#expressionList}.
	 * @param ctx the parse tree
	 */
	void exitExpressionList(ApexParser.ExpressionListContext ctx);
	/**
	 * Enter a parse tree produced by the {@code primaryExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterPrimaryExpression(ApexParser.PrimaryExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code primaryExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitPrimaryExpression(ApexParser.PrimaryExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code arth1Expression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterArth1Expression(ApexParser.Arth1ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code arth1Expression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitArth1Expression(ApexParser.Arth1ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code dotExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterDotExpression(ApexParser.DotExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code dotExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitDotExpression(ApexParser.DotExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code bitOrExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterBitOrExpression(ApexParser.BitOrExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code bitOrExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitBitOrExpression(ApexParser.BitOrExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code arrayExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterArrayExpression(ApexParser.ArrayExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code arrayExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitArrayExpression(ApexParser.ArrayExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code newExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterNewExpression(ApexParser.NewExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code newExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitNewExpression(ApexParser.NewExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code assignExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterAssignExpression(ApexParser.AssignExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code assignExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitAssignExpression(ApexParser.AssignExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code methodCallExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterMethodCallExpression(ApexParser.MethodCallExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code methodCallExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitMethodCallExpression(ApexParser.MethodCallExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code bitNotExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterBitNotExpression(ApexParser.BitNotExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code bitNotExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitBitNotExpression(ApexParser.BitNotExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code arth2Expression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterArth2Expression(ApexParser.Arth2ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code arth2Expression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitArth2Expression(ApexParser.Arth2ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code logAndExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterLogAndExpression(ApexParser.LogAndExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code logAndExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitLogAndExpression(ApexParser.LogAndExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code castExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterCastExpression(ApexParser.CastExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code castExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitCastExpression(ApexParser.CastExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code bitAndExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterBitAndExpression(ApexParser.BitAndExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code bitAndExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitBitAndExpression(ApexParser.BitAndExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code cmpExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterCmpExpression(ApexParser.CmpExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code cmpExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitCmpExpression(ApexParser.CmpExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code bitExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterBitExpression(ApexParser.BitExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code bitExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitBitExpression(ApexParser.BitExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code logOrExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterLogOrExpression(ApexParser.LogOrExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code logOrExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitLogOrExpression(ApexParser.LogOrExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code condExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterCondExpression(ApexParser.CondExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code condExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitCondExpression(ApexParser.CondExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code equalityExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterEqualityExpression(ApexParser.EqualityExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code equalityExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitEqualityExpression(ApexParser.EqualityExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code postOpExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterPostOpExpression(ApexParser.PostOpExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code postOpExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitPostOpExpression(ApexParser.PostOpExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code negExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterNegExpression(ApexParser.NegExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code negExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitNegExpression(ApexParser.NegExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code preOpExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterPreOpExpression(ApexParser.PreOpExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code preOpExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitPreOpExpression(ApexParser.PreOpExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code subExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterSubExpression(ApexParser.SubExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code subExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitSubExpression(ApexParser.SubExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code instanceOfExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterInstanceOfExpression(ApexParser.InstanceOfExpressionContext ctx);
	/**
	 * Exit a parse tree produced by the {@code instanceOfExpression}
	 * labeled alternative in {@link ApexParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitInstanceOfExpression(ApexParser.InstanceOfExpressionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code thisPrimary}
	 * labeled alternative in {@link ApexParser#primary}.
	 * @param ctx the parse tree
	 */
	void enterThisPrimary(ApexParser.ThisPrimaryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code thisPrimary}
	 * labeled alternative in {@link ApexParser#primary}.
	 * @param ctx the parse tree
	 */
	void exitThisPrimary(ApexParser.ThisPrimaryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code superPrimary}
	 * labeled alternative in {@link ApexParser#primary}.
	 * @param ctx the parse tree
	 */
	void enterSuperPrimary(ApexParser.SuperPrimaryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code superPrimary}
	 * labeled alternative in {@link ApexParser#primary}.
	 * @param ctx the parse tree
	 */
	void exitSuperPrimary(ApexParser.SuperPrimaryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code literalPrimary}
	 * labeled alternative in {@link ApexParser#primary}.
	 * @param ctx the parse tree
	 */
	void enterLiteralPrimary(ApexParser.LiteralPrimaryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code literalPrimary}
	 * labeled alternative in {@link ApexParser#primary}.
	 * @param ctx the parse tree
	 */
	void exitLiteralPrimary(ApexParser.LiteralPrimaryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code typeRefPrimary}
	 * labeled alternative in {@link ApexParser#primary}.
	 * @param ctx the parse tree
	 */
	void enterTypeRefPrimary(ApexParser.TypeRefPrimaryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code typeRefPrimary}
	 * labeled alternative in {@link ApexParser#primary}.
	 * @param ctx the parse tree
	 */
	void exitTypeRefPrimary(ApexParser.TypeRefPrimaryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code idPrimary}
	 * labeled alternative in {@link ApexParser#primary}.
	 * @param ctx the parse tree
	 */
	void enterIdPrimary(ApexParser.IdPrimaryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code idPrimary}
	 * labeled alternative in {@link ApexParser#primary}.
	 * @param ctx the parse tree
	 */
	void exitIdPrimary(ApexParser.IdPrimaryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code soqlPrimary}
	 * labeled alternative in {@link ApexParser#primary}.
	 * @param ctx the parse tree
	 */
	void enterSoqlPrimary(ApexParser.SoqlPrimaryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code soqlPrimary}
	 * labeled alternative in {@link ApexParser#primary}.
	 * @param ctx the parse tree
	 */
	void exitSoqlPrimary(ApexParser.SoqlPrimaryContext ctx);
	/**
	 * Enter a parse tree produced by the {@code soslPrimary}
	 * labeled alternative in {@link ApexParser#primary}.
	 * @param ctx the parse tree
	 */
	void enterSoslPrimary(ApexParser.SoslPrimaryContext ctx);
	/**
	 * Exit a parse tree produced by the {@code soslPrimary}
	 * labeled alternative in {@link ApexParser#primary}.
	 * @param ctx the parse tree
	 */
	void exitSoslPrimary(ApexParser.SoslPrimaryContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#methodCall}.
	 * @param ctx the parse tree
	 */
	void enterMethodCall(ApexParser.MethodCallContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#methodCall}.
	 * @param ctx the parse tree
	 */
	void exitMethodCall(ApexParser.MethodCallContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#dotMethodCall}.
	 * @param ctx the parse tree
	 */
	void enterDotMethodCall(ApexParser.DotMethodCallContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#dotMethodCall}.
	 * @param ctx the parse tree
	 */
	void exitDotMethodCall(ApexParser.DotMethodCallContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#creator}.
	 * @param ctx the parse tree
	 */
	void enterCreator(ApexParser.CreatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#creator}.
	 * @param ctx the parse tree
	 */
	void exitCreator(ApexParser.CreatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#createdName}.
	 * @param ctx the parse tree
	 */
	void enterCreatedName(ApexParser.CreatedNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#createdName}.
	 * @param ctx the parse tree
	 */
	void exitCreatedName(ApexParser.CreatedNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#idCreatedNamePair}.
	 * @param ctx the parse tree
	 */
	void enterIdCreatedNamePair(ApexParser.IdCreatedNamePairContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#idCreatedNamePair}.
	 * @param ctx the parse tree
	 */
	void exitIdCreatedNamePair(ApexParser.IdCreatedNamePairContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#noRest}.
	 * @param ctx the parse tree
	 */
	void enterNoRest(ApexParser.NoRestContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#noRest}.
	 * @param ctx the parse tree
	 */
	void exitNoRest(ApexParser.NoRestContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#classCreatorRest}.
	 * @param ctx the parse tree
	 */
	void enterClassCreatorRest(ApexParser.ClassCreatorRestContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#classCreatorRest}.
	 * @param ctx the parse tree
	 */
	void exitClassCreatorRest(ApexParser.ClassCreatorRestContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#arrayCreatorRest}.
	 * @param ctx the parse tree
	 */
	void enterArrayCreatorRest(ApexParser.ArrayCreatorRestContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#arrayCreatorRest}.
	 * @param ctx the parse tree
	 */
	void exitArrayCreatorRest(ApexParser.ArrayCreatorRestContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#mapCreatorRest}.
	 * @param ctx the parse tree
	 */
	void enterMapCreatorRest(ApexParser.MapCreatorRestContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#mapCreatorRest}.
	 * @param ctx the parse tree
	 */
	void exitMapCreatorRest(ApexParser.MapCreatorRestContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#mapCreatorRestPair}.
	 * @param ctx the parse tree
	 */
	void enterMapCreatorRestPair(ApexParser.MapCreatorRestPairContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#mapCreatorRestPair}.
	 * @param ctx the parse tree
	 */
	void exitMapCreatorRestPair(ApexParser.MapCreatorRestPairContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#setCreatorRest}.
	 * @param ctx the parse tree
	 */
	void enterSetCreatorRest(ApexParser.SetCreatorRestContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#setCreatorRest}.
	 * @param ctx the parse tree
	 */
	void exitSetCreatorRest(ApexParser.SetCreatorRestContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#arguments}.
	 * @param ctx the parse tree
	 */
	void enterArguments(ApexParser.ArgumentsContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#arguments}.
	 * @param ctx the parse tree
	 */
	void exitArguments(ApexParser.ArgumentsContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#soqlLiteral}.
	 * @param ctx the parse tree
	 */
	void enterSoqlLiteral(ApexParser.SoqlLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#soqlLiteral}.
	 * @param ctx the parse tree
	 */
	void exitSoqlLiteral(ApexParser.SoqlLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#query}.
	 * @param ctx the parse tree
	 */
	void enterQuery(ApexParser.QueryContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#query}.
	 * @param ctx the parse tree
	 */
	void exitQuery(ApexParser.QueryContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#subQuery}.
	 * @param ctx the parse tree
	 */
	void enterSubQuery(ApexParser.SubQueryContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#subQuery}.
	 * @param ctx the parse tree
	 */
	void exitSubQuery(ApexParser.SubQueryContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#selectList}.
	 * @param ctx the parse tree
	 */
	void enterSelectList(ApexParser.SelectListContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#selectList}.
	 * @param ctx the parse tree
	 */
	void exitSelectList(ApexParser.SelectListContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#selectEntry}.
	 * @param ctx the parse tree
	 */
	void enterSelectEntry(ApexParser.SelectEntryContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#selectEntry}.
	 * @param ctx the parse tree
	 */
	void exitSelectEntry(ApexParser.SelectEntryContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#fieldName}.
	 * @param ctx the parse tree
	 */
	void enterFieldName(ApexParser.FieldNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#fieldName}.
	 * @param ctx the parse tree
	 */
	void exitFieldName(ApexParser.FieldNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#fromNameList}.
	 * @param ctx the parse tree
	 */
	void enterFromNameList(ApexParser.FromNameListContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#fromNameList}.
	 * @param ctx the parse tree
	 */
	void exitFromNameList(ApexParser.FromNameListContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#subFieldList}.
	 * @param ctx the parse tree
	 */
	void enterSubFieldList(ApexParser.SubFieldListContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#subFieldList}.
	 * @param ctx the parse tree
	 */
	void exitSubFieldList(ApexParser.SubFieldListContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#subFieldEntry}.
	 * @param ctx the parse tree
	 */
	void enterSubFieldEntry(ApexParser.SubFieldEntryContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#subFieldEntry}.
	 * @param ctx the parse tree
	 */
	void exitSubFieldEntry(ApexParser.SubFieldEntryContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#soqlFieldsParameter}.
	 * @param ctx the parse tree
	 */
	void enterSoqlFieldsParameter(ApexParser.SoqlFieldsParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#soqlFieldsParameter}.
	 * @param ctx the parse tree
	 */
	void exitSoqlFieldsParameter(ApexParser.SoqlFieldsParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#soqlFunction}.
	 * @param ctx the parse tree
	 */
	void enterSoqlFunction(ApexParser.SoqlFunctionContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#soqlFunction}.
	 * @param ctx the parse tree
	 */
	void exitSoqlFunction(ApexParser.SoqlFunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#dateFieldName}.
	 * @param ctx the parse tree
	 */
	void enterDateFieldName(ApexParser.DateFieldNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#dateFieldName}.
	 * @param ctx the parse tree
	 */
	void exitDateFieldName(ApexParser.DateFieldNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#typeOf}.
	 * @param ctx the parse tree
	 */
	void enterTypeOf(ApexParser.TypeOfContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#typeOf}.
	 * @param ctx the parse tree
	 */
	void exitTypeOf(ApexParser.TypeOfContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#whenClause}.
	 * @param ctx the parse tree
	 */
	void enterWhenClause(ApexParser.WhenClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#whenClause}.
	 * @param ctx the parse tree
	 */
	void exitWhenClause(ApexParser.WhenClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#elseClause}.
	 * @param ctx the parse tree
	 */
	void enterElseClause(ApexParser.ElseClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#elseClause}.
	 * @param ctx the parse tree
	 */
	void exitElseClause(ApexParser.ElseClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#fieldNameList}.
	 * @param ctx the parse tree
	 */
	void enterFieldNameList(ApexParser.FieldNameListContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#fieldNameList}.
	 * @param ctx the parse tree
	 */
	void exitFieldNameList(ApexParser.FieldNameListContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#usingScope}.
	 * @param ctx the parse tree
	 */
	void enterUsingScope(ApexParser.UsingScopeContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#usingScope}.
	 * @param ctx the parse tree
	 */
	void exitUsingScope(ApexParser.UsingScopeContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#whereClause}.
	 * @param ctx the parse tree
	 */
	void enterWhereClause(ApexParser.WhereClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#whereClause}.
	 * @param ctx the parse tree
	 */
	void exitWhereClause(ApexParser.WhereClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#logicalExpression}.
	 * @param ctx the parse tree
	 */
	void enterLogicalExpression(ApexParser.LogicalExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#logicalExpression}.
	 * @param ctx the parse tree
	 */
	void exitLogicalExpression(ApexParser.LogicalExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#conditionalExpression}.
	 * @param ctx the parse tree
	 */
	void enterConditionalExpression(ApexParser.ConditionalExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#conditionalExpression}.
	 * @param ctx the parse tree
	 */
	void exitConditionalExpression(ApexParser.ConditionalExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#fieldExpression}.
	 * @param ctx the parse tree
	 */
	void enterFieldExpression(ApexParser.FieldExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#fieldExpression}.
	 * @param ctx the parse tree
	 */
	void exitFieldExpression(ApexParser.FieldExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#comparisonOperator}.
	 * @param ctx the parse tree
	 */
	void enterComparisonOperator(ApexParser.ComparisonOperatorContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#comparisonOperator}.
	 * @param ctx the parse tree
	 */
	void exitComparisonOperator(ApexParser.ComparisonOperatorContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#value}.
	 * @param ctx the parse tree
	 */
	void enterValue(ApexParser.ValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#value}.
	 * @param ctx the parse tree
	 */
	void exitValue(ApexParser.ValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#valueList}.
	 * @param ctx the parse tree
	 */
	void enterValueList(ApexParser.ValueListContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#valueList}.
	 * @param ctx the parse tree
	 */
	void exitValueList(ApexParser.ValueListContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#currencyValue}.
	 * @param ctx the parse tree
	 */
	void enterCurrencyValue(ApexParser.CurrencyValueContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#currencyValue}.
	 * @param ctx the parse tree
	 */
	void exitCurrencyValue(ApexParser.CurrencyValueContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#withClause}.
	 * @param ctx the parse tree
	 */
	void enterWithClause(ApexParser.WithClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#withClause}.
	 * @param ctx the parse tree
	 */
	void exitWithClause(ApexParser.WithClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#filteringExpression}.
	 * @param ctx the parse tree
	 */
	void enterFilteringExpression(ApexParser.FilteringExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#filteringExpression}.
	 * @param ctx the parse tree
	 */
	void exitFilteringExpression(ApexParser.FilteringExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#dataCategorySelection}.
	 * @param ctx the parse tree
	 */
	void enterDataCategorySelection(ApexParser.DataCategorySelectionContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#dataCategorySelection}.
	 * @param ctx the parse tree
	 */
	void exitDataCategorySelection(ApexParser.DataCategorySelectionContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#dataCategoryName}.
	 * @param ctx the parse tree
	 */
	void enterDataCategoryName(ApexParser.DataCategoryNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#dataCategoryName}.
	 * @param ctx the parse tree
	 */
	void exitDataCategoryName(ApexParser.DataCategoryNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#filteringSelector}.
	 * @param ctx the parse tree
	 */
	void enterFilteringSelector(ApexParser.FilteringSelectorContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#filteringSelector}.
	 * @param ctx the parse tree
	 */
	void exitFilteringSelector(ApexParser.FilteringSelectorContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#groupByClause}.
	 * @param ctx the parse tree
	 */
	void enterGroupByClause(ApexParser.GroupByClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#groupByClause}.
	 * @param ctx the parse tree
	 */
	void exitGroupByClause(ApexParser.GroupByClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#orderByClause}.
	 * @param ctx the parse tree
	 */
	void enterOrderByClause(ApexParser.OrderByClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#orderByClause}.
	 * @param ctx the parse tree
	 */
	void exitOrderByClause(ApexParser.OrderByClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#fieldOrderList}.
	 * @param ctx the parse tree
	 */
	void enterFieldOrderList(ApexParser.FieldOrderListContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#fieldOrderList}.
	 * @param ctx the parse tree
	 */
	void exitFieldOrderList(ApexParser.FieldOrderListContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#fieldOrder}.
	 * @param ctx the parse tree
	 */
	void enterFieldOrder(ApexParser.FieldOrderContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#fieldOrder}.
	 * @param ctx the parse tree
	 */
	void exitFieldOrder(ApexParser.FieldOrderContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#limitClause}.
	 * @param ctx the parse tree
	 */
	void enterLimitClause(ApexParser.LimitClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#limitClause}.
	 * @param ctx the parse tree
	 */
	void exitLimitClause(ApexParser.LimitClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#offsetClause}.
	 * @param ctx the parse tree
	 */
	void enterOffsetClause(ApexParser.OffsetClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#offsetClause}.
	 * @param ctx the parse tree
	 */
	void exitOffsetClause(ApexParser.OffsetClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#allRowsClause}.
	 * @param ctx the parse tree
	 */
	void enterAllRowsClause(ApexParser.AllRowsClauseContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#allRowsClause}.
	 * @param ctx the parse tree
	 */
	void exitAllRowsClause(ApexParser.AllRowsClauseContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#forClauses}.
	 * @param ctx the parse tree
	 */
	void enterForClauses(ApexParser.ForClausesContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#forClauses}.
	 * @param ctx the parse tree
	 */
	void exitForClauses(ApexParser.ForClausesContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#boundExpression}.
	 * @param ctx the parse tree
	 */
	void enterBoundExpression(ApexParser.BoundExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#boundExpression}.
	 * @param ctx the parse tree
	 */
	void exitBoundExpression(ApexParser.BoundExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#dateFormula}.
	 * @param ctx the parse tree
	 */
	void enterDateFormula(ApexParser.DateFormulaContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#dateFormula}.
	 * @param ctx the parse tree
	 */
	void exitDateFormula(ApexParser.DateFormulaContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#signedInteger}.
	 * @param ctx the parse tree
	 */
	void enterSignedInteger(ApexParser.SignedIntegerContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#signedInteger}.
	 * @param ctx the parse tree
	 */
	void exitSignedInteger(ApexParser.SignedIntegerContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#soqlId}.
	 * @param ctx the parse tree
	 */
	void enterSoqlId(ApexParser.SoqlIdContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#soqlId}.
	 * @param ctx the parse tree
	 */
	void exitSoqlId(ApexParser.SoqlIdContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#soslLiteral}.
	 * @param ctx the parse tree
	 */
	void enterSoslLiteral(ApexParser.SoslLiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#soslLiteral}.
	 * @param ctx the parse tree
	 */
	void exitSoslLiteral(ApexParser.SoslLiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#soslClauses}.
	 * @param ctx the parse tree
	 */
	void enterSoslClauses(ApexParser.SoslClausesContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#soslClauses}.
	 * @param ctx the parse tree
	 */
	void exitSoslClauses(ApexParser.SoslClausesContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#searchGroup}.
	 * @param ctx the parse tree
	 */
	void enterSearchGroup(ApexParser.SearchGroupContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#searchGroup}.
	 * @param ctx the parse tree
	 */
	void exitSearchGroup(ApexParser.SearchGroupContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#fieldSpecList}.
	 * @param ctx the parse tree
	 */
	void enterFieldSpecList(ApexParser.FieldSpecListContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#fieldSpecList}.
	 * @param ctx the parse tree
	 */
	void exitFieldSpecList(ApexParser.FieldSpecListContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#fieldSpec}.
	 * @param ctx the parse tree
	 */
	void enterFieldSpec(ApexParser.FieldSpecContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#fieldSpec}.
	 * @param ctx the parse tree
	 */
	void exitFieldSpec(ApexParser.FieldSpecContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#fieldList}.
	 * @param ctx the parse tree
	 */
	void enterFieldList(ApexParser.FieldListContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#fieldList}.
	 * @param ctx the parse tree
	 */
	void exitFieldList(ApexParser.FieldListContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#updateList}.
	 * @param ctx the parse tree
	 */
	void enterUpdateList(ApexParser.UpdateListContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#updateList}.
	 * @param ctx the parse tree
	 */
	void exitUpdateList(ApexParser.UpdateListContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#updateType}.
	 * @param ctx the parse tree
	 */
	void enterUpdateType(ApexParser.UpdateTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#updateType}.
	 * @param ctx the parse tree
	 */
	void exitUpdateType(ApexParser.UpdateTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#networkList}.
	 * @param ctx the parse tree
	 */
	void enterNetworkList(ApexParser.NetworkListContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#networkList}.
	 * @param ctx the parse tree
	 */
	void exitNetworkList(ApexParser.NetworkListContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#soslId}.
	 * @param ctx the parse tree
	 */
	void enterSoslId(ApexParser.SoslIdContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#soslId}.
	 * @param ctx the parse tree
	 */
	void exitSoslId(ApexParser.SoslIdContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#id}.
	 * @param ctx the parse tree
	 */
	void enterId(ApexParser.IdContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#id}.
	 * @param ctx the parse tree
	 */
	void exitId(ApexParser.IdContext ctx);
	/**
	 * Enter a parse tree produced by {@link ApexParser#anyId}.
	 * @param ctx the parse tree
	 */
	void enterAnyId(ApexParser.AnyIdContext ctx);
	/**
	 * Exit a parse tree produced by {@link ApexParser#anyId}.
	 * @param ctx the parse tree
	 */
	void exitAnyId(ApexParser.AnyIdContext ctx);
}
