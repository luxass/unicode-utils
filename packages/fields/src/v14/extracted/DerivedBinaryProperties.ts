/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedBinaryProperties.txt#L12
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:44:55.783Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Code point range or single code point in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Bidi_Mirrored property value listing characters with mirrored glyphs from UnicodeData.txt field 9.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedBinaryProperties.txt#L12
   */
  bidi_mirrored: "Y" | "N";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["code_point_range", "bidi_mirrored"];
