/**
 * Parsed row from `CaseFolding-4.txt` (Unicode 3.1.1).
 *
 * @see https://unicode.org/Public/3.1-Update1/CaseFolding-4.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update1/CaseFolding-4.txt#L26-L34
 *
 * @unicodeVersion 3.1.1
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:31:51.934Z
 */
export interface CaseFolding4 {
  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/CaseFolding-4.txt#L26
   */
  code: string;

  /**
   * Status of the case folding: C (common), F (full), S (simple), or I (special).
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/CaseFolding-4.txt#L26-L34
   */
  status: "C" | "F" | "S" | "I";

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/CaseFolding-4.txt#L26
   */
  mapping: string;

  /**
   * Character name.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/CaseFolding-4.txt#L26
   */
  name: string;
}

export const CASE_FOLDING_4_FIELDS = ["code", "status", "mapping", "name"];
