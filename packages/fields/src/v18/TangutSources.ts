/**
 * Parsed row from `TangutSources.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/TangutSources.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/TangutSources.txt#L17-L21
 *
 * @unicodeVersion 18
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:42:14.187Z
 */
export interface TangutSources {
  /**
   * the Tangut code point value in U+ format
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/TangutSources.txt#L17-L19
   */
  code_point: string;

  /**
   * a tag indicating the type of information in the third field
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/TangutSources.txt#L17-L20
   */
  tag: string;

  /**
   * the value (in UTF-8)
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/TangutSources.txt#L17-L21
   */
  value: string;
}

export const TANGUT_SOURCES_FIELDS = ["code_point", "tag", "value"];
