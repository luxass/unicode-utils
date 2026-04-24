/**
 * Parsed row from `emoji/emoji-data.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/emoji/emoji-data.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/emoji/emoji-data.txt#L13
 *
 * @unicodeVersion 13
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:17:43.024Z
 */
export interface EmojiEmojiData {
  /**
   * Unicode codepoint(s).
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/emoji/emoji-data.txt#L13
   */
  codepoints: string;

  /**
   * Property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/emoji/emoji-data.txt#L13
   */
  property: string;

  /**
   * Comments.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/emoji/emoji-data.txt#L13
   */
  comments: string;
}

export const EMOJI_EMOJI_DATA_FIELDS = ["codepoints", "property", "comments"];
