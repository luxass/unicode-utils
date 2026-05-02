/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/PropertyValueAliases.txt#L22
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/PropertyValueAliases.txt#L25-L26
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/PropertyValueAliases.txt#L28
 *
 * @unicodeVersion 5.2
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:52:08.237Z
 */
export interface PropertyValueAliases {
  /**
   * The property for which that property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/PropertyValueAliases.txt#L22
   */
  property: string;

  /**
   * An abbreviated name. If there is no abbreviated name available, the field is marked with "n/a".
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/PropertyValueAliases.txt#L25-L26
   */
  abbreviated_name: "n/a";

  /**
   * A long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/PropertyValueAliases.txt#L28
   */
  long_name: string;
}

export const PROPERTY_VALUE_ALIASES_FIELDS = ["property", "abbreviated_name", "long_name"];
