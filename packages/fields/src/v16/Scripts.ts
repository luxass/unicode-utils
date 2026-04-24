/**
 * Parsed row from `Scripts.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:02:55.147Z
 */
export interface Scripts {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  code_point: string;

  /**
   * Script property value.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  script: string;
}

export const SCRIPTS_FIELDS = ["code_point", "script"];
