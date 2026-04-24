/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/ScriptExtensions.txt#L18-L21
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/ScriptExtensions.txt#L27-L28
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:26:02.041Z
 */
export interface ScriptExtensions {
  /**
   * Set of one or more abbreviated Script property values.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/ScriptExtensions.txt#L18-L21
   */
  script_extensions: string[];

  /**
   * List of code points associated with that Script_Extensions value, listed in code point order.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/ScriptExtensions.txt#L27-L28
   */
  code_points: string;
}

export const SCRIPT_EXTENSIONS_FIELDS = ["script_extensions", "code_points"];
