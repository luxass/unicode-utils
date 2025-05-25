import type { BoundaryStyle } from "../line-helpers";
import type {
  DataFileChildNode,
  DataFileNode,
  DataFileRootNode,
} from "./ast";
import {

  getBoundaryLineStyle,
  inferFileName,
  inferVersion,
  isBoundaryLine,
  isCommentLine,
  isEmptyLine,
  isLineWithData,
} from "../line-helpers";
import { DataFileNodeTypes } from "./ast";

/**
 * Converts a line of text into a DataFileNode
 */
function createNode(line: string, lineNumber: number): DataFileChildNode {
  const trimmedLine = line.trim();

  if (isEmptyLine(line)) {
    return {
      type: DataFileNodeTypes.Empty,
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
      return {
        type: DataFileNodeTypes.Unknown,
        value: trimmedLine,
        raw: line,
        line: lineNumber,
      };
    }

    return {
      type: DataFileNodeTypes.Boundary,
      value: trimmedLine,
      raw: line,
      line: lineNumber,
      style,
    };
  }

  if (isCommentLine(line)) {
    return {
      type: DataFileNodeTypes.Comment,
      value: trimmedLine.substring(1).trim(),
      raw: line,
      line: lineNumber,
    };
  }

  if (isLineWithData(line)) {
    return {
      type: DataFileNodeTypes.Data,
      value: trimmedLine,
      raw: line,
      line: lineNumber,
    };
  }

  return {
    type: DataFileNodeTypes.Unknown,
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
 * @returns {DataFileRootNode} A structured representation of the data file
 */
export function parseDataFile(content: string, fileName?: string): DataFileRootNode {
  const children = content
    .split(/\r?\n/)
    .map((line, index) => createNode(line, index));

  return {
    type: DataFileNodeTypes.Root,
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
 * @param {DataFileNode} node - The DataFileNode to convert to string
 * @returns {string} The raw string representation of the node
 */
export function stringifyNode(node: DataFileNode): string {
  if (node.type === DataFileNodeTypes.Root) {
    return stringifyNodes(node.children);
  }
  return node.raw;
}

/**
 * Creates a text representation of multiple DataFileNodes
 *
 * @param {DataFileChildNode[]} nodes - An array of DataFileChildNode objects to stringify
 * @returns {string} A string containing the raw representation of all nodes joined by newline characters
 */
export function stringifyNodes(nodes: DataFileChildNode[]): string {
  return nodes.map((node) => node.raw).join("\n");
}
