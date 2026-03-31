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
  console.log(`Usage: pnpm tsx playground/src/check-fields.ts <file-path-or-url>

Shows field names and types for each section, indicating whether a
FileParser matched (named fields) or fell back to generic.`);
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
console.log(`Sections: ${sections.length}\n`);

for (const section of sections) {
  console.log(`── ${section.name} (${section.records.length} records)`);

  if (section.fieldNames) {
    console.log(`   fields: ${section.fieldNames.join(", ")}`);
  } else {
    console.log("   fields: (generic — no FileParser matched)");
  }

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
