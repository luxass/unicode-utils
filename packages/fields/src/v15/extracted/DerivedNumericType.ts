/**
 * Parsed row from `extracted/DerivedNumericType.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/extracted/DerivedNumericType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedNumericType.txt#L12
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedNumericType.txt#L16-L20
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:44:04.367Z
 */
export interface ExtractedDerivedNumericType {
  /**
   * Unicode code point or range explicitly listed with a Numeric_Type value.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedNumericType.txt#L12
   */
  code_point_range: string;

  /**
   * Derived Numeric_Type property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedNumericType.txt#L16-L20
   */
  numeric_type: "Decimal" | "Digit" | "Numeric" | "None";
}

export const EXTRACTED_DERIVED_NUMERIC_TYPE_FIELDS = ["code_point_range", "numeric_type"];
