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
 * @generated 2026-04-24T04:20:45.024Z
 */
export interface USourceData {
  /**
   * The U-source ID.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/USourceData.txt#L12
   */
  u_source_id: string;

  /**
   * Text indicating the ideograph's status: A=Encoded in Extension A, B=Encoded in Extension B, C=Encoded in Extension C, Comp=Encoded as a compatibility ideograph, D=Encoded in Extension D, E=Encoded in Extension E, F=Encoded in Extension F, G=Encoded in Extension G, N=Planned to be submitted for a future extension, U=Encoded in the URO or as a unified ideograph in the CJK Compatibility Ideographs block, UK-2015=Submitted by the UK for IRG Working Set 2015, V=Variant of an encoded character, W=Not suitable for encoding as a CJK Unified Ideograph, WS-2017=Submitted by the UTC for IRG Working Set 2017, X=No action taken, (UTC-\d{5})|(UCI-\d{5})=Duplicate entries deprecated in favor of other entries.
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
   * A Unicode code point. If the status is V (Field 1), the code point specifies the encoded character for which this entry is a variant. Otherwise, the code point specifies the encoded character for this entry.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/USourceData.txt#L30-L33
   */
  code_point: string;

  /**
   * Radical-stroke count.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/USourceData.txt#L34
   */
  radical_stroke_count: string;

  /**
   * Virtual KangXi dictionary position.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/USourceData.txt#L35
   */
  virtual_kang_xi_position: string;

  /**
   * Ideographic Description Sequence (IDS), if possible.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/USourceData.txt#L36
   */
  ids: string;

  /**
   * Source(s).
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/USourceData.txt#L37
   */
  sources: string;

  /**
   * General comments.
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
