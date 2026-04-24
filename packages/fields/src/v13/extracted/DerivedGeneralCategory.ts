/**
 * Parsed row from `extracted/DerivedGeneralCategory.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/extracted/DerivedGeneralCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedGeneralCategory.txt#L12
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedGeneralCategory.txt#L16
 *
 * @unicodeVersion 13
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:07.232Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * General_Category=Unassigned.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedGeneralCategory.txt#L16
   */
  codepoint_range: string;

  /**
   * General_Category value.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedGeneralCategory.txt#L12
   */
  general_category: "Unassigned";
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = ["codepoint_range", "general_category"];
