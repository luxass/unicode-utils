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
 * @generated 2026-04-24T04:00:51.456Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point range (e.g. 003A..003A or 0000..10FFFF).
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
    | "WSegSpace"
    | "ZWJ"
    | (string & {});

  /**
   * Optional comment field.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  comment: string;
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point_range", "word_break", "comment"];
