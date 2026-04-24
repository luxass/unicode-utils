/**
 * Parsed row from `extracted/DerivedNumericValues.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/extracted/DerivedNumericValues.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5.1
 * @fields 4
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:29:31.467Z
 */
export interface ExtractedDerivedNumericValues {
  /**
   * Unicode code point or range of code points with numeric values.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Decimal representation of the numeric value (may be repeating fraction like 0.16666667).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  numeric_value: string;

  /**
   * Empty field; formerly contained the numeric type.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  reserved: string;

  /**
   * Rational fraction representation of the numeric value where possible (e.g. "1/6"), integer otherwise.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  rational_value: string;
}

export const EXTRACTED_DERIVED_NUMERIC_VALUES_FIELDS = [
  "code_point",
  "numeric_value",
  "reserved",
  "rational_value",
];
