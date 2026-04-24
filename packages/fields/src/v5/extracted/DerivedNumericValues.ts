/**
 * Parsed row from `extracted/DerivedNumericValues.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/extracted/DerivedNumericValues.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:29:35.022Z
 */
export interface ExtractedDerivedNumericValues {
  /**
   * Unicode code point range (e.g. 0660..0669).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Numeric value extracted from UnicodeData.txt fields 6, 7, or 8.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  numeric_value: string;
}

export const EXTRACTED_DERIVED_NUMERIC_VALUES_FIELDS = ["code_point_range", "numeric_value"];
