/**
 * Parsed row from `BidiMirroring.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/BidiMirroring.txt#L26-L29
 *
 * @unicodeVersion 14
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:18:15.650Z
 */
export interface BidiMirroring {
  /**
   * Source code point represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/BidiMirroring.txt#L26-L28
   */
  source_code_point: string;

  /**
   * Mirror code point represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/BidiMirroring.txt#L26-L28
   */
  mirror_code_point: string;

  /**
   * Comment indicating where the characters are BEST FIT mirroring.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/BidiMirroring.txt#L29
   */
  comment: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_code_point", "mirror_code_point", "comment"];
