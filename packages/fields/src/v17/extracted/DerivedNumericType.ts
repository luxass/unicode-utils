/**
 * Parsed row from `extracted/DerivedNumericType.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/extracted/DerivedNumericType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:41:38.917Z
 */
export interface ExtractedDerivedNumericType {
  /**
   * Unicode code point or range for which the Numeric_Type is explicitly listed.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Numeric_Type property value: Decimal (field 6 of UnicodeData), Digit (field 7 not 6), Numeric (field 8 or Unihan numerics not Digit), None otherwise.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  numeric_type: "Decimal" | "Digit" | "Numeric" | "None";
}

export const EXTRACTED_DERIVED_NUMERIC_TYPE_FIELDS = ["code_point", "numeric_type"];
