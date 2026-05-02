/**
 * Parsed row from `BidiMirroring.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/BidiMirroring.txt#L23-L25
 *
 * @unicodeVersion 5.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:52:16.079Z
 */
export interface BidiMirroring {
  /**
   * First field: code point represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/BidiMirroring.txt#L23-L25
   */
  source_code_point: string;

  /**
   * Second field: code point represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/BidiMirroring.txt#L23-L25
   */
  mirror_code_point: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_code_point", "mirror_code_point"];
