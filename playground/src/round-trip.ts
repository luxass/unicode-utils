import { readFileSync } from "node:fs";
import { parseArgs } from "node:util";

import { parseDataFileIntoAst, stringifyNodes } from "@unicode-utils/parser";

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    help: { type: "boolean", short: "h", default: false },
  },
});

if (values.help || positionals.length === 0) {
  console.log(`Usage: pnpm tsx playground/src/round-trip.ts <file-path-or-url>

Parse a UCD file, stringify it, re-parse, and compare node counts.`);
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

const original = parseDataFileIntoAst(content);
console.log(`Original: ${original.children.length} nodes`);

const output = stringifyNodes(original.children);
const reparsed = parseDataFileIntoAst(output);
console.log(`Reparsed: ${reparsed.children.length} nodes`);

const originalCounts = {
  comment: original.children.filter((n) => n.type === "comment").length,
  empty: original.children.filter((n) => n.type === "empty").length,
  unknown: original.children.filter((n) => n.type === "unknown").length,
};
const reparsedCounts = {
  comment: reparsed.children.filter((n) => n.type === "comment").length,
  empty: reparsed.children.filter((n) => n.type === "empty").length,
  unknown: reparsed.children.filter((n) => n.type === "unknown").length,
};

const match =
  originalCounts.comment === reparsedCounts.comment &&
  originalCounts.empty === reparsedCounts.empty &&
  originalCounts.unknown === reparsedCounts.unknown;

if (match) {
  console.log("\n✓ Round-trip preserved all nodes.");
} else {
  console.log("\n✗ Mismatch detected:");
  for (const type of ["comment", "empty", "unknown"] as const) {
    if (originalCounts[type] !== reparsedCounts[type]) {
      console.log(`  ${type}: ${originalCounts[type]} → ${reparsedCounts[type]}`);
    }
  }
}
