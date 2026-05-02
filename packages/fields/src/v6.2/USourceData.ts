/**
 * Parsed row from `USourceData.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/USourceData.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/USourceData.txt#L15-L34
 *
 * @unicodeVersion 6.2
 * @fields 7
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:51:49.918Z
 */
export interface USourceData {
  /**
   * The U-source ID
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/USourceData.txt#L15
   */
  u_source_id: string;

  /**
   * A letter indicating the ideograph's status: C=Included in Extension C, D=Included in Extension D, E=Included in Extension E, F=Submitted for Extension F, N=Planned to be submitted for a future extension, U=Encoded, V=Variant of an encoded character, W=Not to encode, X=No action taken
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/USourceData.txt#L16-L24
   */
  status: "C" | "D" | "E" | "F" | "N" | "U" | "V" | "W" | "X";

  /**
   * A Unicode code point. Status == C, the code point of the character; Status == D, the code point of the character; Status == E, the proposed code point of the character; Status == U, the code point of the character; Status == V, the code point of the character for which this is a variant; Empty otherwise
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/USourceData.txt#L25-L30
   */
  unicode_code_point: string;

  /**
   * Radical-stroke count
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/USourceData.txt#L31
   */
  radical_stroke_count: string;

  /**
   * Virtual KangXi dictionary position
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/USourceData.txt#L32
   */
  virtual_kang_xi_dictionary_position: string;

  /**
   * Ideographic Description Sequence (IDS), if possible
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/USourceData.txt#L33
   */
  ideographic_description_sequence: string;

  /**
   * Source(s)
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/USourceData.txt#L34
   */
  sources: string;
}

export const U_SOURCE_DATA_FIELDS = ["u_source_id", "status", "unicode_code_point", "radical_stroke_count", "virtual_kang_xi_dictionary_position", "ideographic_description_sequence", "sources"];
