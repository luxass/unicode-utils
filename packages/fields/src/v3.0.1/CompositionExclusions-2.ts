/**
 * Parsed row from `CompositionExclusions-2.txt` (Unicode 3.0.1).
 *
 * @see https://unicode.org/Public/3.0-Update1/CompositionExclusions-2.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 3.0.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:31:52.310Z
 */
export interface CompositionExclusions2 {
  /**
   * Code point or code point range (hexadecimal notation) that is excluded from composition.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  code_point_range: string;

  /**
   * Primary, Singleton, NonStarter, or NotNFD.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  exclusion_type: "Primary" | "Singleton" | "NonStarter" | "NotNFD";
}

export const COMPOSITION_EXCLUSIONS_2_FIELDS = ["code_point_range", "exclusion_type"];
