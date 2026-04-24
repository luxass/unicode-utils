/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedLineBreak.txt#L12-L66
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T03:55:16.262Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point range or block name explicitly listed for Line_Break or covered by @missing declarations.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedLineBreak.txt#L12-L66
   */
  code_point_range: string;

  /**
   * Value of the Line_Break property; defaults to Unknown (XX) for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedLineBreak.txt#L12-L15
   */
  line_break: "Unknown" | "Prefix_Numeric" | "Ideographic" | (string & {});
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point_range", "line_break"];
