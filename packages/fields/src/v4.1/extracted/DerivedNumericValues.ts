/**
 * Parsed row from `extracted/DerivedNumericValues.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/extracted/DerivedNumericValues.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/extracted/DerivedNumericValues.txt#L11
 *
 * @unicodeVersion 4.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:55:46.249Z
 */
export interface ExtractedDerivedNumericValues {
  /**
   * Code point range (from UnicodeData.txt field 1).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/extracted/DerivedNumericValues.txt#L11
   */
  code_point_range: string;

  /**
   * Numeric value (from UnicodeData.txt fields 6/7/8).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/extracted/DerivedNumericValues.txt#L11
   */
  numeric_value: string;
}

export const EXTRACTED_DERIVED_NUMERIC_VALUES_FIELDS = ["code_point_range", "numeric_value"];
