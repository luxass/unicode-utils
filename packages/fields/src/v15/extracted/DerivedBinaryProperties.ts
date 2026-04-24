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
 * @generated 2026-04-23T18:49:25.100Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Unicode code point range or single code point listing those with Bidi_Mirrored Yes.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Derived binary property name.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: "Bidi_Mirrored";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["codepoint_range", "property"];
