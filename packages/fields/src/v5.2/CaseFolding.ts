/**
 * Parsed row from `CaseFolding.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/CaseFolding.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/CaseFolding.txt#L35
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/CaseFolding.txt#L37-L42
 *
 * @unicodeVersion 5.2
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:33:04.356Z
 */
export interface CaseFolding {
  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/CaseFolding.txt#L35
   */
  code: string;

  /**
   * Status of the case folding: C (common), F (full), S (simple), T (special Turkic).
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/CaseFolding.txt#L37-L42
   */
  status: "C" | "F" | "S" | "T";

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/CaseFolding.txt#L35
   */
  mapping: string;

  /**
   * Name or comment for the code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/CaseFolding.txt#L35
   */
  name: string;
}

export const CASE_FOLDING_FIELDS = ["code", "status", "mapping", "name"];
