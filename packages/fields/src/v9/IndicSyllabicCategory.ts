/**
 * Parsed row from `IndicSyllabicCategory.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/IndicSyllabicCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/IndicSyllabicCategory.txt#L27-L28
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:48:51.558Z
 */
export interface IndicSyllabicCategory {
  /**
   * Unicode code point value or range of code point values
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/IndicSyllabicCategory.txt#L27
   */
  code_point_or_range: string;

  /**
   * Indic_Syllabic_Category property value
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/IndicSyllabicCategory.txt#L28
   */
  indic_syllabic_category: string;
}

export const INDIC_SYLLABIC_CATEGORY_FIELDS = ["code_point_or_range", "indic_syllabic_category"];
