/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:50:39.879Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Code point or range (first column).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code: string;

  /**
   * Word_Break property value; Other for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
   */
  word_break: "ALetter" | "MidNum" | "MidNumLet" | "MidLetter" | "Newline" | "Extend" | "Format" | "Katakana" | "ExtendNumLet" | "ZWJ" | "Other";
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code", "word_break"];
