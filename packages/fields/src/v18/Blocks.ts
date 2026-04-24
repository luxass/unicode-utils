/**
 * Parsed row from `Blocks.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/Blocks.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/Blocks.txt#L11
 *
 * @unicodeVersion 18
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:05.772Z
 */
export interface Blocks {
  /**
   * Start Code of the range.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/Blocks.txt#L11
   */
  start_code: string;

  /**
   * End Code of the range.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/Blocks.txt#L11
   */
  end_code: string;

  /**
   * Block Name.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/Blocks.txt#L11
   */
  block_name: string;
}

export const BLOCKS_FIELDS = ["start_code", "end_code", "block_name"];
