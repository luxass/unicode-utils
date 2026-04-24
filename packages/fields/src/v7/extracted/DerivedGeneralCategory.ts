/**
 * Parsed row from `extracted/DerivedGeneralCategory.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/extracted/DerivedGeneralCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:26:09.421Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * Code point or range (hexadecimal notation).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Abbreviated General_Category major category value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  general_category: "C" | "L" | "M" | "N" | "P" | "S" | "Z";
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = ["code_point_range", "general_category"];
