/**
 * Parsed row from `EmojiSources.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/EmojiSources.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/EmojiSources.txt#L26-L29
 *
 * @unicodeVersion 6.2
 * @fields 4
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:50:26.904Z
 */
export interface EmojiSources {
  /**
   * Unicode code point or sequence.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/EmojiSources.txt#L26
   */
  unicode_code_point_or_sequence: string;

  /**
   * DoCoMo Shift-JIS code.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/EmojiSources.txt#L27
   */
  docomo_shift_jis_code: string;

  /**
   * KDDI Shift-JIS code.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/EmojiSources.txt#L28
   */
  kddi_shift_jis_code: string;

  /**
   * SoftBank Shift-JIS code.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/EmojiSources.txt#L29
   */
  softbank_shift_jis_code: string;
}

export const EMOJI_SOURCES_FIELDS = ["unicode_code_point_or_sequence", "docomo_shift_jis_code", "kddi_shift_jis_code", "softbank_shift_jis_code"];
