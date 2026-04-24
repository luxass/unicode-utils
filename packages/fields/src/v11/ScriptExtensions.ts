/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:24:34.038Z
 */
export interface ScriptExtensions {
  /**
   * Unicode code point or range in hexadecimal.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  code_point_range: string;

  /**
   * Comma-separated list of one or more Script property values in alphabetical order.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  script_extensions: string;
}

export const SCRIPT_EXTENSIONS_FIELDS = ["code_point_range", "script_extensions"];
