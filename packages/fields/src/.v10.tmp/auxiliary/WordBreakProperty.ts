/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr29/
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:45.542Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr29/
   */
  code_point: string;

  /**
   * Word_Break property value.
   *
   * @source https://ucdjs.dev/reports/tr29/
   */
  word_break: "ALetter" | "ATerm" | "CR" | "Double_Quote" | "E_Base" | "E_Base_GAZ" | "E_Modifier" | "Extend" | "ExtendNumLet" | "FO" | "Format" | "Hebrew_Letter" | "HY" | "H2" | "H3" | "ID" | "JL" | "JT" | "JV" | "Katakana" | "LE" | "LF" | "MidLetter" | "MidNum" | "MidNumLet" | "Newline" | "Numeric" | "Other" | "Perl" | "RI" | "Regional_Indicator" | "Single_Quote" | "SP" | "STerm" | "WSegSpace" | "ZWJ" | (string & {});
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point", "word_break"];
