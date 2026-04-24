/**
 * Parsed row from `USourceData.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/USourceData.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/USourceData.txt#L14-L40
 *
 * @unicodeVersion 16
 * @fields 10
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:49.219Z
 */
export interface USourceData {
  /**
   * U-source identifier
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/USourceData.txt#L14
   */
  u_source_identifier: string;

  /**
   * Status of the ideograph: Comp=Encoded as a CJK Compatibility Ideograph, ExtA=Encoded in Extension A, etc.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/USourceData.txt#L15-L32
   */
  status: "Comp" | "ExtA" | "ExtB" | "ExtC" | "ExtD" | "ExtE" | "ExtF" | "ExtG" | "ExtH" | "ExtI" | "FutureWS" | "NoAction" | "Rejected" | "URO" | "Variant" | "WS-2021" | (string & {});

  /**
   * The Unicode code point of this ideograph, if any; otherwise, the code point specifies the encoded ideograph to which this entry is related, generally as a variant
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/USourceData.txt#L33
   */
  unicode_code_point: string;

  /**
   * kRSUnicode property value (see UAX #38)
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/USourceData.txt#L34
   */
  k_rs_unicode: string;

  /**
   * Virtual KangXi dictionary position
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/USourceData.txt#L35
   */
  virtual_kang_xi_position: string;

  /**
   * Ideographic Description Sequence (IDS)
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/USourceData.txt#L36
   */
  ids: string;

  /**
   * Sources
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/USourceData.txt#L37
   */
  sources: string;

  /**
   * General comments
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/USourceData.txt#L38
   */
  general_comments: string;

  /**
   * kTotalStrokes property value (see UAX #38)
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/USourceData.txt#L39
   */
  k_total_strokes: string;

  /**
   * First residual stroke
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/USourceData.txt#L40
   */
  first_residual_stroke: string;
}

export const U_SOURCE_DATA_FIELDS = ["u_source_identifier", "status", "unicode_code_point", "k_rs_unicode", "virtual_kang_xi_position", "ids", "sources", "general_comments", "k_total_strokes", "first_residual_stroke"];
