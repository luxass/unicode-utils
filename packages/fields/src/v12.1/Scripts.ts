/**
 * Parsed row from `Scripts.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 12.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:46.125Z
 */
export interface Scripts {
  /**
   * Code point range or single code point in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  code_point_range: string;

  /**
   * Script property value (Unknown for unlisted code points).
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  script: string;
}

export const SCRIPTS_FIELDS = ["code_point_range", "script"];
