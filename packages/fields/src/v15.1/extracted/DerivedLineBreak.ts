/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/extracted/DerivedLineBreak.txt#L12
 * - https://ucdjs.dev/reports/tr14/
 *
 * @unicodeVersion 15.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:52.079Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point range or single code point.
   *
   * @source https://ucdjs.dev/reports/tr14/
   */
  codepoint_or_range: string;

  /**
   * Property: Line_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/extracted/DerivedLineBreak.txt#L12
   */
  line_break: "Unknown" | (string & {});
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["codepoint_or_range", "line_break"];
