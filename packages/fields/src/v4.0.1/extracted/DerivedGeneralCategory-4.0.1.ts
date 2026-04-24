/**
 * Parsed row from `extracted/DerivedGeneralCategory-4.0.1.txt` (Unicode 4.0.1).
 *
 * @see https://unicode.org/Public/4.0-Update1/extracted/DerivedGeneralCategory-4.0.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 4.0.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:36:27.343Z
 */
export interface ExtractedDerivedGeneralCategory401 {
  /**
   * Hexadecimal code point range (e.g. '0000..001F').
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Major General_Category value as a single letter.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  general_category: "C" | "L" | "M" | "N" | "P" | "S" | "Z";
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_401_FIELDS = [
  "code_point_range",
  "general_category",
];
