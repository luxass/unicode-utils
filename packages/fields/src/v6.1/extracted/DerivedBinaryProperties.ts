/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/extracted/DerivedBinaryProperties.txt#L11
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:54:38.085Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Unicode code point range (e.g. 0000..10FFFF).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Bidi_Mirrored (listing UnicodeData.txt, field 9: see UAX #44).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/extracted/DerivedBinaryProperties.txt#L11
   */
  bidi_mirrored: "Y" | "N";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["code_point_range", "bidi_mirrored"];
