/**
 * Parsed row from `extracted/DerivedNumericType.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/extracted/DerivedNumericType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedNumericType.txt#L12-L20
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedNumericType.txt#L25
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T03:54:21.611Z
 */
export interface ExtractedDerivedNumericType {
  /**
   * Unicode code point(s).
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedNumericType.txt#L25
   */
  codepoints: string;

  /**
   * Derived Numeric_Type property value based on UnicodeData.txt fields 6-8 and Unihan numeric fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedNumericType.txt#L12-L20
   */
  numeric_type: "Decimal" | "Digit" | "Numeric" | "None" | (string & {});
}

export const EXTRACTED_DERIVED_NUMERIC_TYPE_FIELDS = ["codepoints", "numeric_type"];
