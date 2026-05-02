/**
 * Parsed row from `DerivedAge.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:41:21.544Z
 */
export interface DerivedAge {
  /**
   * Hexadecimal Unicode code point or range of code points (format 0000 or 0000..FFFF).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Version in which the code point was first assigned (e.g. V1_1), or Unassigned for unassigned code points.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  age: string;
}

export const DERIVED_AGE_FIELDS = ["code_point", "age"];
