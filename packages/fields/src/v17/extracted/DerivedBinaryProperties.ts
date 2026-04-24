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
 * @confidence 0.50
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:15:58.508Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Code point or range where the Bidi_Mirrored property is true (Y).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * The binary property name indicating the property is Yes.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: "Bidi_Mirrored";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["code_point_range", "property"];
