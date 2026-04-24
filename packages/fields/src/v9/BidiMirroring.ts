/**
 * Parsed row from `BidiMirroring.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/BidiMirroring.txt#L26-L28
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:13.818Z
 */
export interface BidiMirroring {
  /**
   * Each mapping line contains two fields, separated by a semicolon (';').
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/BidiMirroring.txt#L26-L28
   */
  source: string;

  /**
   * Each mapping line contains two fields, separated by a semicolon (';').
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/BidiMirroring.txt#L26-L28
   */
  mirror: string;
}

export const BIDI_MIRRORING_FIELDS = ["source", "mirror"];
