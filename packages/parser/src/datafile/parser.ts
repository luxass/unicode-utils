import type { BoundaryStyle, MissingAnnotation } from "../line-helpers";
import type {
  ChildNode,
  DataNode,
  Node,
  RootNode,
  SectionChildNode,
  SectionNode,
} from "./ast";
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
import { NodeTypes } from "./ast";
import {
  isBoundaryNode,
  isDataNode,
  isEmptyCommentNode,
  isEmptyNode,
  isSectionNode,
} from "./typeguards";
import { resolve } from "../file-parsers/route";
import { applyFileParser } from "../file-parsers/coerce";

// ─── Parse options ────────────────────────────────────────────────────────────

export interface ParseAstOptions {
  /** Explicit file name override. If not provided, will be inferred from content */
  fileName?: string;
  /** Whether to group DataNodes into SectionNodes. Default: true */
  groupSections?: boolean;
  /** Candidate separators for field splitting. Default: [";", "\t"] */
  separators?: string[];
  /** Auto-coerce raw field strings. Default: true */
  autoCoerce?: boolean;
  /** Strip inline comments before field splitting. Default: true */
  stripInlineComments?: boolean;
  /** Collect @missing: annotations. Default: true */
  collectMissingAnnotations?: boolean;
}

// ─── Field value auto-coercion ────────────────────────────────────────────────

const HEX_RANGE_RE = /^[0-9A-Fa-f]{4,6}\.\.[0-9A-Fa-f]{4,6}$/;
const HEX_POINT_RE = /^[0-9A-Fa-f]{4,6}$/;
const INT_RE = /^[0-9]+$/;

function inferFieldValue(raw: string): unknown {
  const trimmed = raw.trim();
  if (HEX_RANGE_RE.test(trimmed)) {
    const [start, end] = trimmed.split("..");
    return { start: start!.toUpperCase(), end: end!.toUpperCase() };
  }
  if (HEX_POINT_RE.test(trimmed)) {
    return trimmed.toUpperCase();
  }
  if (INT_RE.test(trimmed)) {
    return Number(trimmed);
  }
  return trimmed;
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
function groupSectionsIntoAst(root: RootNode, options?: ParseAstOptions): void {
  const separators = options?.separators ?? [";", "\t"];
  const autoCoerce = options?.autoCoerce ?? true;
  const stripInlineComments = options?.stripInlineComments ?? true;
  const collectMissing = options?.collectMissingAnnotations ?? true;

  const pendingComments: string[] = [];
  const pendingMissing: MissingAnnotation[] = [];

  // Indices of children consumed by sections (to be removed from root.children)
  const consumed = new Set<number>();
  const sectionInsertions: Array<{ beforeIndex: number; section: SectionNode }> = [];

  let currentName: string | null = null;
  let currentDesc = "";
  let currentChildren: SectionChildNode[] = [];
  let currentRecords: DataNode[] = [];
  let currentMissing: MissingAnnotation[] = [];
  let currentStartIndex = -1;
  let separator: string | null = null;

  // Track which comment indices belong to the current section header
  let pendingCommentIndices: number[] = [];
  let pendingMissingIndices: number[] = [];
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
      missingAnnotations: currentMissing,
      fieldNames: undefined,
    };

    sectionInsertions.push({ beforeIndex: currentStartIndex, section });

    currentName = null;
    currentDesc = "";
    currentChildren = [];
    currentRecords = [];
    currentMissing = [];
    currentStartIndex = -1;
  }

  function splitAndPopulateFields(node: DataNode): void {
    let line = node.value;

    // Strip inline comment
    if (stripInlineComments) {
      const hashIdx = line.indexOf("#");
      if (hashIdx !== -1) {
        line = line.slice(0, hashIdx);
      }
    }

    // Detect separator once
    if (separator === null) {
      for (const candidate of separators) {
        if (line.includes(candidate)) {
          separator = candidate;
          break;
        }
      }
    }

    // Split into raw field strings
    const rawParts = separator !== null
      ? line.split(separator).map((p) => p.trim())
      : [line.trim()];

    // Remove trailing empty field
    if (rawParts.length > 1 && rawParts[rawParts.length - 1] === "") {
      rawParts.pop();
    }

    node.parsedFields = rawParts.map((rawValue, idx) => ({
      name: `field_${idx}`,
      rawValue,
      value: autoCoerce ? inferFieldValue(rawValue) : rawValue,
    }));
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
        pendingComments.length = 0;
        pendingMissing.length = 0;
        pendingCommentIndices.length = 0;
        pendingMissingIndices.length = 0;
      }
      continue;
    }

    if (node.type === "comment") {
      if (collectMissing && isMissingAnnotation(node.raw)) {
        const parsed = parseMissingAnnotation(node.raw);
        if (parsed) {
          pendingMissing.push(parsed);
          pendingMissingIndices.push(i);
        }
      } else {
        pendingComments.push(trimCommentLine(node.raw));
        pendingCommentIndices.push(i);
      }
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
          // Start a new section
          flushSection();
          currentName = pendingComments[0]!;
          currentDesc = pendingComments.slice(1).join("\n");
          currentMissing = [...pendingMissing];
          currentStartIndex = pendingCommentIndices[0] ?? i;
          for (const idx of pendingCommentIndices) consumed.add(idx);
          for (const idx of pendingMissingIndices) consumed.add(idx);
        }
        pendingComments.length = 0;
        pendingMissing.length = 0;
        pendingCommentIndices.length = 0;
        pendingMissingIndices.length = 0;
      } else if (currentName === null) {
        // Data with no preceding comment block — anonymous default section
        currentName = root.fileName ?? "default";
        currentDesc = "";
        currentMissing = [...pendingMissing];
        currentStartIndex = i;
        for (const idx of pendingMissingIndices) consumed.add(idx);
        pendingMissing.length = 0;
        pendingMissingIndices.length = 0;
      }

      sawBoundarySinceLastData = false;
      splitAndPopulateFields(node);
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
    while (insertionIdx < sectionInsertions.length && sectionInsertions[insertionIdx]!.beforeIndex <= i) {
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
 * By default (groupSections: true), also runs a section-grouping pass that
 * creates SectionNode children with populated DataNode.parsedFields.
 * Pass groupSections: false to get the old flat line-per-node behaviour.
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
    typeof optionsOrFileName === "string"
      ? { fileName: optionsOrFileName }
      : optionsOrFileName;

  const children = content
    .split(/\r?\n/)
    .map((line, index) => createNode(line, index));

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
    groupSectionsIntoAst(root, options);

    // Resolve a file-specific parser and apply named+typed fields
    const fileParser = resolve(root.fileName, root.version);
    if (fileParser) {
      const sections = root.children.filter(isSectionNode);
      applyFileParser(sections, fileParser.fields, fileParser.separator, {
        trimFields: fileParser.trimFields,
        stripInlineComments: fileParser.stripInlineComments,
      });
      if (fileParser.postProcess) {
        fileParser.postProcess(sections);
      }
    }
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

