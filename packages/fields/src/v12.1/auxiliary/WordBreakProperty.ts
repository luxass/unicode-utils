/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/auxiliary/WordBreakProperty.txt#L12-L15
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 12.1
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:45:12.367Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code points or ranges explicitly listed for the Word_Break property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoints: string;

  /**
   * Word_Break property value; unlisted code points default to Other (XX).
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/auxiliary/WordBreakProperty.txt#L12-L15
   */
  word_break: "ALetter" | "Double_Quote" | "CR" | "Extend" | "ExtendNumLet" | "E_Base" | "E_Base_GAZ" | "E_Modifier" | "Format" | "GLue_After_Zwj" | "Hebrew_Letter" | "Katakana" | "LE_Space" | "MidLetter" | "MidNum" | "MidNumLet" | "Newline" | "Numeric" | "Regional_Indicator" | "Single_Quote" | "WSeg_Space" | "ZWJ" | "Other";

  /**
   * Optional trailing comment.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  comments: string;
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["codepoints", "word_break", "comments"];
