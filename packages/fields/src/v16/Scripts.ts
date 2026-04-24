/**
 * Parsed row from `Scripts.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:29.558Z
 */
export interface Scripts {
  /**
   * Unicode code point range or single code point.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  code_point_range: string;

  /**
   * Script property value; Unknown (Zzzz) for unlisted code points.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  script: "Zzzz" | string;
}

export const SCRIPTS_FIELDS = ["code_point_range", "script"];
