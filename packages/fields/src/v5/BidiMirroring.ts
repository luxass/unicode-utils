/**
 * Parsed row from `BidiMirroring.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/BidiMirroring.txt#L23-L25
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:22.099Z
 */
export interface BidiMirroring {
  /**
   * First code point (source character) in the mapping, represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/BidiMirroring.txt#L23-L25
   */
  source_glyph: string;

  /**
   * Second code point (mirror image character) in the mapping, represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/BidiMirroring.txt#L23-L25
   */
  mirror_glyph: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_glyph", "mirror_glyph"];
