/**
 * Parsed row from `EmojiSources.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/EmojiSources.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/EmojiSources.txt#L22-L25
 *
 * @unicodeVersion 13
 * @fields 4
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:17:57.298Z
 */
export interface EmojiSources {
  /**
   * Unicode code point or sequence.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/EmojiSources.txt#L22
   */
  unicode: string;

  /**
   * DoCoMo Shift-JIS code.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/EmojiSources.txt#L23
   */
  docomo_shift_jis: string;

  /**
   * KDDI Shift-JIS code.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/EmojiSources.txt#L24
   */
  kddi_shift_jis: string;

  /**
   * SoftBank Shift-JIS code.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/EmojiSources.txt#L25
   */
  softbank_shift_jis: string;
}

export const EMOJI_SOURCES_FIELDS = [
  "unicode",
  "docomo_shift_jis",
  "kddi_shift_jis",
  "softbank_shift_jis",
];
