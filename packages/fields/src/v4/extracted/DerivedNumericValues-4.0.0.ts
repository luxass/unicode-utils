/**
 * Parsed row from `extracted/DerivedNumericValues-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/extracted/DerivedNumericValues-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedNumericValues-4.0.0.txt#L13-L14
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 4
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:29.531Z
 */
export interface ExtractedDerivedNumericValues400 {
  /**
   * Unicode code point range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Numeric value from UnicodeData.txt fields 6/7/8.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedNumericValues-4.0.0.txt#L13-L14
   */
  numeric_value: string;
}

export const EXTRACTED_DERIVED_NUMERIC_VALUES_400_FIELDS = ["codepoint_range", "numeric_value"];
