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
 * A DataFileNode must be an object with a string `type` property and a string `raw` property.
 *
 * @param node - The unknown value to check
 * @returns True if the node is a valid DataFileNode, false otherwise
 *
 * @example
 * ```typescript
 * const unknownData = getDataFromSomewhere();
 * if (isDataFileNode(unknownData)) {
 *   // TypeScript now knows unknownData is a DataFileNode
 *   console.log(unknownData.type); // Safe to access
 *   console.log(unknownData.raw);  // Safe to access
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
 * A DataFileCommentNode is a DataFileNode with type property equal to "comment".
 *
 * @param node - The unknown value to check
 * @returns True if the node is a valid DataFileCommentNode, false otherwise
 *
 * @example
 * ```typescript
 * const unknownNode = parseDataFile();
 * if (isDataFileCommentNode(unknownNode)) {
 *   // TypeScript now knows this is a comment node
 *   console.log(`Comment: ${unknownNode.raw}`);
 * }
 * ```
 */
export function isDataFileCommentNode(node: unknown): node is DataFileCommentNode {
  return isDataFileNode(node) && node.type === "comment";
}

/**
 * Type guard function that checks if an unknown value is a DataFileBoundaryNode.
 * A DataFileBoundaryNode is a DataFileNode with type property equal to "boundary".
 *
 * @param node - The unknown value to check
 * @returns True if the node is a valid DataFileBoundaryNode, false otherwise
 *
 * @example
 * ```typescript
 * const unknownNode = parseDataFile();
 * if (isDataFileBoundaryNode(unknownNode)) {
 *   // TypeScript now knows this is a boundary node
 *   console.log(`Boundary: ${unknownNode.raw}`);
 * }
 * ```
 */
export function isDataFileBoundaryNode(node: unknown): node is DataFileBoundaryNode {
  return isDataFileNode(node) && node.type === "boundary";
}

/**
 * Type guard function that checks if an unknown value is a DataFileDataNode.
 * A DataFileDataNode is a DataFileNode with type property equal to "data".
 *
 * @param node - The unknown value to check
 * @returns True if the node is a valid DataFileDataNode, false otherwise
 *
 * @example
 * ```typescript
 * const unknownNode = parseDataFile();
 * if (isDataFileDataNode(unknownNode)) {
 *   // TypeScript now knows this is a data node
 *   processDataContent(unknownNode.raw);
 * }
 * ```
 */
export function isDataFileDataNode(node: unknown): node is DataFileDataNode {
  return isDataFileNode(node) && node.type === "data";
}

/**
 * Type guard function that checks if an unknown value is a DataFileEmptyNode.
 * A DataFileEmptyNode is a DataFileNode with type property equal to "empty".
 *
 * @param node - The unknown value to check
 * @returns True if the node is a valid DataFileEmptyNode, false otherwise
 *
 * @example
 * ```typescript
 * const unknownNode = parseDataFile();
 * if (isDataFileEmptyNode(unknownNode)) {
 *   // TypeScript now knows this is an empty node
 *   console.log("Found empty line");
 * }
 * ```
 */
export function isDataFileEmptyNode(node: unknown): node is DataFileEmptyNode {
  return isDataFileNode(node) && node.type === "empty";
}

/**
 * Type guard function that checks if an unknown value is a DataFileRootNode.
 * A DataFileRootNode is a DataFileNode with type property equal to "root".
 *
 * @param node - The unknown value to check
 * @returns True if the node is a valid DataFileRootNode, false otherwise
 *
 * @example
 * ```typescript
 * const unknownNode = parseDataFile();
 * if (isDataFileRootNode(unknownNode)) {
 *   // TypeScript now knows this is a root node
 *   console.log(`File name: ${unknownNode.fileName}`);
 * }
 * ```
 */
export function isDataFileRootNode(node: unknown): node is DataFileRootNode {
  return isDataFileNode(node) && node.type === "root";
}
