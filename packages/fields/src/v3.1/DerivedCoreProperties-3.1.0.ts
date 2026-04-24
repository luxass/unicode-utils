/**
 * Parsed row from `DerivedCoreProperties-3.1.0.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/DerivedCoreProperties-3.1.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedCoreProperties-3.1.0.txt#L13-L14
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:11.818Z
 */
export interface DerivedCoreProperties310 {
  /**
   * Unicode code point or range for which the derived property applies.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Derived Property: Math, generated from Sm + Other_Math.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedCoreProperties-3.1.0.txt#L13-L14
   */
  math: "Y" | "N";
}

export const DERIVED_CORE_PROPERTIES_310_FIELDS = ["code_point_range", "math"];
