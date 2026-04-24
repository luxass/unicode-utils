/**
 * Parsed row from `BidiMirroring.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/BidiMirroring.txt#L27-L30
 *
 * @unicodeVersion 18
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:10.253Z
 */
export interface BidiMirroring {
  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits that requires mirroring.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/BidiMirroring.txt#L27-L29
   */
  source_codepoint: string;

  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits with mirror image glyph.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/BidiMirroring.txt#L27-L29
   */
  mirror_codepoint: string;

  /**
   * A comment indicates where the characters are BEST FIT mirroring.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/BidiMirroring.txt#L30
   */
  comment: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_codepoint", "mirror_codepoint", "comment"];
