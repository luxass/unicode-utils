/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:56:12.826Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range explicitly listed for Word_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
   */
  code_point_range: string;

  /**
   * Word_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
   */
  word_break: string;
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point_range", "word_break"];
