/**
 * Parsed row from `BidiMirroring.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/BidiMirroring.txt#L26-L29
 *
 * @unicodeVersion 10
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:45.101Z
 */
export interface BidiMirroring {
  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits that requires a mirrored glyph.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/BidiMirroring.txt#L26-L28
   */
  source_codepoint: string;

  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits that has the mirror image glyph.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/BidiMirroring.txt#L26-L28
   */
  mirrored_codepoint: string;

  /**
   * Comment indicating where the characters are BEST FIT mirroring.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/BidiMirroring.txt#L29
   */
  comment: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_codepoint", "mirrored_codepoint", "comment"];
