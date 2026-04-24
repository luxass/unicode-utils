/**
 * Parsed row from `TangutSources.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/TangutSources.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/TangutSources.txt#L20-L22
 *
 * @unicodeVersion 9
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:58.461Z
 */
export interface TangutSources {
  /**
   * the Tangut code point value in U+ format
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/TangutSources.txt#L20
   */
  tangut_code_point: string;

  /**
   * a tag indicating the type of information in the third field
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/TangutSources.txt#L21
   */
  tag: string;

  /**
   * the value (in UTF-8)
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/TangutSources.txt#L22
   */
  value: string;
}

export const TANGUT_SOURCES_FIELDS = ["tangut_code_point", "tag", "value"];
