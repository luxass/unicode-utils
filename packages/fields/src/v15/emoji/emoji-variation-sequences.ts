/**
 * Parsed row from `emoji/emoji-variation-sequences.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/emoji/emoji-variation-sequences.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr51/
 *
 * @unicodeVersion 15
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:49:18.815Z
 */
export interface EmojiEmojiVariationSequences {
  /**
   * Base character (a single code point or range).
   *
   * @source https://ucdjs.dev/reports/tr51/
   */
  base_codepoint: string;

  /**
   * Variation selector (VS15 or VS16).
   *
   * @source https://ucdjs.dev/reports/tr51/
   */
  variation_selector: "FE0E" | "FE0F";

  /**
   * Type of variation sequence (emoji or text presentation).
   *
   * @source https://ucdjs.dev/reports/tr51/
   */
  sequence_type: "emoji" | "text";
}

export const EMOJI_EMOJI_VARIATION_SEQUENCES_FIELDS = [
  "base_codepoint",
  "variation_selector",
  "sequence_type",
];
