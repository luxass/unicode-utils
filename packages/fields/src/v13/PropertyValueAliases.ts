/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/PropertyValueAliases.txt#L22-L27
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/PropertyValueAliases.txt#L29-L30
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/PropertyValueAliases.txt#L32-L33
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/PropertyValueAliases.txt#L35
 *
 * @unicodeVersion 13
 * @fields 6
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:53.061Z
 */
export interface PropertyValueAliases {
  /**
   * The property for which the property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/PropertyValueAliases.txt#L22-L24
   */
  property: string;

  /**
   * The short name for the property value. It is typically an abbreviation, but in a number of cases it is simply a duplicate of the long name in the third field.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/PropertyValueAliases.txt#L25-L27
   */
  short_name: string;

  /**
   * The long name for the property value, typically the formal name used in documentation about the property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/PropertyValueAliases.txt#L29-L30
   */
  long_name: string;

  /**
   * For Canonical_Combining_Class (ccc), the second field is numeric, the third is the short name.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/PropertyValueAliases.txt#L32-L33
   */
  ccc_short_name: string;

  /**
   * For Canonical_Combining_Class (ccc), the fourth is the long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/PropertyValueAliases.txt#L32-L33
   */
  ccc_long_name: string;

  /**
   * Other aliases may be listed in additional fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/PropertyValueAliases.txt#L35
   */
  additional_aliases: string[];
}

export const PROPERTY_VALUE_ALIASES_FIELDS = [
  "property",
  "short_name",
  "long_name",
  "ccc_short_name",
  "ccc_long_name",
  "additional_aliases",
];
