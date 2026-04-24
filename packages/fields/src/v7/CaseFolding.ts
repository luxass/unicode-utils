/**
 * Parsed row from `CaseFolding.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/CaseFolding.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/CaseFolding.txt#L35-L53
 *
 * @unicodeVersion 7
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:01.019Z
 */
export interface CaseFolding {
  /**
   * Unicode code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/CaseFolding.txt#L35
   */
  code: string;

  /**
   * Status field indicating the type of case folding (C: common, F: full, S: simple, T: special Turkic).
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/CaseFolding.txt#L35-L53
   */
  status: "C" | "F" | "S" | "T";

  /**
   * <code>; <status>; <mapping>; <name>.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/CaseFolding.txt#L35
   */
  mapping: string;

  /**
   * Name or comment for the code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/CaseFolding.txt#L35
   */
  name: string;
}

export const CASE_FOLDING_FIELDS = ["code", "status", "mapping", "name"];
