/**
 * Parsed row from `CaseFolding-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/CaseFolding-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/CaseFolding-3.2.0.txt#L27-L36
 *
 * @unicodeVersion 3.2
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:30:57.040Z
 */
export interface CaseFolding320 {
  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/CaseFolding-3.2.0.txt#L27
   */
  code: string;

  /**
   * Status of the case folding: C (common), F (full), S (simple), T (special).
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/CaseFolding-3.2.0.txt#L27-L36
   */
  status: "C" | "F" | "S" | "T";

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/CaseFolding-3.2.0.txt#L27
   */
  mapping: string;

  /**
   * Character name.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/CaseFolding-3.2.0.txt#L27
   */
  name: string;
}

export const CASE_FOLDING_320_FIELDS = ["code", "status", "mapping", "name"];
