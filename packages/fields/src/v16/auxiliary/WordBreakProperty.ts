/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/auxiliary/WordBreakProperty.txt#L12
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/auxiliary/WordBreakProperty.txt#L14
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:23.001Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range explicitly listed for Word_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/auxiliary/WordBreakProperty.txt#L14
   */
  code_point: string;

  /**
   * Word_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/auxiliary/WordBreakProperty.txt#L12
   */
  word_break:
    | "ALetter"
    | "Ambiguous"
    | "CR"
    | "Double_Quote"
    | "E_Base"
    | "E_Base_GAZ"
    | "E_Modifier"
    | "Extend"
    | "ExtendNumLet"
    | "Format"
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
    | (string & {});
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point", "word_break"];
