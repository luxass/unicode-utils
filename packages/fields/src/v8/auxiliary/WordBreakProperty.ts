/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:12.076Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range explicitly listed for Word_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
   */
  code_point: string;

  /**
   * Word_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
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
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point", "word_break"];
