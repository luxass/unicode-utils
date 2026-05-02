/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/PropertyValueAliases.txt#L22-L28
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/PropertyValueAliases.txt#L30-L31
 *
 * @unicodeVersion 4.1
 * @fields 5
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:55:58.929Z
 */
export interface PropertyValueAliases {
  /**
   * The property for which the property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/PropertyValueAliases.txt#L22-L24
   */
  property: string;

  /**
   * Abbreviated name, or 'n/a' if none available.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/PropertyValueAliases.txt#L25-L27
   */
  abbrev_name: "n/a" | (string & {});

  /**
   * Long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/PropertyValueAliases.txt#L28
   */
  long_name: string;

  /**
   * Numeric value for ccc (Canonical_Combining_Class).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/PropertyValueAliases.txt#L30-L31
   */
  abbrev_name_ccc: number;

  /**
   * Long name for ccc.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/PropertyValueAliases.txt#L30-L31
   */
  long_name_ccc: string;
}

export const PROPERTY_VALUE_ALIASES_FIELDS = ["property", "abbrev_name", "long_name", "abbrev_name_ccc", "long_name_ccc"];
