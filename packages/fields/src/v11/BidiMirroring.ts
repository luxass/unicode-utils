/**
 * Parsed row from `BidiMirroring.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/BidiMirroring.txt#L26-L28
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:21:00.880Z
 */
export interface BidiMirroring {
  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits that has Bidi_Mirrored=Yes.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/BidiMirroring.txt#L26-L28
   */
  source_code_point: string;

  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits that typically has a glyph that is the mirror image.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/BidiMirroring.txt#L26-L28
   */
  mirror_code_point: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_code_point", "mirror_code_point"];
