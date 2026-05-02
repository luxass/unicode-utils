/**
 * Parsed row from `emoji/emoji-data.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/emoji/emoji-data.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/emoji/emoji-data.txt#L13
 *
 * @unicodeVersion 14
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:43:25.730Z
 */
export interface EmojiEmojiData {
  /**
   * Unicode codepoint(s).
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/emoji/emoji-data.txt#L13
   */
  codepoints: string;

  /**
   * <codepoint(s)> ; <property> <comments>.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/emoji/emoji-data.txt#L13
   */
  property: string;

  /**
   * Comments.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/emoji/emoji-data.txt#L13
   */
  comments: string;
}

export const EMOJI_EMOJI_DATA_FIELDS = ["codepoints", "property", "comments"];
