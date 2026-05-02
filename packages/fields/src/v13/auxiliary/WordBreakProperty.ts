/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/auxiliary/WordBreakProperty.txt#L12-L15
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 13
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:43:45.569Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point range in the standard UCD format.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Word_Break property value; unlisted code points have default value Other (XX).
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/auxiliary/WordBreakProperty.txt#L12-L15
   */
  word_break: "ALetter" | "MidLetter" | "MidNum" | "MidNumLet" | "Numeric" | "ExtendNumLet" | "CR" | "LF" | "Newline" | "Extend" | "Regional_Indicator" | "ZWJ" | "WSegSpace" | "Other";
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point_range", "word_break"];
