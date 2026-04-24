/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr29/
 *
 * @unicodeVersion 5.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:44.072Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range (inferred from standard UCD format).
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
    | "AL"
    | "CR"
    | "Double_Quote"
    | "E_Base"
    | "E_Base_GAZ"
    | "E_Modifier"
    | "Extend"
    | "ExtendNumLet"
    | "Hebrew_Letter"
    | "Katakana"
    | "LF"
    | "MidLetter"
    | "MidNum"
    | "MidNumLet"
    | "Newline"
    | "Numeric"
    | "Other"
    | "Perl"
    | "Regional_Indicator"
    | "RI"
    | "Single_Quote"
    | "SP"
    | "WSegmenter"
    | (string & {});
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point", "word_break"];
