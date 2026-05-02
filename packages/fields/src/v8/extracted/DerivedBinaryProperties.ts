/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 8
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:52:28.734Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Unicode code point or range in hexadecimal (e.g. 0021..0023 or 0021).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Name of the derived binary property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property_name: string;

  /**
   * Binary value: Y or N.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  value: "Y" | "N";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["codepoint_range", "property_name", "value"];
