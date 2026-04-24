/**
 * Parsed row from `Scripts.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/Scripts.txt#L18-L23
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T03:54:29.931Z
 */
export interface Scripts {
  /**
   * Code point range in the standard UCD range notation.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  range: string;

  /**
   * Script property value; all code points not explicitly listed have the value Unknown (Zzzz).
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/Scripts.txt#L18-L23
   */
  script: string;
}

export const SCRIPTS_FIELDS = ["range", "script"];
