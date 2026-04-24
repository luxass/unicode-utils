/**
 * Parsed row from `extracted/DerivedNumericValues.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/extracted/DerivedNumericValues.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedNumericValues.txt#L16-L19
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6
 * @fields 4
 * @confidence 0.50
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:28:38.871Z
 */
export interface ExtractedDerivedNumericValues {
  /**
   * Unicode code point or range (inferred from standard UCD file format).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Numeric value from UnicodeData.txt fields 6/7/8, as decimal approximation; repeating fractions printed with limited decimals.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  numeric_value: string;

  /**
   * Third field is empty; formerly a copy of the numeric type.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedNumericValues.txt#L16
   */
  numeric_type: "none";

  /**
   * Numeric value as whole integer or rational fraction (added Unicode 5.1.0).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedNumericValues.txt#L17-L19
   */
  numeric_value_fraction: string;
}

export const EXTRACTED_DERIVED_NUMERIC_VALUES_FIELDS = [
  "code_point",
  "numeric_value",
  "numeric_type",
  "numeric_value_fraction",
];
