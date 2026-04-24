/**
 * Parsed row from `CaseFolding.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/CaseFolding.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/CaseFolding.txt#L35
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/CaseFolding.txt#L37-L43
 *
 * @unicodeVersion 6.3
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:30:59.105Z
 */
export interface CaseFolding {
  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/CaseFolding.txt#L35
   */
  code: string;

  /**
   * Status field indicating the type of case folding: C (common), F (full), S (simple), T (special Turkic).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/CaseFolding.txt#L37-L43
   */
  status: "C" | "F" | "S" | "T";

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/CaseFolding.txt#L35
   */
  mapping: string;

  /**
   * Unicode character name.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/CaseFolding.txt#L35
   */
  name: string;
}

export const CASE_FOLDING_FIELDS = ["code", "status", "mapping", "name"];
