/**
 * Parsed row from `Scripts.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/Scripts.txt#L11-L14
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:27.139Z
 */
export interface Scripts {
  /**
   * Code point range or singleton in the standard UCD field #1 format.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Script property value (Unknown for unlisted code points).
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/Scripts.txt#L11-L14
   */
  script: string;
}

export const SCRIPTS_FIELDS = ["code_point_range", "script"];
