/**
 * Parsed row from `extracted/DerivedNumericValues.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/extracted/DerivedNumericValues.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedNumericValues.txt#L13-L21
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedNumericValues.txt#L23-L31
 *
 * @unicodeVersion 12
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:34.518Z
 */
export interface ExtractedDerivedNumericValues {
  /**
   * The values are based on field 8 of UnicodeData.txt, plus the fields kAccountingNumeric, kOtherNumeric, kPrimaryNumeric in the Unicode Han Database (Unihan).
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedNumericValues.txt#L13-L19
   */
  numeric_value: string;

  /**
   * This field is empty; it used to be a copy of the numeric type.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedNumericValues.txt#L20-L21
   */
  unused_field: string;

  /**
   * Expressing the same numeric value either as a whole integer where possible, or as a rational fraction such as "1/6".
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedNumericValues.txt#L23-L31
   */
  numeric_value_fraction: string;
}

export const EXTRACTED_DERIVED_NUMERIC_VALUES_FIELDS = [
  "numeric_value",
  "unused_field",
  "numeric_value_fraction",
];
