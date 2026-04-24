/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/PropertyValueAliases.txt#L21-L26
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/PropertyValueAliases.txt#L28
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/PropertyValueAliases.txt#L31
 *
 * @unicodeVersion 7
 * @fields 6
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:25:45.615Z
 */
export interface PropertyValueAliases {
  /**
   * The property for which the property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/PropertyValueAliases.txt#L21-L23
   */
  property: string;

  /**
   * Abbreviated name.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/PropertyValueAliases.txt#L24-L25
   */
  abbreviated_name: string;

  /**
   * Long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/PropertyValueAliases.txt#L26
   */
  long_name: string;

  /**
   * Numeric value for ccc (combining class).
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/PropertyValueAliases.txt#L28
   */
  ccc_abbreviated_name: string;

  /**
   * In the case of ccc, there are 4 fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/PropertyValueAliases.txt#L28
   */
  ccc_long_name: string;

  /**
   * Other aliases may be listed in additional fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/PropertyValueAliases.txt#L31
   */
  additional_aliases: string[];
}

export const PROPERTY_VALUE_ALIASES_FIELDS = [
  "property",
  "abbreviated_name",
  "long_name",
  "ccc_abbreviated_name",
  "ccc_long_name",
  "additional_aliases",
];
