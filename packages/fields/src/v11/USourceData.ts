/**
 * Parsed row from `USourceData.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/USourceData.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/USourceData.txt#L12-L36
 *
 * @unicodeVersion 11
 * @fields 7
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:49:35.571Z
 */
export interface USourceData {
  /**
   * The U-source ID.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/USourceData.txt#L12
   */
  u_source_id: string;

  /**
   * Text indicating the ideograph's status (C: Encoded in Extension C; D: Encoded in Extension D; E: Encoded in Extension E; F: Encoded in Extension F; G: Submitted by the UTC for IRG Working Set 2015; N: Planned to be submitted for a future extension; U: Encoded; UNC-2013: Included in the UTC's 2013 "Urgently Needed Characters" proposal; UNC-2015: Included in the UTC's 2015 "Urgently Needed Characters" proposal; UK-2015: Submitted by the UK for IRG Working Set 2015; V: Variant of an encoded character; W: Not suitable for encoding as a CJK Unified Ideograph; WS-2017: Submitted by the UTC for IRG Working Set 2017; X: No action taken; (UTC-\d{5})|(UCI-\d{5}): Duplicate entries deprecated in favor of other entries; the status value is the identifier of the non-deprecated character).
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/USourceData.txt#L13-L28
   */
  status: "C" | "D" | "E" | "F" | "G" | "N" | "U" | "UNC-2013" | "UNC-2015" | "UK-2015" | "V" | "W" | "WS-2017" | "X" | (string & {});

  /**
   * A Unicode code point. If the status is V (Field 1), the code point in Field 2 specifies the encoded character for which this entry is a variant. Otherwise, the code point specifies the encoded character for this entry.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/USourceData.txt#L29-L32
   */
  unicode_code_point: string;

  /**
   * Radical-stroke count.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/USourceData.txt#L33
   */
  radical_stroke_count: string;

  /**
   * Virtual KangXi dictionary position.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/USourceData.txt#L34
   */
  virtual_kang_xi_position: string;

  /**
   * Ideographic Description Sequence (IDS), if possible.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/USourceData.txt#L35
   */
  ids: string;

  /**
   * Source(s).
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/USourceData.txt#L36
   */
  sources: string;
}

export const U_SOURCE_DATA_FIELDS = ["u_source_id", "status", "unicode_code_point", "radical_stroke_count", "virtual_kang_xi_position", "ids", "sources"];
