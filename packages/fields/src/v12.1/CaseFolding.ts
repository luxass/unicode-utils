/**
 * Parsed row from `CaseFolding.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/CaseFolding.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/CaseFolding.txt#L36
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/CaseFolding.txt#L38-L46
 *
 * @unicodeVersion 12.1
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:09.696Z
 */
export interface CaseFolding {
  /**
   * Unicode code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/CaseFolding.txt#L36
   */
  code: string;

  /**
   * Status field (C: common case folding, F: full case folding, S: simple case folding, T: special Turkic case).
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/CaseFolding.txt#L38-L46
   */
  status: "C" | "F" | "S" | "T";

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/CaseFolding.txt#L36
   */
  mapping: string;

  /**
   * Character name.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/CaseFolding.txt#L36
   */
  name: string;
}

export const CASE_FOLDING_FIELDS = ["code", "status", "mapping", "name"];
