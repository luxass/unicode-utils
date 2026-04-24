/**
 * Parsed row from `emoji/emoji-variation-sequences.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/emoji/emoji-variation-sequences.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr51/
 *
 * @unicodeVersion 17
 * @fields 3
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:49:42.666Z
 */
export interface EmojiEmojiVariationSequences {
  /**
   * Base character code point of the variation sequence.
   *
   * @source https://ucdjs.dev/reports/tr51/
   */
  base_code_point: string;

  /**
   * Variation selector code point (U+FE0E or U+FE0F) used in the sequence.
   *
   * @source https://ucdjs.dev/reports/tr51/
   */
  variation_selector: string;

  /**
   * Recommended presentation style for the variation sequence.
   *
   * @source https://ucdjs.dev/reports/tr51/
   */
  presentation: "Emoji" | "Text";
}

export const EMOJI_EMOJI_VARIATION_SEQUENCES_FIELDS = [
  "base_code_point",
  "variation_selector",
  "presentation",
];
