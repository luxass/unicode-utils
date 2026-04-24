/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:32.557Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Unicode code point range or singleton.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Binary property value for Bidi_Mirrored listing UnicodeData.txt field 9.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property_value: "Y" | "N";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["code_point_range", "property_value"];
