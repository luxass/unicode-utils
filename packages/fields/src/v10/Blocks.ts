/**
 * Parsed row from `Blocks.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/Blocks.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/Blocks.txt#L10
 *
 * @unicodeVersion 10
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:45:59.726Z
 */
export interface Blocks {
  /**
   * ..End Code; Block Name.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/Blocks.txt#L10
   */
  start_code: string;

  /**
   * Start Code..End Code; Block Name.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/Blocks.txt#L10
   */
  end_code: string;

  /**
   * Block Name.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/Blocks.txt#L10
   */
  block_name: string;
}

export const BLOCKS_FIELDS = ["start_code", "end_code", "block_name"];
