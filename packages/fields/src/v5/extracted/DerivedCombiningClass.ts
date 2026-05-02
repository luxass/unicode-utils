/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:57:04.985Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * Unicode code point or range of code points.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_points: string;

  /**
   * Canonical Combining Class value as decimal number.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  canonical_combining_class: number;
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = ["code_points", "canonical_combining_class"];
