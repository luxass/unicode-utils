/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/ScriptExtensions.txt#L28-L29
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/ScriptExtensions.txt#L38
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:56.786Z
 */
export interface ScriptExtensions {
  /**
   * Code points associated with the Script_Extensions value, listed in code point order.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/ScriptExtensions.txt#L28-L29
   */
  codepoint_range: string;

  /**
   * Property: Script_Extensions.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/ScriptExtensions.txt#L38
   */
  script_extensions: string;
}

export const SCRIPT_EXTENSIONS_FIELDS = ["codepoint_range", "script_extensions"];
