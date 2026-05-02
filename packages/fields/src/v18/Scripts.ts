/**
 * Parsed row from `Scripts.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 18
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:43:06.634Z
 */
export interface Scripts {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  range: string;

  /**
   * Script property value per UAX #24.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  script: string;
}

export const SCRIPTS_FIELDS = ["range", "script"];
