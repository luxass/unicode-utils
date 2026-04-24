/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedBinaryProperties.txt#L11
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:22.505Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Bidi_Mirrored (listing UnicodeData.txt, field 9: see UAX 44: http://www.unicode.org/reports/tr44/).
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedBinaryProperties.txt#L11
   */
  codepoints: string;

  /**
   * Bidi_Mirrored binary property value listing UnicodeData.txt field 9.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedBinaryProperties.txt#L11
   */
  bidi_mirrored: "Y" | "N";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["codepoints", "bidi_mirrored"];
