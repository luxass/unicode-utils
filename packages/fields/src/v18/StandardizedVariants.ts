/**
 * Parsed row from `StandardizedVariants.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/StandardizedVariants.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/StandardizedVariants.txt#L39-L43
 *
 * @unicodeVersion 18
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:49.742Z
 */
export interface StandardizedVariants {
  /**
   * the variation sequence
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/StandardizedVariants.txt#L39
   */
  variation_sequence: string;

  /**
   * the description of the desired appearance
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/StandardizedVariants.txt#L40
   */
  description: string;

  /**
   * where the appearance is only different in particular shaping environments; possible values: isolate, initial, medial, final; multiple values separated by spaces
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/StandardizedVariants.txt#L41-L43
   */
  shaping_environments: string[];
}

export const STANDARDIZED_VARIANTS_FIELDS = ["variation_sequence", "description", "shaping_environments"];
