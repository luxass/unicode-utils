/**
 * Parsed row from `NormalizationCorrections.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/NormalizationCorrections.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/NormalizationCorrections.txt#L35-L39
 *
 * @unicodeVersion 12
 * @fields 4
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:40.964Z
 */
export interface NormalizationCorrections {
  /**
   * Unicode code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/NormalizationCorrections.txt#L35
   */
  field_0: string;

  /**
   * Original (erroneous) decomposition.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/NormalizationCorrections.txt#L36
   */
  field_1: string;

  /**
   * Corrected decomposition.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/NormalizationCorrections.txt#L37
   */
  field_2: string;

  /**
   * Version of Unicode for which the correction was entered into UnicodeData.txt, in n.n.n format.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/NormalizationCorrections.txt#L38-L39
   */
  field_3: string;
}

export const NORMALIZATION_CORRECTIONS_FIELDS = ["field_0", "field_1", "field_2", "field_3"];
