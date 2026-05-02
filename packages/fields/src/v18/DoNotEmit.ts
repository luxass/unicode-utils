/**
 * Parsed row from `DoNotEmit.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/DoNotEmit.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/DoNotEmit.txt#L65-L67
 *
 * @unicodeVersion 18
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:39:33.386Z
 */
export interface DoNotEmit {
  /**
   * A sequence of Unicode code point values.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/DoNotEmit.txt#L65
   */
  do_not_emit_sequence: string;

  /**
   * A replacement sequence of Unicode code point values.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/DoNotEmit.txt#L66
   */
  replacement_sequence: string;

  /**
   * DoNotEmit type of the original character sequence.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/DoNotEmit.txt#L67
   */
  do_not_emit_type: string;
}

export const DO_NOT_EMIT_FIELDS = ["do_not_emit_sequence", "replacement_sequence", "do_not_emit_type"];
