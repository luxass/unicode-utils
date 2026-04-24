/**
 * Parsed row from `DerivedAge.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:27:48.225Z
 */
export interface DerivedAge {
  /**
   * Unicode code point or range in hexadecimal.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Value of the Age property indicating the Unicode version when the code point was first assigned.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  age: string;
}

export const DERIVED_AGE_FIELDS = ["code_point_range", "age"];
