/**
 * Parsed row from `DerivedCoreProperties.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/DerivedCoreProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:15:29.423Z
 */
export interface DerivedCoreProperties {
  /**
   * Code point range (e.g. '0041' or '0041..0041').
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  range: string;

  /**
   * Derived Math property: Y if character is in Sm + Other_Math, else N.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  math: "Y" | "N";
}

export const DERIVED_CORE_PROPERTIES_FIELDS = ["range", "math"];
