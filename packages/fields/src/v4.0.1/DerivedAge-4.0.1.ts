/**
 * Parsed row from `DerivedAge-4.0.1.txt` (Unicode 4.0.1).
 *
 * @see https://unicode.org/Public/4.0-Update1/DerivedAge-4.0.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 4.0.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:35:43.571Z
 */
export interface DerivedAge401 {
  /**
   * Range of code points in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Age property value: Unicode version number when the code points were first assigned.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  age: string;
}

export const DERIVED_AGE_401_FIELDS = ["codepoint_range", "age"];
