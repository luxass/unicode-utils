/**
 * Parsed row from `BidiMirroring.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/BidiMirroring.txt#L27-L30
 *
 * @unicodeVersion 17
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:39:05.320Z
 */
export interface BidiMirroring {
  /**
   * Code point that has the Bidi_Mirrored=Yes property, represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/BidiMirroring.txt#L27-L29
   */
  source_codepoint: string;

  /**
   * Code point that typically has a glyph that is the mirror image of the source code point's glyph, represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/BidiMirroring.txt#L27-L29
   */
  mirror_codepoint: string;

  /**
   * Comment indicating where the characters are BEST FIT mirroring.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/BidiMirroring.txt#L30
   */
  comment: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_codepoint", "mirror_codepoint", "comment"];
