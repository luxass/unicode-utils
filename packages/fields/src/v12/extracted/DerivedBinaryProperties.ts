/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedBinaryProperties.txt#L12
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 12
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:47:22.413Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Unicode code point range (e.g. 0000..10FFFF).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Bidi_Mirrored property value listing characters from UnicodeData.txt field 9.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedBinaryProperties.txt#L12
   */
  property_value: "Y" | "N";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["code_point_range", "property_value"];
