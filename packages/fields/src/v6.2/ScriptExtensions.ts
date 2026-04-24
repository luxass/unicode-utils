/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/ScriptExtensions.txt#L8-L10
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/ScriptExtensions.txt#L18
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/ScriptExtensions.txt#L22
 *
 * @unicodeVersion 6.2
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:44.586Z
 */
export interface ScriptExtensions {
  /**
   * @missing: 0000..10FFFF; <script>.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/ScriptExtensions.txt#L18
   */
  codepoint: string;

  /**
   * One or more Script property values indicating scripts commonly used with the code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/ScriptExtensions.txt#L8-L10
   */
  script_extensions: string[];

  /**
   * Name of the property: Script_Extensions.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/ScriptExtensions.txt#L22
   */
  property: string;
}

export const SCRIPT_EXTENSIONS_FIELDS = ["codepoint", "script_extensions", "property"];
