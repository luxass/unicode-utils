/**
 * Parsed row from `extracted/DerivedNumericValues.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/extracted/DerivedNumericValues.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/extracted/DerivedNumericValues.txt#L13-L21
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/extracted/DerivedNumericValues.txt#L23-L31
 *
 * @unicodeVersion 15.1
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:15:52.945Z
 */
export interface ExtractedDerivedNumericValues {
  /**
   * The values are based on field 8 of UnicodeData.txt, plus the fields kAccountingNumeric, kOtherNumeric, kPrimaryNumeric in the Unicode Han Database (Unihan). The derivations for these values are as follows: Numeric_Value = the value of kAccountingNumeric, kOtherNumeric, or kPrimaryNumeric, if they exist; otherwise Numeric_Value = the value of field 8, if it exists; otherwise Numeric_Value = NaN.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/extracted/DerivedNumericValues.txt#L13-L19
   */
  numeric_value: string;

  /**
   * This field is empty; it used to be a copy of the numeric type.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/extracted/DerivedNumericValues.txt#L20-L21
   */
  unused_field: string;

  /**
   * Expressing the same numeric value either as a whole integer where possible, or as a rational fraction such as "1/6". Certain values, such as 0.16666667, are repeating fractions. Although they are only printed with a limited number of decimal places in this file, they should be expressed to the limits of the precision available when used.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/extracted/DerivedNumericValues.txt#L23-L31
   */
  numeric_value_fraction: string;
}

export const EXTRACTED_DERIVED_NUMERIC_VALUES_FIELDS = [
  "numeric_value",
  "unused_field",
  "numeric_value_fraction",
];
