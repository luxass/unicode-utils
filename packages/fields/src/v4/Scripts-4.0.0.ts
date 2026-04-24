/**
 * Parsed row from `Scripts-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/Scripts-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/Scripts-4.0.0.txt#L11-L14
 * - https://ucdjs.dev/reports/tr24/
 *
 * @unicodeVersion 4
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:18.934Z
 */
export interface Scripts400 {
  /**
   * Code point or range explicitly listed with a Script property value.
   *
   * @source https://ucdjs.dev/reports/tr24/
   */
  code_point: string;

  /**
   * Script property value; all code points not explicitly listed have the property value COMMON.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/Scripts-4.0.0.txt#L11-L14
   */
  script: string;
}

export const SCRIPTS_400_FIELDS = ["code_point", "script"];
