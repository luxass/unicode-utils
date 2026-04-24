/**
 * Parsed row from `TangutSources.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/TangutSources.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/TangutSources.txt#L20-L22
 *
 * @unicodeVersion 12
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:23:53.481Z
 */
export interface TangutSources {
  /**
   * the Tangut code point value in U+ format
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/TangutSources.txt#L20
   */
  field_0: string;

  /**
   * a tag indicating the type of information in the third field
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/TangutSources.txt#L21
   */
  field_1: string;

  /**
   * the value (in UTF-8)
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/TangutSources.txt#L22
   */
  field_2: string;
}

export const TANGUT_SOURCES_FIELDS = ["field_0", "field_1", "field_2"];
