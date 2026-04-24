/**
 * Parsed row from `Scripts.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 12
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:23:59.038Z
 */
export interface Scripts {
  /**
   * Unicode code point or range (e.g. 0000..10FFFF).
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

export const SCRIPTS_FIELDS = ["code_point_range", "script"];
