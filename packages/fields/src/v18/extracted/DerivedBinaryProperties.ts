/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 18
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:16:55.266Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * One or more Unicode code points or a range of code points in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Name of the binary property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property_name: string;

  /**
   * Value of the binary property (always Y for listed entries).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  value: "Y";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = [
  "code_point_range",
  "property_name",
  "value",
];
