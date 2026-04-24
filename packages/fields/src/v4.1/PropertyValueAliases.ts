/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/PropertyValueAliases.txt#L22
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/PropertyValueAliases.txt#L25
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/PropertyValueAliases.txt#L28
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/PropertyValueAliases.txt#L30-L31
 *
 * @unicodeVersion 4.1
 * @fields 5
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:31:15.290Z
 */
export interface PropertyValueAliases {
  /**
   * The property for which that property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/PropertyValueAliases.txt#L22
   */
  property: string;

  /**
   * An abbreviated name. If there is no abbreviated name available, the field is marked with "n/a".
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/PropertyValueAliases.txt#L25
   */
  abbreviated_name: string;

  /**
   * A long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/PropertyValueAliases.txt#L28
   */
  long_name: string;

  /**
   * For ccc, the second field is numeric, third is abbreviated.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/PropertyValueAliases.txt#L30-L31
   */
  abbreviated_name_ccc: string;

  /**
   * For ccc, the fourth is long.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/PropertyValueAliases.txt#L31
   */
  long_name_ccc: string;
}

export const PROPERTY_VALUE_ALIASES_FIELDS = [
  "property",
  "abbreviated_name",
  "long_name",
  "abbreviated_name_ccc",
  "long_name_ccc",
];
