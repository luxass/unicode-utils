/**
 * Parsed row from `CaseFolding.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/CaseFolding.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/CaseFolding.txt#L34
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/CaseFolding.txt#L36-L40
 *
 * @unicodeVersion 4.1
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:36.356Z
 */
export interface CaseFolding {
  /**
   * Unicode code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/CaseFolding.txt#L34
   */
  code: string;

  /**
   * Status of the case folding: C (common), F (full), S (simple), or T (special Turkic).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/CaseFolding.txt#L36-L40
   */
  status: "C" | "F" | "S" | "T";

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/CaseFolding.txt#L34
   */
  mapping: string;

  /**
   * Name of the character.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/CaseFolding.txt#L34
   */
  name: string;
}

export const CASE_FOLDING_FIELDS = ["code", "status", "mapping", "name"];
