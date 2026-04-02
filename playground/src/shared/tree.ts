import type { ChildNode, RootNode, SectionChildNode } from "@unicode-utils/parser";
import {
  isBoundaryNode,
  isCommentNode,
  isDataNode,
  isEmptyNode,
  isMissingAnnotationNode,
  isSectionNode,
  isUnknownNode,
} from "@unicode-utils/parser";

import { type Colors, makeColor } from "./colors";

export interface FormatOptions {
  colorize?: boolean;
}

const TEE = "├── ";
const ELBOW = "└── ";
const PIPE = "│   ";
const SPACE = "    ";

function truncate(s: string, max: number): string {
  if (s.length <= max) return s;
  return `${s.slice(0, max - 3)}...`;
}

function formatLeafNode(node: ChildNode | SectionChildNode, c: Colors): string {
  if (isCommentNode(node)) {
    return `${c.cyan("CommentNode")} ${c.dim(`L${node.line}`)}: ${c.dim(`"${truncate(node.value, 60)}"`)}`;
  }
  if (isEmptyNode(node)) {
    return `${c.dim("EmptyNode")} ${c.dim(`L${node.line}`)}`;
  }
  if (isBoundaryNode(node)) {
    return `${c.magenta("BoundaryNode")} ${c.dim(`L${node.line}`)} ${c.dim(`[style: "${node.style}"]`)}`;
  }
  if (isDataNode(node)) {
    const cp =
      node.codepoint[0] === node.codepoint[1]
        ? node.codepoint[0]
        : `${node.codepoint[0]}..${node.codepoint[1]}`;
    const fields = node.fields.slice(1).join("; ");
    const detail = fields ? `${cp} ${c.dim(`[${fields}]`)}` : cp;
    const comment = node.comment ? ` ${c.dim(`# ${truncate(node.comment, 40)}`)}` : "";
    return `${c.green("DataNode")} ${c.dim(`L${node.line}`)}: ${detail}${comment}`;
  }
  if (isMissingAnnotationNode(node)) {
    const ann = node.annotation;
    const detail = ann
      ? `${ann.start}..${ann.end}${ann.propertyName ? `; ${ann.propertyName}` : ""}; ${ann.defaultPropertyValue}`
      : "null";
    return `${c.red("MissingAnnotationNode")} ${c.dim(`L${node.line}`)}: ${c.dim(detail)}`;
  }
  if (isUnknownNode(node)) {
    return `${c.yellow("UnknownNode")} ${c.dim(`L${node.line}`)}: ${c.dim(truncate(node.raw, 60))}`;
  }
  return `${c.dim("Node")} ${c.dim(`L${node.line}`)}`;
}

function formatChildren(
  children: readonly (ChildNode | SectionChildNode)[],
  prefix: string,
  c: Colors,
  lines: string[],
): void {
  for (let i = 0; i < children.length; i++) {
    const child = children[i]!;
    const isLast = i === children.length - 1;
    const connector = isLast ? ELBOW : TEE;
    const childPrefix = prefix + (isLast ? SPACE : PIPE);

    if (isSectionNode(child)) {
      const sectionLabel = `${c.blue("SectionNode")} ${c.dim(`L${child.line}`)} ${c.dim(`(${child.children.length} children)`)}`;
      lines.push(`${prefix}${connector}${sectionLabel}`);
      formatChildren(child.children, childPrefix, c, lines);
    } else {
      lines.push(`${prefix}${connector}${formatLeafNode(child, c)}`);
    }
  }
}

export function formatAst(root: RootNode, options?: FormatOptions): string {
  const colorize =
    options?.colorize ?? (typeof process !== "undefined" && process.stdout?.isTTY === true);
  const c = makeColor(colorize);
  const lines: string[] = [];

  let rootHeader = c.bold("RootNode");
  if (root.fileName || root.version) {
    const parts: string[] = [];
    if (root.fileName) parts.push(root.fileName);
    if (root.version) parts.push(`v${root.version}`);
    rootHeader += ` ${c.dim(`[${parts.join(" ")}]`)}`;
  }
  rootHeader += ` ${c.dim(`(${root.children.length} nodes)`)}`;
  lines.push(rootHeader);

  formatChildren(root.children, "", c, lines);

  return lines.join("\n");
}
