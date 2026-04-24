/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 16
 * @fields 3
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T03:53:59.050Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range (e.g. 0020..002F).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Word_Break property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  word_break:
    | "ALetter"
    | "ATerm"
    | "BContinue"
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
    | "WSegSpace"
    | "ZWJ"
    | (string & {});

  /**
   * Optional comment or source information.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  comment: string;
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point_range", "word_break", "comment"];
