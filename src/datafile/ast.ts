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
