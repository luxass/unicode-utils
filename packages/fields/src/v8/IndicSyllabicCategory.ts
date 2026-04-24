/**
 * Parsed row from `IndicSyllabicCategory.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/IndicSyllabicCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/IndicSyllabicCategory.txt#L27-L33
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:38.733Z
 */
export interface IndicSyllabicCategory {
  /**
   * Unicode code point value or range of code point values
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/IndicSyllabicCategory.txt#L27-L28
   */
  field_0: string;

  /**
   * Indic_Syllabic_Category property value
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/IndicSyllabicCategory.txt#L28-L33
   */
  field_1: string;
}

export const INDIC_SYLLABIC_CATEGORY_FIELDS = ["field_0", "field_1"];
