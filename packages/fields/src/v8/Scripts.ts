/**
 * Parsed row from `Scripts.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/Scripts.txt#L17-L22
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:52.432Z
 */
export interface Scripts {
  /**
   * Code point range in the standard UCD format.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  code_point_range: string;

  /**
   * Script property value (Unknown for unlisted code points).
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/Scripts.txt#L17-L22
   */
  script: string;
}

export const SCRIPTS_FIELDS = ["code_point_range", "script"];
