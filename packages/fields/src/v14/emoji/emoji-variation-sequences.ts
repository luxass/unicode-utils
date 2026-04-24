/**
 * Parsed row from `emoji/emoji-variation-sequences.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/emoji/emoji-variation-sequences.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr51/
 *
 * @unicodeVersion 14
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:49:18.117Z
 */
export interface EmojiEmojiVariationSequences {
  /**
   * Base character code point for the emoji variation sequence.
   *
   * @source https://ucdjs.dev/reports/tr51/
   */
  base_codepoint: string;

  /**
   * Variation selector code point (FE0F or FE0E).
   *
   * @source https://ucdjs.dev/reports/tr51/
   */
  variation_selector: string;

  /**
   * Property alias for the variation selector.
   *
   * @source https://ucdjs.dev/reports/tr51/
   */
  property: "Emoji_Variation_Selector-16" | "Emoji_Variation_Selector-17";
}

export const EMOJI_EMOJI_VARIATION_SEQUENCES_FIELDS = [
  "base_codepoint",
  "variation_selector",
  "property",
];
