/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/auxiliary/WordBreakProperty.txt#L12-L15
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:21:04.130Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range explicitly listed for Word_Break property.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/auxiliary/WordBreakProperty.txt#L12-L15
   */
  code_point_range: string;

  /**
   * Assigned Word_Break property value (defaults to Other for unlisted code points).
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/auxiliary/WordBreakProperty.txt#L12-L15
   */
  word_break: string;
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point_range", "word_break"];
