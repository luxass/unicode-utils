/**
 * Parsed row from `Scripts.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:44:42.972Z
 */
export interface Scripts {
  /**
   * Code point range or single code point.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  range: string;

  /**
   * Script property value.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  script: string;
}

export const SCRIPTS_FIELDS = ["range", "script"];
