/**
 * Parsed row from `extracted/DerivedNumericType.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/extracted/DerivedNumericType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedNumericType.txt#L12-L20
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedNumericType.txt#L25
 *
 * @unicodeVersion 13
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:05.792Z
 */
export interface ExtractedDerivedNumericType {
  /**
   * @missing: 0000..10FFFF; None.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedNumericType.txt#L25
   */
  code_point: string;

  /**
   * Derived property Numeric_Type based on fields 6-8 of UnicodeData.txt and Unihan numeric fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedNumericType.txt#L12-L20
   */
  numeric_type: "Decimal" | "Digit" | "Numeric" | "None";
}

export const EXTRACTED_DERIVED_NUMERIC_TYPE_FIELDS = ["code_point", "numeric_type"];
