/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:23:09.606Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * Unicode code point or range of code points with non-zero Canonical_Combining_Class.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Numeric Canonical_Combining_Class value (1-255).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  canonical_combining_class: number;
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = ["code_point", "canonical_combining_class"];
