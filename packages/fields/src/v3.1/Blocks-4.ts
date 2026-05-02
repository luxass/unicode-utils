/**
 * Parsed row from `Blocks-4.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/Blocks-4.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update/Blocks-4.txt#L1
 *
 * @unicodeVersion 3.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:53:58.973Z
 */
export interface Blocks4 {
  /**
   * Unicode code point range from Start Code to End Code.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/Blocks-4.txt#L1
   */
  code_range: string;

  /**
   * Name of the Unicode block.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/Blocks-4.txt#L1
   */
  block_name: string;
}

export const BLOCKS_4_FIELDS = ["code_range", "block_name"];
