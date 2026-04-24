/**
 * Parsed row from `CaseFolding.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/CaseFolding.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/CaseFolding.txt#L36
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/CaseFolding.txt#L38-L43
 *
 * @unicodeVersion 9
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:10.808Z
 */
export interface CaseFolding {
  /**
   * Unicode code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/CaseFolding.txt#L36
   */
  code: string;

  /**
   * Status of the case folding: C (common), F (full), S (simple), or T (special Turkic).
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/CaseFolding.txt#L38-L43
   */
  status: "C" | "F" | "S" | "T";

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/CaseFolding.txt#L36
   */
  mapping: string;

  /**
   * Name of the code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/CaseFolding.txt#L36
   */
  name: string;
}

export const CASE_FOLDING_FIELDS = ["code", "status", "mapping", "name"];
