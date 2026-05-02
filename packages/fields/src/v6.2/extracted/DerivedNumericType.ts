/**
 * Parsed row from `extracted/DerivedNumericType.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/extracted/DerivedNumericType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6.2
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:51:42.651Z
 */
export interface ExtractedDerivedNumericType {
  /**
   * Unicode code point or range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Numeric_Type property value: Decimal, Digit, Numeric, or None (default for unlisted code points).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  numeric_type: "Decimal" | "Digit" | "Numeric" | "None";
}

export const EXTRACTED_DERIVED_NUMERIC_TYPE_FIELDS = ["code_point", "numeric_type"];
