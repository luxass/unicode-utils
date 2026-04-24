/**
 * Parsed row from `USourceData.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/USourceData.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/USourceData.txt#L12-L34
 *
 * @unicodeVersion 7
 * @fields 7
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:12.562Z
 */
export interface USourceData {
  /**
   * The U-source ID
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/USourceData.txt#L12
   */
  u_source_id: string;

  /**
   * Text indicating the ideograph's status: C=Included in Extension C, D=Included in Extension D, E=Included for Extension E, F=Submitted for Extension F, N=Planned to be submitted for a future extension, U=Encoded, UNC-2013=Included in the UTC's 2013 "Urgently Needed Characters" proposal, V=Variant of an encoded character, W=Not to encode, X=No action taken
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/USourceData.txt#L13-L24
   */
  status: "C" | "D" | "E" | "F" | "N" | "U" | "UNC-2013" | "V" | "W" | "X";

  /**
   * A Unicode code point: for status C/D/E/U/V the relevant code point, empty otherwise
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/USourceData.txt#L24-L30
   */
  unicode_code_point: string;

  /**
   * Radical-stroke count
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/USourceData.txt#L31
   */
  radical_stroke_count: string;

  /**
   * Virtual KangXi dictionary position
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/USourceData.txt#L32
   */
  virtual_kang_xi_position: string;

  /**
   * Ideographic Description Sequence (IDS), if possible
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/USourceData.txt#L33
   */
  ids: string;

  /**
   * Source(s)
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/USourceData.txt#L34
   */
  sources: string;
}

export const U_SOURCE_DATA_FIELDS = [
  "u_source_id",
  "status",
  "unicode_code_point",
  "radical_stroke_count",
  "virtual_kang_xi_position",
  "ids",
  "sources",
];
