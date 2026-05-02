/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:42:23.775Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Unicode code point or range in hexadecimal notation (e.g. 0041, 0590..05FF).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Bidi_Class property value (e.g. L, R, AL, ET).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  bidi_class: string;
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["code_point", "bidi_class"];
