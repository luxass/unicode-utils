/**
 * Parsed row from `Scripts-4.0.1.txt` (Unicode 4.0.1).
 *
 * @see https://unicode.org/Public/4.0-Update1/Scripts-4.0.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 4.0.1
 * @fields 2
 * @confidence 0.50
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:36:02.597Z
 */
export interface Scripts401 {
  /**
   * Unicode code point or range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Script property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  script: string;
}

export const SCRIPTS_401_FIELDS = ["code_point", "script"];
