/**
 * Parsed row from `extracted/DerivedNumericType.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/extracted/DerivedNumericType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedNumericType.txt#L12-L20
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedNumericType.txt#L22
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:42:41.587Z
 */
export interface ExtractedDerivedNumericType {
  /**
   * Unicode code point or range explicitly listed with a Numeric_Type value other than the default None.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedNumericType.txt#L22
   */
  code_point_range: string;

  /**
   * Derived property Numeric_Type with values based on fields 6-8 of UnicodeData.txt and Unihan numeric fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedNumericType.txt#L12-L20
   */
  numeric_type: "Decimal" | "Digit" | "Numeric" | "None";
}

export const EXTRACTED_DERIVED_NUMERIC_TYPE_FIELDS = ["code_point_range", "numeric_type"];
