/**
 * Parsed row from `Scripts.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:45:27.965Z
 */
export interface Scripts {
  /**
   * Unicode code point or range to which a Script property value is assigned.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  code_point_range: string;

  /**
   * Assigned Script property value.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  script: string;
}

export const SCRIPTS_FIELDS = ["code_point_range", "script"];
