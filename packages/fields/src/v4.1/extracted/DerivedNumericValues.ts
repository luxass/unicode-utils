/**
 * Parsed row from `extracted/DerivedNumericValues.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/extracted/DerivedNumericValues.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 4.1
 * @fields 2
 * @confidence 0.50
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:54:36.325Z
 */
export interface ExtractedDerivedNumericValues {
  /**
   * Code point or range from which the numeric value is derived.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Numeric value from UnicodeData.txt fields 6/7/8.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  numeric_value: string;
}

export const EXTRACTED_DERIVED_NUMERIC_VALUES_FIELDS = ["codepoint_range", "numeric_value"];
