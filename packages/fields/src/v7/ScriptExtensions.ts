/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/ScriptExtensions.txt#L15-L18
 *
 * @unicodeVersion 7
 * @fields 1
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:26:21.256Z
 */
export interface ScriptExtensions {
  /**
   * Set of one or more abbreviated Script property values.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/ScriptExtensions.txt#L15-L18
   */
  script_extensions: string;
}

export const SCRIPT_EXTENSIONS_FIELDS = ["script_extensions"];
