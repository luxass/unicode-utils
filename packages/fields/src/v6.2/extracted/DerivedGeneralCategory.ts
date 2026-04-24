/**
 * Parsed row from `extracted/DerivedGeneralCategory.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/extracted/DerivedGeneralCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedGeneralCategory.txt#L11
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedGeneralCategory.txt#L15
 *
 * @unicodeVersion 6.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:14.221Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * General_Category=Unassigned.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedGeneralCategory.txt#L15
   */
  codepoints: string;

  /**
   * General_Category value.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedGeneralCategory.txt#L11
   */
  general_category: "Unassigned";
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = ["codepoints", "general_category"];
