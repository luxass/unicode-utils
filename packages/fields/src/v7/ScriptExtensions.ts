/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/ScriptExtensions.txt#L15-L18
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/ScriptExtensions.txt#L24-L25
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:51:31.529Z
 */
export interface ScriptExtensions {
  /**
   * Set of one or more abbreviated Script property values, given in alphabetical order.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/ScriptExtensions.txt#L15-L18
   */
  script_extensions_value: string;

  /**
   * List of code points associated with that Script_Extensions value, listed in code point order.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/ScriptExtensions.txt#L24-L25
   */
  code_points: string[];
}

export const SCRIPT_EXTENSIONS_FIELDS = ["script_extensions_value", "code_points"];
