/**
 * Round-trip test: parse → stringify → re-parse a UCD file.
 *
 * Compares section count and record count to verify no data loss.
 *
 * Edit the VERSION and FILE below, then run:
 *   tsx packages/playground/src/round-trip.ts
 */
import { RawDataFile, isSectionNode, stringifyAst } from "@unicode-utils/parser";

// ─── Configure here ───────────────────────────────────────────────────────────

const VERSION = "16.0.0";
const FILE = "Scripts.txt";

// ─── Run ──────────────────────────────────────────────────────────────────────

const url = `https://unicode.org/Public/${VERSION}/ucd/${FILE}`;
console.log(`Fetching ${url}...\n`);

const raw = await RawDataFile.from(url);
const originalSections = raw.ast.children.filter(isSectionNode);
const originalRecordCount = originalSections.reduce((sum, s) => sum + s.records.length, 0);

console.log(`Original: ${originalSections.length} sections, ${originalRecordCount} records`);

// Stringify
const output = stringifyAst(raw.ast);

// Re-parse
const reparsed = new RawDataFile(output);
const reparsedSections = reparsed.ast.children.filter(isSectionNode);
const reparsedRecordCount = reparsedSections.reduce((sum, s) => sum + s.records.length, 0);

console.log(`Reparsed: ${reparsedSections.length} sections, ${reparsedRecordCount} records`);

// Compare
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

// Compare section names
for (let i = 0; i < Math.max(originalSections.length, reparsedSections.length); i++) {
  const orig = originalSections[i];
  const repr = reparsedSections[i];
  if (orig?.name !== repr?.name) {
    console.log(`  Section ${i}: "${orig?.name}" → "${repr?.name}"`);
  }
}
