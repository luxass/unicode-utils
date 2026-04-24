/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
 *
 * @unicodeVersion 6.3
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:31:02.138Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point range or single code point explicitly listed for Word_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
   */
  code_point_range: string;

  /**
   * Value of the Word_Break property for the code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
   */
  word_break_value:
    | "ALetter"
    | "ATerm"
    | "CR"
    | "Double_Quote"
    | "E_Base"
    | "E_Base_GAZ"
    | "E_Modifier"
    | "Extend"
    | "ExtendNumLet"
    | "Format"
    | "Glue_After_Zwj"
    | "Hebrew_Letter"
    | "Katakana"
    | "LE_Word_Joiner"
    | "Letter"
    | "MidLetter"
    | "MidNum"
    | "MidNumLet"
    | "Newline"
    | "Numeric"
    | "Other"
    | "Perl"
    | "Regional_Indicator"
    | "Single_Quote"
    | "Space"
    | "WSegmenter"
    | "ZWJ"
    | (string & {});
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point_range", "word_break_value"];
