/**
 * Parsed row from `BidiMirroring.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/BidiMirroring.txt#L26-L29
 *
 * @unicodeVersion 12.1
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:13.884Z
 */
export interface BidiMirroring {
  /**
   * Source code point represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/BidiMirroring.txt#L26-L28
   */
  source_codepoint: string;

  /**
   * Mirror code point represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/BidiMirroring.txt#L26-L28
   */
  mirror_codepoint: string;

  /**
   * A comment indicates where the characters are BEST FIT mirroring.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/BidiMirroring.txt#L29
   */
  comment: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_codepoint", "mirror_codepoint", "comment"];
