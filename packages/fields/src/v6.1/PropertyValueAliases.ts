/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/PropertyValueAliases.txt#L21-L22
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/PropertyValueAliases.txt#L24
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/PropertyValueAliases.txt#L26
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/PropertyValueAliases.txt#L31
 *
 * @unicodeVersion 6.1
 * @fields 4
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:28:23.489Z
 */
export interface PropertyValueAliases {
  /**
   * The property for which the property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/PropertyValueAliases.txt#L21-L22
   */
  property: string;

  /**
   * Abbreviated name for the property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/PropertyValueAliases.txt#L24
   */
  abbreviated_name: string;

  /**
   * Long name for the property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/PropertyValueAliases.txt#L26
   */
  long_name: string;

  /**
   * Additional aliases listed after the preferred ones.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/PropertyValueAliases.txt#L31
   */
  additional_aliases: string[];
}

export const PROPERTY_VALUE_ALIASES_FIELDS = [
  "property",
  "abbreviated_name",
  "long_name",
  "additional_aliases",
];
