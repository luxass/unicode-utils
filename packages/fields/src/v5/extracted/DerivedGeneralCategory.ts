/**
 * Parsed row from `extracted/DerivedGeneralCategory.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/extracted/DerivedGeneralCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedGeneralCategory.txt#L11
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:26.753Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * Code point range in the standard UCD format.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  range: string;

  /**
   * General_Category property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedGeneralCategory.txt#L11
   */
  general_category: "Cn" | (string & {});
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = ["range", "general_category"];
