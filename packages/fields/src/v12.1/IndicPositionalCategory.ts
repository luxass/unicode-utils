/**
 * Parsed row from `IndicPositionalCategory.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/IndicPositionalCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/IndicPositionalCategory.txt#L47-L48
 *
 * @unicodeVersion 12.1
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:45:38.997Z
 */
export interface IndicPositionalCategory {
  /**
   * Unicode code point value or range of code point values
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/IndicPositionalCategory.txt#L47
   */
  code_point_or_range: string;

  /**
   * Indic_Positional_Category property value
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/IndicPositionalCategory.txt#L48
   */
  indic_positional_category: string;
}

export const INDIC_POSITIONAL_CATEGORY_FIELDS = ["code_point_or_range", "indic_positional_category"];
