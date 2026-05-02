/**
 * Parsed row from `Scripts.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/Scripts.txt#L11-L14
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:56:39.376Z
 */
export interface Scripts {
  /**
   * Code point range in the standard UCD range notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Script property value; Unknown (Zzzz) for all code points not explicitly listed.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/Scripts.txt#L11-L14
   */
  script: "Unknown" | (string & {});
}

export const SCRIPTS_FIELDS = ["code_point_range", "script"];
