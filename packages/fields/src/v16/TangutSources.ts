/**
 * Parsed row from `TangutSources.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/TangutSources.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/TangutSources.txt#L20-L24
 *
 * @unicodeVersion 16
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:16:50.536Z
 */
export interface TangutSources {
  /**
   * the Tangut code point value in U+ format
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/TangutSources.txt#L20-L24
   */
  code_point: string;

  /**
   * a tag indicating the type of information in the third field
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/TangutSources.txt#L20-L24
   */
  tag: "kTGT_MergedSrc" | "kRSTUnicode" | (string & {});

  /**
   * the value (in UTF-8)
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/TangutSources.txt#L20-L24
   */
  value: string;
}

export const TANGUT_SOURCES_FIELDS = ["code_point", "tag", "value"];
