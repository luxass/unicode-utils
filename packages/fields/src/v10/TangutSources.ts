/**
 * Parsed row from `TangutSources.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/TangutSources.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/TangutSources.txt#L20-L22
 *
 * @unicodeVersion 10
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:21:43.390Z
 */
export interface TangutSources {
  /**
   * the Tangut code point value in U+ format
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/TangutSources.txt#L20
   */
  code_point: string;

  /**
   * a tag indicating the type of information in the third field
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/TangutSources.txt#L21
   */
  tag: string;

  /**
   * the value (in UTF-8)
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/TangutSources.txt#L22
   */
  value: string;
}

export const TANGUT_SOURCES_FIELDS = ["code_point", "tag", "value"];
