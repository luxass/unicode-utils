/**
 * Parsed row from `Scripts-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/Scripts-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 4
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:55:04.386Z
 */
export interface Scripts400 {
  /**
   * Unicode code point or range of code points explicitly listed in this file.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  code_point_range: string;

  /**
   * Script property value.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  script: string;
}

export const SCRIPTS_400_FIELDS = ["code_point_range", "script"];
