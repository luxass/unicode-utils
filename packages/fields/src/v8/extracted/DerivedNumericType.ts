/**
 * Parsed row from `extracted/DerivedNumericType.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/extracted/DerivedNumericType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedNumericType.txt#L11-L23
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:52:55.353Z
 */
export interface ExtractedDerivedNumericType {
  /**
   * Unicode code point range with Numeric_Type values explicitly listed.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedNumericType.txt#L11-L23
   */
  code_point_range: string;

  /**
   * Derived Numeric_Type property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedNumericType.txt#L11-L19
   */
  numeric_type: "Decimal" | "Digit" | "Numeric" | "None";
}

export const EXTRACTED_DERIVED_NUMERIC_TYPE_FIELDS = ["code_point_range", "numeric_type"];
