/**
 * Parsed row from `Scripts.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 5
 * @fields 4
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:38.082Z
 */
export interface Scripts {
  /**
   * Unicode code point or range in standard UCD format.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  code_point: string;

  /**
   * Script property value; Unknown for unlisted code points.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  script: "Zzzz" | string;

  /**
   * Optional comment (e.g. @missing directive).
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  comment: string;

  /**
   * Reference to source of assignment.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  source_ref: string;
}

export const SCRIPTS_FIELDS = ["code_point", "script", "comment", "source_ref"];
