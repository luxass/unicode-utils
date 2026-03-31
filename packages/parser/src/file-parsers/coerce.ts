import type { DataNode, MissingAnnotationNode, ParsedField, SectionNode } from "../datafile/ast";
import type { FieldDef } from "./types";

export class FieldCoercionError extends Error {
  readonly fieldName: string;
  readonly rawValue: string;
  readonly expectedType: string;

  constructor(fieldName: string, rawValue: string, expectedType: string, message: string) {
    super(message);
    this.name = "FieldCoercionError";
    this.fieldName = fieldName;
    this.rawValue = rawValue;
    this.expectedType = expectedType;
  }
}

const HEX_RE = /^[0-9A-F]{4,6}$/i;
const HEX_RANGE_RE = /^[0-9A-F]{4,6}\.\.[0-9A-F]{4,6}$/i;

function coerceSingle(raw: string, def: FieldDef): unknown {
  const trimmed = raw.trim();

  switch (def.type) {
    case "codepoint": {
      if (!HEX_RE.test(trimmed)) {
        throw new FieldCoercionError(def.name, raw, "codepoint", `Invalid codepoint: "${trimmed}"`);
      }
      return trimmed.toUpperCase();
    }

    case "codepoint-range": {
      if (!HEX_RANGE_RE.test(trimmed)) {
        throw new FieldCoercionError(
          def.name,
          raw,
          "codepoint-range",
          `Invalid codepoint range: "${trimmed}"`,
        );
      }
      const [start, end] = trimmed.split("..");
      return { start: start!.toUpperCase(), end: end!.toUpperCase() };
    }

    case "codepoint-or-range": {
      if (HEX_RANGE_RE.test(trimmed)) {
        const [start, end] = trimmed.split("..");
        return { start: start!.toUpperCase(), end: end!.toUpperCase() };
      }
      if (HEX_RE.test(trimmed)) {
        return trimmed.toUpperCase();
      }
      throw new FieldCoercionError(
        def.name,
        raw,
        "codepoint-or-range",
        `Invalid codepoint or range: "${trimmed}"`,
      );
    }

    case "string":
      return raw;

    case "string-trimmed":
      return trimmed;

    case "number": {
      if (trimmed === "") {
        throw new FieldCoercionError(def.name, raw, "number", `Invalid number: "${trimmed}"`);
      }
      const n = Number(trimmed);
      if (Number.isNaN(n)) {
        throw new FieldCoercionError(def.name, raw, "number", `Invalid number: "${trimmed}"`);
      }
      return n;
    }

    case "enum": {
      if (!def.enumValues || !def.enumValues.includes(trimmed)) {
        throw new FieldCoercionError(
          def.name,
          raw,
          "enum",
          `Invalid enum value: "${trimmed}". Expected one of: ${def.enumValues?.join(", ")}`,
        );
      }
      return trimmed;
    }

    case "optional-string": {
      if (trimmed === "") return undefined;
      return trimmed;
    }

    case "multi-codepoint": {
      const delimiter = def.delimiter ?? " ";
      const parts = trimmed.split(delimiter).filter((p) => p.length > 0);
      return parts.map((part) => {
        const p = part.trim();
        if (!HEX_RE.test(p)) {
          throw new FieldCoercionError(
            def.name,
            raw,
            "multi-codepoint",
            `Invalid codepoint in multi-value: "${p}"`,
          );
        }
        return p.toUpperCase();
      });
    }

    default:
      return trimmed;
  }
}

/**
 * Coerce a raw trimmed string into the target type defined by the FieldDef.
 *
 * When isMultiValue=true, splits field by delimiter and coerces each element.
 */
export function coerceField(raw: string, def: FieldDef): unknown {
  if (def.isMultiValue) {
    const delimiter = def.delimiter ?? " ";
    const parts = raw
      .trim()
      .split(delimiter)
      .filter((p) => p.length > 0);
    return parts.map((part) => coerceSingle(part.trim(), { ...def, isMultiValue: false }));
  }

  if (def.nullable && raw.trim() === "") {
    return undefined;
  }

  return coerceSingle(raw, def);
}

// ─── Apply a FileParser's fields to a SectionNode ─────────────────────────────

/**
 * Re-process DataNode.parsedFields using a FileParser's field definitions.
 * Replaces generic field_0/field_1 names with proper names and typed values.
 */
export function applyFileParser(
  sections: SectionNode[],
  fields: FieldDef[],
  parserSeparator: string,
  parserOptions?: { trimFields?: boolean; stripInlineComments?: boolean },
): void {
  const separator = parserSeparator;
  const trimFields = parserOptions?.trimFields ?? true;
  const stripComments = parserOptions?.stripInlineComments ?? true;

  for (const section of sections) {
    section.fieldNames = fields.map((f) => f.name);

    for (const record of section.records) {
      if (record.line === -1) continue; // skip synthetic nodes

      let line = record.value;

      // Strip inline comment
      if (stripComments) {
        const hashIdx = line.indexOf("#");
        if (hashIdx !== -1) {
          line = line.slice(0, hashIdx);
        }
      }

      // Split by separator
      let rawParts = line.split(separator);
      if (trimFields) {
        rawParts = rawParts.map((p) => p.trim());
      }

      // Remove trailing empty field
      if (rawParts.length > 1 && rawParts[rawParts.length - 1] === "") {
        rawParts.pop();
      }

      // Build typed ParsedField[]
      const parsedFields: ParsedField[] = [];
      for (let i = 0; i < fields.length; i++) {
        const fieldDef = fields[i]!;
        const hasValue = i < rawParts.length;
        const rawValue = hasValue ? rawParts[i]! : "";

        if (!hasValue && (fieldDef.optional || fieldDef.nullable)) {
          parsedFields.push({ name: fieldDef.name, rawValue: "", value: undefined });
          continue;
        }

        let value: unknown;
        try {
          value = coerceField(rawValue, fieldDef);
        } catch {
          value = rawValue.trim();
        }

        parsedFields.push({ name: fieldDef.name, rawValue, value });
      }

      // Extra fields beyond schema preserved as extra_N
      for (let i = fields.length; i < rawParts.length; i++) {
        const rawValue = rawParts[i]!;
        parsedFields.push({ name: `extra_${i}`, rawValue, value: rawValue.trim() });
      }

      record.parsedFields = parsedFields;
    }
  }
}

// ─── @missing expansion ───────────────────────────────────────────────────────

function hexToNum(hex: string): number {
  return Number.parseInt(hex, 16);
}

function numToHex(n: number): string {
  return n.toString(16).toUpperCase().padStart(4, "0");
}

interface Range {
  start: number;
  end: number;
}

function extractCoveredRanges(section: SectionNode): Range[] {
  const ranges: Range[] = [];
  for (const record of section.records) {
    if (record.line === -1) continue;
    const field0 = record.parsedFields?.[0];
    if (!field0) continue;

    const val = field0.value;
    if (typeof val === "object" && val !== null && "start" in val && "end" in val) {
      const r = val as { start: string; end: string };
      ranges.push({ start: hexToNum(r.start), end: hexToNum(r.end) });
    } else if (typeof val === "string" && /^[0-9A-F]{4,6}$/i.test(val)) {
      const n = hexToNum(val);
      ranges.push({ start: n, end: n });
    }
  }
  return ranges;
}

function mergeRanges(ranges: Range[]): Range[] {
  if (ranges.length === 0) return [];
  const sorted = [...ranges].sort((a, b) => a.start - b.start);
  const merged: Range[] = [sorted[0]!];
  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i]!;
    const prev = merged[merged.length - 1]!;
    if (current.start <= prev.end + 1) {
      prev.end = Math.max(prev.end, current.end);
    } else {
      merged.push(current);
    }
  }
  return merged;
}

function findGaps(covered: Range[], fullStart: number, fullEnd: number): Range[] {
  const gaps: Range[] = [];
  let pos = fullStart;
  for (const range of covered) {
    if (range.start > pos) {
      gaps.push({ start: pos, end: range.start - 1 });
    }
    pos = Math.max(pos, range.end + 1);
  }
  if (pos <= fullEnd) {
    gaps.push({ start: pos, end: fullEnd });
  }
  return gaps;
}

function getStartCodepoint(value: unknown): number {
  if (typeof value === "object" && value !== null && "start" in value) {
    return hexToNum((value as { start: string }).start);
  }
  if (typeof value === "string" && /^[0-9A-F]{4,6}$/i.test(value)) {
    return hexToNum(value);
  }
  return 0;
}

/**
 * Expands @missing annotations into synthetic DataNodes to fill codepoint gaps.
 * Mutates the section in place.
 */
export function expandMissingAnnotations(section: SectionNode, fields: FieldDef[]): void {
  const missingNodes = section.children.filter(
    (c): c is MissingAnnotationNode => c.type === "missing-annotation",
  );
  if (missingNodes.length === 0) return;

  const covered = mergeRanges(extractCoveredRanges(section));

  for (const { annotation } of missingNodes) {
    const fullStart = hexToNum(annotation.start);
    const fullEnd = hexToNum(annotation.end);
    const gaps = findGaps(covered, fullStart, fullEnd);

    for (const gap of gaps) {
      const startHex = numToHex(gap.start);
      const endHex = numToHex(gap.end);
      const rangeStr = gap.start === gap.end ? startHex : `${startHex}..${endHex}`;
      const defaultValue = annotation.defaultPropertyValue;

      const parsedFields: ParsedField[] = fields.map((fieldDef, idx) => {
        if (idx === 0) {
          return {
            name: fieldDef.name,
            rawValue: rangeStr,
            value: gap.start === gap.end ? startHex : { start: startHex, end: endHex },
          };
        }
        return { name: fieldDef.name, rawValue: defaultValue, value: defaultValue };
      });

      const rawLine = `${rangeStr}; ${defaultValue}`;
      const synthetic: DataNode = {
        type: "data",
        value: rawLine,
        raw: rawLine,
        line: -1,
        parsedFields,
      };

      section.records.push(synthetic);
    }
  }

  section.records.sort((a, b) => {
    const aStart = getStartCodepoint(a.parsedFields?.[0]?.value);
    const bStart = getStartCodepoint(b.parsedFields?.[0]?.value);
    return aStart - bStart;
  });
}
