/**
 * Parsed row from `Scripts.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/Scripts.txt#L18-L23
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:58.084Z
 */
export interface Scripts {
  /**
   * Code point range or single code point.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  range: string;

  /**
   * Script property value. All code points not explicitly listed have the value Unknown (Zzzz).
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/Scripts.txt#L18-L23
   */
  script: string;
}

export const SCRIPTS_FIELDS = ["range", "script"];
