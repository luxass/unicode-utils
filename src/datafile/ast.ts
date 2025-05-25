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
 * Determines whether a value is a DataFileNode.
 *
 * Checks if the input is an object with string `type` and `raw` properties, allowing safe type narrowing to {@link DataFileNode}.
 *
 * @param node - The value to test.
 * @returns True if the value is a DataFileNode; otherwise, false.
 *
 * @example
 * const unknownData = getDataFromSomewhere();
 * if (isDataFileNode(unknownData)) {
 *   // unknownData is now typed as DataFileNode
 *   console.log(unknownData.type);
 *   console.log(unknownData.raw);
 * }
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
 * Determines whether the given value is a DataFileCommentNode.
 *
 * @param node - The value to test.
 * @returns True if {@link node} is a DataFileCommentNode; otherwise, false.
 */
export function isDataFileCommentNode(node: unknown): node is DataFileCommentNode {
  return isDataFileNode(node) && node.type === "comment";
}

/**
 * Determines whether the given value is a DataFileBoundaryNode.
 *
 * Returns true if the input is a DataFileNode with a type of "boundary".
 *
 * @param node - The value to test.
 * @returns True if {@link node} is a DataFileBoundaryNode; otherwise, false.
 *
 * @example
 * const unknownNode = parseDataFile();
 * if (isDataFileBoundaryNode(unknownNode)) {
 *   // unknownNode is now typed as DataFileBoundaryNode
 *   console.log(`Boundary: ${unknownNode.raw}`);
 * }
 */
export function isDataFileBoundaryNode(node: unknown): node is DataFileBoundaryNode {
  return isDataFileNode(node) && node.type === "boundary";
}

/**
 * Determines whether the given value is a data node with type "data".
 *
 * @param node - The value to test.
 * @returns True if {@link node} is a {@link DataFileDataNode}; otherwise, false.
 *
 * @example
 * const unknownNode = parseDataFile();
 * if (isDataFileDataNode(unknownNode)) {
 *   // unknownNode is now typed as DataFileDataNode
 *   processDataContent(unknownNode.raw);
 * }
 */
export function isDataFileDataNode(node: unknown): node is DataFileDataNode {
  return isDataFileNode(node) && node.type === "data";
}

/**
 * Determines whether the given value is a DataFileEmptyNode.
 *
 * Returns true if the input is a DataFileNode with type "empty".
 *
 * @param node - Value to test for the empty node type.
 * @returns True if {@link node} is a DataFileEmptyNode; otherwise, false.
 *
 * @example
 * const unknownNode = parseDataFile();
 * if (isDataFileEmptyNode(unknownNode)) {
 *   // unknownNode is now typed as DataFileEmptyNode
 *   console.log("Found empty line");
 * }
 */
export function isDataFileEmptyNode(node: unknown): node is DataFileEmptyNode {
  return isDataFileNode(node) && node.type === "empty";
}

/**
 * Determines whether a value is a DataFileRootNode.
 *
 * Returns true if the input is a DataFileNode with a type of "root", enabling type-safe access to root node properties.
 *
 * @param node - The value to test.
 * @returns True if {@link node} is a DataFileRootNode; otherwise, false.
 *
 * @example
 * const unknownNode = parseDataFile();
 * if (isDataFileRootNode(unknownNode)) {
 *   // unknownNode is now typed as DataFileRootNode
 *   console.log(`File name: ${unknownNode.fileName}`);
 * }
 */
export function isDataFileRootNode(node: unknown): node is DataFileRootNode {
  return isDataFileNode(node) && node.type === "root";
}
