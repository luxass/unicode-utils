/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedBinaryProperties.txt#L11
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:50:32.402Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Code point range (first..last or single code point).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Bidi_Mirrored property value listing characters from UnicodeData.txt field 9.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedBinaryProperties.txt#L11
   */
  bidi_mirrored: "Y" | "N";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["code_point_range", "bidi_mirrored"];
