/**
 * Parsed row from `emoji/emoji-variation-sequences.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/emoji/emoji-variation-sequences.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr51/
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:16:08.746Z
 */
export interface EmojiEmojiVariationSequences {
  /**
   * Two space-separated hex values for the base character and variation selector-16 (U+FE0F) or variation selector-15 (U+FE0E).
   *
   * @source https://ucdjs.dev/reports/tr51/
   */
  sequence_codes: string;

  /**
   * The type “EVS”.
   *
   * @source https://ucdjs.dev/reports/tr51/
   */
  evs_type: "EVS";
}

export const EMOJI_EMOJI_VARIATION_SEQUENCES_FIELDS = ["sequence_codes", "evs_type"];
