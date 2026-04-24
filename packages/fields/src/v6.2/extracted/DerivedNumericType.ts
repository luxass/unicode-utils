/**
 * Parsed row from `extracted/DerivedNumericType.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/extracted/DerivedNumericType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedNumericType.txt#L11
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedNumericType.txt#L15-L19
 *
 * @unicodeVersion 6.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:25:31.238Z
 */
export interface ExtractedDerivedNumericType {
  /**
   * Unicode code point or range explicitly listed with a Numeric_Type value.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedNumericType.txt#L11
   */
  code_point_range: string;

  /**
   * Derived Numeric_Type property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedNumericType.txt#L15-L19
   */
  numeric_type: "Decimal" | "Digit" | "Numeric" | "None";
}

export const EXTRACTED_DERIVED_NUMERIC_TYPE_FIELDS = ["code_point_range", "numeric_type"];
