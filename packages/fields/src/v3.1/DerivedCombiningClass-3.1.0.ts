/**
 * Parsed row from `DerivedCombiningClass-3.1.0.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/DerivedCombiningClass-3.1.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedCombiningClass-3.1.0.txt#L13-L16
 *
 * @unicodeVersion 3.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:54:02.882Z
 */
export interface DerivedCombiningClass310 {
  /**
   * Unicode code point range listing characters with Canonical_Combining_Class=0.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedCombiningClass-3.1.0.txt#L13-L16
   */
  code_point_range: string;

  /**
   * NotReordered.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedCombiningClass-3.1.0.txt#L16
   */
  ccc_value: "NotReordered";
}

export const DERIVED_COMBINING_CLASS_310_FIELDS = ["code_point_range", "ccc_value"];
