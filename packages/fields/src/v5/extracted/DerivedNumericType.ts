/**
 * Parsed row from `extracted/DerivedNumericType.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/extracted/DerivedNumericType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedNumericType.txt#L11-L14
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:32.207Z
 */
export interface ExtractedDerivedNumericType {
  /**
   * Unicode code point or range explicitly listed as having a Numeric_Type other than None.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedNumericType.txt#L11-L14
   */
  code_point: string;

  /**
   * Numeric Type value from UnicodeData.txt fields 6/7/8 or Unihan.txt.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedNumericType.txt#L11
   */
  numeric_type: string;
}

export const EXTRACTED_DERIVED_NUMERIC_TYPE_FIELDS = ["code_point", "numeric_type"];
