/**
 * Parsed row from `extracted/DerivedGeneralCategory.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/extracted/DerivedGeneralCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedGeneralCategory.txt#L12
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedGeneralCategory.txt#L16
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:33.639Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * General_Category=Unassigned.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedGeneralCategory.txt#L16
   */
  code_point_range: string;

  /**
   * General_Category value for unassigned code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedGeneralCategory.txt#L12
   */
  general_category: "Unassigned";
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = ["code_point_range", "general_category"];
