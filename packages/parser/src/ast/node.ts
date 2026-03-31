export const NodeTypes = {
  ROOT: "root",
  COMMENT: "comment",
  EMPTY: "empty",
  UNKNOWN: "unknown",
} as const;

export type NodeType = (typeof NodeTypes)[keyof typeof NodeTypes];

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

export interface CommentNode extends BaseNode {
  type: "comment";
}

export interface EmptyNode extends BaseNode {
  type: "empty";
}

export interface UnknownNode extends BaseNode {
  type: "unknown";
}

export type ChildNode = CommentNode | EmptyNode | UnknownNode;
export type Node = RootNode | ChildNode;
