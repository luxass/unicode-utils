/**
 * Parsed row from `NushuSources.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/NushuSources.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/NushuSources.txt#L18
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/NushuSources.txt#L20-L21
 *
 * @unicodeVersion 18
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:22.756Z
 */
export interface NushuSources {
  /**
   * The code point value in U+xxxxx format.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/NushuSources.txt#L18
   */
  code_point: string;

  /**
   * The value of the tag (in UTF-8).
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/NushuSources.txt#L20
   */
  tag: "kNSHU_DubenSrc" | "kNSHU_Reading" | (string & {});

  /**
   * See source header for details.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/NushuSources.txt#L21
   */
  value: string;
}

export const NUSHU_SOURCES_FIELDS = ["code_point", "tag", "value"];
