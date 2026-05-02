/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:54:12.041Z
 */
export interface ScriptExtensions {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  code_point: string;

  /**
   * Space-separated list of one or more Script property values.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  script_extensions: string[];
}

export const SCRIPT_EXTENSIONS_FIELDS = ["code_point", "script_extensions"];
