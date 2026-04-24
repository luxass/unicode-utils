/**
 * Parsed row from `Scripts-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/Scripts-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/Scripts-4.0.0.txt#L11-L14
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 4
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:30:41.285Z
 */
export interface Scripts400 {
  /**
   * Unicode code point range or singleton.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  range: string;

  /**
   * Script property value (Common for unlisted code points).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/Scripts-4.0.0.txt#L11-L14
   */
  script: string;
}

export const SCRIPTS_400_FIELDS = ["range", "script"];
