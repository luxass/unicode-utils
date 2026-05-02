/**
 * Parsed row from `BidiMirroring.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/BidiMirroring.txt#L24-L26
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:52:44.605Z
 */
export interface BidiMirroring {
  /**
   * Code point for which Bidi_Mirrored=True, represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/BidiMirroring.txt#L24-L26
   */
  source_code_point: string;

  /**
   * Code point that typically has a glyph that is the mirror image of the source code point's glyph, represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/BidiMirroring.txt#L24-L26
   */
  mirror_code_point: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_code_point", "mirror_code_point"];
