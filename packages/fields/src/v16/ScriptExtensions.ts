/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/ScriptExtensions.txt#L27
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T03:54:49.984Z
 */
export interface ScriptExtensions {
  /**
   * Unicode code point range (e.g. 0000..10FFFF).
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/ScriptExtensions.txt#L27
   */
  code_point_range: string;

  /**
   * @missing: 0000..10FFFF; <script>.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/ScriptExtensions.txt#L27
   */
  script_extensions: string;
}

export const SCRIPT_EXTENSIONS_FIELDS = ["code_point_range", "script_extensions"];
