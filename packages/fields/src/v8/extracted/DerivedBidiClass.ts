/**
 * Parsed row from `extracted/DerivedBidiClass.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/extracted/DerivedBidiClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedBidiClass.txt#L11
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:50:53.974Z
 */
export interface ExtractedDerivedBidiClass {
  /**
   * Unicode code point or range (field 1 of standard UCD property files per UAX #44).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Bidi Class (listing UnicodeData.txt, field 4: see UAX #44).
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedBidiClass.txt#L11
   */
  bidi_class: string;
}

export const EXTRACTED_DERIVED_BIDI_CLASS_FIELDS = ["code_point_range", "bidi_class"];
