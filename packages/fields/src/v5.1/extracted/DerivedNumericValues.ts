/**
 * Parsed row from `extracted/DerivedNumericValues.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/extracted/DerivedNumericValues.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedNumericValues.txt#L16-L19
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedNumericValues.txt#L21
 *
 * @unicodeVersion 5.1
 * @fields 4
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:18.805Z
 */
export interface ExtractedDerivedNumericValues {
  /**
   * @missing: 0000..10FFFF; ; NaN.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedNumericValues.txt#L21
   */
  codepoint_range: string;

  /**
   * The third field is empty; it used to be a copy of the numeric type.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedNumericValues.txt#L16-L19
   */
  numeric_value_decimal: string;

  /**
   * Empty field; used to be a copy of the numeric type.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedNumericValues.txt#L16
   */
  numeric_type: string;

  /**
   * Numeric value expressed as a whole integer or rational fraction where possible.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedNumericValues.txt#L18-L19
   */
  numeric_value_fraction: string;
}

export const EXTRACTED_DERIVED_NUMERIC_VALUES_FIELDS = [
  "codepoint_range",
  "numeric_value_decimal",
  "numeric_type",
  "numeric_value_fraction",
];
