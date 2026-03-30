/**
 * List all sections in a UCD file with their record counts.
 *
 * Edit the VERSION and FILE below, then run:
 *   tsx packages/playground/src/list-sections.ts
 */
import { RawDataFile, isSectionNode } from "@unicode-utils/parser";

// ─── Configure here ───────────────────────────────────────────────────────────

const VERSION = "16.0.0";
const FILE = "ArabicShaping.txt";

// ─── Run ──────────────────────────────────────────────────────────────────────

const url = `https://unicode.org/Public/${VERSION}/ucd/${FILE}`;
console.log(`Fetching ${url}...\n`);

const raw = await RawDataFile.from(url);
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
  const missing = String(section.missingAnnotations.length).padStart(8);
  const fields = section.fieldNames?.join(", ") ?? "(generic)";
  console.log(`${name}  ${records}  ${missing}  ${fields}`);
}
