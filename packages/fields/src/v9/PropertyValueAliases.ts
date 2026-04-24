/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/PropertyValueAliases.txt#L22
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/PropertyValueAliases.txt#L25
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/PropertyValueAliases.txt#L27
 *
 * @unicodeVersion 9
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:11.286Z
 */
export interface PropertyValueAliases {
  /**
   * The property for which the property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/PropertyValueAliases.txt#L22
   */
  property: string;

  /**
   * Abbreviated name.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/PropertyValueAliases.txt#L25
   */
  abbrev_name: string;

  /**
   * Long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/PropertyValueAliases.txt#L27
   */
  long_name: string;
}

export const PROPERTY_VALUE_ALIASES_FIELDS = ["property", "abbrev_name", "long_name"];
