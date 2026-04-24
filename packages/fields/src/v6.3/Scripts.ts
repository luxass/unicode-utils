/**
 * Parsed row from `Scripts.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/Scripts.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/Scripts.txt#L11-L14
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 6.3
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:45.311Z
 */
export interface Scripts {
  /**
   * Code point range in the standard abbreviated format.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  code_point_range: string;

  /**
   * Script property value; Unknown for code points not explicitly listed.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/Scripts.txt#L11-L14
   */
  script: "Zzzz" | string;
}

export const SCRIPTS_FIELDS = ["code_point_range", "script"];
