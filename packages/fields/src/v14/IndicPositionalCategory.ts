/**
 * Parsed row from `IndicPositionalCategory.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/IndicPositionalCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/IndicPositionalCategory.txt#L57-L58
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:54.771Z
 */
export interface IndicPositionalCategory {
  /**
   * Unicode code point value or range of code point values
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/IndicPositionalCategory.txt#L57
   */
  code_point_or_range: string;

  /**
   * Indic_Positional_Category property value
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/IndicPositionalCategory.txt#L58
   */
  indic_positional_category: string;
}

export const INDIC_POSITIONAL_CATEGORY_FIELDS = [
  "code_point_or_range",
  "indic_positional_category",
];
