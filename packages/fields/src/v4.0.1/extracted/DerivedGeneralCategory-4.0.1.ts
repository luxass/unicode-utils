/**
 * Parsed row from `extracted/DerivedGeneralCategory-4.0.1.txt` (Unicode 4.0.1).
 *
 * @see https://unicode.org/Public/4.0-Update1/extracted/DerivedGeneralCategory-4.0.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 4.0.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:53:36.121Z
 */
export interface ExtractedDerivedGeneralCategory401 {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * General Category property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  general_category: string;
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_401_FIELDS = ["code_point_range", "general_category"];
