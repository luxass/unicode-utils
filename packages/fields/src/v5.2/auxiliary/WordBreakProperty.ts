/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
 *
 * @unicodeVersion 5.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:33:07.411Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point range or single code point explicitly listed for Word_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
   */
  code_point_range: string;

  /**
   * Word_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
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
    | "Single_Quote"
    | "SP"
    | "WSegSpace"
    | "ZWJ"
    | (string & {});
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point_range", "word_break"];
