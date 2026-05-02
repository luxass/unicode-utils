/**
 * Parsed row from `extracted/DerivedLineBreak-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/extracted/DerivedLineBreak-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/extracted/DerivedLineBreak-3.2.0.txt#L13-L14
 *
 * @unicodeVersion 3.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T05:10:11.848Z
 */
export interface ExtractedDerivedLineBreak320 {
  /**
   * Unicode code point or range listing the Line Break property.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/extracted/DerivedLineBreak-3.2.0.txt#L13-L14
   */
  code_point_range: string;

  /**
   * Line Break property value (field 1 from LineBreak.txt).
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/extracted/DerivedLineBreak-3.2.0.txt#L13-L14
   */
  line_break: string;
}

export const EXTRACTED_DERIVED_LINE_BREAK_320_FIELDS = ["code_point_range", "line_break"];
