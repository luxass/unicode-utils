import type { BoundaryStyle } from "../line-helpers";
import type {
  ChildNode,
  Node,
  RootNode,
} from "./ast";
import {
  getBoundaryLineStyle,
  inferFileName,
  inferVersion,
  isBoundaryLine,
  isCommentLine,
  isEmptyLine,
  isLineWithData,
  trimCommentLine,
} from "../line-helpers";
import { NodeTypes } from "./ast";

/**
 * Creates a node object from a single line of a data file.
 *
 * This function analyzes the given line and converts it to the appropriate
 * DataFileChildNode type (Empty, Boundary, Comment, Data, or Unknown)
 * based on the line's content and structure.
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

/**
 * Parses a data file content string into a structured DataFileRootNode object.
 *
 * This function splits the content by line breaks, processes each line into
 * appropriate node types (Empty, Boundary, Comment, Data, or Unknown), and
 * assembles them into a root node with metadata.
 *
 * @param {string} content - The full content of the data file to parse
 * @param {string} [fileName] - Optional explicit file name. If not provided, will be inferred from content
 * @returns {RootNode} A structured representation of the data file
 */
export function parseDataFileIntoAst(content: string, fileName?: string): RootNode {
  const children = content
    .split(/\r?\n/)
    .map((line, index) => createNode(line, index));

  return {
    type: NodeTypes.ROOT,
    value: "",
    raw: content,
    line: 0,
    children,
    fileName: fileName ?? inferFileName(content),
    version: inferVersion(content),
  };
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
 * @param {ChildNode[]} nodes - An array of DataFileChildNode objects to stringify
 * @returns {string} A string containing the raw representation of all nodes joined by newline characters
 */
export function stringifyNodes(nodes: ChildNode[]): string {
  return nodes.map((node) => node.raw).join("\n");
}
