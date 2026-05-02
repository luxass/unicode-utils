/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedBinaryProperties.txt#L12
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:40:15.488Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Bidi_Mirrored (listing UnicodeData.txt, field 9: see UAX 44: https://www.unicode.org/reports/tr44/).
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedBinaryProperties.txt#L12
   */
  code_point_range: string;

  /**
   * Bidi_Mirrored property listing from UnicodeData.txt field 9.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedBinaryProperties.txt#L12
   */
  bidi_mirrored: "Y" | "N";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["code_point_range", "bidi_mirrored"];
