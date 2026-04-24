/**
 * Parsed row from `extracted/DerivedGeneralCategory.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/extracted/DerivedGeneralCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedGeneralCategory.txt#L12
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedGeneralCategory.txt#L16
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:35:13.050Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * General_Category=Unassigned.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedGeneralCategory.txt#L16
   */
  codepoint_range: string;

  /**
   * General_Category value from DerivedGeneralCategory.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedGeneralCategory.txt#L12
   */
  general_category: "Unassigned";
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = ["codepoint_range", "general_category"];
