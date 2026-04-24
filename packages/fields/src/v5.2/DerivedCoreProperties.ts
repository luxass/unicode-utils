/**
 * Parsed row from `DerivedCoreProperties.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/DerivedCoreProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5.2
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:33:14.389Z
 */
export interface DerivedCoreProperties {
  /**
   * Code point range (e.g. '0041' or '0041..0041').
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Derived Math property: Y if character is in Sm + Other_Math, else N.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  math: "Y" | "N";

  /**
   * Source of the Math value (e.g. 'Sm', 'Other_Math').
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  source: string;
}

export const DERIVED_CORE_PROPERTIES_FIELDS = ["code_point_range", "math", "source"];
