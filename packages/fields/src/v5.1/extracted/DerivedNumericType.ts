/**
 * Parsed row from `extracted/DerivedNumericType.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/extracted/DerivedNumericType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedNumericType.txt#L11-L14
 *
 * @unicodeVersion 5.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:28:29.827Z
 */
export interface ExtractedDerivedNumericType {
  /**
   * Unicode code point or range explicitly listed for Numeric_Type.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedNumericType.txt#L11-L14
   */
  code_point: string;

  /**
   * Numeric Type value; None for all code points not explicitly listed.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedNumericType.txt#L11-L14
   */
  numeric_type: "None" | (string & {});
}

export const EXTRACTED_DERIVED_NUMERIC_TYPE_FIELDS = ["code_point", "numeric_type"];
