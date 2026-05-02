/**
 * Parsed row from `DerivedAge-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/DerivedAge-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:58:32.257Z
 */
export interface DerivedAge320 {
  /**
   * Unicode code point or range in hexadecimal notation, using range notation if applicable.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * The first Unicode version in which at least one code point in that range was designated (e.g., 1.1, 2.0).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  age: string;
}

export const DERIVED_AGE_320_FIELDS = ["code_point_range", "age"];
