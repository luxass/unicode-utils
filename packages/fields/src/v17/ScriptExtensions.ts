/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/ScriptExtensions.txt#L10-L26
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:16:00.656Z
 */
export interface ScriptExtensions {
  /**
   * Unicode code point or range in standard UCD format.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  code_point: string;

  /**
   * Set of one or more abbreviated Script property values, alphabetically ordered.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/ScriptExtensions.txt#L10-L26
   */
  script_extensions: string[];
}

export const SCRIPT_EXTENSIONS_FIELDS = ["code_point", "script_extensions"];
