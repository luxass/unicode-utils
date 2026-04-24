/**
 * Parsed row from `USourceData.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/USourceData.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/USourceData.txt#L12-L42
 *
 * @unicodeVersion 15
 * @fields 10
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:01.668Z
 */
export interface USourceData {
  /**
   * The U-source ID
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/USourceData.txt#L12
   */
  u_source_id: string;

  /**
   * Text indicating the ideograph's status with possible values including ExtA (Encoded in Extension A), ExtB (Encoded in Extension B), etc., or UTC/UCI identifiers for duplicates.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/USourceData.txt#L13-L31
   */
  status: "ExtA" | "ExtB" | "ExtC" | "Comp" | "ExtD" | "ExtE" | "ExtF" | "ExtG" | "ExtH" | "N" | "URO" | "UK-2015" | "V" | "W" | "WS-2017" | "WS-2021" | "X" | (string & {});

  /**
   * A Unicode code point specifying the encoded character for this entry, if any, or the related encoded character.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/USourceData.txt#L32-L35
   */
  unicode_code_point: string;

  /**
   * Radical-stroke count
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/USourceData.txt#L36
   */
  radical_stroke_count: string;

  /**
   * Virtual KangXi dictionary position
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/USourceData.txt#L37
   */
  virtual_kang_xi_position: string;

  /**
   * Ideographic Description Sequence (IDS), if possible
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/USourceData.txt#L38
   */
  ids: string;

  /**
   * Source(s)
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/USourceData.txt#L39
   */
  sources: string;

  /**
   * General comments
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/USourceData.txt#L40
   */
  comments: string;

  /**
   * Total strokes
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/USourceData.txt#L41
   */
  total_strokes: string;

  /**
   * First residual stroke
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/USourceData.txt#L42
   */
  first_residual_stroke: string;
}

export const U_SOURCE_DATA_FIELDS = ["u_source_id", "status", "unicode_code_point", "radical_stroke_count", "virtual_kang_xi_position", "ids", "sources", "comments", "total_strokes", "first_residual_stroke"];
