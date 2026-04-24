/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 18
 * @fields 3
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:16:13.586Z
 */
export interface ScriptExtensions {
  /**
   * Unicode code point or range (e.g. 0000..10FFFF).
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  code_point_range: string;

  /**
   * Set of one or more abbreviated Script property values, alphabetically ordered.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  script_extensions: string[];

  /**
   * Optional comment field.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  comment: string;
}

export const SCRIPT_EXTENSIONS_FIELDS = ["code_point_range", "script_extensions", "comment"];
