/**
 * Parsed row from `Scripts.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/Scripts.txt#L18-L21
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/Scripts.txt#L23
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:34.534Z
 */
export interface Scripts {
  /**
   * @missing: 0000..10FFFF; Unknown.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/Scripts.txt#L23
   */
  code_point_range: string;

  /**
   * Script property value; Unknown (Zzzz) for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/Scripts.txt#L18-L21
   */
  script: "Zzzz" | string;
}

export const SCRIPTS_FIELDS = ["code_point_range", "script"];
