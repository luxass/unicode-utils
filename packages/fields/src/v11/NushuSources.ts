/**
 * Parsed row from `NushuSources.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/NushuSources.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/NushuSources.txt#L17-L20
 *
 * @unicodeVersion 11
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:22:05.714Z
 */
export interface NushuSources {
  /**
   * The code point value in U+xxxxx format.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/NushuSources.txt#L17
   */
  field_0: string;

  /**
   * A tag indicating the type of information in the third field.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/NushuSources.txt#L18
   */
  field_1: string;

  /**
   * The value of the tag (in UTF-8).
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/NushuSources.txt#L19-L20
   */
  field_2: string;
}

export const NUSHU_SOURCES_FIELDS = ["field_0", "field_1", "field_2"];
