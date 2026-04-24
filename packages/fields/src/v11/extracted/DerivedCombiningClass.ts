/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:23:26.506Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * Unicode code point or range in hexadecimal notation.
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
