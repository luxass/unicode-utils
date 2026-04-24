/**
 * Parsed row from `DerivedEastAsianWidth-3.1.0.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/DerivedEastAsianWidth-3.1.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedEastAsianWidth-3.1.0.txt#L13-L14
 *
 * @unicodeVersion 3.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:36:45.771Z
 */
export interface DerivedEastAsianWidth310 {
  /**
   * Unicode code point range listed in EastAsianWidth.txt.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedEastAsianWidth-3.1.0.txt#L13-L14
   */
  range: string;

  /**
   * East Asian Width property value from field 1 of EastAsianWidth.txt.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedEastAsianWidth-3.1.0.txt#L13-L14
   */
  east_asian_width: "F" | "H" | "W" | "Na" | "A" | "N" | (string & {});
}

export const DERIVED_EAST_ASIAN_WIDTH_310_FIELDS = ["range", "east_asian_width"];
