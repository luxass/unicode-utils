/**
 * Parsed row from `DerivedCoreProperties.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/DerivedCoreProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/DerivedCoreProperties.txt#L12-L13
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:41:00.924Z
 */
export interface DerivedCoreProperties {
  /**
   * Range of Unicode code points (e.g. 0041 or 0041..0041).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Derived Math property: Yes if character is a math symbol (generated from Sm + Other_Math).
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/DerivedCoreProperties.txt#L12-L13
   */
  math: "Y" | "N";
}

export const DERIVED_CORE_PROPERTIES_FIELDS = ["code_point_range", "math"];
