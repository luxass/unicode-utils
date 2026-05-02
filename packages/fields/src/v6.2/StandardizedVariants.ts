/**
 * Parsed row from `StandardizedVariants.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/StandardizedVariants.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/StandardizedVariants.txt#L30-L34
 *
 * @unicodeVersion 6.2
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:52:07.287Z
 */
export interface StandardizedVariants {
  /**
   * the variation sequence
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/StandardizedVariants.txt#L30
   */
  variation_sequence: string;

  /**
   * the description of the desired appearance
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/StandardizedVariants.txt#L31
   */
  description: string;

  /**
   * where the appearance is only different in particular shaping environments. The possible values are: isolate, initial, medial, final. If more than one is present, there are spaces between them.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/StandardizedVariants.txt#L32-L34
   */
  shaping_environments: "isolate" | "initial" | "medial" | "final" | (string & {});
}

export const STANDARDIZED_VARIANTS_FIELDS = ["variation_sequence", "description", "shaping_environments"];
