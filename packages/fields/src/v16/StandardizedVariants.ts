/**
 * Parsed row from `StandardizedVariants.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/StandardizedVariants.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/StandardizedVariants.txt#L39-L43
 *
 * @unicodeVersion 16
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:43.170Z
 */
export interface StandardizedVariants {
  /**
   * the variation sequence
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/StandardizedVariants.txt#L39
   */
  variation_sequence: string;

  /**
   * the description of the desired appearance
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/StandardizedVariants.txt#L40
   */
  description: string;

  /**
   * where the appearance is only different in particular shaping environments this field lists them. The possible values are: isolate, initial, medial, final. If more than one is present, there are spaces between them.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/StandardizedVariants.txt#L41-L43
   */
  shaping_environments: string;
}

export const STANDARDIZED_VARIANTS_FIELDS = ["variation_sequence", "description", "shaping_environments"];
