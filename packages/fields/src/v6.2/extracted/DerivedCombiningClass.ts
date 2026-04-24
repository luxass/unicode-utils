/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:26:18.589Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * Unicode code point or range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  range: string;

  /**
   * Value of the Canonical_Combining_Class property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  canonical_combining_class: number;
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = ["range", "canonical_combining_class"];
