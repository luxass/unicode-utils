/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/auxiliary/WordBreakProperty.txt#L12-L15
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/auxiliary/WordBreakProperty.txt#L17
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:15.977Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * @missing: 0000..10FFFF; Other.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/auxiliary/WordBreakProperty.txt#L17
   */
  code_point: string;

  /**
   * Word_Break property value; unlisted code points have value Other (XX).
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/auxiliary/WordBreakProperty.txt#L12-L15
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
    | "HT"
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
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point", "word_break"];
