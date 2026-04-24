/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/auxiliary/WordBreakProperty.txt#L12-L15
 *
 * @unicodeVersion 13
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:02.889Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range explicitly listed for Word_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/auxiliary/WordBreakProperty.txt#L12-L15
   */
  code_point: string;

  /**
   * Word_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/auxiliary/WordBreakProperty.txt#L12-L15
   */
  word_break: "ALetter" | "ATerm" | "CR" | "Double_Quote" | "E_Base" | "E_Base_GAZ" | "E_Modifier" | "Extend" | "ExtendNumLet" | "Format" | "Glue_After_Zwj" | "Hebrew_Letter" | "Katakana" | "LE" | "LF" | "MidLetter" | "MidNum" | "MidNumLet" | "Newline" | "Numeric" | "Other" | "Perl" | "RI" | "Regional_Indicator" | "Single_Quote" | "SP" | "VQ" | "WSegSpace" | "ZWJ" | (string & {});
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point", "word_break"];
