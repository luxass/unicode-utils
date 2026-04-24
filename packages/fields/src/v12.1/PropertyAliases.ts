/**
 * Parsed row from `PropertyAliases.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/PropertyAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 12.1
 * @fields 3
 * @confidence 0.50
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:52:15.657Z
 */
export interface PropertyAliases {
  /**
   * Short name (alias) for the property or property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  short_name: string;

  /**
   * Long (formal) name for the property or property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  long_name: string;

  /**
   * Additional aliases beyond the short and long names.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  additional_aliases: Array<string>;
}

export const PROPERTY_ALIASES_FIELDS = ["short_name", "long_name", "additional_aliases"];
