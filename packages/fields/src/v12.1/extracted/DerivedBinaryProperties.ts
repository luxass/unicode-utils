/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/extracted/DerivedBinaryProperties.txt#L12
 *
 * @unicodeVersion 12.1
 * @fields 1
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:28.866Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Bidi_Mirrored (listing UnicodeData.txt, field 9: see UAX #44: http://www.unicode.org/reports/tr44/).
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/extracted/DerivedBinaryProperties.txt#L12
   */
  range: string;
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["range"];
