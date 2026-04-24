/**
 * Parsed row from `CaseFolding.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/CaseFolding.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/CaseFolding.txt#L35
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/CaseFolding.txt#L37-L41
 *
 * @unicodeVersion 6.2
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:50.989Z
 */
export interface CaseFolding {
  /**
   * Unicode code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/CaseFolding.txt#L35
   */
  code: string;

  /**
   * Status of the case folding: C (common), F (full), S (simple), T (special Turkic).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/CaseFolding.txt#L37-L41
   */
  status: "C" | "F" | "S" | "T";

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/CaseFolding.txt#L35
   */
  mapping: string;

  /**
   * Name of the code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/CaseFolding.txt#L35
   */
  name: string;
}

export const CASE_FOLDING_FIELDS = ["code", "status", "mapping", "name"];
