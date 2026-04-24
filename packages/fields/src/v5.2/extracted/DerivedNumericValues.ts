/**
 * Parsed row from `extracted/DerivedNumericValues.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/extracted/DerivedNumericValues.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5.2
 * @fields 4
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:34:33.309Z
 */
export interface ExtractedDerivedNumericValues {
  /**
   * Unicode code point or range of code points.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Decimal representation of the numeric value, which may be a repeating fraction printed to limited decimal places.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  decimal_numeric_value: string;

  /**
   * Empty field that used to contain a copy of the numeric type.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  numeric_type: string;

  /**
   * Rational representation of the numeric value as a whole integer or fraction, e.g. "1/6".
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  rational_numeric_value: string;
}

export const EXTRACTED_DERIVED_NUMERIC_VALUES_FIELDS = [
  "code_point",
  "decimal_numeric_value",
  "numeric_type",
  "rational_numeric_value",
];
