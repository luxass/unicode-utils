/**
 * Parsed row from `CaseFolding.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/CaseFolding.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/CaseFolding.txt#L36-L46
 *
 * @unicodeVersion 12
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:46:13.858Z
 */
export interface CaseFolding {
  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/CaseFolding.txt#L36
   */
  code: string;

  /**
   * Status field indicating the type of case folding: C (common), F (full), S (simple), T (special for Turkic).
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/CaseFolding.txt#L36-L46
   */
  status: "C" | "F" | "S" | "T";

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/CaseFolding.txt#L36
   */
  mapping: string;

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/CaseFolding.txt#L36
   */
  name: string;
}

export const CASE_FOLDING_FIELDS = ["code", "status", "mapping", "name"];
