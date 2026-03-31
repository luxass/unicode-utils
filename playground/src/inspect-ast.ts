import { readFileSync } from "node:fs";
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
  console.log(`Usage: pnpm tsx playground/src/inspect-ast.ts <file-path-or-url> [options]

Arguments:
  file-path-or-url   Local file path or URL to a UCD file

Options:
      --no-color     Disable ANSI colors
  -h, --help         Show this help`);
  process.exit(0);
}

const input = positionals[0]!;
const colorize = !values["no-color"];

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

console.log(formatAst(ast, { colorize }));
