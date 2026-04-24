/**
 * Parsed row from `Scripts.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/Scripts.txt#L18-L23
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:09.988Z
 */
export interface Scripts {
  /**
   * Code point range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  range: string;

  /**
   * Script property value; Unknown (Zzzz) is the default for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/Scripts.txt#L18-L23
   */
  script: "Zzzz" | string;
}

export const SCRIPTS_FIELDS = ["range", "script"];
