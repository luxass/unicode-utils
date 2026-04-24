/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyValueAliases.txt#L21-L27
 *
 * @unicodeVersion 8
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:25:50.361Z
 */
export interface PropertyValueAliases {
  /**
   * The property for which that property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyValueAliases.txt#L21-L23
   */
  property: string;

  /**
   * An abbreviated name.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyValueAliases.txt#L24-L25
   */
  abbrev_name: string;

  /**
   * A long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyValueAliases.txt#L26-L27
   */
  long_name: string;
}

export const PROPERTY_VALUE_ALIASES_FIELDS = ["property", "abbrev_name", "long_name"];
