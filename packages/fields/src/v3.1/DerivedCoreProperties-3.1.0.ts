/**
 * Parsed row from `DerivedCoreProperties-3.1.0.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/DerivedCoreProperties-3.1.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:37:33.651Z
 */
export interface DerivedCoreProperties310 {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Math derived property: generated from Sm + Other_Math.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  math: "Y" | "N";
}

export const DERIVED_CORE_PROPERTIES_310_FIELDS = ["code_point", "math"];
