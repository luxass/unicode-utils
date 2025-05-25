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
 * Converts a single line of text into a corresponding AST node for the custom data file format.
 *
 * The function classifies the line as empty, boundary, comment, data, or unknown, and returns a node object containing the parsed value, original line, and line number.
 *
 * @param line - The line of text to convert.
 * @param lineNumber - The line number in the source file.
 * @returns A {@link DataFileChildNode} representing the parsed line.
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
    return {
      type: DataFileNodeTypes.Boundary,
      value: trimmedLine,
      raw: line,
      line: lineNumber,
      style: getBoundaryLineStyle(line),
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
 * Parses the content of a custom data file into a root AST node.
 *
 * Splits the input string into lines, converts each line into a typed child node, and returns a root node containing all children and inferred metadata such as file name and version.
 *
 * @param content - The full text content of the data file to parse.
 * @param fileName - Optional file name to associate with the parsed root node.
 * @returns A {@link DataFileRootNode} representing the parsed abstract syntax tree of the file.
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
 * Converts a {@link DataFileNode} into its text representation.
 *
 * If the node is a root node, all child nodes are stringified and joined; otherwise, the node's raw line is returned.
 *
 * @param node - The AST node to stringify.
 * @returns The string representation of the node or its subtree.
 */
export function stringifyNode(node: DataFileNode): string {
  if (node.type === DataFileNodeTypes.Root) {
    return stringifyNodes(node.children);
  }
  return node.raw;
}

/**
 * Converts an array of data file AST child nodes into their original text representation.
 *
 * Joins the raw line content of each node with newline characters to reconstruct the file segment.
 *
 * @param nodes - The array of data file child nodes to stringify.
 * @returns The combined string representation of the nodes.
 */
export function stringifyNodes(nodes: DataFileChildNode[]): string {
  return nodes.map((node) => node.raw).join("\n");
}
