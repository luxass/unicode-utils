/**
 * Parsed row from `Scripts-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/Scripts-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 3.2
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:58:16.975Z
 */
export interface Scripts320 {
  /**
   * Code point range or single code point for the script.
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

export const SCRIPTS_320_FIELDS = ["range", "script"];
