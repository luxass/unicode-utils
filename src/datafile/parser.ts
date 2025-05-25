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
 * Parses a string content into a DataFileRootNode
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
 */
export function stringifyNode(node: DataFileNode): string {
  if (node.type === DataFileNodeTypes.Root) {
    return stringifyNodes(node.children);
  }
  return node.raw;
}

/**
 * Creates a text representation of multiple DataFileNodes
 */
export function stringifyNodes(nodes: DataFileChildNode[]): string {
  return nodes.map((node) => node.raw).join("\n");
}
