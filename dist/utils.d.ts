import { TSESTree as T, TSESLint } from "@typescript-eslint/utils";
export declare const isDOMElementName: (name: string) => boolean;
export declare const isPropsByName: (name: string) => boolean;
export declare const formatList: (strings: Array<string>) => string;
export declare const find: (node: T.Node, predicate: (node: T.Node) => boolean) => T.Node | null;
export declare function findParent<Guard extends T.Node>(
  node: T.Node,
  predicate: (node: T.Node) => node is Guard,
): Guard | null;
export declare function findParent(
  node: T.Node,
  predicate: (node: T.Node) => boolean,
): T.Node | null;
export declare function trace(node: T.Node, initialScope: TSESLint.Scope.Scope): T.Node;
export declare function ignoreTransparentWrappers(node: T.Node, up?: boolean): T.Node;
export type FunctionNode = T.FunctionExpression | T.ArrowFunctionExpression | T.FunctionDeclaration;
export declare const isFunctionNode: (node: T.Node | null | undefined) => node is FunctionNode;
export type ProgramOrFunctionNode = FunctionNode | T.Program;
export declare const isProgramOrFunctionNode: (
  node: T.Node | null | undefined,
) => node is ProgramOrFunctionNode;
export declare const isJSXElementOrFragment: (
  node: T.Node | null | undefined,
) => node is T.JSXElement | T.JSXFragment;
export declare const getFunctionName: (node: FunctionNode) => string | null;
export declare function findInScope(
  node: T.Node,
  scope: ProgramOrFunctionNode,
  predicate: (node: T.Node) => boolean,
): T.Node | null;
export declare const getCommentBefore: (
  node: T.Node,
  sourceCode: TSESLint.SourceCode,
) => T.Comment | undefined;
export declare const getCommentAfter: (
  node: T.Node,
  sourceCode: TSESLint.SourceCode,
) => T.Comment | undefined;
export declare const trackImports: (fromModule?: RegExp) => {
  matchImport: (imports: string | Array<string>, str: string) => string | undefined;
  handleImportDeclaration: (node: T.ImportDeclaration) => void;
};
export declare function appendImports(
  fixer: TSESLint.RuleFixer,
  sourceCode: TSESLint.SourceCode,
  importNode: T.ImportDeclaration,
  identifiers: Array<string>,
): TSESLint.RuleFix | null;
export declare function insertImports(
  fixer: TSESLint.RuleFixer,
  sourceCode: TSESLint.SourceCode,
  source: string,
  identifiers: Array<string>,
  aboveImport?: T.ImportDeclaration,
  isType?: boolean,
): TSESLint.RuleFix;
export declare function removeSpecifier(
  fixer: TSESLint.RuleFixer,
  sourceCode: TSESLint.SourceCode,
  specifier: T.ImportSpecifier,
  pure?: boolean,
): TSESLint.RuleFix;
export declare function jsxPropName(prop: T.JSXAttribute): string;
type Props = T.JSXOpeningElement["attributes"];
export declare function jsxGetAllProps(props: Props): Generator<[string, T.Node]>;
export declare function jsxHasProp(props: Props, prop: string): boolean;
export declare function jsxGetProp(props: Props, prop: string): T.JSXAttribute | undefined;
export {};
