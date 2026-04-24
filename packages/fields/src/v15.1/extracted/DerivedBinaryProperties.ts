/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/extracted/DerivedBinaryProperties.txt#L12
 *
 * @unicodeVersion 15.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:16:17.171Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Code point range listing characters with Bidi_Mirrored=Y from UnicodeData.txt field 9.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/extracted/DerivedBinaryProperties.txt#L12
   */
  range: string;

  /**
   * Bidi_Mirrored property value (always Y for listed code points).
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/extracted/DerivedBinaryProperties.txt#L12
   */
  bidi_mirrored: "Y";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["range", "bidi_mirrored"];
