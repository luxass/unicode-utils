/**
 * Parsed row from `USourceData.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/USourceData.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/USourceData.txt#L12-L38
 *
 * @unicodeVersion 15.1
 * @fields 10
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:17:50.918Z
 */
export interface USourceData {
  /**
   * U-source identifier.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/USourceData.txt#L12
   */
  u_source_identifier: string;

  /**
   * Status of the ideograph: Comp=Encoded as a CJK Compatibility Ideograph, ExtA=Encoded in Extension A, etc.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/USourceData.txt#L13-L30
   */
  status:
    | "Comp"
    | "ExtA"
    | "ExtB"
    | "ExtC"
    | "ExtD"
    | "ExtE"
    | "ExtF"
    | "ExtG"
    | "ExtH"
    | "ExtI"
    | "FutureWS"
    | "NoAction"
    | "Rejected"
    | "URO"
    | "Variant"
    | "WS-2021"
    | "(UTC-\d{5})|(UCI-\d{5})"
    | (string & {});

  /**
   * The Unicode code point of this ideograph, if any; otherwise, the code point specifies the encoded ideograph to which this entry is related, generally as a variant.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/USourceData.txt#L31
   */
  unicode_code_point: string;

  /**
   * kRSUnicode property value (see UAX #38).
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/USourceData.txt#L32
   */
  k_rs_unicode: string;

  /**
   * Virtual KangXi dictionary position.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/USourceData.txt#L33
   */
  virtual_kang_xi_position: string;

  /**
   * Ideographic Description Sequence (IDS).
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/USourceData.txt#L34
   */
  ids: string;

  /**
   * Sources.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/USourceData.txt#L35
   */
  sources: string;

  /**
   * General comments.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/USourceData.txt#L36
   */
  general_comments: string;

  /**
   * kTotalStrokes property value (see UAX #38).
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/USourceData.txt#L37
   */
  k_total_strokes: string;

  /**
   * First residual stroke.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/USourceData.txt#L38
   */
  first_residual_stroke: string;
}

export const U_SOURCE_DATA_FIELDS = [
  "u_source_identifier",
  "status",
  "unicode_code_point",
  "k_rs_unicode",
  "virtual_kang_xi_position",
  "ids",
  "sources",
  "general_comments",
  "k_total_strokes",
  "first_residual_stroke",
];
