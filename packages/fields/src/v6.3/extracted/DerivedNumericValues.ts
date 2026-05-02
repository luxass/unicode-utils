/**
 * Parsed row from `extracted/DerivedNumericValues.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/extracted/DerivedNumericValues.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedNumericValues.txt#L12-L20
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedNumericValues.txt#L22-L30
 *
 * @unicodeVersion 6.3
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:49:32.982Z
 */
export interface ExtractedDerivedNumericValues {
  /**
   * The values are based on field 8 of UnicodeData.txt, plus the fields kAccountingNumeric, kOtherNumeric, kPrimaryNumeric in the Unicode Han Database (Unihan). The derivations for these values are as follows.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedNumericValues.txt#L12-L18
   */
  numeric_value: "NaN" | (string & {});

  /**
   * This field is empty; it used to be a copy of the numeric type.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedNumericValues.txt#L19-L20
   */
  empty: string;

  /**
   * This field was added to this extracted data as of Unicode 5.1.0, expressing the same numeric value either as a whole integer where possible, or as a rational fraction such as "1/6".
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedNumericValues.txt#L22-L30
   */
  numeric_value_fraction: string;
}

export const EXTRACTED_DERIVED_NUMERIC_VALUES_FIELDS = ["numeric_value", "empty", "numeric_value_fraction"];
