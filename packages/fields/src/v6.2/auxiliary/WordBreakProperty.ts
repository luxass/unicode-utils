/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
 *
 * @unicodeVersion 6.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:50:29.218Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range explicitly listed for Word_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
   */
  code_point_range: string;

  /**
   * Word_Break property value; unlisted code points have default value Other (XX).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
   */
  word_break: "Other" | (string & {});
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point_range", "word_break"];
