/**
 * Parsed row from `CaseFolding.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/CaseFolding.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/CaseFolding.txt#L35-L53
 *
 * @unicodeVersion 5.2
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:50:26.361Z
 */
export interface CaseFolding {
  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/CaseFolding.txt#L35
   */
  code: string;

  /**
   * Case folding status: C (common), F (full), S (simple), T (special Turkic).
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/CaseFolding.txt#L35-L53
   */
  status: "C" | "F" | "S" | "T";

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/CaseFolding.txt#L35
   */
  mapping: string;

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/CaseFolding.txt#L35
   */
  name: string;
}

export const CASE_FOLDING_FIELDS = ["code", "status", "mapping", "name"];
