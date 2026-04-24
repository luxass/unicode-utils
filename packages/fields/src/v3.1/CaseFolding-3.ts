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
 * @generated 2026-04-23T18:55:10.687Z
 */
export interface CaseFolding3 {
  /**
   * Unicode code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/CaseFolding-3.txt#L26
   */
  code: string;

  /**
   * Status of the case folding: C (common), F (full), S (simple), or I (special I).
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
   * Name of the character.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/CaseFolding-3.txt#L26
   */
  name: string;
}

export const CASE_FOLDING_3_FIELDS = ["code", "status", "mapping", "name"];
