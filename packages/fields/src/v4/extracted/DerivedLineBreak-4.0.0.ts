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
 * @generated 2026-04-23T18:54:25.688Z
 */
export interface ExtractedDerivedLineBreak400 {
  /**
   * Code point or range explicitly listed with a Line Break property value other than the default XX.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedLineBreak-4.0.0.txt#L13-L16
   */
  code_point_range: string;

  /**
   * Line Break property value from LineBreak.txt field 1.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedLineBreak-4.0.0.txt#L13
   */
  line_break: string;
}

export const EXTRACTED_DERIVED_LINE_BREAK_400_FIELDS = ["code_point_range", "line_break"];
