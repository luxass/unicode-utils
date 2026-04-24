/**
 * Parsed row from `DerivedAge.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:26:40.041Z
 */
export interface DerivedAge {
  /**
   * Unicode code point or range in hexadecimal format, e.g. '0020..007E' or '000D'.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Age property value, such as 'V1_1', indicating the Unicode version when the code point(s) were first assigned.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  age: string;
}

export const DERIVED_AGE_FIELDS = ["code_point_range", "age"];
