/**
 * Parsed row from `DerivedCoreProperties.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/DerivedCoreProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/DerivedCoreProperties.txt#L11-L12
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:51:27.803Z
 */
export interface DerivedCoreProperties {
  /**
   * Code point range in the standard UCD format (e.g. '002B..002B').
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Derived Property: Math. Generated from: Sm + Other_Math.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/DerivedCoreProperties.txt#L11-L12
   */
  math: "Y" | "N";
}

export const DERIVED_CORE_PROPERTIES_FIELDS = ["code_point_range", "math"];
