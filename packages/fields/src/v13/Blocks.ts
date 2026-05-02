/**
 * Parsed row from `Blocks.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/Blocks.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/Blocks.txt#L10
 *
 * @unicodeVersion 13
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:43:38.991Z
 */
export interface Blocks {
  /**
   * ..End Code; Block Name.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/Blocks.txt#L10
   */
  start_code: string;

  /**
   * Start Code..End Code; Block Name.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/Blocks.txt#L10
   */
  end_code: string;

  /**
   * Name of the Unicode block.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/Blocks.txt#L10
   */
  block_name: string;
}

export const BLOCKS_FIELDS = ["start_code", "end_code", "block_name"];
