/**
 * Parsed row from `StandardizedVariants.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/StandardizedVariants.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/StandardizedVariants.txt#L38-L43
 *
 * @unicodeVersion 17
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:42:37.357Z
 */
export interface StandardizedVariants {
  /**
   * the variation sequence
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/StandardizedVariants.txt#L38-L40
   */
  variation_sequence: string;

  /**
   * the description of the desired appearance
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/StandardizedVariants.txt#L38-L40
   */
  description: string;

  /**
   * where the appearance is only different in particular shaping environments. The possible values are: isolate, initial, medial, final. If more than one is present, there are spaces between them.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/StandardizedVariants.txt#L38-L43
   */
  shaping_environments: string;
}

export const STANDARDIZED_VARIANTS_FIELDS = ["variation_sequence", "description", "shaping_environments"];
