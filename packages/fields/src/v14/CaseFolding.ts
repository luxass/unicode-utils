/**
 * Parsed row from `CaseFolding.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/CaseFolding.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/CaseFolding.txt#L36
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/CaseFolding.txt#L38-L46
 *
 * @unicodeVersion 14
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:11.607Z
 */
export interface CaseFolding {
  /**
   * Unicode code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/CaseFolding.txt#L36
   */
  code: string;

  /**
   * Status field: C (common), F (full), S (simple), T (special Turkic).
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/CaseFolding.txt#L38-L46
   */
  status: "C" | "F" | "S" | "T";

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/CaseFolding.txt#L36
   */
  mapping: string;

  /**
   * Character name.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/CaseFolding.txt#L36
   */
  name: string;
}

export const CASE_FOLDING_FIELDS = ["code", "status", "mapping", "name"];
