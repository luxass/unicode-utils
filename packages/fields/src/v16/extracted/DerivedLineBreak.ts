/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedLineBreak.txt#L12
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedLineBreak.txt#L14-L15
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:07.419Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Property: Line_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedLineBreak.txt#L12
   */
  code_point_range: string;

  /**
   * Line_Break property value, with default Unknown (XX) for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedLineBreak.txt#L14-L15
   */
  line_break: "Unknown" | "Prefix_Numeric" | "Ideographic" | (string & {});
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point_range", "line_break"];
