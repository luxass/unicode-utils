/**
 * Parsed row from `extracted/DerivedNumericValues.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/extracted/DerivedNumericValues.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedNumericValues.txt#L12-L20
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedNumericValues.txt#L22-L30
 *
 * @unicodeVersion 7
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:25:48.532Z
 */
export interface ExtractedDerivedNumericValues {
  /**
   * The values are based on field 8 of UnicodeData.txt, plus the fields kAccountingNumeric, kOtherNumeric, kPrimaryNumeric in the Unicode Han Database (Unihan). The derivations for these values are as follows: Numeric_Value = the value of kAccountingNumeric, kOtherNumeric, or kPrimaryNumeric, if they exist; otherwise Numeric_Value = the value of field 8, if it exists; otherwise Numeric_Value = NaN.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedNumericValues.txt#L12-L18
   */
  numeric_value: string;

  /**
   * This field is empty; it used to be a copy of the numeric type.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedNumericValues.txt#L19-L20
   */
  numeric_type: string;

  /**
   * Expressing the same numeric value either as a whole integer where possible, or as a rational fraction such as "1/6".
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedNumericValues.txt#L22-L30
   */
  numeric_value_fraction: string;
}

export const EXTRACTED_DERIVED_NUMERIC_VALUES_FIELDS = [
  "numeric_value",
  "numeric_type",
  "numeric_value_fraction",
];
