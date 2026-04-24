/**
 * Parsed row from `NameAliases.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/NameAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/NameAliases.txt#L47-L53
 *
 * @unicodeVersion 11
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:24:07.048Z
 */
export interface NameAliases {
  /**
   * Code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/NameAliases.txt#L47-L51
   */
  code_point: string;

  /**
   * Alias.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/NameAliases.txt#L47-L51
   */
  alias: string;

  /**
   * Type.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/NameAliases.txt#L47-L53
   */
  type: "correction" | "control" | "alternate" | "figment" | "abbreviation";
}

export const NAME_ALIASES_FIELDS = ["code_point", "alias", "type"];
