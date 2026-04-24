/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
 *
 * @unicodeVersion 5.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:28:04.234Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range explicitly listed for Word_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
   */
  code_point: string;

  /**
   * Word_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
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
    | "Glue_After_Zwj"
    | "Hebrew_Letter"
    | "Katakana"
    | "LF"
    | "MidLetter"
    | "MidNum"
    | "MidNumLet"
    | "Newline"
    | "Numeric"
    | "Perl"
    | "Regional_Indicator"
    | "Single_Quote"
    | "Space"
    | "WSegmenter"
    | "ZWJ"
    | (string & {});
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point", "word_break"];
