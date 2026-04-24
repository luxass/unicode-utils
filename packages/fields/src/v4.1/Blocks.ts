/**
 * Parsed row from `Blocks.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/Blocks.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/Blocks.txt#L13
 *
 * @unicodeVersion 4.1
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:29:39.561Z
 */
export interface Blocks {
  /**
   * Start Code of the Unicode block range.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/Blocks.txt#L13
   */
  start_code: string;

  /**
   * End Code of the Unicode block range.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/Blocks.txt#L13
   */
  end_code: string;

  /**
   * Block Name.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/Blocks.txt#L13
   */
  block_name: string;
}

export const BLOCKS_FIELDS = ["start_code", "end_code", "block_name"];
