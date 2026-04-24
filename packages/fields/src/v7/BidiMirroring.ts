/**
 * Parsed row from `BidiMirroring.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/BidiMirroring.txt#L24-L27
 *
 * @unicodeVersion 7
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:24:44.940Z
 */
export interface BidiMirroring {
  /**
   * Source code point for which Bidi_Mirrored=Yes, represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/BidiMirroring.txt#L24-L26
   */
  source_code_point: string;

  /**
   * Target code point that typically has a glyph that is the mirror image of the source character's glyph, represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/BidiMirroring.txt#L24-L26
   */
  mirror_code_point: string;

  /**
   * Comment indicating where the characters are BEST FIT mirroring.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/BidiMirroring.txt#L27
   */
  comment: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_code_point", "mirror_code_point", "comment"];
