import { normalizeReportUrl } from "./reports";
import type { Field } from "./types";

export const HEADER_SOURCE_RE = /^header:L\d+(?:-L\d+)?$/;

export function parseNumberedHeadingLines(heading: string): Map<number, string> {
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
  const stopwords = new Set([
    "the",
    "and",
    "for",
    "with",
    "from",
    "that",
    "this",
    "used",
    "value",
    "values",
    "field",
    "unicode",
    "code",
    "point",
    "points",
    "line",
    "lines",
    "data",
    "file",
    "property",
  ]);
  const tokens = text.toLowerCase().match(/[a-z0-9]{3,}/g) ?? [];
  return [...new Set(tokens.filter((token) => !stopwords.has(token)))];
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

  return overlap / descTokens.length >= 0.35;
}

function buildConservativeDescription(fieldName: string, sourceText: string): string {
  let text = sourceText.replace(/#/g, " ").replace(/\s+/g, " ").trim();

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

export function normalizeFieldSource(source: string): string | null {
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

    return min === max ? `header:L${min}` : `header:L${min}-L${max}`;
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

export function validateAndNormalizeCandidateFields(
  fields: Field[],
  headingLines: ReadonlyMap<number, string>,
  fetchedUrls: ReadonlySet<string>,
): { normalizedFields: Field[]; violations: string[] } {
  const violations: string[] = [];
  const normalizedFields: Field[] = [];

  for (const field of fields) {
    const normalizedSource = normalizeFieldSource(field.source);
    if (normalizedSource == null) {
      violations.push(
        `field "${field.name}" has invalid source "${field.source}" (must be header:L<n>, header:L<n>-L<n>, or report:<fetched-url>)`,
      );
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
        violations.push(
          `field "${field.name}" claims report ${claimed} but that URL was not fetched`,
        );
        continue;
      }
      normalizedFields.push({
        ...field,
        source: normalizedSource,
        description: normalizeFieldDescription(field, normalizedSource, headingLines),
      });
      continue;
    }

    violations.push(
      `field "${field.name}" has invalid source "${field.source}" (must be header:L<n>, header:L<n>-L<n>, or report:<fetched-url>)`,
    );
  }

  return { normalizedFields, violations };
}
