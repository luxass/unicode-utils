/**
 * Parsed row from `USourceData.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/USourceData.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/USourceData.txt#L15-L37
 *
 * @unicodeVersion 10
 * @fields 7
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:47:32.845Z
 */
export interface USourceData {
  /**
   * The U-source ID
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/USourceData.txt#L15
   */
  u_source_id: string;

  /**
   * Text indicating the ideograph's status with specific codes: C=Included in Extension C, D=Extension D, E=Extension E, F=Extension F, G=Submitted by UTC for IRG WS 2015, N=Planned for future, U=Encoded, V=Variant, W=Not to encode, X=No action, UNC-2013/2015=Urgently Needed Characters, UK-2015=UK submission; also (UTC-\d{5})|(UCI-\d{5}) for deprecated duplicates
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/USourceData.txt#L16-L28
   */
  status: "C" | "D" | "E" | "F" | "G" | "N" | "U" | "V" | "W" | "X" | "UNC-2013" | "UNC-2015" | "UK-2015" | (string & {});

  /**
   * A Unicode code point; for V status specifies the encoded variant character, otherwise the encoded character for this entry
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/USourceData.txt#L29-L33
   */
  unicode_code_point: string;

  /**
   * Radical-stroke count
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/USourceData.txt#L34
   */
  radical_stroke_count: string;

  /**
   * Virtual KangXi dictionary position
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/USourceData.txt#L35
   */
  virtual_kang_xi_position: string;

  /**
   * Ideographic Description Sequence (IDS), if possible
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/USourceData.txt#L36
   */
  ideographic_description_sequence: string;

  /**
   * Source(s)
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/USourceData.txt#L37
   */
  sources: string;
}

export const U_SOURCE_DATA_FIELDS = ["u_source_id", "status", "unicode_code_point", "radical_stroke_count", "virtual_kang_xi_position", "ideographic_description_sequence", "sources"];
