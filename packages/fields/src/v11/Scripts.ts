/**
 * Parsed row from `Scripts.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/Scripts.txt#L18-L21
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:48:05.685Z
 */
export interface Scripts {
  /**
   * Property: Script.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/Scripts.txt#L18
   */
  code_point: string;

  /**
   * Script property value; all code points not explicitly listed have the value Unknown (Zzzz).
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/Scripts.txt#L18-L21
   */
  script: "Unknown" | (string & {});
}

export const SCRIPTS_FIELDS = ["code_point", "script"];
