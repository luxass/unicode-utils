/**
 * Parsed row from `Scripts.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/Scripts.txt#L18-L21
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:23:48.309Z
 */
export interface Scripts {
  /**
   * Unicode code point or range explicitly listed for the Script property.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  code_point_range: string;

  /**
   * Script property value (Unknown for unlisted code points).
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/Scripts.txt#L18-L21
   */
  script: string;
}

export const SCRIPTS_FIELDS = ["code_point_range", "script"];
