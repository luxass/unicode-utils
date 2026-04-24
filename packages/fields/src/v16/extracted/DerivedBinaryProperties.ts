/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedBinaryProperties.txt#L12
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:01:03.939Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Unicode code point range (e.g. 0041 or 0041..0041).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Bidi_Mirrored property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedBinaryProperties.txt#L12
   */
  bidi_mirrored: "Y" | "N";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["code_point_range", "bidi_mirrored"];
