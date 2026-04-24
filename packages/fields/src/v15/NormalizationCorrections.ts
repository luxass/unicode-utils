/**
 * Parsed row from `NormalizationCorrections.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/NormalizationCorrections.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/NormalizationCorrections.txt#L35-L39
 *
 * @unicodeVersion 15
 * @fields 4
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:28.663Z
 */
export interface NormalizationCorrections {
  /**
   * Unicode code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/NormalizationCorrections.txt#L35
   */
  code_point: string;

  /**
   * Original (erroneous) decomposition.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/NormalizationCorrections.txt#L36
   */
  original_decomposition: string;

  /**
   * Corrected decomposition.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/NormalizationCorrections.txt#L37
   */
  corrected_decomposition: string;

  /**
   * Version of Unicode for which the correction was entered into UnicodeData.txt, in n.n.n format.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/NormalizationCorrections.txt#L38-L39
   */
  version: string;
}

export const NORMALIZATION_CORRECTIONS_FIELDS = [
  "code_point",
  "original_decomposition",
  "corrected_decomposition",
  "version",
];
