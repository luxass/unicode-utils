/**
 * Parsed row from `Unikemet.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/Unikemet.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/Unikemet.txt#L13-L16
 *
 * @unicodeVersion 16
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:42:33.392Z
 */
export interface Unikemet {
  /**
   * UCS code point value as U+xxxxx
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/Unikemet.txt#L13-L15
   */
  codepoint: string;

  /**
   * Tag indicating the type of information in the third field
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/Unikemet.txt#L13-L16
   */
  tag: string;

  /**
   * Each line of this file consists of three tab-separated fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/Unikemet.txt#L13-L16
   */
  value: string;
}

export const UNIKEMET_FIELDS = ["codepoint", "tag", "value"];
