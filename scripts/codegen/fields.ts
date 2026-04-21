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
5. If NO skill matches, return { "fields": [], "confidence": 0, "notes": "no matching skill" }.

You MUST call \`load_skill\` before producing a final answer unless you are returning an empty fields array.

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

export async function generateFields(heading: string, model: LanguageModel): Promise<GenerateFieldsResult> {
  const fetchedUrls = new Set<string>();
  const result = await generateText({
    model,
    system: SYSTEM_PROMPT,
    prompt: heading,
    temperature: 0,
    maxRetries: 5,
    stopWhen: stepCountIs(20),
    tools: {
      load_skill: tool({
        description: "Load the detailed playbook for a specific UCD header pattern. Call this after identifying which pattern the current header matches. You MUST call this before producing a final answer (unless returning an empty fields array).",
        inputSchema: z.object({
          name: z.enum((["field-n-pattern", "format-line", "property-only-header"] as const)).describe("The skill to load."),
        }),
        execute: async ({ name }) => readFile(path.join(path.join(import.meta.dirname, "skills"), `${name}.md`), "utf-8"),
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
          const normalizedUrl = url.split("#")[0]!.replace(/\/tr\d+-\d+\.html$/, "/");
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
  // Strict source validation: every field must cite a header line or a fetched report URL.
  // Anything else (including "inferred") is a fabrication and rejected.
  const HEADER_SOURCE_RE = /^header:L\d+(?:-L\d+)?$/;
  const violations: string[] = [];
  for (const f of result.output.fields) {
    if (HEADER_SOURCE_RE.test(f.source)) continue;
    if (f.source.startsWith("report:")) {
      const claimed = f.source.slice("report:".length).split("#")[0]!;
      if (!fetchedUrls.has(claimed)) {
        violations.push(`field "${f.name}" claims report ${claimed} but that URL was not fetched`);
      }
      continue;
    }
    violations.push(`field "${f.name}" has invalid source "${f.source}" (must be header:L<n>, header:L<n>-L<n>, or report:<fetched-url>)`);
  }

  if (violations.length > 0) {
    throw new Error(`source validation failed:\n  - ${violations.join("\n  - ")}`);
  }

  return {
    fields: result.output.fields,
    confidence: result.output.confidence,
    notes: result.output.notes,
  };
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

  const uniqueLinks = [...new Set(
    Object.values(fieldSources).map((s) => resolveSourceLink(s, fileExplorerUrl)),
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
  const files = await readdir(srcDir);
  const versions = files
    .filter((f) => /^v[\d.]+\.ts$/.test(f))
    .map((f) => f.slice(1, -3))
    .toSorted((a, b) => {
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
    ...Object.fromEntries(versions.map((v) => [`./v${v}`, `./dist/v${v}.mjs`])),
    "./package.json": "./package.json",
  };
  await writeFile(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`, "utf-8");
}
