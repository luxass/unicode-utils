/**
 * Parsed row from `DerivedCombiningClass-3.1.0.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/DerivedCombiningClass-3.1.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:56:09.807Z
 */
export interface DerivedCombiningClass310 {
  /**
   * Code point or range of code points.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Canonical Combining Class value name (e.g. NotReordered).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  combining_class: string;
}

export const DERIVED_COMBINING_CLASS_310_FIELDS = ["codepoint_range", "combining_class"];
