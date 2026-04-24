/**
 * Parsed row from `extracted/DerivedNumericType.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/extracted/DerivedNumericType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedNumericType.txt#L11-L19
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedNumericType.txt#L24
 *
 * @unicodeVersion 6.3
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:07.762Z
 */
export interface ExtractedDerivedNumericType {
  /**
   * @missing: 0000..10FFFF; None.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedNumericType.txt#L24
   */
  code_point: string;

  /**
   * Derived property: Numeric_Type based on UnicodeData.txt fields 6-8 and Unihan numeric fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedNumericType.txt#L11-L19
   */
  numeric_type: "Decimal" | "Digit" | "Numeric" | "None";
}

export const EXTRACTED_DERIVED_NUMERIC_TYPE_FIELDS = ["code_point", "numeric_type"];
