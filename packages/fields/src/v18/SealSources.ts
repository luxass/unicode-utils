/**
 * Parsed row from `SealSources.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/SealSources.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/SealSources.txt#L6-L14
 *
 * @unicodeVersion 18
 * @fields 6
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:43.857Z
 */
export interface SealSources {
  /**
   * Unified THX source, takes values in the form TH-ddddd, TH-Xddd, or TH-Yddd.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/SealSources.txt#L6
   */
  k_seal_thx_src: "TH-ddddd" | "TH-Xddd" | "TH-Yddd" | (string & {});

  /**
   * CCZ source, takes values in the form C-ddddd.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/SealSources.txt#L7
   */
  k_seal_ccz_src: "C-ddddd" | (string & {});

  /**
   * QJZ source, takes values in the form K-ddddd.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/SealSources.txt#L8
   */
  k_seal_qjz_src: "K-ddddd" | (string & {});

  /**
   * DYC source, takes values in the form D-ddddd.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/SealSources.txt#L9
   */
  k_seal_dyc_src: "D-ddddd" | (string & {});

  /**
   * Modern CJK equivalent in hexadecimal format.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/SealSources.txt#L10
   */
  k_seal_mcjk: string;

  /**
   * Radical made of the number followed by a dot and its encoded value; radical entry detected by code point matching radical value and being first in group; rare cases may have several space-separated values.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/SealSources.txt#L11-L14
   */
  k_seal_rad: string;
}

export const SEAL_SOURCES_FIELDS = ["k_seal_thx_src", "k_seal_ccz_src", "k_seal_qjz_src", "k_seal_dyc_src", "k_seal_mcjk", "k_seal_rad"];
