/**
 * Parsed row from `NameAliases.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/NameAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/NameAliases.txt#L18-L51
 *
 * @unicodeVersion 10
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:22:35.253Z
 */
export interface NameAliases {
  /**
   * Unicode code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/NameAliases.txt#L47-L51
   */
  code_point: string;

  /**
   * Each line has three fields, as described here: First field: Code point Second field: Alias Third field: Type.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/NameAliases.txt#L47-L51
   */
  alias: string;

  /**
   * Type label of the alias.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/NameAliases.txt#L18-L51
   */
  type: "correction" | "control" | "alternate" | "figment" | "abbreviation";
}

export const NAME_ALIASES_FIELDS = ["code_point", "alias", "type"];
