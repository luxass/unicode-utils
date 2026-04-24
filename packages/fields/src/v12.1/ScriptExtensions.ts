/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/ScriptExtensions.txt#L38
 *
 * @unicodeVersion 12.1
 * @fields 1
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:42.035Z
 */
export interface ScriptExtensions {
  /**
   * Property: Script_Extensions.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/ScriptExtensions.txt#L38
   */
  script_extensions: string[];
}

export const SCRIPT_EXTENSIONS_FIELDS = ["script_extensions"];
