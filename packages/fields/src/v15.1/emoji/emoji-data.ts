/**
 * Parsed row from `emoji/emoji-data.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/emoji/emoji-data.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/emoji/emoji-data.txt#L13
 *
 * @unicodeVersion 15.1
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:14:20.922Z
 */
export interface EmojiEmojiData {
  /**
   * Unicode codepoint(s).
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/emoji/emoji-data.txt#L13
   */
  codepoints: string;

  /**
   * Property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/emoji/emoji-data.txt#L13
   */
  property: string;

  /**
   * Comments.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/emoji/emoji-data.txt#L13
   */
  comments: string;
}

export const EMOJI_EMOJI_DATA_FIELDS = ["codepoints", "property", "comments"];
