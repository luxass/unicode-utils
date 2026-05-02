/**
 * Parsed row from `BidiMirroring.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/BidiMirroring.txt#L26-L28
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:47:56.885Z
 */
export interface BidiMirroring {
  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits that has the Bidi_Mirrored=Yes property.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/BidiMirroring.txt#L26-L28
   */
  source_code_point: string;

  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits that typically has a glyph that is the mirror image of the source code point's glyph.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/BidiMirroring.txt#L26-L28
   */
  mirror_code_point: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_code_point", "mirror_code_point"];
