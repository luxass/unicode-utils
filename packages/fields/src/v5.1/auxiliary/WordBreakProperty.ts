/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
 * - https://ucdjs.dev/reports/tr29/
 *
 * @unicodeVersion 5.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:46.249Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range in standard UCD format.
   *
   * @source https://ucdjs.dev/reports/tr29/
   */
  code_point: string;

  /**
   * Word_Break property value; defaults to Other (XX) for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
   */
  word_break: "ALetter" | "ATerm" | "CR" | "Double_Quote" | "E_Base" | "E_Base_GAZ" | "E_Modifier" | "Extend" | "ExtendNumLet" | "FO" | "Format" | "Glue_After_Zwj" | "H2" | "H3" | "Hebrew_Letter" | "Hybrid_Start" | "Katakana" | "LF" | "LE" | "MidLetter" | "MidNum" | "MidNumLet" | "Newline" | "Numeric" | "Other" | "Perl" | "RI" | "Regional_Indicator" | "Single_Quote" | "SP" | "WSegSpace" | "ZWJ" | (string & {});
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point", "word_break"];
