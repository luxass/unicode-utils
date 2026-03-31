import type {
  ChildNode,
  RootNode,
} from "@unicode-utils/parser";
import {
  isCommentNode,
  isEmptyNode,
  isUnknownNode,
} from "@unicode-utils/parser";
import { type Colors, makeColor } from "./colors";

export interface FormatOptions {
  colorize?: boolean;
}

const TEE = "├── ";
const ELBOW = "└── ";

function truncate(s: string, max: number): string {
  if (s.length <= max) return s;
  return `${s.slice(0, max - 3)}...`;
}

function formatChildNode(node: ChildNode, c: Colors): string {
  if (isCommentNode(node)) {
    return `${c.cyan("CommentNode")} ${c.dim(`L${node.line}`)}: ${c.dim(`"${truncate(node.value, 60)}"`)}`;
  }
  if (isEmptyNode(node)) {
    return `${c.dim("EmptyNode")} ${c.dim(`L${node.line}`)}`;
  }
  if (isUnknownNode(node)) {
    return `${c.yellow("UnknownNode")} ${c.dim(`L${node.line}`)}: ${c.dim(truncate(node.raw, 60))}`;
  }
  return `${c.dim("Node")} ${c.dim(`L${(node as ChildNode).line}`)}`;
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

  for (let i = 0; i < root.children.length; i++) {
    const child = root.children[i]!;
    const isLast = i === root.children.length - 1;
    const connector = isLast ? ELBOW : TEE;
    lines.push(`${connector}${formatChildNode(child, c)}`);
  }

  return lines.join("\n");
}
