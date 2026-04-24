/**
 * Parsed row from `JurchenSources.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/JurchenSources.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/JurchenSources.txt#L20-L22
 *
 * @unicodeVersion 18
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:17:10.289Z
 */
export interface JurchenSources {
  /**
   * the Jurchen code point value in U+ format
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/JurchenSources.txt#L20
   */
  field_0: string;

  /**
   * a tag indicating the type of information in the third field
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/JurchenSources.txt#L21
   */
  field_1: string;

  /**
   * the value (in UTF-8)
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/JurchenSources.txt#L22
   */
  field_2: string;
}

export const JURCHEN_SOURCES_FIELDS = ["field_0", "field_1", "field_2"];
