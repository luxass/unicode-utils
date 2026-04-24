/**
 * Parsed row from `Scripts.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/Scripts.txt#L18
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:20:20.832Z
 */
export interface Scripts {
  /**
   * Unicode code point or range (first field).
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  code_point_range: string;

  /**
   * Script property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/Scripts.txt#L18
   */
  script: string;
}

export const SCRIPTS_FIELDS = ["code_point_range", "script"];
