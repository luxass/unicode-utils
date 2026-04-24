/**
 * Parsed row from `StandardizedVariants-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/StandardizedVariants-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/StandardizedVariants-4.0.0.txt#L14-L18
 *
 * @unicodeVersion 4
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:30:33.818Z
 */
export interface StandardizedVariants400 {
  /**
   * the variation sequence
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/StandardizedVariants-4.0.0.txt#L14
   */
  variation_sequence: string;

  /**
   * the description of the desired appearance
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/StandardizedVariants-4.0.0.txt#L15
   */
  description: string;

  /**
   * where the appearance is only different in particular shaping environments; possible values: isolate, initial, medial, final (space-separated)
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/StandardizedVariants-4.0.0.txt#L16-L18
   */
  shaping_environments: string[];
}

export const STANDARDIZED_VARIANTS_400_FIELDS = [
  "variation_sequence",
  "description",
  "shaping_environments",
];
