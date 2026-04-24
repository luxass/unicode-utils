/**
 * Parsed row from `IndicSyllabicCategory.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/IndicSyllabicCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/IndicSyllabicCategory.txt#L27-L28
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:21:45.910Z
 */
export interface IndicSyllabicCategory {
  /**
   * Unicode code point value or range of code point values
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/IndicSyllabicCategory.txt#L27
   */
  field_0: string;

  /**
   * Indic_Syllabic_Category property value
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/IndicSyllabicCategory.txt#L28
   */
  field_1: string;
}

export const INDIC_SYLLABIC_CATEGORY_FIELDS = ["field_0", "field_1"];
