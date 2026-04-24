/**
 * Parsed row from `BidiMirroring.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/BidiMirroring.txt#L26-L28
 *
 * @unicodeVersion 12.1
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:18:05.177Z
 */
export interface BidiMirroring {
  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits that has Bidi_Mirrored=Yes.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/BidiMirroring.txt#L26-L28
   */
  source_code_point: string;

  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits that is the mirror image glyph mapping.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/BidiMirroring.txt#L26-L28
   */
  mirror_code_point: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_code_point", "mirror_code_point"];
