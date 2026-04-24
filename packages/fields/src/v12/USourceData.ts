/**
 * Parsed row from `USourceData.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/USourceData.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/USourceData.txt#L12-L39
 *
 * @unicodeVersion 12
 * @fields 8
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:27.029Z
 */
export interface USourceData {
  /**
   * The U-source ID.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/USourceData.txt#L12
   */
  u_source_id: string;

  /**
   * Text indicating the ideograph's status.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/USourceData.txt#L13-L30
   */
  status: "A" | "B" | "C" | "D" | "E" | "F" | "G" | "N" | "U" | "UNC-2013" | "UNC-2015" | "UK-2015" | "V" | "W" | "WS-2017" | "X" | (string & {});

  /**
   * A Unicode code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/USourceData.txt#L31-L34
   */
  code_point: string;

  /**
   * Radical-stroke count.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/USourceData.txt#L35
   */
  radical_stroke_count: string;

  /**
   * Virtual KangXi dictionary position.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/USourceData.txt#L36
   */
  virtual_kang_xi_position: string;

  /**
   * Ideographic Description Sequence (IDS), if possible.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/USourceData.txt#L37
   */
  ids: string;

  /**
   * Source(s).
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/USourceData.txt#L38
   */
  sources: string;

  /**
   * General comments.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/USourceData.txt#L39
   */
  comments: string;
}

export const U_SOURCE_DATA_FIELDS = ["u_source_id", "status", "code_point", "radical_stroke_count", "virtual_kang_xi_position", "ids", "sources", "comments"];
