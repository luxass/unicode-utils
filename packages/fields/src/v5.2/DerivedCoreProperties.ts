/**
 * Parsed row from `DerivedCoreProperties.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/DerivedCoreProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:42.997Z
 */
export interface DerivedCoreProperties {
  /**
   * Unicode code point range in the standard abbreviated format.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Derived Math property: characters that belong to the Math category (Sm + Other_Math).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  math: "Y" | "N";
}

export const DERIVED_CORE_PROPERTIES_FIELDS = ["codepoint_range", "math"];
