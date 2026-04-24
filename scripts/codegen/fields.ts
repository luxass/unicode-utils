import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { sanitizeIdentifier, toPascalCase, toSnakeCase } from "@luxass/utils";
import type { LanguageModel } from "ai";
import { generateText, Output, stepCountIs, tool } from "ai";
import { z } from "zod";

const CACHE_DIR = path.resolve(import.meta.dirname, ".cache");

async function fetchUnicodeReport(url: string): Promise<string> {
  const cacheKey = url.replace(/[^a-z0-9]/gi, "_");
  const cachePath = path.join(CACHE_DIR, `${cacheKey}.txt`);
  try {
    return await readFile(cachePath, "utf-8");
  } catch {
    // miss — fall through
  }

  console.log(`fetching ${url}...`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`failed to fetch ${url}: ${res.status}`);
  const html = await res.text();

  const text = html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(Number.parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number.parseInt(dec, 10)))
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  await mkdir(CACHE_DIR, { recursive: true });
  await writeFile(cachePath, text, "utf-8");
  return text;
}

const SYSTEM_PROMPT = `
Extract TypeScript field definitions from a Unicode data file header.

## How to proceed
1. Read the header (each line is prefixed "L<n>: " where n is the 1-indexed source line number).
2. Identify which skill matches the header's pattern.
3. Call the \`load_skill\` tool with the matching skill name to retrieve its detailed playbook.
4. Follow that skill's instructions to produce the output.
5. Call the \`validate_fields\` tool with your candidate fields.
6. If validation returns issues, fix the fields and validate again.
7. If NO skill matches, return { "fields": [], "confidence": 0, "notes": "no matching skill" }.

You MUST call \`load_skill\` and \`validate_fields\` before producing a final answer unless you are returning an empty fields array.

## Available skills
- "field-n-pattern" — header contains explicit "# Field N: Name" declarations.
- "format-line" — header contains a "# Format:" block with angle-bracket tokens like "# <codepoint> ; <property>".
- "property-only-header" — DEFAULT FALLBACK. Use whenever the header has NO "# Field N:" declarations AND NO "# Format:" block. This covers minimal headers that only reference tr44 (e.g. PropList.txt, DerivedCoreProperties.txt, auxiliary/*, extracted/*), "# Property:" headers referencing a specific UAX/UTS/TR (e.g. Scripts.txt), and files with empty headers like UnicodeData.txt (documented in UAX #44).

"No matching skill" should be EXTREMELY rare — almost every UCD file fits one of the three skills above. If none of field-n-pattern or format-line match, load "property-only-header".

---

## Rules that ALWAYS apply (regardless of skill)

### Output schema
Top-level: \`{ fields: [{ name, type, description, source }], confidence: number, notes: string }\`

### Field naming
- snake_case only. Must be a valid TypeScript identifier.
- Strip angle brackets, parentheses, and special characters from names.
- Preserve the exact order fields appear in the header — never reorder.

### Types
Valid TypeScript only: string, number, boolean, string[], number[], Array<string>, Array<number>, Record<string, string>, Record<string, number>, Record<string, unknown>, unknown.
- String literal unions: each value quoted with pipe separator — "\\"R\\" | \\"L\\" | \\"D\\""
- If a field has known values but may also accept other strings, use \`(string & {})\` as the last union member — e.g. \`"Comp" | "ExtA" | "Rejected" | (string & {})\`. NEVER use \`| string\` — it erases the literal types at the TypeScript level.
- Angle-bracket values like <none> → remove brackets and quote: "\\"none\\""
- Never use: union, object, array, map, list, none (unquoted).

### Descriptions
- One sentence, copied from the header wording when possible.
- Do NOT prefix with "FieldName:" — the property name is already visible.

### Source attribution (STRICTLY ENFORCED)
Every field's \`source\` MUST match EXACTLY one of:
- "header:L<n>" — single header line (e.g. "header:L14").
- "header:L<start>-L<end>" — contiguous range of header lines (e.g. "header:L14-L16").
- "report:<url>" — a URL actually fetched via \`fetch_unicode_report\` in this session.

ANY other value — including "inferred", "guessed", "unknown", empty string, or anything derived from training data knowledge — is REJECTED and the whole response fails validation.

If you cannot cite a source for EVERY field, return \`{ "fields": [], "confidence": 0, "notes": "<why>" }\` instead.

Do NOT include the "L<n>: " prefix in field names, descriptions, or values — it is metadata only.

### Confidence rubric
- 1.0: explicit Field N declarations, no ambiguity.
- 0.8: explicit declarations with some type judgement.
- 0.5: derived from a fetched report.
- 0.2: heavily inferred — usually prefer returning [].
- 0.0: nothing to extract.
`.trim();

export interface Field {
  name: string;
  type: string;
  description: string;
  source: string;
}

export interface RenderedFile {
  relPath: string;
  code: string;
}

export interface GenerateFieldsResult {
  fields: Field[];
  confidence: number;
  notes: string;
}

const MAX_VALIDATION_ATTEMPTS = 3;
const HEADER_SOURCE_RE = /^header:L\d+(?:-L\d+)?$/;

function normalizeReportUrl(url: string): string {
  return url.split("#")[0]!.replace(/\/tr\d+-\d+\.html$/, "/");
}

function parseNumberedHeadingLines(heading: string): Map<number, string> {
  const lines = new Map<number, string>();
  for (const rawLine of heading.split("\n")) {
    const match = /^L(\d+):\s?(.*)$/.exec(rawLine);
    if (match == null) continue;
    lines.set(Number(match[1]!), match[2] ?? "");
  }
  return lines;
}

function extractHeaderRange(source: string): [number, number] | null {
  const match = /^header:L(\d+)(?:-L(\d+))?$/.exec(source);
  if (match == null) return null;
  const start = Number(match[1]!);
  const end = Number(match[2] ?? match[1]!);
  return [Math.min(start, end), Math.max(start, end)];
}

function getHeaderSourceText(source: string, headingLines: ReadonlyMap<number, string>): string {
  const range = extractHeaderRange(source);
  if (range == null) return "";

  const [start, end] = range;
  const parts: string[] = [];
  for (let line = start; line <= end; line++) {
    const text = headingLines.get(line);
    if (text != null && text.trim() !== "") {
      parts.push(text.trim());
    }
  }
  return parts.join(" ");
}

function tokenizeForGrounding(text: string): string[] {
  const STOPWORDS = new Set([
    "the", "and", "for", "with", "from", "that", "this", "used", "value", "values", "field",
    "unicode", "code", "point", "points", "line", "lines", "data", "file", "property",
  ]);
  const tokens = text.toLowerCase().match(/[a-z0-9]{3,}/g) ?? [];
  return [...new Set(tokens.filter((token) => !STOPWORDS.has(token)))];
}

function descriptionLooksGrounded(description: string, sourceText: string): boolean {
  const descTokens = tokenizeForGrounding(description);
  if (descTokens.length === 0) return true;

  const sourceTokenSet = new Set(tokenizeForGrounding(sourceText));
  if (sourceTokenSet.size === 0) return false;

  let overlap = 0;
  for (const token of descTokens) {
    if (sourceTokenSet.has(token)) overlap++;
  }

  return (overlap / descTokens.length) >= 0.35;
}

function buildConservativeDescription(fieldName: string, sourceText: string): string {
  let text = sourceText
    .replace(/#/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  text = text.replace(/^Field\s+\d+\s*:\s*/i, "");

  const fieldNamePattern = fieldName.replace(/_/g, "[\\s_]+");
  const fieldPrefix = new RegExp(`^${fieldNamePattern}\\s*[:,-]?\\s*`, "i");
  text = text.replace(fieldPrefix, "").trim();

  if (text === "") {
    return "See source header for details.";
  }

  const firstSentence = text.split(/(?<=[.!?])\s+/)[0]!.trim();
  const sentence = firstSentence.length > 0 ? firstSentence : text;
  const clipped = sentence.length > 180 ? `${sentence.slice(0, 177).trimEnd()}...` : sentence;
  return /[.!?]$/.test(clipped) ? clipped : `${clipped}.`;
}

function normalizeFieldDescription(
  field: Field,
  normalizedSource: string,
  headingLines: ReadonlyMap<number, string>,
): string {
  const trimmed = field.description.trim();
  if (trimmed === "") {
    if (HEADER_SOURCE_RE.test(normalizedSource)) {
      const sourceText = getHeaderSourceText(normalizedSource, headingLines);
      return buildConservativeDescription(field.name, sourceText);
    }
    return "";
  }

  if (!HEADER_SOURCE_RE.test(normalizedSource)) {
    return trimmed;
  }

  const sourceText = getHeaderSourceText(normalizedSource, headingLines);
  if (sourceText === "") {
    return trimmed;
  }

  if (descriptionLooksGrounded(trimmed, sourceText)) {
    return trimmed;
  }

  return buildConservativeDescription(field.name, sourceText);
}

function validateAndNormalizeCandidateFields(
  fields: Field[],
  headingLines: ReadonlyMap<number, string>,
  fetchedUrls: ReadonlySet<string>,
): { normalizedFields: Field[]; violations: string[] } {
  const violations: string[] = [];
  const normalizedFields: Field[] = [];

  for (const field of fields) {
    const normalizedSource = normalizeFieldSource(field.source);
    if (normalizedSource == null) {
      violations.push(`field "${field.name}" has invalid source "${field.source}" (must be header:L<n>, header:L<n>-L<n>, or report:<fetched-url>)`);
      continue;
    }

    if (HEADER_SOURCE_RE.test(normalizedSource)) {
      normalizedFields.push({
        ...field,
        source: normalizedSource,
        description: normalizeFieldDescription(field, normalizedSource, headingLines),
      });
      continue;
    }

    if (normalizedSource.startsWith("report:")) {
      const claimed = normalizedSource.slice("report:".length);
      if (!fetchedUrls.has(claimed)) {
        violations.push(`field "${field.name}" claims report ${claimed} but that URL was not fetched`);
        continue;
      }
      normalizedFields.push({
        ...field,
        source: normalizedSource,
        description: normalizeFieldDescription(field, normalizedSource, headingLines),
      });
      continue;
    }

    violations.push(`field "${field.name}" has invalid source "${field.source}" (must be header:L<n>, header:L<n>-L<n>, or report:<fetched-url>)`);
  }

  return { normalizedFields, violations };
}

function normalizeFieldSource(source: string): string | null {
  const trimmed = source.trim();
  if (HEADER_SOURCE_RE.test(trimmed)) {
    return trimmed;
  }

  if (trimmed.startsWith("header:")) {
    const matches = [...trimmed.matchAll(/L(\d+)(?:-L(\d+))?/g)];
    if (matches.length === 0) return null;

    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    for (const match of matches) {
      const start = Number(match[1]!);
      const end = Number(match[2] ?? match[1]!);
      min = Math.min(min, start, end);
      max = Math.max(max, start, end);
    }

    return min === max
      ? `header:L${min}`
      : `header:L${min}-L${max}`;
  }

  if (trimmed.startsWith("report:")) {
    const body = trimmed.slice("report:".length).trim();
    const urlMatch = body.match(/https?:\/\/(?:www\.)?unicode\.org\/reports\/[^\s,|)]+/i);
    const rawUrl = (urlMatch?.[0] ?? body.split(/[,\s|]+/)[0] ?? "").trim();
    if (rawUrl === "") return null;
    return `report:${normalizeReportUrl(rawUrl)}`;
  }

  return null;
}

export async function generateFields(heading: string, model: LanguageModel): Promise<GenerateFieldsResult> {
  const fetchedUrls = new Set<string>();
  const headingLines = parseNumberedHeadingLines(heading);
  let lastViolations: string[] = [];
  let lastConfidence = 0;
  let lastNotes = "";

  for (let attempt = 1; attempt <= MAX_VALIDATION_ATTEMPTS; attempt++) {
    const prompt = attempt === 1
      ? heading
      : `${heading}

# Validation feedback from previous attempt
${lastViolations.map((violation) => `- ${violation}`).join("\n")}

Fix the issues above. Call validate_fields before final output and return corrected fields.`;

    const result = await generateText({
      model,
      system: SYSTEM_PROMPT,
      prompt,
      temperature: 0,
      maxRetries: 2,
      stopWhen: stepCountIs(20),
      tools: {
        load_skill: tool({
          description: "Load the detailed playbook for a specific UCD header pattern. Call this after identifying which pattern the current header matches. You MUST call this before producing a final answer (unless returning an empty fields array).",
          inputSchema: z.object({
            name: z.enum((["field-n-pattern", "format-line", "property-only-header"] as const)).describe("The skill to load."),
          }),
          execute: async ({ name }) => readFile(path.join(path.join(import.meta.dirname, "skills"), `${name}.md`), "utf-8"),
        }),
        validate_fields: tool({
          description: "Validate and normalize candidate fields. Call this before final output. If issues are returned, fix and call again.",
          inputSchema: z.object({
            fields: z.array(z.object({
              name: z.string(),
              type: z.string(),
              description: z.string(),
              source: z.string(),
            })),
          }),
          execute: async ({ fields }) => {
            const { normalizedFields, violations } = validateAndNormalizeCandidateFields(
              fields,
              headingLines,
              fetchedUrls,
            );
            return {
              ok: violations.length === 0,
              violations,
              normalizedFields,
            };
          },
        }),
        fetch_unicode_report: tool({
          description: "Fetch a Unicode report or specification page from unicode.org",
          inputSchema: z.object({
            url: z.string().regex(/^https?:\/\/(www\.)?unicode\.org\/reports\/(.*)$/m),
          }),
          execute: async ({ url }) => {
            if (
              !url.startsWith("http://www.unicode.org/reports")
              && !url.startsWith("https://www.unicode.org/reports")
              && !url.startsWith("http://unicode.org/reports")
              && !url.startsWith("https://unicode.org/reports")
            ) {
              return "Error: Only unicode.org/reports/ URLs are permitted.";
            }

            // Strip hash fragment and normalize versioned filenames (e.g. tr24/tr24-39.html → tr24/)
            const normalizedUrl = normalizeReportUrl(url);
            if (fetchedUrls.has(normalizedUrl)) {
              return "Error: This URL has already been fetched. Do not fetch the same URL twice.";
            }
            fetchedUrls.add(normalizedUrl);

            const text = await fetchUnicodeReport(normalizedUrl);
            const MAX_CHARS = 12_000;
            return text.length > MAX_CHARS
              ? `${text.slice(0, MAX_CHARS)}\n\n[truncated — content exceeded ${MAX_CHARS} characters]`
              : text;
          },
        }),
      },
      output: Output.object({
        schema: z.object({
          fields: z.array(z.object({
            name: z.string(),
            type: z.string(),
            description: z.string(),
            source: z.string().describe("Origin: 'header:L<n>', 'header:L<start>-L<end>', or 'report:<url>'. No other values permitted."),
          })),
          confidence: z.number().min(0).max(1).describe("0-1 certainty score per the rubric in the system prompt."),
          notes: z.string().describe("Brief explanation of reasoning and any uncertainty."),
        }),
      }),
    });

    // Hard gate after model output: every field must cite a valid source and
    // descriptions are normalized against header citations.
    const { normalizedFields, violations } = validateAndNormalizeCandidateFields(
      result.output.fields,
      headingLines,
      fetchedUrls,
    );

    if (violations.length === 0) {
      return {
        fields: normalizedFields,
        confidence: result.output.confidence,
        notes: result.output.notes,
      };
    }

    lastViolations = violations;
    lastConfidence = result.output.confidence;
    lastNotes = result.output.notes;
    if (attempt < MAX_VALIDATION_ATTEMPTS) {
      console.warn(`validation failed (attempt ${attempt}/${MAX_VALIDATION_ATTEMPTS}); retrying with feedback`);
    }
  }

  throw new Error(
    `source validation failed after ${MAX_VALIDATION_ATTEMPTS} attempts:\n  - ${lastViolations.join("\n  - ")}\n  - last confidence=${lastConfidence.toFixed(2)} notes=${lastNotes}`,
  );
}

export interface RenderFileOptions {
  relPath: string;
  shortVersion: string;

  /**
   * Base file-explorer URL for the source data file (no hash).
   * e.g. "https://ucdjs.dev/file-explorer/v/16.0.0/ucd/ArabicShaping.txt"
   */
  fileExplorerUrl: string;

  /**
   * Canonical unicode.org URL for the source data file.
   */
  unicodeSourceUrl: string;
  fields: Field[];
  confidence: number;
  modelId: string;
}

function resolveSourceLink(source: string, fileExplorerUrl: string): string {
  // header:L14  or  header:L14-L16
  const headerMatch = /^header:(L\d+(?:-L\d+)?)$/.exec(source);
  if (headerMatch) return `${fileExplorerUrl}#${headerMatch[1]}`;

  // report:https://www.unicode.org/reports/tr24/
  if (source.startsWith("report:")) {
    const url = source.slice("report:".length);
    const reportMatch = /unicode\.org\/reports\/([^/]+)\/?/.exec(url);
    if (reportMatch) return `https://ucdjs.dev/reports/${reportMatch[1]}/`;
    return url;
  }

  return source;
}

function collapseSources(sources: string[]): string[] {
  const reports: string[] = [];
  const intervals: Array<[number, number]> = [];

  for (const source of sources) {
    const match = /^header:L(\d+)(?:-L(\d+))?$/.exec(source);
    if (match != null) {
      const start = Number(match[1]!);
      const end = Number(match[2] ?? match[1]!);
      intervals.push([Math.min(start, end), Math.max(start, end)]);
      continue;
    }
    reports.push(source);
  }

  intervals.sort((a, b) => (a[0] - b[0]) || (a[1] - b[1]));

  const merged: Array<[number, number]> = [];
  for (const interval of intervals) {
    const last = merged[merged.length - 1];
    if (last == null || interval[0] > last[1] + 1) {
      merged.push([interval[0], interval[1]]);
      continue;
    }
    last[1] = Math.max(last[1], interval[1]);
  }

  const headerSources = merged.map(([start, end]) => (start === end ? `header:L${start}` : `header:L${start}-L${end}`));
  const reportSources = [...new Set(reports)];
  return [...headerSources, ...reportSources];
}

export function renderFile({
  relPath,
  shortVersion,
  fileExplorerUrl,
  unicodeSourceUrl,
  fields,
  confidence,
  modelId,
}: RenderFileOptions): RenderedFile {
  const props: Record<string, string> = {};
  const descriptions: Record<string, string> = {};
  const fieldSources: Record<string, string> = {};
  for (const f of fields) {
    if (props[f.name] != null) continue;
    props[f.name] = f.type;
    if (f.description) descriptions[f.name] = f.description;
    fieldSources[f.name] = f.source;
  }

  const parentDir = path.dirname(relPath);
  const baseName = path.basename(relPath, ".txt");
  const displayName = parentDir && parentDir !== "."
    ? `${parentDir.replace(/\//g, "_")}_${baseName}`
    : baseName;

  const interfaceName = sanitizeIdentifier(toPascalCase(displayName));
  const constName = `${sanitizeIdentifier(toSnakeCase(displayName)).toUpperCase()}_FIELDS`;
  const fieldEntries = Object.entries(props).map(([k, v], i, arr) => {
    const desc = stripFieldNamePrefix(descriptions[k], k);
    const src = fieldSources[k];
    const link = src ? resolveSourceLink(src, fileExplorerUrl) : "";

    const docLines: string[] = [];
    if (desc) {
      docLines.push(desc);
    }
    if (link) {
      if (docLines.length > 0) docLines.push("");
      docLines.push(`@source ${link}`);
    }

    const jsdoc = docLines.length > 0
      ? `  /**\n${docLines.map((l) => (l === "" ? "   *" : `   * ${l}`)).join("\n")}\n   */\n`
      : "";

    const trailingNewline = i < arr.length - 1 ? "\n" : "";
    return `${jsdoc}  ${k}: ${v};${trailingNewline}`;
  }).join("\n");

  const array = Object.keys(props).map((v) => `"${v}"`).join(", ");
  const fieldCount = Object.keys(props).length;

  const collapsedSources = collapseSources(Object.values(fieldSources));
  const uniqueLinks = [...new Set(
    collapsedSources.map((s) => resolveSourceLink(s, fileExplorerUrl)),
  )];
  const sourceLines = uniqueLinks.map((s) => ` * - ${s}`).join("\n");

  const interfaceDoc = `/**
 * Parsed row from \`${relPath}\` (Unicode ${shortVersion}).
 *
 * @see ${unicodeSourceUrl}
 *
 * Fields derived from:
${sourceLines}
 *
 * @unicodeVersion ${shortVersion}
 * @fields ${fieldCount}
 * @confidence ${confidence.toFixed(2)}
 * @model ${modelId}
 * @generated ${new Date().toISOString()}
 */`;

  const code = `${interfaceDoc}
export interface ${interfaceName} {
${fieldEntries}
}

export const ${constName} = [${array}];
`;

  return { relPath, code };
}

function stripFieldNamePrefix(desc: string | undefined, fieldName: string): string {
  if (!desc) return "";
  // Model prefixes descriptions with "FieldName: ..." — redundant in JSDoc next to the property.
  const colonIdx = desc.indexOf(":");
  if (colonIdx === -1) return desc;
  const head = desc.slice(0, colonIdx).toLowerCase().replace(/[^a-z0-9]/g, "");
  const key = fieldName.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (head === key) return desc.slice(colonIdx + 1).trim();
  return desc;
}

export function bundleFields(shortVersion: string, files: readonly RenderedFile[]): string {
  const sorted = files.toSorted((a, b) => a.relPath.localeCompare(b.relPath));
  const fileList = sorted.map((f) => `//   - ${f.relPath}`).join("\n");
  const regions = sorted
    .map((f) => `// #region ${f.relPath}\n${f.code}\n// #endregion`)
    .join("\n\n");

  return `// This file is generated by scripts/codegen/generate-fields.ts. Do not edit directly.
// Unicode Version: ${shortVersion}
// Generated At: ${new Date().toISOString()}
// Files: ${sorted.length}
${fileList}

${regions}
`;
}

export async function generatePackageExports(srcDir: string): Promise<void> {
  const entries = await readdir(srcDir, { withFileTypes: true });
  const versionKinds = new Map<string, "dir" | "file">();

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (!/^v[\d.]+$/.test(entry.name)) continue;
    versionKinds.set(entry.name.slice(1), "dir");
  }

  for (const entry of entries) {
    if (!entry.isFile()) continue;
    if (!/^v[\d.]+\.ts$/.test(entry.name)) continue;
    const version = entry.name.slice(1, -3);
    if (!versionKinds.has(version)) {
      versionKinds.set(version, "file");
    }
  }

  const versions = [...versionKinds.keys()].toSorted((a, b) => {
    const pa = a.split(".").map(Number);
    const pb = b.split(".").map(Number);
    for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
      const diff = (pa[i] ?? 0) - (pb[i] ?? 0);
      if (diff !== 0) return diff;
    }
    return 0;
  });

  const indexContent = [
    "// This file is auto-generated by scripts/codegen/generate-fields.ts",
    "// Do not edit this file directly.",
    "",
    ...versions.map((v) => `export * as v${v.replace(/\./g, "_")} from "./v${v}";`),
    "",
  ].join("\n");
  await writeFile(path.join(srcDir, "index.ts"), indexContent, "utf-8");

  const pkgPath = path.join(srcDir, "..", "package.json");
  const pkg = JSON.parse(await readFile(pkgPath, "utf-8"));
  pkg.exports = {
    ".": "./dist/index.mjs",
    ...Object.fromEntries(versions.map((v) => {
      const kind = versionKinds.get(v);
      const target = kind === "dir" ? `./dist/v${v}/index.mjs` : `./dist/v${v}.mjs`;
      return [`./v${v}`, target];
    })),
    "./package.json": "./package.json",
  };
  await writeFile(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`, "utf-8");
}
