/**
 * Parsed row from `Scripts.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/Scripts.txt#L11-L14
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:26:22.531Z
 */
export interface Scripts {
  /**
   * Code point or range explicitly listed for the Script property.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/Scripts.txt#L11-L14
   */
  code_point_range: string;

  /**
   * Script property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/Scripts.txt#L11-L14
   */
  script: string;
}

export const SCRIPTS_FIELDS = ["code_point_range", "script"];
