/**
 * Parsed row from `Scripts.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:20:12.065Z
 */
export interface Scripts {
  /**
   * Unicode code point or range in standard UCD range notation.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  code_point_range: string;

  /**
   * Script property value.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  script: string;
}

export const SCRIPTS_FIELDS = ["code_point_range", "script"];
