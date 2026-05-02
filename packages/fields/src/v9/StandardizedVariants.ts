/**
 * Parsed row from `StandardizedVariants.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/StandardizedVariants.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/StandardizedVariants.txt#L28-L33
 *
 * @unicodeVersion 9
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:50:12.232Z
 */
export interface StandardizedVariants {
  /**
   * the variation sequence
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/StandardizedVariants.txt#L28-L29
   */
  variation_sequence: string;

  /**
   * the description of the desired appearance
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/StandardizedVariants.txt#L30
   */
  description: string;

  /**
   * where the appearance is only different in particular shaping environments; possible values: isolate, initial, medial, final (space-separated if multiple)
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/StandardizedVariants.txt#L31-L33
   */
  shaping_environments: "isolate" | "initial" | "medial" | "final" | (string & {});
}

export const STANDARDIZED_VARIANTS_FIELDS = ["variation_sequence", "description", "shaping_environments"];
