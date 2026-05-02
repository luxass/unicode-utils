/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/ScriptExtensions.txt#L19-L22
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/ScriptExtensions.txt#L28-L29
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:45:15.004Z
 */
export interface ScriptExtensions {
  /**
   * Code point or range associated with the Script_Extensions value, listed in code point order.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/ScriptExtensions.txt#L28-L29
   */
  code_point_range: string;

  /**
   * Set of one or more abbreviated Script property values.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/ScriptExtensions.txt#L19-L22
   */
  script_extensions: string[];
}

export const SCRIPT_EXTENSIONS_FIELDS = ["code_point_range", "script_extensions"];
