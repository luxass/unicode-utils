/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 6.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:26:08.902Z
 */
export interface ScriptExtensions {
  /**
   * Unicode code point or range in standard UCD format.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  code_point: string;

  /**
   * One or more Script property values indicating scripts commonly used with the code point.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  script_extensions: string[];
}

export const SCRIPT_EXTENSIONS_FIELDS = ["code_point", "script_extensions"];
