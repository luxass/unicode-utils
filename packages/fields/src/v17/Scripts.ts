/**
 * Parsed row from `Scripts.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/Scripts.txt#L18-L23
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:33.554Z
 */
export interface Scripts {
  /**
   * Code point range in the form <code>..<code> or single <code>.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  range: string;

  /**
   * Script property value; unlisted code points have default value Unknown (Zzzz).
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/Scripts.txt#L18-L23
   */
  script: "Zzzz" | string;
}

export const SCRIPTS_FIELDS = ["range", "script"];
