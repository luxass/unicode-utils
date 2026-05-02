/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/ScriptExtensions.txt#L19-L22
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/ScriptExtensions.txt#L24
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:42:23.392Z
 */
export interface ScriptExtensions {
  /**
   * Unicode code point or range explicitly listed for Script_Extensions.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/ScriptExtensions.txt#L24
   */
  code_point_range: string;

  /**
   * Set of one or more abbreviated Script property values, given in alphabetical order.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/ScriptExtensions.txt#L19-L22
   */
  script_extensions: string[];
}

export const SCRIPT_EXTENSIONS_FIELDS = ["code_point_range", "script_extensions"];
