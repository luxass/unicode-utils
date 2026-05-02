/**
 * Parsed row from `BidiMirroring.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/BidiMirroring.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/BidiMirroring.txt#L26-L28
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:46:59.802Z
 */
export interface BidiMirroring {
  /**
   * Each mapping line contains two fields, separated by a semicolon (';'). Each of the two fields contains a code point represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/BidiMirroring.txt#L26-L28
   */
  source_code_point: string;

  /**
   * Each mapping line contains two fields, separated by a semicolon (';'). Each of the two fields contains a code point represented as a variable-length hexadecimal value with 4 to 6 digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/BidiMirroring.txt#L26-L28
   */
  mirror_code_point: string;
}

export const BIDI_MIRRORING_FIELDS = ["source_code_point", "mirror_code_point"];
