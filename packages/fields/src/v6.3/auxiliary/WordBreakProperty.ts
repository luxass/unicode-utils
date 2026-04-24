/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
 * - https://ucdjs.dev/reports/tr29/
 *
 * @unicodeVersion 6.3
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:57.464Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr29/
   */
  code_point: string;

  /**
   * Word_Break property value; defaults to Other (XX) for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
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
    | "Hebrew_Letter"
    | "HY"
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
    | "Single_Quote"
    | "SP"
    | "STerm"
    | "WSegSpace"
    | "ZWJ"
    | (string & {});
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point", "word_break"];
