/**
 * Parsed row from `extracted/DerivedNumericValues.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/extracted/DerivedNumericValues.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/extracted/DerivedNumericValues.txt#L11-L21
 *
 * @unicodeVersion 5.2
 * @fields 4
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:00.431Z
 */
export interface ExtractedDerivedNumericValues {
  /**
   * @missing: 0000..10FFFF; ; NaN indicates code point range with default numeric value.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/extracted/DerivedNumericValues.txt#L21
   */
  code_point_range: string;

  /**
   * Numeric value expressed as a decimal with limited precision.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/extracted/DerivedNumericValues.txt#L11-L20
   */
  numeric_value_decimal: string;

  /**
   * Third field is empty; it used to be a copy of the numeric type.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/extracted/DerivedNumericValues.txt#L16
   */
  numeric_type: "none";

  /**
   * Numeric value expressed as a whole integer where possible or as a rational fraction, e.g. "1/6".
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/extracted/DerivedNumericValues.txt#L18-L19
   */
  numeric_value_fraction: string;
}

export const EXTRACTED_DERIVED_NUMERIC_VALUES_FIELDS = [
  "code_point_range",
  "numeric_value_decimal",
  "numeric_type",
  "numeric_value_fraction",
];
