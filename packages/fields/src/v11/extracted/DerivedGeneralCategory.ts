/**
 * Parsed row from `extracted/DerivedGeneralCategory.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/extracted/DerivedGeneralCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:47:57.829Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * Unicode code point or range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Value of the Derived General Category property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  general_category: "Unassigned" | "Noncharacter_Code_Point";
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = ["code_point", "general_category"];
