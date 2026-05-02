/**
 * Parsed row from `USourceData.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/USourceData.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/USourceData.txt#L12-L35
 *
 * @unicodeVersion 9
 * @fields 7
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:49:27.547Z
 */
export interface USourceData {
  /**
   * The U-source ID
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/USourceData.txt#L12
   */
  u_source_id: string;

  /**
   * Text indicating the ideograph's status (C: Included in Extension C, D: Included in Extension D, E: Included in Extension E, F: Submitted for Extension F, H: Submitted by the UTC for IRG Working Set 2015, N: Planned to be submitted for a future extension, U: Encoded, UNC-2013: Included in the UTC's 2013 "Urgently Needed Characters" proposal, UNC-2015: Included in the UTC's 2015 "Urgently Needed Characters" proposal, UK-2015: Submitted by the UK for IRG Working Set 2015, V: Variant of an encoded character, W: Not to encode, X: No action taken, (UTC-\d{5})|(UCI-\d{5}): Duplicate entries deprecated in favor of other entries; the status value is the identifier of the non-deprecated character)
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/USourceData.txt#L13-L27
   */
  status: "C" | "D" | "E" | "F" | "H" | "N" | "U" | "UNC-2013" | "UNC-2015" | "UK-2015" | "V" | "W" | "X" | (string & {});

  /**
   * A Unicode code point. If the status is V (Field 1), the code point in Field 2 specifies the encoded character for which this entry is a variant. Otherwise, the code point specifies the encoded character for this entry.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/USourceData.txt#L28-L31
   */
  unicode_code_point: string;

  /**
   * Radical-stroke count
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/USourceData.txt#L32
   */
  radical_stroke_count: string;

  /**
   * Virtual KangXi dictionary position
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/USourceData.txt#L33
   */
  virtual_kang_xi_dictionary_position: string;

  /**
   * Ideographic Description Sequence (IDS), if possible
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/USourceData.txt#L34
   */
  ideographic_description_sequence: string;

  /**
   * Source(s)
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/USourceData.txt#L35
   */
  sources: string;
}

export const U_SOURCE_DATA_FIELDS = ["u_source_id", "status", "unicode_code_point", "radical_stroke_count", "virtual_kang_xi_dictionary_position", "ideographic_description_sequence", "sources"];
