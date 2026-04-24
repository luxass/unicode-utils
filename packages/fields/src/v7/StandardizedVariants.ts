/**
 * Parsed row from `StandardizedVariants.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/StandardizedVariants.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/StandardizedVariants.txt#L30-L34
 *
 * @unicodeVersion 7
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:15.455Z
 */
export interface StandardizedVariants {
  /**
   * the variation sequence
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/StandardizedVariants.txt#L30
   */
  variation_sequence: string;

  /**
   * the description of the desired appearance
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/StandardizedVariants.txt#L31
   */
  description: string;

  /**
   * where the appearance is only different in particular shaping environments; possible values: isolate, initial, medial, final (space-separated if multiple)
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/StandardizedVariants.txt#L32-L34
   */
  shaping_environments: string[];
}

export const STANDARDIZED_VARIANTS_FIELDS = [
  "variation_sequence",
  "description",
  "shaping_environments",
];
