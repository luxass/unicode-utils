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
 * @generated 2026-04-23T18:48:22.146Z
 */
export interface BidiMirroring {
  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/BidiMirroring.txt#L27-L29
   */
  source: string;

  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/BidiMirroring.txt#L27-L29
   */
  target: string;

  /**
   * Comment indicating where the characters are BEST FIT mirroring.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/BidiMirroring.txt#L30
   */
  comment: string;
}

export const BIDI_MIRRORING_FIELDS = ["source", "target", "comment"];
