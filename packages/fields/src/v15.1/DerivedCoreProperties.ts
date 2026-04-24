/**
 * Parsed row from `DerivedCoreProperties.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/DerivedCoreProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 15.1
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:15:46.711Z
 */
export interface DerivedCoreProperties {
  /**
   * Unicode code point range (e.g. 0041..0049).
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
   * Source of the Math property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  source: string;
}

export const DERIVED_CORE_PROPERTIES_FIELDS = ["code_point_range", "math", "source"];
