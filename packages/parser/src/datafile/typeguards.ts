import type {
  BoundaryNode,
  CommentNode,
  DataNode,
  EmptyCommentNode,
  EmptyNode,
  EOFNode,
  Node,
  PropertyNode,
  RootNode,
  SectionNode,
  UnknownNode,
} from "./ast";

/**
 * Type guard function that checks if an unknown value is a Node.
 * A Node must be an object with 'type', 'value', 'raw', and 'line' properties of the correct types.
 *
 * @param {unknown} node - The unknown value to check
 * @returns {node is Node} True if the node is a valid Node, false otherwise
 *
 * @example
 * ```typescript
 * import { parseDataFile } from './parser';
 *
 * const parsedData = parseDataFile('# Comment\n0000..007F; Basic Latin');
 * const firstChild = parsedData.children[0];
 *
 * if (isNode(firstChild)) {
 *   console.log(`Node type: ${firstChild.type}`);
 *   console.log(`Raw content: ${firstChild.raw}`);
 *   console.log(`Line number: ${firstChild.line}`);
 * }
 * ```
 */
export function isNode(node: unknown): node is Node {
  return (
    typeof node === "object"
    && node !== null
    && "type" in node
    && typeof (node as Node).type === "string"
    && "raw" in node
    && typeof (node as Node).raw === "string"
    && "line" in node
    && typeof (node as Node).line === "number"
    && "value" in node
    && typeof (node as Node).value === "string"
  );
}

/**
 * Type guard function that checks if an unknown value is a CommentNode.
 * A CommentNode must be a valid Node with the type property set to "comment".
 *
 * @param {unknown} node - The unknown value to check
 * @returns {node is CommentNode} True if the node is a valid CommentNode, false otherwise
 *
 * @example
 * ```typescript
 * import { parseDataFile } from './parser';
 *
 * const parsedData = parseDataFile('# This is a comment\n0000; NULL');
 * const commentNode = parsedData.children[0];
 *
 * if (isCommentNode(commentNode)) {
 *   console.log(`Comment content: ${commentNode.value}`); // "This is a comment"
 *   console.log(`Raw line: ${commentNode.raw}`); // "# This is a comment"
 * }
 * ```
 */
export function isCommentNode(node: unknown): node is CommentNode {
  return isNode(node) && node.type === "comment";
}

/**
 * Type guard function that checks if an unknown value is an EmptyCommentNode.
 * An EmptyCommentNode must be a valid Node with the type property set to "empty-comment".
 *
 * @param {unknown} node - The unknown value to check
 * @returns {node is EmptyCommentNode} True if the node is a valid EmptyCommentNode, false otherwise
 *
 * @example
 * ```typescript
 * import { parseDataFile } from './parser';
 *
 * const parsedData = parseDataFile('#\n0000; NULL');
 * const emptyCommentNode = parsedData.children[0];
 *
 * if (isEmptyCommentNode(emptyCommentNode)) {
 *   console.log(`Empty comment raw: ${emptyCommentNode.raw}`); // "#"
 *   console.log(`Empty comment value: "${emptyCommentNode.value}"`); // ""
 * }
 * ```
 */
export function isEmptyCommentNode(node: unknown): node is EmptyCommentNode {
  return isNode(node) && node.type === "empty-comment";
}

/**
 * Type guard function that checks if an unknown value is a BoundaryNode.
 * A BoundaryNode must be a valid Node with the type property set to "boundary".
 *
 * @param {unknown} node - The unknown value to check
 * @returns {node is BoundaryNode} True if the node is a valid BoundaryNode, false otherwise
 *
 * @example
 * ```typescript
 * import { parseDataFile } from './parser';
 *
 * const parsedData = parseDataFile('# ================================================\n0000; NULL');
 * const boundaryNode = parsedData.children[0];
 *
 * if (isBoundaryNode(boundaryNode)) {
 *   console.log(`Boundary style: ${boundaryNode.style}`); // "equals"
 *   console.log(`Boundary raw: ${boundaryNode.raw}`); // "# ================================================"
 * }
 * ```
 */
export function isBoundaryNode(node: unknown): node is BoundaryNode {
  return isNode(node) && node.type === "boundary";
}

/**
 * Type guard function that checks if an unknown value is a DataNode.
 * A DataNode must be a valid Node with the type property set to "data".
 *
 * @param {unknown} node - The unknown value to check
 * @returns {node is DataNode} True if the node is a valid DataNode, false otherwise
 *
 * @example
 * ```typescript
 * import { parseDataFile } from './parser';
 *
 * const parsedData = parseDataFile('0000..007F    ; Basic Latin  # [128] <control-0000>..<control-007F>');
 * const dataNode = parsedData.children[0];
 *
 * if (isDataNode(dataNode)) {
 *   console.log(`Data value: ${dataNode.value}`); // "0000..007F    ; Basic Latin  # [128] <control-0000>..<control-007F>"
 *   console.log(`Raw content: ${dataNode.raw}`); // Same as value for data nodes
 *   console.log(`Line number: ${dataNode.line}`); // 1
 * }
 * ```
 */
export function isDataNode(node: unknown): node is DataNode {
  return isNode(node) && node.type === "data";
}

/**
 * Type guard function that checks if an unknown value is an EmptyNode.
 * An EmptyNode must be a valid Node with the type property set to "empty".
 *
 * @param {unknown} node - The unknown value to check
 * @returns {node is EmptyNode} True if the node is a valid EmptyNode, false otherwise
 *
 * @example
 * ```typescript
 * import { parseDataFile } from './parser';
 *
 * const parsedData = parseDataFile('# Comment\n\n0000; NULL');
 * const emptyNode = parsedData.children[1]; // The blank line
 *
 * if (isEmptyNode(emptyNode)) {
 *   console.log(`Empty node raw: "${emptyNode.raw}"`); // ""
 *   console.log(`Empty node value: "${emptyNode.value}"`); // ""
 *   console.log(`Line number: ${emptyNode.line}`); // 2
 * }
 * ```
 */
export function isEmptyNode(node: unknown): node is EmptyNode {
  return isNode(node) && node.type === "empty";
}

/**
 * Type guard function that checks if an unknown value is a RootNode.
 * A RootNode must be a valid Node with the type property set to "root".
 *
 * @param {unknown} node - The unknown value to check
 * @returns {node is RootNode} True if the node is a valid RootNode, false otherwise
 *
 * @example
 * ```typescript
 * import { parseDataFile } from './parser';
 *
 * const parsedData = parseDataFile('# Unicode Block Data\n0000..007F; Basic Latin');
 *
 * if (isRootNode(parsedData)) {
 *   console.log(`Root has ${parsedData.children.length} children`); // 2
 *   console.log(`File name: ${parsedData.fileName}`); // May be undefined
 *   console.log(`Version: ${parsedData.version}`); // May be undefined
 * }
 * ```
 */
export function isRootNode(node: unknown): node is RootNode {
  return isNode(node) && node.type === "root";
}

/**
 * Type guard function that checks if an unknown value is an UnknownNode.
 * An UnknownNode must be a valid Node with the type property set to "unknown".
 *
 * @param {unknown} node - The unknown value to check
 * @returns {node is UnknownNode} True if the node is a valid UnknownNode, false otherwise
 *
 * @example
 * ```typescript
 * import { parseDataFile } from './parser';
 *
 * // Assuming some unusual content that doesn't match known patterns
 * const parsedData = parseDataFile('@@UNUSUAL_SYNTAX@@\n0000; NULL');
 * const unknownNode = parsedData.children[0];
 *
 * if (isUnknownNode(unknownNode)) {
 *   console.log(`Unknown node raw: ${unknownNode.raw}`); // "@@UNUSUAL_SYNTAX@@"
 *   console.log(`Unknown node value: ${unknownNode.value}`); // "@@UNUSUAL_SYNTAX@@"
 *   console.log(`Line number: ${unknownNode.line}`); // 1
 * }
 * ```
 */
export function isUnknownNode(node: unknown): node is UnknownNode {
  return isNode(node) && node.type === "unknown";
}

/**
 * Type guard function that checks if an unknown value is an EOFNode.
 * An EOFNode must be a valid Node with the type property set to "eof".
 *
 * @param {unknown} node - The unknown value to check
 * @returns {node is EOFNode} True if the node is a valid EOFNode, false otherwise
 *
 * @example
 * ```typescript
 * import { parseDataFile } from './parser';
 *
 * const parsedData = parseDataFile('0000; NULL');
 * const lastNode = parsedData.children[parsedData.children.length - 1];
 *
 * if (isEOFNode(lastNode)) {
 *   console.log(`EOF node detected at line: ${lastNode.line}`);
 *   console.log(`EOF raw value: ${lastNode.raw}`); // Empty string
 * }
 * ```
 */
export function isEOFNode(node: unknown): node is EOFNode {
  return isNode(node) && node.type === "eof";
}

/**
 * Type guard function that checks if an unknown value is a PropertyNode.
 * A PropertyNode must be a valid Node with the type property set to "property" and have a defined propertyValue.
 *
 * @param {unknown} node - The unknown value to check
 * @returns {node is PropertyNode} True if the node is a valid PropertyNode, false otherwise
 *
 * @example
 * ```typescript
 * import { parseDataFile } from './parser';
 *
 * const parsedData = parseDataFile('# @key=value\n0000; NULL');
 * const propertyNode = parsedData.children[0];
 *
 * if (isPropertyNode(propertyNode)) {
 *   console.log(`Property key: ${propertyNode.propertyKey}`); // "key"
 *   console.log(`Property value: ${propertyNode.propertyValue}`); // "value"
 *   console.log(`Raw content: ${propertyNode.raw}`); // "# @key=value"
 * }
 * ```
 */
export function isPropertyNode(node: unknown): node is PropertyNode {
  return isNode(node) && node.type === "property" && node.propertyValue !== undefined;
}

/**
 * Type guard function that checks if an unknown value is a SectionNode.
 * A SectionNode must be a valid Node with the type property set to "section".
 *
 * @param {unknown} node - The unknown value to check
 * @returns {node is SectionNode} True if the node is a valid SectionNode, false otherwise
 *
 * @example
 * ```typescript
 * if (isSectionNode(node)) {
 *   console.log(node.name, node.records.length);
 * }
 * ```
 */
export function isSectionNode(node: unknown): node is SectionNode {
  return isNode(node) && node.type === "section";
}
