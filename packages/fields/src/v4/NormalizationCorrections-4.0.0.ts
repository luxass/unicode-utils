/**
 * Parsed row from `NormalizationCorrections-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/NormalizationCorrections-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/NormalizationCorrections-4.0.0.txt#L29-L33
 *
 * @unicodeVersion 4
 * @fields 4
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:30:29.796Z
 */
export interface NormalizationCorrections400 {
  /**
   * Unicode code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/NormalizationCorrections-4.0.0.txt#L29
   */
  unicode_code_point: string;

  /**
   * Original (erroneous) decomposition.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/NormalizationCorrections-4.0.0.txt#L30
   */
  original_decomposition: string;

  /**
   * Corrected decomposition.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/NormalizationCorrections-4.0.0.txt#L31
   */
  corrected_decomposition: string;

  /**
   * Version of Unicode for which the correction was entered into UnicodeData.txt, in n.n.n format.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/NormalizationCorrections-4.0.0.txt#L32-L33
   */
  version: string;
}

export const NORMALIZATION_CORRECTIONS_400_FIELDS = [
  "unicode_code_point",
  "original_decomposition",
  "corrected_decomposition",
  "version",
];
