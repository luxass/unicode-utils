/**
 * Parsed row from `extracted/DerivedNumericType.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/extracted/DerivedNumericType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:48:19.252Z
 */
export interface ExtractedDerivedNumericType {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * The Numeric_Type property value: None, Decimal, Digit, or Numeric.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  numeric_type: "None" | "Decimal" | "Digit" | "Numeric";
}

export const EXTRACTED_DERIVED_NUMERIC_TYPE_FIELDS = ["code_point_range", "numeric_type"];
