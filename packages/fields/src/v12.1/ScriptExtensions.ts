/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/ScriptExtensions.txt#L28-L29
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/ScriptExtensions.txt#L38
 *
 * @unicodeVersion 12.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:46:01.610Z
 */
export interface ScriptExtensions {
  /**
   * Code points associated with the Script_Extensions value, listed in code point order.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/ScriptExtensions.txt#L28-L29
   */
  code_point_range: string;

  /**
   * Property: Script_Extensions.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/ScriptExtensions.txt#L38
   */
  script_extensions: string[];
}

export const SCRIPT_EXTENSIONS_FIELDS = ["code_point_range", "script_extensions"];
