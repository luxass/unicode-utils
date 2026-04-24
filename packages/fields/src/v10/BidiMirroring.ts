/**
 * Parsed row from `BidiMirroring.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/BidiMirroring.txt#L27-L28
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:34:58.266Z
 */
export interface BidiMirroring {
  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/BidiMirroring.txt#L27-L28
   */
  source_codepoint: string;

  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits that has a glyph that is the mirror image.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/BidiMirroring.txt#L27-L28
   */
  mirror_codepoint: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_codepoint", "mirror_codepoint"];
