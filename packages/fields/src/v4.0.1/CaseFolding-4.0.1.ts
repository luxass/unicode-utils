/**
 * Parsed row from `CaseFolding-4.0.1.txt` (Unicode 4.0.1).
 *
 * @see https://unicode.org/Public/4.0-Update1/CaseFolding-4.0.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update1/CaseFolding-4.0.1.txt#L33-L43
 *
 * @unicodeVersion 4.0.1
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:34:50.025Z
 */
export interface CaseFolding401 {
  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/CaseFolding-4.0.1.txt#L33
   */
  code: string;

  /**
   * Status of the case folding: C (common), F (full), S (simple), T (special).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/CaseFolding-4.0.1.txt#L33-L43
   */
  status: "C" | "F" | "S" | "T";

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/CaseFolding-4.0.1.txt#L33
   */
  mapping: string;

  /**
   * Character name.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/CaseFolding-4.0.1.txt#L33
   */
  name: string;
}

export const CASE_FOLDING_401_FIELDS = ["code", "status", "mapping", "name"];
