/**
 * Parsed row from `DerivedAge.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 18
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:16:22.778Z
 */
export interface DerivedAge {
  /**
   * Unicode code point or range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_points: string;

  /**
   * Age property value indicating the Unicode version when the code point was first assigned.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  age: string;
}

export const DERIVED_AGE_FIELDS = ["code_points", "age"];
