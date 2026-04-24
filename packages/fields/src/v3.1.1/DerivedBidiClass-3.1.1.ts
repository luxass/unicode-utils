/**
 * Parsed row from `DerivedBidiClass-3.1.1.txt` (Unicode 3.1.1).
 *
 * @see https://unicode.org/Public/3.1-Update1/DerivedBidiClass-3.1.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update1/DerivedBidiClass-3.1.1.txt#L13-L14
 *
 * @unicodeVersion 3.1.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:47.799Z
 */
export interface DerivedBidiClass311 {
  /**
   * Bidi Class (listing UnicodeData.txt, field 4: see UnicodeData.html) ================================================.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/DerivedBidiClass-3.1.1.txt#L13-L14
   */
  codepoint_range: string;

  /**
   * Derived Bidi Class from UnicodeData.txt field 4.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/DerivedBidiClass-3.1.1.txt#L13-L14
   */
  bidi_class:
    | "L"
    | "R"
    | "AL"
    | "EN"
    | "ES"
    | "ET"
    | "AN"
    | "CS"
    | "NSM"
    | "BN"
    | "B"
    | "S"
    | "WS"
    | "ON"
    | (string & {});
}

export const DERIVED_BIDI_CLASS_311_FIELDS = ["codepoint_range", "bidi_class"];
