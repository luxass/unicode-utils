/**
 * Parsed row from `Scripts.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/Scripts.txt#L11-L14
 *
 * @unicodeVersion 5.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:53:48.498Z
 */
export interface Scripts {
  /**
   * Code point or range explicitly listed for the Script property.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/Scripts.txt#L13
   */
  code_point_range: string;

  /**
   * Script property value; all code points not explicitly listed have the value Unknown (Zzzz).
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/Scripts.txt#L11-L14
   */
  script: "Unknown" | (string & {});
}

export const SCRIPTS_FIELDS = ["code_point_range", "script"];
