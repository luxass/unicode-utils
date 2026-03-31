import type {
  ChildNode,
  DataNode,
  ParsedField,
  RootNode,
  SectionChildNode,
  SectionNode,
} from "@unicode-utils/parser";
import {
  isBoundaryNode,
  isCommentNode,
  isDataNode,
  isEmptyCommentNode,
  isEmptyNode,
  isEOFNode,
  isMissingAnnotationNode,
  isPropertyNode,
  isSectionNode,
  isUnknownNode,
} from "@unicode-utils/parser";
import { type Colors, makeColor } from "./colors";

export interface FormatOptions {
  maxRecords?: number;
  showRaw?: boolean;
  colorize?: boolean;
}

const PIPE = "│   ";
const TEE = "├── ";
const ELBOW = "└── ";
const BLANK = "    ";

function truncate(s: string, max: number): string {
  if (s.length <= max) return s;
  return `${s.slice(0, max - 3)}...`;
}

function formatFieldValue(field: ParsedField): string {
  const val = field.value;
  if (val === undefined) return "undefined";
  if (val === null) return "null";
  if (typeof val === "object" && !Array.isArray(val) && "start" in val && "end" in val) {
    const r = val as { start: string; end: string };
    return `${r.start}..${r.end}`;
  }
  if (Array.isArray(val)) return val.join(" ");
  return String(val);
}

function formatDataNode(node: DataNode, c: Colors, showRaw: boolean): string {
  if (showRaw || !node.parsedFields || node.parsedFields.length === 0) {
    return `${c.green("DataNode")} ${c.dim(`L${node.line}`)}: ${c.dim(truncate(node.raw, 80))}`;
  }
  const fields = node.parsedFields
    .map((f) => `${c.blue(f.name ?? "?")}=${formatFieldValue(f)}`)
    .join(" ");
  return `${c.green("DataNode")} ${c.dim(`L${node.line}`)}: ${fields}`;
}

function formatChildNode(node: SectionChildNode, c: Colors): string {
  if (isCommentNode(node)) {
    return `${c.cyan("CommentNode")} ${c.dim(`L${node.line}`)}: ${c.dim(`"${truncate(node.value, 60)}"`)}`;
  }
  if (isEmptyCommentNode(node)) {
    return `${c.cyan("EmptyCommentNode")} ${c.dim(`L${node.line}`)}`;
  }
  if (isBoundaryNode(node)) {
    return `${c.yellow("BoundaryNode")} ${c.dim(`L${node.line}`)} [${node.style}]`;
  }
  if (isEmptyNode(node)) {
    return `${c.dim("EmptyNode")} ${c.dim(`L${node.line}`)}`;
  }
  if (isEOFNode(node)) {
    return `${c.red("EOFNode")} ${c.dim(`L${node.line}`)}`;
  }
  if (isPropertyNode(node)) {
    return `${c.magenta("PropertyNode")} ${c.dim(`L${node.line}`)}: ${node.propertyValue ?? ""}`;
  }
  if (isUnknownNode(node)) {
    return `${c.red("UnknownNode")} ${c.dim(`L${node.line}`)}: ${c.dim(truncate(node.raw, 60))}`;
  }
  if (isMissingAnnotationNode(node)) {
    return `${c.yellow("MissingAnnotationNode")} ${c.dim(`L${node.line}`)}: ${c.dim(truncate(node.raw, 60))}`;
  }
  return formatDataNode(node, c, false);
}

function formatSectionNode(
  section: SectionNode,
  c: Colors,
  prefix: string,
  isLast: boolean,
  options: Required<FormatOptions>,
): string[] {
  const lines: string[] = [];
  const connector = isLast ? ELBOW : TEE;
  const childPrefix = prefix + (isLast ? BLANK : PIPE);

  const recordCount = section.records.length;
  const header = `${c.bold(c.magenta("SectionNode"))} ${c.bold(`"${section.name}"`)} (${recordCount} record${recordCount !== 1 ? "s" : ""})`;
  lines.push(`${prefix}${connector}${header}`);

  const items: string[] = [];

  if (section.fieldNames && section.fieldNames.length > 0) {
    items.push(`${c.dim("fields:")} ${section.fieldNames.map((n) => c.blue(n)).join(", ")}`);
  }

  let dataCount = 0;
  const maxRecords = options.maxRecords;
  for (const child of section.children) {
    if (child.type === "data") {
      dataCount++;
      if (dataCount <= maxRecords) {
        items.push(formatDataNode(child, c, options.showRaw));
      }
    } else {
      items.push(formatChildNode(child, c));
    }
  }
  if (dataCount > maxRecords) {
    items.push(c.dim(`... ${dataCount - maxRecords} more data records (${dataCount} total)`));
  }

  for (let i = 0; i < items.length; i++) {
    const childConnector = i === items.length - 1 ? ELBOW : TEE;
    lines.push(`${childPrefix}${childConnector}${items[i]}`);
  }

  return lines;
}

export function formatAst(root: RootNode, options?: FormatOptions): string {
  const colorize =
    options?.colorize ?? (typeof process !== "undefined" && process.stdout?.isTTY === true);
  const resolved: Required<FormatOptions> = {
    maxRecords: options?.maxRecords ?? 10,
    showRaw: options?.showRaw ?? false,
    colorize,
  };

  const c = makeColor(resolved.colorize);
  const lines: string[] = [];

  let rootHeader = `${c.bold("RootNode")}`;
  if (root.fileName || root.version) {
    const parts: string[] = [];
    if (root.fileName) parts.push(root.fileName);
    if (root.version) parts.push(`v${root.version}`);
    rootHeader += ` ${c.dim(`[${parts.join(" ")}]`)}`;
  }
  lines.push(rootHeader);

  for (let i = 0; i < root.children.length; i++) {
    const child = root.children[i]!;
    const isLast = i === root.children.length - 1;

    if (isSectionNode(child)) {
      lines.push(...formatSectionNode(child, c, "", isLast, resolved));
    } else if (!isSectionNode(child)) {
      const connector = isLast ? ELBOW : TEE;
      lines.push(`${connector}${formatChildNode(child, c)}`);
    }
  }

  return lines.join("\n");
}
