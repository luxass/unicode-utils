/**
 * Parsed row from `Scripts.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/Scripts.txt#L11-L14
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 4.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:41.066Z
 */
export interface Scripts {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  code_point: string;

  /**
   * Script property value (Common for unlisted code points).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/Scripts.txt#L11-L14
   */
  script: string;
}

export const SCRIPTS_FIELDS = ["code_point", "script"];
