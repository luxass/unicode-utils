import type { BoundaryStyle } from "../line-helpers";

export const DataFileNodeTypes = {
  Root: "root",
  Comment: "comment",
  Boundary: "boundary",
  Data: "data",
  Empty: "empty",
  Unknown: "unknown",
} as const;

export type DataFileNodeType = typeof DataFileNodeTypes[keyof typeof DataFileNodeTypes];

export interface DataFileBaseNode {
  type: DataFileNodeType;
  value: string;
  raw: string;
  line: number;
}

export interface DataFileRootNode extends DataFileBaseNode {
  type: "root";
  children: DataFileChildNode[];
  fileName?: string;
  version?: string;
}

export interface DataFileCommentNode extends DataFileBaseNode {
  type: "comment";
}

export interface DataFileBoundaryNode extends DataFileBaseNode {
  type: "boundary";
  style: BoundaryStyle;
}

export interface DataFileDataNode extends DataFileBaseNode {
  type: "data";
}

export interface DataFileEmptyNode extends DataFileBaseNode {
  type: "empty";
}

export interface DataFileUnknownNode extends DataFileBaseNode {
  type: "unknown";
  // This can be used for nodes that don't fit any known type
  // or for future extensions
  [key: string]: unknown;
}

// All node types except root
export type DataFileChildNode =
  | DataFileCommentNode
  | DataFileBoundaryNode
  | DataFileDataNode
  | DataFileEmptyNode
  | DataFileUnknownNode;

export type DataFileNode = DataFileRootNode | DataFileChildNode;

/**
 * Type guard function that checks if an unknown value is a DataFileNode.
 * A DataFileNode must be an object with both 'type' and 'raw' properties of the correct types.
 *
 * @param {unknown} node - The unknown value to check
 * @returns {node is DataFileNode} True if the node is a valid DataFileNode, false otherwise
 *
 * @example
 * ```typescript
 * const unknownValue = getSomeData();
 * if (isDataFileNode(unknownValue)) {
 *   // TypeScript now knows this is a DataFileNode
 *   console.log(`Node type: ${unknownValue.type}`);
 * }
 * ```
 */
export function isDataFileNode(node: unknown): node is DataFileNode {
  return (
    typeof node === "object"
    && node !== null
    && "type" in node
    && typeof (node as DataFileNode).type === "string"
    && "raw" in node
    && typeof (node as DataFileNode).raw === "string"
  );
}

/**
 * Type guard function that checks if an unknown value is a DataFileCommentNode.
 * A DataFileCommentNode must be a valid DataFileNode with the type property set to "comment".
 *
 * @param {unknown} node - The unknown value to check
 * @returns {node is DataFileCommentNode} True if the node is a valid DataFileCommentNode, false otherwise
 *
 * @example
 * ```typescript
 * const unknownValue = getSomeData();
 * if (isDataFileCommentNode(unknownValue)) {
 *   // TypeScript now knows this is a DataFileCommentNode
 *   console.log(`Comment node value: ${unknownValue.value}`);
 * }
 * ```
 */
export function isDataFileCommentNode(node: unknown): node is DataFileCommentNode {
  return isDataFileNode(node) && node.type === "comment";
}

/**
 * Type guard function that checks if an unknown value is a DataFileBoundaryNode.
 * A DataFileBoundaryNode must be a valid DataFileNode with the type property set to "boundary".
 *
 * @param {unknown} node - The unknown value to check
 * @returns {node is DataFileBoundaryNode} True if the node is a valid DataFileBoundaryNode, false otherwise
 *
 * @example
 * ```typescript
 * const unknownValue = getSomeData();
 * if (isDataFileBoundaryNode(unknownValue)) {
 *   // TypeScript now knows this is a DataFileBoundaryNode
 *   console.log(`Boundary style: ${unknownValue.style}`);
 * }
 * ```
 */
export function isDataFileBoundaryNode(node: unknown): node is DataFileBoundaryNode {
  return isDataFileNode(node) && node.type === "boundary";
}

/**
 * Type guard function that checks if an unknown value is a DataFileDataNode.
 * A DataFileDataNode must be a valid DataFileNode with the type property set to "data".
 *
 * @param {unknown} node - The unknown value to check
 * @returns {node is DataFileDataNode} True if the node is a valid DataFileDataNode, false otherwise
 *
 * @example
 * ```typescript
 * const unknownValue = getSomeData();
 * if (isDataFileDataNode(unknownValue)) {
 *   // TypeScript now knows this is a DataFileDataNode
 *   console.log(`Data node value: ${unknownValue.value}`);
 * }
 * ```
 */
export function isDataFileDataNode(node: unknown): node is DataFileDataNode {
  return isDataFileNode(node) && node.type === "data";
}

/**
 * Type guard function that checks if an unknown value is a DataFileEmptyNode.
 * A DataFileEmptyNode must be a valid DataFileNode with the type property set to "empty".
 *
 * @param {unknown} node - The unknown value to check
 * @returns {node is DataFileEmptyNode} True if the node is a valid DataFileEmptyNode, false otherwise
 *
 * @example
 * ```typescript
 * const unknownValue = getSomeData();
 * if (isDataFileEmptyNode(unknownValue)) {
 *   // TypeScript now knows this is a DataFileEmptyNode
 *   console.log(`Found empty node: ${unknownValue.raw}`);
 * }
 * ```
 */
export function isDataFileEmptyNode(node: unknown): node is DataFileEmptyNode {
  return isDataFileNode(node) && node.type === "empty";
}

/**
 * Type guard function that checks if an unknown value is a DataFileRootNode.
 * A DataFileRootNode must be a valid DataFileNode with the type property set to "root".
 *
 * @param {unknown} node - The unknown value to check
 * @returns {node is DataFileRootNode} True if the node is a valid DataFileRootNode, false otherwise
 *
 * @example
 * ```typescript
 * const unknownValue = getSomeData();
 * if (isDataFileRootNode(unknownValue)) {
 *   // TypeScript now knows this is a DataFileRootNode
 *   console.log(`Root node has ${unknownValue.children.length} children`);
 * }
 * ```
 */
export function isDataFileRootNode(node: unknown): node is DataFileRootNode {
  return isDataFileNode(node) && node.type === "root";
}
