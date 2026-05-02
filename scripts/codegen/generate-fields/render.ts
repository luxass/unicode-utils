import path from "node:path";

import { sanitizeIdentifier, toPascalCase, toSnakeCase } from "@luxass/utils";

import type { Field, RenderedFile } from "./types";

export interface RenderFileOptions {
  relPath: string;
  shortVersion: string;
  fileExplorerUrl: string;
  unicodeSourceUrl: string;
  fields: Field[];
  confidence: number;
  modelId: string;
}

function resolveSourceLink(source: string, fileExplorerUrl: string): string {
  const headerMatch = /^header:(L\d+(?:-L\d+)?)$/.exec(source);
  if (headerMatch) return `${fileExplorerUrl}#${headerMatch[1]}`;

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

  intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  const merged: Array<[number, number]> = [];
  for (const interval of intervals) {
    const last = merged[merged.length - 1];
    if (last == null || interval[0] > last[1] + 1) {
      merged.push([interval[0], interval[1]]);
      continue;
    }
    last[1] = Math.max(last[1], interval[1]);
  }

  const headerSources = merged.map(([start, end]) =>
    start === end ? `header:L${start}` : `header:L${start}-L${end}`,
  );
  const reportSources = [...new Set(reports)];
  return [...headerSources, ...reportSources];
}

function stripFieldNamePrefix(desc: string | undefined, fieldName: string): string {
  if (!desc) return "";
  const colonIdx = desc.indexOf(":");
  if (colonIdx === -1) return desc;
  const head = desc
    .slice(0, colonIdx)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
  const key = fieldName.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (head === key) return desc.slice(colonIdx + 1).trim();
  return desc;
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
  for (const field of fields) {
    if (props[field.name] != null) continue;
    props[field.name] = field.type;
    if (field.description) descriptions[field.name] = field.description;
    fieldSources[field.name] = field.source;
  }

  const parentDir = path.dirname(relPath);
  const baseName = path.basename(relPath, ".txt");
  const displayName =
    parentDir && parentDir !== "." ? `${parentDir.replace(/\//g, "_")}_${baseName}` : baseName;

  const interfaceName = sanitizeIdentifier(toPascalCase(displayName));
  const constName = `${sanitizeIdentifier(toSnakeCase(displayName)).toUpperCase()}_FIELDS`;
  const fieldEntries = Object.entries(props)
    .map(([key, value], index, entries) => {
      const desc = stripFieldNamePrefix(descriptions[key], key);
      const src = fieldSources[key];
      const link = src ? resolveSourceLink(src, fileExplorerUrl) : "";

      const docLines: string[] = [];
      if (desc) {
        docLines.push(desc);
      }
      if (link) {
        if (docLines.length > 0) docLines.push("");
        docLines.push(`@source ${link}`);
      }

      const jsdoc =
        docLines.length > 0
          ? `  /**\n${docLines.map((line) => (line === "" ? "   *" : `   * ${line}`)).join("\n")}\n   */\n`
          : "";

      const trailingNewline = index < entries.length - 1 ? "\n" : "";
      return `${jsdoc}  ${key}: ${value};${trailingNewline}`;
    })
    .join("\n");

  const array = Object.keys(props)
    .map((value) => `"${value}"`)
    .join(", ");
  const fieldCount = Object.keys(props).length;
  const collapsedSources = collapseSources(Object.values(fieldSources));
  const uniqueLinks = [
    ...new Set(collapsedSources.map((source) => resolveSourceLink(source, fileExplorerUrl))),
  ];
  const sourceLines = uniqueLinks.map((source) => ` * - ${source}`).join("\n");

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

export function bundleFields(shortVersion: string, files: readonly RenderedFile[]): string {
  const sorted = files.toSorted((a, b) => a.relPath.localeCompare(b.relPath));
  const fileList = sorted.map((file) => `//   - ${file.relPath}`).join("\n");
  const regions = sorted
    .map((file) => `// #region ${file.relPath}\n${file.code}\n// #endregion`)
    .join("\n\n");

  return `// This file is generated by scripts/codegen/generate-fields.ts. Do not edit directly.
// Unicode Version: ${shortVersion}
// Generated At: ${new Date().toISOString()}
// Files: ${sorted.length}
${fileList}

${regions}
`;
}
