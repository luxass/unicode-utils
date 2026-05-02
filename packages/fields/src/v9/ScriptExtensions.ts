/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/ScriptExtensions.txt#L19-L22
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/ScriptExtensions.txt#L28-L29
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:49:18.194Z
 */
export interface ScriptExtensions {
  /**
   * Code point or range of code points associated with that Script_Extensions value, listed in code point order.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/ScriptExtensions.txt#L28-L29
   */
  code_point_range: string;

  /**
   * Set of one or more abbreviated Script property values. The ordering of the values in that set is not material, but for stability in presentation it is given here as alphabetical.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/ScriptExtensions.txt#L19-L22
   */
  script_extensions: string[];
}

export const SCRIPT_EXTENSIONS_FIELDS = ["code_point_range", "script_extensions"];
