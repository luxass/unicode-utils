/**
 * Parsed row from `Scripts-4.0.1.txt` (Unicode 4.0.1).
 *
 * @see https://unicode.org/Public/4.0-Update1/Scripts-4.0.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update1/Scripts-4.0.1.txt#L11-L14
 *
 * @unicodeVersion 4.0.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:53:24.579Z
 */
export interface Scripts401 {
  /**
   * Unicode code point or range explicitly listed for a Script value.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/Scripts-4.0.1.txt#L13-L14
   */
  code_point_range: string;

  /**
   * Script property value; unlisted code points have value Common (Zyyy).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/Scripts-4.0.1.txt#L11-L14
   */
  script: "Zyyy" | (string & {});
}

export const SCRIPTS_401_FIELDS = ["code_point_range", "script"];
