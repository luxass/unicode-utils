/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 12
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:47:00.472Z
 */
export interface DerivedNormalizationProps {
  /**
   * Unicode code point (hex notation) for the source of the FC_NFKC_Closure mapping.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Space-delimited list of one or more Unicode code points (hex notation) that constitute the FC_NFKC_Closure for the source code point.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  closures: string[];
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["code_point", "closures"];
