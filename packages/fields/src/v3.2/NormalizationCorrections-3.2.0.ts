/**
 * Parsed row from `NormalizationCorrections-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/NormalizationCorrections-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/NormalizationCorrections-3.2.0.txt#L28-L32
 *
 * @unicodeVersion 3.2
 * @fields 4
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:58:15.006Z
 */
export interface NormalizationCorrections320 {
  /**
   * Unicode code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/NormalizationCorrections-3.2.0.txt#L28
   */
  unicode_code_point: string;

  /**
   * Original (erroneous) decomposition.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/NormalizationCorrections-3.2.0.txt#L29
   */
  original_decomposition: string;

  /**
   * Corrected decomposition.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/NormalizationCorrections-3.2.0.txt#L30
   */
  corrected_decomposition: string;

  /**
   * Version of Unicode for which the correction was entered into UnicodeData.txt, in n.n.n format.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/NormalizationCorrections-3.2.0.txt#L31-L32
   */
  unicode_version: string;
}

export const NORMALIZATION_CORRECTIONS_320_FIELDS = ["unicode_code_point", "original_decomposition", "corrected_decomposition", "unicode_version"];
