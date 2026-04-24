/**
 * Parsed row from `USourceData.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/USourceData.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/USourceData.txt#L14-L41
 *
 * @unicodeVersion 18
 * @fields 10
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:43.442Z
 */
export interface USourceData {
  /**
   * U-source identifier
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/USourceData.txt#L14
   */
  u_source_identifier: string;

  /**
   * Status of the ideograph with enumerated values including Comp=Encoded as a CJK Compatibility Ideograph, ExtA=Encoded in Extension A, etc., and special cases for duplicates.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/USourceData.txt#L15-L33
   */
  status: "Comp" | "ExtA" | "ExtB" | "ExtC" | "ExtD" | "ExtE" | "ExtF" | "ExtG" | "ExtH" | "ExtI" | "ExtJ" | "FutureWS" | "NoAction" | "Rejected" | "URO" | "Variant" | "WS-2024" | "(UTC-\d{5})|(UCI-\d{5})" | (string & {});

  /**
   * The Unicode code point of this ideograph, if any; otherwise, the code point specifies the encoded ideograph to which this entry is related, generally as a variant.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/USourceData.txt#L34
   */
  unicode_code_point: string;

  /**
   * kRSUnicode property value (see UAX #38)
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/USourceData.txt#L35
   */
  k_rs_unicode: string;

  /**
   * Virtual KangXi dictionary position
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/USourceData.txt#L36
   */
  virtual_kang_xi_position: string;

  /**
   * Ideographic Description Sequence (IDS)
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/USourceData.txt#L37
   */
  ids: string;

  /**
   * Sources
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/USourceData.txt#L38
   */
  sources: string;

  /**
   * General comments
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/USourceData.txt#L39
   */
  general_comments: string;

  /**
   * kTotalStrokes property value (see UAX #38)
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/USourceData.txt#L40
   */
  k_total_strokes: string;

  /**
   * First residual stroke
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/USourceData.txt#L41
   */
  first_residual_stroke: string;
}

export const U_SOURCE_DATA_FIELDS = ["u_source_identifier", "status", "unicode_code_point", "k_rs_unicode", "virtual_kang_xi_position", "ids", "sources", "general_comments", "k_total_strokes", "first_residual_stroke"];
