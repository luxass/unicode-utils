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
 * @generated 2026-04-28T04:50:21.966Z
 */
export interface ScriptExtensions {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  code_point: string;

  /**
   * Set of one or more Script property values.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  script_extensions: string[];
}

export const SCRIPT_EXTENSIONS_FIELDS = ["code_point", "script_extensions"];
