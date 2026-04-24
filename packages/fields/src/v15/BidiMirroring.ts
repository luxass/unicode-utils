/**
 * Parsed row from `BidiMirroring.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/BidiMirroring.txt#L26-L28
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:19.825Z
 */
export interface BidiMirroring {
  /**
   * Source code point represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/BidiMirroring.txt#L26-L28
   */
  source: string;

  /**
   * Mirror image code point represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/BidiMirroring.txt#L26-L28
   */
  mirror: string;
}

export const BIDI_MIRRORING_FIELDS = ["source", "mirror"];
