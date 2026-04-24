/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedLineBreak.txt#L12
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedLineBreak.txt#L14
 *
 * @unicodeVersion 13
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:20:03.881Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point range or single code point explicitly listed for Line_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedLineBreak.txt#L14
   */
  code_point_range: string;

  /**
   * Line_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedLineBreak.txt#L12
   */
  line_break: string;
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point_range", "line_break"];
