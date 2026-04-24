/**
 * Parsed row from `DerivedAge.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:52:56.897Z
 */
export interface DerivedAge {
  /**
   * Code point or range to which the Age value applies, in hexadecimal notation (e.g. 0000..10FFFF).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Unicode version when the code point(s) were first designated as assigned, formatted as V<major>_<minor> (e.g. V1_1). Unassigned code points have value NA.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  age: string;
}

export const DERIVED_AGE_FIELDS = ["codepoint_range", "age"];
