/**
 * Parsed row from `Blocks.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/Blocks.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/Blocks.txt#L10
 *
 * @unicodeVersion 8
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:04.564Z
 */
export interface Blocks {
  /**
   * Start Code of the Unicode block range.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/Blocks.txt#L10
   */
  start_code: string;

  /**
   * End Code of the Unicode block range.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/Blocks.txt#L10
   */
  end_code: string;

  /**
   * Block Name.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/Blocks.txt#L10
   */
  block_name: string;
}

export const BLOCKS_FIELDS = ["start_code", "end_code", "block_name"];
