/**
 * Parsed row from `extracted/DerivedNumericType.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/extracted/DerivedNumericType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedNumericType.txt#L11-L14
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:57.126Z
 */
export interface ExtractedDerivedNumericType {
  /**
   * Unicode code point or range explicitly listed for Numeric_Type.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedNumericType.txt#L11-L14
   */
  code_point: string;

  /**
   * Numeric Type value; None for all code points not explicitly listed.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedNumericType.txt#L11-L14
   */
  numeric_type: "None" | (string & {});
}

export const EXTRACTED_DERIVED_NUMERIC_TYPE_FIELDS = ["code_point", "numeric_type"];
