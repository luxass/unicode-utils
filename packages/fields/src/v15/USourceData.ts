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
 * @generated 2026-04-24T04:20:47.918Z
 */
export interface USourceData {
  /**
   * The U-source ID
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/USourceData.txt#L12
   */
  u_source_id: string;

  /**
   * Text indicating the ideograph's status: ExtA=Encoded in Extension A, ExtB=Encoded in Extension B, ExtC=Encoded in Extension C, Comp=Encoded as a compatibility ideograph, ExtD=Encoded in Extension D, ExtE=Encoded in Extension E, ExtF=Encoded in Extension F, ExtG=Encoded in Extension G, ExtH=Encoded in Extension H, N=Planned to be submitted for a future extension, URO=Encoded in the URO or as a unified ideograph in the CJK Compatibility Ideographs block, UK-2015=Submitted by the UK for IRG Working Set 2015, V=Variant of an encoded character, W=Not suitable for encoding as a CJK Unified Ideograph, WS-2017=Submitted by the UTC for IRG Working Set 2017, WS-2021=Submitted by the UTC for IRG Working Set 2021, X=No action taken, (UTC-\d{5})|(UCI-\d{5})=Duplicate entries deprecated in favor of other entries.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/USourceData.txt#L13-L31
   */
  status:
    | "ExtA"
    | "ExtB"
    | "ExtC"
    | "Comp"
    | "ExtD"
    | "ExtE"
    | "ExtF"
    | "ExtG"
    | "ExtH"
    | "N"
    | "URO"
    | "UK-2015"
    | "V"
    | "W"
    | "WS-2017"
    | "WS-2021"
    | "X"
    | (string & {});

  /**
   * A Unicode code point specifying the encoded character for this entry, if any; otherwise the encoded character to which this entry is related, generally as a variant.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/USourceData.txt#L32-L36
   */
  code_point: string;

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

export const U_SOURCE_DATA_FIELDS = [
  "u_source_id",
  "status",
  "code_point",
  "radical_stroke_count",
  "virtual_kang_xi_position",
  "ids",
  "sources",
  "comments",
  "total_strokes",
  "first_residual_stroke",
];
