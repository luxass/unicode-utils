/**
 * Parsed row from `extracted/DerivedGeneralCategory.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/extracted/DerivedGeneralCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedGeneralCategory.txt#L12
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedGeneralCategory.txt#L16
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:07.116Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * Code point range for characters with the specified General_Category value.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedGeneralCategory.txt#L16
   */
  range: string;

  /**
   * General_Category property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedGeneralCategory.txt#L12
   */
  general_category: string;
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = ["range", "general_category"];
