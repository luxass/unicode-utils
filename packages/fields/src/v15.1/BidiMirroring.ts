/**
 * Parsed row from `BidiMirroring.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/BidiMirroring.txt#L26-L29
 *
 * @unicodeVersion 15.1
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:22.785Z
 */
export interface BidiMirroring {
  /**
   * Each mapping line contains two fields, separated by a semicolon (';').
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/BidiMirroring.txt#L26-L28
   */
  source_code_point: string;

  /**
   * Each mapping line contains two fields, separated by a semicolon (';').
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/BidiMirroring.txt#L26-L28
   */
  target_code_point: string;

  /**
   * Comment indicating BEST FIT mirroring where applicable.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/BidiMirroring.txt#L29
   */
  comment: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_code_point", "target_code_point", "comment"];
