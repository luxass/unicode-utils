/**
 * Parsed row from `Unikemet.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/Unikemet.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/Unikemet.txt#L14-L16
 *
 * @unicodeVersion 17
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:08.286Z
 */
export interface Unikemet {
  /**
   * The UCS code point value as U+xxxxx.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/Unikemet.txt#L14
   */
  code_point: string;

  /**
   * A tag indicating the type of information in the third field.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/Unikemet.txt#L15
   */
  tag: string;

  /**
   * The line's value (in UTF-8).
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/Unikemet.txt#L16
   */
  value: string;
}

export const UNIKEMET_FIELDS = ["code_point", "tag", "value"];
