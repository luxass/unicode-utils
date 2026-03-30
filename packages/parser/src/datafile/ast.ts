import type { BoundaryStyle, MissingAnnotation } from "../line-helpers";

export const NodeTypes = {
  ROOT: "root",
  COMMENT: "comment",
  EMPTY_COMMENT: "empty-comment",
  BOUNDARY: "boundary",
  DATA: "data",
  EMPTY: "empty",
  EOF: "eof",
  PROPERTY: "property",
  SECTION: "section",
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
  name:     string | undefined;
  rawValue: string;
  value:    unknown;
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

// ─── Section node ─────────────────────────────────────────────────────────────

/**
 * A first-class AST node representing a named section of data records.
 *
 * Emitted by parseDataFileIntoAst() during the section-grouping pass.
 * DataNodes inside records are removed from root.children — they live
 * exclusively inside SectionNode.records.
 */
export interface SectionNode extends BaseNode {
  type: "section";
  /** First comment line of the section header */
  name: string;
  /** Remaining comment lines joined with \n (empty string if none) */
  description: string;
  /** DataNodes belonging to this section */
  records: DataNode[];
  /** @missing: annotations collected before section data */
  missingAnnotations: MissingAnnotation[];
  /**
   * Comments that appear after the last data line of this section,
   * before the next boundary or section header.
   * e.g. "# Total code points: 9053" in Scripts.txt
   */
  trailingComments: string[];
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
export type ChildNode
  = | CommentNode
    | EmptyCommentNode
    | BoundaryNode
    | DataNode
    | EmptyNode
    | EOFNode
    | PropertyNode
    | SectionNode
    | UnknownNode;

export type Node = RootNode | ChildNode;
