/**
 * Parsed row from `BidiMirroring.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/BidiMirroring.txt#L24-L26
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:50:38.417Z
 */
export interface BidiMirroring {
  /**
   * Each mapping line contains two fields, separated by a semicolon, where the first field contains a code point represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/BidiMirroring.txt#L24-L26
   */
  source_code_point: string;

  /**
   * Each mapping line contains two fields, separated by a semicolon, where the second field contains a code point represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/BidiMirroring.txt#L24-L26
   */
  mirror_code_point: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_code_point", "mirror_code_point"];
