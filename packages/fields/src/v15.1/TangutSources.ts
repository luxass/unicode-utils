/**
 * Parsed row from `TangutSources.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/TangutSources.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/TangutSources.txt#L21-L33
 *
 * @unicodeVersion 15.1
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:37.744Z
 */
export interface TangutSources {
  /**
   * the Tangut code point value in U+ format
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/TangutSources.txt#L21
   */
  tangut_code_point: string;

  /**
   * a tag indicating the type of information in the third field; current tags: kTGT_MergedSrc (Tangut Merged source), kRSTUnicode (Radical-Stroke indexes)
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/TangutSources.txt#L22-L33
   */
  tag: "kTGT_MergedSrc" | "kRSTUnicode" | (string & {});

  /**
   * the value (in UTF-8)
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/TangutSources.txt#L23
   */
  value: string;
}

export const TANGUT_SOURCES_FIELDS = ["tangut_code_point", "tag", "value"];
