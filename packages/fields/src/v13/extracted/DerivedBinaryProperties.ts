/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 13
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:06.588Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Unicode code point range (e.g. '0020..007E') documented in UAX #44 for binary property files.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Binary property value (Yes or No) for Bidi_Mirrored as documented in UAX #44.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property_value: "Y" | "N";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["codepoint_range", "property_value"];
