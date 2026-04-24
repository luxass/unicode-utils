/**
 * Parsed row from `CaseFolding.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/CaseFolding.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/CaseFolding.txt#L36-L46
 *
 * @unicodeVersion 9
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:22:09.812Z
 */
export interface CaseFolding {
  /**
   * Unicode code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/CaseFolding.txt#L36
   */
  code: string;

  /**
   * Case folding status: C (common), F (full), S (simple), T (special).
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/CaseFolding.txt#L36-L46
   */
  status: "C" | "F" | "S" | "T";

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/CaseFolding.txt#L36
   */
  mapping: string;

  /**
   * Character name.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/CaseFolding.txt#L36
   */
  name: string;
}

export const CASE_FOLDING_FIELDS = ["code", "status", "mapping", "name"];
