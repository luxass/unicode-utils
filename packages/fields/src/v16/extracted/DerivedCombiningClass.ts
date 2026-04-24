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
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:01:48.617Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * Code point range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Value of the Canonical_Combining_Class property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  canonical_combining_class: string;
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = [
  "code_point_range",
  "canonical_combining_class",
];
