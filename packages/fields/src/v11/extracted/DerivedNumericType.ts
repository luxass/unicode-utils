/**
 * Parsed row from `extracted/DerivedNumericType.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/extracted/DerivedNumericType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/extracted/DerivedNumericType.txt#L12-L27
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:05.936Z
 */
export interface ExtractedDerivedNumericType {
  /**
   * Unicode code point or range listed explicitly for Numeric_Type, with default None otherwise.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/extracted/DerivedNumericType.txt#L12-L27
   */
  codepoints: string;

  /**
   * Numeric_Type property value: Decimal when value in UnicodeData field 6; Digit when value in field 7 but not 6; Numeric when values in Unihan numeric fields or field 8 but not 7; None otherwise.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/extracted/DerivedNumericType.txt#L12-L27
   */
  numeric_type: "Decimal" | "Digit" | "Numeric" | "None" | (string & {});
}

export const EXTRACTED_DERIVED_NUMERIC_TYPE_FIELDS = ["codepoints", "numeric_type"];
