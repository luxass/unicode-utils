/**
 * Parsed row from `CaseFolding-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/CaseFolding-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/CaseFolding-3.2.0.txt#L27
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/CaseFolding-3.2.0.txt#L29-L35
 *
 * @unicodeVersion 3.2
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:58:01.440Z
 */
export interface CaseFolding320 {
  /**
   * Unicode code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/CaseFolding-3.2.0.txt#L27
   */
  code: string;

  /**
   * Status field: C (common case folding), F (full case folding), S (simple case folding), T (special case for uppercase I and dotted uppercase I).
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/CaseFolding-3.2.0.txt#L29-L35
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
