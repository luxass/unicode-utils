/**
 * Parsed row from `ScriptExtensions.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/ScriptExtensions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/ScriptExtensions.txt#L18
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/ScriptExtensions.txt#L22
 *
 * @unicodeVersion 6.3
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:43.821Z
 */
export interface ScriptExtensions {
  /**
   * @missing: 0000..10FFFF; <script>.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/ScriptExtensions.txt#L18
   */
  codepoint: string;

  /**
   * Script_Extensions property value(s), each a Script property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/ScriptExtensions.txt#L22
   */
  script_extensions: string[];
}

export const SCRIPT_EXTENSIONS_FIELDS = ["codepoint", "script_extensions"];
