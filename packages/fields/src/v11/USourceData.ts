/**
 * Parsed row from `USourceData.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/USourceData.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/USourceData.txt#L12-L36
 *
 * @unicodeVersion 11
 * @fields 7
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:22:48.444Z
 */
export interface USourceData {
  /**
   * The U-source ID.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/USourceData.txt#L12
   */
  u_source_id: string;

  /**
   * Text indicating the ideograph's status.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/USourceData.txt#L13-L28
   */
  status:
    | "C"
    | "D"
    | "E"
    | "F"
    | "G"
    | "N"
    | "U"
    | "UNC-2013"
    | "UNC-2015"
    | "UK-2015"
    | "V"
    | "W"
    | "WS-2017"
    | "X"
    | (string & {});

  /**
   * A Unicode code point. If the status is V (Field 1), the code point in Field 2 specifies the encoded character for which this entry is a variant. Otherwise, the code point specifies the encoded character for this entry.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/USourceData.txt#L29-L32
   */
  code_point: string;

  /**
   * Radical-stroke count.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/USourceData.txt#L33
   */
  radical_stroke_count: string;

  /**
   * Virtual KangXi dictionary position.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/USourceData.txt#L34
   */
  virtual_kang_xi_position: string;

  /**
   * Ideographic Description Sequence (IDS), if possible.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/USourceData.txt#L35
   */
  ids: string;

  /**
   * Source(s).
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/USourceData.txt#L36
   */
  sources: string;
}

export const U_SOURCE_DATA_FIELDS = [
  "u_source_id",
  "status",
  "code_point",
  "radical_stroke_count",
  "virtual_kang_xi_position",
  "ids",
  "sources",
];
