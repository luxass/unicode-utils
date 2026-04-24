/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 18
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:27.571Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Unicode code point range (first-last) or single code point (page-0000).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Bidi_Mirrored property value listing UnicodeData.txt field 9.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property_value: "Y" | "N";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["code_point", "property_value"];
