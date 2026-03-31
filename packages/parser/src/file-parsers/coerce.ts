import type { MissingAnnotationNode, SectionNode } from "../datafile/ast";

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

const HEX_RANGE_RE = /^([0-9A-F]{4,6})\.\.([0-9A-F]{4,6})/i;
const HEX_POINT_RE = /^([0-9A-F]{4,6})/i;

function extractCoveredRanges(section: SectionNode): Range[] {
  const ranges: Range[] = [];
  for (const record of section.records) {
    if (record.line === -1) continue;
    const raw = record.value.trim();
    const rangeMatch = HEX_RANGE_RE.exec(raw);
    if (rangeMatch) {
      ranges.push({ start: hexToNum(rangeMatch[1]!), end: hexToNum(rangeMatch[2]!) });
      continue;
    }
    const pointMatch = HEX_POINT_RE.exec(raw);
    if (pointMatch) {
      const n = hexToNum(pointMatch[1]!);
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

function getStartCodepointFromRaw(raw: string): number {
  const rangeMatch = HEX_RANGE_RE.exec(raw.trim());
  if (rangeMatch) return hexToNum(rangeMatch[1]!);
  const pointMatch = HEX_POINT_RE.exec(raw.trim());
  if (pointMatch) return hexToNum(pointMatch[1]!);
  return 0;
}

/**
 * Expands @missing annotations into synthetic DataNodes to fill codepoint gaps.
 * Mutates the section in place.
 */
export function expandMissingAnnotations(section: SectionNode): void {
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

      const rawLine = `${rangeStr}; ${defaultValue}`;
      section.records.push({
        type: "data",
        value: rawLine,
        raw: rawLine,
        line: -1,
      });
    }
  }

  section.records.sort((a, b) => getStartCodepointFromRaw(a.value) - getStartCodepointFromRaw(b.value));
}
