import type { BoundaryStyle } from "../line-helpers";

export const NodeTypes = {
  ROOT: "root",
  COMMENT: "comment",
  EMPTY_COMMENT: "empty-comment",
  BOUNDARY: "boundary",
  DATA: "data",
  EMPTY: "empty",
  EOF: "eof",
  PROPERTY: "property",
  UNKNOWN: "unknown",
} as const;

export type NodeType = typeof NodeTypes[keyof typeof NodeTypes];

export interface BaseNode {
  type: NodeType;
  value: string;
  raw: string;
  line: number;
}

export interface RootNode extends BaseNode {
  type: "root";
  children: ChildNode[];
  fileName?: string;
  version?: string;
}

export interface PropertyNode extends BaseNode {
  type: "property";
  propertyValue: string;
}

export interface CommentNode extends BaseNode {
  type: "comment";
}

export interface EmptyCommentNode extends BaseNode {
  type: "empty-comment";
}

export interface BoundaryNode extends BaseNode {
  type: "boundary";
  style: BoundaryStyle;
}

export interface DataNode extends BaseNode {
  type: "data";
}

export interface EmptyNode extends BaseNode {
  type: "empty";
}

export interface EOFNode extends BaseNode {
  type: "eof";
}

export interface UnknownNode extends BaseNode {
  type: "unknown";
  // This can be used for nodes that don't fit any known type
  // or for future extensions
  [key: string]: unknown;
}

// All node types except root
export type ChildNode =
  | CommentNode
  | EmptyCommentNode
  | BoundaryNode
  | DataNode
  | EmptyNode
  | EOFNode
  | PropertyNode
  | UnknownNode;

export type Node = RootNode | ChildNode;
