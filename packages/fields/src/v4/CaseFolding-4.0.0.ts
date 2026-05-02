/**
 * Parsed row from `CaseFolding-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/CaseFolding-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/CaseFolding-4.0.0.txt#L29-L39
 *
 * @unicodeVersion 4
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:54:28.627Z
 */
export interface CaseFolding400 {
  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/CaseFolding-4.0.0.txt#L29
   */
  code: string;

  /**
   * Status of the case folding mapping: C (common), F (full), S (simple), or T (special Turkic).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/CaseFolding-4.0.0.txt#L29-L39
   */
  status: "C" | "F" | "S" | "T";

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/CaseFolding-4.0.0.txt#L29
   */
  mapping: string;

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/CaseFolding-4.0.0.txt#L29
   */
  name: string;
}

export const CASE_FOLDING_400_FIELDS = ["code", "status", "mapping", "name"];
