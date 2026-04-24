/**
 * Parsed row from `extracted/DerivedGeneralCategory.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/extracted/DerivedGeneralCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 15.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:15:57.926Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * General_Category property value as defined in UAX #44.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  general_category: string;
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = ["code_point", "general_category"];
