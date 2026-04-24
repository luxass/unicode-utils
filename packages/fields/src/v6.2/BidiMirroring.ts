/**
 * Parsed row from `BidiMirroring.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/BidiMirroring.txt#L24-L27
 *
 * @unicodeVersion 6.2
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:51.513Z
 */
export interface BidiMirroring {
  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/BidiMirroring.txt#L24-L26
   */
  source_codepoint: string;

  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits that is the mirror image.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/BidiMirroring.txt#L24-L26
   */
  mirror_codepoint: string;

  /**
   * Comment indicating where the characters are BEST FIT mirroring.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/BidiMirroring.txt#L27
   */
  comment: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_codepoint", "mirror_codepoint", "comment"];
