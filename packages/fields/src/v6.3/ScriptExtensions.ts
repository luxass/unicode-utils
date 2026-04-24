/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 6.3
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:32:07.352Z
 */
export interface ScriptExtensions {
  /**
   * Unicode code point or range listed explicitly for Script_Extensions.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * One or more Script property values for characters commonly used with more than one script.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  script_extensions: string[];
}

export const SCRIPT_EXTENSIONS_FIELDS = ["code_point_range", "script_extensions"];
