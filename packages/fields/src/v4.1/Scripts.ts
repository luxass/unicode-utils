/**
 * Parsed row from `Scripts.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 4.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:57:28.867Z
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
