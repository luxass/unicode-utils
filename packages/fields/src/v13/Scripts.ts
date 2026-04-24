/**
 * Parsed row from `Scripts.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 13
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:20:06.995Z
 */
export interface Scripts {
  /**
   * Code point range (e.g. '0041' or '1F600..1F64F').
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  range: string;

  /**
   * Script property value.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  script: string;
}

export const SCRIPTS_FIELDS = ["range", "script"];
