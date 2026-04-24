/**
 * Parsed row from `EmojiSources.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/EmojiSources.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/EmojiSources.txt#L23-L26
 *
 * @unicodeVersion 16
 * @fields 4
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:41.884Z
 */
export interface EmojiSources {
  /**
   * Unicode code point or sequence.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/EmojiSources.txt#L23
   */
  unicode_code_point_or_sequence: string;

  /**
   * DoCoMo Shift-JIS code.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/EmojiSources.txt#L24
   */
  docomo_shift_jis_code: string;

  /**
   * KDDI Shift-JIS code.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/EmojiSources.txt#L25
   */
  kddi_shift_jis_code: string;

  /**
   * SoftBank Shift-JIS code.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/EmojiSources.txt#L26
   */
  softbank_shift_jis_code: string;
}

export const EMOJI_SOURCES_FIELDS = ["unicode_code_point_or_sequence", "docomo_shift_jis_code", "kddi_shift_jis_code", "softbank_shift_jis_code"];
