/**
 * Parsed row from `CaseFolding.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/CaseFolding.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/CaseFolding.txt#L34-L52
 *
 * @unicodeVersion 5
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:56:12.862Z
 */
export interface CaseFolding {
  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/CaseFolding.txt#L34
   */
  code: string;

  /**
   * Status field indicating the type of case folding: C (common), F (full), S (simple), T (special for Turkic).
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/CaseFolding.txt#L34-L52
   */
  status: "C" | "F" | "S" | "T";

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/CaseFolding.txt#L34
   */
  mapping: string;

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/CaseFolding.txt#L34
   */
  name: string;
}

export const CASE_FOLDING_FIELDS = ["code", "status", "mapping", "name"];
