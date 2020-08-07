// Generated from ApexParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { SubPrimaryContext } from "./ApexParser";
import { ThisPrimaryContext } from "./ApexParser";
import { SuperPrimaryContext } from "./ApexParser";
import { LiteralPrimaryContext } from "./ApexParser";
import { TypeRefPrimaryContext } from "./ApexParser";
import { IdPrimaryContext } from "./ApexParser";
import { SoqlPrimaryContext } from "./ApexParser";
import { PrimaryExpressionContext } from "./ApexParser";
import { DotExpressionContext } from "./ApexParser";
import { ArrayExpressionContext } from "./ApexParser";
import { MethodCallExpressionContext } from "./ApexParser";
import { NewExpressionContext } from "./ApexParser";
import { CastExpressionContext } from "./ApexParser";
import { PostOpExpressionContext } from "./ApexParser";
import { PreOpExpressionContext } from "./ApexParser";
import { NegExpressionContext } from "./ApexParser";
import { Arth1ExpressionContext } from "./ApexParser";
import { Arth2ExpressionContext } from "./ApexParser";
import { BitExpressionContext } from "./ApexParser";
import { CmpExpressionContext } from "./ApexParser";
import { InstanceOfExpressionContext } from "./ApexParser";
import { EqualityExpressionContext } from "./ApexParser";
import { BitAndExpressionContext } from "./ApexParser";
import { BitNotExpressionContext } from "./ApexParser";
import { BitOrExpressionContext } from "./ApexParser";
import { LogAndExpressionContext } from "./ApexParser";
import { LogOrExpressionContext } from "./ApexParser";
import { CondExpressionContext } from "./ApexParser";
import { AssignExpressionContext } from "./ApexParser";
import { TriggerUnitContext } from "./ApexParser";
import { TriggerCaseContext } from "./ApexParser";
import { CompilationUnitContext } from "./ApexParser";
import { TypeDeclarationContext } from "./ApexParser";
import { ClassDeclarationContext } from "./ApexParser";
import { EnumDeclarationContext } from "./ApexParser";
import { EnumConstantsContext } from "./ApexParser";
import { InterfaceDeclarationContext } from "./ApexParser";
import { TypeListContext } from "./ApexParser";
import { ClassBodyContext } from "./ApexParser";
import { InterfaceBodyContext } from "./ApexParser";
import { ClassBodyDeclarationContext } from "./ApexParser";
import { ModifierContext } from "./ApexParser";
import { MemberDeclarationContext } from "./ApexParser";
import { MethodDeclarationContext } from "./ApexParser";
import { ConstructorDeclarationContext } from "./ApexParser";
import { FieldDeclarationContext } from "./ApexParser";
import { PropertyDeclarationContext } from "./ApexParser";
import { InterfaceMethodDeclarationContext } from "./ApexParser";
import { VariableDeclaratorsContext } from "./ApexParser";
import { VariableDeclaratorContext } from "./ApexParser";
import { ArrayInitializerContext } from "./ApexParser";
import { TypeRefContext } from "./ApexParser";
import { ArraySubscriptsContext } from "./ApexParser";
import { TypeNameContext } from "./ApexParser";
import { TypeArgumentsContext } from "./ApexParser";
import { FormalParametersContext } from "./ApexParser";
import { FormalParameterListContext } from "./ApexParser";
import { FormalParameterContext } from "./ApexParser";
import { QualifiedNameContext } from "./ApexParser";
import { LiteralContext } from "./ApexParser";
import { AnnotationContext } from "./ApexParser";
import { ElementValuePairsContext } from "./ApexParser";
import { ElementValuePairContext } from "./ApexParser";
import { ElementValueContext } from "./ApexParser";
import { ElementValueArrayInitializerContext } from "./ApexParser";
import { BlockContext } from "./ApexParser";
import { LocalVariableDeclarationStatementContext } from "./ApexParser";
import { LocalVariableDeclarationContext } from "./ApexParser";
import { StatementContext } from "./ApexParser";
import { IfStatementContext } from "./ApexParser";
import { SwitchStatementContext } from "./ApexParser";
import { WhenControlContext } from "./ApexParser";
import { WhenValueContext } from "./ApexParser";
import { WhenLiteralContext } from "./ApexParser";
import { ForStatementContext } from "./ApexParser";
import { WhileStatementContext } from "./ApexParser";
import { DoWhileStatementContext } from "./ApexParser";
import { TryStatementContext } from "./ApexParser";
import { ReturnStatementContext } from "./ApexParser";
import { ThrowStatementContext } from "./ApexParser";
import { BreakStatementContext } from "./ApexParser";
import { ContinueStatementContext } from "./ApexParser";
import { InsertStatementContext } from "./ApexParser";
import { UpdateStatementContext } from "./ApexParser";
import { DeleteStatementContext } from "./ApexParser";
import { UndeleteStatementContext } from "./ApexParser";
import { UpsertStatementContext } from "./ApexParser";
import { MergeStatementContext } from "./ApexParser";
import { RunAsStatementContext } from "./ApexParser";
import { ExpressionStatementContext } from "./ApexParser";
import { PropertyBlockContext } from "./ApexParser";
import { GetterContext } from "./ApexParser";
import { SetterContext } from "./ApexParser";
import { CatchClauseContext } from "./ApexParser";
import { FinallyBlockContext } from "./ApexParser";
import { ForControlContext } from "./ApexParser";
import { ForInitContext } from "./ApexParser";
import { EnhancedForControlContext } from "./ApexParser";
import { ForUpdateContext } from "./ApexParser";
import { ParExpressionContext } from "./ApexParser";
import { ExpressionListContext } from "./ApexParser";
import { ExpressionContext } from "./ApexParser";
import { PrimaryContext } from "./ApexParser";
import { MethodCallContext } from "./ApexParser";
import { DotMethodCallContext } from "./ApexParser";
import { CreatorContext } from "./ApexParser";
import { CreatedNameContext } from "./ApexParser";
import { IdCreatedNamePairContext } from "./ApexParser";
import { NoRestContext } from "./ApexParser";
import { ClassCreatorRestContext } from "./ApexParser";
import { ArrayCreatorRestContext } from "./ApexParser";
import { MapCreatorRestContext } from "./ApexParser";
import { MapCreatorRestPairContext } from "./ApexParser";
import { SetCreatorRestContext } from "./ApexParser";
import { ArgumentsContext } from "./ApexParser";
import { SoqlLiteralContext } from "./ApexParser";
import { IdContext } from "./ApexParser";
import { AnyIdContext } from "./ApexParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ApexParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ApexParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `subPrimary`
	 * labeled alternative in `ApexParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubPrimary?: (ctx: SubPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `thisPrimary`
	 * labeled alternative in `ApexParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThisPrimary?: (ctx: ThisPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `superPrimary`
	 * labeled alternative in `ApexParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperPrimary?: (ctx: SuperPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `literalPrimary`
	 * labeled alternative in `ApexParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralPrimary?: (ctx: LiteralPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeRefPrimary`
	 * labeled alternative in `ApexParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeRefPrimary?: (ctx: TypeRefPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `idPrimary`
	 * labeled alternative in `ApexParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdPrimary?: (ctx: IdPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `soqlPrimary`
	 * labeled alternative in `ApexParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSoqlPrimary?: (ctx: SoqlPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `primaryExpression`
	 * labeled alternative in `ApexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `dotExpression`
	 * labeled alternative in `ApexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotExpression?: (ctx: DotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `arrayExpression`
	 * labeled alternative in `ApexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayExpression?: (ctx: ArrayExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `methodCallExpression`
	 * labeled alternative in `ApexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodCallExpression?: (ctx: MethodCallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `newExpression`
	 * labeled alternative in `ApexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewExpression?: (ctx: NewExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `castExpression`
	 * labeled alternative in `ApexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastExpression?: (ctx: CastExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `postOpExpression`
	 * labeled alternative in `ApexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostOpExpression?: (ctx: PostOpExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `preOpExpression`
	 * labeled alternative in `ApexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreOpExpression?: (ctx: PreOpExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `negExpression`
	 * labeled alternative in `ApexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegExpression?: (ctx: NegExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `arth1Expression`
	 * labeled alternative in `ApexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArth1Expression?: (ctx: Arth1ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `arth2Expression`
	 * labeled alternative in `ApexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArth2Expression?: (ctx: Arth2ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `bitExpression`
	 * labeled alternative in `ApexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitExpression?: (ctx: BitExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `cmpExpression`
	 * labeled alternative in `ApexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCmpExpression?: (ctx: CmpExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `instanceOfExpression`
	 * labeled alternative in `ApexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceOfExpression?: (ctx: InstanceOfExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `equalityExpression`
	 * labeled alternative in `ApexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `bitAndExpression`
	 * labeled alternative in `ApexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitAndExpression?: (ctx: BitAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `bitNotExpression`
	 * labeled alternative in `ApexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitNotExpression?: (ctx: BitNotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `bitOrExpression`
	 * labeled alternative in `ApexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitOrExpression?: (ctx: BitOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `logAndExpression`
	 * labeled alternative in `ApexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogAndExpression?: (ctx: LogAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `logOrExpression`
	 * labeled alternative in `ApexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogOrExpression?: (ctx: LogOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `condExpression`
	 * labeled alternative in `ApexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondExpression?: (ctx: CondExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `assignExpression`
	 * labeled alternative in `ApexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignExpression?: (ctx: AssignExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.triggerUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerUnit?: (ctx: TriggerUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.triggerCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerCase?: (ctx: TriggerCaseContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.enumDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDeclaration?: (ctx: EnumDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.enumConstants`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstants?: (ctx: EnumConstantsContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.typeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeList?: (ctx: TypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.classBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBody?: (ctx: ClassBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.interfaceBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceBody?: (ctx: InterfaceBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.modifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifier?: (ctx: ModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.memberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberDeclaration?: (ctx: MemberDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.methodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.constructorDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDeclaration?: (ctx: FieldDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.propertyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyDeclaration?: (ctx: PropertyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.interfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.variableDeclarators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.variableDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarator?: (ctx: VariableDeclaratorContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.arrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayInitializer?: (ctx: ArrayInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.typeRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeRef?: (ctx: TypeRefContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.arraySubscripts`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArraySubscripts?: (ctx: ArraySubscriptsContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.typeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeName?: (ctx: TypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.typeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArguments?: (ctx: TypeArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.formalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameters?: (ctx: FormalParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.formalParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterList?: (ctx: FormalParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.formalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameter?: (ctx: FormalParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.elementValuePairs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePairs?: (ctx: ElementValuePairsContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.elementValuePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePair?: (ctx: ElementValuePairContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.elementValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValue?: (ctx: ElementValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.localVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.switchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.whenControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenControl?: (ctx: WhenControlContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.whenValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenValue?: (ctx: WhenValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.whenLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenLiteral?: (ctx: WhenLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.doWhileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoWhileStatement?: (ctx: DoWhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.tryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryStatement?: (ctx: TryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.throwStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowStatement?: (ctx: ThrowStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.continueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.insertStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertStatement?: (ctx: InsertStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.updateStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdateStatement?: (ctx: UpdateStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.deleteStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeleteStatement?: (ctx: DeleteStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.undeleteStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUndeleteStatement?: (ctx: UndeleteStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.upsertStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpsertStatement?: (ctx: UpsertStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.mergeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMergeStatement?: (ctx: MergeStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.runAsStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRunAsStatement?: (ctx: RunAsStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.propertyBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyBlock?: (ctx: PropertyBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.getter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetter?: (ctx: GetterContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.setter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetter?: (ctx: SetterContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.catchClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchClause?: (ctx: CatchClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.finallyBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinallyBlock?: (ctx: FinallyBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.forControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForControl?: (ctx: ForControlContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.forInit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInit?: (ctx: ForInitContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.enhancedForControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedForControl?: (ctx: EnhancedForControlContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.forUpdate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForUpdate?: (ctx: ForUpdateContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.parExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParExpression?: (ctx: ParExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.methodCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodCall?: (ctx: MethodCallContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.dotMethodCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotMethodCall?: (ctx: DotMethodCallContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.creator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreator?: (ctx: CreatorContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.createdName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreatedName?: (ctx: CreatedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.idCreatedNamePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdCreatedNamePair?: (ctx: IdCreatedNamePairContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.noRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoRest?: (ctx: NoRestContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.classCreatorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassCreatorRest?: (ctx: ClassCreatorRestContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.arrayCreatorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.mapCreatorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapCreatorRest?: (ctx: MapCreatorRestContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.mapCreatorRestPair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapCreatorRestPair?: (ctx: MapCreatorRestPairContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.setCreatorRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetCreatorRest?: (ctx: SetCreatorRestContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.soqlLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSoqlLiteral?: (ctx: SoqlLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;

	/**
	 * Visit a parse tree produced by `ApexParser.anyId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnyId?: (ctx: AnyIdContext) => Result;
}

