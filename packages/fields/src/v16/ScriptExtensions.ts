/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:32.663Z
 */
export interface ScriptExtensions {
  /**
   * Code point range in the standard UCD format (e.g. '0000..10FFFF').
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  code_point_range: string;

  /**
   * Set of one or more abbreviated Script property values, listed alphabetically for stability.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  script_extensions: string[];
}

export const SCRIPT_EXTENSIONS_FIELDS = ["code_point_range", "script_extensions"];
