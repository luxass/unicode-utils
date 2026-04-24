/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 * - https://ucdjs.dev/reports/tr29/
 *
 * @unicodeVersion 15.1
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:08.043Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range (first field in standard UCD property files).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Word_Break property value; defaults to Other (XX) for unlisted code points.
   *
   * @source https://ucdjs.dev/reports/tr29/
   */
  word_break: "ALetter" | "ATerm" | "CR" | "Double_Quote" | "E_Base" | "E_Base_GAZ" | "E_Modifier" | "Extend" | "ExtendNumLet" | "Format" | "Glue_After_Zwj" | "Hebrew_Letter" | "Katakana" | "LE" | "Line_Feed" | "MidLetter" | "MidNum" | "MidNumLet" | "Newline" | "Numeric" | "Other" | "Perl" | "Regional_Indicator" | "Single_Quote" | "Space" | "WSegmenter" | "ZWJ" | (string & {});

  /**
   * Optional comment field.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  comment: string;
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point", "word_break", "comment"];
