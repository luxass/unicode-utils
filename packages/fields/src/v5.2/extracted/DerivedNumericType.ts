/**
 * Parsed row from `extracted/DerivedNumericType.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/extracted/DerivedNumericType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/extracted/DerivedNumericType.txt#L11-L14
 *
 * @unicodeVersion 5.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:33:13.089Z
 */
export interface ExtractedDerivedNumericType {
  /**
   * Unicode code point or range explicitly listed as having a Numeric_Type.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/extracted/DerivedNumericType.txt#L11-L14
   */
  code_point: string;

  /**
   * Numeric Type (from UnicodeData.txt, field 6/7/8 plus Unihan Database).
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/extracted/DerivedNumericType.txt#L11
   */
  numeric_type: "Decimal" | "Digit" | "Numeric" | (string & {});
}

export const EXTRACTED_DERIVED_NUMERIC_TYPE_FIELDS = ["code_point", "numeric_type"];
