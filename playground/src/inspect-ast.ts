import { readFileSync } from "node:fs";
import { parseArgs } from "node:util";

import { RawDataFile } from "@unicode-utils/parser";

import { formatAst } from "./shared";

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    "max-records": { type: "string", short: "m", default: "5" },
    raw: { type: "boolean", short: "r", default: false },
    "no-color": { type: "boolean", default: false },
    help: { type: "boolean", short: "h", default: false },
  },
});

if (values.help || positionals.length === 0) {
  console.log(`Usage: pnpm tsx playground/src/inspect-ast.ts <file-path-or-url> [options]

Arguments:
  file-path-or-url   Local file path or URL to a UCD file

Options:
  -m, --max-records  Max records per section (default: 5)
  -r, --raw          Show raw lines instead of parsed fields
      --no-color     Disable ANSI colors
  -h, --help         Show this help`);
  process.exit(0);
}

const input = positionals[0]!;
const maxRecords = Number(values["max-records"]);
const showRaw = values.raw!;
const colorize = !values["no-color"];

let raw: RawDataFile;
if (input.startsWith("http://") || input.startsWith("https://")) {
  console.log(`Fetching ${input}...\n`);
  raw = await RawDataFile.from(input);
} else {
  const content = readFileSync(input, "utf-8");
  raw = new RawDataFile(content);
}

console.log(formatAst(raw.ast, { maxRecords, showRaw, colorize }));
