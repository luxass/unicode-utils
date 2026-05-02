/**
 * Parsed row from `extracted/DerivedGeneralCategory.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/extracted/DerivedGeneralCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:55:16.608Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * Code point or range (e.g. 0000..007F) with the specified General_Category.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Value of the General_Category property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  general_category: string;
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = ["code_point", "general_category"];
