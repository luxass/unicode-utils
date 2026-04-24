/**
 * Parsed row from `extracted/DerivedGeneralCategory.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/extracted/DerivedGeneralCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:53:10.465Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * Unicode code point or range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Major General_Category value: C (Other), L (Letter), M (Mark), N (Number), P (Punctuation), S (Symbol), Z (Separator).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  general_category: "C" | "L" | "M" | "N" | "P" | "S" | "Z";
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = ["code_point", "general_category"];
