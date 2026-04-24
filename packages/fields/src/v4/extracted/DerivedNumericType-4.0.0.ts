/**
 * Parsed row from `extracted/DerivedNumericType-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/extracted/DerivedNumericType-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedNumericType-4.0.0.txt#L13-L16
 *
 * @unicodeVersion 4
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:03.036Z
 */
export interface ExtractedDerivedNumericType400 {
  /**
   * Unicode code point or range explicitly listed in this file.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedNumericType-4.0.0.txt#L13-L16
   */
  code_point_range: string;

  /**
   * Numeric Type from UnicodeData.txt fields 6/7/8 plus Unihan.txt.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedNumericType-4.0.0.txt#L13
   */
  numeric_type: "Decimal" | "Digit" | "Numeric" | (string & {});
}

export const EXTRACTED_DERIVED_NUMERIC_TYPE_400_FIELDS = ["code_point_range", "numeric_type"];
