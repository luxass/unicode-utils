/**
 * Parsed row from `emoji/emoji-variation-sequences.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/emoji/emoji-variation-sequences.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr51/
 *
 * @unicodeVersion 15.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:29.056Z
 */
export interface EmojiEmojiVariationSequences {
  /**
   * Base emoji character for the variation sequence.
   *
   * @source https://ucdjs.dev/reports/tr51/
   */
  base: string;

  /**
   * Variation selector: VS16 (text) or VS17 (emoji).
   *
   * @source https://ucdjs.dev/reports/tr51/
   */
  vs: "VS16" | "VS17";
}

export const EMOJI_EMOJI_VARIATION_SEQUENCES_FIELDS = ["base", "vs"];
