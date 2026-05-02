/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/ScriptExtensions.txt#L10-L12
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/ScriptExtensions.txt#L28-L29
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:45:26.166Z
 */
export interface ScriptExtensions {
  /**
   * Set of one or more abbreviated Script property values for code points commonly used with more than one script.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/ScriptExtensions.txt#L10-L12
   */
  script_extensions: string;

  /**
   * List of code points associated with that Script_Extensions value, listed in code point order.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/ScriptExtensions.txt#L28-L29
   */
  code_points: string[];
}

export const SCRIPT_EXTENSIONS_FIELDS = ["script_extensions", "code_points"];
