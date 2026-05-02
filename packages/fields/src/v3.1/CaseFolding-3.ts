/**
 * Parsed row from `CaseFolding-3.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/CaseFolding-3.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update/CaseFolding-3.txt#L26-L34
 *
 * @unicodeVersion 3.1
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:53:58.738Z
 */
export interface CaseFolding3 {
  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/CaseFolding-3.txt#L26
   */
  code: string;

  /**
   * Status of the case folding mapping: C (common), F (full), S (simple), or I (special for dotted/dotless I).
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/CaseFolding-3.txt#L26-L34
   */
  status: "C" | "F" | "S" | "I";

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/CaseFolding-3.txt#L26
   */
  mapping: string;

  /**
   * Character name.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/CaseFolding-3.txt#L26
   */
  name: string;
}

export const CASE_FOLDING_3_FIELDS = ["code", "status", "mapping", "name"];
