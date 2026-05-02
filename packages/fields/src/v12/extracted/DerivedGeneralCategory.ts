/**
 * Parsed row from `extracted/DerivedGeneralCategory.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/extracted/DerivedGeneralCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 12
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:47:23.752Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * Hexadecimal code point or range (e.g. '0000..007F').
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * General_Category property value (e.g. 'Lu', 'Ll').
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  general_category: string;
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = ["code_point", "general_category"];
