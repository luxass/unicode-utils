/**
 * Parsed row from `extracted/DerivedNumericType.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/extracted/DerivedNumericType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedNumericType.txt#L11-L19
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedNumericType.txt#L21
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:25:41.176Z
 */
export interface ExtractedDerivedNumericType {
  /**
   * Unicode code point or range explicitly listed as having a Numeric_Type value other than the default None.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedNumericType.txt#L21
   */
  codepoints: string;

  /**
   * Derived Numeric_Type property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedNumericType.txt#L11-L19
   */
  numeric_type: "Decimal" | "Digit" | "Numeric" | "None";
}

export const EXTRACTED_DERIVED_NUMERIC_TYPE_FIELDS = ["codepoints", "numeric_type"];
