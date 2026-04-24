/**
 * Parsed row from `PropertyValueAliases-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/PropertyValueAliases-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/PropertyValueAliases-4.0.0.txt#L17-L22
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/PropertyValueAliases-4.0.0.txt#L24
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/PropertyValueAliases-4.0.0.txt#L26
 *
 * @unicodeVersion 4
 * @fields 5
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:24.004Z
 */
export interface PropertyValueAliases400 {
  /**
   * The property for which that property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/PropertyValueAliases-4.0.0.txt#L17-L20
   */
  property: string;

  /**
   * The abbreviated name. If there is no abbreviated name available, the field is marked with 'n/a'.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/PropertyValueAliases-4.0.0.txt#L21-L22
   */
  abbrev_name: "n/a" | string;

  /**
   * The long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/PropertyValueAliases-4.0.0.txt#L24
   */
  long_name: string;

  /**
   * The numeric abbreviated name for ccc.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/PropertyValueAliases-4.0.0.txt#L26
   */
  abbrev_name_ccc: string;

  /**
   * In the case of ccc, there are 4 fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/PropertyValueAliases-4.0.0.txt#L26
   */
  long_name_ccc: string;
}

export const PROPERTY_VALUE_ALIASES_400_FIELDS = ["property", "abbrev_name", "long_name", "abbrev_name_ccc", "long_name_ccc"];
