/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 * - https://ucdjs.dev/reports/tr29/
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:03.729Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range (inferred from standard UCD format documented in UAX #44).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Word_Break property value; all code points not listed have value Other.
   *
   * @source https://ucdjs.dev/reports/tr29/
   */
  word_break:
    | "ALetter"
    | "ATerm"
    | "CR"
    | "Double_Quote"
    | "E_Base"
    | "E_Base_GAZ"
    | "E_Modifier"
    | "Extend"
    | "ExtendNumLet"
    | "FO"
    | "Format"
    | "Glue_After_Zwj"
    | "Hebrew_Letter"
    | "Katakana"
    | "LE"
    | "LF"
    | "MidLetter"
    | "MidNum"
    | "MidNumLet"
    | "Newline"
    | "Numeric"
    | "Other"
    | "Perl"
    | "RI"
    | "Regional_Indicator"
    | "Single_Quote"
    | "SP"
    | "WSegmenter"
    | "ZWJ"
    | (string & {});
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point", "word_break"];
