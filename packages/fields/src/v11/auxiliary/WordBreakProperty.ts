/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr29/
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:36.722Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range in standard UCD format.
   *
   * @source https://ucdjs.dev/reports/tr29/
   */
  code_point: string;

  /**
   * Word_Break property value.
   *
   * @source https://ucdjs.dev/reports/tr29/
   */
  word_break:
    | "ALetter"
    | "ATerm"
    | "B2"
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
    | "H2"
    | "H3"
    | "Hebrew_Letter"
    | "HY"
    | "Ideographic"
    | "JL"
    | "JT"
    | "JV"
    | "Katakana"
    | "LE"
    | "LF"
    | "Link"
    | "MidLetter"
    | "MidNum"
    | "MidNumLet"
    | "Newline"
    | "Numeric"
    | "Other"
    | "Perl"
    | "PO"
    | "Prefix"
    | "PRHangul"
    | "Regional_Indicator"
    | "RI"
    | "Single_Quote"
    | "Space"
    | "STerm"
    | "WSegSpace"
    | "ZWJ"
    | "ZwjEB"
    | (string & {});
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point", "word_break"];
