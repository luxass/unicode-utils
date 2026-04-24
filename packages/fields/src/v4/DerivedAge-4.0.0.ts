/**
 * Parsed row from `DerivedAge-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/DerivedAge-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 4
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:54:16.558Z
 */
export interface DerivedAge400 {
  /**
   * Unicode code point or range of code points designated in Unicode.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Unicode version (Age) in which the code points were first designated.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  age: string;
}

export const DERIVED_AGE_400_FIELDS = ["codepoint_range", "age"];
