/**
 * Parsed row from `Scripts.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 12
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:47:48.404Z
 */
export interface Scripts {
  /**
   * Unicode code point or range as documented for property files in UAX #44.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Script property value per UAX #24.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  script: string;
}

export const SCRIPTS_FIELDS = ["code_point_range", "script"];
