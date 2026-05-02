/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/ScriptExtensions.txt#L38-L42
 *
 * @unicodeVersion 13
 * @fields 1
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:45:42.937Z
 */
export interface ScriptExtensions {
  /**
   * Property: Script_Extensions ================================================ Script_Extensions=Beng.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/ScriptExtensions.txt#L38-L42
   */
  script_extensions: "Beng" | (string & {});
}

export const SCRIPT_EXTENSIONS_FIELDS = ["script_extensions"];
