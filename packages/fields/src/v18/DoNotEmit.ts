/**
 * Parsed row from `DoNotEmit.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/DoNotEmit.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/DoNotEmit.txt#L65-L108
 *
 * @unicodeVersion 18
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:14:15.492Z
 */
export interface DoNotEmit {
  /**
   * A sequence of Unicode code point values
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/DoNotEmit.txt#L65
   */
  field_0: string;

  /**
   * A replacement sequence of Unicode code point values
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/DoNotEmit.txt#L66
   */
  field_1: string;

  /**
   * DoNotEmit type of the original character sequence
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/DoNotEmit.txt#L67-L108
   */
  field_2: string;
}

export const DO_NOT_EMIT_FIELDS = ["field_0", "field_1", "field_2"];
