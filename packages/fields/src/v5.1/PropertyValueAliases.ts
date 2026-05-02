/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/PropertyValueAliases.txt#L22
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/PropertyValueAliases.txt#L25
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/PropertyValueAliases.txt#L28
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/PropertyValueAliases.txt#L30-L31
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/PropertyValueAliases.txt#L33
 *
 * @unicodeVersion 5.1
 * @fields 6
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:53:42.354Z
 */
export interface PropertyValueAliases {
  /**
   * The property for which the property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/PropertyValueAliases.txt#L22
   */
  property: string;

  /**
   * Abbreviated name, or 'n/a' if none available.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/PropertyValueAliases.txt#L25
   */
  abbreviated_name: "n/a" | (string & {});

  /**
   * Long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/PropertyValueAliases.txt#L28
   */
  long_name: string;

  /**
   * In the case of ccc, there are 4 fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/PropertyValueAliases.txt#L30-L31
   */
  abbreviated_name_ccc: string;

  /**
   * In the case of ccc, there are 4 fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/PropertyValueAliases.txt#L30-L31
   */
  long_name_ccc: string;

  /**
   * Other aliases may be listed in additional fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/PropertyValueAliases.txt#L33
   */
  additional_aliases: string[];
}

export const PROPERTY_VALUE_ALIASES_FIELDS = ["property", "abbreviated_name", "long_name", "abbreviated_name_ccc", "long_name_ccc", "additional_aliases"];
