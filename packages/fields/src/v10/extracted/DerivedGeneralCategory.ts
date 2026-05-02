/**
 * Parsed row from `extracted/DerivedGeneralCategory.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/extracted/DerivedGeneralCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedGeneralCategory.txt#L12-L16
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:46:22.555Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * Unicode code point range in the standard UCD format (e.g. '0041' or '0041..0045').
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * General_Category property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedGeneralCategory.txt#L12-L16
   */
  general_category: "Unassigned" | (string & {});
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = ["code_point_range", "general_category"];
