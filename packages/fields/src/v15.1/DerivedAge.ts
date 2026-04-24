/**
 * Parsed row from `DerivedAge.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 15.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:49:14.317Z
 */
export interface DerivedAge {
  /**
   * Hexadecimal code point or range (e.g. 0000..10FFFF).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Age property value indicating the Unicode version when the code point(s) were first assigned.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  age: string;
}

export const DERIVED_AGE_FIELDS = ["code_point_range", "age"];
