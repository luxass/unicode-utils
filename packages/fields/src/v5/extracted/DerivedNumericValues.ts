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
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:57:39.720Z
 */
export interface ExtractedDerivedNumericValues {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Numeric value as decimal, fraction, or integer from UnicodeData.txt fields 6/7/8.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  numeric_value: string;
}

export const EXTRACTED_DERIVED_NUMERIC_VALUES_FIELDS = ["code_point_range", "numeric_value"];
