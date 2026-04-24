/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/ScriptExtensions.txt#L28-L29
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 13
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:19:14.500Z
 */
export interface ScriptExtensions {
  /**
   * Set of one or more abbreviated Script property values.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  script_extensions: string;

  /**
   * List of code points associated with that Script_Extensions value, listed in code point order.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/ScriptExtensions.txt#L28-L29
   */
  code_points: string;
}

export const SCRIPT_EXTENSIONS_FIELDS = ["script_extensions", "code_points"];
