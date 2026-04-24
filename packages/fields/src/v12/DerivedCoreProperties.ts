/**
 * Parsed row from `DerivedCoreProperties.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/DerivedCoreProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 12
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:22:16.870Z
 */
export interface DerivedCoreProperties {
  /**
   * Unicode code point range (e.g. 0041..0049).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Math derived property value: Y if character is a mathematical symbol, N otherwise.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  value: "Y" | "N";
}

export const DERIVED_CORE_PROPERTIES_FIELDS = ["code_point_range", "value"];
