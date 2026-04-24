/**
 * Parsed row from `USourceData.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/USourceData.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/USourceData.txt#L12-L31
 *
 * @unicodeVersion 8
 * @fields 7
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:26:17.920Z
 */
export interface USourceData {
  /**
   * The U-source ID.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/USourceData.txt#L12
   */
  u_source_id: string;

  /**
   * Text indicating the ideograph's status: C=Included in Extension C, D=Included in Extension D, E=Included in Extension E, F=Submitted for Extension F, N=Planned to be submitted for a future extension, U=Encoded, UNC-2013=Included in the UTC's 2013 "Urgently Needed Characters" proposal, V=Variant of an encoded character, W=Not to encode, X=No action taken.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/USourceData.txt#L13-L24
   */
  status: "C" | "D" | "E" | "F" | "N" | "U" | "UNC-2013" | "V" | "W" | "X";

  /**
   * A Unicode code point. If the status is V (Field 1), the code point in Field 2 specifies the encoded character for which this entry is a variant. Otherwise, the code point specifies the encoded character for this entry.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/USourceData.txt#L24-L27
   */
  code_point: string;

  /**
   * Radical-stroke count.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/USourceData.txt#L28
   */
  radical_stroke_count: string;

  /**
   * Virtual KangXi dictionary position.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/USourceData.txt#L29
   */
  virtual_kang_xi_position: string;

  /**
   * Ideographic Description Sequence (IDS), if possible.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/USourceData.txt#L30
   */
  ids: string;

  /**
   * Source(s).
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/USourceData.txt#L31
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
