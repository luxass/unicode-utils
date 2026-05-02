/**
 * Parsed row from `BidiMirroring.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/BidiMirroring.txt#L26-L28
 *
 * @unicodeVersion 15.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:39:17.681Z
 */
export interface BidiMirroring {
  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits that has the Bidi_Mirrored=Yes property.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/BidiMirroring.txt#L26-L28
   */
  source_codepoint: string;

  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits that typically has a glyph that is the mirror image of the source code point's glyph.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/BidiMirroring.txt#L26-L28
   */
  target_codepoint: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_codepoint", "target_codepoint"];
