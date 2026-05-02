/**
 * Parsed row from `extracted/DerivedName.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/extracted/DerivedName.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/extracted/DerivedName.txt#L22-L23
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:48:57.831Z
 */
export interface ExtractedDerivedName {
  /**
   * Unicode code point value or range of code point values.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/extracted/DerivedName.txt#L22-L23
   */
  codepoint: string;

  /**
   * Name property value or pattern.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/extracted/DerivedName.txt#L23
   */
  name: string;
}

export const EXTRACTED_DERIVED_NAME_FIELDS = ["codepoint", "name"];
