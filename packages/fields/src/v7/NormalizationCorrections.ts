/**
 * Parsed row from `NormalizationCorrections.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/NormalizationCorrections.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/NormalizationCorrections.txt#L33-L37
 *
 * @unicodeVersion 7
 * @fields 4
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:50:08.220Z
 */
export interface NormalizationCorrections {
  /**
   * Unicode code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/NormalizationCorrections.txt#L33
   */
  code_point: string;

  /**
   * Original (erroneous) decomposition.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/NormalizationCorrections.txt#L34
   */
  original_decomposition: string;

  /**
   * Corrected decomposition.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/NormalizationCorrections.txt#L35
   */
  corrected_decomposition: string;

  /**
   * Version of Unicode for which the correction was entered into UnicodeData.txt, in n.n.n format.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/NormalizationCorrections.txt#L36-L37
   */
  version: string;
}

export const NORMALIZATION_CORRECTIONS_FIELDS = ["code_point", "original_decomposition", "corrected_decomposition", "version"];
