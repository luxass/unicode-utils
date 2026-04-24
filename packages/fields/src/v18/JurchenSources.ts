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
 * @generated 2026-04-23T18:49:13.804Z
 */
export interface JurchenSources {
  /**
   * the Jurchen code point value in U+ format
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/JurchenSources.txt#L20
   */
  code_point: string;

  /**
   * a tag indicating the type of information in the third field
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/JurchenSources.txt#L21
   */
  tag: string;

  /**
   * the value (in UTF-8)
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/JurchenSources.txt#L22
   */
  value: string;
}

export const JURCHEN_SOURCES_FIELDS = ["code_point", "tag", "value"];
