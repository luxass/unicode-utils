/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.50
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:26:37.607Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * Hexadecimal Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Value of the Canonical_Combining_Class property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  canonical_combining_class: string;
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = ["code_point", "canonical_combining_class"];
