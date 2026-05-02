/**
 * Parsed row from `BidiMirroring.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/BidiMirroring.txt#L24-L26
 *
 * @unicodeVersion 6.3
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:48:04.033Z
 */
export interface BidiMirroring {
  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/BidiMirroring.txt#L24-L26
   */
  source_code_point: string;

  /**
   * Code point represented as a variable-length hexadecimal value with 4 to 6 digits that is the mirror image glyph.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/BidiMirroring.txt#L24-L26
   */
  mirror_code_point: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_code_point", "mirror_code_point"];
