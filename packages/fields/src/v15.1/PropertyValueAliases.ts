/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 15.1
 * @fields 4
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:50:13.469Z
 */
export interface PropertyValueAliases {
  /**
   * Name of the property for which the alias applies.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: string;

  /**
   * Short alias for the property value (numeric string for Canonical_Combining_Class).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  short_alias: string;

  /**
   * Long name alias for the property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  long_alias: string;

  /**
   * Zero or more additional aliases.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  additional_aliases: string[];
}

export const PROPERTY_VALUE_ALIASES_FIELDS = ["property", "short_alias", "long_alias", "additional_aliases"];
