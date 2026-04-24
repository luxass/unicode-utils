/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
 * - https://ucdjs.dev/reports/tr29/
 *
 * @unicodeVersion 4.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:40.852Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr29/
   */
  code_point: string;

  /**
   * Word_Break property value; defaults to Other for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
   */
  word_break: "ALetter" | "CR" | "Double_Quote" | "E_Base" | "E_Base_GAZ" | "E_Modifier" | "Extend" | "ExtendNumLet" | "Hebrew_Letter" | "Katakana" | "LF" | "MidLetter" | "MidNum" | "MidNumLet" | "Newline" | "Numeric" | "Other" | "Perl" | "Regional_Indicator" | "Single_Quote" | "WSegSpace" | "ZWJ" | (string & {});
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point", "word_break"];
