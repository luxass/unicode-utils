/**
 * Parsed row from `Scripts.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/Scripts.txt#L11-L14
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:26:41.973Z
 */
export interface Scripts {
  /**
   * Unicode code point range in the standard format.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Script property value; Unknown (Zzzz) for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/Scripts.txt#L11-L14
   */
  script: "Zzzz" | "Unknown" | string;
}

export const SCRIPTS_FIELDS = ["code_point_range", "script"];
