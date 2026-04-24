/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T03:56:04.927Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Hexadecimal Unicode code point or range (e.g. '0020..007E' or '0041') for characters having the property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Binary property name indicating characters with Bidi_Mirrored=Y as listed from UnicodeData.txt field 9.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: "Bidi_Mirrored";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["code_point_range", "property"];
