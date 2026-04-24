/**
 * Parsed row from `extracted/DerivedGeneralCategory.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/extracted/DerivedGeneralCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 10
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:03.916Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * Code point range in the standard abbreviated format.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * General_Category values for characters with the Unassigned property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  general_category: "Cn" | (string & {});

  /**
   * Optional comment, such as @missing.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  comment: string;
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = ["codepoint_range", "general_category", "comment"];
