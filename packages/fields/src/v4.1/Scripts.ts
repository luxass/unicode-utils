/**
 * Parsed row from `Scripts.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/Scripts.txt#L11-L14
 *
 * @unicodeVersion 4.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:30:54.129Z
 */
export interface Scripts {
  /**
   * Unicode code point or range explicitly listed for a Script value.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/Scripts.txt#L11-L14
   */
  code_point_range: string;

  /**
   * Script property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/Scripts.txt#L11-L14
   */
  script: string;
}

export const SCRIPTS_FIELDS = ["code_point_range", "script"];
