/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedBinaryProperties.txt#L12
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 13
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:19:22.382Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Code point range listing characters with the property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  range: string;

  /**
   * Bidi_Mirrored property value (listing UnicodeData.txt, field 9).
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedBinaryProperties.txt#L12
   */
  property_value: "Y" | "N";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["range", "property_value"];
