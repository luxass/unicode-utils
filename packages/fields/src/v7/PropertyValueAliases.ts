/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/PropertyValueAliases.txt#L21-L22
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/PropertyValueAliases.txt#L24
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/PropertyValueAliases.txt#L26
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/PropertyValueAliases.txt#L31
 *
 * @unicodeVersion 7
 * @fields 4
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:21.322Z
 */
export interface PropertyValueAliases {
  /**
   * First field: The property for which that property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/PropertyValueAliases.txt#L21-L22
   */
  property: string;

  /**
   * Second field: An abbreviated name.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/PropertyValueAliases.txt#L24
   */
  abbreviated_name: string;

  /**
   * Third field: A long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/PropertyValueAliases.txt#L26
   */
  long_name: string;

  /**
   * Other aliases may be listed in additional fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/PropertyValueAliases.txt#L31
   */
  additional_aliases: string[];
}

export const PROPERTY_VALUE_ALIASES_FIELDS = ["property", "abbreviated_name", "long_name", "additional_aliases"];
