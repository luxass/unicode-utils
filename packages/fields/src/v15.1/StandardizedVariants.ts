/**
 * Parsed row from `StandardizedVariants.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/StandardizedVariants.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/StandardizedVariants.txt#L38-L42
 *
 * @unicodeVersion 15.1
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:34.898Z
 */
export interface StandardizedVariants {
  /**
   * the variation sequence
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/StandardizedVariants.txt#L38
   */
  variation_sequence: string;

  /**
   * the description of the desired appearance
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/StandardizedVariants.txt#L39
   */
  description: string;

  /**
   * where the appearance is only different in particular shaping environments; possible values: isolate, initial, medial, final (space-separated if multiple)
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/StandardizedVariants.txt#L40-L42
   */
  shaping_environments: string[];
}

export const STANDARDIZED_VARIANTS_FIELDS = [
  "variation_sequence",
  "description",
  "shaping_environments",
];
