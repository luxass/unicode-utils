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
 * @generated 2026-04-23T18:55:04.001Z
 */
export interface CaseFolding2 {
  /**
   * Unicode code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update1/CaseFolding-2.txt#L23
   */
  code: string;

  /**
   * L (Lowercase) or E (exception).
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
