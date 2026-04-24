/**
 * Parsed row from `extracted/DerivedGeneralCategory.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/extracted/DerivedGeneralCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 16
 * @fields 4
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T03:55:14.237Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * Hexadecimal code point or range (e.g., 0000..001F).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Abbreviated General_Category value (e.g., Cc).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  general_category: string;

  /**
   * Full General_Category name (e.g., Other, Control).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  general_category_name: string;

  /**
   * Informative comment including category, count, and sample (e.g., Cc [32] <control>).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  comment: string;
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = [
  "code_point_range",
  "general_category",
  "general_category_name",
  "comment",
];
