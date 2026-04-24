/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/PropertyValueAliases.txt#L22-L27
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/PropertyValueAliases.txt#L29-L30
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/PropertyValueAliases.txt#L35
 *
 * @unicodeVersion 18
 * @fields 4
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:54.402Z
 */
export interface PropertyValueAliases {
  /**
   * First field describes the property for which that property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/PropertyValueAliases.txt#L22-L24
   */
  property: string;

  /**
   * Second field is the short name for the property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/PropertyValueAliases.txt#L25-L27
   */
  short_name: string;

  /**
   * Third field is the long name for the property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/PropertyValueAliases.txt#L29-L30
   */
  long_name: string;

  /**
   * Other aliases may be listed in additional fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/PropertyValueAliases.txt#L35
   */
  additional_aliases: Array<string>;
}

export const PROPERTY_VALUE_ALIASES_FIELDS = [
  "property",
  "short_name",
  "long_name",
  "additional_aliases",
];
