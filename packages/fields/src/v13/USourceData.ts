/**
 * Parsed row from `USourceData.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/USourceData.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/USourceData.txt#L12-L38
 *
 * @unicodeVersion 13
 * @fields 8
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:41.694Z
 */
export interface USourceData {
  /**
   * The U-source ID
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/USourceData.txt#L12
   */
  u_source_id: string;

  /**
   * Text indicating the ideograph's status
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/USourceData.txt#L13-L29
   */
  status:
    | "A"
    | "B"
    | "C"
    | "Comp"
    | "D"
    | "E"
    | "F"
    | "G"
    | "N"
    | "U"
    | "UK-2015"
    | "V"
    | "W"
    | "WS-2017"
    | "X"
    | (string & {});

  /**
   * A Unicode code point
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/USourceData.txt#L30-L33
   */
  code_point: string;

  /**
   * Radical-stroke count
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/USourceData.txt#L34
   */
  radical_stroke_count: string;

  /**
   * Virtual KangXi dictionary position
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/USourceData.txt#L35
   */
  virtual_kang_xi_position: string;

  /**
   * Ideographic Description Sequence (IDS), if possible
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/USourceData.txt#L36
   */
  ids: string;

  /**
   * Source(s)
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/USourceData.txt#L37
   */
  sources: string;

  /**
   * General comments
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/USourceData.txt#L38
   */
  comments: string;
}

export const U_SOURCE_DATA_FIELDS = [
  "u_source_id",
  "status",
  "code_point",
  "radical_stroke_count",
  "virtual_kang_xi_position",
  "ids",
  "sources",
  "comments",
];
