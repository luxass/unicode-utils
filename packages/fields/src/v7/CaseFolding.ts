/**
 * Parsed row from `CaseFolding.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/CaseFolding.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/CaseFolding.txt#L35-L44
 *
 * @unicodeVersion 7
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:49:42.430Z
 */
export interface CaseFolding {
  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/CaseFolding.txt#L35
   */
  code: string;

  /**
   * Status of the case folding: C for common, F for full, S for simple, T for special Turkic.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/CaseFolding.txt#L35-L44
   */
  status: "C" | "F" | "S" | "T";

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/CaseFolding.txt#L35
   */
  mapping: string;

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/CaseFolding.txt#L35
   */
  name: string;
}

export const CASE_FOLDING_FIELDS = ["code", "status", "mapping", "name"];
