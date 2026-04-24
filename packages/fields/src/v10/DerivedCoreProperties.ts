/**
 * Parsed row from `DerivedCoreProperties.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/DerivedCoreProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/DerivedCoreProperties.txt#L12-L13
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:21:04.272Z
 */
export interface DerivedCoreProperties {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Derived Math property: Y if character is in Sm + Other_Math, otherwise N.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/DerivedCoreProperties.txt#L12-L13
   */
  math: "Y" | "N";
}

export const DERIVED_CORE_PROPERTIES_FIELDS = ["code_point_range", "math"];
