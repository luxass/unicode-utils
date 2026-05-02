/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/auxiliary/WordBreakProperty.txt#L12-L15
 *
 * @unicodeVersion 15.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:39:21.796Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range explicitly listed for Word_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/auxiliary/WordBreakProperty.txt#L12-L15
   */
  code_point_range: string;

  /**
   * Word_Break property value (defaults to Other for unlisted code points).
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/auxiliary/WordBreakProperty.txt#L12-L15
   */
  word_break: string;
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point_range", "word_break"];
