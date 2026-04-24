/**
 * Parsed row from `DerivedCoreProperties.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/DerivedCoreProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 12.1
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:19:20.032Z
 */
export interface DerivedCoreProperties {
  /**
   * Code point range in the form <code>..<code> or single <code>.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Derived Property: Math, generated from Sm + Other_Math.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  math: "Y" | "N";

  /**
   * Source properties or files from which the Math value was derived.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  source: string;
}

export const DERIVED_CORE_PROPERTIES_FIELDS = ["code_point_range", "math", "source"];
