/**
 * Parsed row from `extracted/DerivedNumericValues-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/extracted/DerivedNumericValues-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.2
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:56:07.794Z
 */
export interface ExtractedDerivedNumericValues320 {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * decimal number, fraction a/b, or NaN.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  numeric_value: string;
}

export const EXTRACTED_DERIVED_NUMERIC_VALUES_320_FIELDS = ["code_point", "numeric_value"];
