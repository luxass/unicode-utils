/**
 * Parsed row from `Unikemet.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/Unikemet.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/Unikemet.txt#L13-L16
 *
 * @unicodeVersion 17
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:42:08.613Z
 */
export interface Unikemet {
  /**
   * UCS code point value as U+xxxxx.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/Unikemet.txt#L13-L15
   */
  codepoint: string;

  /**
   * Tag indicating the type of information in the third field.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/Unikemet.txt#L13-L16
   */
  tag: string;

  /**
   * Line's value in UTF-8, depending on the tag.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/Unikemet.txt#L13-L16
   */
  value: string;
}

export const UNIKEMET_FIELDS = ["codepoint", "tag", "value"];
