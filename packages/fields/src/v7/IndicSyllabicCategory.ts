/**
 * Parsed row from `IndicSyllabicCategory.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/IndicSyllabicCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/IndicSyllabicCategory.txt#L34-L35
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:26:24.490Z
 */
export interface IndicSyllabicCategory {
  /**
   * Unicode code point value or range of code point values
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/IndicSyllabicCategory.txt#L34
   */
  field_0: string;

  /**
   * Indic_Syllabic_Category property value
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/IndicSyllabicCategory.txt#L35
   */
  field_1: string;
}

export const INDIC_SYLLABIC_CATEGORY_FIELDS = ["field_0", "field_1"];
