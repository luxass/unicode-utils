/**
 * Parsed row from `BidiMirroring-1.txt` (Unicode 3.0.1).
 *
 * @see https://unicode.org/Public/3.0-Update1/BidiMirroring-1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.0-Update1/BidiMirroring-1.txt#L15-L17
 *
 * @unicodeVersion 3.0.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:31:12.030Z
 */
export interface BidiMirroring1 {
  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits that has the mirrored property.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update1/BidiMirroring-1.txt#L15-L17
   */
  source_code_point: string;

  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits that is the mirror image glyph.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update1/BidiMirroring-1.txt#L15-L17
   */
  mirror_code_point: string;
}

export const BIDI_MIRRORING_1_FIELDS = ["source_code_point", "mirror_code_point"];
