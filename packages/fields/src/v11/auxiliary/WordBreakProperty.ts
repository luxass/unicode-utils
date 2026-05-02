/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 * - https://ucdjs.dev/reports/tr29/
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:47:52.196Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range in hexadecimal.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Word_Break property value as defined in UAX #29.
   *
   * @source https://ucdjs.dev/reports/tr29/
   */
  word_break: "ALetter" | "CR" | "Double_Quote" | "EBG" | "E_Base" | "E_Modifier" | "EM" | "Extend" | "ExtendNumLet" | "Hebrew_Letter" | "Katakana" | "L" | "LVT" | "LV" | "MidLetter" | "MidLetterQ" | "MidNum" | "MidNumLet" | "Newline" | "Numeric" | "Other" | "Regional_Indicator" | "Single_Quote" | "T" | "V" | "ZWJ";
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point", "word_break"];
