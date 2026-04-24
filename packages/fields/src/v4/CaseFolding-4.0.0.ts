/**
 * Parsed row from `CaseFolding-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/CaseFolding-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/CaseFolding-4.0.0.txt#L29-L47
 *
 * @unicodeVersion 4
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:45.404Z
 */
export interface CaseFolding400 {
  /**
   * Unicode code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/CaseFolding-4.0.0.txt#L29
   */
  code: string;

  /**
   * Status of the case folding: C (common), F (full), S (simple), T (special Turkic).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/CaseFolding-4.0.0.txt#L29-L47
   */
  status: "C" | "F" | "S" | "T";

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/CaseFolding-4.0.0.txt#L29
   */
  mapping: string;

  /**
   * Name of the character.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/CaseFolding-4.0.0.txt#L29
   */
  name: string;
}

export const CASE_FOLDING_400_FIELDS = ["code", "status", "mapping", "name"];
