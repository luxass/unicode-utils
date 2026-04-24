/**
 * Parsed row from `DerivedCoreProperties.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/DerivedCoreProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/DerivedCoreProperties.txt#L12-L13
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 13
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:18:49.920Z
 */
export interface DerivedCoreProperties {
  /**
   * Code point or range (e.g. 0041..0049).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Derived Math property: Yes if character is in Sm + Other_Math.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/DerivedCoreProperties.txt#L12-L13
   */
  math: "Y" | "N";
}

export const DERIVED_CORE_PROPERTIES_FIELDS = ["code_point_range", "math"];
