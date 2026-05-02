/**
 * Parsed row from `NushuSources.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/NushuSources.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/NushuSources.txt#L18
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/NushuSources.txt#L20
 *
 * @unicodeVersion 16
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:41:56.937Z
 */
export interface NushuSources {
  /**
   * The code point value in U+xxxxx format.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/NushuSources.txt#L18
   */
  code_point: string;

  /**
   * The value of the tag (in UTF-8).
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/NushuSources.txt#L20
   */
  tag: "kSrc_NushuDuben" | "kReading" | (string & {});

  /**
   * The value of the tag (in UTF-8).
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/NushuSources.txt#L20
   */
  value: string;
}

export const NUSHU_SOURCES_FIELDS = ["code_point", "tag", "value"];
