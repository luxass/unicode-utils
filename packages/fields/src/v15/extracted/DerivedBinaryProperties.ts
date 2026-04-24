/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:19:54.239Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Unicode code point or range (in hexadecimal notation) for which the Bidi_Mirrored property is true.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Binary property name indicating the characters listed have this property set to Yes.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: "Bidi_Mirrored";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["code_point_range", "property"];
