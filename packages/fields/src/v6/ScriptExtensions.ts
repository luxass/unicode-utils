/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/ScriptExtensions.txt#L11
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:28:23.816Z
 */
export interface ScriptExtensions {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  code_point_range: string;

  /**
   * Space-delimited short script values for characters that belong to multiple scripts.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/ScriptExtensions.txt#L11
   */
  script_extensions: string;
}

export const SCRIPT_EXTENSIONS_FIELDS = ["code_point_range", "script_extensions"];
