/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/PropertyValueAliases.txt#L22-L31
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/PropertyValueAliases.txt#L35
 *
 * @unicodeVersion 17
 * @fields 4
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:50:52.864Z
 */
export interface PropertyValueAliases {
  /**
   * The first field describes the property for which that property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/PropertyValueAliases.txt#L22-L24
   */
  property: string;

  /**
   * The second field is the short name for the property value. It is typically an abbreviation, but in a number of cases it is simply a duplicate of the long name in the third field.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/PropertyValueAliases.txt#L25-L28
   */
  short_name: string;

  /**
   * The third field is the long name for the property value, typically the formal name used in documentation about the property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/PropertyValueAliases.txt#L29-L31
   */
  long_name: string;

  /**
   * Other aliases may be listed in additional fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/PropertyValueAliases.txt#L35
   */
  additional_alias: string[];
}

export const PROPERTY_VALUE_ALIASES_FIELDS = [
  "property",
  "short_name",
  "long_name",
  "additional_alias",
];
