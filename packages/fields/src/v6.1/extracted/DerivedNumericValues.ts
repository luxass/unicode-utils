/**
 * Parsed row from `extracted/DerivedNumericValues.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/extracted/DerivedNumericValues.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6.1
 * @fields 4
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:27:59.150Z
 */
export interface ExtractedDerivedNumericValues {
  /**
   * Unicode code point or range (e.g. 0030 or 2460..24FF).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Decimal approximation of the numeric value (e.g. 10, 0.16666667) or NaN.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  numeric_value: string;

  /**
   * Obsolete field; always empty.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  numeric_type: string;

  /**
   * Exact rational representation as integer or fraction (e.g. 10, 1/6).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  fraction: string;
}

export const EXTRACTED_DERIVED_NUMERIC_VALUES_FIELDS = [
  "code_point_range",
  "numeric_value",
  "numeric_type",
  "fraction",
];
