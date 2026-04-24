/**
 * Parsed row from `CaseFolding.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/CaseFolding.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/CaseFolding.txt#L36
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/CaseFolding.txt#L38-L44
 *
 * @unicodeVersion 10
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:41.373Z
 */
export interface CaseFolding {
  /**
   * Unicode code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/CaseFolding.txt#L36
   */
  code: string;

  /**
   * Status field indicating the type of case folding: C (common), F (full), S (simple), T (special Turkic).
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/CaseFolding.txt#L38-L44
   */
  status: "C" | "F" | "S" | "T";

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/CaseFolding.txt#L36
   */
  mapping: string;

  /**
   * The character name.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/CaseFolding.txt#L36
   */
  name: string;
}

export const CASE_FOLDING_FIELDS = ["code", "status", "mapping", "name"];
