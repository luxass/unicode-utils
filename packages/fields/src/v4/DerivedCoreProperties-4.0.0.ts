/**
 * Parsed row from `DerivedCoreProperties-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/DerivedCoreProperties-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/DerivedCoreProperties-4.0.0.txt#L13-L14
 *
 * @unicodeVersion 4
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:49.041Z
 */
export interface DerivedCoreProperties400 {
  /**
   * Derived Property: Math Generated from: Sm + Other_Math.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/DerivedCoreProperties-4.0.0.txt#L13-L14
   */
  codepoint_range: string;

  /**
   * Derived Property: Math, generated from Sm + Other_Math.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/DerivedCoreProperties-4.0.0.txt#L13-L14
   */
  math: boolean;
}

export const DERIVED_CORE_PROPERTIES_400_FIELDS = ["codepoint_range", "math"];
