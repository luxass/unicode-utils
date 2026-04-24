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
 * @generated 2026-04-23T18:54:46.747Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Bidi_Mirrored (listing UnicodeData.txt, field 9: see UCD.html).
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedBinaryProperties.txt#L11
   */
  code_point_range: string;

  /**
   * Bidi_Mirrored property listing from UnicodeData.txt field 9.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/extracted/DerivedBinaryProperties.txt#L11
   */
  bidi_mirrored: "Y" | "N";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["code_point_range", "bidi_mirrored"];
