/**
 * Parsed row from `DerivedCoreProperties.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/DerivedCoreProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:23.780Z
 */
export interface DerivedCoreProperties {
  /**
   * Unicode code point range (e.g. 0030..0039).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Derived Math property: characters used in mathematical notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  math: "Y" | "N";
}

export const DERIVED_CORE_PROPERTIES_FIELDS = ["code_point_range", "math"];
