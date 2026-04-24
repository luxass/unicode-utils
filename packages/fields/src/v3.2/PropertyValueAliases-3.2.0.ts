/**
 * Parsed row from `PropertyValueAliases-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/PropertyValueAliases-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/PropertyValueAliases-3.2.0.txt#L19-L21
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/PropertyValueAliases-3.2.0.txt#L23-L24
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/PropertyValueAliases-3.2.0.txt#L26
 *
 * @unicodeVersion 3.2
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:35.020Z
 */
export interface PropertyValueAliases320 {
  /**
   * The property for which that property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/PropertyValueAliases-3.2.0.txt#L19-L21
   */
  property: string;

  /**
   * The abbreviated name. If there is no abbreviated name available, the field is marked with "n/a".
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/PropertyValueAliases-3.2.0.txt#L23-L24
   */
  abbrev_name: "n/a" | string;

  /**
   * The long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/PropertyValueAliases-3.2.0.txt#L26
   */
  long_name: string;
}

export const PROPERTY_VALUE_ALIASES_320_FIELDS = ["property", "abbrev_name", "long_name"];
