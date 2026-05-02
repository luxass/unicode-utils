/**
 * Parsed row from `Scripts.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/Scripts.txt#L18-L21
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:47:44.949Z
 */
export interface Scripts {
  /**
   * Code point range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  range: string;

  /**
   * Script property value (Unknown for unlisted code points).
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/Scripts.txt#L18-L21
   */
  script: string;
}

export const SCRIPTS_FIELDS = ["range", "script"];
