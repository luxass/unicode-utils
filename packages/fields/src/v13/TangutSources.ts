/**
 * Parsed row from `TangutSources.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/TangutSources.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/TangutSources.txt#L20-L22
 *
 * @unicodeVersion 13
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:45:54.526Z
 */
export interface TangutSources {
  /**
   * the Tangut code point value in U+ format
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/TangutSources.txt#L20
   */
  field_0: string;

  /**
   * a tag indicating the type of information in the third field
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/TangutSources.txt#L21
   */
  field_1: "kTGT_MergedSrc" | "kRSTUnicode" | (string & {});

  /**
   * the value (in UTF-8)
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/TangutSources.txt#L22
   */
  field_2: string;
}

export const TANGUT_SOURCES_FIELDS = ["field_0", "field_1", "field_2"];
