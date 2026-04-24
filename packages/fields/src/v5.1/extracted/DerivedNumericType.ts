/**
 * Parsed row from `extracted/DerivedNumericType.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/extracted/DerivedNumericType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedNumericType.txt#L11
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedNumericType.txt#L16
 *
 * @unicodeVersion 5.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:48.416Z
 */
export interface ExtractedDerivedNumericType {
  /**
   * @missing: 0000..10FFFF; None.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedNumericType.txt#L16
   */
  code_point_range: string;

  /**
   * Numeric Type derived from UnicodeData.txt fields 6/7/8 and Unihan.txt.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedNumericType.txt#L11
   */
  numeric_type: "Digit" | "Decimal" | "Numeric" | "None";
}

export const EXTRACTED_DERIVED_NUMERIC_TYPE_FIELDS = ["code_point_range", "numeric_type"];
