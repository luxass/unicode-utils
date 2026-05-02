/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:56:55.146Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Hexadecimal code point or range (e.g. '0041..005A') for characters with Bidi_Mirrored=Y.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * The binary property name.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: "Bidi_Mirrored";

  /**
   * The property value (always 'Y' in this file).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  value: "Y";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["codepoint_range", "property", "value"];
