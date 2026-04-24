/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/extracted/DerivedDecompositionType.txt#L11
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 4.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:29:49.445Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Unicode code point range (e.g. 0374..037A).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Decomposition type extracted from field 5 of UnicodeData.txt.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/extracted/DerivedDecompositionType.txt#L11
   */
  decomposition_type: "None" | "Canonical" | "Font" | "NoBreak" | (string & {});
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = [
  "code_point_range",
  "decomposition_type",
];
