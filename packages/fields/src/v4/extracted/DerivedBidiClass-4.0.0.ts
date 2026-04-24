/**
 * Parsed row from `extracted/DerivedBidiClass-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/extracted/DerivedBidiClass-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedBidiClass-4.0.0.txt#L13-L16
 *
 * @unicodeVersion 4
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:30:18.473Z
 */
export interface ExtractedDerivedBidiClass400 {
  /**
   * Code point or range explicitly listed with non-default Bidi_Class.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedBidiClass-4.0.0.txt#L13-L16
   */
  code_point_range: string;

  /**
   * Derived Bidi_Class value (defaults to L for unlisted code points).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedBidiClass-4.0.0.txt#L13-L16
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

export const EXTRACTED_DERIVED_BIDI_CLASS_400_FIELDS = ["code_point_range", "bidi_class"];
