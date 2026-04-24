/**
 * Parsed row from `CaseFolding.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/CaseFolding.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/CaseFolding.txt#L35
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/CaseFolding.txt#L37-L42
 *
 * @unicodeVersion 6.1
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:26:54.917Z
 */
export interface CaseFolding {
  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/CaseFolding.txt#L35
   */
  code: string;

  /**
   * Status field: C (common), F (full), S (simple), T (special Turkic).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/CaseFolding.txt#L37-L42
   */
  status: "C" | "F" | "S" | "T";

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/CaseFolding.txt#L35
   */
  mapping: string;

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/CaseFolding.txt#L35
   */
  name: string;
}

export const CASE_FOLDING_FIELDS = ["code", "status", "mapping", "name"];
