/**
 * Parsed row from `extracted/DerivedNumericValues.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/extracted/DerivedNumericValues.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedNumericValues.txt#L11
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedNumericValues.txt#L14
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedNumericValues.txt#L16
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedNumericValues.txt#L18-L19
 *
 * @unicodeVersion 6
 * @fields 4
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:53:30.173Z
 */
export interface ExtractedDerivedNumericValues {
  /**
   * Numeric Values (from UnicodeData.txt, field 6/7/8).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedNumericValues.txt#L11
   */
  code_point_range: string;

  /**
   * in this file, they should be expressed to the limits of the precision.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedNumericValues.txt#L14
   */
  numeric_value_decimal: string;

  /**
   * Empty field; formerly a copy of the numeric type.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedNumericValues.txt#L16
   */
  numeric_value_fraction: string;

  /**
   * Numeric value as rational fraction where possible (e.g. 1/6), added in Unicode 5.1.0.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedNumericValues.txt#L18-L19
   */
  numeric_value_rational: string;
}

export const EXTRACTED_DERIVED_NUMERIC_VALUES_FIELDS = ["code_point_range", "numeric_value_decimal", "numeric_value_fraction", "numeric_value_rational"];
