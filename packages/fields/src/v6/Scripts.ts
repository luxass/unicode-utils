/**
 * Parsed row from `Scripts.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:54:12.284Z
 */
export interface Scripts {
  /**
   * Code point range or single code point to which the Script property applies.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  range: string;

  /**
   * Script property value (defaults to Unknown; Zzzz).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  script: string;
}

export const SCRIPTS_FIELDS = ["range", "script"];
