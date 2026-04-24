/**
 * Parsed row from `extracted/DerivedCombiningClass-4.0.1.txt` (Unicode 4.0.1).
 *
 * @see https://unicode.org/Public/4.0-Update1/extracted/DerivedCombiningClass-4.0.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 4.0.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:35:16.742Z
 */
export interface ExtractedDerivedCombiningClass401 {
  /**
   * Unicode code point or range listed with explicit Canonical_Combining_Class.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Value of the Canonical_Combining_Class property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  canonical_combining_class: number;
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_401_FIELDS = [
  "code_point_range",
  "canonical_combining_class",
];
