/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/ScriptExtensions.txt#L10-L12
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/ScriptExtensions.txt#L28-L29
 *
 * @unicodeVersion 12.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:20:49.668Z
 */
export interface ScriptExtensions {
  /**
   * Set of one or more abbreviated Script property values.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/ScriptExtensions.txt#L10-L12
   */
  script_extensions: string;

  /**
   * List of code points associated with that Script_Extensions value, listed in code point order.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/ScriptExtensions.txt#L28-L29
   */
  code_points: string[];
}

export const SCRIPT_EXTENSIONS_FIELDS = ["script_extensions", "code_points"];
