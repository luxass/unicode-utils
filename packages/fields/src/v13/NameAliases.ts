/**
 * Parsed row from `NameAliases.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/NameAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/NameAliases.txt#L47-L54
 *
 * @unicodeVersion 13
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:45:28.340Z
 */
export interface NameAliases {
  /**
   * Unicode code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/NameAliases.txt#L47-L51
   */
  code_point: string;

  /**
   * Each line has three fields, as described here: First field: Code point Second field: Alias Third field: Type.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/NameAliases.txt#L47-L51
   */
  alias: string;

  /**
   * Type label of the alias (case-insensitive).
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/NameAliases.txt#L47-L54
   */
  type: "correction" | "control" | "alternate" | "figment" | "abbreviation";
}

export const NAME_ALIASES_FIELDS = ["code_point", "alias", "type"];
