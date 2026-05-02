/**
 * Parsed row from `extracted/DerivedNumericType.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/extracted/DerivedNumericType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 18
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:41:42.932Z
 */
export interface ExtractedDerivedNumericType {
  /**
   * Unicode code point or range in hexadecimal format (e.g. '0030..0039' or '0041').
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Numeric_Type property value: Decimal, Digit, Numeric, or None.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  numeric_type: "Decimal" | "Digit" | "Numeric" | "None";
}

export const EXTRACTED_DERIVED_NUMERIC_TYPE_FIELDS = ["code_point_range", "numeric_type"];
