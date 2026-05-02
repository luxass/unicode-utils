/**
 * Parsed row from `Scripts.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/Scripts.txt#L18
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:42:31.255Z
 */
export interface Scripts {
  /**
   * Code point range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  range: string;

  /**
   * Script property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/Scripts.txt#L18
   */
  script: string;
}

export const SCRIPTS_FIELDS = ["range", "script"];
