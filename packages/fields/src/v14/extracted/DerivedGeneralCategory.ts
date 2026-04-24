/**
 * Parsed row from `extracted/DerivedGeneralCategory.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/extracted/DerivedGeneralCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 14
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:20:04.057Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * Unicode code point or range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Abbreviated value of the General_Category property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  general_category_abbr: string;

  /**
   * Long name for the General_Category property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  general_category_long: string;
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = [
  "code_point_range",
  "general_category_abbr",
  "general_category_long",
];
