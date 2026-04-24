/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/ScriptExtensions.txt#L28-L29
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/ScriptExtensions.txt#L38
 *
 * @unicodeVersion 15.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:16:43.376Z
 */
export interface ScriptExtensions {
  /**
   * Property: Script_Extensions.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/ScriptExtensions.txt#L38
   */
  script_extensions: string;

  /**
   * List of code points associated with that Script_Extensions value, listed in code point order.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/ScriptExtensions.txt#L28-L29
   */
  code_points: string;
}

export const SCRIPT_EXTENSIONS_FIELDS = ["script_extensions", "code_points"];
