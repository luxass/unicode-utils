import { readFileSync } from "node:fs";
import { parseArgs } from "node:util";

import {
  isCommentNode,
  isEmptyNode,
  isUnknownNode,
  parseDataFileIntoAst,
} from "@unicode-utils/parser";

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    help: { type: "boolean", short: "h", default: false },
  },
});

if (values.help || positionals.length === 0) {
  console.log(`Usage: pnpm tsx playground/src/list-nodes.ts <file-path-or-url>

Lists a breakdown of node types (comment, empty, unknown) in a UCD file.`);
  process.exit(0);
}

const input = positionals[0]!;

let content: string;
if (input.startsWith("http://") || input.startsWith("https://")) {
  console.log(`Fetching ${input}...\n`);
  const response = await fetch(input);
  if (!response.ok) {
    console.error(`Failed to fetch: ${response.status} ${response.statusText}`);
    process.exit(1);
  }
  content = await response.text();
} else {
  content = readFileSync(input, "utf-8");
}

const ast = parseDataFileIntoAst(content);
const nodes = ast.children;

const comments = nodes.filter(isCommentNode);
const empties = nodes.filter(isEmptyNode);
const unknowns = nodes.filter(isUnknownNode);

const fileLabel = [ast.fileName, ast.version ? `v${ast.version}` : undefined]
  .filter(Boolean)
  .join(" ");

console.log(`File: ${fileLabel || input}`);
console.log(`Total nodes: ${nodes.length}`);
console.log();

const maxLabelLen = "Unknown".length;
console.log(`${"Type".padEnd(maxLabelLen)}  Count`);
console.log(`${"─".repeat(maxLabelLen)}  ─────`);
console.log(`${"Comment".padEnd(maxLabelLen)}  ${String(comments.length).padStart(5)}`);
console.log(`${"Empty".padEnd(maxLabelLen)}  ${String(empties.length).padStart(5)}`);
console.log(`${"Unknown".padEnd(maxLabelLen)}  ${String(unknowns.length).padStart(5)}`);

if (unknowns.length > 0) {
  console.log();
  console.log("Unknown nodes (first 10):");
  for (const node of unknowns.slice(0, 10)) {
    const preview = node.raw.length > 80 ? `${node.raw.slice(0, 77)}...` : node.raw;
    console.log(`  L${node.line}: ${preview}`);
  }
  if (unknowns.length > 10) {
    console.log(`  ... and ${unknowns.length - 10} more`);
  }
}
