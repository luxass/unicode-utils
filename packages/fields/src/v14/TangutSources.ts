/**
 * Parsed row from `TangutSources.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/TangutSources.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/TangutSources.txt#L18-L22
 *
 * @unicodeVersion 14
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:45:46.088Z
 */
export interface TangutSources {
  /**
   * the Tangut code point value in U+ format
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/TangutSources.txt#L18-L22
   */
  tangut_code_point: string;

  /**
   * a tag indicating the type of information in the third field
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/TangutSources.txt#L18-L22
   */
  tag: string;

  /**
   * the value (in UTF-8)
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/TangutSources.txt#L18-L22
   */
  value: string;
}

export const TANGUT_SOURCES_FIELDS = ["tangut_code_point", "tag", "value"];
