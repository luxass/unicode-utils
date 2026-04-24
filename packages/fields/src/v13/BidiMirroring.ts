/**
 * Parsed row from `BidiMirroring.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/BidiMirroring.txt#L26-L29
 *
 * @unicodeVersion 13
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:17:42.161Z
 */
export interface BidiMirroring {
  /**
   * Each mapping line contains two fields, separated by a semicolon (';').
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/BidiMirroring.txt#L26-L28
   */
  source_code_point: string;

  /**
   * Each mapping line contains two fields, separated by a semicolon (';').
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/BidiMirroring.txt#L26-L28
   */
  mirror_code_point: string;

  /**
   * A comment indicates where the characters are "BEST FIT" mirroring.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/BidiMirroring.txt#L29
   */
  comment: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_code_point", "mirror_code_point", "comment"];
