/**
 * Parsed row from `DerivedAge.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:49:00.179Z
 */
export interface DerivedAge {
  /**
   * Hexadecimal Unicode code point or range to which the Age value applies.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Age property value indicating the first Unicode version the code point(s) were assigned, per UAX #44.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  age: string;
}

export const DERIVED_AGE_FIELDS = ["code_point_range", "age"];
