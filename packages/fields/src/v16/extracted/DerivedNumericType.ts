/**
 * Parsed row from `extracted/DerivedNumericType.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/extracted/DerivedNumericType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:01:54.918Z
 */
export interface ExtractedDerivedNumericType {
  /**
   * Unicode code point or range listed explicitly for Numeric_Type.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoints: string;

  /**
   * Derived Numeric_Type property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  numeric_type: "Decimal" | "Digit" | "Numeric" | "None";
}

export const EXTRACTED_DERIVED_NUMERIC_TYPE_FIELDS = ["codepoints", "numeric_type"];
