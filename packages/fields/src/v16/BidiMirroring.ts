/**
 * Parsed row from `BidiMirroring.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/BidiMirroring.txt#L27-L30
 *
 * @unicodeVersion 16
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:39:17.911Z
 */
export interface BidiMirroring {
  /**
   * Each mapping line contains two fields, separated by a semicolon (';').
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/BidiMirroring.txt#L27-L29
   */
  source_codepoint: string;

  /**
   * Each mapping line contains two fields, separated by a semicolon (';').
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/BidiMirroring.txt#L27-L29
   */
  mirroring_codepoint: string;

  /**
   * Comment indicating where the characters are BEST FIT mirroring.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/BidiMirroring.txt#L30
   */
  comment: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_codepoint", "mirroring_codepoint", "comment"];
