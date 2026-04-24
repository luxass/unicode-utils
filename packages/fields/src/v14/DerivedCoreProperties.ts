/**
 * Parsed row from `DerivedCoreProperties.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/DerivedCoreProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/DerivedCoreProperties.txt#L13
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 14
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:20:00.689Z
 */
export interface DerivedCoreProperties {
  /**
   * Unicode code point or range (e.g. 0000..10FFFF).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Math derived property value: Y if character is in Sm + Other_Math, otherwise N.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  value: "Y" | "N";

  /**
   * Comment indicating derivation source (e.g. Generated from: Sm + Other_Math).
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/DerivedCoreProperties.txt#L13
   */
  source_comment: string;
}

export const DERIVED_CORE_PROPERTIES_FIELDS = ["code_point_range", "value", "source_comment"];
