import type {
  BoundaryNode,
  CommentNode,
  DataNode,
  EmptyNode,
  Node,
  RootNode,
  UnknownNode,
} from "./ast";

/**
 * Type guard function that checks if an unknown value is a DataFileNode.
 * A DataFileNode must be an object with both 'type' and 'raw' properties of the correct types.
 *
 * @param {unknown} node - The unknown value to check
 * @returns {node is Node} True if the node is a valid DataFileNode, false otherwise
 *
 * @example
 * ```typescript
 * const unknownValue = getSomeData();
 * if (isNode(unknownValue)) {
 *   // TypeScript now knows this is a DataFileNode
 *   console.log(`Node type: ${unknownValue.type}`);
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
  );
}

/**
 * Type guard function that checks if an unknown value is a DataFileCommentNode.
 * A DataFileCommentNode must be a valid DataFileNode with the type property set to "comment".
 *
 * @param {unknown} node - The unknown value to check
 * @returns {node is CommentNode} True if the node is a valid DataFileCommentNode, false otherwise
 *
 * @example
 * ```typescript
 * const unknownValue = getSomeData();
 * if (isCommentNode(unknownValue)) {
 *   // TypeScript now knows this is a DataFileCommentNode
 *   console.log(`Comment node value: ${unknownValue.value}`);
 * }
 * ```
 */
export function isCommentNode(node: unknown): node is CommentNode {
  return isNode(node) && node.type === "comment";
}

/**
 * Type guard function that checks if an unknown value is a DataFileBoundaryNode.
 * A DataFileBoundaryNode must be a valid DataFileNode with the type property set to "boundary".
 *
 * @param {unknown} node - The unknown value to check
 * @returns {node is BoundaryNode} True if the node is a valid DataFileBoundaryNode, false otherwise
 *
 * @example
 * ```typescript
 * const unknownValue = getSomeData();
 * if (isBoundaryNode(unknownValue)) {
 *   // TypeScript now knows this is a DataFileBoundaryNode
 *   console.log(`Boundary style: ${unknownValue.style}`);
 * }
 * ```
 */
export function isBoundaryNode(node: unknown): node is BoundaryNode {
  return isNode(node) && node.type === "boundary";
}

/**
 * Type guard function that checks if an unknown value is a DataFileDataNode.
 * A DataFileDataNode must be a valid DataFileNode with the type property set to "data".
 *
 * @param {unknown} node - The unknown value to check
 * @returns {node is DataNode} True if the node is a valid DataFileDataNode, false otherwise
 *
 * @example
 * ```typescript
 * const unknownValue = getSomeData();
 * if (isDataNode(unknownValue)) {
 *   // TypeScript now knows this is a DataFileDataNode
 *   console.log(`Data node value: ${unknownValue.value}`);
 * }
 * ```
 */
export function isDataNode(node: unknown): node is DataNode {
  return isNode(node) && node.type === "data";
}

/**
 * Type guard function that checks if an unknown value is a DataFileEmptyNode.
 * A DataFileEmptyNode must be a valid DataFileNode with the type property set to "empty".
 *
 * @param {unknown} node - The unknown value to check
 * @returns {node is EmptyNode} True if the node is a valid DataFileEmptyNode, false otherwise
 *
 * @example
 * ```typescript
 * const unknownValue = getSomeData();
 * if (isEmptyNode(unknownValue)) {
 *   // TypeScript now knows this is a DataFileEmptyNode
 *   console.log(`Found empty node: ${unknownValue.raw}`);
 * }
 * ```
 */
export function isEmptyNode(node: unknown): node is EmptyNode {
  return isNode(node) && node.type === "empty";
}

/**
 * Type guard function that checks if an unknown value is a DataFileRootNode.
 * A DataFileRootNode must be a valid DataFileNode with the type property set to "root".
 *
 * @param {unknown} node - The unknown value to check
 * @returns {node is RootNode} True if the node is a valid DataFileRootNode, false otherwise
 *
 * @example
 * ```typescript
 * const unknownValue = getSomeData();
 * if (isRootNode(unknownValue)) {
 *   // TypeScript now knows this is a DataFileRootNode
 *   console.log(`Root node has ${unknownValue.children.length} children`);
 * }
 * ```
 */
export function isRootNode(node: unknown): node is RootNode {
  return isNode(node) && node.type === "root";
}

/**
 * Type guard function that checks if an unknown value is a DataFileUnknownNode.
 * A DataFileUnknownNode must be a valid DataFileNode with the type property set to "unknown".
 *
 * @param {unknown} node - The unknown value to check
 * @returns {node is UnknownNode} True if the node is a valid DataFileUnknownNode, false otherwise
 *
 * @example
 * ```typescript
 * const unknownValue = getSomeData();
 * if (isUnknownNode(unknownValue)) {
 *   // TypeScript now knows this is a DataFileUnknownNode
 *   console.log(`Found unknown node: ${unknownValue.raw}`);
 * }
 * ```
 */
export function isUnknownNode(node: unknown): node is UnknownNode {
  return isNode(node) && node.type === "unknown";
}
