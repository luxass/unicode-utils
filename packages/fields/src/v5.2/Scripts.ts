/**
 * Parsed row from `Scripts.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/Scripts.txt#L11
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/Scripts.txt#L13-L14
 *
 * @unicodeVersion 5.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:11.129Z
 */
export interface Scripts {
  /**
   * All code points not explicitly listed for Script have the value Unknown (Zzzz).
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/Scripts.txt#L13-L14
   */
  code_point_range: string;

  /**
   * Property: Script.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/Scripts.txt#L11
   */
  script: "Zzzz" | string;
}

export const SCRIPTS_FIELDS = ["code_point_range", "script"];
