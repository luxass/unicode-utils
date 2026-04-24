/**
 * Parsed row from `StandardizedVariants.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/StandardizedVariants.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/StandardizedVariants.txt#L37-L42
 *
 * @unicodeVersion 12.1
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:29.588Z
 */
export interface StandardizedVariants {
  /**
   * the variation sequence
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/StandardizedVariants.txt#L37-L38
   */
  variation_sequence: string;

  /**
   * the description of the desired appearance
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/StandardizedVariants.txt#L39
   */
  description: string;

  /**
   * where the appearance is only different in particular shaping environments; possible values are: isolate, initial, medial, final. If more than one is present, there are spaces between them.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/StandardizedVariants.txt#L40-L42
   */
  shaping_environments: "isolate" | "initial" | "medial" | "final" | (string & {});
}

export const STANDARDIZED_VARIANTS_FIELDS = [
  "variation_sequence",
  "description",
  "shaping_environments",
];
