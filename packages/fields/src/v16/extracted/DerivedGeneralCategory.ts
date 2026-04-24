/**
 * Parsed row from `extracted/DerivedGeneralCategory.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/extracted/DerivedGeneralCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:16:29.687Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Major category derived from General_Category property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  general_category: "C" | "L" | "M" | "N" | "P" | "S" | "Z";
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = ["code_point", "general_category"];
