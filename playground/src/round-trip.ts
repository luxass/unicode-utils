import { readFileSync } from "node:fs";
import { parseArgs } from "node:util";
import { RawDataFile, isSectionNode, stringifyAst } from "@unicode-utils/parser";

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    "help": { type: "boolean", short: "h", default: false },
  },
});

if (values.help || positionals.length === 0) {
  console.log(`Usage: pnpm tsx playground/src/round-trip.ts <file-path-or-url>

Parse a UCD file, stringify it, re-parse, and compare section/record counts.`);
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

const originalSections = raw.ast.children.filter(isSectionNode);
const originalRecordCount = originalSections.reduce((sum, s) => sum + s.records.length, 0);

console.log(`Original: ${originalSections.length} sections, ${originalRecordCount} records`);

const output = stringifyAst(raw.ast);

const reparsed = new RawDataFile(output);
const reparsedSections = reparsed.ast.children.filter(isSectionNode);
const reparsedRecordCount = reparsedSections.reduce((sum, s) => sum + s.records.length, 0);

console.log(`Reparsed: ${reparsedSections.length} sections, ${reparsedRecordCount} records`);

const sectionMatch = originalSections.length === reparsedSections.length;
const recordMatch = originalRecordCount === reparsedRecordCount;

if (sectionMatch && recordMatch) {
  console.log("\n✓ Round-trip preserved all sections and records.");
} else {
  console.log("\n✗ Mismatch detected:");
  if (!sectionMatch) {
    console.log(`  Sections: ${originalSections.length} → ${reparsedSections.length}`);
  }
  if (!recordMatch) {
    console.log(`  Records: ${originalRecordCount} → ${reparsedRecordCount}`);
  }
}

for (let i = 0; i < Math.max(originalSections.length, reparsedSections.length); i++) {
  const orig = originalSections[i];
  const repr = reparsedSections[i];
  if (orig?.name !== repr?.name) {
    console.log(`  Section ${i}: "${orig?.name}" → "${repr?.name}"`);
  }
}
