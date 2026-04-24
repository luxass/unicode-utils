/**
 * Parsed row from `BidiMirroring.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/BidiMirroring.txt#L24-L27
 *
 * @unicodeVersion 8
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:24:24.866Z
 */
export interface BidiMirroring {
  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits for which Bidi_Mirrored=Yes.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/BidiMirroring.txt#L24-L26
   */
  source_code_point: string;

  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits that is the mirror image glyph.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/BidiMirroring.txt#L24-L26
   */
  mirror_code_point: string;

  /**
   * Comment indicating BEST FIT mirroring where applicable.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/BidiMirroring.txt#L27
   */
  comment: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_code_point", "mirror_code_point", "comment"];
