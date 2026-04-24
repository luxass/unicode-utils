/**
 * Parsed row from `Scripts.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:34:06.081Z
 */
export interface Scripts {
  /**
   * Unicode code point or range in standard UCD property file format.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Script property value; Unknown (Zzzz) for all code points not explicitly listed.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  script: string;
}

export const SCRIPTS_FIELDS = ["code_point_range", "script"];
