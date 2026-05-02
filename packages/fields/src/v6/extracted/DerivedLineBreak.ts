/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedLineBreak.txt#L11-L14
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:53:20.258Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point range or single code point explicitly listed with a Line_Break value.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedLineBreak.txt#L11-L14
   */
  code_point_range: string;

  /**
   * Line_Break property value (defaults to Unknown (XX) for unlisted code points).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedLineBreak.txt#L13-L14
   */
  line_break: "Unknown" | (string & {});
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point_range", "line_break"];
