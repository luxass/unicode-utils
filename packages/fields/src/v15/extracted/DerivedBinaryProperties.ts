/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedBinaryProperties.txt#L12
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:44:48.730Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Unicode code point range (first..last or single code point).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Bidi_Mirrored property value: Y if the character is mirrored in bidi text, N otherwise.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedBinaryProperties.txt#L12
   */
  property_value: "Y" | "N";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["code_point_range", "property_value"];
