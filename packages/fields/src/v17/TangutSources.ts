/**
 * Parsed row from `TangutSources.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/TangutSources.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/TangutSources.txt#L17-L21
 *
 * @unicodeVersion 17
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:43:15.257Z
 */
export interface TangutSources {
  /**
   * the Tangut code point value in U+ format
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/TangutSources.txt#L17-L21
   */
  code_point: string;

  /**
   * a tag indicating the type of information in the third field
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/TangutSources.txt#L17-L21
   */
  tag: "kTGT_MergedSrc" | "kTGT_RSUnicode";

  /**
   * the value (in UTF-8)
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/TangutSources.txt#L17-L21
   */
  value: string;
}

export const TANGUT_SOURCES_FIELDS = ["code_point", "tag", "value"];
