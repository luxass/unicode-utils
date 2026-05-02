/**
 * Parsed row from `CaseFolding.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/CaseFolding.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/CaseFolding.txt#L36
 *
 * @unicodeVersion 17
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:39:15.823Z
 */
export interface CaseFolding {
  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/CaseFolding.txt#L36
   */
  code: string;

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/CaseFolding.txt#L36
   */
  status: "C" | "F" | "S" | "T";

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/CaseFolding.txt#L36
   */
  mapping: string;

  /**
   * Name or comment for the code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/CaseFolding.txt#L36
   */
  name: string;
}

export const CASE_FOLDING_FIELDS = ["code", "status", "mapping", "name"];
