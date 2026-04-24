/**
 * Parsed row from `Unikemet.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/Unikemet.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/Unikemet.txt#L13-L16
 *
 * @unicodeVersion 18
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:16:32.402Z
 */
export interface Unikemet {
  /**
   * UCS code point value as U+xxxxx.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/Unikemet.txt#L14
   */
  code_point: string;

  /**
   * Tag indicating the type of information in the third field.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/Unikemet.txt#L15
   */
  tag: string;

  /**
   * Each line of this file consists of three tab-separated fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/Unikemet.txt#L13-L16
   */
  value: string;
}

export const UNIKEMET_FIELDS = ["code_point", "tag", "value"];
