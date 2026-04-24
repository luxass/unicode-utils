/**
 * Parsed row from `extracted/DerivedGeneralCategory.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/extracted/DerivedGeneralCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedGeneralCategory.txt#L11
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedGeneralCategory.txt#L15
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:12.712Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * Unicode code point range for General_Category=Unassigned.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedGeneralCategory.txt#L15
   */
  codepoints: string;

  /**
   * General_Category property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedGeneralCategory.txt#L11
   */
  general_category: "Unassigned";
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = ["codepoints", "general_category"];
