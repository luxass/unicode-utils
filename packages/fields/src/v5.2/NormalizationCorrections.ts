/**
 * Parsed row from `NormalizationCorrections.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/NormalizationCorrections.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/NormalizationCorrections.txt#L33-L37
 *
 * @unicodeVersion 5.2
 * @fields 4
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:09.755Z
 */
export interface NormalizationCorrections {
  /**
   * Unicode code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/NormalizationCorrections.txt#L33
   */
  field_0: string;

  /**
   * Original (erroneous) decomposition.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/NormalizationCorrections.txt#L34
   */
  field_1: string;

  /**
   * Corrected decomposition.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/NormalizationCorrections.txt#L35
   */
  field_2: string;

  /**
   * Version of Unicode for which the correction was entered into UnicodeData.txt, in n.n.n format.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/NormalizationCorrections.txt#L36-L37
   */
  field_3: string;
}

export const NORMALIZATION_CORRECTIONS_FIELDS = ["field_0", "field_1", "field_2", "field_3"];
