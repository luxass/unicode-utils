/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/ScriptExtensions.txt#L10-L12
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/ScriptExtensions.txt#L27
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:33.638Z
 */
export interface ScriptExtensions {
  /**
   * Unicode code point range (e.g. 0000..10FFFF).
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/ScriptExtensions.txt#L27
   */
  code_point_range: string;

  /**
   * Set of one or more abbreviated Script property values.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/ScriptExtensions.txt#L10-L12
   */
  script_extensions: string[];
}

export const SCRIPT_EXTENSIONS_FIELDS = ["code_point_range", "script_extensions"];
