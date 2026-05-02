/**
 * Parsed row from `extracted/DerivedNumericType.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/extracted/DerivedNumericType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedNumericType.txt#L11
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:57:01.629Z
 */
export interface ExtractedDerivedNumericType {
  /**
   * Code point or range with Numeric_Type value.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedNumericType.txt#L11
   */
  code_point_range: string;

  /**
   * Numeric Type (from UnicodeData.txt, field 6/7/8 plus Unihan.txt).
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedNumericType.txt#L11
   */
  numeric_type: "None" | (string & {});
}

export const EXTRACTED_DERIVED_NUMERIC_TYPE_FIELDS = ["code_point_range", "numeric_type"];
