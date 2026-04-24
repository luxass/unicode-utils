/**
 * Parsed row from `extracted/DerivedGeneralCategory.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/extracted/DerivedGeneralCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/extracted/DerivedGeneralCategory.txt#L12
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/extracted/DerivedGeneralCategory.txt#L16
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:17.749Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * Unicode code point range for which the General_Category property value applies.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/extracted/DerivedGeneralCategory.txt#L12
   */
  code_point_range: string;

  /**
   * General_Category property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/extracted/DerivedGeneralCategory.txt#L16
   */
  general_category: string;
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = ["code_point_range", "general_category"];
