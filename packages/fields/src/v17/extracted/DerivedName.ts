/**
 * Parsed row from `extracted/DerivedName.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/extracted/DerivedName.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedName.txt#L22-L23
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:16:26.182Z
 */
export interface ExtractedDerivedName {
  /**
   * Unicode code point value or range of code point values.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedName.txt#L22
   */
  codepoint: string;

  /**
   * Name property value or pattern.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedName.txt#L23
   */
  name: string;
}

export const EXTRACTED_DERIVED_NAME_FIELDS = ["codepoint", "name"];
