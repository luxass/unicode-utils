/**
 * Parsed row from `Scripts.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/Scripts.txt#L18-L23
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:23.796Z
 */
export interface Scripts {
  /**
   * Code point range or single code point in standard Unicode notation.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  code_point_range: string;

  /**
   * Script property value; Unknown (Zzzz) is the default for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/Scripts.txt#L18-L23
   */
  script: "Zzzz" | string;
}

export const SCRIPTS_FIELDS = ["code_point_range", "script"];
