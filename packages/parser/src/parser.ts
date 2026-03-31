import type { ChildNode, Node, RootNode } from "./ast";
import { NodeTypes } from "./ast";
import {
  inferFileName,
  inferVersion,
  isCommentLine,
  isEmptyLine,
  trimCommentLine,
} from "./line-helpers";

export interface ParseAstOptions {
  fileName?: string;
}

function createNode(line: string, lineNumber: number): ChildNode {
  if (isEmptyLine(line)) {
    return {
      type: NodeTypes.EMPTY,
      value: "",
      raw: line,
      line: lineNumber,
    };
  }
  if (isCommentLine(line)) {
    return {
      type: NodeTypes.COMMENT,
      value: trimCommentLine(line),
      raw: line,
      line: lineNumber,
    };
  }
  return {
    type: NodeTypes.UNKNOWN,
    value: line.trim(),
    raw: line,
    line: lineNumber,
  };
}

export function parseDataFileIntoAst(content: string, options?: ParseAstOptions): RootNode {
  const children = content.split(/\r?\n/).map((line, i) => createNode(line, i));
  return {
    type: NodeTypes.ROOT,
    value: "",
    raw: content,
    line: 0,
    children,
    fileName: options?.fileName ?? inferFileName(content),
    version: inferVersion(content),
  };
}

export function stringifyNode(node: Node): string {
  return node.raw;
}

export function stringifyNodes(nodes: ChildNode[]): string {
  return nodes.map((n) => n.raw).join("\n");
}
