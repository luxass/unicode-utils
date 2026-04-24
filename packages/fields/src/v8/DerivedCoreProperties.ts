/**
 * Parsed row from `DerivedCoreProperties.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/DerivedCoreProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 8
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:09.042Z
 */
export interface DerivedCoreProperties {
  /**
   * Unicode code point range in the standard abbreviated format.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Derived Property: Math, generated from Sm + Other_Math.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  math: "Y" | "N";

  /**
   * Optional comment field.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  comment: string;
}

export const DERIVED_CORE_PROPERTIES_FIELDS = ["codepoint_range", "math", "comment"];
