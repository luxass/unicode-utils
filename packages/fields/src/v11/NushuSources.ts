/**
 * Parsed row from `NushuSources.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/NushuSources.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/NushuSources.txt#L17-L19
 *
 * @unicodeVersion 11
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:47:51.361Z
 */
export interface NushuSources {
  /**
   * The code point value in U+xxxxx format.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/NushuSources.txt#L17
   */
  code_point: string;

  /**
   * A tag indicating the type of information in the third field.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/NushuSources.txt#L18
   */
  tag: "kSrc_NushuDuben" | "kReading";

  /**
   * The value of the tag (in UTF-8).
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/NushuSources.txt#L19
   */
  value: string;
}

export const NUSHU_SOURCES_FIELDS = ["code_point", "tag", "value"];
