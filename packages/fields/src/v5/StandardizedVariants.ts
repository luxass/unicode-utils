/**
 * Parsed row from `StandardizedVariants.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/StandardizedVariants.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/StandardizedVariants.txt#L22-L26
 *
 * @unicodeVersion 5
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:50.180Z
 */
export interface StandardizedVariants {
  /**
   * the variation sequence
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/StandardizedVariants.txt#L22
   */
  variation_sequence: string;

  /**
   * the description of the desired appearance
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/StandardizedVariants.txt#L23
   */
  description: string;

  /**
   * where the appearance is only different in particular shaping environments; possible values: isolate, initial, medial, final; multiple values separated by spaces
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/StandardizedVariants.txt#L24-L26
   */
  shaping_environments: string[];
}

export const STANDARDIZED_VARIANTS_FIELDS = [
  "variation_sequence",
  "description",
  "shaping_environments",
];
