/**
 * Parsed row from `IndicSyllabicCategory.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/IndicSyllabicCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/IndicSyllabicCategory.txt#L33-L34
 *
 * @unicodeVersion 6.3
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:31:39.143Z
 */
export interface IndicSyllabicCategory {
  /**
   * Code Point or Code Point Range
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/IndicSyllabicCategory.txt#L33
   */
  code_point_or_range: string;

  /**
   * Indic_Syllabic_Category
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/IndicSyllabicCategory.txt#L34
   */
  indic_syllabic_category: string;
}

export const INDIC_SYLLABIC_CATEGORY_FIELDS = ["code_point_or_range", "indic_syllabic_category"];
