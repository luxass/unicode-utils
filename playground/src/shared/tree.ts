import type {
  ChildNode,
  DataNode,
  ParsedField,
  RootNode,
  SectionNode,
} from "@unicode-utils/parser";
import {
  isBoundaryNode,
  isCommentNode,
  isDataNode,
  isEmptyCommentNode,
  isEmptyNode,
  isEOFNode,
  isPropertyNode,
  isSectionNode,
  isUnknownNode,
} from "@unicode-utils/parser";

export interface FormatOptions {
  maxRecords?: number;
  showRaw?: boolean;
  colorize?: boolean;
}

const RESET = "\x1B[0m";
const DIM = "\x1B[2m";
const BOLD = "\x1B[1m";
const CYAN = "\x1B[36m";
const GREEN = "\x1B[32m";
const YELLOW = "\x1B[33m";
const MAGENTA = "\x1B[35m";
const BLUE = "\x1B[34m";
const RED = "\x1B[31m";

function makeColor(enabled: boolean) {
  if (!enabled) {
    return {
      dim: (s: string) => s,
      bold: (s: string) => s,
      cyan: (s: string) => s,
      green: (s: string) => s,
      yellow: (s: string) => s,
      magenta: (s: string) => s,
      blue: (s: string) => s,
      red: (s: string) => s,
    };
  }
  return {
    dim: (s: string) => `${DIM}${s}${RESET}`,
    bold: (s: string) => `${BOLD}${s}${RESET}`,
    cyan: (s: string) => `${CYAN}${s}${RESET}`,
    green: (s: string) => `${GREEN}${s}${RESET}`,
    yellow: (s: string) => `${YELLOW}${s}${RESET}`,
    magenta: (s: string) => `${MAGENTA}${s}${RESET}`,
    blue: (s: string) => `${BLUE}${s}${RESET}`,
    red: (s: string) => `${RED}${s}${RESET}`,
  };
}

const PIPE = "│   ";
const TEE = "├── ";
const ELBOW = "└── ";
const BLANK = "    ";

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

function formatDataNode(node: DataNode, c: ReturnType<typeof makeColor>, showRaw: boolean): string {
  if (showRaw || !node.parsedFields || node.parsedFields.length === 0) {
    return `${c.green("DataNode")} ${c.dim(`L${node.line}`)}: ${c.dim(truncate(node.raw, 80))}`;
  }
  const fields = node.parsedFields
    .map((f) => `${c.blue(f.name ?? "?")}=${formatFieldValue(f)}`)
    .join(" ");
  return `${c.green("DataNode")} ${c.dim(`L${node.line}`)}: ${fields}`;
}

function formatChildNode(node: ChildNode, c: ReturnType<typeof makeColor>): string {
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
  if (isDataNode(node)) {
    return formatDataNode(node, c, false);
  }
  return `${node.type} ${c.dim(`L${node.line}`)}`;
}

function truncate(s: string, max: number): string {
  if (s.length <= max) return s;
  return `${s.slice(0, max - 3)}...`;
}

function formatSectionNode(
  section: SectionNode,
  c: ReturnType<typeof makeColor>,
  prefix: string,
  isLast: boolean,
  options: Required<FormatOptions>,
): string[] {
  const lines: string[] = [];
  const connector = isLast ? ELBOW : TEE;
  const childPrefix = prefix + (isLast ? BLANK : PIPE);

  const recordCount = section.records.length;
  const missingCount = section.missingAnnotations.length;
  let header = `${c.bold(c.magenta("SectionNode"))} ${c.bold(`"${section.name}"`)} (${recordCount} record${recordCount !== 1 ? "s" : ""}`;
  if (missingCount > 0) {
    header += `, ${missingCount} @missing`;
  }
  header += ")";
  lines.push(`${prefix}${connector}${header}`);

  const items: string[] = [];

  if (section.fieldNames && section.fieldNames.length > 0) {
    items.push(`${c.dim("fields:")} ${section.fieldNames.map((n) => c.blue(n)).join(", ")}`);
  }

  for (const ann of section.missingAnnotations) {
    items.push(
      `${c.yellow("@missing:")} ${ann.start}..${ann.end} ${c.dim("→")} ${ann.defaultPropertyValue}`,
    );
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
    } else {
      const connector = isLast ? ELBOW : TEE;
      lines.push(`${connector}${formatChildNode(child, c)}`);
    }
  }

  return lines.join("\n");
}
