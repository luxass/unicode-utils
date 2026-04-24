/**
 * Parsed row from `emoji/emoji-variation-sequences.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/emoji/emoji-variation-sequences.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr51/
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:49:18.161Z
 */
export interface EmojiEmojiVariationSequences {
  /**
   * Code point or range of code points for the base character that forms a variation sequence with an Emoji Variation Selector.
   *
   * @source https://ucdjs.dev/reports/tr51/
   */
  code_point_range: string;

  /**
   * The variation selector used in the emoji variation sequence (VS17 for text presentation or VS16 for emoji presentation).
   *
   * @source https://ucdjs.dev/reports/tr51/
   */
  variation_selector: "FE0E" | "FE0F";
}

export const EMOJI_EMOJI_VARIATION_SEQUENCES_FIELDS = ["code_point_range", "variation_selector"];
