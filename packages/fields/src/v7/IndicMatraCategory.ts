/**
 * Parsed row from `IndicMatraCategory.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/IndicMatraCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/IndicMatraCategory.txt#L54-L55
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:09.876Z
 */
export interface IndicMatraCategory {
  /**
   * Unicode code point value or range of code point values
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/IndicMatraCategory.txt#L54
   */
  code_point_or_range: string;

  /**
   * Indic_Matra_Category property value
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/IndicMatraCategory.txt#L55
   */
  indic_matra_category: string;
}

export const INDIC_MATRA_CATEGORY_FIELDS = ["code_point_or_range", "indic_matra_category"];
