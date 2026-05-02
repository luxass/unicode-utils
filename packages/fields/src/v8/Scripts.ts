/**
 * Parsed row from `Scripts.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/Scripts.txt#L17-L20
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:52:25.089Z
 */
export interface Scripts {
  /**
   * Unicode code point or range explicitly listed for Script property.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/Scripts.txt#L17-L20
   */
  code_point: string;

  /**
   * Script property value; all code points not explicitly listed have the value Unknown (Zzzz).
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/Scripts.txt#L17-L20
   */
  script: "Unknown" | (string & {});
}

export const SCRIPTS_FIELDS = ["code_point", "script"];
