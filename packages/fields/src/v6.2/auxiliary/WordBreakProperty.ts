/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
 *
 * @unicodeVersion 6.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:54.263Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range for the Word_Break property.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
   */
  code_point: string;

  /**
   * Word_Break property value; unlisted code points have default value Other.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
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
    | "VQ"
    | "WSegSpace"
    | "ZWJ"
    | (string & {});
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point", "word_break"];
