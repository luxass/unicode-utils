/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 6.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:27:45.847Z
 */
export interface ScriptExtensions {
  /**
   * Unicode code point or range (e.g. 061C..061E).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Space-separated list of Script property values.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  script_extensions: string;
}

export const SCRIPT_EXTENSIONS_FIELDS = ["code_point_range", "script_extensions"];
