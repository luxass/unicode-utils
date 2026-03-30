/**
 * Check field names and types for each section of a UCD file.
 *
 * Shows whether the FileParser matched (named fields) or fell back to generic.
 *
 * Edit the VERSION and FILE below, then run:
 *   tsx packages/playground/src/check-fields.ts
 */
import { RawDataFile, isSectionNode } from "@unicode-utils/parser";

// ─── Configure here ───────────────────────────────────────────────────────────

const VERSION = "16.0.0";
const FILE = "Scripts.txt";

// ─── Run ──────────────────────────────────────────────────────────────────────

const url = `https://unicode.org/Public/${VERSION}/ucd/${FILE}`;
console.log(`Fetching ${url}...\n`);

const raw = await RawDataFile.from(url);
const sections = raw.ast.children.filter(isSectionNode);

console.log(`File: ${raw.fileName} v${raw.version}`);
console.log(`Sections: ${sections.length}\n`);

for (const section of sections) {
  console.log(`── ${section.name} (${section.records.length} records)`);

  if (section.fieldNames) {
    console.log(`   fields: ${section.fieldNames.join(", ")}`);
  } else {
    console.log("   fields: (generic — no FileParser matched)");
  }

  // Show first record's fields as example
  const first = section.records[0];
  if (first?.parsedFields) {
    console.log("   example:");
    for (const field of first.parsedFields) {
      const val = typeof field.value === "object" && field.value !== null
        ? JSON.stringify(field.value)
        : String(field.value);
      console.log(`     ${field.name}: ${val} (raw: "${field.rawValue}")`);
    }
  }
  console.log();
}
