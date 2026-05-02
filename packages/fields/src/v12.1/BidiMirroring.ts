/**
 * Parsed row from `BidiMirroring.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/BidiMirroring.txt#L26-L29
 *
 * @unicodeVersion 12.1
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:45:04.303Z
 */
export interface BidiMirroring {
  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits that has Bidi_Mirrored=Yes.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/BidiMirroring.txt#L26-L28
   */
  source_code_point: string;

  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits that typically has a glyph that is the mirror image of the source code point's glyph.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/BidiMirroring.txt#L26-L28
   */
  mirror_code_point: string;

  /**
   * Comment indicating where the characters are BEST FIT mirroring.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/BidiMirroring.txt#L29
   */
  comment: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_code_point", "mirror_code_point", "comment"];
