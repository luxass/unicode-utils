/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 12
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:24:09.501Z
 */
export interface ScriptExtensions {
  /**
   * Unicode code point or range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  code_point: string;

  /**
   * Set of one or more abbreviated Script property values, comma-separated and sorted alphabetically.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  script_extensions: string;
}

export const SCRIPT_EXTENSIONS_FIELDS = ["code_point", "script_extensions"];
