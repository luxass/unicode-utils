/**
 * Parsed row from `CaseFolding.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/CaseFolding.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/CaseFolding.txt#L36-L46
 *
 * @unicodeVersion 16
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:39:16.713Z
 */
export interface CaseFolding {
  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/CaseFolding.txt#L36
   */
  code: string;

  /**
   * Case folding status: C (common), F (full), S (simple), or T (special Turkic).
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/CaseFolding.txt#L36-L46
   */
  status: "C" | "F" | "S" | "T";

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/CaseFolding.txt#L36
   */
  mapping: string;

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/CaseFolding.txt#L36
   */
  name: string;
}

export const CASE_FOLDING_FIELDS = ["code", "status", "mapping", "name"];
