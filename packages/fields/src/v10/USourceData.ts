/**
 * Parsed row from `USourceData.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/USourceData.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/USourceData.txt#L17-L40
 *
 * @unicodeVersion 10
 * @fields 7
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:30:48.525Z
 */
export interface USourceData {
  /**
   * The U-source ID
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/USourceData.txt#L17
   */
  u_source_id: string;

  /**
   * Text indicating the ideograph's status with specific values listed.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/USourceData.txt#L18-L30
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
    | "X"
    | "(UTC-\d{5})|(UCI-\d{5})"
    | (string & {});

  /**
   * A Unicode code point specifying the encoded character or variant target.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/USourceData.txt#L31-L36
   */
  unicode_code_point: string;

  /**
   * Radical-stroke count
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/USourceData.txt#L37
   */
  radical_stroke_count: string;

  /**
   * Virtual KangXi dictionary position
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/USourceData.txt#L38
   */
  virtual_kang_xi_dictionary_position: string;

  /**
   * Ideographic Description Sequence (IDS), if possible
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/USourceData.txt#L39
   */
  ideographic_description_sequence: string;

  /**
   * Source(s)
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/USourceData.txt#L40
   */
  sources: string;
}

export const U_SOURCE_DATA_FIELDS = [
  "u_source_id",
  "status",
  "unicode_code_point",
  "radical_stroke_count",
  "virtual_kang_xi_dictionary_position",
  "ideographic_description_sequence",
  "sources",
];
