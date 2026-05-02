/**
 * Parsed row from `TangutSources.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/TangutSources.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/TangutSources.txt#L22-L24
 *
 * @unicodeVersion 16
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:42:16.041Z
 */
export interface TangutSources {
  /**
   * the Tangut code point value in U+ format
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/TangutSources.txt#L22
   */
  codepoint: string;

  /**
   * a tag indicating the type of information in the third field
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/TangutSources.txt#L23
   */
  tag: "kTGT_MergedSrc" | "kRSTUnicode";

  /**
   * the value (in UTF-8)
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/TangutSources.txt#L24
   */
  value: string;
}

export const TANGUT_SOURCES_FIELDS = ["codepoint", "tag", "value"];
