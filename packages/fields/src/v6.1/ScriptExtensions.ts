/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/ScriptExtensions.txt#L23
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:55:36.915Z
 */
export interface ScriptExtensions {
  /**
   * Unicode code point or range explicitly listed for Script_Extensions.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Property: Script_Extensions.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/ScriptExtensions.txt#L23
   */
  script_extensions: string[];
}

export const SCRIPT_EXTENSIONS_FIELDS = ["code_point_range", "script_extensions"];
