/**
 * Parsed row from `TangutSources.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/TangutSources.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/TangutSources.txt#L21-L23
 *
 * @unicodeVersion 15.1
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:16:45.949Z
 */
export interface TangutSources {
  /**
   * the Tangut code point value in U+ format
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/TangutSources.txt#L21
   */
  code_point: string;

  /**
   * a tag indicating the type of information in the third field
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/TangutSources.txt#L22
   */
  tag: string;

  /**
   * the value (in UTF-8)
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/TangutSources.txt#L23
   */
  value: string;
}

export const TANGUT_SOURCES_FIELDS = ["code_point", "tag", "value"];
