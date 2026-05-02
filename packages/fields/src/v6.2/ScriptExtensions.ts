/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/ScriptExtensions.txt#L22
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:52:06.346Z
 */
export interface ScriptExtensions {
  /**
   * Unicode code point or range in standard UCD format.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Property: Script_Extensions.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/ScriptExtensions.txt#L22
   */
  script_extensions: string[];
}

export const SCRIPT_EXTENSIONS_FIELDS = ["code_point", "script_extensions"];
