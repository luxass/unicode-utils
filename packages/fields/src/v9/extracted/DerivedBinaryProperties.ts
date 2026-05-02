/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedBinaryProperties.txt#L12
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:48:27.480Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Bidi_Mirrored (listing UnicodeData.txt, field 9: see UAX 44: http://www.unicode.org/reports/tr44/).
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedBinaryProperties.txt#L12
   */
  code_point_range: string;

  /**
   * Bidi_Mirrored property value listing UnicodeData.txt field 9.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedBinaryProperties.txt#L12
   */
  bidi_mirrored: "Y" | "N";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["code_point_range", "bidi_mirrored"];
