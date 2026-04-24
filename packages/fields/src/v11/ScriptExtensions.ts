/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/ScriptExtensions.txt#L19-L22
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/ScriptExtensions.txt#L28-L29
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:43.282Z
 */
export interface ScriptExtensions {
  /**
   * Unicode code point or range listed in code point order.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/ScriptExtensions.txt#L28-L29
   */
  code_point: string;

  /**
   * Set of one or more abbreviated Script property values, given in alphabetical order.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/ScriptExtensions.txt#L19-L22
   */
  script_extensions: string[];
}

export const SCRIPT_EXTENSIONS_FIELDS = ["code_point", "script_extensions"];
