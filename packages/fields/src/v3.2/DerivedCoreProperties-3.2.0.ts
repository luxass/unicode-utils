/**
 * Parsed row from `DerivedCoreProperties-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/DerivedCoreProperties-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/DerivedCoreProperties-3.2.0.txt#L13-L14
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:22.229Z
 */
export interface DerivedCoreProperties320 {
  /**
   * Code point range for the derived Math property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Derived Property: Math, generated from Sm + Other_Math.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/DerivedCoreProperties-3.2.0.txt#L13-L14
   */
  math: "Y" | "N";
}

export const DERIVED_CORE_PROPERTIES_320_FIELDS = ["codepoint_range", "math"];
