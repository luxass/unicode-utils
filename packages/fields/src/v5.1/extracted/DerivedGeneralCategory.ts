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
 * @generated 2026-04-24T04:28:34.822Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * Unicode code point range with General_Category=Unassigned.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedGeneralCategory.txt#L15
   */
  code_point_range: string;

  /**
   * General_Category value.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedGeneralCategory.txt#L11-L15
   */
  general_category: "Unassigned";
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = ["code_point_range", "general_category"];
