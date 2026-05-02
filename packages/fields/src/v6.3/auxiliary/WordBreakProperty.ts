/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr29/
 *
 * @unicodeVersion 6.3
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:48:48.095Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Hexadecimal code point or range to which the Word_Break value applies.
   *
   * @source https://ucdjs.dev/reports/tr29/
   */
  code_point: string;

  /**
   * Word_Break property value as defined in UAX #29.
   *
   * @source https://ucdjs.dev/reports/tr29/
   */
  word_break: "ALetter" | "Ambiguous" | "AN" | "AQ" | "B2" | "CR" | "Double_Quote" | "E_Base" | "EBG" | "E_Modifier" | "Extend" | "ExtendNumLet" | "FO" | "Format" | "GL" | "Hebrew_Letter" | "H2" | "H3" | "JL" | "JV" | "JWT" | "Katakana" | "LF" | "MidLetter" | "MidNum" | "MidNumLet" | "Newline" | "NL" | "Numeric" | "NU" | "Other" | "Perl" | "Regional_Indicator" | "Single_Quote" | "SP" | "STerm" | "WJ" | "ZWJ" | "XX";
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point", "word_break"];
