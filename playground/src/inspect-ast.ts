import { parseArgs } from "node:util";

import { parseDataFileIntoAst } from "@unicode-utils/parser";

import { formatAst } from "./shared/tree";

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    "no-color": { type: "boolean", default: false },
    help: { type: "boolean", short: "h", default: false },
  },
});

if (values.help || positionals.length === 0) {
  console.log(`Usage: pnpm tsx playground/src/inspect-ast.ts <file-path> [options]

Arguments:
  file-path   UCD file path (e.g. 16.0.0/Scripts.txt)
              Fetched from https://ucd-store.ucdjs.dev/<file-path>

Options:
      --no-color     Disable ANSI colors
  -h, --help         Show this help

Examples:
  # Simple file — one boundary, one section of data
  pnpm tsx playground/src/inspect-ast.ts 16.0.0/Blocks.txt

  # Multiple subsections with @missing annotations
  pnpm tsx playground/src/inspect-ast.ts 16.0.0/DerivedAge.txt

  # Multi-field data with inline comments
  pnpm tsx playground/src/inspect-ast.ts 16.0.0/CaseFolding.txt

  # Bracket pairs — compact file with @missing default
  pnpm tsx playground/src/inspect-ast.ts 16.0.0/BidiBrackets.txt

  # Many sections, property aliases for all UCD properties
  pnpm tsx playground/src/inspect-ast.ts 16.0.0/PropertyValueAliases.txt

  # Older version for comparison
  pnpm tsx playground/src/inspect-ast.ts 5.0.0/Scripts.txt`);
  process.exit(0);
}

const input = positionals[0]!;
const colorize = !values["no-color"];

const url = `https://ucd-store.ucdjs.dev/${input}`;
console.log(`Fetching ${url}...\n`);
const response = await fetch(url);
if (!response.ok) {
  console.error(`Failed to fetch: ${response.status} ${response.statusText}`);
  process.exit(1);
}
const content = await response.text();

const ast = parseDataFileIntoAst(content);

console.log(formatAst(ast, { colorize }));
