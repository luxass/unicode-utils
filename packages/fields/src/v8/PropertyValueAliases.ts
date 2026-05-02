/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyValueAliases.txt#L21-L22
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyValueAliases.txt#L24
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyValueAliases.txt#L26
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyValueAliases.txt#L28
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyValueAliases.txt#L31
 *
 * @unicodeVersion 8
 * @fields 6
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:51:56.388Z
 */
export interface PropertyValueAliases {
  /**
   * The property for which that property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyValueAliases.txt#L21-L22
   */
  property: string;

  /**
   * Abbreviated name.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyValueAliases.txt#L24
   */
  abbreviated_name: string;

  /**
   * Long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyValueAliases.txt#L26
   */
  long_name: string;

  /**
   * In the case of ccc, there are 4 fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyValueAliases.txt#L28
   */
  ccc_abbreviated_name: string;

  /**
   * In the case of ccc, there are 4 fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyValueAliases.txt#L28
   */
  ccc_long_name: string;

  /**
   * Other aliases may be listed in additional fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyValueAliases.txt#L31
   */
  additional_aliases: string[];
}

export const PROPERTY_VALUE_ALIASES_FIELDS = ["property", "abbreviated_name", "long_name", "ccc_abbreviated_name", "ccc_long_name", "additional_aliases"];
