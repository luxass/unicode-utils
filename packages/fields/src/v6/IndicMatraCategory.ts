/**
 * Parsed row from `IndicMatraCategory.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/IndicMatraCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/IndicMatraCategory.txt#L53-L54
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:27:58.724Z
 */
export interface IndicMatraCategory {
  /**
   * Code Point or Code Point Range
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/IndicMatraCategory.txt#L53
   */
  code_point_or_range: string;

  /**
   * Indic_Matra_Category
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/IndicMatraCategory.txt#L54
   */
  indic_matra_category: string;
}

export const INDIC_MATRA_CATEGORY_FIELDS = ["code_point_or_range", "indic_matra_category"];
