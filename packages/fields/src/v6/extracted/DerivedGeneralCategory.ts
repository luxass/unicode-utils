/**
 * Parsed row from `extracted/DerivedGeneralCategory.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/extracted/DerivedGeneralCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedGeneralCategory.txt#L11
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedGeneralCategory.txt#L15
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:16.697Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * Unicode code point or range with General_Category=Unassigned property.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedGeneralCategory.txt#L15
   */
  code_point_range: string;

  /**
   * General_Category property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedGeneralCategory.txt#L11
   */
  general_category: "Unassigned";
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = ["code_point_range", "general_category"];
