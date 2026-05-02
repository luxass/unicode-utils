/**
 * Parsed row from `Scripts.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:52:25.239Z
 */
export interface Scripts {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  code_point: string;

  /**
   * Script property value per UAX #24.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  script: string;
}

export const SCRIPTS_FIELDS = ["code_point", "script"];
