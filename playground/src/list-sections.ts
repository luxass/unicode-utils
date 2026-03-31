import { readFileSync } from "node:fs";
import { parseArgs } from "node:util";

import { isSectionNode, RawDataFile } from "@unicode-utils/parser";

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    help: { type: "boolean", short: "h", default: false },
  },
});

if (values.help || positionals.length === 0) {
  console.log(`Usage: pnpm tsx playground/src/list-sections.ts <file-path-or-url>

Lists all sections in a UCD file with record counts, @missing annotations, and field names.`);
  process.exit(0);
}

const input = positionals[0]!;

let raw: RawDataFile;
if (input.startsWith("http://") || input.startsWith("https://")) {
  console.log(`Fetching ${input}...\n`);
  raw = await RawDataFile.from(input);
} else {
  const content = readFileSync(input, "utf-8");
  raw = new RawDataFile(content);
}

const sections = raw.ast.children.filter(isSectionNode);

console.log(`File: ${raw.fileName} v${raw.version}`);
console.log(`Total sections: ${sections.length}`);
console.log(`Total records: ${sections.reduce((s, sec) => s + sec.records.length, 0)}`);
console.log();

const maxNameLen = Math.max(...sections.map((s) => s.name.length), 4);

console.log(`${"Section".padEnd(maxNameLen)}  Records  @missing  Fields`);
console.log(`${"─".repeat(maxNameLen)}  ───────  ────────  ──────`);

for (const section of sections) {
  const name = section.name.padEnd(maxNameLen);
  const records = String(section.records.length).padStart(7);
  const missing = String(section.children.filter((c) => c.type === "missing-annotation").length).padStart(8);
  const fields = section.fieldNames?.join(", ") ?? "(generic)";
  console.log(`${name}  ${records}  ${missing}  ${fields}`);
}
