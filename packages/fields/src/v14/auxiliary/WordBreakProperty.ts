/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/auxiliary/WordBreakProperty.txt#L12-L15
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/auxiliary/WordBreakProperty.txt#L17
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:15.500Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * @missing: 0000..10FFFF; Other.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/auxiliary/WordBreakProperty.txt#L17
   */
  code_point_range: string;

  /**
   * Word_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/auxiliary/WordBreakProperty.txt#L12-L15
   */
  word_break: "Other" | (string & {});
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point_range", "word_break"];
