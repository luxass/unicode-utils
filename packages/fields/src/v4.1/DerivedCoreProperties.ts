/**
 * Parsed row from `DerivedCoreProperties.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/DerivedCoreProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 4.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:30:35.494Z
 */
export interface DerivedCoreProperties {
  /**
   * Code point range in the form 'DDDD' or 'DDDD..DDDD'.
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
}

export const DERIVED_CORE_PROPERTIES_FIELDS = ["code_point_range", "math"];
