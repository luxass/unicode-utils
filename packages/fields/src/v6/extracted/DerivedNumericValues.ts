/**
 * Parsed row from `extracted/DerivedNumericValues.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/extracted/DerivedNumericValues.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6
 * @fields 4
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:53:23.290Z
 */
export interface ExtractedDerivedNumericValues {
  /**
   * Unicode code point(s) or range(s) in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Decimal approximation of the Numeric_Value property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  decimal_value: string;

  /**
   * Empty field; formerly a copy of the numeric type.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  numeric_type: string;

  /**
   * Rational fraction or integer representation of the numeric value, e.g. "1/6".
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  rational_value: string;
}

export const EXTRACTED_DERIVED_NUMERIC_VALUES_FIELDS = ["code_point_range", "decimal_value", "numeric_type", "rational_value"];
