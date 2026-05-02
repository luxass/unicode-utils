/**
 * Parsed row from `Blocks.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/Blocks.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/Blocks.txt#L10
 *
 * @unicodeVersion 12.1
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:45:00.415Z
 */
export interface Blocks {
  /**
   * ..End Code; Block Name.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/Blocks.txt#L10
   */
  start_code: string;

  /**
   * Start Code..End Code; Block Name.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/Blocks.txt#L10
   */
  end_code: string;

  /**
   * Block Name.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/Blocks.txt#L10
   */
  block_name: string;
}

export const BLOCKS_FIELDS = ["start_code", "end_code", "block_name"];
