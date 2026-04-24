/**
 * Parsed row from `BidiMirroring.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/BidiMirroring.txt#L26-L28
 *
 * @unicodeVersion 15.1
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:14:02.435Z
 */
export interface BidiMirroring {
  /**
   * Source code point represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/BidiMirroring.txt#L26-L28
   */
  source_codepoint: string;

  /**
   * Target code point represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/BidiMirroring.txt#L26-L28
   */
  target_codepoint: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_codepoint", "target_codepoint"];
