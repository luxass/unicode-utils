/**
 * Parsed row from `extracted/DerivedNumericType.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/extracted/DerivedNumericType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedNumericType.txt#L11
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedNumericType.txt#L13-L14
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:30:26.943Z
 */
export interface ExtractedDerivedNumericType {
  /**
   * Unicode code point or range explicitly listed for Numeric_Type.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedNumericType.txt#L13-L14
   */
  code_point_range: string;

  /**
   * Numeric Type derived from UnicodeData.txt fields 6/7/8 and Unihan.txt.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedNumericType.txt#L11
   */
  numeric_type: "Digit" | "Numeric" | (string & {});
}

export const EXTRACTED_DERIVED_NUMERIC_TYPE_FIELDS = ["code_point_range", "numeric_type"];
