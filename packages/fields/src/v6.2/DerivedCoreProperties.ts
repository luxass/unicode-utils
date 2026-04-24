/**
 * Parsed row from `DerivedCoreProperties.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/DerivedCoreProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:52:57.459Z
 */
export interface DerivedCoreProperties {
  /**
   * Hexadecimal Unicode code point range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Presence indicates the character(s) have the derived Math property, generated from Sm + Other_Math.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  math: "Math";
}

export const DERIVED_CORE_PROPERTIES_FIELDS = ["code_point_range", "math"];
