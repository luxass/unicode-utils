/**
 * Parsed row from `BidiMirroring.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/BidiMirroring.txt#L24-L27
 *
 * @unicodeVersion 6.3
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:59.887Z
 */
export interface BidiMirroring {
  /**
   * Each mapping line contains two fields, separated by a semicolon (';').
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/BidiMirroring.txt#L24-L26
   */
  source_codepoint: string;

  /**
   * Each mapping line contains two fields, separated by a semicolon (';').
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/BidiMirroring.txt#L24-L26
   */
  mirror_codepoint: string;

  /**
   * Comment indicating where the characters are BEST FIT mirroring.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/BidiMirroring.txt#L27
   */
  comment: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_codepoint", "mirror_codepoint", "comment"];
