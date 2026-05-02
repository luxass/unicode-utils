/**
 * Parsed row from `CaseFolding.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/CaseFolding.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/CaseFolding.txt#L34-L52
 *
 * @unicodeVersion 4.1
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:55:36.240Z
 */
export interface CaseFolding {
  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/CaseFolding.txt#L34
   */
  code: string;

  /**
   * Case folding status: C (common), F (full), S (simple), or T (special Turkic).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/CaseFolding.txt#L34-L52
   */
  status: "C" | "F" | "S" | "T";

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/CaseFolding.txt#L34
   */
  mapping: string;

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/CaseFolding.txt#L34
   */
  name: string;
}

export const CASE_FOLDING_FIELDS = ["code", "status", "mapping", "name"];
