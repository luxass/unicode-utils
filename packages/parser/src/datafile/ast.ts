import type { BoundaryStyle, MissingAnnotation } from "../line-helpers";

export const NodeTypes = {
  ROOT: "root",
  COMMENT: "comment",
  EMPTY_COMMENT: "empty-comment",
  BOUNDARY: "boundary",
  DATA: "data",
  EMPTY: "empty",
  EOF: "eof",
  MISSING_ANNOTATION: "missing-annotation",
  PROPERTY: "property",
  SECTION: "section",
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

export interface PropertyNode extends BaseNode {
  type: "property";
  propertyValue: string | undefined;
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

// ─── Parsed field ─────────────────────────────────────────────────────────────
//
// One interpreted value extracted from a DataNode's raw line.
// rawValue is the untouched string after splitting by separator.
// value is auto-coerced by the grouping pass or typed by a FileParser.
// name is "field_0", "field_1", ... when generic parsing is used, or a
// named field like "range"/"name"/"script" when a FileParser is applied.

export interface ParsedField {
  name: string | undefined;
  rawValue: string;
  value: unknown;
}

export interface DataNode extends BaseNode {
  type: "data";
  /**
   * Populated during the section grouping pass in parseDataFileIntoAst()
   * or overwritten by a FileParser.
   * undefined until field parsing has been run on this node.
   */
  parsedFields?: ParsedField[];
}

export interface EmptyNode extends BaseNode {
  type: "empty";
}

export interface EOFNode extends BaseNode {
  type: "eof";
}

export interface MissingAnnotationNode extends BaseNode {
  type: "missing-annotation";
  annotation: MissingAnnotation;
}

/**
 * Nodes that can appear inside a SectionNode's children array.
 * This is every ChildNode type except SectionNode itself.
 */
export type SectionChildNode =
  | CommentNode
  | EmptyCommentNode
  | BoundaryNode
  | DataNode
  | EmptyNode
  | EOFNode
  | MissingAnnotationNode
  | PropertyNode
  | UnknownNode;

export interface SectionNode extends BaseNode {
  type: "section";
  name: string;
  description: string;
  /**
   * ALL nodes consumed into this section, in original document order.
   * Includes DataNodes, BoundaryNodes, EmptyNodes, CommentNodes, MissingAnnotationNodes, etc.
   * Nothing is hidden — every node that was between the section header
   * and the next section is here.
   */
  children: SectionChildNode[];
  /** DataNodes only (filtered view of children). Convenience for data access. */
  records: DataNode[];
  /**
   * Field names in order.
   * undefined when generic parsing was used (field_0, field_1, ...).
   * Set when a FileParser is applied.
   */
  fieldNames: string[] | undefined;
}

export interface UnknownNode extends BaseNode {
  type: "unknown";
  // This can be used for nodes that don't fit any known type
  // or for future extensions
  [key: Exclude<string, keyof BaseNode | "type">]: unknown;
}

// All node types except root
export type ChildNode =
  | CommentNode
  | EmptyCommentNode
  | BoundaryNode
  | DataNode
  | EmptyNode
  | EOFNode
  | MissingAnnotationNode
  | PropertyNode
  | SectionNode
  | UnknownNode;

export type Node = RootNode | ChildNode;
