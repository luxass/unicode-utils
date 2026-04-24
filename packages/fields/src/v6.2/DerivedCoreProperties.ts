/**
 * Parsed row from `DerivedCoreProperties.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/DerivedCoreProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/DerivedCoreProperties.txt#L11-L12
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:25:17.601Z
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
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/DerivedCoreProperties.txt#L11-L12
   */
  math: "Y" | "N";
}

export const DERIVED_CORE_PROPERTIES_FIELDS = ["code_point_range", "math"];
