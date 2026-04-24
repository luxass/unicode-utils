/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:51:16.171Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * First field: code point or range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Second field: name of the binary property (value Yes) for the listed code points.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  binary_property: string;
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["code_point_range", "binary_property"];
