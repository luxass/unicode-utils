/**
 * Parsed row from `EmojiSources.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/EmojiSources.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/EmojiSources.txt#L22-L25
 *
 * @unicodeVersion 10
 * @fields 4
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:46:06.360Z
 */
export interface EmojiSources {
  /**
   * Unicode code point or sequence.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/EmojiSources.txt#L22
   */
  unicode_code_point_or_sequence: string;

  /**
   * DoCoMo Shift-JIS code.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/EmojiSources.txt#L23
   */
  docomo_shift_jis_code: string;

  /**
   * KDDI Shift-JIS code.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/EmojiSources.txt#L24
   */
  kddi_shift_jis_code: string;

  /**
   * SoftBank Shift-JIS code.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/EmojiSources.txt#L25
   */
  softbank_shift_jis_code: string;
}

export const EMOJI_SOURCES_FIELDS = ["unicode_code_point_or_sequence", "docomo_shift_jis_code", "kddi_shift_jis_code", "softbank_shift_jis_code"];
