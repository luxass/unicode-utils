/**
 * Parsed row from `CaseFolding-2.txt` (Unicode 3.0.1).
 *
 * @see https://unicode.org/Public/3.0-Update1/CaseFolding-2.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.0-Update1/CaseFolding-2.txt#L23-L27
 *
 * @unicodeVersion 3.0.1
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:55:13.106Z
 */
export interface CaseFolding2 {
  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update1/CaseFolding-2.txt#L23
   */
  code: string;

  /**
   * L (for Lowercase) if the case mapping matches the standard 1-1 lowercase mapping; E (for exception) if it does not.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update1/CaseFolding-2.txt#L23-L27
   */
  status: "L" | "E";

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update1/CaseFolding-2.txt#L23
   */
  mapping: string;

  /**
   * Character name.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update1/CaseFolding-2.txt#L23
   */
  name: string;
}

export const CASE_FOLDING_2_FIELDS = ["code", "status", "mapping", "name"];
