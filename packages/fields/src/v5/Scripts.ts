/**
 * Parsed row from `Scripts.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/Scripts.txt#L11-L14
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:30:04.097Z
 */
export interface Scripts {
  /**
   * Unicode code point range (e.g. 0000..10FFFF).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Script property value; Unknown for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/Scripts.txt#L11-L14
   */
  script: string;
}

export const SCRIPTS_FIELDS = ["code_point_range", "script"];
