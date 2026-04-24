/**
 * Parsed row from `extracted/DerivedNumericType-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/extracted/DerivedNumericType-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:55:53.869Z
 */
export interface ExtractedDerivedNumericType320 {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Numeric Type property value derived from UnicodeData.txt fields 6/7/8.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  numeric_type: "None" | "Decimal" | "Digit" | "Numeric";
}

export const EXTRACTED_DERIVED_NUMERIC_TYPE_320_FIELDS = ["code_point", "numeric_type"];
