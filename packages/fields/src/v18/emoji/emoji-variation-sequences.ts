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
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:25.796Z
 */
export interface EmojiEmojiVariationSequences {
  /**
   * Base emoji character for the variation sequence.
   *
   * @source https://ucdjs.dev/reports/tr51/
   */
  base: string;

  /**
   * Variation selector for emoji or text presentation.
   *
   * @source https://ucdjs.dev/reports/tr51/
   */
  variation_selector: "VS16" | "VS17";
}

export const EMOJI_EMOJI_VARIATION_SEQUENCES_FIELDS = ["base", "variation_selector"];
