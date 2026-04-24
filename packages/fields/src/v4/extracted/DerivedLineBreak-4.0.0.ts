/**
 * Parsed row from `extracted/DerivedLineBreak-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/extracted/DerivedLineBreak-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedLineBreak-4.0.0.txt#L13-L16
 *
 * @unicodeVersion 4
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:30:31.906Z
 */
export interface ExtractedDerivedLineBreak400 {
  /**
   * Unicode code point or range explicitly listed.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedLineBreak-4.0.0.txt#L13-L16
   */
  code_point_range: string;

  /**
   * Line break property value (field 1 from LineBreak.txt). All unlisted code points have value XX.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedLineBreak-4.0.0.txt#L13-L16
   */
  line_break: string;
}

export const EXTRACTED_DERIVED_LINE_BREAK_400_FIELDS = ["code_point_range", "line_break"];
