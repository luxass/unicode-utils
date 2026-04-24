/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedLineBreak.txt#L12
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedLineBreak.txt#L17
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:02.885Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * @missing: 0000..10FFFF; Unknown.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedLineBreak.txt#L17
   */
  code_point_range: string;

  /**
   * Property: Line_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedLineBreak.txt#L12
   */
  line_break: "Unknown" | (string & {});
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point_range", "line_break"];
