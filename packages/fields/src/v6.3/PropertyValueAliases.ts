/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/PropertyValueAliases.txt#L21-L26
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/PropertyValueAliases.txt#L31
 *
 * @unicodeVersion 6.3
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:32:13.353Z
 */
export interface PropertyValueAliases {
  /**
   * The property for which the property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/PropertyValueAliases.txt#L21-L23
   */
  property: string;

  /**
   * Abbreviated name.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/PropertyValueAliases.txt#L24-L25
   */
  abbreviated_name: string;

  /**
   * Long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/PropertyValueAliases.txt#L26
   */
  long_name: string;

  /**
   * Additional aliases beyond the preferred ones.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/PropertyValueAliases.txt#L31
   */
  additional_aliases: string[];
}

export const PROPERTY_VALUE_ALIASES_FIELDS = [
  "property",
  "abbreviated_name",
  "long_name",
  "additional_aliases",
];
