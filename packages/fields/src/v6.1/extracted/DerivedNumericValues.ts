/**
 * Parsed row from `extracted/DerivedNumericValues.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/extracted/DerivedNumericValues.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/extracted/DerivedNumericValues.txt#L11-L17
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/extracted/DerivedNumericValues.txt#L24
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/extracted/DerivedNumericValues.txt#L26-L28
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6.1
 * @fields 4
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:55:12.510Z
 */
export interface ExtractedDerivedNumericValues {
  /**
   * Code point or range in the standard format for UCD files.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * The Numeric_Value derived from UnicodeData.txt field 8 or Unihan numeric fields, or NaN.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/extracted/DerivedNumericValues.txt#L11-L17
   */
  numeric_value: string;

  /**
   * Empty field; formerly a copy of the numeric type.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/extracted/DerivedNumericValues.txt#L24
   */
  numeric_type: string;

  /**
   * Numeric value expressed as a whole integer where possible or as a rational fraction (added in Unicode 5.1.0).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/extracted/DerivedNumericValues.txt#L26-L28
   */
  numeric_value_fraction: string;
}

export const EXTRACTED_DERIVED_NUMERIC_VALUES_FIELDS = ["code_point", "numeric_value", "numeric_type", "numeric_value_fraction"];
