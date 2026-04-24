/**
 * Parsed row from `DerivedCoreProperties.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/DerivedCoreProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 7
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:03.554Z
 */
export interface DerivedCoreProperties {
  /**
   * Code point range in the standard UCD format.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Derived Math property: characters in categories Sm + Other_Math.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  math: "Y" | "N";

  /**
   * Optional comment field.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  comment: string;
}

export const DERIVED_CORE_PROPERTIES_FIELDS = ["codepoint_range", "math", "comment"];
