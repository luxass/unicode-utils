import type { BoundaryStyle, MissingAnnotation } from "../line-helpers";

export const NodeTypes = {
  ROOT: "root",
  COMMENT: "comment",
  EMPTY: "empty",
  UNKNOWN: "unknown",
  SECTION: "section",
  BOUNDARY: "boundary",
  DATA: "data",
  MISSING: "missing",
} as const;

export type NodeType = (typeof NodeTypes)[keyof typeof NodeTypes];

export interface BaseNode {
  type: NodeType;
  value: string;
  raw: string;
  line: number;
}

/**
 * The document root. Never appears as a child.
 *
 * Contains all top-level nodes including header comments, boundary markers,
 * and sections. The `fileName` and `version` are inferred from the first
 * comment line if it matches the `Name-X.Y.Z.txt` convention.
 */
export interface RootNode extends BaseNode {
  type: "root";
  children: ChildNode[];
  fileName?: string;
  version?: string;
}

/**
 * Any `#`-prefixed line that is not a boundary or (inside a section) a `@missing` annotation.
 *
 * `value` is the trimmed text after the `#`. `raw` is the original line unchanged.
 * Note: `# Property: X` and `# @missing:` lines in the header (before the first
 * boundary) are also represented as `CommentNode`.
 */
export interface CommentNode extends BaseNode {
  type: "comment";
}

/**
 * A blank line (zero characters or only whitespace). `value` is always `""`.
 */
export interface EmptyNode extends BaseNode {
  type: "empty";
}

/**
 * Catch-all for lines that don't match any other node type in their context.
 *
 * Before the first boundary, non-comment non-empty lines become `UnknownNode`.
 * Inside a section, such lines become `DataNode` instead.
 */
export interface UnknownNode extends BaseNode {
  type: "unknown";
}

/**
 * A boundary line that visually separates sections in a UCD file.
 *
 * Boundary lines are comment lines that consist of repeated characters
 * like `# ===...`, `# ---...`, or `# ###...`. They appear as direct
 * children of `RootNode` and act as delimiters between `SectionNode`s.
 *
 * @example
 * ```ts
 * // For the line: # ================================================
 * // node.style === "="
 * // node.value === "================================================"
 * ```
 */
export interface BoundaryNode extends BaseNode {
  type: "boundary";
  style: BoundaryStyle;
}

/**
 * A line containing Unicode character data in semicolon-delimited format.
 *
 * Data lines are non-comment, non-empty lines that carry property assignments
 * for code points or code point ranges. They only appear inside a `SectionNode`
 * (after a boundary). Before the first boundary, such lines become `UnknownNode`.
 *
 * The `codepoint` tuple always has two elements: `[start, end]`. For single
 * code points both values are identical. The `fields` array includes all
 * semicolon-separated fields (including the code point as the first element).
 * The `comment` is the inline text after `#`, if present.
 *
 * @example
 * ```ts
 * // For the line: 0041; C; 0061; # LATIN CAPITAL LETTER A
 * // node.codepointRaw === "0041"
 * // node.codepoint === ["0041", "0041"]
 * // node.fields === ["0041", "C", "0061"]
 * // node.comment === "LATIN CAPITAL LETTER A"
 *
 * // For the line: 0000..001F    ; Common # Cc  [32]
 * // node.codepointRaw === "0000..001F"
 * // node.codepoint === ["0000", "001F"]
 * // node.fields === ["0000..001F", "Common"]
 * // node.comment === "Cc  [32]"
 * ```
 */
export interface DataNode extends BaseNode {
  type: "data";
  codepointRaw: string;
  codepoint: [string, string];
  fields: string[];
  comment?: string;
}

/**
 * A `@missing` annotation that defines default property values for
 * code points not explicitly listed in a UCD file.
 *
 * This is a formally machine-readable convention defined in
 * {@link https://www.unicode.org/reports/tr44/#Missing_Conventions | TR44 §4.2.9}.
 * Only created inside a `SectionNode` - before the first boundary, `@missing`
 * lines are parsed as plain `CommentNode`.
 *
 * @example
 * ```ts
 * // For the line: # @missing: 0000..10FFFF; Unknown
 * // node.annotation === { start: "0000", end: "10FFFF", defaultPropertyValue: "Unknown" }
 * ```
 */
export interface MissingAnnotationNode extends BaseNode {
  type: "missing";
  annotation: MissingAnnotation | null;
}

/**
 * A container node that groups lines between consecutive boundary markers.
 *
 * Sections are created by the parser when it encounters `BoundaryNode`s:
 * all lines after a boundary (until the next boundary or EOF) are collected
 * into a `SectionNode`. Sections cannot nest - a `SectionNode` never
 * contains another `SectionNode` or a `BoundaryNode`.
 *
 * @example
 * ```ts
 * // section.children may contain:
 * // CommentNode, EmptyNode, UnknownNode, DataNode, MissingAnnotationNode
 * ```
 */
export interface SectionNode extends BaseNode {
  type: "section";
  children: SectionChildNode[];
}

export type SectionChildNode =
  | CommentNode
  | EmptyNode
  | UnknownNode
  | DataNode
  | MissingAnnotationNode;

export type ChildNode = CommentNode | EmptyNode | UnknownNode | BoundaryNode | SectionNode;

export type Node = RootNode | ChildNode | SectionChildNode;
