/**
 * Parsed row from `Scripts.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:49:43.182Z
 */
export interface Scripts {
  /**
   * Unicode code point or range for the Script property.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  range: string;

  /**
   * Assigned Script property value.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  script: string;
}

export const SCRIPTS_FIELDS = ["range", "script"];
