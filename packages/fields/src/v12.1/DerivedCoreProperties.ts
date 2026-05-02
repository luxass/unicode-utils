/**
 * Parsed row from `DerivedCoreProperties.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/DerivedCoreProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/DerivedCoreProperties.txt#L12-L13
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 12.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:45:28.126Z
 */
export interface DerivedCoreProperties {
  /**
   * Code point range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Derived Property: Math, generated from Sm + Other_Math.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/DerivedCoreProperties.txt#L12-L13
   */
  math: "Y" | "N";
}

export const DERIVED_CORE_PROPERTIES_FIELDS = ["code_point_range", "math"];
