/**
 * Parsed row from `emoji/emoji-variation-sequences.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/emoji/emoji-variation-sequences.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr51/
 *
 * @unicodeVersion 13
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:50:55.045Z
 */
export interface EmojiEmojiVariationSequences {
  /**
   * Code point or code point sequence forming the emoji variation sequence.
   *
   * @source https://ucdjs.dev/reports/tr51/
   */
  sequence: string;

  /**
   * Indicates that the preceding sequence uses an emoji variation selector.
   *
   * @source https://ucdjs.dev/reports/tr51/
   */
  emoji_vs: "Emoji_VS";
}

export const EMOJI_EMOJI_VARIATION_SEQUENCES_FIELDS = ["sequence", "emoji_vs"];
