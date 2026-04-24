/**
 * Parsed row from `StandardizedVariants.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/StandardizedVariants.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/StandardizedVariants.txt#L38-L42
 *
 * @unicodeVersion 12
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:28.257Z
 */
export interface StandardizedVariants {
  /**
   * the variation sequence
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/StandardizedVariants.txt#L38
   */
  variation_sequence: string;

  /**
   * the description of the desired appearance
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/StandardizedVariants.txt#L39
   */
  description: string;

  /**
   * where the appearance is only different in particular shaping environments; possible values: isolate, initial, medial, final; multiple values separated by spaces
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/StandardizedVariants.txt#L40-L42
   */
  shaping_environments: "isolate" | "initial" | "medial" | "final";
}

export const STANDARDIZED_VARIANTS_FIELDS = [
  "variation_sequence",
  "description",
  "shaping_environments",
];
