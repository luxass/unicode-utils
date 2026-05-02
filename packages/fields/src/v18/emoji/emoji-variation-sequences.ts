/**
 * Parsed row from `emoji/emoji-variation-sequences.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/emoji/emoji-variation-sequences.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr51/
 *
 * @unicodeVersion 18
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:42:16.164Z
 */
export interface EmojiEmojiVariationSequences {
  /**
   * Range or single code point of the emoji base characters that combine with a variation selector.
   *
   * @source https://ucdjs.dev/reports/tr51/
   */
  emoji_base_range: string;

  /**
   * Hexadecimal code point of the variation selector (U+FE0F VS16 for emoji presentation or U+FE1E VS17 for text presentation).
   *
   * @source https://ucdjs.dev/reports/tr51/
   */
  variation_selector: "FE0F" | "FE1E";
}

export const EMOJI_EMOJI_VARIATION_SEQUENCES_FIELDS = ["emoji_base_range", "variation_selector"];
