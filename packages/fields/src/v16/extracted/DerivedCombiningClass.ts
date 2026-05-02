/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:42:30.174Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * Unicode code point or range in hex notation; semicolon-separated from value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Canonical Combining Class value as decimal number (non-zero).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  combining_class: number;
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = ["codepoint_range", "combining_class"];
