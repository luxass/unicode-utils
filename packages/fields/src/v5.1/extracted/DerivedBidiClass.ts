/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:53:12.669Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Unicode code point or range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Value of the Bidi_Class property as defined in UAX #44.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  bidi_class: string;
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["code_point_range", "bidi_class"];
