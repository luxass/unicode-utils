/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedBinaryProperties.txt#L11
 *
 * @unicodeVersion 5.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:52:18.488Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Unicode code point or range listing characters with Bidi_Mirrored property value 'Y'.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedBinaryProperties.txt#L11
   */
  code_point_range: string;

  /**
   * Bidi_Mirrored property value (Y for mirrored glyphs).
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedBinaryProperties.txt#L11
   */
  bidi_mirrored: "Y";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["code_point_range", "bidi_mirrored"];
