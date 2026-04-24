/**
 * Parsed row from `StandardizedVariants.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/StandardizedVariants.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/StandardizedVariants.txt#L22-L26
 *
 * @unicodeVersion 4.1
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:30:37.660Z
 */
export interface StandardizedVariants {
  /**
   * the variation sequence
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/StandardizedVariants.txt#L22
   */
  variation_sequence: string;

  /**
   * the description of the desired appearance
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/StandardizedVariants.txt#L23
   */
  description: string;

  /**
   * where the appearance is only different in particular shaping environments; possible values are isolate, initial, medial, final; if more than one, spaces between them
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/StandardizedVariants.txt#L24-L26
   */
  shaping_environments: "isolate" | "initial" | "medial" | "final" | (string & {});
}

export const STANDARDIZED_VARIANTS_FIELDS = [
  "variation_sequence",
  "description",
  "shaping_environments",
];
