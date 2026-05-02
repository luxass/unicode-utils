/**
 * Parsed row from `TangutSources.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/TangutSources.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/TangutSources.txt#L20-L22
 *
 * @unicodeVersion 15
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:46:02.784Z
 */
export interface TangutSources {
  /**
   * the Tangut code point value in U+ format
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/TangutSources.txt#L20
   */
  tangut_code_point: string;

  /**
   * a tag indicating the type of information in the third field
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/TangutSources.txt#L21
   */
  tag: "kTGT_MergedSrc" | "kRSTUnicode";

  /**
   * the value (in UTF-8)
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/TangutSources.txt#L22
   */
  value: string;
}

export const TANGUT_SOURCES_FIELDS = ["tangut_code_point", "tag", "value"];
