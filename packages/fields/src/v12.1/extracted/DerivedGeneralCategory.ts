/**
 * Parsed row from `extracted/DerivedGeneralCategory.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/extracted/DerivedGeneralCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 12.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:18:57.090Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * Unicode code point range or single code point with the specified General_Category.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Value of the General_Category property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  general_category: string;
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = ["code_point_range", "general_category"];
