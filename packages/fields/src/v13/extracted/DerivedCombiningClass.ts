/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 13
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:45:02.008Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Canonical Combining Class value (non-zero).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  canonical_combining_class: number;
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = ["code_point", "canonical_combining_class"];
