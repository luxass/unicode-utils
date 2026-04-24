/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:30:13.916Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Unicode code point or range where Bidi_Mirrored is true (Y).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Fixed property name for this section, indicating the binary property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property_value: "Bidi_Mirrored";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["code_point", "property_value"];
