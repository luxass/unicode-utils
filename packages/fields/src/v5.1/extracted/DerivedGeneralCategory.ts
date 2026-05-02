/**
 * Parsed row from `extracted/DerivedGeneralCategory.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/extracted/DerivedGeneralCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedGeneralCategory.txt#L11-L15
 *
 * @unicodeVersion 5.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:53:20.133Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * Code point range with General_Category=Unassigned property.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedGeneralCategory.txt#L11-L15
   */
  code_point_range: string;

  /**
   * General category value for the code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedGeneralCategory.txt#L15
   */
  general_category: "Unassigned";
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = ["code_point_range", "general_category"];
