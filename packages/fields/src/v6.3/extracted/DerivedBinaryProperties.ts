/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedBinaryProperties.txt#L11
 *
 * @unicodeVersion 6.3
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:11.766Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Unicode code point range or single code point for Bidi_Mirrored property.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedBinaryProperties.txt#L11
   */
  code_point_range: string;

  /**
   * Bidi_Mirrored binary property listing characters from UnicodeData.txt field 9.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedBinaryProperties.txt#L11
   */
  bidi_mirrored: "Y" | "N";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["code_point_range", "bidi_mirrored"];
