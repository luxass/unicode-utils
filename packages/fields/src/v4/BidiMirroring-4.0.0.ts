/**
 * Parsed row from `BidiMirroring-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/BidiMirroring-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/BidiMirroring-4.0.0.txt#L15-L18
 *
 * @unicodeVersion 4
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:29:56.054Z
 */
export interface BidiMirroring400 {
  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits that has the mirrored property.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/BidiMirroring-4.0.0.txt#L15-L17
   */
  source_code_point: string;

  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits that is the mirror image glyph.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/BidiMirroring-4.0.0.txt#L15-L17
   */
  mirror_code_point: string;

  /**
   * Comment indicating where the characters are BEST FIT mirroring.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/BidiMirroring-4.0.0.txt#L18
   */
  comment: string;
}

export const BIDI_MIRRORING_400_FIELDS = ["source_code_point", "mirror_code_point", "comment"];
