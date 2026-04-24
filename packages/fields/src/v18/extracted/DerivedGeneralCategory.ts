/**
 * Parsed row from `extracted/DerivedGeneralCategory.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/extracted/DerivedGeneralCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/extracted/DerivedGeneralCategory.txt#L12-L16
 *
 * @unicodeVersion 18
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:48.926Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * Code point range for characters with General_Category=Unassigned.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/extracted/DerivedGeneralCategory.txt#L16
   */
  codepoint_range: string;

  /**
   * General_Category property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/extracted/DerivedGeneralCategory.txt#L12-L16
   */
  general_category: "Unassigned";
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = ["codepoint_range", "general_category"];
