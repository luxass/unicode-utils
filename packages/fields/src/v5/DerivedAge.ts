/**
 * Parsed row from `DerivedAge.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:30:10.919Z
 */
export interface DerivedAge {
  /**
   * Hexadecimal Unicode code point or contiguous range (e.g., '0041' or '0000..007F').
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Unicode version in which the code point(s) were first designated as assigned (e.g., '1.1', 'unassigned').
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  age: string;
}

export const DERIVED_AGE_FIELDS = ["code_point_range", "age"];
