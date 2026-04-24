/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedBinaryProperties.txt#L12
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:32.307Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Unicode code point range for characters with the Bidi_Mirrored property.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedBinaryProperties.txt#L12
   */
  code_point_range: string;

  /**
   * Bidi_Mirrored binary property value listing from UnicodeData.txt field 9.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedBinaryProperties.txt#L12
   */
  property_value: "Y" | "N";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["code_point_range", "property_value"];
