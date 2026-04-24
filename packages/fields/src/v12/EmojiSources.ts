/**
 * Parsed row from `EmojiSources.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/EmojiSources.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/EmojiSources.txt#L22-L25
 *
 * @unicodeVersion 12
 * @fields 4
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:22:06.943Z
 */
export interface EmojiSources {
  /**
   * Unicode code point or sequence.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/EmojiSources.txt#L22
   */
  unicode: string;

  /**
   * DoCoMo Shift-JIS code.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/EmojiSources.txt#L23
   */
  docomo_shift_jis_code: string;

  /**
   * KDDI Shift-JIS code.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/EmojiSources.txt#L24
   */
  kddi_shift_jis_code: string;

  /**
   * SoftBank Shift-JIS code.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/EmojiSources.txt#L25
   */
  softbank_shift_jis_code: string;
}

export const EMOJI_SOURCES_FIELDS = [
  "unicode",
  "docomo_shift_jis_code",
  "kddi_shift_jis_code",
  "softbank_shift_jis_code",
];
