import type { BoundaryStyle } from "../line-helpers";
import {
  getBoundaryLineStyle,
  getPropertyValue,
  inferFileName,
  inferVersion,
  isBoundaryLine,
  isCommentLine,
  isEmptyLine,
  isEOFMarker,
  isLineWithData,
  isMissingAnnotation,
  isPropertyLine,
  parseMissingAnnotation,
  trimCommentLine,
} from "../line-helpers";
import type { ChildNode, DataNode, MissingAnnotationNode, Node, RootNode, SectionChildNode, SectionNode } from "./ast";
import { NodeTypes } from "./ast";
import {
  isBoundaryNode,
  isDataNode,
  isEmptyCommentNode,
  isEmptyNode,
} from "./typeguards";

// ─── Parse options ────────────────────────────────────────────────────────────

export interface ParseAstOptions {
  /** Explicit file name override. If not provided, will be inferred from content */
  fileName?: string;
  /** Whether to group DataNodes into SectionNodes. Default: true */
  groupSections?: boolean;
}

// ─── Line → ChildNode ─────────────────────────────────────────────────────────

/**
 * Creates a node object from a single line of a data file.
 *
 * This function analyzes the given line and converts it to the appropriate
 * ChildNode type based on the line's content and structure.
 *
 * @param {string} line - The text line to parse into a node
 * @param {number} lineNumber - The line number in the original file (0-based index)
 * @returns {ChildNode} A node object representing the parsed line
 */
function createNode(line: string, lineNumber: number): ChildNode {
  const trimmedLine = line.trim();

  if (isEmptyLine(line)) {
    return {
      type: NodeTypes.EMPTY,
      value: "",
      raw: line,
      line: lineNumber,
    };
  }

  if (isBoundaryLine(line)) {
    let style: BoundaryStyle;
    try {
      style = getBoundaryLineStyle(line);
    } catch {
      // This can also not happen, in the current implementation, since we does a precheck
      // for boundary lines in the `isBoundaryLine` function.
      // If the line is a boundary line, it should always have a valid style.
      return {
        type: NodeTypes.UNKNOWN,
        value: trimmedLine,
        raw: line,
        line: lineNumber,
      };
    }

    return {
      type: NodeTypes.BOUNDARY,
      value: trimmedLine,
      raw: line,
      line: lineNumber,
      style,
    };
  }

  if (isEOFMarker(line)) {
    return {
      type: NodeTypes.EOF,
      value: trimmedLine,
      raw: line,
      line: lineNumber,
    };
  }

  if (isPropertyLine(line)) {
    return {
      type: NodeTypes.PROPERTY,
      value: trimmedLine,
      raw: line,
      line: lineNumber,
      propertyValue: getPropertyValue(trimmedLine),
    };
  }

  if (isMissingAnnotation(line)) {
    const annotation = parseMissingAnnotation(line);
    if (annotation) {
      return {
        type: NodeTypes.MISSING_ANNOTATION,
        value: trimCommentLine(line),
        raw: line,
        line: lineNumber,
        annotation,
      } satisfies MissingAnnotationNode;
    }
  }

  if (isCommentLine(line)) {
    const trimmedComment = trimCommentLine(line);
    return {
      type: trimmedComment === "" ? NodeTypes.EMPTY_COMMENT : NodeTypes.COMMENT,
      value: trimmedComment,
      raw: line,
      line: lineNumber,
    };
  }

  if (isLineWithData(line)) {
    return {
      type: NodeTypes.DATA,
      value: trimmedLine,
      raw: line,
      line: lineNumber,
    };
  }

  // In the current implementation, we can't run into a line that doesn't match any of the above
  // conditions, since the `isLineWithData` function checks for valid data lines.
  // And at the moment, all lines that isn't a comment line or empty line is considered a data line.
  // However, we still handle it gracefully by returning an UnknownNode.
  /* v8 ignore next 7 */
  return {
    type: NodeTypes.UNKNOWN,
    value: trimmedLine,
    raw: line,
    line: lineNumber,
  };
}

// ─── Section grouping pass ────────────────────────────────────────────────────

/**
 * Groups flat ChildNode[] into SectionNode[]s.
 *
 * After this pass, DataNodes consumed by sections are removed from root.children
 * and live exclusively inside SectionNode.records. Non-section nodes (heading
 * comments, empty lines, EOF) remain as direct children of root.
 */
function groupSectionsIntoAst(root: RootNode): void {
  const pendingComments: string[] = [];

  // Indices of children consumed by sections (to be removed from root.children)
  const consumed = new Set<number>();
  const sectionInsertions: Array<{ beforeIndex: number; section: SectionNode }> = [];

  let currentName: string | null = null;
  let currentDesc = "";
  let currentChildren: SectionChildNode[] = [];
  let currentRecords: DataNode[] = [];
  let currentStartIndex = -1;

  // Indices for comment nodes that form section headers (name/description)
  const pendingCommentIndices: number[] = [];
  // Indices for MissingAnnotationNodes queued before a section starts
  const pendingMissingIndices: number[] = [];
  // True if a boundary was seen since the last data node — means pending
  // comments are within the same section, not a new section header
  let sawBoundarySinceLastData = false;

  function flushSection(): void {
    if (currentName === null) return;

    const section: SectionNode = {
      type: NodeTypes.SECTION as "section",
      value: "",
      raw: "",
      line: currentStartIndex >= 0 ? (root.children[currentStartIndex]?.line ?? 0) : 0,
      name: currentName,
      description: currentDesc,
      children: currentChildren,
      records: currentRecords,
    };

    sectionInsertions.push({ beforeIndex: currentStartIndex, section });

    currentName = null;
    currentDesc = "";
    currentChildren = [];
    currentRecords = [];
    currentStartIndex = -1;
  }

  for (let i = 0; i < root.children.length; i++) {
    const node = root.children[i]!;

    if (isEmptyNode(node) || isEmptyCommentNode(node) || isBoundaryNode(node)) {
      // If we're inside an active section with records, consume into section children
      if (currentName !== null && currentRecords.length > 0) {
        currentChildren.push(node as SectionChildNode);
        consumed.add(i);
        if (isBoundaryNode(node)) {
          sawBoundarySinceLastData = true;
        }
      }

      // Look ahead: if the next non-empty/non-boundary child is a DataNode keep pending state
      let nextIsData = false;
      for (let j = i + 1; j < root.children.length; j++) {
        const next = root.children[j]!;
        if (!isEmptyNode(next) && !isEmptyCommentNode(next) && !isBoundaryNode(next)) {
          nextIsData = isDataNode(next);
          break;
        }
      }
      if (!nextIsData) {
        // Pending comments that didn't lead to data — consume into section if active
        if (currentName !== null && pendingComments.length > 0) {
          for (const idx of pendingCommentIndices) {
            currentChildren.push(root.children[idx]! as SectionChildNode);
            consumed.add(idx);
          }
        }
        // Pending missing annotation nodes — consume into section if active
        if (currentName !== null) {
          for (const idx of pendingMissingIndices) {
            currentChildren.push(root.children[idx]! as SectionChildNode);
            consumed.add(idx);
          }
        }
        pendingComments.length = 0;
        pendingCommentIndices.length = 0;
        pendingMissingIndices.length = 0;
      }
      continue;
    }

    if (node.type === "missing-annotation") {
      // MissingAnnotationNode: queue as a pending child (does not start a section)
      pendingMissingIndices.push(i);
      continue;
    }

    if (node.type === "comment") {
      pendingComments.push(trimCommentLine(node.raw));
      pendingCommentIndices.push(i);
      continue;
    }

    if (node.type === "property" || node.type === "eof") {
      continue;
    }

    if (isDataNode(node)) {
      if (pendingComments.length > 0) {
        if (currentName !== null && currentRecords.length > 0 && sawBoundarySinceLastData) {
          // We're inside an active section and a boundary separated the last data
          // from these comments — absorb them into the current section, not a new one
          for (const idx of pendingCommentIndices) {
            currentChildren.push(root.children[idx]! as SectionChildNode);
            consumed.add(idx);
          }
          for (const idx of pendingMissingIndices) {
            currentChildren.push(root.children[idx]! as SectionChildNode);
            consumed.add(idx);
          }
        } else {
          // Start a new section — consume header comments and pending missing annotations
          flushSection();
          currentName = pendingComments[0]!;
          currentDesc = pendingComments.slice(1).join("\n");
          currentStartIndex = pendingMissingIndices[0] ?? pendingCommentIndices[0] ?? i;
          for (const idx of pendingCommentIndices) consumed.add(idx);
          // Missing annotation nodes go into the section's children
          for (const idx of pendingMissingIndices) {
            currentChildren.push(root.children[idx]! as SectionChildNode);
            consumed.add(idx);
          }
        }
        pendingComments.length = 0;
        pendingCommentIndices.length = 0;
        pendingMissingIndices.length = 0;
      } else if (currentName === null) {
        // Data with no preceding comment block — anonymous default section
        currentName = root.fileName ?? "default";
        currentDesc = "";
        currentStartIndex = pendingMissingIndices[0] ?? i;
        for (const idx of pendingMissingIndices) {
          currentChildren.push(root.children[idx]! as SectionChildNode);
          consumed.add(idx);
        }
        pendingMissingIndices.length = 0;
      }

      sawBoundarySinceLastData = false;
      currentChildren.push(node);
      currentRecords.push(node);
      consumed.add(i);
    }
  }

  flushSection();

  // Rebuild root.children: remove consumed nodes, insert SectionNodes
  const newChildren: ChildNode[] = [];
  let insertionIdx = 0;

  for (let i = 0; i < root.children.length; i++) {
    // Insert any sections that should appear before this index
    while (
      insertionIdx < sectionInsertions.length &&
      sectionInsertions[insertionIdx]!.beforeIndex <= i
    ) {
      newChildren.push(sectionInsertions[insertionIdx]!.section);
      insertionIdx++;
    }

    if (!consumed.has(i)) {
      newChildren.push(root.children[i]!);
    }
  }

  // Insert any remaining sections
  while (insertionIdx < sectionInsertions.length) {
    newChildren.push(sectionInsertions[insertionIdx]!.section);
    insertionIdx++;
  }

  root.children = newChildren;
}

// ─── Main entry points ────────────────────────────────────────────────────────

/**
 * Parses a data file content string into a structured RootNode.
 *
 * By default (groupSections: true), runs a section-grouping pass that
 * groups DataNodes into SectionNodes based on preceding comment headers.
 * Pass groupSections: false to get a flat list of nodes.
 *
 * @param {string} content - The full content of the data file to parse
 * @param {string | ParseAstOptions} [optionsOrFileName] - Options or explicit file name
 * @returns {RootNode} A structured representation of the data file
 */
export function parseDataFileIntoAst(
  content: string,
  optionsOrFileName?: string | ParseAstOptions,
): RootNode {
  const options: ParseAstOptions | undefined =
    typeof optionsOrFileName === "string" ? { fileName: optionsOrFileName } : optionsOrFileName;

  const children = content.split(/\r?\n/).map((line, index) => createNode(line, index));

  const root: RootNode = {
    type: NodeTypes.ROOT,
    value: "",
    raw: content,
    line: 0,
    children,
    fileName: options?.fileName ?? inferFileName(content),
    version: inferVersion(content),
  };

  if (options?.groupSections !== false) {
    groupSectionsIntoAst(root);
  }

  return root;
}

/**
 * Creates a text representation of a DataFileNode
 *
 * @param {Node} node - The DataFileNode to convert to string
 * @returns {string} The raw string representation of the node
 */
export function stringifyNode(node: Node): string {
  if (node.type === NodeTypes.ROOT) {
    return stringifyNodes(node.children);
  }
  return node.raw;
}

/**
 * Creates a text representation of multiple DataFileNodes
 *
 * @param {ChildNode[]} nodes - An array of ChildNode objects to stringify
 * @returns {string} A string containing the raw representation of all nodes joined by newline characters
 */
export function stringifyNodes(nodes: ChildNode[]): string {
  return nodes.map((node) => node.raw).join("\n");
}
