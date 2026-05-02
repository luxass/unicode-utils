/**
 * Parsed row from `extracted/DerivedNumericType.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/extracted/DerivedNumericType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:44:57.469Z
 */
export interface ExtractedDerivedNumericType {
  /**
   * Unicode code point or range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Numeric_Type property: Decimal if field 6 in UnicodeData.txt; Digit if field 7 but not 6; Numeric if certain Han numerics or field 8 but not 7; None otherwise.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  numeric_type: "Decimal" | "Digit" | "Numeric" | "None";
}

export const EXTRACTED_DERIVED_NUMERIC_TYPE_FIELDS = ["code_point", "numeric_type"];
