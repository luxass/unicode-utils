/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/ScriptExtensions.txt#L28-L29
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/ScriptExtensions.txt#L38
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:23:34.411Z
 */
export interface ScriptExtensions {
  /**
   * Property: Script_Extensions.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/ScriptExtensions.txt#L38
   */
  script_extensions: string;

  /**
   * List of code points associated with that Script_Extensions value, listed in code point order.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/ScriptExtensions.txt#L28-L29
   */
  code_points: string[];
}

export const SCRIPT_EXTENSIONS_FIELDS = ["script_extensions", "code_points"];
