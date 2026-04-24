/**
 * Parsed row from `extracted/DerivedNumericValues.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/extracted/DerivedNumericValues.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedNumericValues.txt#L13-L21
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedNumericValues.txt#L23-L31
 *
 * @unicodeVersion 17
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:14:58.915Z
 */
export interface ExtractedDerivedNumericValues {
  /**
   * Derived numeric value based on UnicodeData.txt field 8 and Unihan kAccountingNumeric, kOtherNumeric, kPrimaryNumeric fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedNumericValues.txt#L13-L19
   */
  numeric_value: string;

  /**
   * This field is empty; it used to be a copy of the numeric type.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedNumericValues.txt#L20-L21
   */
  numeric_type: string;

  /**
   * Numeric value expressed as a whole integer where possible, or as a rational fraction such as "1/6".
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedNumericValues.txt#L23-L31
   */
  numeric_value_fraction: string;
}

export const EXTRACTED_DERIVED_NUMERIC_VALUES_FIELDS = [
  "numeric_value",
  "numeric_type",
  "numeric_value_fraction",
];
