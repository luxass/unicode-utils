/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/auxiliary/WordBreakProperty.txt#L12
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/auxiliary/WordBreakProperty.txt#L14-L15
 *
 * @unicodeVersion 12
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:21:46.466Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range explicitly listed for Word_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/auxiliary/WordBreakProperty.txt#L14-L15
   */
  code_point_range: string;

  /**
   * Word_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/auxiliary/WordBreakProperty.txt#L12
   */
  word_break: "Other" | (string & {});
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point_range", "word_break"];
